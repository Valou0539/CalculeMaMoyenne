-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Unit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "coefficient" REAL NOT NULL DEFAULT 100,
    "idSemester" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Unit_idSemester_fkey" FOREIGN KEY ("idSemester") REFERENCES "Semester" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Unit" ("createdAt", "id", "idSemester", "name", "updatedAt") SELECT "createdAt", "id", "idSemester", "name", "updatedAt" FROM "Unit";
DROP TABLE "Unit";
ALTER TABLE "new_Unit" RENAME TO "Unit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
