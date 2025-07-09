import { PrismaClient } from "@/generated/prisma";

const globalFOrPrisma = global as unknown as {
    prisma: PrismaClient
}

export const prisma = globalFOrPrisma.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalFOrPrisma.prisma = prisma

