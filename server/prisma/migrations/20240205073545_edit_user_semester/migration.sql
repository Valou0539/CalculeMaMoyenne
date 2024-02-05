/*
  Warnings:

  - You are about to drop the column `Bonus` on the `UserSemester` table. All the data in the column will be lost.
  - You are about to drop the column `Malus` on the `UserSemester` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserSemester" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idUser" INTEGER NOT NULL,
    "idSemester" INTEGER NOT NULL,
    "bonus" REAL NOT NULL DEFAULT 0,
    "malus" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserSemester_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserSemester_idSemester_fkey" FOREIGN KEY ("idSemester") REFERENCES "Semester" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserSemester" ("createdAt", "id", "idSemester", "idUser", "updatedAt") SELECT "createdAt", "id", "idSemester", "idUser", "updatedAt" FROM "UserSemester";
DROP TABLE "UserSemester";
ALTER TABLE "new_UserSemester" RENAME TO "UserSemester";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
