-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "friends" TEXT[];

-- CreateTable
CREATE TABLE "Server" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "servername" TEXT NOT NULL,
    "serverimage" TEXT NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Server" ADD CONSTRAINT "Server_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
