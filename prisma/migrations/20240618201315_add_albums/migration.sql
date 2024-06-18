-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "paypalOrderId" DROP NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);
