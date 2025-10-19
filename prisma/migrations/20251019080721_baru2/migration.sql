/*
  Warnings:

  - You are about to drop the column `UserId` on the `account` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `account` DROP FOREIGN KEY `Account_UserId_fkey`;

-- DropIndex
DROP INDEX `Account_UserId_fkey` ON `account`;

-- AlterTable
ALTER TABLE `account` DROP COLUMN `UserId`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
