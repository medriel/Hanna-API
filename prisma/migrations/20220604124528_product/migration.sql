-- CreateTable
CREATE TABLE "products" (
    "code" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_of_measurement" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "localization" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "products_code_key" ON "products"("code");
