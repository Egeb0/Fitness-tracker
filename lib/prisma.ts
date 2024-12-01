// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Declare a global variable for PrismaClient to avoid multiple instances in development
declare global {
  var prisma: PrismaClient | undefined;
}

// If there is no global prisma, instantiate a new PrismaClient, else use the global one
const prisma = global.prisma || new PrismaClient();

// Only in development mode, assign the prisma instance to the global object
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
