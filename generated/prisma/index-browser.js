
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  role: 'role',
  refreshToken: 'refreshToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  lastLogin: 'lastLogin'
};

exports.Prisma.ClienteScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  dni: 'dni',
  telefono: 'telefono',
  email: 'email'
};

exports.Prisma.MesaScalarFieldEnum = {
  id: 'id',
  numero: 'numero',
  capacidad: 'capacidad',
  estado: 'estado'
};

exports.Prisma.CartaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion',
  precio: 'precio'
};

exports.Prisma.PlatoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion',
  precio: 'precio',
  cartaId: 'cartaId'
};

exports.Prisma.TipoPagoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre'
};

exports.Prisma.ComprobanteScalarFieldEnum = {
  id: 'id',
  tipoComprobante: 'tipoComprobante',
  numero: 'numero',
  fechaEmision: 'fechaEmision',
  tipoPagoId: 'tipoPagoId'
};

exports.Prisma.PedidoScalarFieldEnum = {
  id: 'id',
  fecha: 'fecha',
  total: 'total',
  clienteId: 'clienteId',
  mesaId: 'mesaId',
  comprobanteId: 'comprobanteId',
  detalleAdicionalId: 'detalleAdicionalId'
};

exports.Prisma.PedidoItemScalarFieldEnum = {
  id: 'id',
  cantidad: 'cantidad',
  pedidoId: 'pedidoId',
  platoId: 'platoId'
};

exports.Prisma.DetalleAdicionalScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.DetalleAdicionalBebidaScalarFieldEnum = {
  id: 'id',
  bebidaId: 'bebidaId',
  detalleAdicionalId: 'detalleAdicionalId'
};

exports.Prisma.BebidaScalarFieldEnum = {
  id: 'id',
  presentacion: 'presentacion',
  precio: 'precio',
  tipoBebidaId: 'tipoBebidaId'
};

exports.Prisma.TipoBebidaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre'
};

exports.Prisma.DetalleAdicionalTaperScalarFieldEnum = {
  id: 'id',
  taperId: 'taperId',
  detalleAdicionalId: 'detalleAdicionalId'
};

exports.Prisma.TaperScalarFieldEnum = {
  id: 'id',
  presentacion: 'presentacion',
  precio: 'precio'
};

exports.Prisma.DetalleAdicionalEntradaScalarFieldEnum = {
  id: 'id',
  entradaId: 'entradaId',
  detalleAdicionalId: 'detalleAdicionalId'
};

exports.Prisma.EntradaScalarFieldEnum = {
  id: 'id',
  precio: 'precio'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  email: 'email',
  name: 'name',
  password: 'password',
  refreshToken: 'refreshToken'
};

exports.Prisma.ClienteOrderByRelevanceFieldEnum = {
  nome: 'nome',
  dni: 'dni',
  telefono: 'telefono',
  email: 'email'
};

exports.Prisma.MesaOrderByRelevanceFieldEnum = {
  numero: 'numero'
};

exports.Prisma.CartaOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  descripcion: 'descripcion',
  precio: 'precio'
};

exports.Prisma.PlatoOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  descripcion: 'descripcion'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  EMPLEADO: 'EMPLEADO'
};

exports.EstadoMesa = exports.$Enums.EstadoMesa = {
  DISPONIBLE: 'DISPONIBLE',
  OCUPADA: 'OCUPADA',
  RESERVADA: 'RESERVADA'
};

exports.MetodoPago = exports.$Enums.MetodoPago = {
  EFECTIVO: 'EFECTIVO',
  TARJETA: 'TARJETA',
  YAPE: 'YAPE'
};

exports.TipoComprobante = exports.$Enums.TipoComprobante = {
  BOLETA: 'BOLETA',
  FACTURA: 'FACTURA'
};

exports.PresentacionBebida = exports.$Enums.PresentacionBebida = {
  PILSEN: 'PILSEN',
  CUSQUEÑA: 'CUSQUEÑA',
  HEINEKEN: 'HEINEKEN',
  VASO: 'VASO',
  MEDIA_JARRA: 'MEDIA_JARRA',
  JARRA: 'JARRA',
  PERSONAL: 'PERSONAL',
  MEDIO_LITRO: 'MEDIO_LITRO',
  GORDITA: 'GORDITA',
  LITRO: 'LITRO',
  LITRO_Y_MEDIO: 'LITRO_Y_MEDIO'
};

exports.TipoBebidaList = exports.$Enums.TipoBebidaList = {
  CERVEZAS: 'CERVEZAS',
  REFRESCOS: 'REFRESCOS',
  AGUA: 'AGUA',
  GASEOSAS: 'GASEOSAS'
};

exports.PresentacionTaper = exports.$Enums.PresentacionTaper = {
  CHICO: 'CHICO',
  MEDIANO: 'MEDIANO',
  GRANDE: 'GRANDE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Cliente: 'Cliente',
  Mesa: 'Mesa',
  Carta: 'Carta',
  Plato: 'Plato',
  TipoPago: 'TipoPago',
  Comprobante: 'Comprobante',
  Pedido: 'Pedido',
  PedidoItem: 'PedidoItem',
  DetalleAdicional: 'DetalleAdicional',
  DetalleAdicionalBebida: 'DetalleAdicionalBebida',
  Bebida: 'Bebida',
  TipoBebida: 'TipoBebida',
  DetalleAdicionalTaper: 'DetalleAdicionalTaper',
  Taper: 'Taper',
  DetalleAdicionalEntrada: 'DetalleAdicionalEntrada',
  Entrada: 'Entrada'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
