/*
  Warnings:

  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" TEXT NOT NULL DEFAULT 'authenticated';

-- DropTable
DROP TABLE "UserExample";
