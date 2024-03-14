/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `description` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Plant" DROP CONSTRAINT "Plant_ownerId_fkey";

-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "ownerId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
