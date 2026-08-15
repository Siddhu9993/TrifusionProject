// ============================================================
// Trifusion Technology LLP — Express API Server
// Backend API only — Next.js frontend served separately
// ============================================================

import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';

const app = express();
const PORT = process.env.API_PORT || process.env.PORT || 3001;
const rawOrigins = process.env.ALLOWED_ORIGINS || '*';
const ALLOWED_ORIGINS = rawOrigins.replace(/["']/g, '').split(',');

// ── Security Middleware ──────────────────────────────────────
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use((req, res, next) => {
    const origin = req.headers.origin;
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }
    next();
});

// ── Body Parsers ─────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ── Request Logging ──────────────────────────────────────────
app.use((req, _res, next) => {
    const ts = new Date().toISOString();
    console.log(`[${ts}] ${req.method} ${req.url}`);
    next();
});

// ── API Routes ───────────────────────────────────────────────
import authRoutes from './routes/auth.js';
import leadsRoutes from './routes/leads.js';
import servicesRoutes from './routes/services.js';
import industriesRoutes from './routes/industries.js';
import caseStudiesRoutes from './routes/caseStudies.js';
import productsRoutes from './routes/products.js';
import testimonialsRoutes from './routes/testimonials.js';
import faqsRoutes from './routes/faqs.js';
import blogRoutes from './routes/blog.js';
import careersRoutes from './routes/careers.js';
import settingsRoutes from './routes/settings.js';
import adminRoutes from './routes/admin.js';

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/industries', industriesRoutes);
app.use('/api/case-studies', caseStudiesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/faqs', faqsRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/admin', adminRoutes);

// ── Health Check ─────────────────────────────────────────────
app.get('/', (_req, res) => {
    res.json({ success: true, message: 'Welcome to Trifusion API' });
});

app.get('/api/health', (_req, res) => {
    res.json({ success: true, data: { status: 'ok', service: 'Trifusion API', time: new Date() } });
});

// ── 404 Handler ──────────────────────────────────────────────
app.use((_req, res) => {
    res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Endpoint not found' } });
});

// ── Global Error Handler ─────────────────────────────────────
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('[ERROR]', err.message);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        error: { code: err.code || 'INTERNAL_ERROR', message: status < 500 ? err.message : 'Internal server error' }
    });
});

// ── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`\n✅ Trifusion API running on http://localhost:${PORT}`);
    console.log(`   Environment: ${process.env.NODE_ENV || 'development'}\n`);
});

export default app;
