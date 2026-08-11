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
export const prisma = new Proxy({}, {
    get: (target, prop) => {
        if (prop === '$connect' || prop === '$disconnect') return async () => {};
        if (prop === '$transaction') return async (cb: any) => cb(prisma);
        return mockModel;
    }
}) as any;
