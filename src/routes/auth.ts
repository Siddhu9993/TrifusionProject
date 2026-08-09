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
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return fail(res, 'Invalid email or password', 401, 'INVALID_CREDENTIALS');

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return fail(res, 'Invalid email or password', 401, 'INVALID_CREDENTIALS');

        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        return ok(res, { token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
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

        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: string };
        const user = await prisma.user.findUnique({ where: { id: decoded.id }, select: { id: true, email: true, name: true, role: true } });
        if (!user) return fail(res, 'User not found', 401, 'USER_NOT_FOUND');

        return ok(res, { user });
    } catch {
        return fail(res, 'Invalid or expired token', 401, 'INVALID_TOKEN');
    }
});

export default router;
