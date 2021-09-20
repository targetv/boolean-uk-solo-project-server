/*
  Warnings:

  - You are about to drop the `PrivateMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PriveMessageChat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PrivateMessage" DROP CONSTRAINT "PrivateMessage_senderId_fkey";

-- DropForeignKey
ALTER TABLE "PriveMessageChat" DROP CONSTRAINT "PriveMessageChat_privateMessageId_fkey";

-- DropTable
DROP TABLE "PrivateMessage";

-- DropTable
DROP TABLE "PriveMessageChat";

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
