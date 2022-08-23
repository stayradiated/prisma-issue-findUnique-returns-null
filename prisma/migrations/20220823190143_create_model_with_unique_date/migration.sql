-- CreateTable
CREATE TABLE "ModelWithUniqueDate" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "ModelWithUniqueDate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ModelWithUniqueDate_date_key" ON "ModelWithUniqueDate"("date");
