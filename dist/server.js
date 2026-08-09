"use strict";
// ============================================================
// Trifusion Technology LLP — Express API Server
// Backend API only — Next.js frontend served separately
// ============================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.API_PORT || 3001;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(',');
// ── Security Middleware ──────────────────────────────────────
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || ALLOWED_ORIGINS.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
// ── Body Parsers ─────────────────────────────────────────────
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
// ── Request Logging ──────────────────────────────────────────
app.use((req, _res, next) => {
    const ts = new Date().toISOString();
    console.log(`[${ts}] ${req.method} ${req.url}`);
    next();
});
// ── API Routes ───────────────────────────────────────────────
const auth_js_1 = __importDefault(require("./routes/auth.js"));
const leads_js_1 = __importDefault(require("./routes/leads.js"));
const services_js_1 = __importDefault(require("./routes/services.js"));
const industries_js_1 = __importDefault(require("./routes/industries.js"));
const caseStudies_js_1 = __importDefault(require("./routes/caseStudies.js"));
const products_js_1 = __importDefault(require("./routes/products.js"));
const testimonials_js_1 = __importDefault(require("./routes/testimonials.js"));
const faqs_js_1 = __importDefault(require("./routes/faqs.js"));
const blog_js_1 = __importDefault(require("./routes/blog.js"));
const careers_js_1 = __importDefault(require("./routes/careers.js"));
const settings_js_1 = __importDefault(require("./routes/settings.js"));
const admin_js_1 = __importDefault(require("./routes/admin.js"));
app.use('/api/auth', auth_js_1.default);
app.use('/api/leads', leads_js_1.default);
app.use('/api/services', services_js_1.default);
app.use('/api/industries', industries_js_1.default);
app.use('/api/case-studies', caseStudies_js_1.default);
app.use('/api/products', products_js_1.default);
app.use('/api/testimonials', testimonials_js_1.default);
app.use('/api/faqs', faqs_js_1.default);
app.use('/api/blog', blog_js_1.default);
app.use('/api/careers', careers_js_1.default);
app.use('/api/settings', settings_js_1.default);
app.use('/api/admin', admin_js_1.default);
// ── Health Check ─────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
    res.json({ success: true, data: { status: 'ok', service: 'Trifusion API', time: new Date() } });
});
// ── 404 Handler ──────────────────────────────────────────────
app.use((_req, res) => {
    res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Endpoint not found' } });
});
// ── Global Error Handler ─────────────────────────────────────
app.use((err, _req, res, _next) => {
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
exports.default = app;
//# sourceMappingURL=server.js.map