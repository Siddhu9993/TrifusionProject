"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const response_js_1 = require("../utils/response.js");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-production';
const loginLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, error: { code: 'RATE_LIMITED', message: 'Too many login attempts. Try again later.' } },
});
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z.string().min(1, 'Password is required'),
});
// POST /api/auth/login
router.post('/login', loginLimiter, async (req, res) => {
    try {
        const parsed = loginSchema.safeParse(req.body);
        if (!parsed.success)
            return (0, response_js_1.fail)(res, parsed.error.issues[0]?.message || 'Validation error');
        const { email, password } = parsed.data;
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@trifusiontechnology.in';
        const adminPassword = process.env.ADMIN_PASSWORD || 'ChangeMe@2024!';
        if (email !== adminEmail || password !== adminPassword) {
            return (0, response_js_1.fail)(res, 'Invalid email or password', 401, 'INVALID_CREDENTIALS');
        }
        const user = { id: 'admin-1', email: adminEmail, name: process.env.ADMIN_NAME || 'Trifusion Admin', role: 'ADMIN' };
        const token = jsonwebtoken_1.default.sign(user, JWT_SECRET, { expiresIn: '7d' });
        return (0, response_js_1.ok)(res, { token, user });
    }
    catch (err) {
        return (0, response_js_1.serverError)(res, err);
    }
});
// POST /api/auth/verify  — verify token validity
router.post('/verify', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];
        if (!token)
            return (0, response_js_1.fail)(res, 'No token provided', 401, 'NO_TOKEN');
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        const user = { id: decoded.id, email: decoded.email, name: decoded.name, role: decoded.role };
        return (0, response_js_1.ok)(res, { user });
    }
    catch {
        return (0, response_js_1.fail)(res, 'Invalid or expired token', 401, 'INVALID_TOKEN');
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map