/*
  Warnings:

  - The primary key for the `locations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `locations` table. All the data in the column will be lost.
  - You are about to drop the column `localization` on the `products` table. All the data in the column will be lost.
  - Added the required column `company_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_locations" (
    "localization" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "reference" TEXT NOT NULL
);
INSERT INTO "new_locations" ("localization", "reference", "type") SELECT "localization", "reference", "type" FROM "locations";
DROP TABLE "locations";
ALTER TABLE "new_locations" RENAME TO "locations";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "company_id" INTEGER NOT NULL,
    CONSTRAINT "users_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies" ("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_users" ("created_at", "email", "id", "name", "updated_at") SELECT "created_at", "email", "id", "name", "updated_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_products" (
    "code" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_of_measurement" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,
    "company_id" INTEGER NOT NULL,
    CONSTRAINT "products_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies" ("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations" ("localization") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("code", "name", "quantity", "reference", "unit_of_measurement") SELECT "code", "name", "quantity", "reference", "unit_of_measurement" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_code_key" ON "products"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
