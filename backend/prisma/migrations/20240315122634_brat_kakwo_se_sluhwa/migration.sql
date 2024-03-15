/*
  Warnings:

  - The `pruning_month` column on the `Plant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "pruning_month",
ADD COLUMN     "pruning_month" TEXT[];
