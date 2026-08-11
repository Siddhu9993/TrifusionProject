// ============================================================
// Trifusion Technology LLP — Google Sheets Service
// Server-side ONLY. Never import this in frontend code.
// ============================================================

import { google, sheets_v4 } from 'googleapis';

// ── Configuration ────────────────────────────────────────────
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const CLIENT_EMAIL   = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY    = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');

// ── Sheet / column layout ────────────────────────────────────
export const LEADS_SHEET = 'Leads';

export const LEADS_COLUMNS = [
    'ID',
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'Company',
    'Service Interest',
    'Budget Range',
    'Preferred Contact',
    'Message',
    'Source',
    'Status',
    'IP Address',
] as const;

export type LeadRow = {
    id: string;
    timestamp: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    serviceInterest?: string;
    budgetRange?: string;
    preferredContact?: string;
    message: string;
    source: string;
    status: string;
    ipAddress?: string;
};

// ── Auth singleton ───────────────────────────────────────────
function getAuth() {
    if (!CLIENT_EMAIL || !PRIVATE_KEY) {
        throw new Error('Google Sheets credentials are not configured. Check GOOGLE_SHEETS_CLIENT_EMAIL and GOOGLE_SHEETS_PRIVATE_KEY environment variables.');
    }

    return new google.auth.GoogleAuth({
        credentials: {
            client_email: CLIENT_EMAIL,
            private_key:  PRIVATE_KEY,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
}

async function getSheetsClient(): Promise<sheets_v4.Sheets> {
    const auth = getAuth();
    const authClient = await auth.getClient();
    return google.sheets({ version: 'v4', auth: authClient as any });
}

// ── Create sheet tab if it doesn't exist ─────────────────────
async function ensureSheetExists(sheets: sheets_v4.Sheets, sheetName: string): Promise<void> {
    if (!SPREADSHEET_ID) throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');

    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const existingSheets = spreadsheet.data.sheets || [];
    const exists = existingSheets.some(s => s.properties?.title === sheetName);

    if (!exists) {
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            requestBody: {
                requests: [{ addSheet: { properties: { title: sheetName } } }],
            },
        });
        console.log(`[Sheets] Created new sheet tab: "${sheetName}"`);
    }
}

// ── Ensure header row exists ─────────────────────────────────
export async function ensureLeadsHeader(): Promise<void> {
    if (!SPREADSHEET_ID) throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');

    const sheets = await getSheetsClient();

    // Create the Leads tab if it doesn't exist
    await ensureSheetExists(sheets, LEADS_SHEET);

    const range  = `${LEADS_SHEET}!A1:M1`;
    const res = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range });
    const existing = res.data.values?.[0];

    if (!existing || existing.length === 0) {
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range,
            valueInputOption: 'RAW',
            requestBody: { values: [Array.from(LEADS_COLUMNS)] },
        });
        console.log('[Sheets] Header row initialised in Leads sheet.');
    }
}

// ── appendRow ────────────────────────────────────────────────
export async function appendLeadRow(lead: LeadRow): Promise<void> {
    if (!SPREADSHEET_ID) throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');

    const sheets = await getSheetsClient();
    const row = [
        lead.id,
        lead.timestamp,
        lead.name,
        lead.email,
        lead.phone    || '',
        lead.company  || '',
        lead.serviceInterest  || '',
        lead.budgetRange      || '',
        lead.preferredContact || '',
        lead.message,
        lead.source,
        lead.status,
        lead.ipAddress || '',
    ];

    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${LEADS_SHEET}!A:M`,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: { values: [row] },
    });
}

// ── readRows ─────────────────────────────────────────────────
export async function readLeadRows(): Promise<Record<string, string>[]> {
    if (!SPREADSHEET_ID) throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');

    const sheets = await getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${LEADS_SHEET}!A:M`,
    });

    const rows = res.data.values || [];
    if (rows.length < 2) return []; // only header or empty

    const headers = rows[0] as string[];
    return rows.slice(1).map((row) => {
        const obj: Record<string, string> = {};
        headers.forEach((h, i) => { obj[h] = (row as string[])[i] ?? ''; });
        return obj;
    });
}

// ── findRow ──────────────────────────────────────────────────
export async function findLeadRowIndex(id: string): Promise<number> {
    if (!SPREADSHEET_ID) throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');

    const sheets = await getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${LEADS_SHEET}!A:A`,
    });

    const rows = res.data.values || [];
    for (let i = 1; i < rows.length; i++) {
        if ((rows[i] as string[])[0] === id) return i + 1; // 1-indexed, skip header
    }
    return -1;
}

// ── updateRow (status column = column L = index 12) ──────────
export async function updateLeadStatus(id: string, status: string): Promise<boolean> {
    if (!SPREADSHEET_ID) throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');

    const rowIndex = await findLeadRowIndex(id);
    if (rowIndex === -1) return false;

    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${LEADS_SHEET}!L${rowIndex}`,
        valueInputOption: 'RAW',
        requestBody: { values: [[status]] },
    });

    return true;
}

// ── testConnection ───────────────────────────────────────────
export async function testSheetsConnection(): Promise<{ ok: boolean; message: string }> {
    try {
        if (!SPREADSHEET_ID) return { ok: false, message: 'GOOGLE_SHEETS_SPREADSHEET_ID not set' };
        if (!CLIENT_EMAIL)   return { ok: false, message: 'GOOGLE_SHEETS_CLIENT_EMAIL not set' };
        if (!PRIVATE_KEY)    return { ok: false, message: 'GOOGLE_SHEETS_PRIVATE_KEY not set' };

        const sheets = await getSheetsClient();
        const res = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
            fields: 'spreadsheetId,properties.title',
        });

        return { ok: true, message: `Connected to: "${res.data.properties?.title}"` };
    } catch (err: any) {
        return { ok: false, message: err?.message || 'Unknown error' };
    }
}
