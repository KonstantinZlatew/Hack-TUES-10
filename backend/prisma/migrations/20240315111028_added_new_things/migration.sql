-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "color" TEXT,
ADD COLUMN     "cycle" TEXT,
ADD COLUMN     "edible_fruit" BOOLEAN,
ADD COLUMN     "flowering_season" TEXT,
ADD COLUMN     "flowers" BOOLEAN,
ADD COLUMN     "fruit_color" TEXT,
ADD COLUMN     "fruits" BOOLEAN,
ADD COLUMN     "growth_rate" TEXT,
ADD COLUMN     "harvest_method" TEXT,
ADD COLUMN     "harvest_season" TEXT,
ADD COLUMN     "indoor" BOOLEAN,
ADD COLUMN     "invasive" BOOLEAN,
ADD COLUMN     "leaf_color" TEXT,
ADD COLUMN     "maintenance" TEXT,
ADD COLUMN     "medicinal" BOOLEAN,
ADD COLUMN     "poisonous_to_humans" BOOLEAN,
ADD COLUMN     "pruning_month" TEXT,
ADD COLUMN     "volume_water_requirement_unit" TEXT,
ADD COLUMN     "volume_water_requirement_value" DOUBLE PRECISION,
ADD COLUMN     "watering" TEXT,
ADD COLUMN     "watering_general_benchmark_unit" TEXT,
ADD COLUMN     "watering_general_benchmark_value" DOUBLE PRECISION,
ADD COLUMN     "watering_time" TEXT;
