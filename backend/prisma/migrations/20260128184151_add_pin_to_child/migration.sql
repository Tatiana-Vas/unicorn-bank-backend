/*
  Warnings:

  - You are about to drop the column `balance` on the `SpendingAccount` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "TaskCompletionStatus" ADD VALUE 'DECLINED_BY_CHILD';

-- AlterTable
ALTER TABLE "Child" ADD COLUMN     "pin" TEXT;

-- AlterTable
ALTER TABLE "Deposit" ADD COLUMN     "closedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "SpendingAccount" DROP COLUMN "balance";

-- AlterTable
ALTER TABLE "TaskInstance" ADD COLUMN     "approvedAt" TIMESTAMP(3),
ADD COLUMN     "expiredAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "InvitationCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3),
    "parentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InvitationCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InvitationCode_code_key" ON "InvitationCode"("code");

-- AddForeignKey
ALTER TABLE "InvitationCode" ADD CONSTRAINT "InvitationCode_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
