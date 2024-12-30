import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function initializeDatabase() {
  try {
    await prisma.$executeRawUnsafe('npx prisma migrate deploy');
    console.log('Migrations applied.');
  } catch (error) {
    console.error('Failed to apply migrations:', error);
  }
}

if(process.env.NODE_ENV === 'production') {
  initializeDatabase();
}
