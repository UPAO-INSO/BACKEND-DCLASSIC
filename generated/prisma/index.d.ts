
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Mesa
 * 
 */
export type Mesa = $Result.DefaultSelection<Prisma.$MesaPayload>
/**
 * Model Carta
 * 
 */
export type Carta = $Result.DefaultSelection<Prisma.$CartaPayload>
/**
 * Model Plato
 * 
 */
export type Plato = $Result.DefaultSelection<Prisma.$PlatoPayload>
/**
 * Model TipoPago
 * 
 */
export type TipoPago = $Result.DefaultSelection<Prisma.$TipoPagoPayload>
/**
 * Model Comprobante
 * 
 */
export type Comprobante = $Result.DefaultSelection<Prisma.$ComprobantePayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model PedidoItem
 * 
 */
export type PedidoItem = $Result.DefaultSelection<Prisma.$PedidoItemPayload>
/**
 * Model DetalleAdicional
 * 
 */
export type DetalleAdicional = $Result.DefaultSelection<Prisma.$DetalleAdicionalPayload>
/**
 * Model DetalleAdicionalBebida
 * 
 */
export type DetalleAdicionalBebida = $Result.DefaultSelection<Prisma.$DetalleAdicionalBebidaPayload>
/**
 * Model Bebida
 * 
 */
export type Bebida = $Result.DefaultSelection<Prisma.$BebidaPayload>
/**
 * Model TipoBebida
 * 
 */
export type TipoBebida = $Result.DefaultSelection<Prisma.$TipoBebidaPayload>
/**
 * Model DetalleAdicionalTaper
 * 
 */
export type DetalleAdicionalTaper = $Result.DefaultSelection<Prisma.$DetalleAdicionalTaperPayload>
/**
 * Model Taper
 * 
 */
export type Taper = $Result.DefaultSelection<Prisma.$TaperPayload>
/**
 * Model DetalleAdicionalEntrada
 * 
 */
export type DetalleAdicionalEntrada = $Result.DefaultSelection<Prisma.$DetalleAdicionalEntradaPayload>
/**
 * Model Entrada
 * 
 */
export type Entrada = $Result.DefaultSelection<Prisma.$EntradaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EMPLEADO: 'EMPLEADO'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EstadoMesa: {
  DISPONIBLE: 'DISPONIBLE',
  OCUPADA: 'OCUPADA',
  RESERVADA: 'RESERVADA'
};

export type EstadoMesa = (typeof EstadoMesa)[keyof typeof EstadoMesa]


export const MetodoPago: {
  EFECTIVO: 'EFECTIVO',
  TARJETA: 'TARJETA',
  YAPE: 'YAPE'
};

export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago]


export const TipoComprobante: {
  BOLETA: 'BOLETA',
  FACTURA: 'FACTURA'
};

export type TipoComprobante = (typeof TipoComprobante)[keyof typeof TipoComprobante]


export const PresentacionTaper: {
  CHICO: 'CHICO',
  MEDIANO: 'MEDIANO',
  GRANDE: 'GRANDE'
};

export type PresentacionTaper = (typeof PresentacionTaper)[keyof typeof PresentacionTaper]


export const TipoBebidaList: {
  CERVEZAS: 'CERVEZAS',
  REFRESCOS: 'REFRESCOS',
  AGUA: 'AGUA',
  GASEOSAS: 'GASEOSAS'
};

export type TipoBebidaList = (typeof TipoBebidaList)[keyof typeof TipoBebidaList]


export const PresentacionBebida: {
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

export type PresentacionBebida = (typeof PresentacionBebida)[keyof typeof PresentacionBebida]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EstadoMesa = $Enums.EstadoMesa

export const EstadoMesa: typeof $Enums.EstadoMesa

export type MetodoPago = $Enums.MetodoPago

export const MetodoPago: typeof $Enums.MetodoPago

export type TipoComprobante = $Enums.TipoComprobante

export const TipoComprobante: typeof $Enums.TipoComprobante

export type PresentacionTaper = $Enums.PresentacionTaper

export const PresentacionTaper: typeof $Enums.PresentacionTaper

export type TipoBebidaList = $Enums.TipoBebidaList

export const TipoBebidaList: typeof $Enums.TipoBebidaList

export type PresentacionBebida = $Enums.PresentacionBebida

export const PresentacionBebida: typeof $Enums.PresentacionBebida

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mesa`: Exposes CRUD operations for the **Mesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesas
    * const mesas = await prisma.mesa.findMany()
    * ```
    */
  get mesa(): Prisma.MesaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carta`: Exposes CRUD operations for the **Carta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartas
    * const cartas = await prisma.carta.findMany()
    * ```
    */
  get carta(): Prisma.CartaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plato`: Exposes CRUD operations for the **Plato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platoes
    * const platoes = await prisma.plato.findMany()
    * ```
    */
  get plato(): Prisma.PlatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoPago`: Exposes CRUD operations for the **TipoPago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoPagos
    * const tipoPagos = await prisma.tipoPago.findMany()
    * ```
    */
  get tipoPago(): Prisma.TipoPagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comprobante`: Exposes CRUD operations for the **Comprobante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comprobantes
    * const comprobantes = await prisma.comprobante.findMany()
    * ```
    */
  get comprobante(): Prisma.ComprobanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoItem`: Exposes CRUD operations for the **PedidoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoItems
    * const pedidoItems = await prisma.pedidoItem.findMany()
    * ```
    */
  get pedidoItem(): Prisma.PedidoItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleAdicional`: Exposes CRUD operations for the **DetalleAdicional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleAdicionals
    * const detalleAdicionals = await prisma.detalleAdicional.findMany()
    * ```
    */
  get detalleAdicional(): Prisma.DetalleAdicionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleAdicionalBebida`: Exposes CRUD operations for the **DetalleAdicionalBebida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleAdicionalBebidas
    * const detalleAdicionalBebidas = await prisma.detalleAdicionalBebida.findMany()
    * ```
    */
  get detalleAdicionalBebida(): Prisma.DetalleAdicionalBebidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bebida`: Exposes CRUD operations for the **Bebida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bebidas
    * const bebidas = await prisma.bebida.findMany()
    * ```
    */
  get bebida(): Prisma.BebidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoBebida`: Exposes CRUD operations for the **TipoBebida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoBebidas
    * const tipoBebidas = await prisma.tipoBebida.findMany()
    * ```
    */
  get tipoBebida(): Prisma.TipoBebidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleAdicionalTaper`: Exposes CRUD operations for the **DetalleAdicionalTaper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleAdicionalTapers
    * const detalleAdicionalTapers = await prisma.detalleAdicionalTaper.findMany()
    * ```
    */
  get detalleAdicionalTaper(): Prisma.DetalleAdicionalTaperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taper`: Exposes CRUD operations for the **Taper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tapers
    * const tapers = await prisma.taper.findMany()
    * ```
    */
  get taper(): Prisma.TaperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleAdicionalEntrada`: Exposes CRUD operations for the **DetalleAdicionalEntrada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleAdicionalEntradas
    * const detalleAdicionalEntradas = await prisma.detalleAdicionalEntrada.findMany()
    * ```
    */
  get detalleAdicionalEntrada(): Prisma.DetalleAdicionalEntradaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrada`: Exposes CRUD operations for the **Entrada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entradas
    * const entradas = await prisma.entrada.findMany()
    * ```
    */
  get entrada(): Prisma.EntradaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cliente" | "mesa" | "carta" | "plato" | "tipoPago" | "comprobante" | "pedido" | "pedidoItem" | "detalleAdicional" | "detalleAdicionalBebida" | "bebida" | "tipoBebida" | "detalleAdicionalTaper" | "taper" | "detalleAdicionalEntrada" | "entrada"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Mesa: {
        payload: Prisma.$MesaPayload<ExtArgs>
        fields: Prisma.MesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findFirst: {
            args: Prisma.MesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          findMany: {
            args: Prisma.MesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>[]
          }
          create: {
            args: Prisma.MesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          createMany: {
            args: Prisma.MesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          update: {
            args: Prisma.MesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          deleteMany: {
            args: Prisma.MesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesaPayload>
          }
          aggregate: {
            args: Prisma.MesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesa>
          }
          groupBy: {
            args: Prisma.MesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MesaCountArgs<ExtArgs>
            result: $Utils.Optional<MesaCountAggregateOutputType> | number
          }
        }
      }
      Carta: {
        payload: Prisma.$CartaPayload<ExtArgs>
        fields: Prisma.CartaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          findFirst: {
            args: Prisma.CartaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          findMany: {
            args: Prisma.CartaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>[]
          }
          create: {
            args: Prisma.CartaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          createMany: {
            args: Prisma.CartaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          update: {
            args: Prisma.CartaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          deleteMany: {
            args: Prisma.CartaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          aggregate: {
            args: Prisma.CartaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarta>
          }
          groupBy: {
            args: Prisma.CartaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartaCountArgs<ExtArgs>
            result: $Utils.Optional<CartaCountAggregateOutputType> | number
          }
        }
      }
      Plato: {
        payload: Prisma.$PlatoPayload<ExtArgs>
        fields: Prisma.PlatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          findFirst: {
            args: Prisma.PlatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          findMany: {
            args: Prisma.PlatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>[]
          }
          create: {
            args: Prisma.PlatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          createMany: {
            args: Prisma.PlatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          update: {
            args: Prisma.PlatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          deleteMany: {
            args: Prisma.PlatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          aggregate: {
            args: Prisma.PlatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlato>
          }
          groupBy: {
            args: Prisma.PlatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatoCountArgs<ExtArgs>
            result: $Utils.Optional<PlatoCountAggregateOutputType> | number
          }
        }
      }
      TipoPago: {
        payload: Prisma.$TipoPagoPayload<ExtArgs>
        fields: Prisma.TipoPagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoPagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoPagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload>
          }
          findFirst: {
            args: Prisma.TipoPagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoPagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload>
          }
          findMany: {
            args: Prisma.TipoPagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload>[]
          }
          create: {
            args: Prisma.TipoPagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload>
          }
          createMany: {
            args: Prisma.TipoPagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoPagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload>
          }
          update: {
            args: Prisma.TipoPagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload>
          }
          deleteMany: {
            args: Prisma.TipoPagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoPagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoPagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPagoPayload>
          }
          aggregate: {
            args: Prisma.TipoPagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoPago>
          }
          groupBy: {
            args: Prisma.TipoPagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoPagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoPagoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoPagoCountAggregateOutputType> | number
          }
        }
      }
      Comprobante: {
        payload: Prisma.$ComprobantePayload<ExtArgs>
        fields: Prisma.ComprobanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComprobanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComprobanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          findFirst: {
            args: Prisma.ComprobanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComprobanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          findMany: {
            args: Prisma.ComprobanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>[]
          }
          create: {
            args: Prisma.ComprobanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          createMany: {
            args: Prisma.ComprobanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComprobanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          update: {
            args: Prisma.ComprobanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          deleteMany: {
            args: Prisma.ComprobanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComprobanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComprobanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          aggregate: {
            args: Prisma.ComprobanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprobante>
          }
          groupBy: {
            args: Prisma.ComprobanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComprobanteCountArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      PedidoItem: {
        payload: Prisma.$PedidoItemPayload<ExtArgs>
        fields: Prisma.PedidoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          findFirst: {
            args: Prisma.PedidoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          findMany: {
            args: Prisma.PedidoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>[]
          }
          create: {
            args: Prisma.PedidoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          createMany: {
            args: Prisma.PedidoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          update: {
            args: Prisma.PedidoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          deleteMany: {
            args: Prisma.PedidoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          aggregate: {
            args: Prisma.PedidoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoItem>
          }
          groupBy: {
            args: Prisma.PedidoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoItemCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoItemCountAggregateOutputType> | number
          }
        }
      }
      DetalleAdicional: {
        payload: Prisma.$DetalleAdicionalPayload<ExtArgs>
        fields: Prisma.DetalleAdicionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleAdicionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleAdicionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload>
          }
          findFirst: {
            args: Prisma.DetalleAdicionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleAdicionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload>
          }
          findMany: {
            args: Prisma.DetalleAdicionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload>[]
          }
          create: {
            args: Prisma.DetalleAdicionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload>
          }
          createMany: {
            args: Prisma.DetalleAdicionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetalleAdicionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload>
          }
          update: {
            args: Prisma.DetalleAdicionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload>
          }
          deleteMany: {
            args: Prisma.DetalleAdicionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleAdicionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetalleAdicionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalPayload>
          }
          aggregate: {
            args: Prisma.DetalleAdicionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleAdicional>
          }
          groupBy: {
            args: Prisma.DetalleAdicionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleAdicionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleAdicionalCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleAdicionalCountAggregateOutputType> | number
          }
        }
      }
      DetalleAdicionalBebida: {
        payload: Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>
        fields: Prisma.DetalleAdicionalBebidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleAdicionalBebidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleAdicionalBebidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload>
          }
          findFirst: {
            args: Prisma.DetalleAdicionalBebidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleAdicionalBebidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload>
          }
          findMany: {
            args: Prisma.DetalleAdicionalBebidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload>[]
          }
          create: {
            args: Prisma.DetalleAdicionalBebidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload>
          }
          createMany: {
            args: Prisma.DetalleAdicionalBebidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetalleAdicionalBebidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload>
          }
          update: {
            args: Prisma.DetalleAdicionalBebidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload>
          }
          deleteMany: {
            args: Prisma.DetalleAdicionalBebidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleAdicionalBebidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetalleAdicionalBebidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalBebidaPayload>
          }
          aggregate: {
            args: Prisma.DetalleAdicionalBebidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleAdicionalBebida>
          }
          groupBy: {
            args: Prisma.DetalleAdicionalBebidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleAdicionalBebidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleAdicionalBebidaCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleAdicionalBebidaCountAggregateOutputType> | number
          }
        }
      }
      Bebida: {
        payload: Prisma.$BebidaPayload<ExtArgs>
        fields: Prisma.BebidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BebidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BebidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload>
          }
          findFirst: {
            args: Prisma.BebidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BebidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload>
          }
          findMany: {
            args: Prisma.BebidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload>[]
          }
          create: {
            args: Prisma.BebidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload>
          }
          createMany: {
            args: Prisma.BebidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BebidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload>
          }
          update: {
            args: Prisma.BebidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload>
          }
          deleteMany: {
            args: Prisma.BebidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BebidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BebidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BebidaPayload>
          }
          aggregate: {
            args: Prisma.BebidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBebida>
          }
          groupBy: {
            args: Prisma.BebidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BebidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BebidaCountArgs<ExtArgs>
            result: $Utils.Optional<BebidaCountAggregateOutputType> | number
          }
        }
      }
      TipoBebida: {
        payload: Prisma.$TipoBebidaPayload<ExtArgs>
        fields: Prisma.TipoBebidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoBebidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoBebidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload>
          }
          findFirst: {
            args: Prisma.TipoBebidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoBebidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload>
          }
          findMany: {
            args: Prisma.TipoBebidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload>[]
          }
          create: {
            args: Prisma.TipoBebidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload>
          }
          createMany: {
            args: Prisma.TipoBebidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoBebidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload>
          }
          update: {
            args: Prisma.TipoBebidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload>
          }
          deleteMany: {
            args: Prisma.TipoBebidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoBebidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoBebidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBebidaPayload>
          }
          aggregate: {
            args: Prisma.TipoBebidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoBebida>
          }
          groupBy: {
            args: Prisma.TipoBebidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoBebidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoBebidaCountArgs<ExtArgs>
            result: $Utils.Optional<TipoBebidaCountAggregateOutputType> | number
          }
        }
      }
      DetalleAdicionalTaper: {
        payload: Prisma.$DetalleAdicionalTaperPayload<ExtArgs>
        fields: Prisma.DetalleAdicionalTaperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleAdicionalTaperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleAdicionalTaperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload>
          }
          findFirst: {
            args: Prisma.DetalleAdicionalTaperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleAdicionalTaperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload>
          }
          findMany: {
            args: Prisma.DetalleAdicionalTaperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload>[]
          }
          create: {
            args: Prisma.DetalleAdicionalTaperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload>
          }
          createMany: {
            args: Prisma.DetalleAdicionalTaperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetalleAdicionalTaperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload>
          }
          update: {
            args: Prisma.DetalleAdicionalTaperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload>
          }
          deleteMany: {
            args: Prisma.DetalleAdicionalTaperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleAdicionalTaperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetalleAdicionalTaperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalTaperPayload>
          }
          aggregate: {
            args: Prisma.DetalleAdicionalTaperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleAdicionalTaper>
          }
          groupBy: {
            args: Prisma.DetalleAdicionalTaperGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleAdicionalTaperGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleAdicionalTaperCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleAdicionalTaperCountAggregateOutputType> | number
          }
        }
      }
      Taper: {
        payload: Prisma.$TaperPayload<ExtArgs>
        fields: Prisma.TaperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload>
          }
          findFirst: {
            args: Prisma.TaperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload>
          }
          findMany: {
            args: Prisma.TaperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload>[]
          }
          create: {
            args: Prisma.TaperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload>
          }
          createMany: {
            args: Prisma.TaperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload>
          }
          update: {
            args: Prisma.TaperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload>
          }
          deleteMany: {
            args: Prisma.TaperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaperPayload>
          }
          aggregate: {
            args: Prisma.TaperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaper>
          }
          groupBy: {
            args: Prisma.TaperGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaperGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaperCountArgs<ExtArgs>
            result: $Utils.Optional<TaperCountAggregateOutputType> | number
          }
        }
      }
      DetalleAdicionalEntrada: {
        payload: Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>
        fields: Prisma.DetalleAdicionalEntradaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleAdicionalEntradaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleAdicionalEntradaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload>
          }
          findFirst: {
            args: Prisma.DetalleAdicionalEntradaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleAdicionalEntradaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload>
          }
          findMany: {
            args: Prisma.DetalleAdicionalEntradaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload>[]
          }
          create: {
            args: Prisma.DetalleAdicionalEntradaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload>
          }
          createMany: {
            args: Prisma.DetalleAdicionalEntradaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetalleAdicionalEntradaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload>
          }
          update: {
            args: Prisma.DetalleAdicionalEntradaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload>
          }
          deleteMany: {
            args: Prisma.DetalleAdicionalEntradaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleAdicionalEntradaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetalleAdicionalEntradaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleAdicionalEntradaPayload>
          }
          aggregate: {
            args: Prisma.DetalleAdicionalEntradaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleAdicionalEntrada>
          }
          groupBy: {
            args: Prisma.DetalleAdicionalEntradaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleAdicionalEntradaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleAdicionalEntradaCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleAdicionalEntradaCountAggregateOutputType> | number
          }
        }
      }
      Entrada: {
        payload: Prisma.$EntradaPayload<ExtArgs>
        fields: Prisma.EntradaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntradaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntradaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          findFirst: {
            args: Prisma.EntradaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntradaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          findMany: {
            args: Prisma.EntradaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>[]
          }
          create: {
            args: Prisma.EntradaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          createMany: {
            args: Prisma.EntradaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntradaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          update: {
            args: Prisma.EntradaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          deleteMany: {
            args: Prisma.EntradaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntradaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntradaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          aggregate: {
            args: Prisma.EntradaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrada>
          }
          groupBy: {
            args: Prisma.EntradaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntradaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntradaCountArgs<ExtArgs>
            result: $Utils.Optional<EntradaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cliente?: ClienteOmit
    mesa?: MesaOmit
    carta?: CartaOmit
    plato?: PlatoOmit
    tipoPago?: TipoPagoOmit
    comprobante?: ComprobanteOmit
    pedido?: PedidoOmit
    pedidoItem?: PedidoItemOmit
    detalleAdicional?: DetalleAdicionalOmit
    detalleAdicionalBebida?: DetalleAdicionalBebidaOmit
    bebida?: BebidaOmit
    tipoBebida?: TipoBebidaOmit
    detalleAdicionalTaper?: DetalleAdicionalTaperOmit
    taper?: TaperOmit
    detalleAdicionalEntrada?: DetalleAdicionalEntradaOmit
    entrada?: EntradaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    Pedido: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | ClienteCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type MesaCountOutputType
   */

  export type MesaCountOutputType = {
    Pedido: number
  }

  export type MesaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | MesaCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesaCountOutputType
     */
    select?: MesaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MesaCountOutputType without action
   */
  export type MesaCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type CartaCountOutputType
   */

  export type CartaCountOutputType = {
    Plato: number
  }

  export type CartaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Plato?: boolean | CartaCountOutputTypeCountPlatoArgs
  }

  // Custom InputTypes
  /**
   * CartaCountOutputType without action
   */
  export type CartaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartaCountOutputType
     */
    select?: CartaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartaCountOutputType without action
   */
  export type CartaCountOutputTypeCountPlatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatoWhereInput
  }


  /**
   * Count Type PlatoCountOutputType
   */

  export type PlatoCountOutputType = {
    PedidoItem: number
  }

  export type PlatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PedidoItem?: boolean | PlatoCountOutputTypeCountPedidoItemArgs
  }

  // Custom InputTypes
  /**
   * PlatoCountOutputType without action
   */
  export type PlatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatoCountOutputType
     */
    select?: PlatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatoCountOutputType without action
   */
  export type PlatoCountOutputTypeCountPedidoItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
  }


  /**
   * Count Type TipoPagoCountOutputType
   */

  export type TipoPagoCountOutputType = {
    Comprobante: number
  }

  export type TipoPagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comprobante?: boolean | TipoPagoCountOutputTypeCountComprobanteArgs
  }

  // Custom InputTypes
  /**
   * TipoPagoCountOutputType without action
   */
  export type TipoPagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPagoCountOutputType
     */
    select?: TipoPagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoPagoCountOutputType without action
   */
  export type TipoPagoCountOutputTypeCountComprobanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprobanteWhereInput
  }


  /**
   * Count Type ComprobanteCountOutputType
   */

  export type ComprobanteCountOutputType = {
    Pedido: number
  }

  export type ComprobanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | ComprobanteCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ComprobanteCountOutputType without action
   */
  export type ComprobanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteCountOutputType
     */
    select?: ComprobanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComprobanteCountOutputType without action
   */
  export type ComprobanteCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    PedidoItem: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PedidoItem?: boolean | PedidoCountOutputTypeCountPedidoItemArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPedidoItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
  }


  /**
   * Count Type DetalleAdicionalCountOutputType
   */

  export type DetalleAdicionalCountOutputType = {
    Pedido: number
    DetalleAdicionalBebida: number
    DetalleAdicionalTaper: number
    DetalleAdicionalEntrada: number
  }

  export type DetalleAdicionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | DetalleAdicionalCountOutputTypeCountPedidoArgs
    DetalleAdicionalBebida?: boolean | DetalleAdicionalCountOutputTypeCountDetalleAdicionalBebidaArgs
    DetalleAdicionalTaper?: boolean | DetalleAdicionalCountOutputTypeCountDetalleAdicionalTaperArgs
    DetalleAdicionalEntrada?: boolean | DetalleAdicionalCountOutputTypeCountDetalleAdicionalEntradaArgs
  }

  // Custom InputTypes
  /**
   * DetalleAdicionalCountOutputType without action
   */
  export type DetalleAdicionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalCountOutputType
     */
    select?: DetalleAdicionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetalleAdicionalCountOutputType without action
   */
  export type DetalleAdicionalCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * DetalleAdicionalCountOutputType without action
   */
  export type DetalleAdicionalCountOutputTypeCountDetalleAdicionalBebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalBebidaWhereInput
  }

  /**
   * DetalleAdicionalCountOutputType without action
   */
  export type DetalleAdicionalCountOutputTypeCountDetalleAdicionalTaperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalTaperWhereInput
  }

  /**
   * DetalleAdicionalCountOutputType without action
   */
  export type DetalleAdicionalCountOutputTypeCountDetalleAdicionalEntradaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalEntradaWhereInput
  }


  /**
   * Count Type BebidaCountOutputType
   */

  export type BebidaCountOutputType = {
    DetalleAdicionalBebida: number
  }

  export type BebidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetalleAdicionalBebida?: boolean | BebidaCountOutputTypeCountDetalleAdicionalBebidaArgs
  }

  // Custom InputTypes
  /**
   * BebidaCountOutputType without action
   */
  export type BebidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BebidaCountOutputType
     */
    select?: BebidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BebidaCountOutputType without action
   */
  export type BebidaCountOutputTypeCountDetalleAdicionalBebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalBebidaWhereInput
  }


  /**
   * Count Type TipoBebidaCountOutputType
   */

  export type TipoBebidaCountOutputType = {
    Bebida: number
  }

  export type TipoBebidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bebida?: boolean | TipoBebidaCountOutputTypeCountBebidaArgs
  }

  // Custom InputTypes
  /**
   * TipoBebidaCountOutputType without action
   */
  export type TipoBebidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebidaCountOutputType
     */
    select?: TipoBebidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoBebidaCountOutputType without action
   */
  export type TipoBebidaCountOutputTypeCountBebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BebidaWhereInput
  }


  /**
   * Count Type TaperCountOutputType
   */

  export type TaperCountOutputType = {
    DetalleAdicionalTaper: number
  }

  export type TaperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetalleAdicionalTaper?: boolean | TaperCountOutputTypeCountDetalleAdicionalTaperArgs
  }

  // Custom InputTypes
  /**
   * TaperCountOutputType without action
   */
  export type TaperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaperCountOutputType
     */
    select?: TaperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaperCountOutputType without action
   */
  export type TaperCountOutputTypeCountDetalleAdicionalTaperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalTaperWhereInput
  }


  /**
   * Count Type EntradaCountOutputType
   */

  export type EntradaCountOutputType = {
    DetalleAdicionalEntrada: number
  }

  export type EntradaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetalleAdicionalEntrada?: boolean | EntradaCountOutputTypeCountDetalleAdicionalEntradaArgs
  }

  // Custom InputTypes
  /**
   * EntradaCountOutputType without action
   */
  export type EntradaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntradaCountOutputType
     */
    select?: EntradaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntradaCountOutputType without action
   */
  export type EntradaCountOutputTypeCountDetalleAdicionalEntradaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalEntradaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    role: $Enums.Role
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    lastLogin: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "refreshToken" | "createdAt" | "updatedAt" | "lastLogin", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      role: $Enums.Role
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
      lastLogin: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    dni: string | null
    telefono: string | null
    email: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    dni: string | null
    telefono: string | null
    email: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    dni: number
    telefono: number
    email: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    dni?: true
    telefono?: true
    email?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    dni?: true
    telefono?: true
    email?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    dni?: true
    telefono?: true
    email?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    dni: string
    telefono: string
    email: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
    Pedido?: boolean | Cliente$PedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "dni" | "telefono" | "email", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | Cliente$PedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      dni: string
      telefono: string
      email: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends Cliente$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$PedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly dni: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.Pedido
   */
  export type Cliente$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Mesa
   */

  export type AggregateMesa = {
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  export type MesaAvgAggregateOutputType = {
    id: number | null
    capacidad: number | null
  }

  export type MesaSumAggregateOutputType = {
    id: number | null
    capacidad: number | null
  }

  export type MesaMinAggregateOutputType = {
    id: number | null
    numero: string | null
    capacidad: number | null
    estado: $Enums.EstadoMesa | null
  }

  export type MesaMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    capacidad: number | null
    estado: $Enums.EstadoMesa | null
  }

  export type MesaCountAggregateOutputType = {
    id: number
    numero: number
    capacidad: number
    estado: number
    _all: number
  }


  export type MesaAvgAggregateInputType = {
    id?: true
    capacidad?: true
  }

  export type MesaSumAggregateInputType = {
    id?: true
    capacidad?: true
  }

  export type MesaMinAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    estado?: true
  }

  export type MesaMaxAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    estado?: true
  }

  export type MesaCountAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    estado?: true
    _all?: true
  }

  export type MesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesa to aggregate.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mesas
    **/
    _count?: true | MesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesaMaxAggregateInputType
  }

  export type GetMesaAggregateType<T extends MesaAggregateArgs> = {
        [P in keyof T & keyof AggregateMesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesa[P]>
      : GetScalarType<T[P], AggregateMesa[P]>
  }




  export type MesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesaWhereInput
    orderBy?: MesaOrderByWithAggregationInput | MesaOrderByWithAggregationInput[]
    by: MesaScalarFieldEnum[] | MesaScalarFieldEnum
    having?: MesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesaCountAggregateInputType | true
    _avg?: MesaAvgAggregateInputType
    _sum?: MesaSumAggregateInputType
    _min?: MesaMinAggregateInputType
    _max?: MesaMaxAggregateInputType
  }

  export type MesaGroupByOutputType = {
    id: number
    numero: string
    capacidad: number
    estado: $Enums.EstadoMesa
    _count: MesaCountAggregateOutputType | null
    _avg: MesaAvgAggregateOutputType | null
    _sum: MesaSumAggregateOutputType | null
    _min: MesaMinAggregateOutputType | null
    _max: MesaMaxAggregateOutputType | null
  }

  type GetMesaGroupByPayload<T extends MesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesaGroupByOutputType[P]>
            : GetScalarType<T[P], MesaGroupByOutputType[P]>
        }
      >
    >


  export type MesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    estado?: boolean
    Pedido?: boolean | Mesa$PedidoArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesa"]>



  export type MesaSelectScalar = {
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    estado?: boolean
  }

  export type MesaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "capacidad" | "estado", ExtArgs["result"]["mesa"]>
  export type MesaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | Mesa$PedidoArgs<ExtArgs>
    _count?: boolean | MesaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mesa"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      capacidad: number
      estado: $Enums.EstadoMesa
    }, ExtArgs["result"]["mesa"]>
    composites: {}
  }

  type MesaGetPayload<S extends boolean | null | undefined | MesaDefaultArgs> = $Result.GetResult<Prisma.$MesaPayload, S>

  type MesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MesaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesaCountAggregateInputType | true
    }

  export interface MesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mesa'], meta: { name: 'Mesa' } }
    /**
     * Find zero or one Mesa that matches the filter.
     * @param {MesaFindUniqueArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesaFindUniqueArgs>(args: SelectSubset<T, MesaFindUniqueArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mesa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MesaFindUniqueOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesaFindUniqueOrThrowArgs>(args: SelectSubset<T, MesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesaFindFirstArgs>(args?: SelectSubset<T, MesaFindFirstArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindFirstOrThrowArgs} args - Arguments to find a Mesa
     * @example
     * // Get one Mesa
     * const mesa = await prisma.mesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesaFindFirstOrThrowArgs>(args?: SelectSubset<T, MesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesas
     * const mesas = await prisma.mesa.findMany()
     * 
     * // Get first 10 Mesas
     * const mesas = await prisma.mesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesaWithIdOnly = await prisma.mesa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MesaFindManyArgs>(args?: SelectSubset<T, MesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mesa.
     * @param {MesaCreateArgs} args - Arguments to create a Mesa.
     * @example
     * // Create one Mesa
     * const Mesa = await prisma.mesa.create({
     *   data: {
     *     // ... data to create a Mesa
     *   }
     * })
     * 
     */
    create<T extends MesaCreateArgs>(args: SelectSubset<T, MesaCreateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mesas.
     * @param {MesaCreateManyArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesa = await prisma.mesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesaCreateManyArgs>(args?: SelectSubset<T, MesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mesa.
     * @param {MesaDeleteArgs} args - Arguments to delete one Mesa.
     * @example
     * // Delete one Mesa
     * const Mesa = await prisma.mesa.delete({
     *   where: {
     *     // ... filter to delete one Mesa
     *   }
     * })
     * 
     */
    delete<T extends MesaDeleteArgs>(args: SelectSubset<T, MesaDeleteArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mesa.
     * @param {MesaUpdateArgs} args - Arguments to update one Mesa.
     * @example
     * // Update one Mesa
     * const mesa = await prisma.mesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesaUpdateArgs>(args: SelectSubset<T, MesaUpdateArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mesas.
     * @param {MesaDeleteManyArgs} args - Arguments to filter Mesas to delete.
     * @example
     * // Delete a few Mesas
     * const { count } = await prisma.mesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesaDeleteManyArgs>(args?: SelectSubset<T, MesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesas
     * const mesa = await prisma.mesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesaUpdateManyArgs>(args: SelectSubset<T, MesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mesa.
     * @param {MesaUpsertArgs} args - Arguments to update or create a Mesa.
     * @example
     * // Update or create a Mesa
     * const mesa = await prisma.mesa.upsert({
     *   create: {
     *     // ... data to create a Mesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesa we want to update
     *   }
     * })
     */
    upsert<T extends MesaUpsertArgs>(args: SelectSubset<T, MesaUpsertArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaCountArgs} args - Arguments to filter Mesas to count.
     * @example
     * // Count the number of Mesas
     * const count = await prisma.mesa.count({
     *   where: {
     *     // ... the filter for the Mesas we want to count
     *   }
     * })
    **/
    count<T extends MesaCountArgs>(
      args?: Subset<T, MesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MesaAggregateArgs>(args: Subset<T, MesaAggregateArgs>): Prisma.PrismaPromise<GetMesaAggregateType<T>>

    /**
     * Group by Mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesaGroupByArgs['orderBy'] }
        : { orderBy?: MesaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mesa model
   */
  readonly fields: MesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends Mesa$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Mesa$PedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mesa model
   */
  interface MesaFieldRefs {
    readonly id: FieldRef<"Mesa", 'Int'>
    readonly numero: FieldRef<"Mesa", 'String'>
    readonly capacidad: FieldRef<"Mesa", 'Int'>
    readonly estado: FieldRef<"Mesa", 'EstadoMesa'>
  }
    

  // Custom InputTypes
  /**
   * Mesa findUnique
   */
  export type MesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findUniqueOrThrow
   */
  export type MesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa findFirst
   */
  export type MesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findFirstOrThrow
   */
  export type MesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesa to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesas.
     */
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa findMany
   */
  export type MesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter, which Mesas to fetch.
     */
    where?: MesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesas to fetch.
     */
    orderBy?: MesaOrderByWithRelationInput | MesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mesas.
     */
    cursor?: MesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesas.
     */
    skip?: number
    distinct?: MesaScalarFieldEnum | MesaScalarFieldEnum[]
  }

  /**
   * Mesa create
   */
  export type MesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mesa.
     */
    data: XOR<MesaCreateInput, MesaUncheckedCreateInput>
  }

  /**
   * Mesa createMany
   */
  export type MesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mesas.
     */
    data: MesaCreateManyInput | MesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesa update
   */
  export type MesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mesa.
     */
    data: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
    /**
     * Choose, which Mesa to update.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa updateMany
   */
  export type MesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mesas.
     */
    data: XOR<MesaUpdateManyMutationInput, MesaUncheckedUpdateManyInput>
    /**
     * Filter which Mesas to update
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to update.
     */
    limit?: number
  }

  /**
   * Mesa upsert
   */
  export type MesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mesa to update in case it exists.
     */
    where: MesaWhereUniqueInput
    /**
     * In case the Mesa found by the `where` argument doesn't exist, create a new Mesa with this data.
     */
    create: XOR<MesaCreateInput, MesaUncheckedCreateInput>
    /**
     * In case the Mesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesaUpdateInput, MesaUncheckedUpdateInput>
  }

  /**
   * Mesa delete
   */
  export type MesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
    /**
     * Filter which Mesa to delete.
     */
    where: MesaWhereUniqueInput
  }

  /**
   * Mesa deleteMany
   */
  export type MesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesas to delete
     */
    where?: MesaWhereInput
    /**
     * Limit how many Mesas to delete.
     */
    limit?: number
  }

  /**
   * Mesa.Pedido
   */
  export type Mesa$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Mesa without action
   */
  export type MesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesa
     */
    select?: MesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesa
     */
    omit?: MesaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesaInclude<ExtArgs> | null
  }


  /**
   * Model Carta
   */

  export type AggregateCarta = {
    _count: CartaCountAggregateOutputType | null
    _avg: CartaAvgAggregateOutputType | null
    _sum: CartaSumAggregateOutputType | null
    _min: CartaMinAggregateOutputType | null
    _max: CartaMaxAggregateOutputType | null
  }

  export type CartaAvgAggregateOutputType = {
    id: number | null
  }

  export type CartaSumAggregateOutputType = {
    id: number | null
  }

  export type CartaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: string | null
  }

  export type CartaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: string | null
  }

  export type CartaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    _all: number
  }


  export type CartaAvgAggregateInputType = {
    id?: true
  }

  export type CartaSumAggregateInputType = {
    id?: true
  }

  export type CartaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
  }

  export type CartaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
  }

  export type CartaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    _all?: true
  }

  export type CartaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carta to aggregate.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cartas
    **/
    _count?: true | CartaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartaMaxAggregateInputType
  }

  export type GetCartaAggregateType<T extends CartaAggregateArgs> = {
        [P in keyof T & keyof AggregateCarta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarta[P]>
      : GetScalarType<T[P], AggregateCarta[P]>
  }




  export type CartaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaWhereInput
    orderBy?: CartaOrderByWithAggregationInput | CartaOrderByWithAggregationInput[]
    by: CartaScalarFieldEnum[] | CartaScalarFieldEnum
    having?: CartaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartaCountAggregateInputType | true
    _avg?: CartaAvgAggregateInputType
    _sum?: CartaSumAggregateInputType
    _min?: CartaMinAggregateInputType
    _max?: CartaMaxAggregateInputType
  }

  export type CartaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: string
    _count: CartaCountAggregateOutputType | null
    _avg: CartaAvgAggregateOutputType | null
    _sum: CartaSumAggregateOutputType | null
    _min: CartaMinAggregateOutputType | null
    _max: CartaMaxAggregateOutputType | null
  }

  type GetCartaGroupByPayload<T extends CartaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartaGroupByOutputType[P]>
            : GetScalarType<T[P], CartaGroupByOutputType[P]>
        }
      >
    >


  export type CartaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    Plato?: boolean | Carta$PlatoArgs<ExtArgs>
    _count?: boolean | CartaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carta"]>



  export type CartaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
  }

  export type CartaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio", ExtArgs["result"]["carta"]>
  export type CartaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Plato?: boolean | Carta$PlatoArgs<ExtArgs>
    _count?: boolean | CartaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carta"
    objects: {
      Plato: Prisma.$PlatoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: string
    }, ExtArgs["result"]["carta"]>
    composites: {}
  }

  type CartaGetPayload<S extends boolean | null | undefined | CartaDefaultArgs> = $Result.GetResult<Prisma.$CartaPayload, S>

  type CartaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartaCountAggregateInputType | true
    }

  export interface CartaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carta'], meta: { name: 'Carta' } }
    /**
     * Find zero or one Carta that matches the filter.
     * @param {CartaFindUniqueArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartaFindUniqueArgs>(args: SelectSubset<T, CartaFindUniqueArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartaFindUniqueOrThrowArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartaFindUniqueOrThrowArgs>(args: SelectSubset<T, CartaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindFirstArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartaFindFirstArgs>(args?: SelectSubset<T, CartaFindFirstArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindFirstOrThrowArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartaFindFirstOrThrowArgs>(args?: SelectSubset<T, CartaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartas
     * const cartas = await prisma.carta.findMany()
     * 
     * // Get first 10 Cartas
     * const cartas = await prisma.carta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartaWithIdOnly = await prisma.carta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartaFindManyArgs>(args?: SelectSubset<T, CartaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carta.
     * @param {CartaCreateArgs} args - Arguments to create a Carta.
     * @example
     * // Create one Carta
     * const Carta = await prisma.carta.create({
     *   data: {
     *     // ... data to create a Carta
     *   }
     * })
     * 
     */
    create<T extends CartaCreateArgs>(args: SelectSubset<T, CartaCreateArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartas.
     * @param {CartaCreateManyArgs} args - Arguments to create many Cartas.
     * @example
     * // Create many Cartas
     * const carta = await prisma.carta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartaCreateManyArgs>(args?: SelectSubset<T, CartaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carta.
     * @param {CartaDeleteArgs} args - Arguments to delete one Carta.
     * @example
     * // Delete one Carta
     * const Carta = await prisma.carta.delete({
     *   where: {
     *     // ... filter to delete one Carta
     *   }
     * })
     * 
     */
    delete<T extends CartaDeleteArgs>(args: SelectSubset<T, CartaDeleteArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carta.
     * @param {CartaUpdateArgs} args - Arguments to update one Carta.
     * @example
     * // Update one Carta
     * const carta = await prisma.carta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartaUpdateArgs>(args: SelectSubset<T, CartaUpdateArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartas.
     * @param {CartaDeleteManyArgs} args - Arguments to filter Cartas to delete.
     * @example
     * // Delete a few Cartas
     * const { count } = await prisma.carta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartaDeleteManyArgs>(args?: SelectSubset<T, CartaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartas
     * const carta = await prisma.carta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartaUpdateManyArgs>(args: SelectSubset<T, CartaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carta.
     * @param {CartaUpsertArgs} args - Arguments to update or create a Carta.
     * @example
     * // Update or create a Carta
     * const carta = await prisma.carta.upsert({
     *   create: {
     *     // ... data to create a Carta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carta we want to update
     *   }
     * })
     */
    upsert<T extends CartaUpsertArgs>(args: SelectSubset<T, CartaUpsertArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaCountArgs} args - Arguments to filter Cartas to count.
     * @example
     * // Count the number of Cartas
     * const count = await prisma.carta.count({
     *   where: {
     *     // ... the filter for the Cartas we want to count
     *   }
     * })
    **/
    count<T extends CartaCountArgs>(
      args?: Subset<T, CartaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartaAggregateArgs>(args: Subset<T, CartaAggregateArgs>): Prisma.PrismaPromise<GetCartaAggregateType<T>>

    /**
     * Group by Carta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartaGroupByArgs['orderBy'] }
        : { orderBy?: CartaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carta model
   */
  readonly fields: CartaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Plato<T extends Carta$PlatoArgs<ExtArgs> = {}>(args?: Subset<T, Carta$PlatoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carta model
   */
  interface CartaFieldRefs {
    readonly id: FieldRef<"Carta", 'Int'>
    readonly nombre: FieldRef<"Carta", 'String'>
    readonly descripcion: FieldRef<"Carta", 'String'>
    readonly precio: FieldRef<"Carta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carta findUnique
   */
  export type CartaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta findUniqueOrThrow
   */
  export type CartaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta findFirst
   */
  export type CartaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartas.
     */
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta findFirstOrThrow
   */
  export type CartaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartas.
     */
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta findMany
   */
  export type CartaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Cartas to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta create
   */
  export type CartaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The data needed to create a Carta.
     */
    data: XOR<CartaCreateInput, CartaUncheckedCreateInput>
  }

  /**
   * Carta createMany
   */
  export type CartaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cartas.
     */
    data: CartaCreateManyInput | CartaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carta update
   */
  export type CartaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The data needed to update a Carta.
     */
    data: XOR<CartaUpdateInput, CartaUncheckedUpdateInput>
    /**
     * Choose, which Carta to update.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta updateMany
   */
  export type CartaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cartas.
     */
    data: XOR<CartaUpdateManyMutationInput, CartaUncheckedUpdateManyInput>
    /**
     * Filter which Cartas to update
     */
    where?: CartaWhereInput
    /**
     * Limit how many Cartas to update.
     */
    limit?: number
  }

  /**
   * Carta upsert
   */
  export type CartaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The filter to search for the Carta to update in case it exists.
     */
    where: CartaWhereUniqueInput
    /**
     * In case the Carta found by the `where` argument doesn't exist, create a new Carta with this data.
     */
    create: XOR<CartaCreateInput, CartaUncheckedCreateInput>
    /**
     * In case the Carta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartaUpdateInput, CartaUncheckedUpdateInput>
  }

  /**
   * Carta delete
   */
  export type CartaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter which Carta to delete.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta deleteMany
   */
  export type CartaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cartas to delete
     */
    where?: CartaWhereInput
    /**
     * Limit how many Cartas to delete.
     */
    limit?: number
  }

  /**
   * Carta.Plato
   */
  export type Carta$PlatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    where?: PlatoWhereInput
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    cursor?: PlatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Carta without action
   */
  export type CartaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
  }


  /**
   * Model Plato
   */

  export type AggregatePlato = {
    _count: PlatoCountAggregateOutputType | null
    _avg: PlatoAvgAggregateOutputType | null
    _sum: PlatoSumAggregateOutputType | null
    _min: PlatoMinAggregateOutputType | null
    _max: PlatoMaxAggregateOutputType | null
  }

  export type PlatoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    cartaId: number | null
  }

  export type PlatoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    cartaId: number | null
  }

  export type PlatoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    cartaId: number | null
  }

  export type PlatoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    cartaId: number | null
  }

  export type PlatoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    cartaId: number
    _all: number
  }


  export type PlatoAvgAggregateInputType = {
    id?: true
    precio?: true
    cartaId?: true
  }

  export type PlatoSumAggregateInputType = {
    id?: true
    precio?: true
    cartaId?: true
  }

  export type PlatoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    cartaId?: true
  }

  export type PlatoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    cartaId?: true
  }

  export type PlatoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    cartaId?: true
    _all?: true
  }

  export type PlatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plato to aggregate.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platoes
    **/
    _count?: true | PlatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatoMaxAggregateInputType
  }

  export type GetPlatoAggregateType<T extends PlatoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlato[P]>
      : GetScalarType<T[P], AggregatePlato[P]>
  }




  export type PlatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatoWhereInput
    orderBy?: PlatoOrderByWithAggregationInput | PlatoOrderByWithAggregationInput[]
    by: PlatoScalarFieldEnum[] | PlatoScalarFieldEnum
    having?: PlatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatoCountAggregateInputType | true
    _avg?: PlatoAvgAggregateInputType
    _sum?: PlatoSumAggregateInputType
    _min?: PlatoMinAggregateInputType
    _max?: PlatoMaxAggregateInputType
  }

  export type PlatoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: number
    cartaId: number
    _count: PlatoCountAggregateOutputType | null
    _avg: PlatoAvgAggregateOutputType | null
    _sum: PlatoSumAggregateOutputType | null
    _min: PlatoMinAggregateOutputType | null
    _max: PlatoMaxAggregateOutputType | null
  }

  type GetPlatoGroupByPayload<T extends PlatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatoGroupByOutputType[P]>
            : GetScalarType<T[P], PlatoGroupByOutputType[P]>
        }
      >
    >


  export type PlatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    cartaId?: boolean
    Carta?: boolean | CartaDefaultArgs<ExtArgs>
    PedidoItem?: boolean | Plato$PedidoItemArgs<ExtArgs>
    _count?: boolean | PlatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plato"]>



  export type PlatoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    cartaId?: boolean
  }

  export type PlatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "cartaId", ExtArgs["result"]["plato"]>
  export type PlatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carta?: boolean | CartaDefaultArgs<ExtArgs>
    PedidoItem?: boolean | Plato$PedidoItemArgs<ExtArgs>
    _count?: boolean | PlatoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plato"
    objects: {
      Carta: Prisma.$CartaPayload<ExtArgs>
      PedidoItem: Prisma.$PedidoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: number
      cartaId: number
    }, ExtArgs["result"]["plato"]>
    composites: {}
  }

  type PlatoGetPayload<S extends boolean | null | undefined | PlatoDefaultArgs> = $Result.GetResult<Prisma.$PlatoPayload, S>

  type PlatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatoCountAggregateInputType | true
    }

  export interface PlatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plato'], meta: { name: 'Plato' } }
    /**
     * Find zero or one Plato that matches the filter.
     * @param {PlatoFindUniqueArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatoFindUniqueArgs>(args: SelectSubset<T, PlatoFindUniqueArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatoFindUniqueOrThrowArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindFirstArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatoFindFirstArgs>(args?: SelectSubset<T, PlatoFindFirstArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindFirstOrThrowArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platoes
     * const platoes = await prisma.plato.findMany()
     * 
     * // Get first 10 Platoes
     * const platoes = await prisma.plato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platoWithIdOnly = await prisma.plato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatoFindManyArgs>(args?: SelectSubset<T, PlatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plato.
     * @param {PlatoCreateArgs} args - Arguments to create a Plato.
     * @example
     * // Create one Plato
     * const Plato = await prisma.plato.create({
     *   data: {
     *     // ... data to create a Plato
     *   }
     * })
     * 
     */
    create<T extends PlatoCreateArgs>(args: SelectSubset<T, PlatoCreateArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platoes.
     * @param {PlatoCreateManyArgs} args - Arguments to create many Platoes.
     * @example
     * // Create many Platoes
     * const plato = await prisma.plato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatoCreateManyArgs>(args?: SelectSubset<T, PlatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plato.
     * @param {PlatoDeleteArgs} args - Arguments to delete one Plato.
     * @example
     * // Delete one Plato
     * const Plato = await prisma.plato.delete({
     *   where: {
     *     // ... filter to delete one Plato
     *   }
     * })
     * 
     */
    delete<T extends PlatoDeleteArgs>(args: SelectSubset<T, PlatoDeleteArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plato.
     * @param {PlatoUpdateArgs} args - Arguments to update one Plato.
     * @example
     * // Update one Plato
     * const plato = await prisma.plato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatoUpdateArgs>(args: SelectSubset<T, PlatoUpdateArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platoes.
     * @param {PlatoDeleteManyArgs} args - Arguments to filter Platoes to delete.
     * @example
     * // Delete a few Platoes
     * const { count } = await prisma.plato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatoDeleteManyArgs>(args?: SelectSubset<T, PlatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platoes
     * const plato = await prisma.plato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatoUpdateManyArgs>(args: SelectSubset<T, PlatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plato.
     * @param {PlatoUpsertArgs} args - Arguments to update or create a Plato.
     * @example
     * // Update or create a Plato
     * const plato = await prisma.plato.upsert({
     *   create: {
     *     // ... data to create a Plato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plato we want to update
     *   }
     * })
     */
    upsert<T extends PlatoUpsertArgs>(args: SelectSubset<T, PlatoUpsertArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoCountArgs} args - Arguments to filter Platoes to count.
     * @example
     * // Count the number of Platoes
     * const count = await prisma.plato.count({
     *   where: {
     *     // ... the filter for the Platoes we want to count
     *   }
     * })
    **/
    count<T extends PlatoCountArgs>(
      args?: Subset<T, PlatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatoAggregateArgs>(args: Subset<T, PlatoAggregateArgs>): Prisma.PrismaPromise<GetPlatoAggregateType<T>>

    /**
     * Group by Plato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatoGroupByArgs['orderBy'] }
        : { orderBy?: PlatoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plato model
   */
  readonly fields: PlatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Carta<T extends CartaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartaDefaultArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PedidoItem<T extends Plato$PedidoItemArgs<ExtArgs> = {}>(args?: Subset<T, Plato$PedidoItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plato model
   */
  interface PlatoFieldRefs {
    readonly id: FieldRef<"Plato", 'Int'>
    readonly nombre: FieldRef<"Plato", 'String'>
    readonly descripcion: FieldRef<"Plato", 'String'>
    readonly precio: FieldRef<"Plato", 'Float'>
    readonly cartaId: FieldRef<"Plato", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Plato findUnique
   */
  export type PlatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato findUniqueOrThrow
   */
  export type PlatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato findFirst
   */
  export type PlatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platoes.
     */
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato findFirstOrThrow
   */
  export type PlatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platoes.
     */
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato findMany
   */
  export type PlatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Platoes to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato create
   */
  export type PlatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Plato.
     */
    data: XOR<PlatoCreateInput, PlatoUncheckedCreateInput>
  }

  /**
   * Plato createMany
   */
  export type PlatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platoes.
     */
    data: PlatoCreateManyInput | PlatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plato update
   */
  export type PlatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Plato.
     */
    data: XOR<PlatoUpdateInput, PlatoUncheckedUpdateInput>
    /**
     * Choose, which Plato to update.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato updateMany
   */
  export type PlatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platoes.
     */
    data: XOR<PlatoUpdateManyMutationInput, PlatoUncheckedUpdateManyInput>
    /**
     * Filter which Platoes to update
     */
    where?: PlatoWhereInput
    /**
     * Limit how many Platoes to update.
     */
    limit?: number
  }

  /**
   * Plato upsert
   */
  export type PlatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Plato to update in case it exists.
     */
    where: PlatoWhereUniqueInput
    /**
     * In case the Plato found by the `where` argument doesn't exist, create a new Plato with this data.
     */
    create: XOR<PlatoCreateInput, PlatoUncheckedCreateInput>
    /**
     * In case the Plato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatoUpdateInput, PlatoUncheckedUpdateInput>
  }

  /**
   * Plato delete
   */
  export type PlatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter which Plato to delete.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato deleteMany
   */
  export type PlatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platoes to delete
     */
    where?: PlatoWhereInput
    /**
     * Limit how many Platoes to delete.
     */
    limit?: number
  }

  /**
   * Plato.PedidoItem
   */
  export type Plato$PedidoItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    cursor?: PedidoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * Plato without action
   */
  export type PlatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
  }


  /**
   * Model TipoPago
   */

  export type AggregateTipoPago = {
    _count: TipoPagoCountAggregateOutputType | null
    _avg: TipoPagoAvgAggregateOutputType | null
    _sum: TipoPagoSumAggregateOutputType | null
    _min: TipoPagoMinAggregateOutputType | null
    _max: TipoPagoMaxAggregateOutputType | null
  }

  export type TipoPagoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoPagoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoPagoMinAggregateOutputType = {
    id: number | null
    nombre: $Enums.MetodoPago | null
  }

  export type TipoPagoMaxAggregateOutputType = {
    id: number | null
    nombre: $Enums.MetodoPago | null
  }

  export type TipoPagoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type TipoPagoAvgAggregateInputType = {
    id?: true
  }

  export type TipoPagoSumAggregateInputType = {
    id?: true
  }

  export type TipoPagoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type TipoPagoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type TipoPagoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type TipoPagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoPago to aggregate.
     */
    where?: TipoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoPagos to fetch.
     */
    orderBy?: TipoPagoOrderByWithRelationInput | TipoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoPagos
    **/
    _count?: true | TipoPagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoPagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoPagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoPagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoPagoMaxAggregateInputType
  }

  export type GetTipoPagoAggregateType<T extends TipoPagoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoPago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoPago[P]>
      : GetScalarType<T[P], AggregateTipoPago[P]>
  }




  export type TipoPagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoPagoWhereInput
    orderBy?: TipoPagoOrderByWithAggregationInput | TipoPagoOrderByWithAggregationInput[]
    by: TipoPagoScalarFieldEnum[] | TipoPagoScalarFieldEnum
    having?: TipoPagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoPagoCountAggregateInputType | true
    _avg?: TipoPagoAvgAggregateInputType
    _sum?: TipoPagoSumAggregateInputType
    _min?: TipoPagoMinAggregateInputType
    _max?: TipoPagoMaxAggregateInputType
  }

  export type TipoPagoGroupByOutputType = {
    id: number
    nombre: $Enums.MetodoPago
    _count: TipoPagoCountAggregateOutputType | null
    _avg: TipoPagoAvgAggregateOutputType | null
    _sum: TipoPagoSumAggregateOutputType | null
    _min: TipoPagoMinAggregateOutputType | null
    _max: TipoPagoMaxAggregateOutputType | null
  }

  type GetTipoPagoGroupByPayload<T extends TipoPagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoPagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoPagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoPagoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoPagoGroupByOutputType[P]>
        }
      >
    >


  export type TipoPagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    Comprobante?: boolean | TipoPago$ComprobanteArgs<ExtArgs>
    _count?: boolean | TipoPagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoPago"]>



  export type TipoPagoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type TipoPagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["tipoPago"]>
  export type TipoPagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comprobante?: boolean | TipoPago$ComprobanteArgs<ExtArgs>
    _count?: boolean | TipoPagoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoPagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoPago"
    objects: {
      Comprobante: Prisma.$ComprobantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: $Enums.MetodoPago
    }, ExtArgs["result"]["tipoPago"]>
    composites: {}
  }

  type TipoPagoGetPayload<S extends boolean | null | undefined | TipoPagoDefaultArgs> = $Result.GetResult<Prisma.$TipoPagoPayload, S>

  type TipoPagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoPagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoPagoCountAggregateInputType | true
    }

  export interface TipoPagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoPago'], meta: { name: 'TipoPago' } }
    /**
     * Find zero or one TipoPago that matches the filter.
     * @param {TipoPagoFindUniqueArgs} args - Arguments to find a TipoPago
     * @example
     * // Get one TipoPago
     * const tipoPago = await prisma.tipoPago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoPagoFindUniqueArgs>(args: SelectSubset<T, TipoPagoFindUniqueArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoPago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoPagoFindUniqueOrThrowArgs} args - Arguments to find a TipoPago
     * @example
     * // Get one TipoPago
     * const tipoPago = await prisma.tipoPago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoPagoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoPagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoPago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPagoFindFirstArgs} args - Arguments to find a TipoPago
     * @example
     * // Get one TipoPago
     * const tipoPago = await prisma.tipoPago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoPagoFindFirstArgs>(args?: SelectSubset<T, TipoPagoFindFirstArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoPago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPagoFindFirstOrThrowArgs} args - Arguments to find a TipoPago
     * @example
     * // Get one TipoPago
     * const tipoPago = await prisma.tipoPago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoPagoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoPagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoPagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoPagos
     * const tipoPagos = await prisma.tipoPago.findMany()
     * 
     * // Get first 10 TipoPagos
     * const tipoPagos = await prisma.tipoPago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoPagoWithIdOnly = await prisma.tipoPago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoPagoFindManyArgs>(args?: SelectSubset<T, TipoPagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoPago.
     * @param {TipoPagoCreateArgs} args - Arguments to create a TipoPago.
     * @example
     * // Create one TipoPago
     * const TipoPago = await prisma.tipoPago.create({
     *   data: {
     *     // ... data to create a TipoPago
     *   }
     * })
     * 
     */
    create<T extends TipoPagoCreateArgs>(args: SelectSubset<T, TipoPagoCreateArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoPagos.
     * @param {TipoPagoCreateManyArgs} args - Arguments to create many TipoPagos.
     * @example
     * // Create many TipoPagos
     * const tipoPago = await prisma.tipoPago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoPagoCreateManyArgs>(args?: SelectSubset<T, TipoPagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoPago.
     * @param {TipoPagoDeleteArgs} args - Arguments to delete one TipoPago.
     * @example
     * // Delete one TipoPago
     * const TipoPago = await prisma.tipoPago.delete({
     *   where: {
     *     // ... filter to delete one TipoPago
     *   }
     * })
     * 
     */
    delete<T extends TipoPagoDeleteArgs>(args: SelectSubset<T, TipoPagoDeleteArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoPago.
     * @param {TipoPagoUpdateArgs} args - Arguments to update one TipoPago.
     * @example
     * // Update one TipoPago
     * const tipoPago = await prisma.tipoPago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoPagoUpdateArgs>(args: SelectSubset<T, TipoPagoUpdateArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoPagos.
     * @param {TipoPagoDeleteManyArgs} args - Arguments to filter TipoPagos to delete.
     * @example
     * // Delete a few TipoPagos
     * const { count } = await prisma.tipoPago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoPagoDeleteManyArgs>(args?: SelectSubset<T, TipoPagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoPagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoPagos
     * const tipoPago = await prisma.tipoPago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoPagoUpdateManyArgs>(args: SelectSubset<T, TipoPagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoPago.
     * @param {TipoPagoUpsertArgs} args - Arguments to update or create a TipoPago.
     * @example
     * // Update or create a TipoPago
     * const tipoPago = await prisma.tipoPago.upsert({
     *   create: {
     *     // ... data to create a TipoPago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoPago we want to update
     *   }
     * })
     */
    upsert<T extends TipoPagoUpsertArgs>(args: SelectSubset<T, TipoPagoUpsertArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoPagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPagoCountArgs} args - Arguments to filter TipoPagos to count.
     * @example
     * // Count the number of TipoPagos
     * const count = await prisma.tipoPago.count({
     *   where: {
     *     // ... the filter for the TipoPagos we want to count
     *   }
     * })
    **/
    count<T extends TipoPagoCountArgs>(
      args?: Subset<T, TipoPagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoPagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoPago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoPagoAggregateArgs>(args: Subset<T, TipoPagoAggregateArgs>): Prisma.PrismaPromise<GetTipoPagoAggregateType<T>>

    /**
     * Group by TipoPago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoPagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoPagoGroupByArgs['orderBy'] }
        : { orderBy?: TipoPagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoPagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoPago model
   */
  readonly fields: TipoPagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoPago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoPagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comprobante<T extends TipoPago$ComprobanteArgs<ExtArgs> = {}>(args?: Subset<T, TipoPago$ComprobanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoPago model
   */
  interface TipoPagoFieldRefs {
    readonly id: FieldRef<"TipoPago", 'Int'>
    readonly nombre: FieldRef<"TipoPago", 'MetodoPago'>
  }
    

  // Custom InputTypes
  /**
   * TipoPago findUnique
   */
  export type TipoPagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * Filter, which TipoPago to fetch.
     */
    where: TipoPagoWhereUniqueInput
  }

  /**
   * TipoPago findUniqueOrThrow
   */
  export type TipoPagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * Filter, which TipoPago to fetch.
     */
    where: TipoPagoWhereUniqueInput
  }

  /**
   * TipoPago findFirst
   */
  export type TipoPagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * Filter, which TipoPago to fetch.
     */
    where?: TipoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoPagos to fetch.
     */
    orderBy?: TipoPagoOrderByWithRelationInput | TipoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoPagos.
     */
    cursor?: TipoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoPagos.
     */
    distinct?: TipoPagoScalarFieldEnum | TipoPagoScalarFieldEnum[]
  }

  /**
   * TipoPago findFirstOrThrow
   */
  export type TipoPagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * Filter, which TipoPago to fetch.
     */
    where?: TipoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoPagos to fetch.
     */
    orderBy?: TipoPagoOrderByWithRelationInput | TipoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoPagos.
     */
    cursor?: TipoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoPagos.
     */
    distinct?: TipoPagoScalarFieldEnum | TipoPagoScalarFieldEnum[]
  }

  /**
   * TipoPago findMany
   */
  export type TipoPagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * Filter, which TipoPagos to fetch.
     */
    where?: TipoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoPagos to fetch.
     */
    orderBy?: TipoPagoOrderByWithRelationInput | TipoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoPagos.
     */
    cursor?: TipoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoPagos.
     */
    skip?: number
    distinct?: TipoPagoScalarFieldEnum | TipoPagoScalarFieldEnum[]
  }

  /**
   * TipoPago create
   */
  export type TipoPagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoPago.
     */
    data?: XOR<TipoPagoCreateInput, TipoPagoUncheckedCreateInput>
  }

  /**
   * TipoPago createMany
   */
  export type TipoPagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoPagos.
     */
    data: TipoPagoCreateManyInput | TipoPagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoPago update
   */
  export type TipoPagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoPago.
     */
    data: XOR<TipoPagoUpdateInput, TipoPagoUncheckedUpdateInput>
    /**
     * Choose, which TipoPago to update.
     */
    where: TipoPagoWhereUniqueInput
  }

  /**
   * TipoPago updateMany
   */
  export type TipoPagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoPagos.
     */
    data: XOR<TipoPagoUpdateManyMutationInput, TipoPagoUncheckedUpdateManyInput>
    /**
     * Filter which TipoPagos to update
     */
    where?: TipoPagoWhereInput
    /**
     * Limit how many TipoPagos to update.
     */
    limit?: number
  }

  /**
   * TipoPago upsert
   */
  export type TipoPagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoPago to update in case it exists.
     */
    where: TipoPagoWhereUniqueInput
    /**
     * In case the TipoPago found by the `where` argument doesn't exist, create a new TipoPago with this data.
     */
    create: XOR<TipoPagoCreateInput, TipoPagoUncheckedCreateInput>
    /**
     * In case the TipoPago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoPagoUpdateInput, TipoPagoUncheckedUpdateInput>
  }

  /**
   * TipoPago delete
   */
  export type TipoPagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
    /**
     * Filter which TipoPago to delete.
     */
    where: TipoPagoWhereUniqueInput
  }

  /**
   * TipoPago deleteMany
   */
  export type TipoPagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoPagos to delete
     */
    where?: TipoPagoWhereInput
    /**
     * Limit how many TipoPagos to delete.
     */
    limit?: number
  }

  /**
   * TipoPago.Comprobante
   */
  export type TipoPago$ComprobanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    where?: ComprobanteWhereInput
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    cursor?: ComprobanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * TipoPago without action
   */
  export type TipoPagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPago
     */
    select?: TipoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPago
     */
    omit?: TipoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPagoInclude<ExtArgs> | null
  }


  /**
   * Model Comprobante
   */

  export type AggregateComprobante = {
    _count: ComprobanteCountAggregateOutputType | null
    _avg: ComprobanteAvgAggregateOutputType | null
    _sum: ComprobanteSumAggregateOutputType | null
    _min: ComprobanteMinAggregateOutputType | null
    _max: ComprobanteMaxAggregateOutputType | null
  }

  export type ComprobanteAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    tipoPagoId: number | null
  }

  export type ComprobanteSumAggregateOutputType = {
    id: number | null
    numero: number | null
    tipoPagoId: number | null
  }

  export type ComprobanteMinAggregateOutputType = {
    id: number | null
    tipoComprobante: $Enums.TipoComprobante | null
    numero: number | null
    fechaEmision: Date | null
    tipoPagoId: number | null
  }

  export type ComprobanteMaxAggregateOutputType = {
    id: number | null
    tipoComprobante: $Enums.TipoComprobante | null
    numero: number | null
    fechaEmision: Date | null
    tipoPagoId: number | null
  }

  export type ComprobanteCountAggregateOutputType = {
    id: number
    tipoComprobante: number
    numero: number
    fechaEmision: number
    tipoPagoId: number
    _all: number
  }


  export type ComprobanteAvgAggregateInputType = {
    id?: true
    numero?: true
    tipoPagoId?: true
  }

  export type ComprobanteSumAggregateInputType = {
    id?: true
    numero?: true
    tipoPagoId?: true
  }

  export type ComprobanteMinAggregateInputType = {
    id?: true
    tipoComprobante?: true
    numero?: true
    fechaEmision?: true
    tipoPagoId?: true
  }

  export type ComprobanteMaxAggregateInputType = {
    id?: true
    tipoComprobante?: true
    numero?: true
    fechaEmision?: true
    tipoPagoId?: true
  }

  export type ComprobanteCountAggregateInputType = {
    id?: true
    tipoComprobante?: true
    numero?: true
    fechaEmision?: true
    tipoPagoId?: true
    _all?: true
  }

  export type ComprobanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comprobante to aggregate.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comprobantes
    **/
    _count?: true | ComprobanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComprobanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComprobanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComprobanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComprobanteMaxAggregateInputType
  }

  export type GetComprobanteAggregateType<T extends ComprobanteAggregateArgs> = {
        [P in keyof T & keyof AggregateComprobante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprobante[P]>
      : GetScalarType<T[P], AggregateComprobante[P]>
  }




  export type ComprobanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprobanteWhereInput
    orderBy?: ComprobanteOrderByWithAggregationInput | ComprobanteOrderByWithAggregationInput[]
    by: ComprobanteScalarFieldEnum[] | ComprobanteScalarFieldEnum
    having?: ComprobanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComprobanteCountAggregateInputType | true
    _avg?: ComprobanteAvgAggregateInputType
    _sum?: ComprobanteSumAggregateInputType
    _min?: ComprobanteMinAggregateInputType
    _max?: ComprobanteMaxAggregateInputType
  }

  export type ComprobanteGroupByOutputType = {
    id: number
    tipoComprobante: $Enums.TipoComprobante
    numero: number
    fechaEmision: Date
    tipoPagoId: number
    _count: ComprobanteCountAggregateOutputType | null
    _avg: ComprobanteAvgAggregateOutputType | null
    _sum: ComprobanteSumAggregateOutputType | null
    _min: ComprobanteMinAggregateOutputType | null
    _max: ComprobanteMaxAggregateOutputType | null
  }

  type GetComprobanteGroupByPayload<T extends ComprobanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComprobanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComprobanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComprobanteGroupByOutputType[P]>
            : GetScalarType<T[P], ComprobanteGroupByOutputType[P]>
        }
      >
    >


  export type ComprobanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoComprobante?: boolean
    numero?: boolean
    fechaEmision?: boolean
    tipoPagoId?: boolean
    TipoPago?: boolean | TipoPagoDefaultArgs<ExtArgs>
    Pedido?: boolean | Comprobante$PedidoArgs<ExtArgs>
    _count?: boolean | ComprobanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprobante"]>



  export type ComprobanteSelectScalar = {
    id?: boolean
    tipoComprobante?: boolean
    numero?: boolean
    fechaEmision?: boolean
    tipoPagoId?: boolean
  }

  export type ComprobanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoComprobante" | "numero" | "fechaEmision" | "tipoPagoId", ExtArgs["result"]["comprobante"]>
  export type ComprobanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TipoPago?: boolean | TipoPagoDefaultArgs<ExtArgs>
    Pedido?: boolean | Comprobante$PedidoArgs<ExtArgs>
    _count?: boolean | ComprobanteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ComprobantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comprobante"
    objects: {
      TipoPago: Prisma.$TipoPagoPayload<ExtArgs>
      Pedido: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipoComprobante: $Enums.TipoComprobante
      numero: number
      fechaEmision: Date
      tipoPagoId: number
    }, ExtArgs["result"]["comprobante"]>
    composites: {}
  }

  type ComprobanteGetPayload<S extends boolean | null | undefined | ComprobanteDefaultArgs> = $Result.GetResult<Prisma.$ComprobantePayload, S>

  type ComprobanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComprobanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComprobanteCountAggregateInputType | true
    }

  export interface ComprobanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comprobante'], meta: { name: 'Comprobante' } }
    /**
     * Find zero or one Comprobante that matches the filter.
     * @param {ComprobanteFindUniqueArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComprobanteFindUniqueArgs>(args: SelectSubset<T, ComprobanteFindUniqueArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comprobante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComprobanteFindUniqueOrThrowArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComprobanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ComprobanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprobante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindFirstArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComprobanteFindFirstArgs>(args?: SelectSubset<T, ComprobanteFindFirstArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprobante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindFirstOrThrowArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComprobanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ComprobanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comprobantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comprobantes
     * const comprobantes = await prisma.comprobante.findMany()
     * 
     * // Get first 10 Comprobantes
     * const comprobantes = await prisma.comprobante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comprobanteWithIdOnly = await prisma.comprobante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComprobanteFindManyArgs>(args?: SelectSubset<T, ComprobanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comprobante.
     * @param {ComprobanteCreateArgs} args - Arguments to create a Comprobante.
     * @example
     * // Create one Comprobante
     * const Comprobante = await prisma.comprobante.create({
     *   data: {
     *     // ... data to create a Comprobante
     *   }
     * })
     * 
     */
    create<T extends ComprobanteCreateArgs>(args: SelectSubset<T, ComprobanteCreateArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comprobantes.
     * @param {ComprobanteCreateManyArgs} args - Arguments to create many Comprobantes.
     * @example
     * // Create many Comprobantes
     * const comprobante = await prisma.comprobante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComprobanteCreateManyArgs>(args?: SelectSubset<T, ComprobanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comprobante.
     * @param {ComprobanteDeleteArgs} args - Arguments to delete one Comprobante.
     * @example
     * // Delete one Comprobante
     * const Comprobante = await prisma.comprobante.delete({
     *   where: {
     *     // ... filter to delete one Comprobante
     *   }
     * })
     * 
     */
    delete<T extends ComprobanteDeleteArgs>(args: SelectSubset<T, ComprobanteDeleteArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comprobante.
     * @param {ComprobanteUpdateArgs} args - Arguments to update one Comprobante.
     * @example
     * // Update one Comprobante
     * const comprobante = await prisma.comprobante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComprobanteUpdateArgs>(args: SelectSubset<T, ComprobanteUpdateArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comprobantes.
     * @param {ComprobanteDeleteManyArgs} args - Arguments to filter Comprobantes to delete.
     * @example
     * // Delete a few Comprobantes
     * const { count } = await prisma.comprobante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComprobanteDeleteManyArgs>(args?: SelectSubset<T, ComprobanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comprobantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comprobantes
     * const comprobante = await prisma.comprobante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComprobanteUpdateManyArgs>(args: SelectSubset<T, ComprobanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comprobante.
     * @param {ComprobanteUpsertArgs} args - Arguments to update or create a Comprobante.
     * @example
     * // Update or create a Comprobante
     * const comprobante = await prisma.comprobante.upsert({
     *   create: {
     *     // ... data to create a Comprobante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comprobante we want to update
     *   }
     * })
     */
    upsert<T extends ComprobanteUpsertArgs>(args: SelectSubset<T, ComprobanteUpsertArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comprobantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteCountArgs} args - Arguments to filter Comprobantes to count.
     * @example
     * // Count the number of Comprobantes
     * const count = await prisma.comprobante.count({
     *   where: {
     *     // ... the filter for the Comprobantes we want to count
     *   }
     * })
    **/
    count<T extends ComprobanteCountArgs>(
      args?: Subset<T, ComprobanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComprobanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comprobante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComprobanteAggregateArgs>(args: Subset<T, ComprobanteAggregateArgs>): Prisma.PrismaPromise<GetComprobanteAggregateType<T>>

    /**
     * Group by Comprobante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComprobanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComprobanteGroupByArgs['orderBy'] }
        : { orderBy?: ComprobanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComprobanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComprobanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comprobante model
   */
  readonly fields: ComprobanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comprobante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComprobanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TipoPago<T extends TipoPagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoPagoDefaultArgs<ExtArgs>>): Prisma__TipoPagoClient<$Result.GetResult<Prisma.$TipoPagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pedido<T extends Comprobante$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Comprobante$PedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comprobante model
   */
  interface ComprobanteFieldRefs {
    readonly id: FieldRef<"Comprobante", 'Int'>
    readonly tipoComprobante: FieldRef<"Comprobante", 'TipoComprobante'>
    readonly numero: FieldRef<"Comprobante", 'Int'>
    readonly fechaEmision: FieldRef<"Comprobante", 'DateTime'>
    readonly tipoPagoId: FieldRef<"Comprobante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comprobante findUnique
   */
  export type ComprobanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante findUniqueOrThrow
   */
  export type ComprobanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante findFirst
   */
  export type ComprobanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comprobantes.
     */
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante findFirstOrThrow
   */
  export type ComprobanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comprobantes.
     */
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante findMany
   */
  export type ComprobanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobantes to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante create
   */
  export type ComprobanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Comprobante.
     */
    data: XOR<ComprobanteCreateInput, ComprobanteUncheckedCreateInput>
  }

  /**
   * Comprobante createMany
   */
  export type ComprobanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comprobantes.
     */
    data: ComprobanteCreateManyInput | ComprobanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comprobante update
   */
  export type ComprobanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Comprobante.
     */
    data: XOR<ComprobanteUpdateInput, ComprobanteUncheckedUpdateInput>
    /**
     * Choose, which Comprobante to update.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante updateMany
   */
  export type ComprobanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comprobantes.
     */
    data: XOR<ComprobanteUpdateManyMutationInput, ComprobanteUncheckedUpdateManyInput>
    /**
     * Filter which Comprobantes to update
     */
    where?: ComprobanteWhereInput
    /**
     * Limit how many Comprobantes to update.
     */
    limit?: number
  }

  /**
   * Comprobante upsert
   */
  export type ComprobanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Comprobante to update in case it exists.
     */
    where: ComprobanteWhereUniqueInput
    /**
     * In case the Comprobante found by the `where` argument doesn't exist, create a new Comprobante with this data.
     */
    create: XOR<ComprobanteCreateInput, ComprobanteUncheckedCreateInput>
    /**
     * In case the Comprobante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComprobanteUpdateInput, ComprobanteUncheckedUpdateInput>
  }

  /**
   * Comprobante delete
   */
  export type ComprobanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter which Comprobante to delete.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante deleteMany
   */
  export type ComprobanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comprobantes to delete
     */
    where?: ComprobanteWhereInput
    /**
     * Limit how many Comprobantes to delete.
     */
    limit?: number
  }

  /**
   * Comprobante.Pedido
   */
  export type Comprobante$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Comprobante without action
   */
  export type ComprobanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    total: number | null
    clienteId: number | null
    mesaId: number | null
    comprobanteId: number | null
    detalleAdicionalId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    total: number | null
    clienteId: number | null
    mesaId: number | null
    comprobanteId: number | null
    detalleAdicionalId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    total: number | null
    clienteId: number | null
    mesaId: number | null
    comprobanteId: number | null
    detalleAdicionalId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    total: number | null
    clienteId: number | null
    mesaId: number | null
    comprobanteId: number | null
    detalleAdicionalId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    fecha: number
    total: number
    clienteId: number
    mesaId: number
    comprobanteId: number
    detalleAdicionalId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    total?: true
    clienteId?: true
    mesaId?: true
    comprobanteId?: true
    detalleAdicionalId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    total?: true
    clienteId?: true
    mesaId?: true
    comprobanteId?: true
    detalleAdicionalId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    clienteId?: true
    mesaId?: true
    comprobanteId?: true
    detalleAdicionalId?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    clienteId?: true
    mesaId?: true
    comprobanteId?: true
    detalleAdicionalId?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    clienteId?: true
    mesaId?: true
    comprobanteId?: true
    detalleAdicionalId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    fecha: Date
    total: number
    clienteId: number
    mesaId: number
    comprobanteId: number
    detalleAdicionalId: number | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    total?: boolean
    clienteId?: boolean
    mesaId?: boolean
    comprobanteId?: boolean
    detalleAdicionalId?: boolean
    Cliente?: boolean | Pedido$ClienteArgs<ExtArgs>
    Mesa?: boolean | MesaDefaultArgs<ExtArgs>
    Comprobante?: boolean | ComprobanteDefaultArgs<ExtArgs>
    DetalleAdicional?: boolean | Pedido$DetalleAdicionalArgs<ExtArgs>
    PedidoItem?: boolean | Pedido$PedidoItemArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    id?: boolean
    fecha?: boolean
    total?: boolean
    clienteId?: boolean
    mesaId?: boolean
    comprobanteId?: boolean
    detalleAdicionalId?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "total" | "clienteId" | "mesaId" | "comprobanteId" | "detalleAdicionalId", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | Pedido$ClienteArgs<ExtArgs>
    Mesa?: boolean | MesaDefaultArgs<ExtArgs>
    Comprobante?: boolean | ComprobanteDefaultArgs<ExtArgs>
    DetalleAdicional?: boolean | Pedido$DetalleAdicionalArgs<ExtArgs>
    PedidoItem?: boolean | Pedido$PedidoItemArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      Cliente: Prisma.$ClientePayload<ExtArgs> | null
      Mesa: Prisma.$MesaPayload<ExtArgs>
      Comprobante: Prisma.$ComprobantePayload<ExtArgs>
      DetalleAdicional: Prisma.$DetalleAdicionalPayload<ExtArgs> | null
      PedidoItem: Prisma.$PedidoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      total: number
      clienteId: number
      mesaId: number
      comprobanteId: number
      detalleAdicionalId: number | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cliente<T extends Pedido$ClienteArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$ClienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Mesa<T extends MesaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MesaDefaultArgs<ExtArgs>>): Prisma__MesaClient<$Result.GetResult<Prisma.$MesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Comprobante<T extends ComprobanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComprobanteDefaultArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DetalleAdicional<T extends Pedido$DetalleAdicionalArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$DetalleAdicionalArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PedidoItem<T extends Pedido$PedidoItemArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$PedidoItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly fecha: FieldRef<"Pedido", 'DateTime'>
    readonly total: FieldRef<"Pedido", 'Float'>
    readonly clienteId: FieldRef<"Pedido", 'Int'>
    readonly mesaId: FieldRef<"Pedido", 'Int'>
    readonly comprobanteId: FieldRef<"Pedido", 'Int'>
    readonly detalleAdicionalId: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.Cliente
   */
  export type Pedido$ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * Pedido.DetalleAdicional
   */
  export type Pedido$DetalleAdicionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    where?: DetalleAdicionalWhereInput
  }

  /**
   * Pedido.PedidoItem
   */
  export type Pedido$PedidoItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    cursor?: PedidoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoItem
   */

  export type AggregatePedidoItem = {
    _count: PedidoItemCountAggregateOutputType | null
    _avg: PedidoItemAvgAggregateOutputType | null
    _sum: PedidoItemSumAggregateOutputType | null
    _min: PedidoItemMinAggregateOutputType | null
    _max: PedidoItemMaxAggregateOutputType | null
  }

  export type PedidoItemAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    pedidoId: number | null
    platoId: number | null
  }

  export type PedidoItemSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    pedidoId: number | null
    platoId: number | null
  }

  export type PedidoItemMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    pedidoId: number | null
    platoId: number | null
  }

  export type PedidoItemMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    pedidoId: number | null
    platoId: number | null
  }

  export type PedidoItemCountAggregateOutputType = {
    id: number
    cantidad: number
    pedidoId: number
    platoId: number
    _all: number
  }


  export type PedidoItemAvgAggregateInputType = {
    id?: true
    cantidad?: true
    pedidoId?: true
    platoId?: true
  }

  export type PedidoItemSumAggregateInputType = {
    id?: true
    cantidad?: true
    pedidoId?: true
    platoId?: true
  }

  export type PedidoItemMinAggregateInputType = {
    id?: true
    cantidad?: true
    pedidoId?: true
    platoId?: true
  }

  export type PedidoItemMaxAggregateInputType = {
    id?: true
    cantidad?: true
    pedidoId?: true
    platoId?: true
  }

  export type PedidoItemCountAggregateInputType = {
    id?: true
    cantidad?: true
    pedidoId?: true
    platoId?: true
    _all?: true
  }

  export type PedidoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoItem to aggregate.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoItems
    **/
    _count?: true | PedidoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoItemMaxAggregateInputType
  }

  export type GetPedidoItemAggregateType<T extends PedidoItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoItem[P]>
      : GetScalarType<T[P], AggregatePedidoItem[P]>
  }




  export type PedidoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithAggregationInput | PedidoItemOrderByWithAggregationInput[]
    by: PedidoItemScalarFieldEnum[] | PedidoItemScalarFieldEnum
    having?: PedidoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoItemCountAggregateInputType | true
    _avg?: PedidoItemAvgAggregateInputType
    _sum?: PedidoItemSumAggregateInputType
    _min?: PedidoItemMinAggregateInputType
    _max?: PedidoItemMaxAggregateInputType
  }

  export type PedidoItemGroupByOutputType = {
    id: number
    cantidad: number
    pedidoId: number
    platoId: number
    _count: PedidoItemCountAggregateOutputType | null
    _avg: PedidoItemAvgAggregateOutputType | null
    _sum: PedidoItemSumAggregateOutputType | null
    _min: PedidoItemMinAggregateOutputType | null
    _max: PedidoItemMaxAggregateOutputType | null
  }

  type GetPedidoItemGroupByPayload<T extends PedidoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoItemGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoItemGroupByOutputType[P]>
        }
      >
    >


  export type PedidoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    pedidoId?: boolean
    platoId?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Plato?: boolean | PlatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoItem"]>



  export type PedidoItemSelectScalar = {
    id?: boolean
    cantidad?: boolean
    pedidoId?: boolean
    platoId?: boolean
  }

  export type PedidoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cantidad" | "pedidoId" | "platoId", ExtArgs["result"]["pedidoItem"]>
  export type PedidoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Plato?: boolean | PlatoDefaultArgs<ExtArgs>
  }

  export type $PedidoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoItem"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>
      Plato: Prisma.$PlatoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      pedidoId: number
      platoId: number
    }, ExtArgs["result"]["pedidoItem"]>
    composites: {}
  }

  type PedidoItemGetPayload<S extends boolean | null | undefined | PedidoItemDefaultArgs> = $Result.GetResult<Prisma.$PedidoItemPayload, S>

  type PedidoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoItemCountAggregateInputType | true
    }

  export interface PedidoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoItem'], meta: { name: 'PedidoItem' } }
    /**
     * Find zero or one PedidoItem that matches the filter.
     * @param {PedidoItemFindUniqueArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoItemFindUniqueArgs>(args: SelectSubset<T, PedidoItemFindUniqueArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoItemFindUniqueOrThrowArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindFirstArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoItemFindFirstArgs>(args?: SelectSubset<T, PedidoItemFindFirstArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindFirstOrThrowArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoItems
     * const pedidoItems = await prisma.pedidoItem.findMany()
     * 
     * // Get first 10 PedidoItems
     * const pedidoItems = await prisma.pedidoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoItemWithIdOnly = await prisma.pedidoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoItemFindManyArgs>(args?: SelectSubset<T, PedidoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoItem.
     * @param {PedidoItemCreateArgs} args - Arguments to create a PedidoItem.
     * @example
     * // Create one PedidoItem
     * const PedidoItem = await prisma.pedidoItem.create({
     *   data: {
     *     // ... data to create a PedidoItem
     *   }
     * })
     * 
     */
    create<T extends PedidoItemCreateArgs>(args: SelectSubset<T, PedidoItemCreateArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoItems.
     * @param {PedidoItemCreateManyArgs} args - Arguments to create many PedidoItems.
     * @example
     * // Create many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoItemCreateManyArgs>(args?: SelectSubset<T, PedidoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PedidoItem.
     * @param {PedidoItemDeleteArgs} args - Arguments to delete one PedidoItem.
     * @example
     * // Delete one PedidoItem
     * const PedidoItem = await prisma.pedidoItem.delete({
     *   where: {
     *     // ... filter to delete one PedidoItem
     *   }
     * })
     * 
     */
    delete<T extends PedidoItemDeleteArgs>(args: SelectSubset<T, PedidoItemDeleteArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoItem.
     * @param {PedidoItemUpdateArgs} args - Arguments to update one PedidoItem.
     * @example
     * // Update one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoItemUpdateArgs>(args: SelectSubset<T, PedidoItemUpdateArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoItems.
     * @param {PedidoItemDeleteManyArgs} args - Arguments to filter PedidoItems to delete.
     * @example
     * // Delete a few PedidoItems
     * const { count } = await prisma.pedidoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoItemDeleteManyArgs>(args?: SelectSubset<T, PedidoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoItemUpdateManyArgs>(args: SelectSubset<T, PedidoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PedidoItem.
     * @param {PedidoItemUpsertArgs} args - Arguments to update or create a PedidoItem.
     * @example
     * // Update or create a PedidoItem
     * const pedidoItem = await prisma.pedidoItem.upsert({
     *   create: {
     *     // ... data to create a PedidoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoItem we want to update
     *   }
     * })
     */
    upsert<T extends PedidoItemUpsertArgs>(args: SelectSubset<T, PedidoItemUpsertArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemCountArgs} args - Arguments to filter PedidoItems to count.
     * @example
     * // Count the number of PedidoItems
     * const count = await prisma.pedidoItem.count({
     *   where: {
     *     // ... the filter for the PedidoItems we want to count
     *   }
     * })
    **/
    count<T extends PedidoItemCountArgs>(
      args?: Subset<T, PedidoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoItemAggregateArgs>(args: Subset<T, PedidoItemAggregateArgs>): Prisma.PrismaPromise<GetPedidoItemAggregateType<T>>

    /**
     * Group by PedidoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoItemGroupByArgs['orderBy'] }
        : { orderBy?: PedidoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoItem model
   */
  readonly fields: PedidoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Plato<T extends PlatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatoDefaultArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PedidoItem model
   */
  interface PedidoItemFieldRefs {
    readonly id: FieldRef<"PedidoItem", 'Int'>
    readonly cantidad: FieldRef<"PedidoItem", 'Int'>
    readonly pedidoId: FieldRef<"PedidoItem", 'Int'>
    readonly platoId: FieldRef<"PedidoItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PedidoItem findUnique
   */
  export type PedidoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem findUniqueOrThrow
   */
  export type PedidoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem findFirst
   */
  export type PedidoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoItems.
     */
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem findFirstOrThrow
   */
  export type PedidoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoItems.
     */
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem findMany
   */
  export type PedidoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItems to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem create
   */
  export type PedidoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoItem.
     */
    data: XOR<PedidoItemCreateInput, PedidoItemUncheckedCreateInput>
  }

  /**
   * PedidoItem createMany
   */
  export type PedidoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoItems.
     */
    data: PedidoItemCreateManyInput | PedidoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoItem update
   */
  export type PedidoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoItem.
     */
    data: XOR<PedidoItemUpdateInput, PedidoItemUncheckedUpdateInput>
    /**
     * Choose, which PedidoItem to update.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem updateMany
   */
  export type PedidoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoItems.
     */
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyInput>
    /**
     * Filter which PedidoItems to update
     */
    where?: PedidoItemWhereInput
    /**
     * Limit how many PedidoItems to update.
     */
    limit?: number
  }

  /**
   * PedidoItem upsert
   */
  export type PedidoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoItem to update in case it exists.
     */
    where: PedidoItemWhereUniqueInput
    /**
     * In case the PedidoItem found by the `where` argument doesn't exist, create a new PedidoItem with this data.
     */
    create: XOR<PedidoItemCreateInput, PedidoItemUncheckedCreateInput>
    /**
     * In case the PedidoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoItemUpdateInput, PedidoItemUncheckedUpdateInput>
  }

  /**
   * PedidoItem delete
   */
  export type PedidoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter which PedidoItem to delete.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem deleteMany
   */
  export type PedidoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoItems to delete
     */
    where?: PedidoItemWhereInput
    /**
     * Limit how many PedidoItems to delete.
     */
    limit?: number
  }

  /**
   * PedidoItem without action
   */
  export type PedidoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
  }


  /**
   * Model DetalleAdicional
   */

  export type AggregateDetalleAdicional = {
    _count: DetalleAdicionalCountAggregateOutputType | null
    _avg: DetalleAdicionalAvgAggregateOutputType | null
    _sum: DetalleAdicionalSumAggregateOutputType | null
    _min: DetalleAdicionalMinAggregateOutputType | null
    _max: DetalleAdicionalMaxAggregateOutputType | null
  }

  export type DetalleAdicionalAvgAggregateOutputType = {
    id: number | null
  }

  export type DetalleAdicionalSumAggregateOutputType = {
    id: number | null
  }

  export type DetalleAdicionalMinAggregateOutputType = {
    id: number | null
  }

  export type DetalleAdicionalMaxAggregateOutputType = {
    id: number | null
  }

  export type DetalleAdicionalCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type DetalleAdicionalAvgAggregateInputType = {
    id?: true
  }

  export type DetalleAdicionalSumAggregateInputType = {
    id?: true
  }

  export type DetalleAdicionalMinAggregateInputType = {
    id?: true
  }

  export type DetalleAdicionalMaxAggregateInputType = {
    id?: true
  }

  export type DetalleAdicionalCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type DetalleAdicionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleAdicional to aggregate.
     */
    where?: DetalleAdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionals to fetch.
     */
    orderBy?: DetalleAdicionalOrderByWithRelationInput | DetalleAdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleAdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleAdicionals
    **/
    _count?: true | DetalleAdicionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleAdicionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleAdicionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleAdicionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleAdicionalMaxAggregateInputType
  }

  export type GetDetalleAdicionalAggregateType<T extends DetalleAdicionalAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleAdicional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleAdicional[P]>
      : GetScalarType<T[P], AggregateDetalleAdicional[P]>
  }




  export type DetalleAdicionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalWhereInput
    orderBy?: DetalleAdicionalOrderByWithAggregationInput | DetalleAdicionalOrderByWithAggregationInput[]
    by: DetalleAdicionalScalarFieldEnum[] | DetalleAdicionalScalarFieldEnum
    having?: DetalleAdicionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleAdicionalCountAggregateInputType | true
    _avg?: DetalleAdicionalAvgAggregateInputType
    _sum?: DetalleAdicionalSumAggregateInputType
    _min?: DetalleAdicionalMinAggregateInputType
    _max?: DetalleAdicionalMaxAggregateInputType
  }

  export type DetalleAdicionalGroupByOutputType = {
    id: number
    _count: DetalleAdicionalCountAggregateOutputType | null
    _avg: DetalleAdicionalAvgAggregateOutputType | null
    _sum: DetalleAdicionalSumAggregateOutputType | null
    _min: DetalleAdicionalMinAggregateOutputType | null
    _max: DetalleAdicionalMaxAggregateOutputType | null
  }

  type GetDetalleAdicionalGroupByPayload<T extends DetalleAdicionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleAdicionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleAdicionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleAdicionalGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleAdicionalGroupByOutputType[P]>
        }
      >
    >


  export type DetalleAdicionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Pedido?: boolean | DetalleAdicional$PedidoArgs<ExtArgs>
    DetalleAdicionalBebida?: boolean | DetalleAdicional$DetalleAdicionalBebidaArgs<ExtArgs>
    DetalleAdicionalTaper?: boolean | DetalleAdicional$DetalleAdicionalTaperArgs<ExtArgs>
    DetalleAdicionalEntrada?: boolean | DetalleAdicional$DetalleAdicionalEntradaArgs<ExtArgs>
    _count?: boolean | DetalleAdicionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleAdicional"]>



  export type DetalleAdicionalSelectScalar = {
    id?: boolean
  }

  export type DetalleAdicionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["detalleAdicional"]>
  export type DetalleAdicionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | DetalleAdicional$PedidoArgs<ExtArgs>
    DetalleAdicionalBebida?: boolean | DetalleAdicional$DetalleAdicionalBebidaArgs<ExtArgs>
    DetalleAdicionalTaper?: boolean | DetalleAdicional$DetalleAdicionalTaperArgs<ExtArgs>
    DetalleAdicionalEntrada?: boolean | DetalleAdicional$DetalleAdicionalEntradaArgs<ExtArgs>
    _count?: boolean | DetalleAdicionalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DetalleAdicionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleAdicional"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>[]
      DetalleAdicionalBebida: Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>[]
      DetalleAdicionalTaper: Prisma.$DetalleAdicionalTaperPayload<ExtArgs>[]
      DetalleAdicionalEntrada: Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["detalleAdicional"]>
    composites: {}
  }

  type DetalleAdicionalGetPayload<S extends boolean | null | undefined | DetalleAdicionalDefaultArgs> = $Result.GetResult<Prisma.$DetalleAdicionalPayload, S>

  type DetalleAdicionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleAdicionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleAdicionalCountAggregateInputType | true
    }

  export interface DetalleAdicionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleAdicional'], meta: { name: 'DetalleAdicional' } }
    /**
     * Find zero or one DetalleAdicional that matches the filter.
     * @param {DetalleAdicionalFindUniqueArgs} args - Arguments to find a DetalleAdicional
     * @example
     * // Get one DetalleAdicional
     * const detalleAdicional = await prisma.detalleAdicional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleAdicionalFindUniqueArgs>(args: SelectSubset<T, DetalleAdicionalFindUniqueArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleAdicional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleAdicionalFindUniqueOrThrowArgs} args - Arguments to find a DetalleAdicional
     * @example
     * // Get one DetalleAdicional
     * const detalleAdicional = await prisma.detalleAdicional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleAdicionalFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleAdicionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleAdicional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalFindFirstArgs} args - Arguments to find a DetalleAdicional
     * @example
     * // Get one DetalleAdicional
     * const detalleAdicional = await prisma.detalleAdicional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleAdicionalFindFirstArgs>(args?: SelectSubset<T, DetalleAdicionalFindFirstArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleAdicional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalFindFirstOrThrowArgs} args - Arguments to find a DetalleAdicional
     * @example
     * // Get one DetalleAdicional
     * const detalleAdicional = await prisma.detalleAdicional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleAdicionalFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleAdicionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleAdicionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleAdicionals
     * const detalleAdicionals = await prisma.detalleAdicional.findMany()
     * 
     * // Get first 10 DetalleAdicionals
     * const detalleAdicionals = await prisma.detalleAdicional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleAdicionalWithIdOnly = await prisma.detalleAdicional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleAdicionalFindManyArgs>(args?: SelectSubset<T, DetalleAdicionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleAdicional.
     * @param {DetalleAdicionalCreateArgs} args - Arguments to create a DetalleAdicional.
     * @example
     * // Create one DetalleAdicional
     * const DetalleAdicional = await prisma.detalleAdicional.create({
     *   data: {
     *     // ... data to create a DetalleAdicional
     *   }
     * })
     * 
     */
    create<T extends DetalleAdicionalCreateArgs>(args: SelectSubset<T, DetalleAdicionalCreateArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleAdicionals.
     * @param {DetalleAdicionalCreateManyArgs} args - Arguments to create many DetalleAdicionals.
     * @example
     * // Create many DetalleAdicionals
     * const detalleAdicional = await prisma.detalleAdicional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleAdicionalCreateManyArgs>(args?: SelectSubset<T, DetalleAdicionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetalleAdicional.
     * @param {DetalleAdicionalDeleteArgs} args - Arguments to delete one DetalleAdicional.
     * @example
     * // Delete one DetalleAdicional
     * const DetalleAdicional = await prisma.detalleAdicional.delete({
     *   where: {
     *     // ... filter to delete one DetalleAdicional
     *   }
     * })
     * 
     */
    delete<T extends DetalleAdicionalDeleteArgs>(args: SelectSubset<T, DetalleAdicionalDeleteArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleAdicional.
     * @param {DetalleAdicionalUpdateArgs} args - Arguments to update one DetalleAdicional.
     * @example
     * // Update one DetalleAdicional
     * const detalleAdicional = await prisma.detalleAdicional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleAdicionalUpdateArgs>(args: SelectSubset<T, DetalleAdicionalUpdateArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleAdicionals.
     * @param {DetalleAdicionalDeleteManyArgs} args - Arguments to filter DetalleAdicionals to delete.
     * @example
     * // Delete a few DetalleAdicionals
     * const { count } = await prisma.detalleAdicional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleAdicionalDeleteManyArgs>(args?: SelectSubset<T, DetalleAdicionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleAdicionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleAdicionals
     * const detalleAdicional = await prisma.detalleAdicional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleAdicionalUpdateManyArgs>(args: SelectSubset<T, DetalleAdicionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetalleAdicional.
     * @param {DetalleAdicionalUpsertArgs} args - Arguments to update or create a DetalleAdicional.
     * @example
     * // Update or create a DetalleAdicional
     * const detalleAdicional = await prisma.detalleAdicional.upsert({
     *   create: {
     *     // ... data to create a DetalleAdicional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleAdicional we want to update
     *   }
     * })
     */
    upsert<T extends DetalleAdicionalUpsertArgs>(args: SelectSubset<T, DetalleAdicionalUpsertArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleAdicionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalCountArgs} args - Arguments to filter DetalleAdicionals to count.
     * @example
     * // Count the number of DetalleAdicionals
     * const count = await prisma.detalleAdicional.count({
     *   where: {
     *     // ... the filter for the DetalleAdicionals we want to count
     *   }
     * })
    **/
    count<T extends DetalleAdicionalCountArgs>(
      args?: Subset<T, DetalleAdicionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleAdicionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleAdicional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleAdicionalAggregateArgs>(args: Subset<T, DetalleAdicionalAggregateArgs>): Prisma.PrismaPromise<GetDetalleAdicionalAggregateType<T>>

    /**
     * Group by DetalleAdicional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleAdicionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleAdicionalGroupByArgs['orderBy'] }
        : { orderBy?: DetalleAdicionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleAdicionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleAdicionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleAdicional model
   */
  readonly fields: DetalleAdicionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleAdicional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleAdicionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends DetalleAdicional$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, DetalleAdicional$PedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DetalleAdicionalBebida<T extends DetalleAdicional$DetalleAdicionalBebidaArgs<ExtArgs> = {}>(args?: Subset<T, DetalleAdicional$DetalleAdicionalBebidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DetalleAdicionalTaper<T extends DetalleAdicional$DetalleAdicionalTaperArgs<ExtArgs> = {}>(args?: Subset<T, DetalleAdicional$DetalleAdicionalTaperArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DetalleAdicionalEntrada<T extends DetalleAdicional$DetalleAdicionalEntradaArgs<ExtArgs> = {}>(args?: Subset<T, DetalleAdicional$DetalleAdicionalEntradaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalleAdicional model
   */
  interface DetalleAdicionalFieldRefs {
    readonly id: FieldRef<"DetalleAdicional", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetalleAdicional findUnique
   */
  export type DetalleAdicionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicional to fetch.
     */
    where: DetalleAdicionalWhereUniqueInput
  }

  /**
   * DetalleAdicional findUniqueOrThrow
   */
  export type DetalleAdicionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicional to fetch.
     */
    where: DetalleAdicionalWhereUniqueInput
  }

  /**
   * DetalleAdicional findFirst
   */
  export type DetalleAdicionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicional to fetch.
     */
    where?: DetalleAdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionals to fetch.
     */
    orderBy?: DetalleAdicionalOrderByWithRelationInput | DetalleAdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleAdicionals.
     */
    cursor?: DetalleAdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleAdicionals.
     */
    distinct?: DetalleAdicionalScalarFieldEnum | DetalleAdicionalScalarFieldEnum[]
  }

  /**
   * DetalleAdicional findFirstOrThrow
   */
  export type DetalleAdicionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicional to fetch.
     */
    where?: DetalleAdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionals to fetch.
     */
    orderBy?: DetalleAdicionalOrderByWithRelationInput | DetalleAdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleAdicionals.
     */
    cursor?: DetalleAdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleAdicionals.
     */
    distinct?: DetalleAdicionalScalarFieldEnum | DetalleAdicionalScalarFieldEnum[]
  }

  /**
   * DetalleAdicional findMany
   */
  export type DetalleAdicionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionals to fetch.
     */
    where?: DetalleAdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionals to fetch.
     */
    orderBy?: DetalleAdicionalOrderByWithRelationInput | DetalleAdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleAdicionals.
     */
    cursor?: DetalleAdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionals.
     */
    skip?: number
    distinct?: DetalleAdicionalScalarFieldEnum | DetalleAdicionalScalarFieldEnum[]
  }

  /**
   * DetalleAdicional create
   */
  export type DetalleAdicionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleAdicional.
     */
    data?: XOR<DetalleAdicionalCreateInput, DetalleAdicionalUncheckedCreateInput>
  }

  /**
   * DetalleAdicional createMany
   */
  export type DetalleAdicionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleAdicionals.
     */
    data: DetalleAdicionalCreateManyInput | DetalleAdicionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleAdicional update
   */
  export type DetalleAdicionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleAdicional.
     */
    data: XOR<DetalleAdicionalUpdateInput, DetalleAdicionalUncheckedUpdateInput>
    /**
     * Choose, which DetalleAdicional to update.
     */
    where: DetalleAdicionalWhereUniqueInput
  }

  /**
   * DetalleAdicional updateMany
   */
  export type DetalleAdicionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleAdicionals.
     */
    data: XOR<DetalleAdicionalUpdateManyMutationInput, DetalleAdicionalUncheckedUpdateManyInput>
    /**
     * Filter which DetalleAdicionals to update
     */
    where?: DetalleAdicionalWhereInput
    /**
     * Limit how many DetalleAdicionals to update.
     */
    limit?: number
  }

  /**
   * DetalleAdicional upsert
   */
  export type DetalleAdicionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleAdicional to update in case it exists.
     */
    where: DetalleAdicionalWhereUniqueInput
    /**
     * In case the DetalleAdicional found by the `where` argument doesn't exist, create a new DetalleAdicional with this data.
     */
    create: XOR<DetalleAdicionalCreateInput, DetalleAdicionalUncheckedCreateInput>
    /**
     * In case the DetalleAdicional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleAdicionalUpdateInput, DetalleAdicionalUncheckedUpdateInput>
  }

  /**
   * DetalleAdicional delete
   */
  export type DetalleAdicionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
    /**
     * Filter which DetalleAdicional to delete.
     */
    where: DetalleAdicionalWhereUniqueInput
  }

  /**
   * DetalleAdicional deleteMany
   */
  export type DetalleAdicionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleAdicionals to delete
     */
    where?: DetalleAdicionalWhereInput
    /**
     * Limit how many DetalleAdicionals to delete.
     */
    limit?: number
  }

  /**
   * DetalleAdicional.Pedido
   */
  export type DetalleAdicional$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * DetalleAdicional.DetalleAdicionalBebida
   */
  export type DetalleAdicional$DetalleAdicionalBebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    where?: DetalleAdicionalBebidaWhereInput
    orderBy?: DetalleAdicionalBebidaOrderByWithRelationInput | DetalleAdicionalBebidaOrderByWithRelationInput[]
    cursor?: DetalleAdicionalBebidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleAdicionalBebidaScalarFieldEnum | DetalleAdicionalBebidaScalarFieldEnum[]
  }

  /**
   * DetalleAdicional.DetalleAdicionalTaper
   */
  export type DetalleAdicional$DetalleAdicionalTaperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    where?: DetalleAdicionalTaperWhereInput
    orderBy?: DetalleAdicionalTaperOrderByWithRelationInput | DetalleAdicionalTaperOrderByWithRelationInput[]
    cursor?: DetalleAdicionalTaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleAdicionalTaperScalarFieldEnum | DetalleAdicionalTaperScalarFieldEnum[]
  }

  /**
   * DetalleAdicional.DetalleAdicionalEntrada
   */
  export type DetalleAdicional$DetalleAdicionalEntradaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    where?: DetalleAdicionalEntradaWhereInput
    orderBy?: DetalleAdicionalEntradaOrderByWithRelationInput | DetalleAdicionalEntradaOrderByWithRelationInput[]
    cursor?: DetalleAdicionalEntradaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleAdicionalEntradaScalarFieldEnum | DetalleAdicionalEntradaScalarFieldEnum[]
  }

  /**
   * DetalleAdicional without action
   */
  export type DetalleAdicionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicional
     */
    select?: DetalleAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicional
     */
    omit?: DetalleAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalInclude<ExtArgs> | null
  }


  /**
   * Model DetalleAdicionalBebida
   */

  export type AggregateDetalleAdicionalBebida = {
    _count: DetalleAdicionalBebidaCountAggregateOutputType | null
    _avg: DetalleAdicionalBebidaAvgAggregateOutputType | null
    _sum: DetalleAdicionalBebidaSumAggregateOutputType | null
    _min: DetalleAdicionalBebidaMinAggregateOutputType | null
    _max: DetalleAdicionalBebidaMaxAggregateOutputType | null
  }

  export type DetalleAdicionalBebidaAvgAggregateOutputType = {
    id: number | null
    bebidaId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalBebidaSumAggregateOutputType = {
    id: number | null
    bebidaId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalBebidaMinAggregateOutputType = {
    id: number | null
    bebidaId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalBebidaMaxAggregateOutputType = {
    id: number | null
    bebidaId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalBebidaCountAggregateOutputType = {
    id: number
    bebidaId: number
    detalleAdicionalId: number
    _all: number
  }


  export type DetalleAdicionalBebidaAvgAggregateInputType = {
    id?: true
    bebidaId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalBebidaSumAggregateInputType = {
    id?: true
    bebidaId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalBebidaMinAggregateInputType = {
    id?: true
    bebidaId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalBebidaMaxAggregateInputType = {
    id?: true
    bebidaId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalBebidaCountAggregateInputType = {
    id?: true
    bebidaId?: true
    detalleAdicionalId?: true
    _all?: true
  }

  export type DetalleAdicionalBebidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleAdicionalBebida to aggregate.
     */
    where?: DetalleAdicionalBebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalBebidas to fetch.
     */
    orderBy?: DetalleAdicionalBebidaOrderByWithRelationInput | DetalleAdicionalBebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleAdicionalBebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalBebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalBebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleAdicionalBebidas
    **/
    _count?: true | DetalleAdicionalBebidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleAdicionalBebidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleAdicionalBebidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleAdicionalBebidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleAdicionalBebidaMaxAggregateInputType
  }

  export type GetDetalleAdicionalBebidaAggregateType<T extends DetalleAdicionalBebidaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleAdicionalBebida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleAdicionalBebida[P]>
      : GetScalarType<T[P], AggregateDetalleAdicionalBebida[P]>
  }




  export type DetalleAdicionalBebidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalBebidaWhereInput
    orderBy?: DetalleAdicionalBebidaOrderByWithAggregationInput | DetalleAdicionalBebidaOrderByWithAggregationInput[]
    by: DetalleAdicionalBebidaScalarFieldEnum[] | DetalleAdicionalBebidaScalarFieldEnum
    having?: DetalleAdicionalBebidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleAdicionalBebidaCountAggregateInputType | true
    _avg?: DetalleAdicionalBebidaAvgAggregateInputType
    _sum?: DetalleAdicionalBebidaSumAggregateInputType
    _min?: DetalleAdicionalBebidaMinAggregateInputType
    _max?: DetalleAdicionalBebidaMaxAggregateInputType
  }

  export type DetalleAdicionalBebidaGroupByOutputType = {
    id: number
    bebidaId: number
    detalleAdicionalId: number
    _count: DetalleAdicionalBebidaCountAggregateOutputType | null
    _avg: DetalleAdicionalBebidaAvgAggregateOutputType | null
    _sum: DetalleAdicionalBebidaSumAggregateOutputType | null
    _min: DetalleAdicionalBebidaMinAggregateOutputType | null
    _max: DetalleAdicionalBebidaMaxAggregateOutputType | null
  }

  type GetDetalleAdicionalBebidaGroupByPayload<T extends DetalleAdicionalBebidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleAdicionalBebidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleAdicionalBebidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleAdicionalBebidaGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleAdicionalBebidaGroupByOutputType[P]>
        }
      >
    >


  export type DetalleAdicionalBebidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bebidaId?: boolean
    detalleAdicionalId?: boolean
    Bebida?: boolean | BebidaDefaultArgs<ExtArgs>
    DetalleAdicional?: boolean | DetalleAdicionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleAdicionalBebida"]>



  export type DetalleAdicionalBebidaSelectScalar = {
    id?: boolean
    bebidaId?: boolean
    detalleAdicionalId?: boolean
  }

  export type DetalleAdicionalBebidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bebidaId" | "detalleAdicionalId", ExtArgs["result"]["detalleAdicionalBebida"]>
  export type DetalleAdicionalBebidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bebida?: boolean | BebidaDefaultArgs<ExtArgs>
    DetalleAdicional?: boolean | DetalleAdicionalDefaultArgs<ExtArgs>
  }

  export type $DetalleAdicionalBebidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleAdicionalBebida"
    objects: {
      Bebida: Prisma.$BebidaPayload<ExtArgs>
      DetalleAdicional: Prisma.$DetalleAdicionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bebidaId: number
      detalleAdicionalId: number
    }, ExtArgs["result"]["detalleAdicionalBebida"]>
    composites: {}
  }

  type DetalleAdicionalBebidaGetPayload<S extends boolean | null | undefined | DetalleAdicionalBebidaDefaultArgs> = $Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload, S>

  type DetalleAdicionalBebidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleAdicionalBebidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleAdicionalBebidaCountAggregateInputType | true
    }

  export interface DetalleAdicionalBebidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleAdicionalBebida'], meta: { name: 'DetalleAdicionalBebida' } }
    /**
     * Find zero or one DetalleAdicionalBebida that matches the filter.
     * @param {DetalleAdicionalBebidaFindUniqueArgs} args - Arguments to find a DetalleAdicionalBebida
     * @example
     * // Get one DetalleAdicionalBebida
     * const detalleAdicionalBebida = await prisma.detalleAdicionalBebida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleAdicionalBebidaFindUniqueArgs>(args: SelectSubset<T, DetalleAdicionalBebidaFindUniqueArgs<ExtArgs>>): Prisma__DetalleAdicionalBebidaClient<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleAdicionalBebida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleAdicionalBebidaFindUniqueOrThrowArgs} args - Arguments to find a DetalleAdicionalBebida
     * @example
     * // Get one DetalleAdicionalBebida
     * const detalleAdicionalBebida = await prisma.detalleAdicionalBebida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleAdicionalBebidaFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleAdicionalBebidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleAdicionalBebidaClient<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleAdicionalBebida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalBebidaFindFirstArgs} args - Arguments to find a DetalleAdicionalBebida
     * @example
     * // Get one DetalleAdicionalBebida
     * const detalleAdicionalBebida = await prisma.detalleAdicionalBebida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleAdicionalBebidaFindFirstArgs>(args?: SelectSubset<T, DetalleAdicionalBebidaFindFirstArgs<ExtArgs>>): Prisma__DetalleAdicionalBebidaClient<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleAdicionalBebida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalBebidaFindFirstOrThrowArgs} args - Arguments to find a DetalleAdicionalBebida
     * @example
     * // Get one DetalleAdicionalBebida
     * const detalleAdicionalBebida = await prisma.detalleAdicionalBebida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleAdicionalBebidaFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleAdicionalBebidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleAdicionalBebidaClient<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleAdicionalBebidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalBebidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleAdicionalBebidas
     * const detalleAdicionalBebidas = await prisma.detalleAdicionalBebida.findMany()
     * 
     * // Get first 10 DetalleAdicionalBebidas
     * const detalleAdicionalBebidas = await prisma.detalleAdicionalBebida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleAdicionalBebidaWithIdOnly = await prisma.detalleAdicionalBebida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleAdicionalBebidaFindManyArgs>(args?: SelectSubset<T, DetalleAdicionalBebidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleAdicionalBebida.
     * @param {DetalleAdicionalBebidaCreateArgs} args - Arguments to create a DetalleAdicionalBebida.
     * @example
     * // Create one DetalleAdicionalBebida
     * const DetalleAdicionalBebida = await prisma.detalleAdicionalBebida.create({
     *   data: {
     *     // ... data to create a DetalleAdicionalBebida
     *   }
     * })
     * 
     */
    create<T extends DetalleAdicionalBebidaCreateArgs>(args: SelectSubset<T, DetalleAdicionalBebidaCreateArgs<ExtArgs>>): Prisma__DetalleAdicionalBebidaClient<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleAdicionalBebidas.
     * @param {DetalleAdicionalBebidaCreateManyArgs} args - Arguments to create many DetalleAdicionalBebidas.
     * @example
     * // Create many DetalleAdicionalBebidas
     * const detalleAdicionalBebida = await prisma.detalleAdicionalBebida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleAdicionalBebidaCreateManyArgs>(args?: SelectSubset<T, DetalleAdicionalBebidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetalleAdicionalBebida.
     * @param {DetalleAdicionalBebidaDeleteArgs} args - Arguments to delete one DetalleAdicionalBebida.
     * @example
     * // Delete one DetalleAdicionalBebida
     * const DetalleAdicionalBebida = await prisma.detalleAdicionalBebida.delete({
     *   where: {
     *     // ... filter to delete one DetalleAdicionalBebida
     *   }
     * })
     * 
     */
    delete<T extends DetalleAdicionalBebidaDeleteArgs>(args: SelectSubset<T, DetalleAdicionalBebidaDeleteArgs<ExtArgs>>): Prisma__DetalleAdicionalBebidaClient<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleAdicionalBebida.
     * @param {DetalleAdicionalBebidaUpdateArgs} args - Arguments to update one DetalleAdicionalBebida.
     * @example
     * // Update one DetalleAdicionalBebida
     * const detalleAdicionalBebida = await prisma.detalleAdicionalBebida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleAdicionalBebidaUpdateArgs>(args: SelectSubset<T, DetalleAdicionalBebidaUpdateArgs<ExtArgs>>): Prisma__DetalleAdicionalBebidaClient<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleAdicionalBebidas.
     * @param {DetalleAdicionalBebidaDeleteManyArgs} args - Arguments to filter DetalleAdicionalBebidas to delete.
     * @example
     * // Delete a few DetalleAdicionalBebidas
     * const { count } = await prisma.detalleAdicionalBebida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleAdicionalBebidaDeleteManyArgs>(args?: SelectSubset<T, DetalleAdicionalBebidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleAdicionalBebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalBebidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleAdicionalBebidas
     * const detalleAdicionalBebida = await prisma.detalleAdicionalBebida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleAdicionalBebidaUpdateManyArgs>(args: SelectSubset<T, DetalleAdicionalBebidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetalleAdicionalBebida.
     * @param {DetalleAdicionalBebidaUpsertArgs} args - Arguments to update or create a DetalleAdicionalBebida.
     * @example
     * // Update or create a DetalleAdicionalBebida
     * const detalleAdicionalBebida = await prisma.detalleAdicionalBebida.upsert({
     *   create: {
     *     // ... data to create a DetalleAdicionalBebida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleAdicionalBebida we want to update
     *   }
     * })
     */
    upsert<T extends DetalleAdicionalBebidaUpsertArgs>(args: SelectSubset<T, DetalleAdicionalBebidaUpsertArgs<ExtArgs>>): Prisma__DetalleAdicionalBebidaClient<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleAdicionalBebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalBebidaCountArgs} args - Arguments to filter DetalleAdicionalBebidas to count.
     * @example
     * // Count the number of DetalleAdicionalBebidas
     * const count = await prisma.detalleAdicionalBebida.count({
     *   where: {
     *     // ... the filter for the DetalleAdicionalBebidas we want to count
     *   }
     * })
    **/
    count<T extends DetalleAdicionalBebidaCountArgs>(
      args?: Subset<T, DetalleAdicionalBebidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleAdicionalBebidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleAdicionalBebida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalBebidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleAdicionalBebidaAggregateArgs>(args: Subset<T, DetalleAdicionalBebidaAggregateArgs>): Prisma.PrismaPromise<GetDetalleAdicionalBebidaAggregateType<T>>

    /**
     * Group by DetalleAdicionalBebida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalBebidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleAdicionalBebidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleAdicionalBebidaGroupByArgs['orderBy'] }
        : { orderBy?: DetalleAdicionalBebidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleAdicionalBebidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleAdicionalBebidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleAdicionalBebida model
   */
  readonly fields: DetalleAdicionalBebidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleAdicionalBebida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleAdicionalBebidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bebida<T extends BebidaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BebidaDefaultArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DetalleAdicional<T extends DetalleAdicionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetalleAdicionalDefaultArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalleAdicionalBebida model
   */
  interface DetalleAdicionalBebidaFieldRefs {
    readonly id: FieldRef<"DetalleAdicionalBebida", 'Int'>
    readonly bebidaId: FieldRef<"DetalleAdicionalBebida", 'Int'>
    readonly detalleAdicionalId: FieldRef<"DetalleAdicionalBebida", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetalleAdicionalBebida findUnique
   */
  export type DetalleAdicionalBebidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalBebida to fetch.
     */
    where: DetalleAdicionalBebidaWhereUniqueInput
  }

  /**
   * DetalleAdicionalBebida findUniqueOrThrow
   */
  export type DetalleAdicionalBebidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalBebida to fetch.
     */
    where: DetalleAdicionalBebidaWhereUniqueInput
  }

  /**
   * DetalleAdicionalBebida findFirst
   */
  export type DetalleAdicionalBebidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalBebida to fetch.
     */
    where?: DetalleAdicionalBebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalBebidas to fetch.
     */
    orderBy?: DetalleAdicionalBebidaOrderByWithRelationInput | DetalleAdicionalBebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleAdicionalBebidas.
     */
    cursor?: DetalleAdicionalBebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalBebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalBebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleAdicionalBebidas.
     */
    distinct?: DetalleAdicionalBebidaScalarFieldEnum | DetalleAdicionalBebidaScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalBebida findFirstOrThrow
   */
  export type DetalleAdicionalBebidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalBebida to fetch.
     */
    where?: DetalleAdicionalBebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalBebidas to fetch.
     */
    orderBy?: DetalleAdicionalBebidaOrderByWithRelationInput | DetalleAdicionalBebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleAdicionalBebidas.
     */
    cursor?: DetalleAdicionalBebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalBebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalBebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleAdicionalBebidas.
     */
    distinct?: DetalleAdicionalBebidaScalarFieldEnum | DetalleAdicionalBebidaScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalBebida findMany
   */
  export type DetalleAdicionalBebidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalBebidas to fetch.
     */
    where?: DetalleAdicionalBebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalBebidas to fetch.
     */
    orderBy?: DetalleAdicionalBebidaOrderByWithRelationInput | DetalleAdicionalBebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleAdicionalBebidas.
     */
    cursor?: DetalleAdicionalBebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalBebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalBebidas.
     */
    skip?: number
    distinct?: DetalleAdicionalBebidaScalarFieldEnum | DetalleAdicionalBebidaScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalBebida create
   */
  export type DetalleAdicionalBebidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleAdicionalBebida.
     */
    data: XOR<DetalleAdicionalBebidaCreateInput, DetalleAdicionalBebidaUncheckedCreateInput>
  }

  /**
   * DetalleAdicionalBebida createMany
   */
  export type DetalleAdicionalBebidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleAdicionalBebidas.
     */
    data: DetalleAdicionalBebidaCreateManyInput | DetalleAdicionalBebidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleAdicionalBebida update
   */
  export type DetalleAdicionalBebidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleAdicionalBebida.
     */
    data: XOR<DetalleAdicionalBebidaUpdateInput, DetalleAdicionalBebidaUncheckedUpdateInput>
    /**
     * Choose, which DetalleAdicionalBebida to update.
     */
    where: DetalleAdicionalBebidaWhereUniqueInput
  }

  /**
   * DetalleAdicionalBebida updateMany
   */
  export type DetalleAdicionalBebidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleAdicionalBebidas.
     */
    data: XOR<DetalleAdicionalBebidaUpdateManyMutationInput, DetalleAdicionalBebidaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleAdicionalBebidas to update
     */
    where?: DetalleAdicionalBebidaWhereInput
    /**
     * Limit how many DetalleAdicionalBebidas to update.
     */
    limit?: number
  }

  /**
   * DetalleAdicionalBebida upsert
   */
  export type DetalleAdicionalBebidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleAdicionalBebida to update in case it exists.
     */
    where: DetalleAdicionalBebidaWhereUniqueInput
    /**
     * In case the DetalleAdicionalBebida found by the `where` argument doesn't exist, create a new DetalleAdicionalBebida with this data.
     */
    create: XOR<DetalleAdicionalBebidaCreateInput, DetalleAdicionalBebidaUncheckedCreateInput>
    /**
     * In case the DetalleAdicionalBebida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleAdicionalBebidaUpdateInput, DetalleAdicionalBebidaUncheckedUpdateInput>
  }

  /**
   * DetalleAdicionalBebida delete
   */
  export type DetalleAdicionalBebidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    /**
     * Filter which DetalleAdicionalBebida to delete.
     */
    where: DetalleAdicionalBebidaWhereUniqueInput
  }

  /**
   * DetalleAdicionalBebida deleteMany
   */
  export type DetalleAdicionalBebidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleAdicionalBebidas to delete
     */
    where?: DetalleAdicionalBebidaWhereInput
    /**
     * Limit how many DetalleAdicionalBebidas to delete.
     */
    limit?: number
  }

  /**
   * DetalleAdicionalBebida without action
   */
  export type DetalleAdicionalBebidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
  }


  /**
   * Model Bebida
   */

  export type AggregateBebida = {
    _count: BebidaCountAggregateOutputType | null
    _avg: BebidaAvgAggregateOutputType | null
    _sum: BebidaSumAggregateOutputType | null
    _min: BebidaMinAggregateOutputType | null
    _max: BebidaMaxAggregateOutputType | null
  }

  export type BebidaAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    tipoBebidaId: number | null
  }

  export type BebidaSumAggregateOutputType = {
    id: number | null
    precio: number | null
    tipoBebidaId: number | null
  }

  export type BebidaMinAggregateOutputType = {
    id: number | null
    presentacion: $Enums.PresentacionBebida | null
    precio: number | null
    tipoBebidaId: number | null
  }

  export type BebidaMaxAggregateOutputType = {
    id: number | null
    presentacion: $Enums.PresentacionBebida | null
    precio: number | null
    tipoBebidaId: number | null
  }

  export type BebidaCountAggregateOutputType = {
    id: number
    presentacion: number
    precio: number
    tipoBebidaId: number
    _all: number
  }


  export type BebidaAvgAggregateInputType = {
    id?: true
    precio?: true
    tipoBebidaId?: true
  }

  export type BebidaSumAggregateInputType = {
    id?: true
    precio?: true
    tipoBebidaId?: true
  }

  export type BebidaMinAggregateInputType = {
    id?: true
    presentacion?: true
    precio?: true
    tipoBebidaId?: true
  }

  export type BebidaMaxAggregateInputType = {
    id?: true
    presentacion?: true
    precio?: true
    tipoBebidaId?: true
  }

  export type BebidaCountAggregateInputType = {
    id?: true
    presentacion?: true
    precio?: true
    tipoBebidaId?: true
    _all?: true
  }

  export type BebidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bebida to aggregate.
     */
    where?: BebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bebidas to fetch.
     */
    orderBy?: BebidaOrderByWithRelationInput | BebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bebidas
    **/
    _count?: true | BebidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BebidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BebidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BebidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BebidaMaxAggregateInputType
  }

  export type GetBebidaAggregateType<T extends BebidaAggregateArgs> = {
        [P in keyof T & keyof AggregateBebida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBebida[P]>
      : GetScalarType<T[P], AggregateBebida[P]>
  }




  export type BebidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BebidaWhereInput
    orderBy?: BebidaOrderByWithAggregationInput | BebidaOrderByWithAggregationInput[]
    by: BebidaScalarFieldEnum[] | BebidaScalarFieldEnum
    having?: BebidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BebidaCountAggregateInputType | true
    _avg?: BebidaAvgAggregateInputType
    _sum?: BebidaSumAggregateInputType
    _min?: BebidaMinAggregateInputType
    _max?: BebidaMaxAggregateInputType
  }

  export type BebidaGroupByOutputType = {
    id: number
    presentacion: $Enums.PresentacionBebida
    precio: number
    tipoBebidaId: number
    _count: BebidaCountAggregateOutputType | null
    _avg: BebidaAvgAggregateOutputType | null
    _sum: BebidaSumAggregateOutputType | null
    _min: BebidaMinAggregateOutputType | null
    _max: BebidaMaxAggregateOutputType | null
  }

  type GetBebidaGroupByPayload<T extends BebidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BebidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BebidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BebidaGroupByOutputType[P]>
            : GetScalarType<T[P], BebidaGroupByOutputType[P]>
        }
      >
    >


  export type BebidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    presentacion?: boolean
    precio?: boolean
    tipoBebidaId?: boolean
    TipoBebida?: boolean | TipoBebidaDefaultArgs<ExtArgs>
    DetalleAdicionalBebida?: boolean | Bebida$DetalleAdicionalBebidaArgs<ExtArgs>
    _count?: boolean | BebidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bebida"]>



  export type BebidaSelectScalar = {
    id?: boolean
    presentacion?: boolean
    precio?: boolean
    tipoBebidaId?: boolean
  }

  export type BebidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "presentacion" | "precio" | "tipoBebidaId", ExtArgs["result"]["bebida"]>
  export type BebidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TipoBebida?: boolean | TipoBebidaDefaultArgs<ExtArgs>
    DetalleAdicionalBebida?: boolean | Bebida$DetalleAdicionalBebidaArgs<ExtArgs>
    _count?: boolean | BebidaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BebidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bebida"
    objects: {
      TipoBebida: Prisma.$TipoBebidaPayload<ExtArgs>
      DetalleAdicionalBebida: Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      presentacion: $Enums.PresentacionBebida
      precio: number
      tipoBebidaId: number
    }, ExtArgs["result"]["bebida"]>
    composites: {}
  }

  type BebidaGetPayload<S extends boolean | null | undefined | BebidaDefaultArgs> = $Result.GetResult<Prisma.$BebidaPayload, S>

  type BebidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BebidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BebidaCountAggregateInputType | true
    }

  export interface BebidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bebida'], meta: { name: 'Bebida' } }
    /**
     * Find zero or one Bebida that matches the filter.
     * @param {BebidaFindUniqueArgs} args - Arguments to find a Bebida
     * @example
     * // Get one Bebida
     * const bebida = await prisma.bebida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BebidaFindUniqueArgs>(args: SelectSubset<T, BebidaFindUniqueArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bebida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BebidaFindUniqueOrThrowArgs} args - Arguments to find a Bebida
     * @example
     * // Get one Bebida
     * const bebida = await prisma.bebida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BebidaFindUniqueOrThrowArgs>(args: SelectSubset<T, BebidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bebida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidaFindFirstArgs} args - Arguments to find a Bebida
     * @example
     * // Get one Bebida
     * const bebida = await prisma.bebida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BebidaFindFirstArgs>(args?: SelectSubset<T, BebidaFindFirstArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bebida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidaFindFirstOrThrowArgs} args - Arguments to find a Bebida
     * @example
     * // Get one Bebida
     * const bebida = await prisma.bebida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BebidaFindFirstOrThrowArgs>(args?: SelectSubset<T, BebidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bebidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bebidas
     * const bebidas = await prisma.bebida.findMany()
     * 
     * // Get first 10 Bebidas
     * const bebidas = await prisma.bebida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bebidaWithIdOnly = await prisma.bebida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BebidaFindManyArgs>(args?: SelectSubset<T, BebidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bebida.
     * @param {BebidaCreateArgs} args - Arguments to create a Bebida.
     * @example
     * // Create one Bebida
     * const Bebida = await prisma.bebida.create({
     *   data: {
     *     // ... data to create a Bebida
     *   }
     * })
     * 
     */
    create<T extends BebidaCreateArgs>(args: SelectSubset<T, BebidaCreateArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bebidas.
     * @param {BebidaCreateManyArgs} args - Arguments to create many Bebidas.
     * @example
     * // Create many Bebidas
     * const bebida = await prisma.bebida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BebidaCreateManyArgs>(args?: SelectSubset<T, BebidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bebida.
     * @param {BebidaDeleteArgs} args - Arguments to delete one Bebida.
     * @example
     * // Delete one Bebida
     * const Bebida = await prisma.bebida.delete({
     *   where: {
     *     // ... filter to delete one Bebida
     *   }
     * })
     * 
     */
    delete<T extends BebidaDeleteArgs>(args: SelectSubset<T, BebidaDeleteArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bebida.
     * @param {BebidaUpdateArgs} args - Arguments to update one Bebida.
     * @example
     * // Update one Bebida
     * const bebida = await prisma.bebida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BebidaUpdateArgs>(args: SelectSubset<T, BebidaUpdateArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bebidas.
     * @param {BebidaDeleteManyArgs} args - Arguments to filter Bebidas to delete.
     * @example
     * // Delete a few Bebidas
     * const { count } = await prisma.bebida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BebidaDeleteManyArgs>(args?: SelectSubset<T, BebidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bebidas
     * const bebida = await prisma.bebida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BebidaUpdateManyArgs>(args: SelectSubset<T, BebidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bebida.
     * @param {BebidaUpsertArgs} args - Arguments to update or create a Bebida.
     * @example
     * // Update or create a Bebida
     * const bebida = await prisma.bebida.upsert({
     *   create: {
     *     // ... data to create a Bebida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bebida we want to update
     *   }
     * })
     */
    upsert<T extends BebidaUpsertArgs>(args: SelectSubset<T, BebidaUpsertArgs<ExtArgs>>): Prisma__BebidaClient<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidaCountArgs} args - Arguments to filter Bebidas to count.
     * @example
     * // Count the number of Bebidas
     * const count = await prisma.bebida.count({
     *   where: {
     *     // ... the filter for the Bebidas we want to count
     *   }
     * })
    **/
    count<T extends BebidaCountArgs>(
      args?: Subset<T, BebidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BebidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bebida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BebidaAggregateArgs>(args: Subset<T, BebidaAggregateArgs>): Prisma.PrismaPromise<GetBebidaAggregateType<T>>

    /**
     * Group by Bebida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BebidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BebidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BebidaGroupByArgs['orderBy'] }
        : { orderBy?: BebidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BebidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBebidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bebida model
   */
  readonly fields: BebidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bebida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BebidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TipoBebida<T extends TipoBebidaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoBebidaDefaultArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DetalleAdicionalBebida<T extends Bebida$DetalleAdicionalBebidaArgs<ExtArgs> = {}>(args?: Subset<T, Bebida$DetalleAdicionalBebidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalBebidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bebida model
   */
  interface BebidaFieldRefs {
    readonly id: FieldRef<"Bebida", 'Int'>
    readonly presentacion: FieldRef<"Bebida", 'PresentacionBebida'>
    readonly precio: FieldRef<"Bebida", 'Float'>
    readonly tipoBebidaId: FieldRef<"Bebida", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bebida findUnique
   */
  export type BebidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * Filter, which Bebida to fetch.
     */
    where: BebidaWhereUniqueInput
  }

  /**
   * Bebida findUniqueOrThrow
   */
  export type BebidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * Filter, which Bebida to fetch.
     */
    where: BebidaWhereUniqueInput
  }

  /**
   * Bebida findFirst
   */
  export type BebidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * Filter, which Bebida to fetch.
     */
    where?: BebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bebidas to fetch.
     */
    orderBy?: BebidaOrderByWithRelationInput | BebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bebidas.
     */
    cursor?: BebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bebidas.
     */
    distinct?: BebidaScalarFieldEnum | BebidaScalarFieldEnum[]
  }

  /**
   * Bebida findFirstOrThrow
   */
  export type BebidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * Filter, which Bebida to fetch.
     */
    where?: BebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bebidas to fetch.
     */
    orderBy?: BebidaOrderByWithRelationInput | BebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bebidas.
     */
    cursor?: BebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bebidas.
     */
    distinct?: BebidaScalarFieldEnum | BebidaScalarFieldEnum[]
  }

  /**
   * Bebida findMany
   */
  export type BebidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * Filter, which Bebidas to fetch.
     */
    where?: BebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bebidas to fetch.
     */
    orderBy?: BebidaOrderByWithRelationInput | BebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bebidas.
     */
    cursor?: BebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bebidas.
     */
    skip?: number
    distinct?: BebidaScalarFieldEnum | BebidaScalarFieldEnum[]
  }

  /**
   * Bebida create
   */
  export type BebidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Bebida.
     */
    data: XOR<BebidaCreateInput, BebidaUncheckedCreateInput>
  }

  /**
   * Bebida createMany
   */
  export type BebidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bebidas.
     */
    data: BebidaCreateManyInput | BebidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bebida update
   */
  export type BebidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Bebida.
     */
    data: XOR<BebidaUpdateInput, BebidaUncheckedUpdateInput>
    /**
     * Choose, which Bebida to update.
     */
    where: BebidaWhereUniqueInput
  }

  /**
   * Bebida updateMany
   */
  export type BebidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bebidas.
     */
    data: XOR<BebidaUpdateManyMutationInput, BebidaUncheckedUpdateManyInput>
    /**
     * Filter which Bebidas to update
     */
    where?: BebidaWhereInput
    /**
     * Limit how many Bebidas to update.
     */
    limit?: number
  }

  /**
   * Bebida upsert
   */
  export type BebidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Bebida to update in case it exists.
     */
    where: BebidaWhereUniqueInput
    /**
     * In case the Bebida found by the `where` argument doesn't exist, create a new Bebida with this data.
     */
    create: XOR<BebidaCreateInput, BebidaUncheckedCreateInput>
    /**
     * In case the Bebida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BebidaUpdateInput, BebidaUncheckedUpdateInput>
  }

  /**
   * Bebida delete
   */
  export type BebidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    /**
     * Filter which Bebida to delete.
     */
    where: BebidaWhereUniqueInput
  }

  /**
   * Bebida deleteMany
   */
  export type BebidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bebidas to delete
     */
    where?: BebidaWhereInput
    /**
     * Limit how many Bebidas to delete.
     */
    limit?: number
  }

  /**
   * Bebida.DetalleAdicionalBebida
   */
  export type Bebida$DetalleAdicionalBebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalBebida
     */
    select?: DetalleAdicionalBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalBebida
     */
    omit?: DetalleAdicionalBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalBebidaInclude<ExtArgs> | null
    where?: DetalleAdicionalBebidaWhereInput
    orderBy?: DetalleAdicionalBebidaOrderByWithRelationInput | DetalleAdicionalBebidaOrderByWithRelationInput[]
    cursor?: DetalleAdicionalBebidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleAdicionalBebidaScalarFieldEnum | DetalleAdicionalBebidaScalarFieldEnum[]
  }

  /**
   * Bebida without action
   */
  export type BebidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
  }


  /**
   * Model TipoBebida
   */

  export type AggregateTipoBebida = {
    _count: TipoBebidaCountAggregateOutputType | null
    _avg: TipoBebidaAvgAggregateOutputType | null
    _sum: TipoBebidaSumAggregateOutputType | null
    _min: TipoBebidaMinAggregateOutputType | null
    _max: TipoBebidaMaxAggregateOutputType | null
  }

  export type TipoBebidaAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoBebidaSumAggregateOutputType = {
    id: number | null
  }

  export type TipoBebidaMinAggregateOutputType = {
    id: number | null
    nombre: $Enums.TipoBebidaList | null
  }

  export type TipoBebidaMaxAggregateOutputType = {
    id: number | null
    nombre: $Enums.TipoBebidaList | null
  }

  export type TipoBebidaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type TipoBebidaAvgAggregateInputType = {
    id?: true
  }

  export type TipoBebidaSumAggregateInputType = {
    id?: true
  }

  export type TipoBebidaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type TipoBebidaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type TipoBebidaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type TipoBebidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoBebida to aggregate.
     */
    where?: TipoBebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBebidas to fetch.
     */
    orderBy?: TipoBebidaOrderByWithRelationInput | TipoBebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoBebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoBebidas
    **/
    _count?: true | TipoBebidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoBebidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoBebidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoBebidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoBebidaMaxAggregateInputType
  }

  export type GetTipoBebidaAggregateType<T extends TipoBebidaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoBebida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoBebida[P]>
      : GetScalarType<T[P], AggregateTipoBebida[P]>
  }




  export type TipoBebidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoBebidaWhereInput
    orderBy?: TipoBebidaOrderByWithAggregationInput | TipoBebidaOrderByWithAggregationInput[]
    by: TipoBebidaScalarFieldEnum[] | TipoBebidaScalarFieldEnum
    having?: TipoBebidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoBebidaCountAggregateInputType | true
    _avg?: TipoBebidaAvgAggregateInputType
    _sum?: TipoBebidaSumAggregateInputType
    _min?: TipoBebidaMinAggregateInputType
    _max?: TipoBebidaMaxAggregateInputType
  }

  export type TipoBebidaGroupByOutputType = {
    id: number
    nombre: $Enums.TipoBebidaList
    _count: TipoBebidaCountAggregateOutputType | null
    _avg: TipoBebidaAvgAggregateOutputType | null
    _sum: TipoBebidaSumAggregateOutputType | null
    _min: TipoBebidaMinAggregateOutputType | null
    _max: TipoBebidaMaxAggregateOutputType | null
  }

  type GetTipoBebidaGroupByPayload<T extends TipoBebidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoBebidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoBebidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoBebidaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoBebidaGroupByOutputType[P]>
        }
      >
    >


  export type TipoBebidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    Bebida?: boolean | TipoBebida$BebidaArgs<ExtArgs>
    _count?: boolean | TipoBebidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoBebida"]>



  export type TipoBebidaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type TipoBebidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["tipoBebida"]>
  export type TipoBebidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bebida?: boolean | TipoBebida$BebidaArgs<ExtArgs>
    _count?: boolean | TipoBebidaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoBebidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoBebida"
    objects: {
      Bebida: Prisma.$BebidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: $Enums.TipoBebidaList
    }, ExtArgs["result"]["tipoBebida"]>
    composites: {}
  }

  type TipoBebidaGetPayload<S extends boolean | null | undefined | TipoBebidaDefaultArgs> = $Result.GetResult<Prisma.$TipoBebidaPayload, S>

  type TipoBebidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoBebidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoBebidaCountAggregateInputType | true
    }

  export interface TipoBebidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoBebida'], meta: { name: 'TipoBebida' } }
    /**
     * Find zero or one TipoBebida that matches the filter.
     * @param {TipoBebidaFindUniqueArgs} args - Arguments to find a TipoBebida
     * @example
     * // Get one TipoBebida
     * const tipoBebida = await prisma.tipoBebida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoBebidaFindUniqueArgs>(args: SelectSubset<T, TipoBebidaFindUniqueArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoBebida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoBebidaFindUniqueOrThrowArgs} args - Arguments to find a TipoBebida
     * @example
     * // Get one TipoBebida
     * const tipoBebida = await prisma.tipoBebida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoBebidaFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoBebidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoBebida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBebidaFindFirstArgs} args - Arguments to find a TipoBebida
     * @example
     * // Get one TipoBebida
     * const tipoBebida = await prisma.tipoBebida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoBebidaFindFirstArgs>(args?: SelectSubset<T, TipoBebidaFindFirstArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoBebida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBebidaFindFirstOrThrowArgs} args - Arguments to find a TipoBebida
     * @example
     * // Get one TipoBebida
     * const tipoBebida = await prisma.tipoBebida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoBebidaFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoBebidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoBebidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBebidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoBebidas
     * const tipoBebidas = await prisma.tipoBebida.findMany()
     * 
     * // Get first 10 TipoBebidas
     * const tipoBebidas = await prisma.tipoBebida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoBebidaWithIdOnly = await prisma.tipoBebida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoBebidaFindManyArgs>(args?: SelectSubset<T, TipoBebidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoBebida.
     * @param {TipoBebidaCreateArgs} args - Arguments to create a TipoBebida.
     * @example
     * // Create one TipoBebida
     * const TipoBebida = await prisma.tipoBebida.create({
     *   data: {
     *     // ... data to create a TipoBebida
     *   }
     * })
     * 
     */
    create<T extends TipoBebidaCreateArgs>(args: SelectSubset<T, TipoBebidaCreateArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoBebidas.
     * @param {TipoBebidaCreateManyArgs} args - Arguments to create many TipoBebidas.
     * @example
     * // Create many TipoBebidas
     * const tipoBebida = await prisma.tipoBebida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoBebidaCreateManyArgs>(args?: SelectSubset<T, TipoBebidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoBebida.
     * @param {TipoBebidaDeleteArgs} args - Arguments to delete one TipoBebida.
     * @example
     * // Delete one TipoBebida
     * const TipoBebida = await prisma.tipoBebida.delete({
     *   where: {
     *     // ... filter to delete one TipoBebida
     *   }
     * })
     * 
     */
    delete<T extends TipoBebidaDeleteArgs>(args: SelectSubset<T, TipoBebidaDeleteArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoBebida.
     * @param {TipoBebidaUpdateArgs} args - Arguments to update one TipoBebida.
     * @example
     * // Update one TipoBebida
     * const tipoBebida = await prisma.tipoBebida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoBebidaUpdateArgs>(args: SelectSubset<T, TipoBebidaUpdateArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoBebidas.
     * @param {TipoBebidaDeleteManyArgs} args - Arguments to filter TipoBebidas to delete.
     * @example
     * // Delete a few TipoBebidas
     * const { count } = await prisma.tipoBebida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoBebidaDeleteManyArgs>(args?: SelectSubset<T, TipoBebidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoBebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBebidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoBebidas
     * const tipoBebida = await prisma.tipoBebida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoBebidaUpdateManyArgs>(args: SelectSubset<T, TipoBebidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoBebida.
     * @param {TipoBebidaUpsertArgs} args - Arguments to update or create a TipoBebida.
     * @example
     * // Update or create a TipoBebida
     * const tipoBebida = await prisma.tipoBebida.upsert({
     *   create: {
     *     // ... data to create a TipoBebida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoBebida we want to update
     *   }
     * })
     */
    upsert<T extends TipoBebidaUpsertArgs>(args: SelectSubset<T, TipoBebidaUpsertArgs<ExtArgs>>): Prisma__TipoBebidaClient<$Result.GetResult<Prisma.$TipoBebidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoBebidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBebidaCountArgs} args - Arguments to filter TipoBebidas to count.
     * @example
     * // Count the number of TipoBebidas
     * const count = await prisma.tipoBebida.count({
     *   where: {
     *     // ... the filter for the TipoBebidas we want to count
     *   }
     * })
    **/
    count<T extends TipoBebidaCountArgs>(
      args?: Subset<T, TipoBebidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoBebidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoBebida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBebidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoBebidaAggregateArgs>(args: Subset<T, TipoBebidaAggregateArgs>): Prisma.PrismaPromise<GetTipoBebidaAggregateType<T>>

    /**
     * Group by TipoBebida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBebidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoBebidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoBebidaGroupByArgs['orderBy'] }
        : { orderBy?: TipoBebidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoBebidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoBebidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoBebida model
   */
  readonly fields: TipoBebidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoBebida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoBebidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bebida<T extends TipoBebida$BebidaArgs<ExtArgs> = {}>(args?: Subset<T, TipoBebida$BebidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BebidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoBebida model
   */
  interface TipoBebidaFieldRefs {
    readonly id: FieldRef<"TipoBebida", 'Int'>
    readonly nombre: FieldRef<"TipoBebida", 'TipoBebidaList'>
  }
    

  // Custom InputTypes
  /**
   * TipoBebida findUnique
   */
  export type TipoBebidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBebida to fetch.
     */
    where: TipoBebidaWhereUniqueInput
  }

  /**
   * TipoBebida findUniqueOrThrow
   */
  export type TipoBebidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBebida to fetch.
     */
    where: TipoBebidaWhereUniqueInput
  }

  /**
   * TipoBebida findFirst
   */
  export type TipoBebidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBebida to fetch.
     */
    where?: TipoBebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBebidas to fetch.
     */
    orderBy?: TipoBebidaOrderByWithRelationInput | TipoBebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoBebidas.
     */
    cursor?: TipoBebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoBebidas.
     */
    distinct?: TipoBebidaScalarFieldEnum | TipoBebidaScalarFieldEnum[]
  }

  /**
   * TipoBebida findFirstOrThrow
   */
  export type TipoBebidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBebida to fetch.
     */
    where?: TipoBebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBebidas to fetch.
     */
    orderBy?: TipoBebidaOrderByWithRelationInput | TipoBebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoBebidas.
     */
    cursor?: TipoBebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBebidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoBebidas.
     */
    distinct?: TipoBebidaScalarFieldEnum | TipoBebidaScalarFieldEnum[]
  }

  /**
   * TipoBebida findMany
   */
  export type TipoBebidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBebidas to fetch.
     */
    where?: TipoBebidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBebidas to fetch.
     */
    orderBy?: TipoBebidaOrderByWithRelationInput | TipoBebidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoBebidas.
     */
    cursor?: TipoBebidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBebidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBebidas.
     */
    skip?: number
    distinct?: TipoBebidaScalarFieldEnum | TipoBebidaScalarFieldEnum[]
  }

  /**
   * TipoBebida create
   */
  export type TipoBebidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoBebida.
     */
    data: XOR<TipoBebidaCreateInput, TipoBebidaUncheckedCreateInput>
  }

  /**
   * TipoBebida createMany
   */
  export type TipoBebidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoBebidas.
     */
    data: TipoBebidaCreateManyInput | TipoBebidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoBebida update
   */
  export type TipoBebidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoBebida.
     */
    data: XOR<TipoBebidaUpdateInput, TipoBebidaUncheckedUpdateInput>
    /**
     * Choose, which TipoBebida to update.
     */
    where: TipoBebidaWhereUniqueInput
  }

  /**
   * TipoBebida updateMany
   */
  export type TipoBebidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoBebidas.
     */
    data: XOR<TipoBebidaUpdateManyMutationInput, TipoBebidaUncheckedUpdateManyInput>
    /**
     * Filter which TipoBebidas to update
     */
    where?: TipoBebidaWhereInput
    /**
     * Limit how many TipoBebidas to update.
     */
    limit?: number
  }

  /**
   * TipoBebida upsert
   */
  export type TipoBebidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoBebida to update in case it exists.
     */
    where: TipoBebidaWhereUniqueInput
    /**
     * In case the TipoBebida found by the `where` argument doesn't exist, create a new TipoBebida with this data.
     */
    create: XOR<TipoBebidaCreateInput, TipoBebidaUncheckedCreateInput>
    /**
     * In case the TipoBebida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoBebidaUpdateInput, TipoBebidaUncheckedUpdateInput>
  }

  /**
   * TipoBebida delete
   */
  export type TipoBebidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
    /**
     * Filter which TipoBebida to delete.
     */
    where: TipoBebidaWhereUniqueInput
  }

  /**
   * TipoBebida deleteMany
   */
  export type TipoBebidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoBebidas to delete
     */
    where?: TipoBebidaWhereInput
    /**
     * Limit how many TipoBebidas to delete.
     */
    limit?: number
  }

  /**
   * TipoBebida.Bebida
   */
  export type TipoBebida$BebidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bebida
     */
    select?: BebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bebida
     */
    omit?: BebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BebidaInclude<ExtArgs> | null
    where?: BebidaWhereInput
    orderBy?: BebidaOrderByWithRelationInput | BebidaOrderByWithRelationInput[]
    cursor?: BebidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BebidaScalarFieldEnum | BebidaScalarFieldEnum[]
  }

  /**
   * TipoBebida without action
   */
  export type TipoBebidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBebida
     */
    select?: TipoBebidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBebida
     */
    omit?: TipoBebidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBebidaInclude<ExtArgs> | null
  }


  /**
   * Model DetalleAdicionalTaper
   */

  export type AggregateDetalleAdicionalTaper = {
    _count: DetalleAdicionalTaperCountAggregateOutputType | null
    _avg: DetalleAdicionalTaperAvgAggregateOutputType | null
    _sum: DetalleAdicionalTaperSumAggregateOutputType | null
    _min: DetalleAdicionalTaperMinAggregateOutputType | null
    _max: DetalleAdicionalTaperMaxAggregateOutputType | null
  }

  export type DetalleAdicionalTaperAvgAggregateOutputType = {
    id: number | null
    taperId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalTaperSumAggregateOutputType = {
    id: number | null
    taperId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalTaperMinAggregateOutputType = {
    id: number | null
    taperId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalTaperMaxAggregateOutputType = {
    id: number | null
    taperId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalTaperCountAggregateOutputType = {
    id: number
    taperId: number
    detalleAdicionalId: number
    _all: number
  }


  export type DetalleAdicionalTaperAvgAggregateInputType = {
    id?: true
    taperId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalTaperSumAggregateInputType = {
    id?: true
    taperId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalTaperMinAggregateInputType = {
    id?: true
    taperId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalTaperMaxAggregateInputType = {
    id?: true
    taperId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalTaperCountAggregateInputType = {
    id?: true
    taperId?: true
    detalleAdicionalId?: true
    _all?: true
  }

  export type DetalleAdicionalTaperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleAdicionalTaper to aggregate.
     */
    where?: DetalleAdicionalTaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalTapers to fetch.
     */
    orderBy?: DetalleAdicionalTaperOrderByWithRelationInput | DetalleAdicionalTaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleAdicionalTaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalTapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalTapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleAdicionalTapers
    **/
    _count?: true | DetalleAdicionalTaperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleAdicionalTaperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleAdicionalTaperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleAdicionalTaperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleAdicionalTaperMaxAggregateInputType
  }

  export type GetDetalleAdicionalTaperAggregateType<T extends DetalleAdicionalTaperAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleAdicionalTaper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleAdicionalTaper[P]>
      : GetScalarType<T[P], AggregateDetalleAdicionalTaper[P]>
  }




  export type DetalleAdicionalTaperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalTaperWhereInput
    orderBy?: DetalleAdicionalTaperOrderByWithAggregationInput | DetalleAdicionalTaperOrderByWithAggregationInput[]
    by: DetalleAdicionalTaperScalarFieldEnum[] | DetalleAdicionalTaperScalarFieldEnum
    having?: DetalleAdicionalTaperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleAdicionalTaperCountAggregateInputType | true
    _avg?: DetalleAdicionalTaperAvgAggregateInputType
    _sum?: DetalleAdicionalTaperSumAggregateInputType
    _min?: DetalleAdicionalTaperMinAggregateInputType
    _max?: DetalleAdicionalTaperMaxAggregateInputType
  }

  export type DetalleAdicionalTaperGroupByOutputType = {
    id: number
    taperId: number
    detalleAdicionalId: number
    _count: DetalleAdicionalTaperCountAggregateOutputType | null
    _avg: DetalleAdicionalTaperAvgAggregateOutputType | null
    _sum: DetalleAdicionalTaperSumAggregateOutputType | null
    _min: DetalleAdicionalTaperMinAggregateOutputType | null
    _max: DetalleAdicionalTaperMaxAggregateOutputType | null
  }

  type GetDetalleAdicionalTaperGroupByPayload<T extends DetalleAdicionalTaperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleAdicionalTaperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleAdicionalTaperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleAdicionalTaperGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleAdicionalTaperGroupByOutputType[P]>
        }
      >
    >


  export type DetalleAdicionalTaperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taperId?: boolean
    detalleAdicionalId?: boolean
    Taper?: boolean | TaperDefaultArgs<ExtArgs>
    DetalleAdicional?: boolean | DetalleAdicionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleAdicionalTaper"]>



  export type DetalleAdicionalTaperSelectScalar = {
    id?: boolean
    taperId?: boolean
    detalleAdicionalId?: boolean
  }

  export type DetalleAdicionalTaperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taperId" | "detalleAdicionalId", ExtArgs["result"]["detalleAdicionalTaper"]>
  export type DetalleAdicionalTaperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Taper?: boolean | TaperDefaultArgs<ExtArgs>
    DetalleAdicional?: boolean | DetalleAdicionalDefaultArgs<ExtArgs>
  }

  export type $DetalleAdicionalTaperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleAdicionalTaper"
    objects: {
      Taper: Prisma.$TaperPayload<ExtArgs>
      DetalleAdicional: Prisma.$DetalleAdicionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taperId: number
      detalleAdicionalId: number
    }, ExtArgs["result"]["detalleAdicionalTaper"]>
    composites: {}
  }

  type DetalleAdicionalTaperGetPayload<S extends boolean | null | undefined | DetalleAdicionalTaperDefaultArgs> = $Result.GetResult<Prisma.$DetalleAdicionalTaperPayload, S>

  type DetalleAdicionalTaperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleAdicionalTaperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleAdicionalTaperCountAggregateInputType | true
    }

  export interface DetalleAdicionalTaperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleAdicionalTaper'], meta: { name: 'DetalleAdicionalTaper' } }
    /**
     * Find zero or one DetalleAdicionalTaper that matches the filter.
     * @param {DetalleAdicionalTaperFindUniqueArgs} args - Arguments to find a DetalleAdicionalTaper
     * @example
     * // Get one DetalleAdicionalTaper
     * const detalleAdicionalTaper = await prisma.detalleAdicionalTaper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleAdicionalTaperFindUniqueArgs>(args: SelectSubset<T, DetalleAdicionalTaperFindUniqueArgs<ExtArgs>>): Prisma__DetalleAdicionalTaperClient<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleAdicionalTaper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleAdicionalTaperFindUniqueOrThrowArgs} args - Arguments to find a DetalleAdicionalTaper
     * @example
     * // Get one DetalleAdicionalTaper
     * const detalleAdicionalTaper = await prisma.detalleAdicionalTaper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleAdicionalTaperFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleAdicionalTaperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleAdicionalTaperClient<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleAdicionalTaper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalTaperFindFirstArgs} args - Arguments to find a DetalleAdicionalTaper
     * @example
     * // Get one DetalleAdicionalTaper
     * const detalleAdicionalTaper = await prisma.detalleAdicionalTaper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleAdicionalTaperFindFirstArgs>(args?: SelectSubset<T, DetalleAdicionalTaperFindFirstArgs<ExtArgs>>): Prisma__DetalleAdicionalTaperClient<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleAdicionalTaper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalTaperFindFirstOrThrowArgs} args - Arguments to find a DetalleAdicionalTaper
     * @example
     * // Get one DetalleAdicionalTaper
     * const detalleAdicionalTaper = await prisma.detalleAdicionalTaper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleAdicionalTaperFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleAdicionalTaperFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleAdicionalTaperClient<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleAdicionalTapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalTaperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleAdicionalTapers
     * const detalleAdicionalTapers = await prisma.detalleAdicionalTaper.findMany()
     * 
     * // Get first 10 DetalleAdicionalTapers
     * const detalleAdicionalTapers = await prisma.detalleAdicionalTaper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleAdicionalTaperWithIdOnly = await prisma.detalleAdicionalTaper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleAdicionalTaperFindManyArgs>(args?: SelectSubset<T, DetalleAdicionalTaperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleAdicionalTaper.
     * @param {DetalleAdicionalTaperCreateArgs} args - Arguments to create a DetalleAdicionalTaper.
     * @example
     * // Create one DetalleAdicionalTaper
     * const DetalleAdicionalTaper = await prisma.detalleAdicionalTaper.create({
     *   data: {
     *     // ... data to create a DetalleAdicionalTaper
     *   }
     * })
     * 
     */
    create<T extends DetalleAdicionalTaperCreateArgs>(args: SelectSubset<T, DetalleAdicionalTaperCreateArgs<ExtArgs>>): Prisma__DetalleAdicionalTaperClient<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleAdicionalTapers.
     * @param {DetalleAdicionalTaperCreateManyArgs} args - Arguments to create many DetalleAdicionalTapers.
     * @example
     * // Create many DetalleAdicionalTapers
     * const detalleAdicionalTaper = await prisma.detalleAdicionalTaper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleAdicionalTaperCreateManyArgs>(args?: SelectSubset<T, DetalleAdicionalTaperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetalleAdicionalTaper.
     * @param {DetalleAdicionalTaperDeleteArgs} args - Arguments to delete one DetalleAdicionalTaper.
     * @example
     * // Delete one DetalleAdicionalTaper
     * const DetalleAdicionalTaper = await prisma.detalleAdicionalTaper.delete({
     *   where: {
     *     // ... filter to delete one DetalleAdicionalTaper
     *   }
     * })
     * 
     */
    delete<T extends DetalleAdicionalTaperDeleteArgs>(args: SelectSubset<T, DetalleAdicionalTaperDeleteArgs<ExtArgs>>): Prisma__DetalleAdicionalTaperClient<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleAdicionalTaper.
     * @param {DetalleAdicionalTaperUpdateArgs} args - Arguments to update one DetalleAdicionalTaper.
     * @example
     * // Update one DetalleAdicionalTaper
     * const detalleAdicionalTaper = await prisma.detalleAdicionalTaper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleAdicionalTaperUpdateArgs>(args: SelectSubset<T, DetalleAdicionalTaperUpdateArgs<ExtArgs>>): Prisma__DetalleAdicionalTaperClient<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleAdicionalTapers.
     * @param {DetalleAdicionalTaperDeleteManyArgs} args - Arguments to filter DetalleAdicionalTapers to delete.
     * @example
     * // Delete a few DetalleAdicionalTapers
     * const { count } = await prisma.detalleAdicionalTaper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleAdicionalTaperDeleteManyArgs>(args?: SelectSubset<T, DetalleAdicionalTaperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleAdicionalTapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalTaperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleAdicionalTapers
     * const detalleAdicionalTaper = await prisma.detalleAdicionalTaper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleAdicionalTaperUpdateManyArgs>(args: SelectSubset<T, DetalleAdicionalTaperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetalleAdicionalTaper.
     * @param {DetalleAdicionalTaperUpsertArgs} args - Arguments to update or create a DetalleAdicionalTaper.
     * @example
     * // Update or create a DetalleAdicionalTaper
     * const detalleAdicionalTaper = await prisma.detalleAdicionalTaper.upsert({
     *   create: {
     *     // ... data to create a DetalleAdicionalTaper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleAdicionalTaper we want to update
     *   }
     * })
     */
    upsert<T extends DetalleAdicionalTaperUpsertArgs>(args: SelectSubset<T, DetalleAdicionalTaperUpsertArgs<ExtArgs>>): Prisma__DetalleAdicionalTaperClient<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleAdicionalTapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalTaperCountArgs} args - Arguments to filter DetalleAdicionalTapers to count.
     * @example
     * // Count the number of DetalleAdicionalTapers
     * const count = await prisma.detalleAdicionalTaper.count({
     *   where: {
     *     // ... the filter for the DetalleAdicionalTapers we want to count
     *   }
     * })
    **/
    count<T extends DetalleAdicionalTaperCountArgs>(
      args?: Subset<T, DetalleAdicionalTaperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleAdicionalTaperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleAdicionalTaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalTaperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleAdicionalTaperAggregateArgs>(args: Subset<T, DetalleAdicionalTaperAggregateArgs>): Prisma.PrismaPromise<GetDetalleAdicionalTaperAggregateType<T>>

    /**
     * Group by DetalleAdicionalTaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalTaperGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleAdicionalTaperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleAdicionalTaperGroupByArgs['orderBy'] }
        : { orderBy?: DetalleAdicionalTaperGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleAdicionalTaperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleAdicionalTaperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleAdicionalTaper model
   */
  readonly fields: DetalleAdicionalTaperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleAdicionalTaper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleAdicionalTaperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Taper<T extends TaperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaperDefaultArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DetalleAdicional<T extends DetalleAdicionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetalleAdicionalDefaultArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalleAdicionalTaper model
   */
  interface DetalleAdicionalTaperFieldRefs {
    readonly id: FieldRef<"DetalleAdicionalTaper", 'Int'>
    readonly taperId: FieldRef<"DetalleAdicionalTaper", 'Int'>
    readonly detalleAdicionalId: FieldRef<"DetalleAdicionalTaper", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetalleAdicionalTaper findUnique
   */
  export type DetalleAdicionalTaperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalTaper to fetch.
     */
    where: DetalleAdicionalTaperWhereUniqueInput
  }

  /**
   * DetalleAdicionalTaper findUniqueOrThrow
   */
  export type DetalleAdicionalTaperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalTaper to fetch.
     */
    where: DetalleAdicionalTaperWhereUniqueInput
  }

  /**
   * DetalleAdicionalTaper findFirst
   */
  export type DetalleAdicionalTaperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalTaper to fetch.
     */
    where?: DetalleAdicionalTaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalTapers to fetch.
     */
    orderBy?: DetalleAdicionalTaperOrderByWithRelationInput | DetalleAdicionalTaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleAdicionalTapers.
     */
    cursor?: DetalleAdicionalTaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalTapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalTapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleAdicionalTapers.
     */
    distinct?: DetalleAdicionalTaperScalarFieldEnum | DetalleAdicionalTaperScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalTaper findFirstOrThrow
   */
  export type DetalleAdicionalTaperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalTaper to fetch.
     */
    where?: DetalleAdicionalTaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalTapers to fetch.
     */
    orderBy?: DetalleAdicionalTaperOrderByWithRelationInput | DetalleAdicionalTaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleAdicionalTapers.
     */
    cursor?: DetalleAdicionalTaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalTapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalTapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleAdicionalTapers.
     */
    distinct?: DetalleAdicionalTaperScalarFieldEnum | DetalleAdicionalTaperScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalTaper findMany
   */
  export type DetalleAdicionalTaperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalTapers to fetch.
     */
    where?: DetalleAdicionalTaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalTapers to fetch.
     */
    orderBy?: DetalleAdicionalTaperOrderByWithRelationInput | DetalleAdicionalTaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleAdicionalTapers.
     */
    cursor?: DetalleAdicionalTaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalTapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalTapers.
     */
    skip?: number
    distinct?: DetalleAdicionalTaperScalarFieldEnum | DetalleAdicionalTaperScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalTaper create
   */
  export type DetalleAdicionalTaperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleAdicionalTaper.
     */
    data: XOR<DetalleAdicionalTaperCreateInput, DetalleAdicionalTaperUncheckedCreateInput>
  }

  /**
   * DetalleAdicionalTaper createMany
   */
  export type DetalleAdicionalTaperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleAdicionalTapers.
     */
    data: DetalleAdicionalTaperCreateManyInput | DetalleAdicionalTaperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleAdicionalTaper update
   */
  export type DetalleAdicionalTaperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleAdicionalTaper.
     */
    data: XOR<DetalleAdicionalTaperUpdateInput, DetalleAdicionalTaperUncheckedUpdateInput>
    /**
     * Choose, which DetalleAdicionalTaper to update.
     */
    where: DetalleAdicionalTaperWhereUniqueInput
  }

  /**
   * DetalleAdicionalTaper updateMany
   */
  export type DetalleAdicionalTaperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleAdicionalTapers.
     */
    data: XOR<DetalleAdicionalTaperUpdateManyMutationInput, DetalleAdicionalTaperUncheckedUpdateManyInput>
    /**
     * Filter which DetalleAdicionalTapers to update
     */
    where?: DetalleAdicionalTaperWhereInput
    /**
     * Limit how many DetalleAdicionalTapers to update.
     */
    limit?: number
  }

  /**
   * DetalleAdicionalTaper upsert
   */
  export type DetalleAdicionalTaperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleAdicionalTaper to update in case it exists.
     */
    where: DetalleAdicionalTaperWhereUniqueInput
    /**
     * In case the DetalleAdicionalTaper found by the `where` argument doesn't exist, create a new DetalleAdicionalTaper with this data.
     */
    create: XOR<DetalleAdicionalTaperCreateInput, DetalleAdicionalTaperUncheckedCreateInput>
    /**
     * In case the DetalleAdicionalTaper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleAdicionalTaperUpdateInput, DetalleAdicionalTaperUncheckedUpdateInput>
  }

  /**
   * DetalleAdicionalTaper delete
   */
  export type DetalleAdicionalTaperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    /**
     * Filter which DetalleAdicionalTaper to delete.
     */
    where: DetalleAdicionalTaperWhereUniqueInput
  }

  /**
   * DetalleAdicionalTaper deleteMany
   */
  export type DetalleAdicionalTaperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleAdicionalTapers to delete
     */
    where?: DetalleAdicionalTaperWhereInput
    /**
     * Limit how many DetalleAdicionalTapers to delete.
     */
    limit?: number
  }

  /**
   * DetalleAdicionalTaper without action
   */
  export type DetalleAdicionalTaperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
  }


  /**
   * Model Taper
   */

  export type AggregateTaper = {
    _count: TaperCountAggregateOutputType | null
    _avg: TaperAvgAggregateOutputType | null
    _sum: TaperSumAggregateOutputType | null
    _min: TaperMinAggregateOutputType | null
    _max: TaperMaxAggregateOutputType | null
  }

  export type TaperAvgAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type TaperSumAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type TaperMinAggregateOutputType = {
    id: number | null
    presentacion: $Enums.PresentacionTaper | null
    precio: number | null
  }

  export type TaperMaxAggregateOutputType = {
    id: number | null
    presentacion: $Enums.PresentacionTaper | null
    precio: number | null
  }

  export type TaperCountAggregateOutputType = {
    id: number
    presentacion: number
    precio: number
    _all: number
  }


  export type TaperAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type TaperSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type TaperMinAggregateInputType = {
    id?: true
    presentacion?: true
    precio?: true
  }

  export type TaperMaxAggregateInputType = {
    id?: true
    presentacion?: true
    precio?: true
  }

  export type TaperCountAggregateInputType = {
    id?: true
    presentacion?: true
    precio?: true
    _all?: true
  }

  export type TaperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taper to aggregate.
     */
    where?: TaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tapers to fetch.
     */
    orderBy?: TaperOrderByWithRelationInput | TaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tapers
    **/
    _count?: true | TaperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaperMaxAggregateInputType
  }

  export type GetTaperAggregateType<T extends TaperAggregateArgs> = {
        [P in keyof T & keyof AggregateTaper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaper[P]>
      : GetScalarType<T[P], AggregateTaper[P]>
  }




  export type TaperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaperWhereInput
    orderBy?: TaperOrderByWithAggregationInput | TaperOrderByWithAggregationInput[]
    by: TaperScalarFieldEnum[] | TaperScalarFieldEnum
    having?: TaperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaperCountAggregateInputType | true
    _avg?: TaperAvgAggregateInputType
    _sum?: TaperSumAggregateInputType
    _min?: TaperMinAggregateInputType
    _max?: TaperMaxAggregateInputType
  }

  export type TaperGroupByOutputType = {
    id: number
    presentacion: $Enums.PresentacionTaper
    precio: number
    _count: TaperCountAggregateOutputType | null
    _avg: TaperAvgAggregateOutputType | null
    _sum: TaperSumAggregateOutputType | null
    _min: TaperMinAggregateOutputType | null
    _max: TaperMaxAggregateOutputType | null
  }

  type GetTaperGroupByPayload<T extends TaperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaperGroupByOutputType[P]>
            : GetScalarType<T[P], TaperGroupByOutputType[P]>
        }
      >
    >


  export type TaperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    presentacion?: boolean
    precio?: boolean
    DetalleAdicionalTaper?: boolean | Taper$DetalleAdicionalTaperArgs<ExtArgs>
    _count?: boolean | TaperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taper"]>



  export type TaperSelectScalar = {
    id?: boolean
    presentacion?: boolean
    precio?: boolean
  }

  export type TaperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "presentacion" | "precio", ExtArgs["result"]["taper"]>
  export type TaperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetalleAdicionalTaper?: boolean | Taper$DetalleAdicionalTaperArgs<ExtArgs>
    _count?: boolean | TaperCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TaperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Taper"
    objects: {
      DetalleAdicionalTaper: Prisma.$DetalleAdicionalTaperPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      presentacion: $Enums.PresentacionTaper
      precio: number
    }, ExtArgs["result"]["taper"]>
    composites: {}
  }

  type TaperGetPayload<S extends boolean | null | undefined | TaperDefaultArgs> = $Result.GetResult<Prisma.$TaperPayload, S>

  type TaperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaperCountAggregateInputType | true
    }

  export interface TaperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Taper'], meta: { name: 'Taper' } }
    /**
     * Find zero or one Taper that matches the filter.
     * @param {TaperFindUniqueArgs} args - Arguments to find a Taper
     * @example
     * // Get one Taper
     * const taper = await prisma.taper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaperFindUniqueArgs>(args: SelectSubset<T, TaperFindUniqueArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaperFindUniqueOrThrowArgs} args - Arguments to find a Taper
     * @example
     * // Get one Taper
     * const taper = await prisma.taper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaperFindUniqueOrThrowArgs>(args: SelectSubset<T, TaperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaperFindFirstArgs} args - Arguments to find a Taper
     * @example
     * // Get one Taper
     * const taper = await prisma.taper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaperFindFirstArgs>(args?: SelectSubset<T, TaperFindFirstArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaperFindFirstOrThrowArgs} args - Arguments to find a Taper
     * @example
     * // Get one Taper
     * const taper = await prisma.taper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaperFindFirstOrThrowArgs>(args?: SelectSubset<T, TaperFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tapers
     * const tapers = await prisma.taper.findMany()
     * 
     * // Get first 10 Tapers
     * const tapers = await prisma.taper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taperWithIdOnly = await prisma.taper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaperFindManyArgs>(args?: SelectSubset<T, TaperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taper.
     * @param {TaperCreateArgs} args - Arguments to create a Taper.
     * @example
     * // Create one Taper
     * const Taper = await prisma.taper.create({
     *   data: {
     *     // ... data to create a Taper
     *   }
     * })
     * 
     */
    create<T extends TaperCreateArgs>(args: SelectSubset<T, TaperCreateArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tapers.
     * @param {TaperCreateManyArgs} args - Arguments to create many Tapers.
     * @example
     * // Create many Tapers
     * const taper = await prisma.taper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaperCreateManyArgs>(args?: SelectSubset<T, TaperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Taper.
     * @param {TaperDeleteArgs} args - Arguments to delete one Taper.
     * @example
     * // Delete one Taper
     * const Taper = await prisma.taper.delete({
     *   where: {
     *     // ... filter to delete one Taper
     *   }
     * })
     * 
     */
    delete<T extends TaperDeleteArgs>(args: SelectSubset<T, TaperDeleteArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taper.
     * @param {TaperUpdateArgs} args - Arguments to update one Taper.
     * @example
     * // Update one Taper
     * const taper = await prisma.taper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaperUpdateArgs>(args: SelectSubset<T, TaperUpdateArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tapers.
     * @param {TaperDeleteManyArgs} args - Arguments to filter Tapers to delete.
     * @example
     * // Delete a few Tapers
     * const { count } = await prisma.taper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaperDeleteManyArgs>(args?: SelectSubset<T, TaperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tapers
     * const taper = await prisma.taper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaperUpdateManyArgs>(args: SelectSubset<T, TaperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Taper.
     * @param {TaperUpsertArgs} args - Arguments to update or create a Taper.
     * @example
     * // Update or create a Taper
     * const taper = await prisma.taper.upsert({
     *   create: {
     *     // ... data to create a Taper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taper we want to update
     *   }
     * })
     */
    upsert<T extends TaperUpsertArgs>(args: SelectSubset<T, TaperUpsertArgs<ExtArgs>>): Prisma__TaperClient<$Result.GetResult<Prisma.$TaperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaperCountArgs} args - Arguments to filter Tapers to count.
     * @example
     * // Count the number of Tapers
     * const count = await prisma.taper.count({
     *   where: {
     *     // ... the filter for the Tapers we want to count
     *   }
     * })
    **/
    count<T extends TaperCountArgs>(
      args?: Subset<T, TaperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaperAggregateArgs>(args: Subset<T, TaperAggregateArgs>): Prisma.PrismaPromise<GetTaperAggregateType<T>>

    /**
     * Group by Taper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaperGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaperGroupByArgs['orderBy'] }
        : { orderBy?: TaperGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Taper model
   */
  readonly fields: TaperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DetalleAdicionalTaper<T extends Taper$DetalleAdicionalTaperArgs<ExtArgs> = {}>(args?: Subset<T, Taper$DetalleAdicionalTaperArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalTaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Taper model
   */
  interface TaperFieldRefs {
    readonly id: FieldRef<"Taper", 'Int'>
    readonly presentacion: FieldRef<"Taper", 'PresentacionTaper'>
    readonly precio: FieldRef<"Taper", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Taper findUnique
   */
  export type TaperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * Filter, which Taper to fetch.
     */
    where: TaperWhereUniqueInput
  }

  /**
   * Taper findUniqueOrThrow
   */
  export type TaperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * Filter, which Taper to fetch.
     */
    where: TaperWhereUniqueInput
  }

  /**
   * Taper findFirst
   */
  export type TaperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * Filter, which Taper to fetch.
     */
    where?: TaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tapers to fetch.
     */
    orderBy?: TaperOrderByWithRelationInput | TaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tapers.
     */
    cursor?: TaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tapers.
     */
    distinct?: TaperScalarFieldEnum | TaperScalarFieldEnum[]
  }

  /**
   * Taper findFirstOrThrow
   */
  export type TaperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * Filter, which Taper to fetch.
     */
    where?: TaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tapers to fetch.
     */
    orderBy?: TaperOrderByWithRelationInput | TaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tapers.
     */
    cursor?: TaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tapers.
     */
    distinct?: TaperScalarFieldEnum | TaperScalarFieldEnum[]
  }

  /**
   * Taper findMany
   */
  export type TaperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * Filter, which Tapers to fetch.
     */
    where?: TaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tapers to fetch.
     */
    orderBy?: TaperOrderByWithRelationInput | TaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tapers.
     */
    cursor?: TaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tapers.
     */
    skip?: number
    distinct?: TaperScalarFieldEnum | TaperScalarFieldEnum[]
  }

  /**
   * Taper create
   */
  export type TaperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * The data needed to create a Taper.
     */
    data: XOR<TaperCreateInput, TaperUncheckedCreateInput>
  }

  /**
   * Taper createMany
   */
  export type TaperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tapers.
     */
    data: TaperCreateManyInput | TaperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taper update
   */
  export type TaperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * The data needed to update a Taper.
     */
    data: XOR<TaperUpdateInput, TaperUncheckedUpdateInput>
    /**
     * Choose, which Taper to update.
     */
    where: TaperWhereUniqueInput
  }

  /**
   * Taper updateMany
   */
  export type TaperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tapers.
     */
    data: XOR<TaperUpdateManyMutationInput, TaperUncheckedUpdateManyInput>
    /**
     * Filter which Tapers to update
     */
    where?: TaperWhereInput
    /**
     * Limit how many Tapers to update.
     */
    limit?: number
  }

  /**
   * Taper upsert
   */
  export type TaperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * The filter to search for the Taper to update in case it exists.
     */
    where: TaperWhereUniqueInput
    /**
     * In case the Taper found by the `where` argument doesn't exist, create a new Taper with this data.
     */
    create: XOR<TaperCreateInput, TaperUncheckedCreateInput>
    /**
     * In case the Taper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaperUpdateInput, TaperUncheckedUpdateInput>
  }

  /**
   * Taper delete
   */
  export type TaperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
    /**
     * Filter which Taper to delete.
     */
    where: TaperWhereUniqueInput
  }

  /**
   * Taper deleteMany
   */
  export type TaperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tapers to delete
     */
    where?: TaperWhereInput
    /**
     * Limit how many Tapers to delete.
     */
    limit?: number
  }

  /**
   * Taper.DetalleAdicionalTaper
   */
  export type Taper$DetalleAdicionalTaperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalTaper
     */
    select?: DetalleAdicionalTaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalTaper
     */
    omit?: DetalleAdicionalTaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalTaperInclude<ExtArgs> | null
    where?: DetalleAdicionalTaperWhereInput
    orderBy?: DetalleAdicionalTaperOrderByWithRelationInput | DetalleAdicionalTaperOrderByWithRelationInput[]
    cursor?: DetalleAdicionalTaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleAdicionalTaperScalarFieldEnum | DetalleAdicionalTaperScalarFieldEnum[]
  }

  /**
   * Taper without action
   */
  export type TaperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taper
     */
    select?: TaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taper
     */
    omit?: TaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaperInclude<ExtArgs> | null
  }


  /**
   * Model DetalleAdicionalEntrada
   */

  export type AggregateDetalleAdicionalEntrada = {
    _count: DetalleAdicionalEntradaCountAggregateOutputType | null
    _avg: DetalleAdicionalEntradaAvgAggregateOutputType | null
    _sum: DetalleAdicionalEntradaSumAggregateOutputType | null
    _min: DetalleAdicionalEntradaMinAggregateOutputType | null
    _max: DetalleAdicionalEntradaMaxAggregateOutputType | null
  }

  export type DetalleAdicionalEntradaAvgAggregateOutputType = {
    id: number | null
    entradaId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalEntradaSumAggregateOutputType = {
    id: number | null
    entradaId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalEntradaMinAggregateOutputType = {
    id: number | null
    entradaId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalEntradaMaxAggregateOutputType = {
    id: number | null
    entradaId: number | null
    detalleAdicionalId: number | null
  }

  export type DetalleAdicionalEntradaCountAggregateOutputType = {
    id: number
    entradaId: number
    detalleAdicionalId: number
    _all: number
  }


  export type DetalleAdicionalEntradaAvgAggregateInputType = {
    id?: true
    entradaId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalEntradaSumAggregateInputType = {
    id?: true
    entradaId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalEntradaMinAggregateInputType = {
    id?: true
    entradaId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalEntradaMaxAggregateInputType = {
    id?: true
    entradaId?: true
    detalleAdicionalId?: true
  }

  export type DetalleAdicionalEntradaCountAggregateInputType = {
    id?: true
    entradaId?: true
    detalleAdicionalId?: true
    _all?: true
  }

  export type DetalleAdicionalEntradaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleAdicionalEntrada to aggregate.
     */
    where?: DetalleAdicionalEntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalEntradas to fetch.
     */
    orderBy?: DetalleAdicionalEntradaOrderByWithRelationInput | DetalleAdicionalEntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleAdicionalEntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalEntradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalEntradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleAdicionalEntradas
    **/
    _count?: true | DetalleAdicionalEntradaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleAdicionalEntradaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleAdicionalEntradaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleAdicionalEntradaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleAdicionalEntradaMaxAggregateInputType
  }

  export type GetDetalleAdicionalEntradaAggregateType<T extends DetalleAdicionalEntradaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleAdicionalEntrada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleAdicionalEntrada[P]>
      : GetScalarType<T[P], AggregateDetalleAdicionalEntrada[P]>
  }




  export type DetalleAdicionalEntradaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleAdicionalEntradaWhereInput
    orderBy?: DetalleAdicionalEntradaOrderByWithAggregationInput | DetalleAdicionalEntradaOrderByWithAggregationInput[]
    by: DetalleAdicionalEntradaScalarFieldEnum[] | DetalleAdicionalEntradaScalarFieldEnum
    having?: DetalleAdicionalEntradaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleAdicionalEntradaCountAggregateInputType | true
    _avg?: DetalleAdicionalEntradaAvgAggregateInputType
    _sum?: DetalleAdicionalEntradaSumAggregateInputType
    _min?: DetalleAdicionalEntradaMinAggregateInputType
    _max?: DetalleAdicionalEntradaMaxAggregateInputType
  }

  export type DetalleAdicionalEntradaGroupByOutputType = {
    id: number
    entradaId: number
    detalleAdicionalId: number
    _count: DetalleAdicionalEntradaCountAggregateOutputType | null
    _avg: DetalleAdicionalEntradaAvgAggregateOutputType | null
    _sum: DetalleAdicionalEntradaSumAggregateOutputType | null
    _min: DetalleAdicionalEntradaMinAggregateOutputType | null
    _max: DetalleAdicionalEntradaMaxAggregateOutputType | null
  }

  type GetDetalleAdicionalEntradaGroupByPayload<T extends DetalleAdicionalEntradaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleAdicionalEntradaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleAdicionalEntradaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleAdicionalEntradaGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleAdicionalEntradaGroupByOutputType[P]>
        }
      >
    >


  export type DetalleAdicionalEntradaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entradaId?: boolean
    detalleAdicionalId?: boolean
    Entrada?: boolean | EntradaDefaultArgs<ExtArgs>
    DetalleAdicional?: boolean | DetalleAdicionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleAdicionalEntrada"]>



  export type DetalleAdicionalEntradaSelectScalar = {
    id?: boolean
    entradaId?: boolean
    detalleAdicionalId?: boolean
  }

  export type DetalleAdicionalEntradaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entradaId" | "detalleAdicionalId", ExtArgs["result"]["detalleAdicionalEntrada"]>
  export type DetalleAdicionalEntradaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Entrada?: boolean | EntradaDefaultArgs<ExtArgs>
    DetalleAdicional?: boolean | DetalleAdicionalDefaultArgs<ExtArgs>
  }

  export type $DetalleAdicionalEntradaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleAdicionalEntrada"
    objects: {
      Entrada: Prisma.$EntradaPayload<ExtArgs>
      DetalleAdicional: Prisma.$DetalleAdicionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entradaId: number
      detalleAdicionalId: number
    }, ExtArgs["result"]["detalleAdicionalEntrada"]>
    composites: {}
  }

  type DetalleAdicionalEntradaGetPayload<S extends boolean | null | undefined | DetalleAdicionalEntradaDefaultArgs> = $Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload, S>

  type DetalleAdicionalEntradaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleAdicionalEntradaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleAdicionalEntradaCountAggregateInputType | true
    }

  export interface DetalleAdicionalEntradaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleAdicionalEntrada'], meta: { name: 'DetalleAdicionalEntrada' } }
    /**
     * Find zero or one DetalleAdicionalEntrada that matches the filter.
     * @param {DetalleAdicionalEntradaFindUniqueArgs} args - Arguments to find a DetalleAdicionalEntrada
     * @example
     * // Get one DetalleAdicionalEntrada
     * const detalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleAdicionalEntradaFindUniqueArgs>(args: SelectSubset<T, DetalleAdicionalEntradaFindUniqueArgs<ExtArgs>>): Prisma__DetalleAdicionalEntradaClient<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleAdicionalEntrada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleAdicionalEntradaFindUniqueOrThrowArgs} args - Arguments to find a DetalleAdicionalEntrada
     * @example
     * // Get one DetalleAdicionalEntrada
     * const detalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleAdicionalEntradaFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleAdicionalEntradaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleAdicionalEntradaClient<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleAdicionalEntrada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalEntradaFindFirstArgs} args - Arguments to find a DetalleAdicionalEntrada
     * @example
     * // Get one DetalleAdicionalEntrada
     * const detalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleAdicionalEntradaFindFirstArgs>(args?: SelectSubset<T, DetalleAdicionalEntradaFindFirstArgs<ExtArgs>>): Prisma__DetalleAdicionalEntradaClient<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleAdicionalEntrada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalEntradaFindFirstOrThrowArgs} args - Arguments to find a DetalleAdicionalEntrada
     * @example
     * // Get one DetalleAdicionalEntrada
     * const detalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleAdicionalEntradaFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleAdicionalEntradaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleAdicionalEntradaClient<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleAdicionalEntradas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalEntradaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleAdicionalEntradas
     * const detalleAdicionalEntradas = await prisma.detalleAdicionalEntrada.findMany()
     * 
     * // Get first 10 DetalleAdicionalEntradas
     * const detalleAdicionalEntradas = await prisma.detalleAdicionalEntrada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleAdicionalEntradaWithIdOnly = await prisma.detalleAdicionalEntrada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleAdicionalEntradaFindManyArgs>(args?: SelectSubset<T, DetalleAdicionalEntradaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleAdicionalEntrada.
     * @param {DetalleAdicionalEntradaCreateArgs} args - Arguments to create a DetalleAdicionalEntrada.
     * @example
     * // Create one DetalleAdicionalEntrada
     * const DetalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.create({
     *   data: {
     *     // ... data to create a DetalleAdicionalEntrada
     *   }
     * })
     * 
     */
    create<T extends DetalleAdicionalEntradaCreateArgs>(args: SelectSubset<T, DetalleAdicionalEntradaCreateArgs<ExtArgs>>): Prisma__DetalleAdicionalEntradaClient<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleAdicionalEntradas.
     * @param {DetalleAdicionalEntradaCreateManyArgs} args - Arguments to create many DetalleAdicionalEntradas.
     * @example
     * // Create many DetalleAdicionalEntradas
     * const detalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleAdicionalEntradaCreateManyArgs>(args?: SelectSubset<T, DetalleAdicionalEntradaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetalleAdicionalEntrada.
     * @param {DetalleAdicionalEntradaDeleteArgs} args - Arguments to delete one DetalleAdicionalEntrada.
     * @example
     * // Delete one DetalleAdicionalEntrada
     * const DetalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.delete({
     *   where: {
     *     // ... filter to delete one DetalleAdicionalEntrada
     *   }
     * })
     * 
     */
    delete<T extends DetalleAdicionalEntradaDeleteArgs>(args: SelectSubset<T, DetalleAdicionalEntradaDeleteArgs<ExtArgs>>): Prisma__DetalleAdicionalEntradaClient<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleAdicionalEntrada.
     * @param {DetalleAdicionalEntradaUpdateArgs} args - Arguments to update one DetalleAdicionalEntrada.
     * @example
     * // Update one DetalleAdicionalEntrada
     * const detalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleAdicionalEntradaUpdateArgs>(args: SelectSubset<T, DetalleAdicionalEntradaUpdateArgs<ExtArgs>>): Prisma__DetalleAdicionalEntradaClient<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleAdicionalEntradas.
     * @param {DetalleAdicionalEntradaDeleteManyArgs} args - Arguments to filter DetalleAdicionalEntradas to delete.
     * @example
     * // Delete a few DetalleAdicionalEntradas
     * const { count } = await prisma.detalleAdicionalEntrada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleAdicionalEntradaDeleteManyArgs>(args?: SelectSubset<T, DetalleAdicionalEntradaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleAdicionalEntradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalEntradaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleAdicionalEntradas
     * const detalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleAdicionalEntradaUpdateManyArgs>(args: SelectSubset<T, DetalleAdicionalEntradaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetalleAdicionalEntrada.
     * @param {DetalleAdicionalEntradaUpsertArgs} args - Arguments to update or create a DetalleAdicionalEntrada.
     * @example
     * // Update or create a DetalleAdicionalEntrada
     * const detalleAdicionalEntrada = await prisma.detalleAdicionalEntrada.upsert({
     *   create: {
     *     // ... data to create a DetalleAdicionalEntrada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleAdicionalEntrada we want to update
     *   }
     * })
     */
    upsert<T extends DetalleAdicionalEntradaUpsertArgs>(args: SelectSubset<T, DetalleAdicionalEntradaUpsertArgs<ExtArgs>>): Prisma__DetalleAdicionalEntradaClient<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleAdicionalEntradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalEntradaCountArgs} args - Arguments to filter DetalleAdicionalEntradas to count.
     * @example
     * // Count the number of DetalleAdicionalEntradas
     * const count = await prisma.detalleAdicionalEntrada.count({
     *   where: {
     *     // ... the filter for the DetalleAdicionalEntradas we want to count
     *   }
     * })
    **/
    count<T extends DetalleAdicionalEntradaCountArgs>(
      args?: Subset<T, DetalleAdicionalEntradaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleAdicionalEntradaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleAdicionalEntrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalEntradaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleAdicionalEntradaAggregateArgs>(args: Subset<T, DetalleAdicionalEntradaAggregateArgs>): Prisma.PrismaPromise<GetDetalleAdicionalEntradaAggregateType<T>>

    /**
     * Group by DetalleAdicionalEntrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAdicionalEntradaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleAdicionalEntradaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleAdicionalEntradaGroupByArgs['orderBy'] }
        : { orderBy?: DetalleAdicionalEntradaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleAdicionalEntradaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleAdicionalEntradaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleAdicionalEntrada model
   */
  readonly fields: DetalleAdicionalEntradaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleAdicionalEntrada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleAdicionalEntradaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Entrada<T extends EntradaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntradaDefaultArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DetalleAdicional<T extends DetalleAdicionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetalleAdicionalDefaultArgs<ExtArgs>>): Prisma__DetalleAdicionalClient<$Result.GetResult<Prisma.$DetalleAdicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalleAdicionalEntrada model
   */
  interface DetalleAdicionalEntradaFieldRefs {
    readonly id: FieldRef<"DetalleAdicionalEntrada", 'Int'>
    readonly entradaId: FieldRef<"DetalleAdicionalEntrada", 'Int'>
    readonly detalleAdicionalId: FieldRef<"DetalleAdicionalEntrada", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetalleAdicionalEntrada findUnique
   */
  export type DetalleAdicionalEntradaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalEntrada to fetch.
     */
    where: DetalleAdicionalEntradaWhereUniqueInput
  }

  /**
   * DetalleAdicionalEntrada findUniqueOrThrow
   */
  export type DetalleAdicionalEntradaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalEntrada to fetch.
     */
    where: DetalleAdicionalEntradaWhereUniqueInput
  }

  /**
   * DetalleAdicionalEntrada findFirst
   */
  export type DetalleAdicionalEntradaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalEntrada to fetch.
     */
    where?: DetalleAdicionalEntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalEntradas to fetch.
     */
    orderBy?: DetalleAdicionalEntradaOrderByWithRelationInput | DetalleAdicionalEntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleAdicionalEntradas.
     */
    cursor?: DetalleAdicionalEntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalEntradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalEntradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleAdicionalEntradas.
     */
    distinct?: DetalleAdicionalEntradaScalarFieldEnum | DetalleAdicionalEntradaScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalEntrada findFirstOrThrow
   */
  export type DetalleAdicionalEntradaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalEntrada to fetch.
     */
    where?: DetalleAdicionalEntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalEntradas to fetch.
     */
    orderBy?: DetalleAdicionalEntradaOrderByWithRelationInput | DetalleAdicionalEntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleAdicionalEntradas.
     */
    cursor?: DetalleAdicionalEntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalEntradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalEntradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleAdicionalEntradas.
     */
    distinct?: DetalleAdicionalEntradaScalarFieldEnum | DetalleAdicionalEntradaScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalEntrada findMany
   */
  export type DetalleAdicionalEntradaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleAdicionalEntradas to fetch.
     */
    where?: DetalleAdicionalEntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleAdicionalEntradas to fetch.
     */
    orderBy?: DetalleAdicionalEntradaOrderByWithRelationInput | DetalleAdicionalEntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleAdicionalEntradas.
     */
    cursor?: DetalleAdicionalEntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleAdicionalEntradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleAdicionalEntradas.
     */
    skip?: number
    distinct?: DetalleAdicionalEntradaScalarFieldEnum | DetalleAdicionalEntradaScalarFieldEnum[]
  }

  /**
   * DetalleAdicionalEntrada create
   */
  export type DetalleAdicionalEntradaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleAdicionalEntrada.
     */
    data: XOR<DetalleAdicionalEntradaCreateInput, DetalleAdicionalEntradaUncheckedCreateInput>
  }

  /**
   * DetalleAdicionalEntrada createMany
   */
  export type DetalleAdicionalEntradaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleAdicionalEntradas.
     */
    data: DetalleAdicionalEntradaCreateManyInput | DetalleAdicionalEntradaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleAdicionalEntrada update
   */
  export type DetalleAdicionalEntradaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleAdicionalEntrada.
     */
    data: XOR<DetalleAdicionalEntradaUpdateInput, DetalleAdicionalEntradaUncheckedUpdateInput>
    /**
     * Choose, which DetalleAdicionalEntrada to update.
     */
    where: DetalleAdicionalEntradaWhereUniqueInput
  }

  /**
   * DetalleAdicionalEntrada updateMany
   */
  export type DetalleAdicionalEntradaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleAdicionalEntradas.
     */
    data: XOR<DetalleAdicionalEntradaUpdateManyMutationInput, DetalleAdicionalEntradaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleAdicionalEntradas to update
     */
    where?: DetalleAdicionalEntradaWhereInput
    /**
     * Limit how many DetalleAdicionalEntradas to update.
     */
    limit?: number
  }

  /**
   * DetalleAdicionalEntrada upsert
   */
  export type DetalleAdicionalEntradaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleAdicionalEntrada to update in case it exists.
     */
    where: DetalleAdicionalEntradaWhereUniqueInput
    /**
     * In case the DetalleAdicionalEntrada found by the `where` argument doesn't exist, create a new DetalleAdicionalEntrada with this data.
     */
    create: XOR<DetalleAdicionalEntradaCreateInput, DetalleAdicionalEntradaUncheckedCreateInput>
    /**
     * In case the DetalleAdicionalEntrada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleAdicionalEntradaUpdateInput, DetalleAdicionalEntradaUncheckedUpdateInput>
  }

  /**
   * DetalleAdicionalEntrada delete
   */
  export type DetalleAdicionalEntradaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    /**
     * Filter which DetalleAdicionalEntrada to delete.
     */
    where: DetalleAdicionalEntradaWhereUniqueInput
  }

  /**
   * DetalleAdicionalEntrada deleteMany
   */
  export type DetalleAdicionalEntradaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleAdicionalEntradas to delete
     */
    where?: DetalleAdicionalEntradaWhereInput
    /**
     * Limit how many DetalleAdicionalEntradas to delete.
     */
    limit?: number
  }

  /**
   * DetalleAdicionalEntrada without action
   */
  export type DetalleAdicionalEntradaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
  }


  /**
   * Model Entrada
   */

  export type AggregateEntrada = {
    _count: EntradaCountAggregateOutputType | null
    _avg: EntradaAvgAggregateOutputType | null
    _sum: EntradaSumAggregateOutputType | null
    _min: EntradaMinAggregateOutputType | null
    _max: EntradaMaxAggregateOutputType | null
  }

  export type EntradaAvgAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type EntradaSumAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type EntradaMinAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type EntradaMaxAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type EntradaCountAggregateOutputType = {
    id: number
    precio: number
    _all: number
  }


  export type EntradaAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type EntradaSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type EntradaMinAggregateInputType = {
    id?: true
    precio?: true
  }

  export type EntradaMaxAggregateInputType = {
    id?: true
    precio?: true
  }

  export type EntradaCountAggregateInputType = {
    id?: true
    precio?: true
    _all?: true
  }

  export type EntradaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrada to aggregate.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entradas
    **/
    _count?: true | EntradaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntradaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntradaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntradaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntradaMaxAggregateInputType
  }

  export type GetEntradaAggregateType<T extends EntradaAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrada[P]>
      : GetScalarType<T[P], AggregateEntrada[P]>
  }




  export type EntradaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntradaWhereInput
    orderBy?: EntradaOrderByWithAggregationInput | EntradaOrderByWithAggregationInput[]
    by: EntradaScalarFieldEnum[] | EntradaScalarFieldEnum
    having?: EntradaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntradaCountAggregateInputType | true
    _avg?: EntradaAvgAggregateInputType
    _sum?: EntradaSumAggregateInputType
    _min?: EntradaMinAggregateInputType
    _max?: EntradaMaxAggregateInputType
  }

  export type EntradaGroupByOutputType = {
    id: number
    precio: number
    _count: EntradaCountAggregateOutputType | null
    _avg: EntradaAvgAggregateOutputType | null
    _sum: EntradaSumAggregateOutputType | null
    _min: EntradaMinAggregateOutputType | null
    _max: EntradaMaxAggregateOutputType | null
  }

  type GetEntradaGroupByPayload<T extends EntradaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntradaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntradaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntradaGroupByOutputType[P]>
            : GetScalarType<T[P], EntradaGroupByOutputType[P]>
        }
      >
    >


  export type EntradaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    precio?: boolean
    DetalleAdicionalEntrada?: boolean | Entrada$DetalleAdicionalEntradaArgs<ExtArgs>
    _count?: boolean | EntradaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrada"]>



  export type EntradaSelectScalar = {
    id?: boolean
    precio?: boolean
  }

  export type EntradaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "precio", ExtArgs["result"]["entrada"]>
  export type EntradaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetalleAdicionalEntrada?: boolean | Entrada$DetalleAdicionalEntradaArgs<ExtArgs>
    _count?: boolean | EntradaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EntradaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrada"
    objects: {
      DetalleAdicionalEntrada: Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      precio: number
    }, ExtArgs["result"]["entrada"]>
    composites: {}
  }

  type EntradaGetPayload<S extends boolean | null | undefined | EntradaDefaultArgs> = $Result.GetResult<Prisma.$EntradaPayload, S>

  type EntradaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntradaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntradaCountAggregateInputType | true
    }

  export interface EntradaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrada'], meta: { name: 'Entrada' } }
    /**
     * Find zero or one Entrada that matches the filter.
     * @param {EntradaFindUniqueArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntradaFindUniqueArgs>(args: SelectSubset<T, EntradaFindUniqueArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntradaFindUniqueOrThrowArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntradaFindUniqueOrThrowArgs>(args: SelectSubset<T, EntradaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindFirstArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntradaFindFirstArgs>(args?: SelectSubset<T, EntradaFindFirstArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindFirstOrThrowArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntradaFindFirstOrThrowArgs>(args?: SelectSubset<T, EntradaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entradas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entradas
     * const entradas = await prisma.entrada.findMany()
     * 
     * // Get first 10 Entradas
     * const entradas = await prisma.entrada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entradaWithIdOnly = await prisma.entrada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntradaFindManyArgs>(args?: SelectSubset<T, EntradaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrada.
     * @param {EntradaCreateArgs} args - Arguments to create a Entrada.
     * @example
     * // Create one Entrada
     * const Entrada = await prisma.entrada.create({
     *   data: {
     *     // ... data to create a Entrada
     *   }
     * })
     * 
     */
    create<T extends EntradaCreateArgs>(args: SelectSubset<T, EntradaCreateArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entradas.
     * @param {EntradaCreateManyArgs} args - Arguments to create many Entradas.
     * @example
     * // Create many Entradas
     * const entrada = await prisma.entrada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntradaCreateManyArgs>(args?: SelectSubset<T, EntradaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entrada.
     * @param {EntradaDeleteArgs} args - Arguments to delete one Entrada.
     * @example
     * // Delete one Entrada
     * const Entrada = await prisma.entrada.delete({
     *   where: {
     *     // ... filter to delete one Entrada
     *   }
     * })
     * 
     */
    delete<T extends EntradaDeleteArgs>(args: SelectSubset<T, EntradaDeleteArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrada.
     * @param {EntradaUpdateArgs} args - Arguments to update one Entrada.
     * @example
     * // Update one Entrada
     * const entrada = await prisma.entrada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntradaUpdateArgs>(args: SelectSubset<T, EntradaUpdateArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entradas.
     * @param {EntradaDeleteManyArgs} args - Arguments to filter Entradas to delete.
     * @example
     * // Delete a few Entradas
     * const { count } = await prisma.entrada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntradaDeleteManyArgs>(args?: SelectSubset<T, EntradaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entradas
     * const entrada = await prisma.entrada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntradaUpdateManyArgs>(args: SelectSubset<T, EntradaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entrada.
     * @param {EntradaUpsertArgs} args - Arguments to update or create a Entrada.
     * @example
     * // Update or create a Entrada
     * const entrada = await prisma.entrada.upsert({
     *   create: {
     *     // ... data to create a Entrada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrada we want to update
     *   }
     * })
     */
    upsert<T extends EntradaUpsertArgs>(args: SelectSubset<T, EntradaUpsertArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaCountArgs} args - Arguments to filter Entradas to count.
     * @example
     * // Count the number of Entradas
     * const count = await prisma.entrada.count({
     *   where: {
     *     // ... the filter for the Entradas we want to count
     *   }
     * })
    **/
    count<T extends EntradaCountArgs>(
      args?: Subset<T, EntradaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntradaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntradaAggregateArgs>(args: Subset<T, EntradaAggregateArgs>): Prisma.PrismaPromise<GetEntradaAggregateType<T>>

    /**
     * Group by Entrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntradaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntradaGroupByArgs['orderBy'] }
        : { orderBy?: EntradaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntradaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntradaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrada model
   */
  readonly fields: EntradaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntradaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DetalleAdicionalEntrada<T extends Entrada$DetalleAdicionalEntradaArgs<ExtArgs> = {}>(args?: Subset<T, Entrada$DetalleAdicionalEntradaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleAdicionalEntradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entrada model
   */
  interface EntradaFieldRefs {
    readonly id: FieldRef<"Entrada", 'Int'>
    readonly precio: FieldRef<"Entrada", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Entrada findUnique
   */
  export type EntradaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada findUniqueOrThrow
   */
  export type EntradaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada findFirst
   */
  export type EntradaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entradas.
     */
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada findFirstOrThrow
   */
  export type EntradaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entradas.
     */
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada findMany
   */
  export type EntradaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entradas to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada create
   */
  export type EntradaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrada.
     */
    data: XOR<EntradaCreateInput, EntradaUncheckedCreateInput>
  }

  /**
   * Entrada createMany
   */
  export type EntradaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entradas.
     */
    data: EntradaCreateManyInput | EntradaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrada update
   */
  export type EntradaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrada.
     */
    data: XOR<EntradaUpdateInput, EntradaUncheckedUpdateInput>
    /**
     * Choose, which Entrada to update.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada updateMany
   */
  export type EntradaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entradas.
     */
    data: XOR<EntradaUpdateManyMutationInput, EntradaUncheckedUpdateManyInput>
    /**
     * Filter which Entradas to update
     */
    where?: EntradaWhereInput
    /**
     * Limit how many Entradas to update.
     */
    limit?: number
  }

  /**
   * Entrada upsert
   */
  export type EntradaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrada to update in case it exists.
     */
    where: EntradaWhereUniqueInput
    /**
     * In case the Entrada found by the `where` argument doesn't exist, create a new Entrada with this data.
     */
    create: XOR<EntradaCreateInput, EntradaUncheckedCreateInput>
    /**
     * In case the Entrada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntradaUpdateInput, EntradaUncheckedUpdateInput>
  }

  /**
   * Entrada delete
   */
  export type EntradaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter which Entrada to delete.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada deleteMany
   */
  export type EntradaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entradas to delete
     */
    where?: EntradaWhereInput
    /**
     * Limit how many Entradas to delete.
     */
    limit?: number
  }

  /**
   * Entrada.DetalleAdicionalEntrada
   */
  export type Entrada$DetalleAdicionalEntradaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleAdicionalEntrada
     */
    select?: DetalleAdicionalEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleAdicionalEntrada
     */
    omit?: DetalleAdicionalEntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleAdicionalEntradaInclude<ExtArgs> | null
    where?: DetalleAdicionalEntradaWhereInput
    orderBy?: DetalleAdicionalEntradaOrderByWithRelationInput | DetalleAdicionalEntradaOrderByWithRelationInput[]
    cursor?: DetalleAdicionalEntradaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleAdicionalEntradaScalarFieldEnum | DetalleAdicionalEntradaScalarFieldEnum[]
  }

  /**
   * Entrada without action
   */
  export type EntradaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    dni: 'dni',
    telefono: 'telefono',
    email: 'email'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const MesaScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    capacidad: 'capacidad',
    estado: 'estado'
  };

  export type MesaScalarFieldEnum = (typeof MesaScalarFieldEnum)[keyof typeof MesaScalarFieldEnum]


  export const CartaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio'
  };

  export type CartaScalarFieldEnum = (typeof CartaScalarFieldEnum)[keyof typeof CartaScalarFieldEnum]


  export const PlatoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    cartaId: 'cartaId'
  };

  export type PlatoScalarFieldEnum = (typeof PlatoScalarFieldEnum)[keyof typeof PlatoScalarFieldEnum]


  export const TipoPagoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type TipoPagoScalarFieldEnum = (typeof TipoPagoScalarFieldEnum)[keyof typeof TipoPagoScalarFieldEnum]


  export const ComprobanteScalarFieldEnum: {
    id: 'id',
    tipoComprobante: 'tipoComprobante',
    numero: 'numero',
    fechaEmision: 'fechaEmision',
    tipoPagoId: 'tipoPagoId'
  };

  export type ComprobanteScalarFieldEnum = (typeof ComprobanteScalarFieldEnum)[keyof typeof ComprobanteScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    total: 'total',
    clienteId: 'clienteId',
    mesaId: 'mesaId',
    comprobanteId: 'comprobanteId',
    detalleAdicionalId: 'detalleAdicionalId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PedidoItemScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    pedidoId: 'pedidoId',
    platoId: 'platoId'
  };

  export type PedidoItemScalarFieldEnum = (typeof PedidoItemScalarFieldEnum)[keyof typeof PedidoItemScalarFieldEnum]


  export const DetalleAdicionalScalarFieldEnum: {
    id: 'id'
  };

  export type DetalleAdicionalScalarFieldEnum = (typeof DetalleAdicionalScalarFieldEnum)[keyof typeof DetalleAdicionalScalarFieldEnum]


  export const DetalleAdicionalBebidaScalarFieldEnum: {
    id: 'id',
    bebidaId: 'bebidaId',
    detalleAdicionalId: 'detalleAdicionalId'
  };

  export type DetalleAdicionalBebidaScalarFieldEnum = (typeof DetalleAdicionalBebidaScalarFieldEnum)[keyof typeof DetalleAdicionalBebidaScalarFieldEnum]


  export const BebidaScalarFieldEnum: {
    id: 'id',
    presentacion: 'presentacion',
    precio: 'precio',
    tipoBebidaId: 'tipoBebidaId'
  };

  export type BebidaScalarFieldEnum = (typeof BebidaScalarFieldEnum)[keyof typeof BebidaScalarFieldEnum]


  export const TipoBebidaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type TipoBebidaScalarFieldEnum = (typeof TipoBebidaScalarFieldEnum)[keyof typeof TipoBebidaScalarFieldEnum]


  export const DetalleAdicionalTaperScalarFieldEnum: {
    id: 'id',
    taperId: 'taperId',
    detalleAdicionalId: 'detalleAdicionalId'
  };

  export type DetalleAdicionalTaperScalarFieldEnum = (typeof DetalleAdicionalTaperScalarFieldEnum)[keyof typeof DetalleAdicionalTaperScalarFieldEnum]


  export const TaperScalarFieldEnum: {
    id: 'id',
    presentacion: 'presentacion',
    precio: 'precio'
  };

  export type TaperScalarFieldEnum = (typeof TaperScalarFieldEnum)[keyof typeof TaperScalarFieldEnum]


  export const DetalleAdicionalEntradaScalarFieldEnum: {
    id: 'id',
    entradaId: 'entradaId',
    detalleAdicionalId: 'detalleAdicionalId'
  };

  export type DetalleAdicionalEntradaScalarFieldEnum = (typeof DetalleAdicionalEntradaScalarFieldEnum)[keyof typeof DetalleAdicionalEntradaScalarFieldEnum]


  export const EntradaScalarFieldEnum: {
    id: 'id',
    precio: 'precio'
  };

  export type EntradaScalarFieldEnum = (typeof EntradaScalarFieldEnum)[keyof typeof EntradaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    password: 'password',
    refreshToken: 'refreshToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ClienteOrderByRelevanceFieldEnum: {
    nome: 'nome',
    dni: 'dni',
    telefono: 'telefono',
    email: 'email'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const MesaOrderByRelevanceFieldEnum: {
    numero: 'numero'
  };

  export type MesaOrderByRelevanceFieldEnum = (typeof MesaOrderByRelevanceFieldEnum)[keyof typeof MesaOrderByRelevanceFieldEnum]


  export const CartaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio'
  };

  export type CartaOrderByRelevanceFieldEnum = (typeof CartaOrderByRelevanceFieldEnum)[keyof typeof CartaOrderByRelevanceFieldEnum]


  export const PlatoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type PlatoOrderByRelevanceFieldEnum = (typeof PlatoOrderByRelevanceFieldEnum)[keyof typeof PlatoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'EstadoMesa'
   */
  export type EnumEstadoMesaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoMesa'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'MetodoPago'
   */
  export type EnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago'>
    


  /**
   * Reference to a field of type 'TipoComprobante'
   */
  export type EnumTipoComprobanteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoComprobante'>
    


  /**
   * Reference to a field of type 'PresentacionBebida'
   */
  export type EnumPresentacionBebidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresentacionBebida'>
    


  /**
   * Reference to a field of type 'TipoBebidaList'
   */
  export type EnumTipoBebidaListFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoBebidaList'>
    


  /**
   * Reference to a field of type 'PresentacionTaper'
   */
  export type EnumPresentacionTaperFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresentacionTaper'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    refreshToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "refreshToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    dni?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    Pedido?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    Pedido?: PedidoOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    dni?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    Pedido?: PedidoListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    dni?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type MesaWhereInput = {
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    id?: IntFilter<"Mesa"> | number
    numero?: StringFilter<"Mesa"> | string
    capacidad?: IntFilter<"Mesa"> | number
    estado?: EnumEstadoMesaFilter<"Mesa"> | $Enums.EstadoMesa
    Pedido?: PedidoListRelationFilter
  }

  export type MesaOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    Pedido?: PedidoOrderByRelationAggregateInput
    _relevance?: MesaOrderByRelevanceInput
  }

  export type MesaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MesaWhereInput | MesaWhereInput[]
    OR?: MesaWhereInput[]
    NOT?: MesaWhereInput | MesaWhereInput[]
    numero?: StringFilter<"Mesa"> | string
    capacidad?: IntFilter<"Mesa"> | number
    estado?: EnumEstadoMesaFilter<"Mesa"> | $Enums.EstadoMesa
    Pedido?: PedidoListRelationFilter
  }, "id">

  export type MesaOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    _count?: MesaCountOrderByAggregateInput
    _avg?: MesaAvgOrderByAggregateInput
    _max?: MesaMaxOrderByAggregateInput
    _min?: MesaMinOrderByAggregateInput
    _sum?: MesaSumOrderByAggregateInput
  }

  export type MesaScalarWhereWithAggregatesInput = {
    AND?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    OR?: MesaScalarWhereWithAggregatesInput[]
    NOT?: MesaScalarWhereWithAggregatesInput | MesaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mesa"> | number
    numero?: StringWithAggregatesFilter<"Mesa"> | string
    capacidad?: IntWithAggregatesFilter<"Mesa"> | number
    estado?: EnumEstadoMesaWithAggregatesFilter<"Mesa"> | $Enums.EstadoMesa
  }

  export type CartaWhereInput = {
    AND?: CartaWhereInput | CartaWhereInput[]
    OR?: CartaWhereInput[]
    NOT?: CartaWhereInput | CartaWhereInput[]
    id?: IntFilter<"Carta"> | number
    nombre?: StringFilter<"Carta"> | string
    descripcion?: StringFilter<"Carta"> | string
    precio?: StringFilter<"Carta"> | string
    Plato?: PlatoListRelationFilter
  }

  export type CartaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    Plato?: PlatoOrderByRelationAggregateInput
    _relevance?: CartaOrderByRelevanceInput
  }

  export type CartaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartaWhereInput | CartaWhereInput[]
    OR?: CartaWhereInput[]
    NOT?: CartaWhereInput | CartaWhereInput[]
    nombre?: StringFilter<"Carta"> | string
    descripcion?: StringFilter<"Carta"> | string
    precio?: StringFilter<"Carta"> | string
    Plato?: PlatoListRelationFilter
  }, "id">

  export type CartaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    _count?: CartaCountOrderByAggregateInput
    _avg?: CartaAvgOrderByAggregateInput
    _max?: CartaMaxOrderByAggregateInput
    _min?: CartaMinOrderByAggregateInput
    _sum?: CartaSumOrderByAggregateInput
  }

  export type CartaScalarWhereWithAggregatesInput = {
    AND?: CartaScalarWhereWithAggregatesInput | CartaScalarWhereWithAggregatesInput[]
    OR?: CartaScalarWhereWithAggregatesInput[]
    NOT?: CartaScalarWhereWithAggregatesInput | CartaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carta"> | number
    nombre?: StringWithAggregatesFilter<"Carta"> | string
    descripcion?: StringWithAggregatesFilter<"Carta"> | string
    precio?: StringWithAggregatesFilter<"Carta"> | string
  }

  export type PlatoWhereInput = {
    AND?: PlatoWhereInput | PlatoWhereInput[]
    OR?: PlatoWhereInput[]
    NOT?: PlatoWhereInput | PlatoWhereInput[]
    id?: IntFilter<"Plato"> | number
    nombre?: StringFilter<"Plato"> | string
    descripcion?: StringFilter<"Plato"> | string
    precio?: FloatFilter<"Plato"> | number
    cartaId?: IntFilter<"Plato"> | number
    Carta?: XOR<CartaScalarRelationFilter, CartaWhereInput>
    PedidoItem?: PedidoItemListRelationFilter
  }

  export type PlatoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    cartaId?: SortOrder
    Carta?: CartaOrderByWithRelationInput
    PedidoItem?: PedidoItemOrderByRelationAggregateInput
    _relevance?: PlatoOrderByRelevanceInput
  }

  export type PlatoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlatoWhereInput | PlatoWhereInput[]
    OR?: PlatoWhereInput[]
    NOT?: PlatoWhereInput | PlatoWhereInput[]
    nombre?: StringFilter<"Plato"> | string
    descripcion?: StringFilter<"Plato"> | string
    precio?: FloatFilter<"Plato"> | number
    cartaId?: IntFilter<"Plato"> | number
    Carta?: XOR<CartaScalarRelationFilter, CartaWhereInput>
    PedidoItem?: PedidoItemListRelationFilter
  }, "id">

  export type PlatoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    cartaId?: SortOrder
    _count?: PlatoCountOrderByAggregateInput
    _avg?: PlatoAvgOrderByAggregateInput
    _max?: PlatoMaxOrderByAggregateInput
    _min?: PlatoMinOrderByAggregateInput
    _sum?: PlatoSumOrderByAggregateInput
  }

  export type PlatoScalarWhereWithAggregatesInput = {
    AND?: PlatoScalarWhereWithAggregatesInput | PlatoScalarWhereWithAggregatesInput[]
    OR?: PlatoScalarWhereWithAggregatesInput[]
    NOT?: PlatoScalarWhereWithAggregatesInput | PlatoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plato"> | number
    nombre?: StringWithAggregatesFilter<"Plato"> | string
    descripcion?: StringWithAggregatesFilter<"Plato"> | string
    precio?: FloatWithAggregatesFilter<"Plato"> | number
    cartaId?: IntWithAggregatesFilter<"Plato"> | number
  }

  export type TipoPagoWhereInput = {
    AND?: TipoPagoWhereInput | TipoPagoWhereInput[]
    OR?: TipoPagoWhereInput[]
    NOT?: TipoPagoWhereInput | TipoPagoWhereInput[]
    id?: IntFilter<"TipoPago"> | number
    nombre?: EnumMetodoPagoFilter<"TipoPago"> | $Enums.MetodoPago
    Comprobante?: ComprobanteListRelationFilter
  }

  export type TipoPagoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    Comprobante?: ComprobanteOrderByRelationAggregateInput
  }

  export type TipoPagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoPagoWhereInput | TipoPagoWhereInput[]
    OR?: TipoPagoWhereInput[]
    NOT?: TipoPagoWhereInput | TipoPagoWhereInput[]
    nombre?: EnumMetodoPagoFilter<"TipoPago"> | $Enums.MetodoPago
    Comprobante?: ComprobanteListRelationFilter
  }, "id">

  export type TipoPagoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: TipoPagoCountOrderByAggregateInput
    _avg?: TipoPagoAvgOrderByAggregateInput
    _max?: TipoPagoMaxOrderByAggregateInput
    _min?: TipoPagoMinOrderByAggregateInput
    _sum?: TipoPagoSumOrderByAggregateInput
  }

  export type TipoPagoScalarWhereWithAggregatesInput = {
    AND?: TipoPagoScalarWhereWithAggregatesInput | TipoPagoScalarWhereWithAggregatesInput[]
    OR?: TipoPagoScalarWhereWithAggregatesInput[]
    NOT?: TipoPagoScalarWhereWithAggregatesInput | TipoPagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoPago"> | number
    nombre?: EnumMetodoPagoWithAggregatesFilter<"TipoPago"> | $Enums.MetodoPago
  }

  export type ComprobanteWhereInput = {
    AND?: ComprobanteWhereInput | ComprobanteWhereInput[]
    OR?: ComprobanteWhereInput[]
    NOT?: ComprobanteWhereInput | ComprobanteWhereInput[]
    id?: IntFilter<"Comprobante"> | number
    tipoComprobante?: EnumTipoComprobanteFilter<"Comprobante"> | $Enums.TipoComprobante
    numero?: IntFilter<"Comprobante"> | number
    fechaEmision?: DateTimeFilter<"Comprobante"> | Date | string
    tipoPagoId?: IntFilter<"Comprobante"> | number
    TipoPago?: XOR<TipoPagoScalarRelationFilter, TipoPagoWhereInput>
    Pedido?: PedidoListRelationFilter
  }

  export type ComprobanteOrderByWithRelationInput = {
    id?: SortOrder
    tipoComprobante?: SortOrder
    numero?: SortOrder
    fechaEmision?: SortOrder
    tipoPagoId?: SortOrder
    TipoPago?: TipoPagoOrderByWithRelationInput
    Pedido?: PedidoOrderByRelationAggregateInput
  }

  export type ComprobanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComprobanteWhereInput | ComprobanteWhereInput[]
    OR?: ComprobanteWhereInput[]
    NOT?: ComprobanteWhereInput | ComprobanteWhereInput[]
    tipoComprobante?: EnumTipoComprobanteFilter<"Comprobante"> | $Enums.TipoComprobante
    numero?: IntFilter<"Comprobante"> | number
    fechaEmision?: DateTimeFilter<"Comprobante"> | Date | string
    tipoPagoId?: IntFilter<"Comprobante"> | number
    TipoPago?: XOR<TipoPagoScalarRelationFilter, TipoPagoWhereInput>
    Pedido?: PedidoListRelationFilter
  }, "id">

  export type ComprobanteOrderByWithAggregationInput = {
    id?: SortOrder
    tipoComprobante?: SortOrder
    numero?: SortOrder
    fechaEmision?: SortOrder
    tipoPagoId?: SortOrder
    _count?: ComprobanteCountOrderByAggregateInput
    _avg?: ComprobanteAvgOrderByAggregateInput
    _max?: ComprobanteMaxOrderByAggregateInput
    _min?: ComprobanteMinOrderByAggregateInput
    _sum?: ComprobanteSumOrderByAggregateInput
  }

  export type ComprobanteScalarWhereWithAggregatesInput = {
    AND?: ComprobanteScalarWhereWithAggregatesInput | ComprobanteScalarWhereWithAggregatesInput[]
    OR?: ComprobanteScalarWhereWithAggregatesInput[]
    NOT?: ComprobanteScalarWhereWithAggregatesInput | ComprobanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comprobante"> | number
    tipoComprobante?: EnumTipoComprobanteWithAggregatesFilter<"Comprobante"> | $Enums.TipoComprobante
    numero?: IntWithAggregatesFilter<"Comprobante"> | number
    fechaEmision?: DateTimeWithAggregatesFilter<"Comprobante"> | Date | string
    tipoPagoId?: IntWithAggregatesFilter<"Comprobante"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    fecha?: DateTimeFilter<"Pedido"> | Date | string
    total?: FloatFilter<"Pedido"> | number
    clienteId?: IntFilter<"Pedido"> | number
    mesaId?: IntFilter<"Pedido"> | number
    comprobanteId?: IntFilter<"Pedido"> | number
    detalleAdicionalId?: IntNullableFilter<"Pedido"> | number | null
    Cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    Mesa?: XOR<MesaScalarRelationFilter, MesaWhereInput>
    Comprobante?: XOR<ComprobanteScalarRelationFilter, ComprobanteWhereInput>
    DetalleAdicional?: XOR<DetalleAdicionalNullableScalarRelationFilter, DetalleAdicionalWhereInput> | null
    PedidoItem?: PedidoItemListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    mesaId?: SortOrder
    comprobanteId?: SortOrder
    detalleAdicionalId?: SortOrderInput | SortOrder
    Cliente?: ClienteOrderByWithRelationInput
    Mesa?: MesaOrderByWithRelationInput
    Comprobante?: ComprobanteOrderByWithRelationInput
    DetalleAdicional?: DetalleAdicionalOrderByWithRelationInput
    PedidoItem?: PedidoItemOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    fecha?: DateTimeFilter<"Pedido"> | Date | string
    total?: FloatFilter<"Pedido"> | number
    clienteId?: IntFilter<"Pedido"> | number
    mesaId?: IntFilter<"Pedido"> | number
    comprobanteId?: IntFilter<"Pedido"> | number
    detalleAdicionalId?: IntNullableFilter<"Pedido"> | number | null
    Cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    Mesa?: XOR<MesaScalarRelationFilter, MesaWhereInput>
    Comprobante?: XOR<ComprobanteScalarRelationFilter, ComprobanteWhereInput>
    DetalleAdicional?: XOR<DetalleAdicionalNullableScalarRelationFilter, DetalleAdicionalWhereInput> | null
    PedidoItem?: PedidoItemListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    mesaId?: SortOrder
    comprobanteId?: SortOrder
    detalleAdicionalId?: SortOrderInput | SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    fecha?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    total?: FloatWithAggregatesFilter<"Pedido"> | number
    clienteId?: IntWithAggregatesFilter<"Pedido"> | number
    mesaId?: IntWithAggregatesFilter<"Pedido"> | number
    comprobanteId?: IntWithAggregatesFilter<"Pedido"> | number
    detalleAdicionalId?: IntNullableWithAggregatesFilter<"Pedido"> | number | null
  }

  export type PedidoItemWhereInput = {
    AND?: PedidoItemWhereInput | PedidoItemWhereInput[]
    OR?: PedidoItemWhereInput[]
    NOT?: PedidoItemWhereInput | PedidoItemWhereInput[]
    id?: IntFilter<"PedidoItem"> | number
    cantidad?: IntFilter<"PedidoItem"> | number
    pedidoId?: IntFilter<"PedidoItem"> | number
    platoId?: IntFilter<"PedidoItem"> | number
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    Plato?: XOR<PlatoScalarRelationFilter, PlatoWhereInput>
  }

  export type PedidoItemOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    pedidoId?: SortOrder
    platoId?: SortOrder
    Pedido?: PedidoOrderByWithRelationInput
    Plato?: PlatoOrderByWithRelationInput
  }

  export type PedidoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoItemWhereInput | PedidoItemWhereInput[]
    OR?: PedidoItemWhereInput[]
    NOT?: PedidoItemWhereInput | PedidoItemWhereInput[]
    cantidad?: IntFilter<"PedidoItem"> | number
    pedidoId?: IntFilter<"PedidoItem"> | number
    platoId?: IntFilter<"PedidoItem"> | number
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    Plato?: XOR<PlatoScalarRelationFilter, PlatoWhereInput>
  }, "id">

  export type PedidoItemOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    pedidoId?: SortOrder
    platoId?: SortOrder
    _count?: PedidoItemCountOrderByAggregateInput
    _avg?: PedidoItemAvgOrderByAggregateInput
    _max?: PedidoItemMaxOrderByAggregateInput
    _min?: PedidoItemMinOrderByAggregateInput
    _sum?: PedidoItemSumOrderByAggregateInput
  }

  export type PedidoItemScalarWhereWithAggregatesInput = {
    AND?: PedidoItemScalarWhereWithAggregatesInput | PedidoItemScalarWhereWithAggregatesInput[]
    OR?: PedidoItemScalarWhereWithAggregatesInput[]
    NOT?: PedidoItemScalarWhereWithAggregatesInput | PedidoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidoItem"> | number
    cantidad?: IntWithAggregatesFilter<"PedidoItem"> | number
    pedidoId?: IntWithAggregatesFilter<"PedidoItem"> | number
    platoId?: IntWithAggregatesFilter<"PedidoItem"> | number
  }

  export type DetalleAdicionalWhereInput = {
    AND?: DetalleAdicionalWhereInput | DetalleAdicionalWhereInput[]
    OR?: DetalleAdicionalWhereInput[]
    NOT?: DetalleAdicionalWhereInput | DetalleAdicionalWhereInput[]
    id?: IntFilter<"DetalleAdicional"> | number
    Pedido?: PedidoListRelationFilter
    DetalleAdicionalBebida?: DetalleAdicionalBebidaListRelationFilter
    DetalleAdicionalTaper?: DetalleAdicionalTaperListRelationFilter
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaListRelationFilter
  }

  export type DetalleAdicionalOrderByWithRelationInput = {
    id?: SortOrder
    Pedido?: PedidoOrderByRelationAggregateInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaOrderByRelationAggregateInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperOrderByRelationAggregateInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaOrderByRelationAggregateInput
  }

  export type DetalleAdicionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleAdicionalWhereInput | DetalleAdicionalWhereInput[]
    OR?: DetalleAdicionalWhereInput[]
    NOT?: DetalleAdicionalWhereInput | DetalleAdicionalWhereInput[]
    Pedido?: PedidoListRelationFilter
    DetalleAdicionalBebida?: DetalleAdicionalBebidaListRelationFilter
    DetalleAdicionalTaper?: DetalleAdicionalTaperListRelationFilter
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaListRelationFilter
  }, "id">

  export type DetalleAdicionalOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: DetalleAdicionalCountOrderByAggregateInput
    _avg?: DetalleAdicionalAvgOrderByAggregateInput
    _max?: DetalleAdicionalMaxOrderByAggregateInput
    _min?: DetalleAdicionalMinOrderByAggregateInput
    _sum?: DetalleAdicionalSumOrderByAggregateInput
  }

  export type DetalleAdicionalScalarWhereWithAggregatesInput = {
    AND?: DetalleAdicionalScalarWhereWithAggregatesInput | DetalleAdicionalScalarWhereWithAggregatesInput[]
    OR?: DetalleAdicionalScalarWhereWithAggregatesInput[]
    NOT?: DetalleAdicionalScalarWhereWithAggregatesInput | DetalleAdicionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleAdicional"> | number
  }

  export type DetalleAdicionalBebidaWhereInput = {
    AND?: DetalleAdicionalBebidaWhereInput | DetalleAdicionalBebidaWhereInput[]
    OR?: DetalleAdicionalBebidaWhereInput[]
    NOT?: DetalleAdicionalBebidaWhereInput | DetalleAdicionalBebidaWhereInput[]
    id?: IntFilter<"DetalleAdicionalBebida"> | number
    bebidaId?: IntFilter<"DetalleAdicionalBebida"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalBebida"> | number
    Bebida?: XOR<BebidaScalarRelationFilter, BebidaWhereInput>
    DetalleAdicional?: XOR<DetalleAdicionalScalarRelationFilter, DetalleAdicionalWhereInput>
  }

  export type DetalleAdicionalBebidaOrderByWithRelationInput = {
    id?: SortOrder
    bebidaId?: SortOrder
    detalleAdicionalId?: SortOrder
    Bebida?: BebidaOrderByWithRelationInput
    DetalleAdicional?: DetalleAdicionalOrderByWithRelationInput
  }

  export type DetalleAdicionalBebidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleAdicionalBebidaWhereInput | DetalleAdicionalBebidaWhereInput[]
    OR?: DetalleAdicionalBebidaWhereInput[]
    NOT?: DetalleAdicionalBebidaWhereInput | DetalleAdicionalBebidaWhereInput[]
    bebidaId?: IntFilter<"DetalleAdicionalBebida"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalBebida"> | number
    Bebida?: XOR<BebidaScalarRelationFilter, BebidaWhereInput>
    DetalleAdicional?: XOR<DetalleAdicionalScalarRelationFilter, DetalleAdicionalWhereInput>
  }, "id">

  export type DetalleAdicionalBebidaOrderByWithAggregationInput = {
    id?: SortOrder
    bebidaId?: SortOrder
    detalleAdicionalId?: SortOrder
    _count?: DetalleAdicionalBebidaCountOrderByAggregateInput
    _avg?: DetalleAdicionalBebidaAvgOrderByAggregateInput
    _max?: DetalleAdicionalBebidaMaxOrderByAggregateInput
    _min?: DetalleAdicionalBebidaMinOrderByAggregateInput
    _sum?: DetalleAdicionalBebidaSumOrderByAggregateInput
  }

  export type DetalleAdicionalBebidaScalarWhereWithAggregatesInput = {
    AND?: DetalleAdicionalBebidaScalarWhereWithAggregatesInput | DetalleAdicionalBebidaScalarWhereWithAggregatesInput[]
    OR?: DetalleAdicionalBebidaScalarWhereWithAggregatesInput[]
    NOT?: DetalleAdicionalBebidaScalarWhereWithAggregatesInput | DetalleAdicionalBebidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleAdicionalBebida"> | number
    bebidaId?: IntWithAggregatesFilter<"DetalleAdicionalBebida"> | number
    detalleAdicionalId?: IntWithAggregatesFilter<"DetalleAdicionalBebida"> | number
  }

  export type BebidaWhereInput = {
    AND?: BebidaWhereInput | BebidaWhereInput[]
    OR?: BebidaWhereInput[]
    NOT?: BebidaWhereInput | BebidaWhereInput[]
    id?: IntFilter<"Bebida"> | number
    presentacion?: EnumPresentacionBebidaFilter<"Bebida"> | $Enums.PresentacionBebida
    precio?: FloatFilter<"Bebida"> | number
    tipoBebidaId?: IntFilter<"Bebida"> | number
    TipoBebida?: XOR<TipoBebidaScalarRelationFilter, TipoBebidaWhereInput>
    DetalleAdicionalBebida?: DetalleAdicionalBebidaListRelationFilter
  }

  export type BebidaOrderByWithRelationInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
    tipoBebidaId?: SortOrder
    TipoBebida?: TipoBebidaOrderByWithRelationInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaOrderByRelationAggregateInput
  }

  export type BebidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    presentacion_tipoBebidaId?: BebidaPresentacionTipoBebidaIdCompoundUniqueInput
    AND?: BebidaWhereInput | BebidaWhereInput[]
    OR?: BebidaWhereInput[]
    NOT?: BebidaWhereInput | BebidaWhereInput[]
    presentacion?: EnumPresentacionBebidaFilter<"Bebida"> | $Enums.PresentacionBebida
    precio?: FloatFilter<"Bebida"> | number
    tipoBebidaId?: IntFilter<"Bebida"> | number
    TipoBebida?: XOR<TipoBebidaScalarRelationFilter, TipoBebidaWhereInput>
    DetalleAdicionalBebida?: DetalleAdicionalBebidaListRelationFilter
  }, "id" | "presentacion_tipoBebidaId">

  export type BebidaOrderByWithAggregationInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
    tipoBebidaId?: SortOrder
    _count?: BebidaCountOrderByAggregateInput
    _avg?: BebidaAvgOrderByAggregateInput
    _max?: BebidaMaxOrderByAggregateInput
    _min?: BebidaMinOrderByAggregateInput
    _sum?: BebidaSumOrderByAggregateInput
  }

  export type BebidaScalarWhereWithAggregatesInput = {
    AND?: BebidaScalarWhereWithAggregatesInput | BebidaScalarWhereWithAggregatesInput[]
    OR?: BebidaScalarWhereWithAggregatesInput[]
    NOT?: BebidaScalarWhereWithAggregatesInput | BebidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bebida"> | number
    presentacion?: EnumPresentacionBebidaWithAggregatesFilter<"Bebida"> | $Enums.PresentacionBebida
    precio?: FloatWithAggregatesFilter<"Bebida"> | number
    tipoBebidaId?: IntWithAggregatesFilter<"Bebida"> | number
  }

  export type TipoBebidaWhereInput = {
    AND?: TipoBebidaWhereInput | TipoBebidaWhereInput[]
    OR?: TipoBebidaWhereInput[]
    NOT?: TipoBebidaWhereInput | TipoBebidaWhereInput[]
    id?: IntFilter<"TipoBebida"> | number
    nombre?: EnumTipoBebidaListFilter<"TipoBebida"> | $Enums.TipoBebidaList
    Bebida?: BebidaListRelationFilter
  }

  export type TipoBebidaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    Bebida?: BebidaOrderByRelationAggregateInput
  }

  export type TipoBebidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: $Enums.TipoBebidaList
    AND?: TipoBebidaWhereInput | TipoBebidaWhereInput[]
    OR?: TipoBebidaWhereInput[]
    NOT?: TipoBebidaWhereInput | TipoBebidaWhereInput[]
    Bebida?: BebidaListRelationFilter
  }, "id" | "nombre">

  export type TipoBebidaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: TipoBebidaCountOrderByAggregateInput
    _avg?: TipoBebidaAvgOrderByAggregateInput
    _max?: TipoBebidaMaxOrderByAggregateInput
    _min?: TipoBebidaMinOrderByAggregateInput
    _sum?: TipoBebidaSumOrderByAggregateInput
  }

  export type TipoBebidaScalarWhereWithAggregatesInput = {
    AND?: TipoBebidaScalarWhereWithAggregatesInput | TipoBebidaScalarWhereWithAggregatesInput[]
    OR?: TipoBebidaScalarWhereWithAggregatesInput[]
    NOT?: TipoBebidaScalarWhereWithAggregatesInput | TipoBebidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoBebida"> | number
    nombre?: EnumTipoBebidaListWithAggregatesFilter<"TipoBebida"> | $Enums.TipoBebidaList
  }

  export type DetalleAdicionalTaperWhereInput = {
    AND?: DetalleAdicionalTaperWhereInput | DetalleAdicionalTaperWhereInput[]
    OR?: DetalleAdicionalTaperWhereInput[]
    NOT?: DetalleAdicionalTaperWhereInput | DetalleAdicionalTaperWhereInput[]
    id?: IntFilter<"DetalleAdicionalTaper"> | number
    taperId?: IntFilter<"DetalleAdicionalTaper"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalTaper"> | number
    Taper?: XOR<TaperScalarRelationFilter, TaperWhereInput>
    DetalleAdicional?: XOR<DetalleAdicionalScalarRelationFilter, DetalleAdicionalWhereInput>
  }

  export type DetalleAdicionalTaperOrderByWithRelationInput = {
    id?: SortOrder
    taperId?: SortOrder
    detalleAdicionalId?: SortOrder
    Taper?: TaperOrderByWithRelationInput
    DetalleAdicional?: DetalleAdicionalOrderByWithRelationInput
  }

  export type DetalleAdicionalTaperWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleAdicionalTaperWhereInput | DetalleAdicionalTaperWhereInput[]
    OR?: DetalleAdicionalTaperWhereInput[]
    NOT?: DetalleAdicionalTaperWhereInput | DetalleAdicionalTaperWhereInput[]
    taperId?: IntFilter<"DetalleAdicionalTaper"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalTaper"> | number
    Taper?: XOR<TaperScalarRelationFilter, TaperWhereInput>
    DetalleAdicional?: XOR<DetalleAdicionalScalarRelationFilter, DetalleAdicionalWhereInput>
  }, "id">

  export type DetalleAdicionalTaperOrderByWithAggregationInput = {
    id?: SortOrder
    taperId?: SortOrder
    detalleAdicionalId?: SortOrder
    _count?: DetalleAdicionalTaperCountOrderByAggregateInput
    _avg?: DetalleAdicionalTaperAvgOrderByAggregateInput
    _max?: DetalleAdicionalTaperMaxOrderByAggregateInput
    _min?: DetalleAdicionalTaperMinOrderByAggregateInput
    _sum?: DetalleAdicionalTaperSumOrderByAggregateInput
  }

  export type DetalleAdicionalTaperScalarWhereWithAggregatesInput = {
    AND?: DetalleAdicionalTaperScalarWhereWithAggregatesInput | DetalleAdicionalTaperScalarWhereWithAggregatesInput[]
    OR?: DetalleAdicionalTaperScalarWhereWithAggregatesInput[]
    NOT?: DetalleAdicionalTaperScalarWhereWithAggregatesInput | DetalleAdicionalTaperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleAdicionalTaper"> | number
    taperId?: IntWithAggregatesFilter<"DetalleAdicionalTaper"> | number
    detalleAdicionalId?: IntWithAggregatesFilter<"DetalleAdicionalTaper"> | number
  }

  export type TaperWhereInput = {
    AND?: TaperWhereInput | TaperWhereInput[]
    OR?: TaperWhereInput[]
    NOT?: TaperWhereInput | TaperWhereInput[]
    id?: IntFilter<"Taper"> | number
    presentacion?: EnumPresentacionTaperFilter<"Taper"> | $Enums.PresentacionTaper
    precio?: FloatFilter<"Taper"> | number
    DetalleAdicionalTaper?: DetalleAdicionalTaperListRelationFilter
  }

  export type TaperOrderByWithRelationInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
    DetalleAdicionalTaper?: DetalleAdicionalTaperOrderByRelationAggregateInput
  }

  export type TaperWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaperWhereInput | TaperWhereInput[]
    OR?: TaperWhereInput[]
    NOT?: TaperWhereInput | TaperWhereInput[]
    presentacion?: EnumPresentacionTaperFilter<"Taper"> | $Enums.PresentacionTaper
    precio?: FloatFilter<"Taper"> | number
    DetalleAdicionalTaper?: DetalleAdicionalTaperListRelationFilter
  }, "id">

  export type TaperOrderByWithAggregationInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
    _count?: TaperCountOrderByAggregateInput
    _avg?: TaperAvgOrderByAggregateInput
    _max?: TaperMaxOrderByAggregateInput
    _min?: TaperMinOrderByAggregateInput
    _sum?: TaperSumOrderByAggregateInput
  }

  export type TaperScalarWhereWithAggregatesInput = {
    AND?: TaperScalarWhereWithAggregatesInput | TaperScalarWhereWithAggregatesInput[]
    OR?: TaperScalarWhereWithAggregatesInput[]
    NOT?: TaperScalarWhereWithAggregatesInput | TaperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Taper"> | number
    presentacion?: EnumPresentacionTaperWithAggregatesFilter<"Taper"> | $Enums.PresentacionTaper
    precio?: FloatWithAggregatesFilter<"Taper"> | number
  }

  export type DetalleAdicionalEntradaWhereInput = {
    AND?: DetalleAdicionalEntradaWhereInput | DetalleAdicionalEntradaWhereInput[]
    OR?: DetalleAdicionalEntradaWhereInput[]
    NOT?: DetalleAdicionalEntradaWhereInput | DetalleAdicionalEntradaWhereInput[]
    id?: IntFilter<"DetalleAdicionalEntrada"> | number
    entradaId?: IntFilter<"DetalleAdicionalEntrada"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalEntrada"> | number
    Entrada?: XOR<EntradaScalarRelationFilter, EntradaWhereInput>
    DetalleAdicional?: XOR<DetalleAdicionalScalarRelationFilter, DetalleAdicionalWhereInput>
  }

  export type DetalleAdicionalEntradaOrderByWithRelationInput = {
    id?: SortOrder
    entradaId?: SortOrder
    detalleAdicionalId?: SortOrder
    Entrada?: EntradaOrderByWithRelationInput
    DetalleAdicional?: DetalleAdicionalOrderByWithRelationInput
  }

  export type DetalleAdicionalEntradaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleAdicionalEntradaWhereInput | DetalleAdicionalEntradaWhereInput[]
    OR?: DetalleAdicionalEntradaWhereInput[]
    NOT?: DetalleAdicionalEntradaWhereInput | DetalleAdicionalEntradaWhereInput[]
    entradaId?: IntFilter<"DetalleAdicionalEntrada"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalEntrada"> | number
    Entrada?: XOR<EntradaScalarRelationFilter, EntradaWhereInput>
    DetalleAdicional?: XOR<DetalleAdicionalScalarRelationFilter, DetalleAdicionalWhereInput>
  }, "id">

  export type DetalleAdicionalEntradaOrderByWithAggregationInput = {
    id?: SortOrder
    entradaId?: SortOrder
    detalleAdicionalId?: SortOrder
    _count?: DetalleAdicionalEntradaCountOrderByAggregateInput
    _avg?: DetalleAdicionalEntradaAvgOrderByAggregateInput
    _max?: DetalleAdicionalEntradaMaxOrderByAggregateInput
    _min?: DetalleAdicionalEntradaMinOrderByAggregateInput
    _sum?: DetalleAdicionalEntradaSumOrderByAggregateInput
  }

  export type DetalleAdicionalEntradaScalarWhereWithAggregatesInput = {
    AND?: DetalleAdicionalEntradaScalarWhereWithAggregatesInput | DetalleAdicionalEntradaScalarWhereWithAggregatesInput[]
    OR?: DetalleAdicionalEntradaScalarWhereWithAggregatesInput[]
    NOT?: DetalleAdicionalEntradaScalarWhereWithAggregatesInput | DetalleAdicionalEntradaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleAdicionalEntrada"> | number
    entradaId?: IntWithAggregatesFilter<"DetalleAdicionalEntrada"> | number
    detalleAdicionalId?: IntWithAggregatesFilter<"DetalleAdicionalEntrada"> | number
  }

  export type EntradaWhereInput = {
    AND?: EntradaWhereInput | EntradaWhereInput[]
    OR?: EntradaWhereInput[]
    NOT?: EntradaWhereInput | EntradaWhereInput[]
    id?: IntFilter<"Entrada"> | number
    precio?: FloatFilter<"Entrada"> | number
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaListRelationFilter
  }

  export type EntradaOrderByWithRelationInput = {
    id?: SortOrder
    precio?: SortOrder
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaOrderByRelationAggregateInput
  }

  export type EntradaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntradaWhereInput | EntradaWhereInput[]
    OR?: EntradaWhereInput[]
    NOT?: EntradaWhereInput | EntradaWhereInput[]
    precio?: FloatFilter<"Entrada"> | number
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaListRelationFilter
  }, "id">

  export type EntradaOrderByWithAggregationInput = {
    id?: SortOrder
    precio?: SortOrder
    _count?: EntradaCountOrderByAggregateInput
    _avg?: EntradaAvgOrderByAggregateInput
    _max?: EntradaMaxOrderByAggregateInput
    _min?: EntradaMinOrderByAggregateInput
    _sum?: EntradaSumOrderByAggregateInput
  }

  export type EntradaScalarWhereWithAggregatesInput = {
    AND?: EntradaScalarWhereWithAggregatesInput | EntradaScalarWhereWithAggregatesInput[]
    OR?: EntradaScalarWhereWithAggregatesInput[]
    NOT?: EntradaScalarWhereWithAggregatesInput | EntradaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entrada"> | number
    precio?: FloatWithAggregatesFilter<"Entrada"> | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    nome: string
    dni: string
    telefono: string
    email: string
    Pedido?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    dni: string
    telefono: string
    email: string
    Pedido?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Pedido?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Pedido?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    dni: string
    telefono: string
    email: string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MesaCreateInput = {
    numero: string
    capacidad: number
    estado?: $Enums.EstadoMesa
    Pedido?: PedidoCreateNestedManyWithoutMesaInput
  }

  export type MesaUncheckedCreateInput = {
    id?: number
    numero: string
    capacidad: number
    estado?: $Enums.EstadoMesa
    Pedido?: PedidoUncheckedCreateNestedManyWithoutMesaInput
  }

  export type MesaUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
    Pedido?: PedidoUpdateManyWithoutMesaNestedInput
  }

  export type MesaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
    Pedido?: PedidoUncheckedUpdateManyWithoutMesaNestedInput
  }

  export type MesaCreateManyInput = {
    id?: number
    numero: string
    capacidad: number
    estado?: $Enums.EstadoMesa
  }

  export type MesaUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
  }

  export type MesaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
  }

  export type CartaCreateInput = {
    nombre: string
    descripcion: string
    precio: string
    Plato?: PlatoCreateNestedManyWithoutCartaInput
  }

  export type CartaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: string
    Plato?: PlatoUncheckedCreateNestedManyWithoutCartaInput
  }

  export type CartaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: StringFieldUpdateOperationsInput | string
    Plato?: PlatoUpdateManyWithoutCartaNestedInput
  }

  export type CartaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: StringFieldUpdateOperationsInput | string
    Plato?: PlatoUncheckedUpdateManyWithoutCartaNestedInput
  }

  export type CartaCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: string
  }

  export type CartaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: StringFieldUpdateOperationsInput | string
  }

  export type CartaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: StringFieldUpdateOperationsInput | string
  }

  export type PlatoCreateInput = {
    nombre: string
    descripcion: string
    precio: number
    Carta: CartaCreateNestedOneWithoutPlatoInput
    PedidoItem?: PedidoItemCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    cartaId: number
    PedidoItem?: PedidoItemUncheckedCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    Carta?: CartaUpdateOneRequiredWithoutPlatoNestedInput
    PedidoItem?: PedidoItemUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    cartaId?: IntFieldUpdateOperationsInput | number
    PedidoItem?: PedidoItemUncheckedUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    cartaId: number
  }

  export type PlatoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type PlatoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    cartaId?: IntFieldUpdateOperationsInput | number
  }

  export type TipoPagoCreateInput = {
    nombre?: $Enums.MetodoPago
    Comprobante?: ComprobanteCreateNestedManyWithoutTipoPagoInput
  }

  export type TipoPagoUncheckedCreateInput = {
    id?: number
    nombre?: $Enums.MetodoPago
    Comprobante?: ComprobanteUncheckedCreateNestedManyWithoutTipoPagoInput
  }

  export type TipoPagoUpdateInput = {
    nombre?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    Comprobante?: ComprobanteUpdateManyWithoutTipoPagoNestedInput
  }

  export type TipoPagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    Comprobante?: ComprobanteUncheckedUpdateManyWithoutTipoPagoNestedInput
  }

  export type TipoPagoCreateManyInput = {
    id?: number
    nombre?: $Enums.MetodoPago
  }

  export type TipoPagoUpdateManyMutationInput = {
    nombre?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
  }

  export type TipoPagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
  }

  export type ComprobanteCreateInput = {
    tipoComprobante?: $Enums.TipoComprobante
    numero: number
    fechaEmision?: Date | string
    TipoPago: TipoPagoCreateNestedOneWithoutComprobanteInput
    Pedido?: PedidoCreateNestedManyWithoutComprobanteInput
  }

  export type ComprobanteUncheckedCreateInput = {
    id?: number
    tipoComprobante?: $Enums.TipoComprobante
    numero: number
    fechaEmision?: Date | string
    tipoPagoId: number
    Pedido?: PedidoUncheckedCreateNestedManyWithoutComprobanteInput
  }

  export type ComprobanteUpdateInput = {
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    TipoPago?: TipoPagoUpdateOneRequiredWithoutComprobanteNestedInput
    Pedido?: PedidoUpdateManyWithoutComprobanteNestedInput
  }

  export type ComprobanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoPagoId?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUncheckedUpdateManyWithoutComprobanteNestedInput
  }

  export type ComprobanteCreateManyInput = {
    id?: number
    tipoComprobante?: $Enums.TipoComprobante
    numero: number
    fechaEmision?: Date | string
    tipoPagoId: number
  }

  export type ComprobanteUpdateManyMutationInput = {
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoPagoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    fecha: Date | string
    total: number
    Cliente?: ClienteCreateNestedOneWithoutPedidoInput
    Mesa: MesaCreateNestedOneWithoutPedidoInput
    Comprobante: ComprobanteCreateNestedOneWithoutPedidoInput
    DetalleAdicional?: DetalleAdicionalCreateNestedOneWithoutPedidoInput
    PedidoItem?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    mesaId: number
    comprobanteId: number
    detalleAdicionalId?: number | null
    PedidoItem?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    Cliente?: ClienteUpdateOneWithoutPedidoNestedInput
    Mesa?: MesaUpdateOneRequiredWithoutPedidoNestedInput
    Comprobante?: ComprobanteUpdateOneRequiredWithoutPedidoNestedInput
    DetalleAdicional?: DetalleAdicionalUpdateOneWithoutPedidoNestedInput
    PedidoItem?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
    PedidoItem?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    mesaId: number
    comprobanteId: number
    detalleAdicionalId?: number | null
  }

  export type PedidoUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoItemCreateInput = {
    cantidad: number
    Pedido: PedidoCreateNestedOneWithoutPedidoItemInput
    Plato: PlatoCreateNestedOneWithoutPedidoItemInput
  }

  export type PedidoItemUncheckedCreateInput = {
    id?: number
    cantidad: number
    pedidoId: number
    platoId: number
  }

  export type PedidoItemUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUpdateOneRequiredWithoutPedidoItemNestedInput
    Plato?: PlatoUpdateOneRequiredWithoutPedidoItemNestedInput
  }

  export type PedidoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    platoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoItemCreateManyInput = {
    id?: number
    cantidad: number
    pedidoId: number
    platoId: number
  }

  export type PedidoItemUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    platoId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalCreateInput = {
    Pedido?: PedidoCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalUncheckedCreateInput = {
    id?: number
    Pedido?: PedidoUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalUpdateInput = {
    Pedido?: PedidoUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type DetalleAdicionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type DetalleAdicionalCreateManyInput = {
    id?: number
  }

  export type DetalleAdicionalUpdateManyMutationInput = {

  }

  export type DetalleAdicionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalBebidaCreateInput = {
    Bebida: BebidaCreateNestedOneWithoutDetalleAdicionalBebidaInput
    DetalleAdicional: DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalBebidaInput
  }

  export type DetalleAdicionalBebidaUncheckedCreateInput = {
    id?: number
    bebidaId: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalBebidaUpdateInput = {
    Bebida?: BebidaUpdateOneRequiredWithoutDetalleAdicionalBebidaNestedInput
    DetalleAdicional?: DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalBebidaNestedInput
  }

  export type DetalleAdicionalBebidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bebidaId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalBebidaCreateManyInput = {
    id?: number
    bebidaId: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalBebidaUpdateManyMutationInput = {

  }

  export type DetalleAdicionalBebidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bebidaId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type BebidaCreateInput = {
    presentacion?: $Enums.PresentacionBebida
    precio: number
    TipoBebida: TipoBebidaCreateNestedOneWithoutBebidaInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaCreateNestedManyWithoutBebidaInput
  }

  export type BebidaUncheckedCreateInput = {
    id?: number
    presentacion?: $Enums.PresentacionBebida
    precio: number
    tipoBebidaId: number
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedCreateNestedManyWithoutBebidaInput
  }

  export type BebidaUpdateInput = {
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
    TipoBebida?: TipoBebidaUpdateOneRequiredWithoutBebidaNestedInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUpdateManyWithoutBebidaNestedInput
  }

  export type BebidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
    tipoBebidaId?: IntFieldUpdateOperationsInput | number
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedUpdateManyWithoutBebidaNestedInput
  }

  export type BebidaCreateManyInput = {
    id?: number
    presentacion?: $Enums.PresentacionBebida
    precio: number
    tipoBebidaId: number
  }

  export type BebidaUpdateManyMutationInput = {
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type BebidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
    tipoBebidaId?: IntFieldUpdateOperationsInput | number
  }

  export type TipoBebidaCreateInput = {
    nombre: $Enums.TipoBebidaList
    Bebida?: BebidaCreateNestedManyWithoutTipoBebidaInput
  }

  export type TipoBebidaUncheckedCreateInput = {
    id?: number
    nombre: $Enums.TipoBebidaList
    Bebida?: BebidaUncheckedCreateNestedManyWithoutTipoBebidaInput
  }

  export type TipoBebidaUpdateInput = {
    nombre?: EnumTipoBebidaListFieldUpdateOperationsInput | $Enums.TipoBebidaList
    Bebida?: BebidaUpdateManyWithoutTipoBebidaNestedInput
  }

  export type TipoBebidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumTipoBebidaListFieldUpdateOperationsInput | $Enums.TipoBebidaList
    Bebida?: BebidaUncheckedUpdateManyWithoutTipoBebidaNestedInput
  }

  export type TipoBebidaCreateManyInput = {
    id?: number
    nombre: $Enums.TipoBebidaList
  }

  export type TipoBebidaUpdateManyMutationInput = {
    nombre?: EnumTipoBebidaListFieldUpdateOperationsInput | $Enums.TipoBebidaList
  }

  export type TipoBebidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumTipoBebidaListFieldUpdateOperationsInput | $Enums.TipoBebidaList
  }

  export type DetalleAdicionalTaperCreateInput = {
    Taper: TaperCreateNestedOneWithoutDetalleAdicionalTaperInput
    DetalleAdicional: DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalTaperInput
  }

  export type DetalleAdicionalTaperUncheckedCreateInput = {
    id?: number
    taperId: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalTaperUpdateInput = {
    Taper?: TaperUpdateOneRequiredWithoutDetalleAdicionalTaperNestedInput
    DetalleAdicional?: DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalTaperNestedInput
  }

  export type DetalleAdicionalTaperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taperId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalTaperCreateManyInput = {
    id?: number
    taperId: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalTaperUpdateManyMutationInput = {

  }

  export type DetalleAdicionalTaperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taperId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type TaperCreateInput = {
    presentacion?: $Enums.PresentacionTaper
    precio: number
    DetalleAdicionalTaper?: DetalleAdicionalTaperCreateNestedManyWithoutTaperInput
  }

  export type TaperUncheckedCreateInput = {
    id?: number
    presentacion?: $Enums.PresentacionTaper
    precio: number
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedCreateNestedManyWithoutTaperInput
  }

  export type TaperUpdateInput = {
    presentacion?: EnumPresentacionTaperFieldUpdateOperationsInput | $Enums.PresentacionTaper
    precio?: FloatFieldUpdateOperationsInput | number
    DetalleAdicionalTaper?: DetalleAdicionalTaperUpdateManyWithoutTaperNestedInput
  }

  export type TaperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    presentacion?: EnumPresentacionTaperFieldUpdateOperationsInput | $Enums.PresentacionTaper
    precio?: FloatFieldUpdateOperationsInput | number
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedUpdateManyWithoutTaperNestedInput
  }

  export type TaperCreateManyInput = {
    id?: number
    presentacion?: $Enums.PresentacionTaper
    precio: number
  }

  export type TaperUpdateManyMutationInput = {
    presentacion?: EnumPresentacionTaperFieldUpdateOperationsInput | $Enums.PresentacionTaper
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type TaperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    presentacion?: EnumPresentacionTaperFieldUpdateOperationsInput | $Enums.PresentacionTaper
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalEntradaCreateInput = {
    Entrada: EntradaCreateNestedOneWithoutDetalleAdicionalEntradaInput
    DetalleAdicional: DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalEntradaInput
  }

  export type DetalleAdicionalEntradaUncheckedCreateInput = {
    id?: number
    entradaId: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalEntradaUpdateInput = {
    Entrada?: EntradaUpdateOneRequiredWithoutDetalleAdicionalEntradaNestedInput
    DetalleAdicional?: DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalEntradaNestedInput
  }

  export type DetalleAdicionalEntradaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entradaId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalEntradaCreateManyInput = {
    id?: number
    entradaId: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalEntradaUpdateManyMutationInput = {

  }

  export type DetalleAdicionalEntradaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entradaId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type EntradaCreateInput = {
    precio: number
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaCreateNestedManyWithoutEntradaInput
  }

  export type EntradaUncheckedCreateInput = {
    id?: number
    precio: number
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedCreateNestedManyWithoutEntradaInput
  }

  export type EntradaUpdateInput = {
    precio?: FloatFieldUpdateOperationsInput | number
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUpdateManyWithoutEntradaNestedInput
  }

  export type EntradaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedUpdateManyWithoutEntradaNestedInput
  }

  export type EntradaCreateManyInput = {
    id?: number
    precio: number
  }

  export type EntradaUpdateManyMutationInput = {
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type EntradaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEstadoMesaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMesa | EnumEstadoMesaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMesa[]
    notIn?: $Enums.EstadoMesa[]
    not?: NestedEnumEstadoMesaFilter<$PrismaModel> | $Enums.EstadoMesa
  }

  export type MesaOrderByRelevanceInput = {
    fields: MesaOrderByRelevanceFieldEnum | MesaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MesaCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
  }

  export type MesaAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
  }

  export type MesaMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
  }

  export type MesaMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
  }

  export type MesaSumOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
  }

  export type EnumEstadoMesaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMesa | EnumEstadoMesaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMesa[]
    notIn?: $Enums.EstadoMesa[]
    not?: NestedEnumEstadoMesaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoMesa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoMesaFilter<$PrismaModel>
    _max?: NestedEnumEstadoMesaFilter<$PrismaModel>
  }

  export type PlatoListRelationFilter = {
    every?: PlatoWhereInput
    some?: PlatoWhereInput
    none?: PlatoWhereInput
  }

  export type PlatoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartaOrderByRelevanceInput = {
    fields: CartaOrderByRelevanceFieldEnum | CartaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CartaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type CartaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type CartaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type CartaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CartaScalarRelationFilter = {
    is?: CartaWhereInput
    isNot?: CartaWhereInput
  }

  export type PedidoItemListRelationFilter = {
    every?: PedidoItemWhereInput
    some?: PedidoItemWhereInput
    none?: PedidoItemWhereInput
  }

  export type PedidoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatoOrderByRelevanceInput = {
    fields: PlatoOrderByRelevanceFieldEnum | PlatoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlatoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    cartaId?: SortOrder
  }

  export type PlatoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    cartaId?: SortOrder
  }

  export type PlatoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    cartaId?: SortOrder
  }

  export type PlatoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    cartaId?: SortOrder
  }

  export type PlatoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    cartaId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMetodoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[]
    notIn?: $Enums.MetodoPago[]
    not?: NestedEnumMetodoPagoFilter<$PrismaModel> | $Enums.MetodoPago
  }

  export type ComprobanteListRelationFilter = {
    every?: ComprobanteWhereInput
    some?: ComprobanteWhereInput
    none?: ComprobanteWhereInput
  }

  export type ComprobanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoPagoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoPagoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoPagoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoPagoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoPagoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMetodoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[]
    notIn?: $Enums.MetodoPago[]
    not?: NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagoFilter<$PrismaModel>
  }

  export type EnumTipoComprobanteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoComprobante | EnumTipoComprobanteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoComprobante[]
    notIn?: $Enums.TipoComprobante[]
    not?: NestedEnumTipoComprobanteFilter<$PrismaModel> | $Enums.TipoComprobante
  }

  export type TipoPagoScalarRelationFilter = {
    is?: TipoPagoWhereInput
    isNot?: TipoPagoWhereInput
  }

  export type ComprobanteCountOrderByAggregateInput = {
    id?: SortOrder
    tipoComprobante?: SortOrder
    numero?: SortOrder
    fechaEmision?: SortOrder
    tipoPagoId?: SortOrder
  }

  export type ComprobanteAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    tipoPagoId?: SortOrder
  }

  export type ComprobanteMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoComprobante?: SortOrder
    numero?: SortOrder
    fechaEmision?: SortOrder
    tipoPagoId?: SortOrder
  }

  export type ComprobanteMinOrderByAggregateInput = {
    id?: SortOrder
    tipoComprobante?: SortOrder
    numero?: SortOrder
    fechaEmision?: SortOrder
    tipoPagoId?: SortOrder
  }

  export type ComprobanteSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    tipoPagoId?: SortOrder
  }

  export type EnumTipoComprobanteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoComprobante | EnumTipoComprobanteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoComprobante[]
    notIn?: $Enums.TipoComprobante[]
    not?: NestedEnumTipoComprobanteWithAggregatesFilter<$PrismaModel> | $Enums.TipoComprobante
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoComprobanteFilter<$PrismaModel>
    _max?: NestedEnumTipoComprobanteFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type MesaScalarRelationFilter = {
    is?: MesaWhereInput
    isNot?: MesaWhereInput
  }

  export type ComprobanteScalarRelationFilter = {
    is?: ComprobanteWhereInput
    isNot?: ComprobanteWhereInput
  }

  export type DetalleAdicionalNullableScalarRelationFilter = {
    is?: DetalleAdicionalWhereInput | null
    isNot?: DetalleAdicionalWhereInput | null
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    mesaId?: SortOrder
    comprobanteId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    mesaId?: SortOrder
    comprobanteId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    mesaId?: SortOrder
    comprobanteId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    mesaId?: SortOrder
    comprobanteId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    mesaId?: SortOrder
    comprobanteId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type PlatoScalarRelationFilter = {
    is?: PlatoWhereInput
    isNot?: PlatoWhereInput
  }

  export type PedidoItemCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    pedidoId?: SortOrder
    platoId?: SortOrder
  }

  export type PedidoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    pedidoId?: SortOrder
    platoId?: SortOrder
  }

  export type PedidoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    pedidoId?: SortOrder
    platoId?: SortOrder
  }

  export type PedidoItemMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    pedidoId?: SortOrder
    platoId?: SortOrder
  }

  export type PedidoItemSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    pedidoId?: SortOrder
    platoId?: SortOrder
  }

  export type DetalleAdicionalBebidaListRelationFilter = {
    every?: DetalleAdicionalBebidaWhereInput
    some?: DetalleAdicionalBebidaWhereInput
    none?: DetalleAdicionalBebidaWhereInput
  }

  export type DetalleAdicionalTaperListRelationFilter = {
    every?: DetalleAdicionalTaperWhereInput
    some?: DetalleAdicionalTaperWhereInput
    none?: DetalleAdicionalTaperWhereInput
  }

  export type DetalleAdicionalEntradaListRelationFilter = {
    every?: DetalleAdicionalEntradaWhereInput
    some?: DetalleAdicionalEntradaWhereInput
    none?: DetalleAdicionalEntradaWhereInput
  }

  export type DetalleAdicionalBebidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetalleAdicionalTaperOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetalleAdicionalEntradaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetalleAdicionalCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetalleAdicionalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetalleAdicionalMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetalleAdicionalMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetalleAdicionalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BebidaScalarRelationFilter = {
    is?: BebidaWhereInput
    isNot?: BebidaWhereInput
  }

  export type DetalleAdicionalScalarRelationFilter = {
    is?: DetalleAdicionalWhereInput
    isNot?: DetalleAdicionalWhereInput
  }

  export type DetalleAdicionalBebidaCountOrderByAggregateInput = {
    id?: SortOrder
    bebidaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalBebidaAvgOrderByAggregateInput = {
    id?: SortOrder
    bebidaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalBebidaMaxOrderByAggregateInput = {
    id?: SortOrder
    bebidaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalBebidaMinOrderByAggregateInput = {
    id?: SortOrder
    bebidaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalBebidaSumOrderByAggregateInput = {
    id?: SortOrder
    bebidaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type EnumPresentacionBebidaFilter<$PrismaModel = never> = {
    equals?: $Enums.PresentacionBebida | EnumPresentacionBebidaFieldRefInput<$PrismaModel>
    in?: $Enums.PresentacionBebida[]
    notIn?: $Enums.PresentacionBebida[]
    not?: NestedEnumPresentacionBebidaFilter<$PrismaModel> | $Enums.PresentacionBebida
  }

  export type TipoBebidaScalarRelationFilter = {
    is?: TipoBebidaWhereInput
    isNot?: TipoBebidaWhereInput
  }

  export type BebidaPresentacionTipoBebidaIdCompoundUniqueInput = {
    presentacion: $Enums.PresentacionBebida
    tipoBebidaId: number
  }

  export type BebidaCountOrderByAggregateInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
    tipoBebidaId?: SortOrder
  }

  export type BebidaAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    tipoBebidaId?: SortOrder
  }

  export type BebidaMaxOrderByAggregateInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
    tipoBebidaId?: SortOrder
  }

  export type BebidaMinOrderByAggregateInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
    tipoBebidaId?: SortOrder
  }

  export type BebidaSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    tipoBebidaId?: SortOrder
  }

  export type EnumPresentacionBebidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresentacionBebida | EnumPresentacionBebidaFieldRefInput<$PrismaModel>
    in?: $Enums.PresentacionBebida[]
    notIn?: $Enums.PresentacionBebida[]
    not?: NestedEnumPresentacionBebidaWithAggregatesFilter<$PrismaModel> | $Enums.PresentacionBebida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresentacionBebidaFilter<$PrismaModel>
    _max?: NestedEnumPresentacionBebidaFilter<$PrismaModel>
  }

  export type EnumTipoBebidaListFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoBebidaList | EnumTipoBebidaListFieldRefInput<$PrismaModel>
    in?: $Enums.TipoBebidaList[]
    notIn?: $Enums.TipoBebidaList[]
    not?: NestedEnumTipoBebidaListFilter<$PrismaModel> | $Enums.TipoBebidaList
  }

  export type BebidaListRelationFilter = {
    every?: BebidaWhereInput
    some?: BebidaWhereInput
    none?: BebidaWhereInput
  }

  export type BebidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoBebidaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoBebidaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoBebidaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoBebidaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoBebidaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoBebidaListWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoBebidaList | EnumTipoBebidaListFieldRefInput<$PrismaModel>
    in?: $Enums.TipoBebidaList[]
    notIn?: $Enums.TipoBebidaList[]
    not?: NestedEnumTipoBebidaListWithAggregatesFilter<$PrismaModel> | $Enums.TipoBebidaList
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoBebidaListFilter<$PrismaModel>
    _max?: NestedEnumTipoBebidaListFilter<$PrismaModel>
  }

  export type TaperScalarRelationFilter = {
    is?: TaperWhereInput
    isNot?: TaperWhereInput
  }

  export type DetalleAdicionalTaperCountOrderByAggregateInput = {
    id?: SortOrder
    taperId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalTaperAvgOrderByAggregateInput = {
    id?: SortOrder
    taperId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalTaperMaxOrderByAggregateInput = {
    id?: SortOrder
    taperId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalTaperMinOrderByAggregateInput = {
    id?: SortOrder
    taperId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalTaperSumOrderByAggregateInput = {
    id?: SortOrder
    taperId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type EnumPresentacionTaperFilter<$PrismaModel = never> = {
    equals?: $Enums.PresentacionTaper | EnumPresentacionTaperFieldRefInput<$PrismaModel>
    in?: $Enums.PresentacionTaper[]
    notIn?: $Enums.PresentacionTaper[]
    not?: NestedEnumPresentacionTaperFilter<$PrismaModel> | $Enums.PresentacionTaper
  }

  export type TaperCountOrderByAggregateInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
  }

  export type TaperAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type TaperMaxOrderByAggregateInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
  }

  export type TaperMinOrderByAggregateInput = {
    id?: SortOrder
    presentacion?: SortOrder
    precio?: SortOrder
  }

  export type TaperSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type EnumPresentacionTaperWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresentacionTaper | EnumPresentacionTaperFieldRefInput<$PrismaModel>
    in?: $Enums.PresentacionTaper[]
    notIn?: $Enums.PresentacionTaper[]
    not?: NestedEnumPresentacionTaperWithAggregatesFilter<$PrismaModel> | $Enums.PresentacionTaper
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresentacionTaperFilter<$PrismaModel>
    _max?: NestedEnumPresentacionTaperFilter<$PrismaModel>
  }

  export type EntradaScalarRelationFilter = {
    is?: EntradaWhereInput
    isNot?: EntradaWhereInput
  }

  export type DetalleAdicionalEntradaCountOrderByAggregateInput = {
    id?: SortOrder
    entradaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalEntradaAvgOrderByAggregateInput = {
    id?: SortOrder
    entradaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalEntradaMaxOrderByAggregateInput = {
    id?: SortOrder
    entradaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalEntradaMinOrderByAggregateInput = {
    id?: SortOrder
    entradaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type DetalleAdicionalEntradaSumOrderByAggregateInput = {
    id?: SortOrder
    entradaId?: SortOrder
    detalleAdicionalId?: SortOrder
  }

  export type EntradaCountOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type EntradaAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type EntradaMaxOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type EntradaMinOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type EntradaSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoCreateNestedManyWithoutMesaInput = {
    create?: XOR<PedidoCreateWithoutMesaInput, PedidoUncheckedCreateWithoutMesaInput> | PedidoCreateWithoutMesaInput[] | PedidoUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutMesaInput | PedidoCreateOrConnectWithoutMesaInput[]
    createMany?: PedidoCreateManyMesaInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutMesaInput = {
    create?: XOR<PedidoCreateWithoutMesaInput, PedidoUncheckedCreateWithoutMesaInput> | PedidoCreateWithoutMesaInput[] | PedidoUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutMesaInput | PedidoCreateOrConnectWithoutMesaInput[]
    createMany?: PedidoCreateManyMesaInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type EnumEstadoMesaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoMesa
  }

  export type PedidoUpdateManyWithoutMesaNestedInput = {
    create?: XOR<PedidoCreateWithoutMesaInput, PedidoUncheckedCreateWithoutMesaInput> | PedidoCreateWithoutMesaInput[] | PedidoUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutMesaInput | PedidoCreateOrConnectWithoutMesaInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutMesaInput | PedidoUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: PedidoCreateManyMesaInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutMesaInput | PedidoUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutMesaInput | PedidoUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutMesaNestedInput = {
    create?: XOR<PedidoCreateWithoutMesaInput, PedidoUncheckedCreateWithoutMesaInput> | PedidoCreateWithoutMesaInput[] | PedidoUncheckedCreateWithoutMesaInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutMesaInput | PedidoCreateOrConnectWithoutMesaInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutMesaInput | PedidoUpsertWithWhereUniqueWithoutMesaInput[]
    createMany?: PedidoCreateManyMesaInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutMesaInput | PedidoUpdateWithWhereUniqueWithoutMesaInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutMesaInput | PedidoUpdateManyWithWhereWithoutMesaInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PlatoCreateNestedManyWithoutCartaInput = {
    create?: XOR<PlatoCreateWithoutCartaInput, PlatoUncheckedCreateWithoutCartaInput> | PlatoCreateWithoutCartaInput[] | PlatoUncheckedCreateWithoutCartaInput[]
    connectOrCreate?: PlatoCreateOrConnectWithoutCartaInput | PlatoCreateOrConnectWithoutCartaInput[]
    createMany?: PlatoCreateManyCartaInputEnvelope
    connect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
  }

  export type PlatoUncheckedCreateNestedManyWithoutCartaInput = {
    create?: XOR<PlatoCreateWithoutCartaInput, PlatoUncheckedCreateWithoutCartaInput> | PlatoCreateWithoutCartaInput[] | PlatoUncheckedCreateWithoutCartaInput[]
    connectOrCreate?: PlatoCreateOrConnectWithoutCartaInput | PlatoCreateOrConnectWithoutCartaInput[]
    createMany?: PlatoCreateManyCartaInputEnvelope
    connect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
  }

  export type PlatoUpdateManyWithoutCartaNestedInput = {
    create?: XOR<PlatoCreateWithoutCartaInput, PlatoUncheckedCreateWithoutCartaInput> | PlatoCreateWithoutCartaInput[] | PlatoUncheckedCreateWithoutCartaInput[]
    connectOrCreate?: PlatoCreateOrConnectWithoutCartaInput | PlatoCreateOrConnectWithoutCartaInput[]
    upsert?: PlatoUpsertWithWhereUniqueWithoutCartaInput | PlatoUpsertWithWhereUniqueWithoutCartaInput[]
    createMany?: PlatoCreateManyCartaInputEnvelope
    set?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    disconnect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    delete?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    connect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    update?: PlatoUpdateWithWhereUniqueWithoutCartaInput | PlatoUpdateWithWhereUniqueWithoutCartaInput[]
    updateMany?: PlatoUpdateManyWithWhereWithoutCartaInput | PlatoUpdateManyWithWhereWithoutCartaInput[]
    deleteMany?: PlatoScalarWhereInput | PlatoScalarWhereInput[]
  }

  export type PlatoUncheckedUpdateManyWithoutCartaNestedInput = {
    create?: XOR<PlatoCreateWithoutCartaInput, PlatoUncheckedCreateWithoutCartaInput> | PlatoCreateWithoutCartaInput[] | PlatoUncheckedCreateWithoutCartaInput[]
    connectOrCreate?: PlatoCreateOrConnectWithoutCartaInput | PlatoCreateOrConnectWithoutCartaInput[]
    upsert?: PlatoUpsertWithWhereUniqueWithoutCartaInput | PlatoUpsertWithWhereUniqueWithoutCartaInput[]
    createMany?: PlatoCreateManyCartaInputEnvelope
    set?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    disconnect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    delete?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    connect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    update?: PlatoUpdateWithWhereUniqueWithoutCartaInput | PlatoUpdateWithWhereUniqueWithoutCartaInput[]
    updateMany?: PlatoUpdateManyWithWhereWithoutCartaInput | PlatoUpdateManyWithWhereWithoutCartaInput[]
    deleteMany?: PlatoScalarWhereInput | PlatoScalarWhereInput[]
  }

  export type CartaCreateNestedOneWithoutPlatoInput = {
    create?: XOR<CartaCreateWithoutPlatoInput, CartaUncheckedCreateWithoutPlatoInput>
    connectOrCreate?: CartaCreateOrConnectWithoutPlatoInput
    connect?: CartaWhereUniqueInput
  }

  export type PedidoItemCreateNestedManyWithoutPlatoInput = {
    create?: XOR<PedidoItemCreateWithoutPlatoInput, PedidoItemUncheckedCreateWithoutPlatoInput> | PedidoItemCreateWithoutPlatoInput[] | PedidoItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPlatoInput | PedidoItemCreateOrConnectWithoutPlatoInput[]
    createMany?: PedidoItemCreateManyPlatoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type PedidoItemUncheckedCreateNestedManyWithoutPlatoInput = {
    create?: XOR<PedidoItemCreateWithoutPlatoInput, PedidoItemUncheckedCreateWithoutPlatoInput> | PedidoItemCreateWithoutPlatoInput[] | PedidoItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPlatoInput | PedidoItemCreateOrConnectWithoutPlatoInput[]
    createMany?: PedidoItemCreateManyPlatoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartaUpdateOneRequiredWithoutPlatoNestedInput = {
    create?: XOR<CartaCreateWithoutPlatoInput, CartaUncheckedCreateWithoutPlatoInput>
    connectOrCreate?: CartaCreateOrConnectWithoutPlatoInput
    upsert?: CartaUpsertWithoutPlatoInput
    connect?: CartaWhereUniqueInput
    update?: XOR<XOR<CartaUpdateToOneWithWhereWithoutPlatoInput, CartaUpdateWithoutPlatoInput>, CartaUncheckedUpdateWithoutPlatoInput>
  }

  export type PedidoItemUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutPlatoInput, PedidoItemUncheckedCreateWithoutPlatoInput> | PedidoItemCreateWithoutPlatoInput[] | PedidoItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPlatoInput | PedidoItemCreateOrConnectWithoutPlatoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutPlatoInput | PedidoItemUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: PedidoItemCreateManyPlatoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutPlatoInput | PedidoItemUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutPlatoInput | PedidoItemUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type PedidoItemUncheckedUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutPlatoInput, PedidoItemUncheckedCreateWithoutPlatoInput> | PedidoItemCreateWithoutPlatoInput[] | PedidoItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPlatoInput | PedidoItemCreateOrConnectWithoutPlatoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutPlatoInput | PedidoItemUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: PedidoItemCreateManyPlatoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutPlatoInput | PedidoItemUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutPlatoInput | PedidoItemUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type ComprobanteCreateNestedManyWithoutTipoPagoInput = {
    create?: XOR<ComprobanteCreateWithoutTipoPagoInput, ComprobanteUncheckedCreateWithoutTipoPagoInput> | ComprobanteCreateWithoutTipoPagoInput[] | ComprobanteUncheckedCreateWithoutTipoPagoInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutTipoPagoInput | ComprobanteCreateOrConnectWithoutTipoPagoInput[]
    createMany?: ComprobanteCreateManyTipoPagoInputEnvelope
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
  }

  export type ComprobanteUncheckedCreateNestedManyWithoutTipoPagoInput = {
    create?: XOR<ComprobanteCreateWithoutTipoPagoInput, ComprobanteUncheckedCreateWithoutTipoPagoInput> | ComprobanteCreateWithoutTipoPagoInput[] | ComprobanteUncheckedCreateWithoutTipoPagoInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutTipoPagoInput | ComprobanteCreateOrConnectWithoutTipoPagoInput[]
    createMany?: ComprobanteCreateManyTipoPagoInputEnvelope
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
  }

  export type EnumMetodoPagoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPago
  }

  export type ComprobanteUpdateManyWithoutTipoPagoNestedInput = {
    create?: XOR<ComprobanteCreateWithoutTipoPagoInput, ComprobanteUncheckedCreateWithoutTipoPagoInput> | ComprobanteCreateWithoutTipoPagoInput[] | ComprobanteUncheckedCreateWithoutTipoPagoInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutTipoPagoInput | ComprobanteCreateOrConnectWithoutTipoPagoInput[]
    upsert?: ComprobanteUpsertWithWhereUniqueWithoutTipoPagoInput | ComprobanteUpsertWithWhereUniqueWithoutTipoPagoInput[]
    createMany?: ComprobanteCreateManyTipoPagoInputEnvelope
    set?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    disconnect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    delete?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    update?: ComprobanteUpdateWithWhereUniqueWithoutTipoPagoInput | ComprobanteUpdateWithWhereUniqueWithoutTipoPagoInput[]
    updateMany?: ComprobanteUpdateManyWithWhereWithoutTipoPagoInput | ComprobanteUpdateManyWithWhereWithoutTipoPagoInput[]
    deleteMany?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
  }

  export type ComprobanteUncheckedUpdateManyWithoutTipoPagoNestedInput = {
    create?: XOR<ComprobanteCreateWithoutTipoPagoInput, ComprobanteUncheckedCreateWithoutTipoPagoInput> | ComprobanteCreateWithoutTipoPagoInput[] | ComprobanteUncheckedCreateWithoutTipoPagoInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutTipoPagoInput | ComprobanteCreateOrConnectWithoutTipoPagoInput[]
    upsert?: ComprobanteUpsertWithWhereUniqueWithoutTipoPagoInput | ComprobanteUpsertWithWhereUniqueWithoutTipoPagoInput[]
    createMany?: ComprobanteCreateManyTipoPagoInputEnvelope
    set?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    disconnect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    delete?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    update?: ComprobanteUpdateWithWhereUniqueWithoutTipoPagoInput | ComprobanteUpdateWithWhereUniqueWithoutTipoPagoInput[]
    updateMany?: ComprobanteUpdateManyWithWhereWithoutTipoPagoInput | ComprobanteUpdateManyWithWhereWithoutTipoPagoInput[]
    deleteMany?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
  }

  export type TipoPagoCreateNestedOneWithoutComprobanteInput = {
    create?: XOR<TipoPagoCreateWithoutComprobanteInput, TipoPagoUncheckedCreateWithoutComprobanteInput>
    connectOrCreate?: TipoPagoCreateOrConnectWithoutComprobanteInput
    connect?: TipoPagoWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutComprobanteInput = {
    create?: XOR<PedidoCreateWithoutComprobanteInput, PedidoUncheckedCreateWithoutComprobanteInput> | PedidoCreateWithoutComprobanteInput[] | PedidoUncheckedCreateWithoutComprobanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutComprobanteInput | PedidoCreateOrConnectWithoutComprobanteInput[]
    createMany?: PedidoCreateManyComprobanteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutComprobanteInput = {
    create?: XOR<PedidoCreateWithoutComprobanteInput, PedidoUncheckedCreateWithoutComprobanteInput> | PedidoCreateWithoutComprobanteInput[] | PedidoUncheckedCreateWithoutComprobanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutComprobanteInput | PedidoCreateOrConnectWithoutComprobanteInput[]
    createMany?: PedidoCreateManyComprobanteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type EnumTipoComprobanteFieldUpdateOperationsInput = {
    set?: $Enums.TipoComprobante
  }

  export type TipoPagoUpdateOneRequiredWithoutComprobanteNestedInput = {
    create?: XOR<TipoPagoCreateWithoutComprobanteInput, TipoPagoUncheckedCreateWithoutComprobanteInput>
    connectOrCreate?: TipoPagoCreateOrConnectWithoutComprobanteInput
    upsert?: TipoPagoUpsertWithoutComprobanteInput
    connect?: TipoPagoWhereUniqueInput
    update?: XOR<XOR<TipoPagoUpdateToOneWithWhereWithoutComprobanteInput, TipoPagoUpdateWithoutComprobanteInput>, TipoPagoUncheckedUpdateWithoutComprobanteInput>
  }

  export type PedidoUpdateManyWithoutComprobanteNestedInput = {
    create?: XOR<PedidoCreateWithoutComprobanteInput, PedidoUncheckedCreateWithoutComprobanteInput> | PedidoCreateWithoutComprobanteInput[] | PedidoUncheckedCreateWithoutComprobanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutComprobanteInput | PedidoCreateOrConnectWithoutComprobanteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutComprobanteInput | PedidoUpsertWithWhereUniqueWithoutComprobanteInput[]
    createMany?: PedidoCreateManyComprobanteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutComprobanteInput | PedidoUpdateWithWhereUniqueWithoutComprobanteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutComprobanteInput | PedidoUpdateManyWithWhereWithoutComprobanteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutComprobanteNestedInput = {
    create?: XOR<PedidoCreateWithoutComprobanteInput, PedidoUncheckedCreateWithoutComprobanteInput> | PedidoCreateWithoutComprobanteInput[] | PedidoUncheckedCreateWithoutComprobanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutComprobanteInput | PedidoCreateOrConnectWithoutComprobanteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutComprobanteInput | PedidoUpsertWithWhereUniqueWithoutComprobanteInput[]
    createMany?: PedidoCreateManyComprobanteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutComprobanteInput | PedidoUpdateWithWhereUniqueWithoutComprobanteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutComprobanteInput | PedidoUpdateManyWithWhereWithoutComprobanteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidoInput
    connect?: ClienteWhereUniqueInput
  }

  export type MesaCreateNestedOneWithoutPedidoInput = {
    create?: XOR<MesaCreateWithoutPedidoInput, MesaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: MesaCreateOrConnectWithoutPedidoInput
    connect?: MesaWhereUniqueInput
  }

  export type ComprobanteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ComprobanteCreateOrConnectWithoutPedidoInput
    connect?: ComprobanteWhereUniqueInput
  }

  export type DetalleAdicionalCreateNestedOneWithoutPedidoInput = {
    create?: XOR<DetalleAdicionalCreateWithoutPedidoInput, DetalleAdicionalUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: DetalleAdicionalCreateOrConnectWithoutPedidoInput
    connect?: DetalleAdicionalWhereUniqueInput
  }

  export type PedidoItemCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type PedidoItemUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type ClienteUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidoInput
    upsert?: ClienteUpsertWithoutPedidoInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidoInput, ClienteUpdateWithoutPedidoInput>, ClienteUncheckedUpdateWithoutPedidoInput>
  }

  export type MesaUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<MesaCreateWithoutPedidoInput, MesaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: MesaCreateOrConnectWithoutPedidoInput
    upsert?: MesaUpsertWithoutPedidoInput
    connect?: MesaWhereUniqueInput
    update?: XOR<XOR<MesaUpdateToOneWithWhereWithoutPedidoInput, MesaUpdateWithoutPedidoInput>, MesaUncheckedUpdateWithoutPedidoInput>
  }

  export type ComprobanteUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ComprobanteCreateOrConnectWithoutPedidoInput
    upsert?: ComprobanteUpsertWithoutPedidoInput
    connect?: ComprobanteWhereUniqueInput
    update?: XOR<XOR<ComprobanteUpdateToOneWithWhereWithoutPedidoInput, ComprobanteUpdateWithoutPedidoInput>, ComprobanteUncheckedUpdateWithoutPedidoInput>
  }

  export type DetalleAdicionalUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<DetalleAdicionalCreateWithoutPedidoInput, DetalleAdicionalUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: DetalleAdicionalCreateOrConnectWithoutPedidoInput
    upsert?: DetalleAdicionalUpsertWithoutPedidoInput
    disconnect?: DetalleAdicionalWhereInput | boolean
    delete?: DetalleAdicionalWhereInput | boolean
    connect?: DetalleAdicionalWhereUniqueInput
    update?: XOR<XOR<DetalleAdicionalUpdateToOneWithWhereWithoutPedidoInput, DetalleAdicionalUpdateWithoutPedidoInput>, DetalleAdicionalUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoItemUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutPedidoInput | PedidoItemUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutPedidoInput | PedidoItemUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutPedidoInput | PedidoItemUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutPedidoInput | PedidoItemUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutPedidoInput | PedidoItemUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutPedidoInput | PedidoItemUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutPedidoItemInput = {
    create?: XOR<PedidoCreateWithoutPedidoItemInput, PedidoUncheckedCreateWithoutPedidoItemInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPedidoItemInput
    connect?: PedidoWhereUniqueInput
  }

  export type PlatoCreateNestedOneWithoutPedidoItemInput = {
    create?: XOR<PlatoCreateWithoutPedidoItemInput, PlatoUncheckedCreateWithoutPedidoItemInput>
    connectOrCreate?: PlatoCreateOrConnectWithoutPedidoItemInput
    connect?: PlatoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutPedidoItemNestedInput = {
    create?: XOR<PedidoCreateWithoutPedidoItemInput, PedidoUncheckedCreateWithoutPedidoItemInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPedidoItemInput
    upsert?: PedidoUpsertWithoutPedidoItemInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPedidoItemInput, PedidoUpdateWithoutPedidoItemInput>, PedidoUncheckedUpdateWithoutPedidoItemInput>
  }

  export type PlatoUpdateOneRequiredWithoutPedidoItemNestedInput = {
    create?: XOR<PlatoCreateWithoutPedidoItemInput, PlatoUncheckedCreateWithoutPedidoItemInput>
    connectOrCreate?: PlatoCreateOrConnectWithoutPedidoItemInput
    upsert?: PlatoUpsertWithoutPedidoItemInput
    connect?: PlatoWhereUniqueInput
    update?: XOR<XOR<PlatoUpdateToOneWithWhereWithoutPedidoItemInput, PlatoUpdateWithoutPedidoItemInput>, PlatoUncheckedUpdateWithoutPedidoItemInput>
  }

  export type PedidoCreateNestedManyWithoutDetalleAdicionalInput = {
    create?: XOR<PedidoCreateWithoutDetalleAdicionalInput, PedidoUncheckedCreateWithoutDetalleAdicionalInput> | PedidoCreateWithoutDetalleAdicionalInput[] | PedidoUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDetalleAdicionalInput | PedidoCreateOrConnectWithoutDetalleAdicionalInput[]
    createMany?: PedidoCreateManyDetalleAdicionalInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type DetalleAdicionalBebidaCreateNestedManyWithoutDetalleAdicionalInput = {
    create?: XOR<DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput, DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalBebidaCreateManyDetalleAdicionalInputEnvelope
    connect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
  }

  export type DetalleAdicionalTaperCreateNestedManyWithoutDetalleAdicionalInput = {
    create?: XOR<DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput, DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalTaperCreateManyDetalleAdicionalInputEnvelope
    connect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
  }

  export type DetalleAdicionalEntradaCreateNestedManyWithoutDetalleAdicionalInput = {
    create?: XOR<DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput, DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalEntradaCreateManyDetalleAdicionalInputEnvelope
    connect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutDetalleAdicionalInput = {
    create?: XOR<PedidoCreateWithoutDetalleAdicionalInput, PedidoUncheckedCreateWithoutDetalleAdicionalInput> | PedidoCreateWithoutDetalleAdicionalInput[] | PedidoUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDetalleAdicionalInput | PedidoCreateOrConnectWithoutDetalleAdicionalInput[]
    createMany?: PedidoCreateManyDetalleAdicionalInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type DetalleAdicionalBebidaUncheckedCreateNestedManyWithoutDetalleAdicionalInput = {
    create?: XOR<DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput, DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalBebidaCreateManyDetalleAdicionalInputEnvelope
    connect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
  }

  export type DetalleAdicionalTaperUncheckedCreateNestedManyWithoutDetalleAdicionalInput = {
    create?: XOR<DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput, DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalTaperCreateManyDetalleAdicionalInputEnvelope
    connect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
  }

  export type DetalleAdicionalEntradaUncheckedCreateNestedManyWithoutDetalleAdicionalInput = {
    create?: XOR<DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput, DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalEntradaCreateManyDetalleAdicionalInputEnvelope
    connect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutDetalleAdicionalNestedInput = {
    create?: XOR<PedidoCreateWithoutDetalleAdicionalInput, PedidoUncheckedCreateWithoutDetalleAdicionalInput> | PedidoCreateWithoutDetalleAdicionalInput[] | PedidoUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDetalleAdicionalInput | PedidoCreateOrConnectWithoutDetalleAdicionalInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutDetalleAdicionalInput | PedidoUpsertWithWhereUniqueWithoutDetalleAdicionalInput[]
    createMany?: PedidoCreateManyDetalleAdicionalInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutDetalleAdicionalInput | PedidoUpdateWithWhereUniqueWithoutDetalleAdicionalInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutDetalleAdicionalInput | PedidoUpdateManyWithWhereWithoutDetalleAdicionalInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type DetalleAdicionalBebidaUpdateManyWithoutDetalleAdicionalNestedInput = {
    create?: XOR<DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput, DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput[]
    upsert?: DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalBebidaCreateManyDetalleAdicionalInputEnvelope
    set?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    disconnect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    delete?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    connect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    update?: DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutDetalleAdicionalInput[]
    updateMany?: DetalleAdicionalBebidaUpdateManyWithWhereWithoutDetalleAdicionalInput | DetalleAdicionalBebidaUpdateManyWithWhereWithoutDetalleAdicionalInput[]
    deleteMany?: DetalleAdicionalBebidaScalarWhereInput | DetalleAdicionalBebidaScalarWhereInput[]
  }

  export type DetalleAdicionalTaperUpdateManyWithoutDetalleAdicionalNestedInput = {
    create?: XOR<DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput, DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput[]
    upsert?: DetalleAdicionalTaperUpsertWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalTaperUpsertWithWhereUniqueWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalTaperCreateManyDetalleAdicionalInputEnvelope
    set?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    disconnect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    delete?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    connect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    update?: DetalleAdicionalTaperUpdateWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalTaperUpdateWithWhereUniqueWithoutDetalleAdicionalInput[]
    updateMany?: DetalleAdicionalTaperUpdateManyWithWhereWithoutDetalleAdicionalInput | DetalleAdicionalTaperUpdateManyWithWhereWithoutDetalleAdicionalInput[]
    deleteMany?: DetalleAdicionalTaperScalarWhereInput | DetalleAdicionalTaperScalarWhereInput[]
  }

  export type DetalleAdicionalEntradaUpdateManyWithoutDetalleAdicionalNestedInput = {
    create?: XOR<DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput, DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput[]
    upsert?: DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalEntradaCreateManyDetalleAdicionalInputEnvelope
    set?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    disconnect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    delete?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    connect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    update?: DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutDetalleAdicionalInput[]
    updateMany?: DetalleAdicionalEntradaUpdateManyWithWhereWithoutDetalleAdicionalInput | DetalleAdicionalEntradaUpdateManyWithWhereWithoutDetalleAdicionalInput[]
    deleteMany?: DetalleAdicionalEntradaScalarWhereInput | DetalleAdicionalEntradaScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutDetalleAdicionalNestedInput = {
    create?: XOR<PedidoCreateWithoutDetalleAdicionalInput, PedidoUncheckedCreateWithoutDetalleAdicionalInput> | PedidoCreateWithoutDetalleAdicionalInput[] | PedidoUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDetalleAdicionalInput | PedidoCreateOrConnectWithoutDetalleAdicionalInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutDetalleAdicionalInput | PedidoUpsertWithWhereUniqueWithoutDetalleAdicionalInput[]
    createMany?: PedidoCreateManyDetalleAdicionalInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutDetalleAdicionalInput | PedidoUpdateWithWhereUniqueWithoutDetalleAdicionalInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutDetalleAdicionalInput | PedidoUpdateManyWithWhereWithoutDetalleAdicionalInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type DetalleAdicionalBebidaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput = {
    create?: XOR<DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput, DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput[]
    upsert?: DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalBebidaCreateManyDetalleAdicionalInputEnvelope
    set?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    disconnect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    delete?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    connect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    update?: DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutDetalleAdicionalInput[]
    updateMany?: DetalleAdicionalBebidaUpdateManyWithWhereWithoutDetalleAdicionalInput | DetalleAdicionalBebidaUpdateManyWithWhereWithoutDetalleAdicionalInput[]
    deleteMany?: DetalleAdicionalBebidaScalarWhereInput | DetalleAdicionalBebidaScalarWhereInput[]
  }

  export type DetalleAdicionalTaperUncheckedUpdateManyWithoutDetalleAdicionalNestedInput = {
    create?: XOR<DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput, DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput[]
    upsert?: DetalleAdicionalTaperUpsertWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalTaperUpsertWithWhereUniqueWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalTaperCreateManyDetalleAdicionalInputEnvelope
    set?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    disconnect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    delete?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    connect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    update?: DetalleAdicionalTaperUpdateWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalTaperUpdateWithWhereUniqueWithoutDetalleAdicionalInput[]
    updateMany?: DetalleAdicionalTaperUpdateManyWithWhereWithoutDetalleAdicionalInput | DetalleAdicionalTaperUpdateManyWithWhereWithoutDetalleAdicionalInput[]
    deleteMany?: DetalleAdicionalTaperScalarWhereInput | DetalleAdicionalTaperScalarWhereInput[]
  }

  export type DetalleAdicionalEntradaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput = {
    create?: XOR<DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput, DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput> | DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput[] | DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput[]
    connectOrCreate?: DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput | DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput[]
    upsert?: DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutDetalleAdicionalInput[]
    createMany?: DetalleAdicionalEntradaCreateManyDetalleAdicionalInputEnvelope
    set?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    disconnect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    delete?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    connect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    update?: DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutDetalleAdicionalInput | DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutDetalleAdicionalInput[]
    updateMany?: DetalleAdicionalEntradaUpdateManyWithWhereWithoutDetalleAdicionalInput | DetalleAdicionalEntradaUpdateManyWithWhereWithoutDetalleAdicionalInput[]
    deleteMany?: DetalleAdicionalEntradaScalarWhereInput | DetalleAdicionalEntradaScalarWhereInput[]
  }

  export type BebidaCreateNestedOneWithoutDetalleAdicionalBebidaInput = {
    create?: XOR<BebidaCreateWithoutDetalleAdicionalBebidaInput, BebidaUncheckedCreateWithoutDetalleAdicionalBebidaInput>
    connectOrCreate?: BebidaCreateOrConnectWithoutDetalleAdicionalBebidaInput
    connect?: BebidaWhereUniqueInput
  }

  export type DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalBebidaInput = {
    create?: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalBebidaInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalBebidaInput>
    connectOrCreate?: DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalBebidaInput
    connect?: DetalleAdicionalWhereUniqueInput
  }

  export type BebidaUpdateOneRequiredWithoutDetalleAdicionalBebidaNestedInput = {
    create?: XOR<BebidaCreateWithoutDetalleAdicionalBebidaInput, BebidaUncheckedCreateWithoutDetalleAdicionalBebidaInput>
    connectOrCreate?: BebidaCreateOrConnectWithoutDetalleAdicionalBebidaInput
    upsert?: BebidaUpsertWithoutDetalleAdicionalBebidaInput
    connect?: BebidaWhereUniqueInput
    update?: XOR<XOR<BebidaUpdateToOneWithWhereWithoutDetalleAdicionalBebidaInput, BebidaUpdateWithoutDetalleAdicionalBebidaInput>, BebidaUncheckedUpdateWithoutDetalleAdicionalBebidaInput>
  }

  export type DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalBebidaNestedInput = {
    create?: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalBebidaInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalBebidaInput>
    connectOrCreate?: DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalBebidaInput
    upsert?: DetalleAdicionalUpsertWithoutDetalleAdicionalBebidaInput
    connect?: DetalleAdicionalWhereUniqueInput
    update?: XOR<XOR<DetalleAdicionalUpdateToOneWithWhereWithoutDetalleAdicionalBebidaInput, DetalleAdicionalUpdateWithoutDetalleAdicionalBebidaInput>, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalBebidaInput>
  }

  export type TipoBebidaCreateNestedOneWithoutBebidaInput = {
    create?: XOR<TipoBebidaCreateWithoutBebidaInput, TipoBebidaUncheckedCreateWithoutBebidaInput>
    connectOrCreate?: TipoBebidaCreateOrConnectWithoutBebidaInput
    connect?: TipoBebidaWhereUniqueInput
  }

  export type DetalleAdicionalBebidaCreateNestedManyWithoutBebidaInput = {
    create?: XOR<DetalleAdicionalBebidaCreateWithoutBebidaInput, DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput> | DetalleAdicionalBebidaCreateWithoutBebidaInput[] | DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput[]
    connectOrCreate?: DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput | DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput[]
    createMany?: DetalleAdicionalBebidaCreateManyBebidaInputEnvelope
    connect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
  }

  export type DetalleAdicionalBebidaUncheckedCreateNestedManyWithoutBebidaInput = {
    create?: XOR<DetalleAdicionalBebidaCreateWithoutBebidaInput, DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput> | DetalleAdicionalBebidaCreateWithoutBebidaInput[] | DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput[]
    connectOrCreate?: DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput | DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput[]
    createMany?: DetalleAdicionalBebidaCreateManyBebidaInputEnvelope
    connect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
  }

  export type EnumPresentacionBebidaFieldUpdateOperationsInput = {
    set?: $Enums.PresentacionBebida
  }

  export type TipoBebidaUpdateOneRequiredWithoutBebidaNestedInput = {
    create?: XOR<TipoBebidaCreateWithoutBebidaInput, TipoBebidaUncheckedCreateWithoutBebidaInput>
    connectOrCreate?: TipoBebidaCreateOrConnectWithoutBebidaInput
    upsert?: TipoBebidaUpsertWithoutBebidaInput
    connect?: TipoBebidaWhereUniqueInput
    update?: XOR<XOR<TipoBebidaUpdateToOneWithWhereWithoutBebidaInput, TipoBebidaUpdateWithoutBebidaInput>, TipoBebidaUncheckedUpdateWithoutBebidaInput>
  }

  export type DetalleAdicionalBebidaUpdateManyWithoutBebidaNestedInput = {
    create?: XOR<DetalleAdicionalBebidaCreateWithoutBebidaInput, DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput> | DetalleAdicionalBebidaCreateWithoutBebidaInput[] | DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput[]
    connectOrCreate?: DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput | DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput[]
    upsert?: DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutBebidaInput | DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutBebidaInput[]
    createMany?: DetalleAdicionalBebidaCreateManyBebidaInputEnvelope
    set?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    disconnect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    delete?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    connect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    update?: DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutBebidaInput | DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutBebidaInput[]
    updateMany?: DetalleAdicionalBebidaUpdateManyWithWhereWithoutBebidaInput | DetalleAdicionalBebidaUpdateManyWithWhereWithoutBebidaInput[]
    deleteMany?: DetalleAdicionalBebidaScalarWhereInput | DetalleAdicionalBebidaScalarWhereInput[]
  }

  export type DetalleAdicionalBebidaUncheckedUpdateManyWithoutBebidaNestedInput = {
    create?: XOR<DetalleAdicionalBebidaCreateWithoutBebidaInput, DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput> | DetalleAdicionalBebidaCreateWithoutBebidaInput[] | DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput[]
    connectOrCreate?: DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput | DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput[]
    upsert?: DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutBebidaInput | DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutBebidaInput[]
    createMany?: DetalleAdicionalBebidaCreateManyBebidaInputEnvelope
    set?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    disconnect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    delete?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    connect?: DetalleAdicionalBebidaWhereUniqueInput | DetalleAdicionalBebidaWhereUniqueInput[]
    update?: DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutBebidaInput | DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutBebidaInput[]
    updateMany?: DetalleAdicionalBebidaUpdateManyWithWhereWithoutBebidaInput | DetalleAdicionalBebidaUpdateManyWithWhereWithoutBebidaInput[]
    deleteMany?: DetalleAdicionalBebidaScalarWhereInput | DetalleAdicionalBebidaScalarWhereInput[]
  }

  export type BebidaCreateNestedManyWithoutTipoBebidaInput = {
    create?: XOR<BebidaCreateWithoutTipoBebidaInput, BebidaUncheckedCreateWithoutTipoBebidaInput> | BebidaCreateWithoutTipoBebidaInput[] | BebidaUncheckedCreateWithoutTipoBebidaInput[]
    connectOrCreate?: BebidaCreateOrConnectWithoutTipoBebidaInput | BebidaCreateOrConnectWithoutTipoBebidaInput[]
    createMany?: BebidaCreateManyTipoBebidaInputEnvelope
    connect?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
  }

  export type BebidaUncheckedCreateNestedManyWithoutTipoBebidaInput = {
    create?: XOR<BebidaCreateWithoutTipoBebidaInput, BebidaUncheckedCreateWithoutTipoBebidaInput> | BebidaCreateWithoutTipoBebidaInput[] | BebidaUncheckedCreateWithoutTipoBebidaInput[]
    connectOrCreate?: BebidaCreateOrConnectWithoutTipoBebidaInput | BebidaCreateOrConnectWithoutTipoBebidaInput[]
    createMany?: BebidaCreateManyTipoBebidaInputEnvelope
    connect?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
  }

  export type EnumTipoBebidaListFieldUpdateOperationsInput = {
    set?: $Enums.TipoBebidaList
  }

  export type BebidaUpdateManyWithoutTipoBebidaNestedInput = {
    create?: XOR<BebidaCreateWithoutTipoBebidaInput, BebidaUncheckedCreateWithoutTipoBebidaInput> | BebidaCreateWithoutTipoBebidaInput[] | BebidaUncheckedCreateWithoutTipoBebidaInput[]
    connectOrCreate?: BebidaCreateOrConnectWithoutTipoBebidaInput | BebidaCreateOrConnectWithoutTipoBebidaInput[]
    upsert?: BebidaUpsertWithWhereUniqueWithoutTipoBebidaInput | BebidaUpsertWithWhereUniqueWithoutTipoBebidaInput[]
    createMany?: BebidaCreateManyTipoBebidaInputEnvelope
    set?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
    disconnect?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
    delete?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
    connect?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
    update?: BebidaUpdateWithWhereUniqueWithoutTipoBebidaInput | BebidaUpdateWithWhereUniqueWithoutTipoBebidaInput[]
    updateMany?: BebidaUpdateManyWithWhereWithoutTipoBebidaInput | BebidaUpdateManyWithWhereWithoutTipoBebidaInput[]
    deleteMany?: BebidaScalarWhereInput | BebidaScalarWhereInput[]
  }

  export type BebidaUncheckedUpdateManyWithoutTipoBebidaNestedInput = {
    create?: XOR<BebidaCreateWithoutTipoBebidaInput, BebidaUncheckedCreateWithoutTipoBebidaInput> | BebidaCreateWithoutTipoBebidaInput[] | BebidaUncheckedCreateWithoutTipoBebidaInput[]
    connectOrCreate?: BebidaCreateOrConnectWithoutTipoBebidaInput | BebidaCreateOrConnectWithoutTipoBebidaInput[]
    upsert?: BebidaUpsertWithWhereUniqueWithoutTipoBebidaInput | BebidaUpsertWithWhereUniqueWithoutTipoBebidaInput[]
    createMany?: BebidaCreateManyTipoBebidaInputEnvelope
    set?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
    disconnect?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
    delete?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
    connect?: BebidaWhereUniqueInput | BebidaWhereUniqueInput[]
    update?: BebidaUpdateWithWhereUniqueWithoutTipoBebidaInput | BebidaUpdateWithWhereUniqueWithoutTipoBebidaInput[]
    updateMany?: BebidaUpdateManyWithWhereWithoutTipoBebidaInput | BebidaUpdateManyWithWhereWithoutTipoBebidaInput[]
    deleteMany?: BebidaScalarWhereInput | BebidaScalarWhereInput[]
  }

  export type TaperCreateNestedOneWithoutDetalleAdicionalTaperInput = {
    create?: XOR<TaperCreateWithoutDetalleAdicionalTaperInput, TaperUncheckedCreateWithoutDetalleAdicionalTaperInput>
    connectOrCreate?: TaperCreateOrConnectWithoutDetalleAdicionalTaperInput
    connect?: TaperWhereUniqueInput
  }

  export type DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalTaperInput = {
    create?: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalTaperInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalTaperInput>
    connectOrCreate?: DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalTaperInput
    connect?: DetalleAdicionalWhereUniqueInput
  }

  export type TaperUpdateOneRequiredWithoutDetalleAdicionalTaperNestedInput = {
    create?: XOR<TaperCreateWithoutDetalleAdicionalTaperInput, TaperUncheckedCreateWithoutDetalleAdicionalTaperInput>
    connectOrCreate?: TaperCreateOrConnectWithoutDetalleAdicionalTaperInput
    upsert?: TaperUpsertWithoutDetalleAdicionalTaperInput
    connect?: TaperWhereUniqueInput
    update?: XOR<XOR<TaperUpdateToOneWithWhereWithoutDetalleAdicionalTaperInput, TaperUpdateWithoutDetalleAdicionalTaperInput>, TaperUncheckedUpdateWithoutDetalleAdicionalTaperInput>
  }

  export type DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalTaperNestedInput = {
    create?: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalTaperInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalTaperInput>
    connectOrCreate?: DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalTaperInput
    upsert?: DetalleAdicionalUpsertWithoutDetalleAdicionalTaperInput
    connect?: DetalleAdicionalWhereUniqueInput
    update?: XOR<XOR<DetalleAdicionalUpdateToOneWithWhereWithoutDetalleAdicionalTaperInput, DetalleAdicionalUpdateWithoutDetalleAdicionalTaperInput>, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalTaperInput>
  }

  export type DetalleAdicionalTaperCreateNestedManyWithoutTaperInput = {
    create?: XOR<DetalleAdicionalTaperCreateWithoutTaperInput, DetalleAdicionalTaperUncheckedCreateWithoutTaperInput> | DetalleAdicionalTaperCreateWithoutTaperInput[] | DetalleAdicionalTaperUncheckedCreateWithoutTaperInput[]
    connectOrCreate?: DetalleAdicionalTaperCreateOrConnectWithoutTaperInput | DetalleAdicionalTaperCreateOrConnectWithoutTaperInput[]
    createMany?: DetalleAdicionalTaperCreateManyTaperInputEnvelope
    connect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
  }

  export type DetalleAdicionalTaperUncheckedCreateNestedManyWithoutTaperInput = {
    create?: XOR<DetalleAdicionalTaperCreateWithoutTaperInput, DetalleAdicionalTaperUncheckedCreateWithoutTaperInput> | DetalleAdicionalTaperCreateWithoutTaperInput[] | DetalleAdicionalTaperUncheckedCreateWithoutTaperInput[]
    connectOrCreate?: DetalleAdicionalTaperCreateOrConnectWithoutTaperInput | DetalleAdicionalTaperCreateOrConnectWithoutTaperInput[]
    createMany?: DetalleAdicionalTaperCreateManyTaperInputEnvelope
    connect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
  }

  export type EnumPresentacionTaperFieldUpdateOperationsInput = {
    set?: $Enums.PresentacionTaper
  }

  export type DetalleAdicionalTaperUpdateManyWithoutTaperNestedInput = {
    create?: XOR<DetalleAdicionalTaperCreateWithoutTaperInput, DetalleAdicionalTaperUncheckedCreateWithoutTaperInput> | DetalleAdicionalTaperCreateWithoutTaperInput[] | DetalleAdicionalTaperUncheckedCreateWithoutTaperInput[]
    connectOrCreate?: DetalleAdicionalTaperCreateOrConnectWithoutTaperInput | DetalleAdicionalTaperCreateOrConnectWithoutTaperInput[]
    upsert?: DetalleAdicionalTaperUpsertWithWhereUniqueWithoutTaperInput | DetalleAdicionalTaperUpsertWithWhereUniqueWithoutTaperInput[]
    createMany?: DetalleAdicionalTaperCreateManyTaperInputEnvelope
    set?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    disconnect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    delete?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    connect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    update?: DetalleAdicionalTaperUpdateWithWhereUniqueWithoutTaperInput | DetalleAdicionalTaperUpdateWithWhereUniqueWithoutTaperInput[]
    updateMany?: DetalleAdicionalTaperUpdateManyWithWhereWithoutTaperInput | DetalleAdicionalTaperUpdateManyWithWhereWithoutTaperInput[]
    deleteMany?: DetalleAdicionalTaperScalarWhereInput | DetalleAdicionalTaperScalarWhereInput[]
  }

  export type DetalleAdicionalTaperUncheckedUpdateManyWithoutTaperNestedInput = {
    create?: XOR<DetalleAdicionalTaperCreateWithoutTaperInput, DetalleAdicionalTaperUncheckedCreateWithoutTaperInput> | DetalleAdicionalTaperCreateWithoutTaperInput[] | DetalleAdicionalTaperUncheckedCreateWithoutTaperInput[]
    connectOrCreate?: DetalleAdicionalTaperCreateOrConnectWithoutTaperInput | DetalleAdicionalTaperCreateOrConnectWithoutTaperInput[]
    upsert?: DetalleAdicionalTaperUpsertWithWhereUniqueWithoutTaperInput | DetalleAdicionalTaperUpsertWithWhereUniqueWithoutTaperInput[]
    createMany?: DetalleAdicionalTaperCreateManyTaperInputEnvelope
    set?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    disconnect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    delete?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    connect?: DetalleAdicionalTaperWhereUniqueInput | DetalleAdicionalTaperWhereUniqueInput[]
    update?: DetalleAdicionalTaperUpdateWithWhereUniqueWithoutTaperInput | DetalleAdicionalTaperUpdateWithWhereUniqueWithoutTaperInput[]
    updateMany?: DetalleAdicionalTaperUpdateManyWithWhereWithoutTaperInput | DetalleAdicionalTaperUpdateManyWithWhereWithoutTaperInput[]
    deleteMany?: DetalleAdicionalTaperScalarWhereInput | DetalleAdicionalTaperScalarWhereInput[]
  }

  export type EntradaCreateNestedOneWithoutDetalleAdicionalEntradaInput = {
    create?: XOR<EntradaCreateWithoutDetalleAdicionalEntradaInput, EntradaUncheckedCreateWithoutDetalleAdicionalEntradaInput>
    connectOrCreate?: EntradaCreateOrConnectWithoutDetalleAdicionalEntradaInput
    connect?: EntradaWhereUniqueInput
  }

  export type DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalEntradaInput = {
    create?: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalEntradaInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalEntradaInput>
    connectOrCreate?: DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalEntradaInput
    connect?: DetalleAdicionalWhereUniqueInput
  }

  export type EntradaUpdateOneRequiredWithoutDetalleAdicionalEntradaNestedInput = {
    create?: XOR<EntradaCreateWithoutDetalleAdicionalEntradaInput, EntradaUncheckedCreateWithoutDetalleAdicionalEntradaInput>
    connectOrCreate?: EntradaCreateOrConnectWithoutDetalleAdicionalEntradaInput
    upsert?: EntradaUpsertWithoutDetalleAdicionalEntradaInput
    connect?: EntradaWhereUniqueInput
    update?: XOR<XOR<EntradaUpdateToOneWithWhereWithoutDetalleAdicionalEntradaInput, EntradaUpdateWithoutDetalleAdicionalEntradaInput>, EntradaUncheckedUpdateWithoutDetalleAdicionalEntradaInput>
  }

  export type DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalEntradaNestedInput = {
    create?: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalEntradaInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalEntradaInput>
    connectOrCreate?: DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalEntradaInput
    upsert?: DetalleAdicionalUpsertWithoutDetalleAdicionalEntradaInput
    connect?: DetalleAdicionalWhereUniqueInput
    update?: XOR<XOR<DetalleAdicionalUpdateToOneWithWhereWithoutDetalleAdicionalEntradaInput, DetalleAdicionalUpdateWithoutDetalleAdicionalEntradaInput>, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalEntradaInput>
  }

  export type DetalleAdicionalEntradaCreateNestedManyWithoutEntradaInput = {
    create?: XOR<DetalleAdicionalEntradaCreateWithoutEntradaInput, DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput> | DetalleAdicionalEntradaCreateWithoutEntradaInput[] | DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput[]
    connectOrCreate?: DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput | DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput[]
    createMany?: DetalleAdicionalEntradaCreateManyEntradaInputEnvelope
    connect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
  }

  export type DetalleAdicionalEntradaUncheckedCreateNestedManyWithoutEntradaInput = {
    create?: XOR<DetalleAdicionalEntradaCreateWithoutEntradaInput, DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput> | DetalleAdicionalEntradaCreateWithoutEntradaInput[] | DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput[]
    connectOrCreate?: DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput | DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput[]
    createMany?: DetalleAdicionalEntradaCreateManyEntradaInputEnvelope
    connect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
  }

  export type DetalleAdicionalEntradaUpdateManyWithoutEntradaNestedInput = {
    create?: XOR<DetalleAdicionalEntradaCreateWithoutEntradaInput, DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput> | DetalleAdicionalEntradaCreateWithoutEntradaInput[] | DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput[]
    connectOrCreate?: DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput | DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput[]
    upsert?: DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutEntradaInput | DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutEntradaInput[]
    createMany?: DetalleAdicionalEntradaCreateManyEntradaInputEnvelope
    set?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    disconnect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    delete?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    connect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    update?: DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutEntradaInput | DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutEntradaInput[]
    updateMany?: DetalleAdicionalEntradaUpdateManyWithWhereWithoutEntradaInput | DetalleAdicionalEntradaUpdateManyWithWhereWithoutEntradaInput[]
    deleteMany?: DetalleAdicionalEntradaScalarWhereInput | DetalleAdicionalEntradaScalarWhereInput[]
  }

  export type DetalleAdicionalEntradaUncheckedUpdateManyWithoutEntradaNestedInput = {
    create?: XOR<DetalleAdicionalEntradaCreateWithoutEntradaInput, DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput> | DetalleAdicionalEntradaCreateWithoutEntradaInput[] | DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput[]
    connectOrCreate?: DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput | DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput[]
    upsert?: DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutEntradaInput | DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutEntradaInput[]
    createMany?: DetalleAdicionalEntradaCreateManyEntradaInputEnvelope
    set?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    disconnect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    delete?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    connect?: DetalleAdicionalEntradaWhereUniqueInput | DetalleAdicionalEntradaWhereUniqueInput[]
    update?: DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutEntradaInput | DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutEntradaInput[]
    updateMany?: DetalleAdicionalEntradaUpdateManyWithWhereWithoutEntradaInput | DetalleAdicionalEntradaUpdateManyWithWhereWithoutEntradaInput[]
    deleteMany?: DetalleAdicionalEntradaScalarWhereInput | DetalleAdicionalEntradaScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEstadoMesaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMesa | EnumEstadoMesaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMesa[]
    notIn?: $Enums.EstadoMesa[]
    not?: NestedEnumEstadoMesaFilter<$PrismaModel> | $Enums.EstadoMesa
  }

  export type NestedEnumEstadoMesaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoMesa | EnumEstadoMesaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoMesa[]
    notIn?: $Enums.EstadoMesa[]
    not?: NestedEnumEstadoMesaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoMesa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoMesaFilter<$PrismaModel>
    _max?: NestedEnumEstadoMesaFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMetodoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[]
    notIn?: $Enums.MetodoPago[]
    not?: NestedEnumMetodoPagoFilter<$PrismaModel> | $Enums.MetodoPago
  }

  export type NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[]
    notIn?: $Enums.MetodoPago[]
    not?: NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagoFilter<$PrismaModel>
  }

  export type NestedEnumTipoComprobanteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoComprobante | EnumTipoComprobanteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoComprobante[]
    notIn?: $Enums.TipoComprobante[]
    not?: NestedEnumTipoComprobanteFilter<$PrismaModel> | $Enums.TipoComprobante
  }

  export type NestedEnumTipoComprobanteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoComprobante | EnumTipoComprobanteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoComprobante[]
    notIn?: $Enums.TipoComprobante[]
    not?: NestedEnumTipoComprobanteWithAggregatesFilter<$PrismaModel> | $Enums.TipoComprobante
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoComprobanteFilter<$PrismaModel>
    _max?: NestedEnumTipoComprobanteFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPresentacionBebidaFilter<$PrismaModel = never> = {
    equals?: $Enums.PresentacionBebida | EnumPresentacionBebidaFieldRefInput<$PrismaModel>
    in?: $Enums.PresentacionBebida[]
    notIn?: $Enums.PresentacionBebida[]
    not?: NestedEnumPresentacionBebidaFilter<$PrismaModel> | $Enums.PresentacionBebida
  }

  export type NestedEnumPresentacionBebidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresentacionBebida | EnumPresentacionBebidaFieldRefInput<$PrismaModel>
    in?: $Enums.PresentacionBebida[]
    notIn?: $Enums.PresentacionBebida[]
    not?: NestedEnumPresentacionBebidaWithAggregatesFilter<$PrismaModel> | $Enums.PresentacionBebida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresentacionBebidaFilter<$PrismaModel>
    _max?: NestedEnumPresentacionBebidaFilter<$PrismaModel>
  }

  export type NestedEnumTipoBebidaListFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoBebidaList | EnumTipoBebidaListFieldRefInput<$PrismaModel>
    in?: $Enums.TipoBebidaList[]
    notIn?: $Enums.TipoBebidaList[]
    not?: NestedEnumTipoBebidaListFilter<$PrismaModel> | $Enums.TipoBebidaList
  }

  export type NestedEnumTipoBebidaListWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoBebidaList | EnumTipoBebidaListFieldRefInput<$PrismaModel>
    in?: $Enums.TipoBebidaList[]
    notIn?: $Enums.TipoBebidaList[]
    not?: NestedEnumTipoBebidaListWithAggregatesFilter<$PrismaModel> | $Enums.TipoBebidaList
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoBebidaListFilter<$PrismaModel>
    _max?: NestedEnumTipoBebidaListFilter<$PrismaModel>
  }

  export type NestedEnumPresentacionTaperFilter<$PrismaModel = never> = {
    equals?: $Enums.PresentacionTaper | EnumPresentacionTaperFieldRefInput<$PrismaModel>
    in?: $Enums.PresentacionTaper[]
    notIn?: $Enums.PresentacionTaper[]
    not?: NestedEnumPresentacionTaperFilter<$PrismaModel> | $Enums.PresentacionTaper
  }

  export type NestedEnumPresentacionTaperWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresentacionTaper | EnumPresentacionTaperFieldRefInput<$PrismaModel>
    in?: $Enums.PresentacionTaper[]
    notIn?: $Enums.PresentacionTaper[]
    not?: NestedEnumPresentacionTaperWithAggregatesFilter<$PrismaModel> | $Enums.PresentacionTaper
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresentacionTaperFilter<$PrismaModel>
    _max?: NestedEnumPresentacionTaperFilter<$PrismaModel>
  }

  export type PedidoCreateWithoutClienteInput = {
    fecha: Date | string
    total: number
    Mesa: MesaCreateNestedOneWithoutPedidoInput
    Comprobante: ComprobanteCreateNestedOneWithoutPedidoInput
    DetalleAdicional?: DetalleAdicionalCreateNestedOneWithoutPedidoInput
    PedidoItem?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: number
    fecha: Date | string
    total: number
    mesaId: number
    comprobanteId: number
    detalleAdicionalId?: number | null
    PedidoItem?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    fecha?: DateTimeFilter<"Pedido"> | Date | string
    total?: FloatFilter<"Pedido"> | number
    clienteId?: IntFilter<"Pedido"> | number
    mesaId?: IntFilter<"Pedido"> | number
    comprobanteId?: IntFilter<"Pedido"> | number
    detalleAdicionalId?: IntNullableFilter<"Pedido"> | number | null
  }

  export type PedidoCreateWithoutMesaInput = {
    fecha: Date | string
    total: number
    Cliente?: ClienteCreateNestedOneWithoutPedidoInput
    Comprobante: ComprobanteCreateNestedOneWithoutPedidoInput
    DetalleAdicional?: DetalleAdicionalCreateNestedOneWithoutPedidoInput
    PedidoItem?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutMesaInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    comprobanteId: number
    detalleAdicionalId?: number | null
    PedidoItem?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutMesaInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutMesaInput, PedidoUncheckedCreateWithoutMesaInput>
  }

  export type PedidoCreateManyMesaInputEnvelope = {
    data: PedidoCreateManyMesaInput | PedidoCreateManyMesaInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutMesaInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutMesaInput, PedidoUncheckedUpdateWithoutMesaInput>
    create: XOR<PedidoCreateWithoutMesaInput, PedidoUncheckedCreateWithoutMesaInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutMesaInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutMesaInput, PedidoUncheckedUpdateWithoutMesaInput>
  }

  export type PedidoUpdateManyWithWhereWithoutMesaInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutMesaInput>
  }

  export type PlatoCreateWithoutCartaInput = {
    nombre: string
    descripcion: string
    precio: number
    PedidoItem?: PedidoItemCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUncheckedCreateWithoutCartaInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    PedidoItem?: PedidoItemUncheckedCreateNestedManyWithoutPlatoInput
  }

  export type PlatoCreateOrConnectWithoutCartaInput = {
    where: PlatoWhereUniqueInput
    create: XOR<PlatoCreateWithoutCartaInput, PlatoUncheckedCreateWithoutCartaInput>
  }

  export type PlatoCreateManyCartaInputEnvelope = {
    data: PlatoCreateManyCartaInput | PlatoCreateManyCartaInput[]
    skipDuplicates?: boolean
  }

  export type PlatoUpsertWithWhereUniqueWithoutCartaInput = {
    where: PlatoWhereUniqueInput
    update: XOR<PlatoUpdateWithoutCartaInput, PlatoUncheckedUpdateWithoutCartaInput>
    create: XOR<PlatoCreateWithoutCartaInput, PlatoUncheckedCreateWithoutCartaInput>
  }

  export type PlatoUpdateWithWhereUniqueWithoutCartaInput = {
    where: PlatoWhereUniqueInput
    data: XOR<PlatoUpdateWithoutCartaInput, PlatoUncheckedUpdateWithoutCartaInput>
  }

  export type PlatoUpdateManyWithWhereWithoutCartaInput = {
    where: PlatoScalarWhereInput
    data: XOR<PlatoUpdateManyMutationInput, PlatoUncheckedUpdateManyWithoutCartaInput>
  }

  export type PlatoScalarWhereInput = {
    AND?: PlatoScalarWhereInput | PlatoScalarWhereInput[]
    OR?: PlatoScalarWhereInput[]
    NOT?: PlatoScalarWhereInput | PlatoScalarWhereInput[]
    id?: IntFilter<"Plato"> | number
    nombre?: StringFilter<"Plato"> | string
    descripcion?: StringFilter<"Plato"> | string
    precio?: FloatFilter<"Plato"> | number
    cartaId?: IntFilter<"Plato"> | number
  }

  export type CartaCreateWithoutPlatoInput = {
    nombre: string
    descripcion: string
    precio: string
  }

  export type CartaUncheckedCreateWithoutPlatoInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: string
  }

  export type CartaCreateOrConnectWithoutPlatoInput = {
    where: CartaWhereUniqueInput
    create: XOR<CartaCreateWithoutPlatoInput, CartaUncheckedCreateWithoutPlatoInput>
  }

  export type PedidoItemCreateWithoutPlatoInput = {
    cantidad: number
    Pedido: PedidoCreateNestedOneWithoutPedidoItemInput
  }

  export type PedidoItemUncheckedCreateWithoutPlatoInput = {
    id?: number
    cantidad: number
    pedidoId: number
  }

  export type PedidoItemCreateOrConnectWithoutPlatoInput = {
    where: PedidoItemWhereUniqueInput
    create: XOR<PedidoItemCreateWithoutPlatoInput, PedidoItemUncheckedCreateWithoutPlatoInput>
  }

  export type PedidoItemCreateManyPlatoInputEnvelope = {
    data: PedidoItemCreateManyPlatoInput | PedidoItemCreateManyPlatoInput[]
    skipDuplicates?: boolean
  }

  export type CartaUpsertWithoutPlatoInput = {
    update: XOR<CartaUpdateWithoutPlatoInput, CartaUncheckedUpdateWithoutPlatoInput>
    create: XOR<CartaCreateWithoutPlatoInput, CartaUncheckedCreateWithoutPlatoInput>
    where?: CartaWhereInput
  }

  export type CartaUpdateToOneWithWhereWithoutPlatoInput = {
    where?: CartaWhereInput
    data: XOR<CartaUpdateWithoutPlatoInput, CartaUncheckedUpdateWithoutPlatoInput>
  }

  export type CartaUpdateWithoutPlatoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: StringFieldUpdateOperationsInput | string
  }

  export type CartaUncheckedUpdateWithoutPlatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoItemUpsertWithWhereUniqueWithoutPlatoInput = {
    where: PedidoItemWhereUniqueInput
    update: XOR<PedidoItemUpdateWithoutPlatoInput, PedidoItemUncheckedUpdateWithoutPlatoInput>
    create: XOR<PedidoItemCreateWithoutPlatoInput, PedidoItemUncheckedCreateWithoutPlatoInput>
  }

  export type PedidoItemUpdateWithWhereUniqueWithoutPlatoInput = {
    where: PedidoItemWhereUniqueInput
    data: XOR<PedidoItemUpdateWithoutPlatoInput, PedidoItemUncheckedUpdateWithoutPlatoInput>
  }

  export type PedidoItemUpdateManyWithWhereWithoutPlatoInput = {
    where: PedidoItemScalarWhereInput
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyWithoutPlatoInput>
  }

  export type PedidoItemScalarWhereInput = {
    AND?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
    OR?: PedidoItemScalarWhereInput[]
    NOT?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
    id?: IntFilter<"PedidoItem"> | number
    cantidad?: IntFilter<"PedidoItem"> | number
    pedidoId?: IntFilter<"PedidoItem"> | number
    platoId?: IntFilter<"PedidoItem"> | number
  }

  export type ComprobanteCreateWithoutTipoPagoInput = {
    tipoComprobante?: $Enums.TipoComprobante
    numero: number
    fechaEmision?: Date | string
    Pedido?: PedidoCreateNestedManyWithoutComprobanteInput
  }

  export type ComprobanteUncheckedCreateWithoutTipoPagoInput = {
    id?: number
    tipoComprobante?: $Enums.TipoComprobante
    numero: number
    fechaEmision?: Date | string
    Pedido?: PedidoUncheckedCreateNestedManyWithoutComprobanteInput
  }

  export type ComprobanteCreateOrConnectWithoutTipoPagoInput = {
    where: ComprobanteWhereUniqueInput
    create: XOR<ComprobanteCreateWithoutTipoPagoInput, ComprobanteUncheckedCreateWithoutTipoPagoInput>
  }

  export type ComprobanteCreateManyTipoPagoInputEnvelope = {
    data: ComprobanteCreateManyTipoPagoInput | ComprobanteCreateManyTipoPagoInput[]
    skipDuplicates?: boolean
  }

  export type ComprobanteUpsertWithWhereUniqueWithoutTipoPagoInput = {
    where: ComprobanteWhereUniqueInput
    update: XOR<ComprobanteUpdateWithoutTipoPagoInput, ComprobanteUncheckedUpdateWithoutTipoPagoInput>
    create: XOR<ComprobanteCreateWithoutTipoPagoInput, ComprobanteUncheckedCreateWithoutTipoPagoInput>
  }

  export type ComprobanteUpdateWithWhereUniqueWithoutTipoPagoInput = {
    where: ComprobanteWhereUniqueInput
    data: XOR<ComprobanteUpdateWithoutTipoPagoInput, ComprobanteUncheckedUpdateWithoutTipoPagoInput>
  }

  export type ComprobanteUpdateManyWithWhereWithoutTipoPagoInput = {
    where: ComprobanteScalarWhereInput
    data: XOR<ComprobanteUpdateManyMutationInput, ComprobanteUncheckedUpdateManyWithoutTipoPagoInput>
  }

  export type ComprobanteScalarWhereInput = {
    AND?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
    OR?: ComprobanteScalarWhereInput[]
    NOT?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
    id?: IntFilter<"Comprobante"> | number
    tipoComprobante?: EnumTipoComprobanteFilter<"Comprobante"> | $Enums.TipoComprobante
    numero?: IntFilter<"Comprobante"> | number
    fechaEmision?: DateTimeFilter<"Comprobante"> | Date | string
    tipoPagoId?: IntFilter<"Comprobante"> | number
  }

  export type TipoPagoCreateWithoutComprobanteInput = {
    nombre?: $Enums.MetodoPago
  }

  export type TipoPagoUncheckedCreateWithoutComprobanteInput = {
    id?: number
    nombre?: $Enums.MetodoPago
  }

  export type TipoPagoCreateOrConnectWithoutComprobanteInput = {
    where: TipoPagoWhereUniqueInput
    create: XOR<TipoPagoCreateWithoutComprobanteInput, TipoPagoUncheckedCreateWithoutComprobanteInput>
  }

  export type PedidoCreateWithoutComprobanteInput = {
    fecha: Date | string
    total: number
    Cliente?: ClienteCreateNestedOneWithoutPedidoInput
    Mesa: MesaCreateNestedOneWithoutPedidoInput
    DetalleAdicional?: DetalleAdicionalCreateNestedOneWithoutPedidoInput
    PedidoItem?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutComprobanteInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    mesaId: number
    detalleAdicionalId?: number | null
    PedidoItem?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutComprobanteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutComprobanteInput, PedidoUncheckedCreateWithoutComprobanteInput>
  }

  export type PedidoCreateManyComprobanteInputEnvelope = {
    data: PedidoCreateManyComprobanteInput | PedidoCreateManyComprobanteInput[]
    skipDuplicates?: boolean
  }

  export type TipoPagoUpsertWithoutComprobanteInput = {
    update: XOR<TipoPagoUpdateWithoutComprobanteInput, TipoPagoUncheckedUpdateWithoutComprobanteInput>
    create: XOR<TipoPagoCreateWithoutComprobanteInput, TipoPagoUncheckedCreateWithoutComprobanteInput>
    where?: TipoPagoWhereInput
  }

  export type TipoPagoUpdateToOneWithWhereWithoutComprobanteInput = {
    where?: TipoPagoWhereInput
    data: XOR<TipoPagoUpdateWithoutComprobanteInput, TipoPagoUncheckedUpdateWithoutComprobanteInput>
  }

  export type TipoPagoUpdateWithoutComprobanteInput = {
    nombre?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
  }

  export type TipoPagoUncheckedUpdateWithoutComprobanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
  }

  export type PedidoUpsertWithWhereUniqueWithoutComprobanteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutComprobanteInput, PedidoUncheckedUpdateWithoutComprobanteInput>
    create: XOR<PedidoCreateWithoutComprobanteInput, PedidoUncheckedCreateWithoutComprobanteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutComprobanteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutComprobanteInput, PedidoUncheckedUpdateWithoutComprobanteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutComprobanteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutComprobanteInput>
  }

  export type ClienteCreateWithoutPedidoInput = {
    nome: string
    dni: string
    telefono: string
    email: string
  }

  export type ClienteUncheckedCreateWithoutPedidoInput = {
    id?: number
    nome: string
    dni: string
    telefono: string
    email: string
  }

  export type ClienteCreateOrConnectWithoutPedidoInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
  }

  export type MesaCreateWithoutPedidoInput = {
    numero: string
    capacidad: number
    estado?: $Enums.EstadoMesa
  }

  export type MesaUncheckedCreateWithoutPedidoInput = {
    id?: number
    numero: string
    capacidad: number
    estado?: $Enums.EstadoMesa
  }

  export type MesaCreateOrConnectWithoutPedidoInput = {
    where: MesaWhereUniqueInput
    create: XOR<MesaCreateWithoutPedidoInput, MesaUncheckedCreateWithoutPedidoInput>
  }

  export type ComprobanteCreateWithoutPedidoInput = {
    tipoComprobante?: $Enums.TipoComprobante
    numero: number
    fechaEmision?: Date | string
    TipoPago: TipoPagoCreateNestedOneWithoutComprobanteInput
  }

  export type ComprobanteUncheckedCreateWithoutPedidoInput = {
    id?: number
    tipoComprobante?: $Enums.TipoComprobante
    numero: number
    fechaEmision?: Date | string
    tipoPagoId: number
  }

  export type ComprobanteCreateOrConnectWithoutPedidoInput = {
    where: ComprobanteWhereUniqueInput
    create: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput>
  }

  export type DetalleAdicionalCreateWithoutPedidoInput = {
    DetalleAdicionalBebida?: DetalleAdicionalBebidaCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalUncheckedCreateWithoutPedidoInput = {
    id?: number
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalCreateOrConnectWithoutPedidoInput = {
    where: DetalleAdicionalWhereUniqueInput
    create: XOR<DetalleAdicionalCreateWithoutPedidoInput, DetalleAdicionalUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoItemCreateWithoutPedidoInput = {
    cantidad: number
    Plato: PlatoCreateNestedOneWithoutPedidoItemInput
  }

  export type PedidoItemUncheckedCreateWithoutPedidoInput = {
    id?: number
    cantidad: number
    platoId: number
  }

  export type PedidoItemCreateOrConnectWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    create: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoItemCreateManyPedidoInputEnvelope = {
    data: PedidoItemCreateManyPedidoInput | PedidoItemCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPedidoInput = {
    update: XOR<ClienteUpdateWithoutPedidoInput, ClienteUncheckedUpdateWithoutPedidoInput>
    create: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidoInput, ClienteUncheckedUpdateWithoutPedidoInput>
  }

  export type ClienteUpdateWithoutPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MesaUpsertWithoutPedidoInput = {
    update: XOR<MesaUpdateWithoutPedidoInput, MesaUncheckedUpdateWithoutPedidoInput>
    create: XOR<MesaCreateWithoutPedidoInput, MesaUncheckedCreateWithoutPedidoInput>
    where?: MesaWhereInput
  }

  export type MesaUpdateToOneWithWhereWithoutPedidoInput = {
    where?: MesaWhereInput
    data: XOR<MesaUpdateWithoutPedidoInput, MesaUncheckedUpdateWithoutPedidoInput>
  }

  export type MesaUpdateWithoutPedidoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
  }

  export type MesaUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoMesaFieldUpdateOperationsInput | $Enums.EstadoMesa
  }

  export type ComprobanteUpsertWithoutPedidoInput = {
    update: XOR<ComprobanteUpdateWithoutPedidoInput, ComprobanteUncheckedUpdateWithoutPedidoInput>
    create: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput>
    where?: ComprobanteWhereInput
  }

  export type ComprobanteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: ComprobanteWhereInput
    data: XOR<ComprobanteUpdateWithoutPedidoInput, ComprobanteUncheckedUpdateWithoutPedidoInput>
  }

  export type ComprobanteUpdateWithoutPedidoInput = {
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    TipoPago?: TipoPagoUpdateOneRequiredWithoutComprobanteNestedInput
  }

  export type ComprobanteUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoPagoId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalUpsertWithoutPedidoInput = {
    update: XOR<DetalleAdicionalUpdateWithoutPedidoInput, DetalleAdicionalUncheckedUpdateWithoutPedidoInput>
    create: XOR<DetalleAdicionalCreateWithoutPedidoInput, DetalleAdicionalUncheckedCreateWithoutPedidoInput>
    where?: DetalleAdicionalWhereInput
  }

  export type DetalleAdicionalUpdateToOneWithWhereWithoutPedidoInput = {
    where?: DetalleAdicionalWhereInput
    data: XOR<DetalleAdicionalUpdateWithoutPedidoInput, DetalleAdicionalUncheckedUpdateWithoutPedidoInput>
  }

  export type DetalleAdicionalUpdateWithoutPedidoInput = {
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type DetalleAdicionalUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type PedidoItemUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    update: XOR<PedidoItemUpdateWithoutPedidoInput, PedidoItemUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoItemUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    data: XOR<PedidoItemUpdateWithoutPedidoInput, PedidoItemUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoItemUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoItemScalarWhereInput
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutPedidoItemInput = {
    fecha: Date | string
    total: number
    Cliente?: ClienteCreateNestedOneWithoutPedidoInput
    Mesa: MesaCreateNestedOneWithoutPedidoInput
    Comprobante: ComprobanteCreateNestedOneWithoutPedidoInput
    DetalleAdicional?: DetalleAdicionalCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPedidoItemInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    mesaId: number
    comprobanteId: number
    detalleAdicionalId?: number | null
  }

  export type PedidoCreateOrConnectWithoutPedidoItemInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPedidoItemInput, PedidoUncheckedCreateWithoutPedidoItemInput>
  }

  export type PlatoCreateWithoutPedidoItemInput = {
    nombre: string
    descripcion: string
    precio: number
    Carta: CartaCreateNestedOneWithoutPlatoInput
  }

  export type PlatoUncheckedCreateWithoutPedidoItemInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    cartaId: number
  }

  export type PlatoCreateOrConnectWithoutPedidoItemInput = {
    where: PlatoWhereUniqueInput
    create: XOR<PlatoCreateWithoutPedidoItemInput, PlatoUncheckedCreateWithoutPedidoItemInput>
  }

  export type PedidoUpsertWithoutPedidoItemInput = {
    update: XOR<PedidoUpdateWithoutPedidoItemInput, PedidoUncheckedUpdateWithoutPedidoItemInput>
    create: XOR<PedidoCreateWithoutPedidoItemInput, PedidoUncheckedCreateWithoutPedidoItemInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPedidoItemInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPedidoItemInput, PedidoUncheckedUpdateWithoutPedidoItemInput>
  }

  export type PedidoUpdateWithoutPedidoItemInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    Cliente?: ClienteUpdateOneWithoutPedidoNestedInput
    Mesa?: MesaUpdateOneRequiredWithoutPedidoNestedInput
    Comprobante?: ComprobanteUpdateOneRequiredWithoutPedidoNestedInput
    DetalleAdicional?: DetalleAdicionalUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPedidoItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlatoUpsertWithoutPedidoItemInput = {
    update: XOR<PlatoUpdateWithoutPedidoItemInput, PlatoUncheckedUpdateWithoutPedidoItemInput>
    create: XOR<PlatoCreateWithoutPedidoItemInput, PlatoUncheckedCreateWithoutPedidoItemInput>
    where?: PlatoWhereInput
  }

  export type PlatoUpdateToOneWithWhereWithoutPedidoItemInput = {
    where?: PlatoWhereInput
    data: XOR<PlatoUpdateWithoutPedidoItemInput, PlatoUncheckedUpdateWithoutPedidoItemInput>
  }

  export type PlatoUpdateWithoutPedidoItemInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    Carta?: CartaUpdateOneRequiredWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateWithoutPedidoItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    cartaId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateWithoutDetalleAdicionalInput = {
    fecha: Date | string
    total: number
    Cliente?: ClienteCreateNestedOneWithoutPedidoInput
    Mesa: MesaCreateNestedOneWithoutPedidoInput
    Comprobante: ComprobanteCreateNestedOneWithoutPedidoInput
    PedidoItem?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutDetalleAdicionalInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    mesaId: number
    comprobanteId: number
    PedidoItem?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutDetalleAdicionalInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutDetalleAdicionalInput, PedidoUncheckedCreateWithoutDetalleAdicionalInput>
  }

  export type PedidoCreateManyDetalleAdicionalInputEnvelope = {
    data: PedidoCreateManyDetalleAdicionalInput | PedidoCreateManyDetalleAdicionalInput[]
    skipDuplicates?: boolean
  }

  export type DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput = {
    Bebida: BebidaCreateNestedOneWithoutDetalleAdicionalBebidaInput
  }

  export type DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput = {
    id?: number
    bebidaId: number
  }

  export type DetalleAdicionalBebidaCreateOrConnectWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalBebidaWhereUniqueInput
    create: XOR<DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput, DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalBebidaCreateManyDetalleAdicionalInputEnvelope = {
    data: DetalleAdicionalBebidaCreateManyDetalleAdicionalInput | DetalleAdicionalBebidaCreateManyDetalleAdicionalInput[]
    skipDuplicates?: boolean
  }

  export type DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput = {
    Taper: TaperCreateNestedOneWithoutDetalleAdicionalTaperInput
  }

  export type DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput = {
    id?: number
    taperId: number
  }

  export type DetalleAdicionalTaperCreateOrConnectWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalTaperWhereUniqueInput
    create: XOR<DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput, DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalTaperCreateManyDetalleAdicionalInputEnvelope = {
    data: DetalleAdicionalTaperCreateManyDetalleAdicionalInput | DetalleAdicionalTaperCreateManyDetalleAdicionalInput[]
    skipDuplicates?: boolean
  }

  export type DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput = {
    Entrada: EntradaCreateNestedOneWithoutDetalleAdicionalEntradaInput
  }

  export type DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput = {
    id?: number
    entradaId: number
  }

  export type DetalleAdicionalEntradaCreateOrConnectWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalEntradaWhereUniqueInput
    create: XOR<DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput, DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalEntradaCreateManyDetalleAdicionalInputEnvelope = {
    data: DetalleAdicionalEntradaCreateManyDetalleAdicionalInput | DetalleAdicionalEntradaCreateManyDetalleAdicionalInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutDetalleAdicionalInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutDetalleAdicionalInput, PedidoUncheckedUpdateWithoutDetalleAdicionalInput>
    create: XOR<PedidoCreateWithoutDetalleAdicionalInput, PedidoUncheckedCreateWithoutDetalleAdicionalInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutDetalleAdicionalInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutDetalleAdicionalInput, PedidoUncheckedUpdateWithoutDetalleAdicionalInput>
  }

  export type PedidoUpdateManyWithWhereWithoutDetalleAdicionalInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalBebidaWhereUniqueInput
    update: XOR<DetalleAdicionalBebidaUpdateWithoutDetalleAdicionalInput, DetalleAdicionalBebidaUncheckedUpdateWithoutDetalleAdicionalInput>
    create: XOR<DetalleAdicionalBebidaCreateWithoutDetalleAdicionalInput, DetalleAdicionalBebidaUncheckedCreateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalBebidaWhereUniqueInput
    data: XOR<DetalleAdicionalBebidaUpdateWithoutDetalleAdicionalInput, DetalleAdicionalBebidaUncheckedUpdateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalBebidaUpdateManyWithWhereWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalBebidaScalarWhereInput
    data: XOR<DetalleAdicionalBebidaUpdateManyMutationInput, DetalleAdicionalBebidaUncheckedUpdateManyWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalBebidaScalarWhereInput = {
    AND?: DetalleAdicionalBebidaScalarWhereInput | DetalleAdicionalBebidaScalarWhereInput[]
    OR?: DetalleAdicionalBebidaScalarWhereInput[]
    NOT?: DetalleAdicionalBebidaScalarWhereInput | DetalleAdicionalBebidaScalarWhereInput[]
    id?: IntFilter<"DetalleAdicionalBebida"> | number
    bebidaId?: IntFilter<"DetalleAdicionalBebida"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalBebida"> | number
  }

  export type DetalleAdicionalTaperUpsertWithWhereUniqueWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalTaperWhereUniqueInput
    update: XOR<DetalleAdicionalTaperUpdateWithoutDetalleAdicionalInput, DetalleAdicionalTaperUncheckedUpdateWithoutDetalleAdicionalInput>
    create: XOR<DetalleAdicionalTaperCreateWithoutDetalleAdicionalInput, DetalleAdicionalTaperUncheckedCreateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalTaperUpdateWithWhereUniqueWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalTaperWhereUniqueInput
    data: XOR<DetalleAdicionalTaperUpdateWithoutDetalleAdicionalInput, DetalleAdicionalTaperUncheckedUpdateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalTaperUpdateManyWithWhereWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalTaperScalarWhereInput
    data: XOR<DetalleAdicionalTaperUpdateManyMutationInput, DetalleAdicionalTaperUncheckedUpdateManyWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalTaperScalarWhereInput = {
    AND?: DetalleAdicionalTaperScalarWhereInput | DetalleAdicionalTaperScalarWhereInput[]
    OR?: DetalleAdicionalTaperScalarWhereInput[]
    NOT?: DetalleAdicionalTaperScalarWhereInput | DetalleAdicionalTaperScalarWhereInput[]
    id?: IntFilter<"DetalleAdicionalTaper"> | number
    taperId?: IntFilter<"DetalleAdicionalTaper"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalTaper"> | number
  }

  export type DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalEntradaWhereUniqueInput
    update: XOR<DetalleAdicionalEntradaUpdateWithoutDetalleAdicionalInput, DetalleAdicionalEntradaUncheckedUpdateWithoutDetalleAdicionalInput>
    create: XOR<DetalleAdicionalEntradaCreateWithoutDetalleAdicionalInput, DetalleAdicionalEntradaUncheckedCreateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalEntradaWhereUniqueInput
    data: XOR<DetalleAdicionalEntradaUpdateWithoutDetalleAdicionalInput, DetalleAdicionalEntradaUncheckedUpdateWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalEntradaUpdateManyWithWhereWithoutDetalleAdicionalInput = {
    where: DetalleAdicionalEntradaScalarWhereInput
    data: XOR<DetalleAdicionalEntradaUpdateManyMutationInput, DetalleAdicionalEntradaUncheckedUpdateManyWithoutDetalleAdicionalInput>
  }

  export type DetalleAdicionalEntradaScalarWhereInput = {
    AND?: DetalleAdicionalEntradaScalarWhereInput | DetalleAdicionalEntradaScalarWhereInput[]
    OR?: DetalleAdicionalEntradaScalarWhereInput[]
    NOT?: DetalleAdicionalEntradaScalarWhereInput | DetalleAdicionalEntradaScalarWhereInput[]
    id?: IntFilter<"DetalleAdicionalEntrada"> | number
    entradaId?: IntFilter<"DetalleAdicionalEntrada"> | number
    detalleAdicionalId?: IntFilter<"DetalleAdicionalEntrada"> | number
  }

  export type BebidaCreateWithoutDetalleAdicionalBebidaInput = {
    presentacion?: $Enums.PresentacionBebida
    precio: number
    TipoBebida: TipoBebidaCreateNestedOneWithoutBebidaInput
  }

  export type BebidaUncheckedCreateWithoutDetalleAdicionalBebidaInput = {
    id?: number
    presentacion?: $Enums.PresentacionBebida
    precio: number
    tipoBebidaId: number
  }

  export type BebidaCreateOrConnectWithoutDetalleAdicionalBebidaInput = {
    where: BebidaWhereUniqueInput
    create: XOR<BebidaCreateWithoutDetalleAdicionalBebidaInput, BebidaUncheckedCreateWithoutDetalleAdicionalBebidaInput>
  }

  export type DetalleAdicionalCreateWithoutDetalleAdicionalBebidaInput = {
    Pedido?: PedidoCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalBebidaInput = {
    id?: number
    Pedido?: PedidoUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalBebidaInput = {
    where: DetalleAdicionalWhereUniqueInput
    create: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalBebidaInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalBebidaInput>
  }

  export type BebidaUpsertWithoutDetalleAdicionalBebidaInput = {
    update: XOR<BebidaUpdateWithoutDetalleAdicionalBebidaInput, BebidaUncheckedUpdateWithoutDetalleAdicionalBebidaInput>
    create: XOR<BebidaCreateWithoutDetalleAdicionalBebidaInput, BebidaUncheckedCreateWithoutDetalleAdicionalBebidaInput>
    where?: BebidaWhereInput
  }

  export type BebidaUpdateToOneWithWhereWithoutDetalleAdicionalBebidaInput = {
    where?: BebidaWhereInput
    data: XOR<BebidaUpdateWithoutDetalleAdicionalBebidaInput, BebidaUncheckedUpdateWithoutDetalleAdicionalBebidaInput>
  }

  export type BebidaUpdateWithoutDetalleAdicionalBebidaInput = {
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
    TipoBebida?: TipoBebidaUpdateOneRequiredWithoutBebidaNestedInput
  }

  export type BebidaUncheckedUpdateWithoutDetalleAdicionalBebidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
    tipoBebidaId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalUpsertWithoutDetalleAdicionalBebidaInput = {
    update: XOR<DetalleAdicionalUpdateWithoutDetalleAdicionalBebidaInput, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalBebidaInput>
    create: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalBebidaInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalBebidaInput>
    where?: DetalleAdicionalWhereInput
  }

  export type DetalleAdicionalUpdateToOneWithWhereWithoutDetalleAdicionalBebidaInput = {
    where?: DetalleAdicionalWhereInput
    data: XOR<DetalleAdicionalUpdateWithoutDetalleAdicionalBebidaInput, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalBebidaInput>
  }

  export type DetalleAdicionalUpdateWithoutDetalleAdicionalBebidaInput = {
    Pedido?: PedidoUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalBebidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type TipoBebidaCreateWithoutBebidaInput = {
    nombre: $Enums.TipoBebidaList
  }

  export type TipoBebidaUncheckedCreateWithoutBebidaInput = {
    id?: number
    nombre: $Enums.TipoBebidaList
  }

  export type TipoBebidaCreateOrConnectWithoutBebidaInput = {
    where: TipoBebidaWhereUniqueInput
    create: XOR<TipoBebidaCreateWithoutBebidaInput, TipoBebidaUncheckedCreateWithoutBebidaInput>
  }

  export type DetalleAdicionalBebidaCreateWithoutBebidaInput = {
    DetalleAdicional: DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalBebidaInput
  }

  export type DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput = {
    id?: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalBebidaCreateOrConnectWithoutBebidaInput = {
    where: DetalleAdicionalBebidaWhereUniqueInput
    create: XOR<DetalleAdicionalBebidaCreateWithoutBebidaInput, DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput>
  }

  export type DetalleAdicionalBebidaCreateManyBebidaInputEnvelope = {
    data: DetalleAdicionalBebidaCreateManyBebidaInput | DetalleAdicionalBebidaCreateManyBebidaInput[]
    skipDuplicates?: boolean
  }

  export type TipoBebidaUpsertWithoutBebidaInput = {
    update: XOR<TipoBebidaUpdateWithoutBebidaInput, TipoBebidaUncheckedUpdateWithoutBebidaInput>
    create: XOR<TipoBebidaCreateWithoutBebidaInput, TipoBebidaUncheckedCreateWithoutBebidaInput>
    where?: TipoBebidaWhereInput
  }

  export type TipoBebidaUpdateToOneWithWhereWithoutBebidaInput = {
    where?: TipoBebidaWhereInput
    data: XOR<TipoBebidaUpdateWithoutBebidaInput, TipoBebidaUncheckedUpdateWithoutBebidaInput>
  }

  export type TipoBebidaUpdateWithoutBebidaInput = {
    nombre?: EnumTipoBebidaListFieldUpdateOperationsInput | $Enums.TipoBebidaList
  }

  export type TipoBebidaUncheckedUpdateWithoutBebidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumTipoBebidaListFieldUpdateOperationsInput | $Enums.TipoBebidaList
  }

  export type DetalleAdicionalBebidaUpsertWithWhereUniqueWithoutBebidaInput = {
    where: DetalleAdicionalBebidaWhereUniqueInput
    update: XOR<DetalleAdicionalBebidaUpdateWithoutBebidaInput, DetalleAdicionalBebidaUncheckedUpdateWithoutBebidaInput>
    create: XOR<DetalleAdicionalBebidaCreateWithoutBebidaInput, DetalleAdicionalBebidaUncheckedCreateWithoutBebidaInput>
  }

  export type DetalleAdicionalBebidaUpdateWithWhereUniqueWithoutBebidaInput = {
    where: DetalleAdicionalBebidaWhereUniqueInput
    data: XOR<DetalleAdicionalBebidaUpdateWithoutBebidaInput, DetalleAdicionalBebidaUncheckedUpdateWithoutBebidaInput>
  }

  export type DetalleAdicionalBebidaUpdateManyWithWhereWithoutBebidaInput = {
    where: DetalleAdicionalBebidaScalarWhereInput
    data: XOR<DetalleAdicionalBebidaUpdateManyMutationInput, DetalleAdicionalBebidaUncheckedUpdateManyWithoutBebidaInput>
  }

  export type BebidaCreateWithoutTipoBebidaInput = {
    presentacion?: $Enums.PresentacionBebida
    precio: number
    DetalleAdicionalBebida?: DetalleAdicionalBebidaCreateNestedManyWithoutBebidaInput
  }

  export type BebidaUncheckedCreateWithoutTipoBebidaInput = {
    id?: number
    presentacion?: $Enums.PresentacionBebida
    precio: number
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedCreateNestedManyWithoutBebidaInput
  }

  export type BebidaCreateOrConnectWithoutTipoBebidaInput = {
    where: BebidaWhereUniqueInput
    create: XOR<BebidaCreateWithoutTipoBebidaInput, BebidaUncheckedCreateWithoutTipoBebidaInput>
  }

  export type BebidaCreateManyTipoBebidaInputEnvelope = {
    data: BebidaCreateManyTipoBebidaInput | BebidaCreateManyTipoBebidaInput[]
    skipDuplicates?: boolean
  }

  export type BebidaUpsertWithWhereUniqueWithoutTipoBebidaInput = {
    where: BebidaWhereUniqueInput
    update: XOR<BebidaUpdateWithoutTipoBebidaInput, BebidaUncheckedUpdateWithoutTipoBebidaInput>
    create: XOR<BebidaCreateWithoutTipoBebidaInput, BebidaUncheckedCreateWithoutTipoBebidaInput>
  }

  export type BebidaUpdateWithWhereUniqueWithoutTipoBebidaInput = {
    where: BebidaWhereUniqueInput
    data: XOR<BebidaUpdateWithoutTipoBebidaInput, BebidaUncheckedUpdateWithoutTipoBebidaInput>
  }

  export type BebidaUpdateManyWithWhereWithoutTipoBebidaInput = {
    where: BebidaScalarWhereInput
    data: XOR<BebidaUpdateManyMutationInput, BebidaUncheckedUpdateManyWithoutTipoBebidaInput>
  }

  export type BebidaScalarWhereInput = {
    AND?: BebidaScalarWhereInput | BebidaScalarWhereInput[]
    OR?: BebidaScalarWhereInput[]
    NOT?: BebidaScalarWhereInput | BebidaScalarWhereInput[]
    id?: IntFilter<"Bebida"> | number
    presentacion?: EnumPresentacionBebidaFilter<"Bebida"> | $Enums.PresentacionBebida
    precio?: FloatFilter<"Bebida"> | number
    tipoBebidaId?: IntFilter<"Bebida"> | number
  }

  export type TaperCreateWithoutDetalleAdicionalTaperInput = {
    presentacion?: $Enums.PresentacionTaper
    precio: number
  }

  export type TaperUncheckedCreateWithoutDetalleAdicionalTaperInput = {
    id?: number
    presentacion?: $Enums.PresentacionTaper
    precio: number
  }

  export type TaperCreateOrConnectWithoutDetalleAdicionalTaperInput = {
    where: TaperWhereUniqueInput
    create: XOR<TaperCreateWithoutDetalleAdicionalTaperInput, TaperUncheckedCreateWithoutDetalleAdicionalTaperInput>
  }

  export type DetalleAdicionalCreateWithoutDetalleAdicionalTaperInput = {
    Pedido?: PedidoCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalTaperInput = {
    id?: number
    Pedido?: PedidoUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalTaperInput = {
    where: DetalleAdicionalWhereUniqueInput
    create: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalTaperInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalTaperInput>
  }

  export type TaperUpsertWithoutDetalleAdicionalTaperInput = {
    update: XOR<TaperUpdateWithoutDetalleAdicionalTaperInput, TaperUncheckedUpdateWithoutDetalleAdicionalTaperInput>
    create: XOR<TaperCreateWithoutDetalleAdicionalTaperInput, TaperUncheckedCreateWithoutDetalleAdicionalTaperInput>
    where?: TaperWhereInput
  }

  export type TaperUpdateToOneWithWhereWithoutDetalleAdicionalTaperInput = {
    where?: TaperWhereInput
    data: XOR<TaperUpdateWithoutDetalleAdicionalTaperInput, TaperUncheckedUpdateWithoutDetalleAdicionalTaperInput>
  }

  export type TaperUpdateWithoutDetalleAdicionalTaperInput = {
    presentacion?: EnumPresentacionTaperFieldUpdateOperationsInput | $Enums.PresentacionTaper
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type TaperUncheckedUpdateWithoutDetalleAdicionalTaperInput = {
    id?: IntFieldUpdateOperationsInput | number
    presentacion?: EnumPresentacionTaperFieldUpdateOperationsInput | $Enums.PresentacionTaper
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalUpsertWithoutDetalleAdicionalTaperInput = {
    update: XOR<DetalleAdicionalUpdateWithoutDetalleAdicionalTaperInput, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalTaperInput>
    create: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalTaperInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalTaperInput>
    where?: DetalleAdicionalWhereInput
  }

  export type DetalleAdicionalUpdateToOneWithWhereWithoutDetalleAdicionalTaperInput = {
    where?: DetalleAdicionalWhereInput
    data: XOR<DetalleAdicionalUpdateWithoutDetalleAdicionalTaperInput, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalTaperInput>
  }

  export type DetalleAdicionalUpdateWithoutDetalleAdicionalTaperInput = {
    Pedido?: PedidoUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalTaperInput = {
    id?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalEntrada?: DetalleAdicionalEntradaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type DetalleAdicionalTaperCreateWithoutTaperInput = {
    DetalleAdicional: DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalTaperInput
  }

  export type DetalleAdicionalTaperUncheckedCreateWithoutTaperInput = {
    id?: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalTaperCreateOrConnectWithoutTaperInput = {
    where: DetalleAdicionalTaperWhereUniqueInput
    create: XOR<DetalleAdicionalTaperCreateWithoutTaperInput, DetalleAdicionalTaperUncheckedCreateWithoutTaperInput>
  }

  export type DetalleAdicionalTaperCreateManyTaperInputEnvelope = {
    data: DetalleAdicionalTaperCreateManyTaperInput | DetalleAdicionalTaperCreateManyTaperInput[]
    skipDuplicates?: boolean
  }

  export type DetalleAdicionalTaperUpsertWithWhereUniqueWithoutTaperInput = {
    where: DetalleAdicionalTaperWhereUniqueInput
    update: XOR<DetalleAdicionalTaperUpdateWithoutTaperInput, DetalleAdicionalTaperUncheckedUpdateWithoutTaperInput>
    create: XOR<DetalleAdicionalTaperCreateWithoutTaperInput, DetalleAdicionalTaperUncheckedCreateWithoutTaperInput>
  }

  export type DetalleAdicionalTaperUpdateWithWhereUniqueWithoutTaperInput = {
    where: DetalleAdicionalTaperWhereUniqueInput
    data: XOR<DetalleAdicionalTaperUpdateWithoutTaperInput, DetalleAdicionalTaperUncheckedUpdateWithoutTaperInput>
  }

  export type DetalleAdicionalTaperUpdateManyWithWhereWithoutTaperInput = {
    where: DetalleAdicionalTaperScalarWhereInput
    data: XOR<DetalleAdicionalTaperUpdateManyMutationInput, DetalleAdicionalTaperUncheckedUpdateManyWithoutTaperInput>
  }

  export type EntradaCreateWithoutDetalleAdicionalEntradaInput = {
    precio: number
  }

  export type EntradaUncheckedCreateWithoutDetalleAdicionalEntradaInput = {
    id?: number
    precio: number
  }

  export type EntradaCreateOrConnectWithoutDetalleAdicionalEntradaInput = {
    where: EntradaWhereUniqueInput
    create: XOR<EntradaCreateWithoutDetalleAdicionalEntradaInput, EntradaUncheckedCreateWithoutDetalleAdicionalEntradaInput>
  }

  export type DetalleAdicionalCreateWithoutDetalleAdicionalEntradaInput = {
    Pedido?: PedidoCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalEntradaInput = {
    id?: number
    Pedido?: PedidoUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedCreateNestedManyWithoutDetalleAdicionalInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedCreateNestedManyWithoutDetalleAdicionalInput
  }

  export type DetalleAdicionalCreateOrConnectWithoutDetalleAdicionalEntradaInput = {
    where: DetalleAdicionalWhereUniqueInput
    create: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalEntradaInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalEntradaInput>
  }

  export type EntradaUpsertWithoutDetalleAdicionalEntradaInput = {
    update: XOR<EntradaUpdateWithoutDetalleAdicionalEntradaInput, EntradaUncheckedUpdateWithoutDetalleAdicionalEntradaInput>
    create: XOR<EntradaCreateWithoutDetalleAdicionalEntradaInput, EntradaUncheckedCreateWithoutDetalleAdicionalEntradaInput>
    where?: EntradaWhereInput
  }

  export type EntradaUpdateToOneWithWhereWithoutDetalleAdicionalEntradaInput = {
    where?: EntradaWhereInput
    data: XOR<EntradaUpdateWithoutDetalleAdicionalEntradaInput, EntradaUncheckedUpdateWithoutDetalleAdicionalEntradaInput>
  }

  export type EntradaUpdateWithoutDetalleAdicionalEntradaInput = {
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type EntradaUncheckedUpdateWithoutDetalleAdicionalEntradaInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalUpsertWithoutDetalleAdicionalEntradaInput = {
    update: XOR<DetalleAdicionalUpdateWithoutDetalleAdicionalEntradaInput, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalEntradaInput>
    create: XOR<DetalleAdicionalCreateWithoutDetalleAdicionalEntradaInput, DetalleAdicionalUncheckedCreateWithoutDetalleAdicionalEntradaInput>
    where?: DetalleAdicionalWhereInput
  }

  export type DetalleAdicionalUpdateToOneWithWhereWithoutDetalleAdicionalEntradaInput = {
    where?: DetalleAdicionalWhereInput
    data: XOR<DetalleAdicionalUpdateWithoutDetalleAdicionalEntradaInput, DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalEntradaInput>
  }

  export type DetalleAdicionalUpdateWithoutDetalleAdicionalEntradaInput = {
    Pedido?: PedidoUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type DetalleAdicionalUncheckedUpdateWithoutDetalleAdicionalEntradaInput = {
    id?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
    DetalleAdicionalTaper?: DetalleAdicionalTaperUncheckedUpdateManyWithoutDetalleAdicionalNestedInput
  }

  export type DetalleAdicionalEntradaCreateWithoutEntradaInput = {
    DetalleAdicional: DetalleAdicionalCreateNestedOneWithoutDetalleAdicionalEntradaInput
  }

  export type DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput = {
    id?: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalEntradaCreateOrConnectWithoutEntradaInput = {
    where: DetalleAdicionalEntradaWhereUniqueInput
    create: XOR<DetalleAdicionalEntradaCreateWithoutEntradaInput, DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput>
  }

  export type DetalleAdicionalEntradaCreateManyEntradaInputEnvelope = {
    data: DetalleAdicionalEntradaCreateManyEntradaInput | DetalleAdicionalEntradaCreateManyEntradaInput[]
    skipDuplicates?: boolean
  }

  export type DetalleAdicionalEntradaUpsertWithWhereUniqueWithoutEntradaInput = {
    where: DetalleAdicionalEntradaWhereUniqueInput
    update: XOR<DetalleAdicionalEntradaUpdateWithoutEntradaInput, DetalleAdicionalEntradaUncheckedUpdateWithoutEntradaInput>
    create: XOR<DetalleAdicionalEntradaCreateWithoutEntradaInput, DetalleAdicionalEntradaUncheckedCreateWithoutEntradaInput>
  }

  export type DetalleAdicionalEntradaUpdateWithWhereUniqueWithoutEntradaInput = {
    where: DetalleAdicionalEntradaWhereUniqueInput
    data: XOR<DetalleAdicionalEntradaUpdateWithoutEntradaInput, DetalleAdicionalEntradaUncheckedUpdateWithoutEntradaInput>
  }

  export type DetalleAdicionalEntradaUpdateManyWithWhereWithoutEntradaInput = {
    where: DetalleAdicionalEntradaScalarWhereInput
    data: XOR<DetalleAdicionalEntradaUpdateManyMutationInput, DetalleAdicionalEntradaUncheckedUpdateManyWithoutEntradaInput>
  }

  export type PedidoCreateManyClienteInput = {
    id?: number
    fecha: Date | string
    total: number
    mesaId: number
    comprobanteId: number
    detalleAdicionalId?: number | null
  }

  export type PedidoUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    Mesa?: MesaUpdateOneRequiredWithoutPedidoNestedInput
    Comprobante?: ComprobanteUpdateOneRequiredWithoutPedidoNestedInput
    DetalleAdicional?: DetalleAdicionalUpdateOneWithoutPedidoNestedInput
    PedidoItem?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
    PedidoItem?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoCreateManyMesaInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    comprobanteId: number
    detalleAdicionalId?: number | null
  }

  export type PedidoUpdateWithoutMesaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    Cliente?: ClienteUpdateOneWithoutPedidoNestedInput
    Comprobante?: ComprobanteUpdateOneRequiredWithoutPedidoNestedInput
    DetalleAdicional?: DetalleAdicionalUpdateOneWithoutPedidoNestedInput
    PedidoItem?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutMesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
    PedidoItem?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutMesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlatoCreateManyCartaInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
  }

  export type PlatoUpdateWithoutCartaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    PedidoItem?: PedidoItemUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateWithoutCartaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    PedidoItem?: PedidoItemUncheckedUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateManyWithoutCartaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type PedidoItemCreateManyPlatoInput = {
    id?: number
    cantidad: number
    pedidoId: number
  }

  export type PedidoItemUpdateWithoutPlatoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUpdateOneRequiredWithoutPedidoItemNestedInput
  }

  export type PedidoItemUncheckedUpdateWithoutPlatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoItemUncheckedUpdateManyWithoutPlatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ComprobanteCreateManyTipoPagoInput = {
    id?: number
    tipoComprobante?: $Enums.TipoComprobante
    numero: number
    fechaEmision?: Date | string
  }

  export type ComprobanteUpdateWithoutTipoPagoInput = {
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUpdateManyWithoutComprobanteNestedInput
  }

  export type ComprobanteUncheckedUpdateWithoutTipoPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUncheckedUpdateManyWithoutComprobanteNestedInput
  }

  export type ComprobanteUncheckedUpdateManyWithoutTipoPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoComprobante?: EnumTipoComprobanteFieldUpdateOperationsInput | $Enums.TipoComprobante
    numero?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateManyComprobanteInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    mesaId: number
    detalleAdicionalId?: number | null
  }

  export type PedidoUpdateWithoutComprobanteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    Cliente?: ClienteUpdateOneWithoutPedidoNestedInput
    Mesa?: MesaUpdateOneRequiredWithoutPedidoNestedInput
    DetalleAdicional?: DetalleAdicionalUpdateOneWithoutPedidoNestedInput
    PedidoItem?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutComprobanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
    PedidoItem?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutComprobanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoItemCreateManyPedidoInput = {
    id?: number
    cantidad: number
    platoId: number
  }

  export type PedidoItemUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    Plato?: PlatoUpdateOneRequiredWithoutPedidoItemNestedInput
  }

  export type PedidoItemUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    platoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoItemUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    platoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateManyDetalleAdicionalInput = {
    id?: number
    fecha: Date | string
    total: number
    clienteId: number
    mesaId: number
    comprobanteId: number
  }

  export type DetalleAdicionalBebidaCreateManyDetalleAdicionalInput = {
    id?: number
    bebidaId: number
  }

  export type DetalleAdicionalTaperCreateManyDetalleAdicionalInput = {
    id?: number
    taperId: number
  }

  export type DetalleAdicionalEntradaCreateManyDetalleAdicionalInput = {
    id?: number
    entradaId: number
  }

  export type PedidoUpdateWithoutDetalleAdicionalInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    Cliente?: ClienteUpdateOneWithoutPedidoNestedInput
    Mesa?: MesaUpdateOneRequiredWithoutPedidoNestedInput
    Comprobante?: ComprobanteUpdateOneRequiredWithoutPedidoNestedInput
    PedidoItem?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutDetalleAdicionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
    PedidoItem?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutDetalleAdicionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    mesaId?: IntFieldUpdateOperationsInput | number
    comprobanteId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalBebidaUpdateWithoutDetalleAdicionalInput = {
    Bebida?: BebidaUpdateOneRequiredWithoutDetalleAdicionalBebidaNestedInput
  }

  export type DetalleAdicionalBebidaUncheckedUpdateWithoutDetalleAdicionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    bebidaId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalBebidaUncheckedUpdateManyWithoutDetalleAdicionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    bebidaId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalTaperUpdateWithoutDetalleAdicionalInput = {
    Taper?: TaperUpdateOneRequiredWithoutDetalleAdicionalTaperNestedInput
  }

  export type DetalleAdicionalTaperUncheckedUpdateWithoutDetalleAdicionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    taperId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalTaperUncheckedUpdateManyWithoutDetalleAdicionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    taperId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalEntradaUpdateWithoutDetalleAdicionalInput = {
    Entrada?: EntradaUpdateOneRequiredWithoutDetalleAdicionalEntradaNestedInput
  }

  export type DetalleAdicionalEntradaUncheckedUpdateWithoutDetalleAdicionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    entradaId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalEntradaUncheckedUpdateManyWithoutDetalleAdicionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    entradaId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalBebidaCreateManyBebidaInput = {
    id?: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalBebidaUpdateWithoutBebidaInput = {
    DetalleAdicional?: DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalBebidaNestedInput
  }

  export type DetalleAdicionalBebidaUncheckedUpdateWithoutBebidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalBebidaUncheckedUpdateManyWithoutBebidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type BebidaCreateManyTipoBebidaInput = {
    id?: number
    presentacion?: $Enums.PresentacionBebida
    precio: number
  }

  export type BebidaUpdateWithoutTipoBebidaInput = {
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUpdateManyWithoutBebidaNestedInput
  }

  export type BebidaUncheckedUpdateWithoutTipoBebidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
    DetalleAdicionalBebida?: DetalleAdicionalBebidaUncheckedUpdateManyWithoutBebidaNestedInput
  }

  export type BebidaUncheckedUpdateManyWithoutTipoBebidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    presentacion?: EnumPresentacionBebidaFieldUpdateOperationsInput | $Enums.PresentacionBebida
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalTaperCreateManyTaperInput = {
    id?: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalTaperUpdateWithoutTaperInput = {
    DetalleAdicional?: DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalTaperNestedInput
  }

  export type DetalleAdicionalTaperUncheckedUpdateWithoutTaperInput = {
    id?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalTaperUncheckedUpdateManyWithoutTaperInput = {
    id?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalEntradaCreateManyEntradaInput = {
    id?: number
    detalleAdicionalId: number
  }

  export type DetalleAdicionalEntradaUpdateWithoutEntradaInput = {
    DetalleAdicional?: DetalleAdicionalUpdateOneRequiredWithoutDetalleAdicionalEntradaNestedInput
  }

  export type DetalleAdicionalEntradaUncheckedUpdateWithoutEntradaInput = {
    id?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleAdicionalEntradaUncheckedUpdateManyWithoutEntradaInput = {
    id?: IntFieldUpdateOperationsInput | number
    detalleAdicionalId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}