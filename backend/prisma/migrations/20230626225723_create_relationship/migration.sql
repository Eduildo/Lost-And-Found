/*
  Warnings:

  - Added the required column `user_id` to the `objects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "objects" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password_hash" DROP DEFAULT,
ALTER COLUMN "phone" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "objects" ADD CONSTRAINT "objects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
