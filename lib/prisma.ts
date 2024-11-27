import { PrismaClient } from "@prisma/client";

// Add PrismaClient to the global scope in development to prevent hot-reload issues
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"], // Optional: Log database queries for debugging
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
