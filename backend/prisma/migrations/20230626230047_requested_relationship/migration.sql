-- CreateTable
CREATE TABLE "ObjectREquested" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "object_id" TEXT NOT NULL,

    CONSTRAINT "ObjectREquested_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ObjectREquested" ADD CONSTRAINT "ObjectREquested_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObjectREquested" ADD CONSTRAINT "ObjectREquested_object_id_fkey" FOREIGN KEY ("object_id") REFERENCES "objects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
