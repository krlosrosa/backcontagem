-- CreateTable
CREATE TABLE "Counted" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "lote" TEXT,
    "sku" TEXT,
    "caixa" INTEGER,
    "unidade" INTEGER,
    "peso" INTEGER,

    CONSTRAINT "Counted_pkey" PRIMARY KEY ("id")
);
