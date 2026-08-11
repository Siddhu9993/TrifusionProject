export declare const LEADS_SHEET = "Leads";
export declare const LEADS_COLUMNS: readonly ['ID', 'Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Service Interest', 'Budget Range', 'Preferred Contact', 'Message', 'Source', 'Status', 'IP Address'];
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
export declare function ensureLeadsHeader(): Promise<void>;
export declare function appendLeadRow(lead: LeadRow): Promise<void>;
export declare function readLeadRows(): Promise<Record<string, string>[]>;
export declare function findLeadRowIndex(id: string): Promise<number>;
export declare function updateLeadStatus(id: string, status: string): Promise<boolean>;
export declare function testSheetsConnection(): Promise<{
    ok: boolean;
    message: string;
}>;
//# sourceMappingURL=googleSheets.d.ts.map