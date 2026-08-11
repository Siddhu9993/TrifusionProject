"use strict";
// ============================================================
// Trifusion Technology LLP — Google Sheets Service
// Server-side ONLY. Never import this in frontend code.
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEADS_COLUMNS = exports.LEADS_SHEET = void 0;
exports.ensureLeadsHeader = ensureLeadsHeader;
exports.appendLeadRow = appendLeadRow;
exports.readLeadRows = readLeadRows;
exports.findLeadRowIndex = findLeadRowIndex;
exports.updateLeadStatus = updateLeadStatus;
exports.testSheetsConnection = testSheetsConnection;
const googleapis_1 = require("googleapis");
// ── Configuration ────────────────────────────────────────────
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
// ── Sheet / column layout ────────────────────────────────────
exports.LEADS_SHEET = 'Leads';
exports.LEADS_COLUMNS = [
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
];
// ── Auth singleton ───────────────────────────────────────────
function getAuth() {
    if (!CLIENT_EMAIL || !PRIVATE_KEY) {
        throw new Error('Google Sheets credentials are not configured. Check GOOGLE_SHEETS_CLIENT_EMAIL and GOOGLE_SHEETS_PRIVATE_KEY environment variables.');
    }
    return new googleapis_1.google.auth.GoogleAuth({
        credentials: {
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
}
async function getSheetsClient() {
    const auth = getAuth();
    const authClient = await auth.getClient();
    return googleapis_1.google.sheets({ version: 'v4', auth: authClient });
}
// ── Create sheet tab if it doesn't exist ─────────────────────
async function ensureSheetExists(sheets, sheetName) {
    if (!SPREADSHEET_ID)
        throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');
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
async function ensureLeadsHeader() {
    if (!SPREADSHEET_ID)
        throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');
    const sheets = await getSheetsClient();
    // Create the Leads tab if it doesn't exist
    await ensureSheetExists(sheets, exports.LEADS_SHEET);
    const range = `${exports.LEADS_SHEET}!A1:M1`;
    const res = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range });
    const existing = res.data.values?.[0];
    if (!existing || existing.length === 0) {
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range,
            valueInputOption: 'RAW',
            requestBody: { values: [Array.from(exports.LEADS_COLUMNS)] },
        });
        console.log('[Sheets] Header row initialised in Leads sheet.');
    }
}
// ── appendRow ────────────────────────────────────────────────
async function appendLeadRow(lead) {
    if (!SPREADSHEET_ID)
        throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');
    const sheets = await getSheetsClient();
    const row = [
        lead.id,
        lead.timestamp,
        lead.name,
        lead.email,
        lead.phone || '',
        lead.company || '',
        lead.serviceInterest || '',
        lead.budgetRange || '',
        lead.preferredContact || '',
        lead.message,
        lead.source,
        lead.status,
        lead.ipAddress || '',
    ];
    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${exports.LEADS_SHEET}!A:M`,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: { values: [row] },
    });
}
// ── readRows ─────────────────────────────────────────────────
async function readLeadRows() {
    if (!SPREADSHEET_ID)
        throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');
    const sheets = await getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${exports.LEADS_SHEET}!A:M`,
    });
    const rows = res.data.values || [];
    if (rows.length < 2)
        return []; // only header or empty
    const headers = rows[0];
    return rows.slice(1).map((row) => {
        const obj = {};
        headers.forEach((h, i) => { obj[h] = row[i] ?? ''; });
        return obj;
    });
}
// ── findRow ──────────────────────────────────────────────────
async function findLeadRowIndex(id) {
    if (!SPREADSHEET_ID)
        throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');
    const sheets = await getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${exports.LEADS_SHEET}!A:A`,
    });
    const rows = res.data.values || [];
    for (let i = 1; i < rows.length; i++) {
        if (rows[i][0] === id)
            return i + 1; // 1-indexed, skip header
    }
    return -1;
}
// ── updateRow (status column = column L = index 12) ──────────
async function updateLeadStatus(id, status) {
    if (!SPREADSHEET_ID)
        throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured.');
    const rowIndex = await findLeadRowIndex(id);
    if (rowIndex === -1)
        return false;
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${exports.LEADS_SHEET}!L${rowIndex}`,
        valueInputOption: 'RAW',
        requestBody: { values: [[status]] },
    });
    return true;
}
// ── testConnection ───────────────────────────────────────────
async function testSheetsConnection() {
    try {
        if (!SPREADSHEET_ID)
            return { ok: false, message: 'GOOGLE_SHEETS_SPREADSHEET_ID not set' };
        if (!CLIENT_EMAIL)
            return { ok: false, message: 'GOOGLE_SHEETS_CLIENT_EMAIL not set' };
        if (!PRIVATE_KEY)
            return { ok: false, message: 'GOOGLE_SHEETS_PRIVATE_KEY not set' };
        const sheets = await getSheetsClient();
        const res = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
            fields: 'spreadsheetId,properties.title',
        });
        return { ok: true, message: `Connected to: "${res.data.properties?.title}"` };
    }
    catch (err) {
        return { ok: false, message: err?.message || 'Unknown error' };
    }
}
//# sourceMappingURL=googleSheets.js.map