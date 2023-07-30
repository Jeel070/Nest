/*
  Warnings:

  - Made the column `details` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `details` VARCHAR(191) NOT NULL;
