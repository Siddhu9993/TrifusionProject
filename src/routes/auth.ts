import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { prisma } from '../utils/prisma.js';
import { ok, fail, serverError } from '../utils/response.js';
import rateLimit from 'express-rate-limit';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-production';

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, error: { code: 'RATE_LIMITED', message: 'Too many login attempts. Try again later.' } },
});

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

// POST /api/auth/login
router.post('/login', loginLimiter, async (req, res) => {
    try {
        const parsed = loginSchema.safeParse(req.body);
        if (!parsed.success) return fail(res, parsed.error.issues[0]?.message || 'Validation error');

        const { email, password } = parsed.data;
        
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@trifusiontechnology.in';
        const adminPassword = process.env.ADMIN_PASSWORD || 'ChangeMe@2024!';
        
        if (email !== adminEmail || password !== adminPassword) {
            return fail(res, 'Invalid email or password', 401, 'INVALID_CREDENTIALS');
        }

        const user = { id: 'admin-1', email: adminEmail, name: process.env.ADMIN_NAME || 'Trifusion Admin', role: 'ADMIN' };
        const token = jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
        return ok(res, { token, user });
    } catch (err) {
        return serverError(res, err);
    }
});

// POST /api/auth/verify  — verify token validity
router.post('/verify', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];
        if (!token) return fail(res, 'No token provided', 401, 'NO_TOKEN');

        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: string; email: string; name: string };
        const user = { id: decoded.id, email: decoded.email, name: decoded.name, role: decoded.role };

        return ok(res, { user });
    } catch {
        return fail(res, 'Invalid or expired token', 401, 'INVALID_TOKEN');
    }
});

export default router;
