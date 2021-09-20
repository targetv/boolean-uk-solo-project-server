-- CreateTable
CREATE TABLE "PrivateMessage" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "friendId" INTEGER NOT NULL,

    CONSTRAINT "PrivateMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriveMessageChat" (
    "id" SERIAL NOT NULL,
    "privateMessageId" INTEGER NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,

    CONSTRAINT "PriveMessageChat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PrivateMessage" ADD CONSTRAINT "PrivateMessage_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriveMessageChat" ADD CONSTRAINT "PriveMessageChat_privateMessageId_fkey" FOREIGN KEY ("privateMessageId") REFERENCES "PrivateMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
