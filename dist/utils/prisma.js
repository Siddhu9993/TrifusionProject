"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const mockModel = {
    findMany: async () => [],
    findUnique: async () => null,
    count: async () => 0,
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({}),
    findFirst: async () => null,
};
// Mock PrismaClient to prevent build errors after removing the SQLite database.
exports.prisma = new Proxy({}, {
    get: (target, prop) => {
        if (prop === '$connect' || prop === '$disconnect')
            return async () => { };
        if (prop === '$transaction')
            return async (cb) => cb(exports.prisma);
        return mockModel;
    }
});
//# sourceMappingURL=prisma.js.map