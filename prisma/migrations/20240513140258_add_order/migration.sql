-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "paypalOrderId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "email" TEXT NOT NULL,
    "album" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
