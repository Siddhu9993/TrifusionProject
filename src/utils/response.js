"use strict";
// ============================================================
// Shared API response helpers
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLeadRef = exports.paginatedResponse = exports.getPagination = exports.serverError = exports.fail = exports.created = exports.ok = void 0;
const ok = (res, data, status = 200) => res.status(status).json({ success: true, data });
exports.ok = ok;
const created = (res, data) => res.status(201).json({ success: true, data });
exports.created = created;
const fail = (res, message, status = 400, code) => res.status(status).json({ success: false, error: { code: code || 'ERROR', message } });
exports.fail = fail;
const serverError = (res, err) => {
    console.error('[SERVER ERROR]', err);
    return res.status(500).json({ success: false, error: { code: 'INTERNAL_ERROR', message: 'Internal server error' } });
};
exports.serverError = serverError;
const getPagination = (query) => {
    const page = Math.max(1, parseInt(String(query['page'] || '1'), 10));
    const limit = Math.min(100, Math.max(1, parseInt(String(query['limit'] || '20'), 10)));
    return { page, limit, skip: (page - 1) * limit };
};
exports.getPagination = getPagination;
const paginatedResponse = (data, total, pagination) => ({
    items: data,
    pagination: {
        total,
        page: pagination.page,
        limit: pagination.limit,
        totalPages: Math.ceil(total / pagination.limit),
    },
});
exports.paginatedResponse = paginatedResponse;
// ============================================================
// Lead ref generator
// ============================================================
const generateLeadRef = () => {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `TF-${year}-${rand}`;
};
exports.generateLeadRef = generateLeadRef;
//# sourceMappingURL=response.js.map