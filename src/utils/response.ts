// ============================================================
// Shared API response helpers
// ============================================================

import { Response } from 'express';

export const ok = (res: Response, data: unknown, status = 200) =>
    res.status(status).json({ success: true, data });

export const created = (res: Response, data: unknown) =>
    res.status(201).json({ success: true, data });

export const fail = (res: Response, message: string, status = 400, code?: string) =>
    res.status(status).json({ success: false, error: { code: code || 'ERROR', message } });

export const serverError = (res: Response, err: unknown) => {
    console.error('[SERVER ERROR]', err);
    return res.status(500).json({ success: false, error: { code: 'INTERNAL_ERROR', message: 'Internal server error' } });
};

// ============================================================
// Pagination helper
// ============================================================

export interface PaginationParams {
    page: number;
    limit: number;
    skip: number;
}

export const getPagination = (query: Record<string, unknown>): PaginationParams => {
    const page = Math.max(1, parseInt(String(query['page'] || '1'), 10));
    const limit = Math.min(100, Math.max(1, parseInt(String(query['limit'] || '20'), 10)));
    return { page, limit, skip: (page - 1) * limit };
};

export const paginatedResponse = (data: unknown[], total: number, pagination: PaginationParams) => ({
    items: data,
    pagination: {
        total,
        page: pagination.page,
        limit: pagination.limit,
        totalPages: Math.ceil(total / pagination.limit),
    },
});

// ============================================================
// Lead ref generator
// ============================================================

export const generateLeadRef = (): string => {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `TF-${year}-${rand}`;
};
