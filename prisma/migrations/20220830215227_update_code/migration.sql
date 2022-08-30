/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "product_code_key" ON "product"("code");
