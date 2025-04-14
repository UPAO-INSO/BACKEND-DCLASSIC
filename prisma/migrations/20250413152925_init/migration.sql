-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'EMPLEADO') NOT NULL DEFAULT 'EMPLEADO',
    `refreshToken` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `lastLogin` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_refreshToken_key`(`refreshToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `dni` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mesa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(191) NOT NULL,
    `capacidad` INTEGER NOT NULL,
    `estado` ENUM('DISPONIBLE', 'OCUPADA', 'RESERVADA') NOT NULL DEFAULT 'DISPONIBLE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Carta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `precio` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plato` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `cartaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoPago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` ENUM('EFECTIVO', 'TARJETA', 'YAPE') NOT NULL DEFAULT 'EFECTIVO',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comprobante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoComprobante` ENUM('BOLETA', 'FACTURA') NOT NULL DEFAULT 'BOLETA',
    `numero` INTEGER NOT NULL,
    `fechaEmision` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tipoPagoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `total` DOUBLE NOT NULL,
    `clienteId` INTEGER NOT NULL,
    `mesaId` INTEGER NOT NULL,
    `comprobanteId` INTEGER NOT NULL,
    `detalleAdicionalId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedidoItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad` INTEGER NOT NULL,
    `pedidoId` INTEGER NOT NULL,
    `platoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleAdicional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleAdicionalBebida` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bebidaId` INTEGER NOT NULL,
    `detalleAdicionalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bebida` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `presentacion` ENUM('PILSEN', 'CUSQUEÑA', 'HEINEKEN', 'VASO', 'MEDIA_JARRA', 'JARRA', 'PERSONAL', 'MEDIO_LITRO', 'GORDITA', 'LITRO', 'LITRO_Y_MEDIO') NOT NULL DEFAULT 'VASO',
    `precio` DOUBLE NOT NULL,
    `tipoBebidaId` INTEGER NOT NULL,

    UNIQUE INDEX `Bebida_presentacion_tipoBebidaId_key`(`presentacion`, `tipoBebidaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoBebida` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` ENUM('CERVEZAS', 'REFRESCOS', 'AGUA', 'GASEOSAS') NOT NULL,

    UNIQUE INDEX `TipoBebida_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleAdicionalTaper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taperId` INTEGER NOT NULL,
    `detalleAdicionalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Taper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `presentacion` ENUM('CHICO', 'MEDIANO', 'GRANDE') NOT NULL DEFAULT 'CHICO',
    `precio` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleAdicionalEntrada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entradaId` INTEGER NOT NULL,
    `detalleAdicionalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entrada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `precio` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Plato` ADD CONSTRAINT `Plato_cartaId_fkey` FOREIGN KEY (`cartaId`) REFERENCES `Carta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comprobante` ADD CONSTRAINT `Comprobante_tipoPagoId_fkey` FOREIGN KEY (`tipoPagoId`) REFERENCES `TipoPago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_mesaId_fkey` FOREIGN KEY (`mesaId`) REFERENCES `Mesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_comprobanteId_fkey` FOREIGN KEY (`comprobanteId`) REFERENCES `Comprobante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_detalleAdicionalId_fkey` FOREIGN KEY (`detalleAdicionalId`) REFERENCES `DetalleAdicional`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoItem` ADD CONSTRAINT `PedidoItem_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoItem` ADD CONSTRAINT `PedidoItem_platoId_fkey` FOREIGN KEY (`platoId`) REFERENCES `Plato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleAdicionalBebida` ADD CONSTRAINT `DetalleAdicionalBebida_bebidaId_fkey` FOREIGN KEY (`bebidaId`) REFERENCES `Bebida`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleAdicionalBebida` ADD CONSTRAINT `DetalleAdicionalBebida_detalleAdicionalId_fkey` FOREIGN KEY (`detalleAdicionalId`) REFERENCES `DetalleAdicional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bebida` ADD CONSTRAINT `Bebida_tipoBebidaId_fkey` FOREIGN KEY (`tipoBebidaId`) REFERENCES `TipoBebida`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleAdicionalTaper` ADD CONSTRAINT `DetalleAdicionalTaper_taperId_fkey` FOREIGN KEY (`taperId`) REFERENCES `Taper`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleAdicionalTaper` ADD CONSTRAINT `DetalleAdicionalTaper_detalleAdicionalId_fkey` FOREIGN KEY (`detalleAdicionalId`) REFERENCES `DetalleAdicional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleAdicionalEntrada` ADD CONSTRAINT `DetalleAdicionalEntrada_entradaId_fkey` FOREIGN KEY (`entradaId`) REFERENCES `Entrada`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleAdicionalEntrada` ADD CONSTRAINT `DetalleAdicionalEntrada_detalleAdicionalId_fkey` FOREIGN KEY (`detalleAdicionalId`) REFERENCES `DetalleAdicional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
