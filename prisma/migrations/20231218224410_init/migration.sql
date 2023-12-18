-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "birthdate" TEXT,
    "sex" TEXT,
    "profilepic" TEXT,
    "email" TEXT,
    "phoneNumber" TEXT,
    "rg" TEXT,
    "cpf" TEXT,
    "cns" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
