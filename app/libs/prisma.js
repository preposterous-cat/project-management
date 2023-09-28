import { PrismaClient } from '@prisma/client';

if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
}

const prisma = globalThis.prisma;

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prisma;
}

export default prisma;