/*
  Warnings:

  - Added the required column `bibliography` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `family` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genus` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scientific_name` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "bibliography" TEXT NOT NULL,
ADD COLUMN     "family" TEXT NOT NULL,
ADD COLUMN     "genus" TEXT NOT NULL,
ADD COLUMN     "scientific_name" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
