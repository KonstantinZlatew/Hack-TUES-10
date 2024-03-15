/*
  Warnings:

  - The `leaf_color` column on the `Plant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "leaf_color",
ADD COLUMN     "leaf_color" TEXT[];
