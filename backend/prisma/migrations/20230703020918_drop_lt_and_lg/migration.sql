/*
  Warnings:

  - You are about to drop the column `latitude` on the `objects` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `objects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "objects" DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "local_founds" TEXT NOT NULL DEFAULT 'Rua comendador jose correia';
