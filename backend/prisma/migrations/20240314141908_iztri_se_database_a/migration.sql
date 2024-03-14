-- AlterTable
ALTER TABLE "Plant" ALTER COLUMN "name" SET DEFAULT 'No common name',
ALTER COLUMN "bibliography" DROP NOT NULL,
ALTER COLUMN "family" DROP NOT NULL,
ALTER COLUMN "genus" DROP NOT NULL,
ALTER COLUMN "scientific_name" DROP NOT NULL;
