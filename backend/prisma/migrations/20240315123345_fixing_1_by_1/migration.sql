/*
  Warnings:

  - The `fruit_color` column on the `Plant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "fruit_color",
ADD COLUMN     "fruit_color" TEXT[];
