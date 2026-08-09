import { Response } from 'express';
export declare const ok: (res: Response, data: unknown, status?: number) => any;
export declare const created: (res: Response, data: unknown) => any;
export declare const fail: (res: Response, message: string, status?: number, code?: string) => any;
export declare const serverError: (res: Response, err: unknown) => any;
export interface PaginationParams {
    page: number;
    limit: number;
    skip: number;
}
export declare const getPagination: (query: Record<string, unknown>) => PaginationParams;
export declare const paginatedResponse: (data: unknown[], total: number, pagination: PaginationParams) => {
    items: unknown[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
};
export declare const generateLeadRef: () => string;
//# sourceMappingURL=response.d.ts.map