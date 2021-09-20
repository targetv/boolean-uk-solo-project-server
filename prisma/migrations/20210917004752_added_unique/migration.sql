/*
  Warnings:

  - A unique constraint covering the columns `[servername]` on the table `Server` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Server_servername_key" ON "Server"("servername");
