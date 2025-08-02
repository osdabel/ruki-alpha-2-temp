
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
 * Model Angket
 * 
 */
export type Angket = $Result.DefaultSelection<Prisma.$AngketPayload>
/**
 * Model Angketxi
 * 
 */
export type Angketxi = $Result.DefaultSelection<Prisma.$AngketxiPayload>
/**
 * Model Angketxii
 * 
 */
export type Angketxii = $Result.DefaultSelection<Prisma.$AngketxiiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Angkets
 * const angkets = await prisma.angket.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Angkets
   * const angkets = await prisma.angket.findMany()
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
   * `prisma.angket`: Exposes CRUD operations for the **Angket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Angkets
    * const angkets = await prisma.angket.findMany()
    * ```
    */
  get angket(): Prisma.AngketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.angketxi`: Exposes CRUD operations for the **Angketxi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Angketxis
    * const angketxis = await prisma.angketxi.findMany()
    * ```
    */
  get angketxi(): Prisma.AngketxiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.angketxii`: Exposes CRUD operations for the **Angketxii** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Angketxiis
    * const angketxiis = await prisma.angketxii.findMany()
    * ```
    */
  get angketxii(): Prisma.AngketxiiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Angket: 'Angket',
    Angketxi: 'Angketxi',
    Angketxii: 'Angketxii'
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
      modelProps: "angket" | "angketxi" | "angketxii"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Angket: {
        payload: Prisma.$AngketPayload<ExtArgs>
        fields: Prisma.AngketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AngketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AngketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>
          }
          findFirst: {
            args: Prisma.AngketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AngketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>
          }
          findMany: {
            args: Prisma.AngketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>[]
          }
          create: {
            args: Prisma.AngketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>
          }
          createMany: {
            args: Prisma.AngketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AngketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>[]
          }
          delete: {
            args: Prisma.AngketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>
          }
          update: {
            args: Prisma.AngketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>
          }
          deleteMany: {
            args: Prisma.AngketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AngketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AngketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>[]
          }
          upsert: {
            args: Prisma.AngketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketPayload>
          }
          aggregate: {
            args: Prisma.AngketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAngket>
          }
          groupBy: {
            args: Prisma.AngketGroupByArgs<ExtArgs>
            result: $Utils.Optional<AngketGroupByOutputType>[]
          }
          count: {
            args: Prisma.AngketCountArgs<ExtArgs>
            result: $Utils.Optional<AngketCountAggregateOutputType> | number
          }
        }
      }
      Angketxi: {
        payload: Prisma.$AngketxiPayload<ExtArgs>
        fields: Prisma.AngketxiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AngketxiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AngketxiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>
          }
          findFirst: {
            args: Prisma.AngketxiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AngketxiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>
          }
          findMany: {
            args: Prisma.AngketxiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>[]
          }
          create: {
            args: Prisma.AngketxiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>
          }
          createMany: {
            args: Prisma.AngketxiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AngketxiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>[]
          }
          delete: {
            args: Prisma.AngketxiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>
          }
          update: {
            args: Prisma.AngketxiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>
          }
          deleteMany: {
            args: Prisma.AngketxiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AngketxiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AngketxiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>[]
          }
          upsert: {
            args: Prisma.AngketxiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiPayload>
          }
          aggregate: {
            args: Prisma.AngketxiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAngketxi>
          }
          groupBy: {
            args: Prisma.AngketxiGroupByArgs<ExtArgs>
            result: $Utils.Optional<AngketxiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AngketxiCountArgs<ExtArgs>
            result: $Utils.Optional<AngketxiCountAggregateOutputType> | number
          }
        }
      }
      Angketxii: {
        payload: Prisma.$AngketxiiPayload<ExtArgs>
        fields: Prisma.AngketxiiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AngketxiiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AngketxiiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>
          }
          findFirst: {
            args: Prisma.AngketxiiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AngketxiiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>
          }
          findMany: {
            args: Prisma.AngketxiiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>[]
          }
          create: {
            args: Prisma.AngketxiiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>
          }
          createMany: {
            args: Prisma.AngketxiiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AngketxiiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>[]
          }
          delete: {
            args: Prisma.AngketxiiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>
          }
          update: {
            args: Prisma.AngketxiiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>
          }
          deleteMany: {
            args: Prisma.AngketxiiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AngketxiiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AngketxiiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>[]
          }
          upsert: {
            args: Prisma.AngketxiiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AngketxiiPayload>
          }
          aggregate: {
            args: Prisma.AngketxiiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAngketxii>
          }
          groupBy: {
            args: Prisma.AngketxiiGroupByArgs<ExtArgs>
            result: $Utils.Optional<AngketxiiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AngketxiiCountArgs<ExtArgs>
            result: $Utils.Optional<AngketxiiCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    angket?: AngketOmit
    angketxi?: AngketxiOmit
    angketxii?: AngketxiiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model Angket
   */

  export type AggregateAngket = {
    _count: AngketCountAggregateOutputType | null
    _min: AngketMinAggregateOutputType | null
    _max: AngketMaxAggregateOutputType | null
  }

  export type AngketMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    q1: string | null
    q2: string | null
    q3: string | null
    q4: string | null
    q5: string | null
    q6: string | null
    q7: string | null
    q8: string | null
    q9: string | null
    q10: string | null
    q11: string | null
    q12: string | null
    q13: string | null
    q14: string | null
    q15: string | null
    q16: string | null
    q17: string | null
    q18: string | null
    q19: string | null
    q20: string | null
    q21: string | null
    q22: string | null
    q23: string | null
    q24: string | null
    q25: string | null
    q26: string | null
    q27: string | null
    q28: string | null
    q29: string | null
    q30: string | null
    q31: string | null
    q32: string | null
    q33: string | null
    q34: string | null
  }

  export type AngketMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    q1: string | null
    q2: string | null
    q3: string | null
    q4: string | null
    q5: string | null
    q6: string | null
    q7: string | null
    q8: string | null
    q9: string | null
    q10: string | null
    q11: string | null
    q12: string | null
    q13: string | null
    q14: string | null
    q15: string | null
    q16: string | null
    q17: string | null
    q18: string | null
    q19: string | null
    q20: string | null
    q21: string | null
    q22: string | null
    q23: string | null
    q24: string | null
    q25: string | null
    q26: string | null
    q27: string | null
    q28: string | null
    q29: string | null
    q30: string | null
    q31: string | null
    q32: string | null
    q33: string | null
    q34: string | null
  }

  export type AngketCountAggregateOutputType = {
    id: number
    createdAt: number
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    q8: number
    q9: number
    q10: number
    q11: number
    q12: number
    q13: number
    q14: number
    q15: number
    q16: number
    q17: number
    q18: number
    q19: number
    q20: number
    q21: number
    q22: number
    q23: number
    q24: number
    q25: number
    q26: number
    q27: number
    q28: number
    q29: number
    q30: number
    q31: number
    q32: number
    q33: number
    q34: number
    _all: number
  }


  export type AngketMinAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
  }

  export type AngketMaxAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
  }

  export type AngketCountAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
    _all?: true
  }

  export type AngketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Angket to aggregate.
     */
    where?: AngketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angkets to fetch.
     */
    orderBy?: AngketOrderByWithRelationInput | AngketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AngketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Angkets
    **/
    _count?: true | AngketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AngketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AngketMaxAggregateInputType
  }

  export type GetAngketAggregateType<T extends AngketAggregateArgs> = {
        [P in keyof T & keyof AggregateAngket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAngket[P]>
      : GetScalarType<T[P], AggregateAngket[P]>
  }




  export type AngketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AngketWhereInput
    orderBy?: AngketOrderByWithAggregationInput | AngketOrderByWithAggregationInput[]
    by: AngketScalarFieldEnum[] | AngketScalarFieldEnum
    having?: AngketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AngketCountAggregateInputType | true
    _min?: AngketMinAggregateInputType
    _max?: AngketMaxAggregateInputType
  }

  export type AngketGroupByOutputType = {
    id: string
    createdAt: Date
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
    _count: AngketCountAggregateOutputType | null
    _min: AngketMinAggregateOutputType | null
    _max: AngketMaxAggregateOutputType | null
  }

  type GetAngketGroupByPayload<T extends AngketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AngketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AngketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AngketGroupByOutputType[P]>
            : GetScalarType<T[P], AngketGroupByOutputType[P]>
        }
      >
    >


  export type AngketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angket"]>

  export type AngketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angket"]>

  export type AngketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angket"]>

  export type AngketSelectScalar = {
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }

  export type AngketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7" | "q8" | "q9" | "q10" | "q11" | "q12" | "q13" | "q14" | "q15" | "q16" | "q17" | "q18" | "q19" | "q20" | "q21" | "q22" | "q23" | "q24" | "q25" | "q26" | "q27" | "q28" | "q29" | "q30" | "q31" | "q32" | "q33" | "q34", ExtArgs["result"]["angket"]>

  export type $AngketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Angket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      q1: string
      q2: string
      q3: string
      q4: string
      q5: string
      q6: string
      q7: string
      q8: string
      q9: string
      q10: string
      q11: string
      q12: string
      q13: string
      q14: string
      q15: string
      q16: string
      q17: string
      q18: string
      q19: string
      q20: string
      q21: string
      q22: string
      q23: string
      q24: string
      q25: string
      q26: string
      q27: string
      q28: string
      q29: string
      q30: string
      q31: string
      q32: string
      q33: string
      q34: string
    }, ExtArgs["result"]["angket"]>
    composites: {}
  }

  type AngketGetPayload<S extends boolean | null | undefined | AngketDefaultArgs> = $Result.GetResult<Prisma.$AngketPayload, S>

  type AngketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AngketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AngketCountAggregateInputType | true
    }

  export interface AngketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Angket'], meta: { name: 'Angket' } }
    /**
     * Find zero or one Angket that matches the filter.
     * @param {AngketFindUniqueArgs} args - Arguments to find a Angket
     * @example
     * // Get one Angket
     * const angket = await prisma.angket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AngketFindUniqueArgs>(args: SelectSubset<T, AngketFindUniqueArgs<ExtArgs>>): Prisma__AngketClient<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Angket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AngketFindUniqueOrThrowArgs} args - Arguments to find a Angket
     * @example
     * // Get one Angket
     * const angket = await prisma.angket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AngketFindUniqueOrThrowArgs>(args: SelectSubset<T, AngketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AngketClient<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Angket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketFindFirstArgs} args - Arguments to find a Angket
     * @example
     * // Get one Angket
     * const angket = await prisma.angket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AngketFindFirstArgs>(args?: SelectSubset<T, AngketFindFirstArgs<ExtArgs>>): Prisma__AngketClient<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Angket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketFindFirstOrThrowArgs} args - Arguments to find a Angket
     * @example
     * // Get one Angket
     * const angket = await prisma.angket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AngketFindFirstOrThrowArgs>(args?: SelectSubset<T, AngketFindFirstOrThrowArgs<ExtArgs>>): Prisma__AngketClient<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Angkets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Angkets
     * const angkets = await prisma.angket.findMany()
     * 
     * // Get first 10 Angkets
     * const angkets = await prisma.angket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const angketWithIdOnly = await prisma.angket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AngketFindManyArgs>(args?: SelectSubset<T, AngketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Angket.
     * @param {AngketCreateArgs} args - Arguments to create a Angket.
     * @example
     * // Create one Angket
     * const Angket = await prisma.angket.create({
     *   data: {
     *     // ... data to create a Angket
     *   }
     * })
     * 
     */
    create<T extends AngketCreateArgs>(args: SelectSubset<T, AngketCreateArgs<ExtArgs>>): Prisma__AngketClient<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Angkets.
     * @param {AngketCreateManyArgs} args - Arguments to create many Angkets.
     * @example
     * // Create many Angkets
     * const angket = await prisma.angket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AngketCreateManyArgs>(args?: SelectSubset<T, AngketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Angkets and returns the data saved in the database.
     * @param {AngketCreateManyAndReturnArgs} args - Arguments to create many Angkets.
     * @example
     * // Create many Angkets
     * const angket = await prisma.angket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Angkets and only return the `id`
     * const angketWithIdOnly = await prisma.angket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AngketCreateManyAndReturnArgs>(args?: SelectSubset<T, AngketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Angket.
     * @param {AngketDeleteArgs} args - Arguments to delete one Angket.
     * @example
     * // Delete one Angket
     * const Angket = await prisma.angket.delete({
     *   where: {
     *     // ... filter to delete one Angket
     *   }
     * })
     * 
     */
    delete<T extends AngketDeleteArgs>(args: SelectSubset<T, AngketDeleteArgs<ExtArgs>>): Prisma__AngketClient<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Angket.
     * @param {AngketUpdateArgs} args - Arguments to update one Angket.
     * @example
     * // Update one Angket
     * const angket = await prisma.angket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AngketUpdateArgs>(args: SelectSubset<T, AngketUpdateArgs<ExtArgs>>): Prisma__AngketClient<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Angkets.
     * @param {AngketDeleteManyArgs} args - Arguments to filter Angkets to delete.
     * @example
     * // Delete a few Angkets
     * const { count } = await prisma.angket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AngketDeleteManyArgs>(args?: SelectSubset<T, AngketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Angkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Angkets
     * const angket = await prisma.angket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AngketUpdateManyArgs>(args: SelectSubset<T, AngketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Angkets and returns the data updated in the database.
     * @param {AngketUpdateManyAndReturnArgs} args - Arguments to update many Angkets.
     * @example
     * // Update many Angkets
     * const angket = await prisma.angket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Angkets and only return the `id`
     * const angketWithIdOnly = await prisma.angket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AngketUpdateManyAndReturnArgs>(args: SelectSubset<T, AngketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Angket.
     * @param {AngketUpsertArgs} args - Arguments to update or create a Angket.
     * @example
     * // Update or create a Angket
     * const angket = await prisma.angket.upsert({
     *   create: {
     *     // ... data to create a Angket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Angket we want to update
     *   }
     * })
     */
    upsert<T extends AngketUpsertArgs>(args: SelectSubset<T, AngketUpsertArgs<ExtArgs>>): Prisma__AngketClient<$Result.GetResult<Prisma.$AngketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Angkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketCountArgs} args - Arguments to filter Angkets to count.
     * @example
     * // Count the number of Angkets
     * const count = await prisma.angket.count({
     *   where: {
     *     // ... the filter for the Angkets we want to count
     *   }
     * })
    **/
    count<T extends AngketCountArgs>(
      args?: Subset<T, AngketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AngketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Angket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AngketAggregateArgs>(args: Subset<T, AngketAggregateArgs>): Prisma.PrismaPromise<GetAngketAggregateType<T>>

    /**
     * Group by Angket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketGroupByArgs} args - Group by arguments.
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
      T extends AngketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AngketGroupByArgs['orderBy'] }
        : { orderBy?: AngketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AngketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAngketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Angket model
   */
  readonly fields: AngketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Angket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AngketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Angket model
   */
  interface AngketFieldRefs {
    readonly id: FieldRef<"Angket", 'String'>
    readonly createdAt: FieldRef<"Angket", 'DateTime'>
    readonly q1: FieldRef<"Angket", 'String'>
    readonly q2: FieldRef<"Angket", 'String'>
    readonly q3: FieldRef<"Angket", 'String'>
    readonly q4: FieldRef<"Angket", 'String'>
    readonly q5: FieldRef<"Angket", 'String'>
    readonly q6: FieldRef<"Angket", 'String'>
    readonly q7: FieldRef<"Angket", 'String'>
    readonly q8: FieldRef<"Angket", 'String'>
    readonly q9: FieldRef<"Angket", 'String'>
    readonly q10: FieldRef<"Angket", 'String'>
    readonly q11: FieldRef<"Angket", 'String'>
    readonly q12: FieldRef<"Angket", 'String'>
    readonly q13: FieldRef<"Angket", 'String'>
    readonly q14: FieldRef<"Angket", 'String'>
    readonly q15: FieldRef<"Angket", 'String'>
    readonly q16: FieldRef<"Angket", 'String'>
    readonly q17: FieldRef<"Angket", 'String'>
    readonly q18: FieldRef<"Angket", 'String'>
    readonly q19: FieldRef<"Angket", 'String'>
    readonly q20: FieldRef<"Angket", 'String'>
    readonly q21: FieldRef<"Angket", 'String'>
    readonly q22: FieldRef<"Angket", 'String'>
    readonly q23: FieldRef<"Angket", 'String'>
    readonly q24: FieldRef<"Angket", 'String'>
    readonly q25: FieldRef<"Angket", 'String'>
    readonly q26: FieldRef<"Angket", 'String'>
    readonly q27: FieldRef<"Angket", 'String'>
    readonly q28: FieldRef<"Angket", 'String'>
    readonly q29: FieldRef<"Angket", 'String'>
    readonly q30: FieldRef<"Angket", 'String'>
    readonly q31: FieldRef<"Angket", 'String'>
    readonly q32: FieldRef<"Angket", 'String'>
    readonly q33: FieldRef<"Angket", 'String'>
    readonly q34: FieldRef<"Angket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Angket findUnique
   */
  export type AngketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * Filter, which Angket to fetch.
     */
    where: AngketWhereUniqueInput
  }

  /**
   * Angket findUniqueOrThrow
   */
  export type AngketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * Filter, which Angket to fetch.
     */
    where: AngketWhereUniqueInput
  }

  /**
   * Angket findFirst
   */
  export type AngketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * Filter, which Angket to fetch.
     */
    where?: AngketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angkets to fetch.
     */
    orderBy?: AngketOrderByWithRelationInput | AngketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Angkets.
     */
    cursor?: AngketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Angkets.
     */
    distinct?: AngketScalarFieldEnum | AngketScalarFieldEnum[]
  }

  /**
   * Angket findFirstOrThrow
   */
  export type AngketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * Filter, which Angket to fetch.
     */
    where?: AngketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angkets to fetch.
     */
    orderBy?: AngketOrderByWithRelationInput | AngketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Angkets.
     */
    cursor?: AngketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Angkets.
     */
    distinct?: AngketScalarFieldEnum | AngketScalarFieldEnum[]
  }

  /**
   * Angket findMany
   */
  export type AngketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * Filter, which Angkets to fetch.
     */
    where?: AngketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angkets to fetch.
     */
    orderBy?: AngketOrderByWithRelationInput | AngketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Angkets.
     */
    cursor?: AngketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angkets.
     */
    skip?: number
    distinct?: AngketScalarFieldEnum | AngketScalarFieldEnum[]
  }

  /**
   * Angket create
   */
  export type AngketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * The data needed to create a Angket.
     */
    data: XOR<AngketCreateInput, AngketUncheckedCreateInput>
  }

  /**
   * Angket createMany
   */
  export type AngketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Angkets.
     */
    data: AngketCreateManyInput | AngketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Angket createManyAndReturn
   */
  export type AngketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * The data used to create many Angkets.
     */
    data: AngketCreateManyInput | AngketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Angket update
   */
  export type AngketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * The data needed to update a Angket.
     */
    data: XOR<AngketUpdateInput, AngketUncheckedUpdateInput>
    /**
     * Choose, which Angket to update.
     */
    where: AngketWhereUniqueInput
  }

  /**
   * Angket updateMany
   */
  export type AngketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Angkets.
     */
    data: XOR<AngketUpdateManyMutationInput, AngketUncheckedUpdateManyInput>
    /**
     * Filter which Angkets to update
     */
    where?: AngketWhereInput
    /**
     * Limit how many Angkets to update.
     */
    limit?: number
  }

  /**
   * Angket updateManyAndReturn
   */
  export type AngketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * The data used to update Angkets.
     */
    data: XOR<AngketUpdateManyMutationInput, AngketUncheckedUpdateManyInput>
    /**
     * Filter which Angkets to update
     */
    where?: AngketWhereInput
    /**
     * Limit how many Angkets to update.
     */
    limit?: number
  }

  /**
   * Angket upsert
   */
  export type AngketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * The filter to search for the Angket to update in case it exists.
     */
    where: AngketWhereUniqueInput
    /**
     * In case the Angket found by the `where` argument doesn't exist, create a new Angket with this data.
     */
    create: XOR<AngketCreateInput, AngketUncheckedCreateInput>
    /**
     * In case the Angket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AngketUpdateInput, AngketUncheckedUpdateInput>
  }

  /**
   * Angket delete
   */
  export type AngketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
    /**
     * Filter which Angket to delete.
     */
    where: AngketWhereUniqueInput
  }

  /**
   * Angket deleteMany
   */
  export type AngketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Angkets to delete
     */
    where?: AngketWhereInput
    /**
     * Limit how many Angkets to delete.
     */
    limit?: number
  }

  /**
   * Angket without action
   */
  export type AngketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angket
     */
    select?: AngketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angket
     */
    omit?: AngketOmit<ExtArgs> | null
  }


  /**
   * Model Angketxi
   */

  export type AggregateAngketxi = {
    _count: AngketxiCountAggregateOutputType | null
    _min: AngketxiMinAggregateOutputType | null
    _max: AngketxiMaxAggregateOutputType | null
  }

  export type AngketxiMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    q1: string | null
    q2: string | null
    q3: string | null
    q4: string | null
    q5: string | null
    q6: string | null
    q7: string | null
    q8: string | null
    q9: string | null
    q10: string | null
    q11: string | null
    q12: string | null
    q13: string | null
    q14: string | null
    q15: string | null
    q16: string | null
    q17: string | null
    q18: string | null
    q19: string | null
    q20: string | null
    q21: string | null
    q22: string | null
    q23: string | null
    q24: string | null
    q25: string | null
    q26: string | null
    q27: string | null
    q28: string | null
    q29: string | null
    q30: string | null
    q31: string | null
    q32: string | null
    q33: string | null
    q34: string | null
  }

  export type AngketxiMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    q1: string | null
    q2: string | null
    q3: string | null
    q4: string | null
    q5: string | null
    q6: string | null
    q7: string | null
    q8: string | null
    q9: string | null
    q10: string | null
    q11: string | null
    q12: string | null
    q13: string | null
    q14: string | null
    q15: string | null
    q16: string | null
    q17: string | null
    q18: string | null
    q19: string | null
    q20: string | null
    q21: string | null
    q22: string | null
    q23: string | null
    q24: string | null
    q25: string | null
    q26: string | null
    q27: string | null
    q28: string | null
    q29: string | null
    q30: string | null
    q31: string | null
    q32: string | null
    q33: string | null
    q34: string | null
  }

  export type AngketxiCountAggregateOutputType = {
    id: number
    createdAt: number
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    q8: number
    q9: number
    q10: number
    q11: number
    q12: number
    q13: number
    q14: number
    q15: number
    q16: number
    q17: number
    q18: number
    q19: number
    q20: number
    q21: number
    q22: number
    q23: number
    q24: number
    q25: number
    q26: number
    q27: number
    q28: number
    q29: number
    q30: number
    q31: number
    q32: number
    q33: number
    q34: number
    _all: number
  }


  export type AngketxiMinAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
  }

  export type AngketxiMaxAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
  }

  export type AngketxiCountAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
    _all?: true
  }

  export type AngketxiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Angketxi to aggregate.
     */
    where?: AngketxiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angketxis to fetch.
     */
    orderBy?: AngketxiOrderByWithRelationInput | AngketxiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AngketxiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angketxis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angketxis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Angketxis
    **/
    _count?: true | AngketxiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AngketxiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AngketxiMaxAggregateInputType
  }

  export type GetAngketxiAggregateType<T extends AngketxiAggregateArgs> = {
        [P in keyof T & keyof AggregateAngketxi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAngketxi[P]>
      : GetScalarType<T[P], AggregateAngketxi[P]>
  }




  export type AngketxiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AngketxiWhereInput
    orderBy?: AngketxiOrderByWithAggregationInput | AngketxiOrderByWithAggregationInput[]
    by: AngketxiScalarFieldEnum[] | AngketxiScalarFieldEnum
    having?: AngketxiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AngketxiCountAggregateInputType | true
    _min?: AngketxiMinAggregateInputType
    _max?: AngketxiMaxAggregateInputType
  }

  export type AngketxiGroupByOutputType = {
    id: string
    createdAt: Date
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
    _count: AngketxiCountAggregateOutputType | null
    _min: AngketxiMinAggregateOutputType | null
    _max: AngketxiMaxAggregateOutputType | null
  }

  type GetAngketxiGroupByPayload<T extends AngketxiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AngketxiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AngketxiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AngketxiGroupByOutputType[P]>
            : GetScalarType<T[P], AngketxiGroupByOutputType[P]>
        }
      >
    >


  export type AngketxiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angketxi"]>

  export type AngketxiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angketxi"]>

  export type AngketxiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angketxi"]>

  export type AngketxiSelectScalar = {
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }

  export type AngketxiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7" | "q8" | "q9" | "q10" | "q11" | "q12" | "q13" | "q14" | "q15" | "q16" | "q17" | "q18" | "q19" | "q20" | "q21" | "q22" | "q23" | "q24" | "q25" | "q26" | "q27" | "q28" | "q29" | "q30" | "q31" | "q32" | "q33" | "q34", ExtArgs["result"]["angketxi"]>

  export type $AngketxiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Angketxi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      q1: string
      q2: string
      q3: string
      q4: string
      q5: string
      q6: string
      q7: string
      q8: string
      q9: string
      q10: string
      q11: string
      q12: string
      q13: string
      q14: string
      q15: string
      q16: string
      q17: string
      q18: string
      q19: string
      q20: string
      q21: string
      q22: string
      q23: string
      q24: string
      q25: string
      q26: string
      q27: string
      q28: string
      q29: string
      q30: string
      q31: string
      q32: string
      q33: string
      q34: string
    }, ExtArgs["result"]["angketxi"]>
    composites: {}
  }

  type AngketxiGetPayload<S extends boolean | null | undefined | AngketxiDefaultArgs> = $Result.GetResult<Prisma.$AngketxiPayload, S>

  type AngketxiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AngketxiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AngketxiCountAggregateInputType | true
    }

  export interface AngketxiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Angketxi'], meta: { name: 'Angketxi' } }
    /**
     * Find zero or one Angketxi that matches the filter.
     * @param {AngketxiFindUniqueArgs} args - Arguments to find a Angketxi
     * @example
     * // Get one Angketxi
     * const angketxi = await prisma.angketxi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AngketxiFindUniqueArgs>(args: SelectSubset<T, AngketxiFindUniqueArgs<ExtArgs>>): Prisma__AngketxiClient<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Angketxi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AngketxiFindUniqueOrThrowArgs} args - Arguments to find a Angketxi
     * @example
     * // Get one Angketxi
     * const angketxi = await prisma.angketxi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AngketxiFindUniqueOrThrowArgs>(args: SelectSubset<T, AngketxiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AngketxiClient<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Angketxi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiFindFirstArgs} args - Arguments to find a Angketxi
     * @example
     * // Get one Angketxi
     * const angketxi = await prisma.angketxi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AngketxiFindFirstArgs>(args?: SelectSubset<T, AngketxiFindFirstArgs<ExtArgs>>): Prisma__AngketxiClient<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Angketxi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiFindFirstOrThrowArgs} args - Arguments to find a Angketxi
     * @example
     * // Get one Angketxi
     * const angketxi = await prisma.angketxi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AngketxiFindFirstOrThrowArgs>(args?: SelectSubset<T, AngketxiFindFirstOrThrowArgs<ExtArgs>>): Prisma__AngketxiClient<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Angketxis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Angketxis
     * const angketxis = await prisma.angketxi.findMany()
     * 
     * // Get first 10 Angketxis
     * const angketxis = await prisma.angketxi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const angketxiWithIdOnly = await prisma.angketxi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AngketxiFindManyArgs>(args?: SelectSubset<T, AngketxiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Angketxi.
     * @param {AngketxiCreateArgs} args - Arguments to create a Angketxi.
     * @example
     * // Create one Angketxi
     * const Angketxi = await prisma.angketxi.create({
     *   data: {
     *     // ... data to create a Angketxi
     *   }
     * })
     * 
     */
    create<T extends AngketxiCreateArgs>(args: SelectSubset<T, AngketxiCreateArgs<ExtArgs>>): Prisma__AngketxiClient<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Angketxis.
     * @param {AngketxiCreateManyArgs} args - Arguments to create many Angketxis.
     * @example
     * // Create many Angketxis
     * const angketxi = await prisma.angketxi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AngketxiCreateManyArgs>(args?: SelectSubset<T, AngketxiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Angketxis and returns the data saved in the database.
     * @param {AngketxiCreateManyAndReturnArgs} args - Arguments to create many Angketxis.
     * @example
     * // Create many Angketxis
     * const angketxi = await prisma.angketxi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Angketxis and only return the `id`
     * const angketxiWithIdOnly = await prisma.angketxi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AngketxiCreateManyAndReturnArgs>(args?: SelectSubset<T, AngketxiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Angketxi.
     * @param {AngketxiDeleteArgs} args - Arguments to delete one Angketxi.
     * @example
     * // Delete one Angketxi
     * const Angketxi = await prisma.angketxi.delete({
     *   where: {
     *     // ... filter to delete one Angketxi
     *   }
     * })
     * 
     */
    delete<T extends AngketxiDeleteArgs>(args: SelectSubset<T, AngketxiDeleteArgs<ExtArgs>>): Prisma__AngketxiClient<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Angketxi.
     * @param {AngketxiUpdateArgs} args - Arguments to update one Angketxi.
     * @example
     * // Update one Angketxi
     * const angketxi = await prisma.angketxi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AngketxiUpdateArgs>(args: SelectSubset<T, AngketxiUpdateArgs<ExtArgs>>): Prisma__AngketxiClient<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Angketxis.
     * @param {AngketxiDeleteManyArgs} args - Arguments to filter Angketxis to delete.
     * @example
     * // Delete a few Angketxis
     * const { count } = await prisma.angketxi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AngketxiDeleteManyArgs>(args?: SelectSubset<T, AngketxiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Angketxis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Angketxis
     * const angketxi = await prisma.angketxi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AngketxiUpdateManyArgs>(args: SelectSubset<T, AngketxiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Angketxis and returns the data updated in the database.
     * @param {AngketxiUpdateManyAndReturnArgs} args - Arguments to update many Angketxis.
     * @example
     * // Update many Angketxis
     * const angketxi = await prisma.angketxi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Angketxis and only return the `id`
     * const angketxiWithIdOnly = await prisma.angketxi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AngketxiUpdateManyAndReturnArgs>(args: SelectSubset<T, AngketxiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Angketxi.
     * @param {AngketxiUpsertArgs} args - Arguments to update or create a Angketxi.
     * @example
     * // Update or create a Angketxi
     * const angketxi = await prisma.angketxi.upsert({
     *   create: {
     *     // ... data to create a Angketxi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Angketxi we want to update
     *   }
     * })
     */
    upsert<T extends AngketxiUpsertArgs>(args: SelectSubset<T, AngketxiUpsertArgs<ExtArgs>>): Prisma__AngketxiClient<$Result.GetResult<Prisma.$AngketxiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Angketxis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiCountArgs} args - Arguments to filter Angketxis to count.
     * @example
     * // Count the number of Angketxis
     * const count = await prisma.angketxi.count({
     *   where: {
     *     // ... the filter for the Angketxis we want to count
     *   }
     * })
    **/
    count<T extends AngketxiCountArgs>(
      args?: Subset<T, AngketxiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AngketxiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Angketxi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AngketxiAggregateArgs>(args: Subset<T, AngketxiAggregateArgs>): Prisma.PrismaPromise<GetAngketxiAggregateType<T>>

    /**
     * Group by Angketxi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiGroupByArgs} args - Group by arguments.
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
      T extends AngketxiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AngketxiGroupByArgs['orderBy'] }
        : { orderBy?: AngketxiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AngketxiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAngketxiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Angketxi model
   */
  readonly fields: AngketxiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Angketxi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AngketxiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Angketxi model
   */
  interface AngketxiFieldRefs {
    readonly id: FieldRef<"Angketxi", 'String'>
    readonly createdAt: FieldRef<"Angketxi", 'DateTime'>
    readonly q1: FieldRef<"Angketxi", 'String'>
    readonly q2: FieldRef<"Angketxi", 'String'>
    readonly q3: FieldRef<"Angketxi", 'String'>
    readonly q4: FieldRef<"Angketxi", 'String'>
    readonly q5: FieldRef<"Angketxi", 'String'>
    readonly q6: FieldRef<"Angketxi", 'String'>
    readonly q7: FieldRef<"Angketxi", 'String'>
    readonly q8: FieldRef<"Angketxi", 'String'>
    readonly q9: FieldRef<"Angketxi", 'String'>
    readonly q10: FieldRef<"Angketxi", 'String'>
    readonly q11: FieldRef<"Angketxi", 'String'>
    readonly q12: FieldRef<"Angketxi", 'String'>
    readonly q13: FieldRef<"Angketxi", 'String'>
    readonly q14: FieldRef<"Angketxi", 'String'>
    readonly q15: FieldRef<"Angketxi", 'String'>
    readonly q16: FieldRef<"Angketxi", 'String'>
    readonly q17: FieldRef<"Angketxi", 'String'>
    readonly q18: FieldRef<"Angketxi", 'String'>
    readonly q19: FieldRef<"Angketxi", 'String'>
    readonly q20: FieldRef<"Angketxi", 'String'>
    readonly q21: FieldRef<"Angketxi", 'String'>
    readonly q22: FieldRef<"Angketxi", 'String'>
    readonly q23: FieldRef<"Angketxi", 'String'>
    readonly q24: FieldRef<"Angketxi", 'String'>
    readonly q25: FieldRef<"Angketxi", 'String'>
    readonly q26: FieldRef<"Angketxi", 'String'>
    readonly q27: FieldRef<"Angketxi", 'String'>
    readonly q28: FieldRef<"Angketxi", 'String'>
    readonly q29: FieldRef<"Angketxi", 'String'>
    readonly q30: FieldRef<"Angketxi", 'String'>
    readonly q31: FieldRef<"Angketxi", 'String'>
    readonly q32: FieldRef<"Angketxi", 'String'>
    readonly q33: FieldRef<"Angketxi", 'String'>
    readonly q34: FieldRef<"Angketxi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Angketxi findUnique
   */
  export type AngketxiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxi to fetch.
     */
    where: AngketxiWhereUniqueInput
  }

  /**
   * Angketxi findUniqueOrThrow
   */
  export type AngketxiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxi to fetch.
     */
    where: AngketxiWhereUniqueInput
  }

  /**
   * Angketxi findFirst
   */
  export type AngketxiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxi to fetch.
     */
    where?: AngketxiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angketxis to fetch.
     */
    orderBy?: AngketxiOrderByWithRelationInput | AngketxiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Angketxis.
     */
    cursor?: AngketxiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angketxis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angketxis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Angketxis.
     */
    distinct?: AngketxiScalarFieldEnum | AngketxiScalarFieldEnum[]
  }

  /**
   * Angketxi findFirstOrThrow
   */
  export type AngketxiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxi to fetch.
     */
    where?: AngketxiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angketxis to fetch.
     */
    orderBy?: AngketxiOrderByWithRelationInput | AngketxiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Angketxis.
     */
    cursor?: AngketxiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angketxis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angketxis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Angketxis.
     */
    distinct?: AngketxiScalarFieldEnum | AngketxiScalarFieldEnum[]
  }

  /**
   * Angketxi findMany
   */
  export type AngketxiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxis to fetch.
     */
    where?: AngketxiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angketxis to fetch.
     */
    orderBy?: AngketxiOrderByWithRelationInput | AngketxiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Angketxis.
     */
    cursor?: AngketxiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angketxis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angketxis.
     */
    skip?: number
    distinct?: AngketxiScalarFieldEnum | AngketxiScalarFieldEnum[]
  }

  /**
   * Angketxi create
   */
  export type AngketxiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * The data needed to create a Angketxi.
     */
    data: XOR<AngketxiCreateInput, AngketxiUncheckedCreateInput>
  }

  /**
   * Angketxi createMany
   */
  export type AngketxiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Angketxis.
     */
    data: AngketxiCreateManyInput | AngketxiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Angketxi createManyAndReturn
   */
  export type AngketxiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * The data used to create many Angketxis.
     */
    data: AngketxiCreateManyInput | AngketxiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Angketxi update
   */
  export type AngketxiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * The data needed to update a Angketxi.
     */
    data: XOR<AngketxiUpdateInput, AngketxiUncheckedUpdateInput>
    /**
     * Choose, which Angketxi to update.
     */
    where: AngketxiWhereUniqueInput
  }

  /**
   * Angketxi updateMany
   */
  export type AngketxiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Angketxis.
     */
    data: XOR<AngketxiUpdateManyMutationInput, AngketxiUncheckedUpdateManyInput>
    /**
     * Filter which Angketxis to update
     */
    where?: AngketxiWhereInput
    /**
     * Limit how many Angketxis to update.
     */
    limit?: number
  }

  /**
   * Angketxi updateManyAndReturn
   */
  export type AngketxiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * The data used to update Angketxis.
     */
    data: XOR<AngketxiUpdateManyMutationInput, AngketxiUncheckedUpdateManyInput>
    /**
     * Filter which Angketxis to update
     */
    where?: AngketxiWhereInput
    /**
     * Limit how many Angketxis to update.
     */
    limit?: number
  }

  /**
   * Angketxi upsert
   */
  export type AngketxiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * The filter to search for the Angketxi to update in case it exists.
     */
    where: AngketxiWhereUniqueInput
    /**
     * In case the Angketxi found by the `where` argument doesn't exist, create a new Angketxi with this data.
     */
    create: XOR<AngketxiCreateInput, AngketxiUncheckedCreateInput>
    /**
     * In case the Angketxi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AngketxiUpdateInput, AngketxiUncheckedUpdateInput>
  }

  /**
   * Angketxi delete
   */
  export type AngketxiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
    /**
     * Filter which Angketxi to delete.
     */
    where: AngketxiWhereUniqueInput
  }

  /**
   * Angketxi deleteMany
   */
  export type AngketxiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Angketxis to delete
     */
    where?: AngketxiWhereInput
    /**
     * Limit how many Angketxis to delete.
     */
    limit?: number
  }

  /**
   * Angketxi without action
   */
  export type AngketxiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxi
     */
    select?: AngketxiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxi
     */
    omit?: AngketxiOmit<ExtArgs> | null
  }


  /**
   * Model Angketxii
   */

  export type AggregateAngketxii = {
    _count: AngketxiiCountAggregateOutputType | null
    _min: AngketxiiMinAggregateOutputType | null
    _max: AngketxiiMaxAggregateOutputType | null
  }

  export type AngketxiiMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    q1: string | null
    q2: string | null
    q3: string | null
    q4: string | null
    q5: string | null
    q6: string | null
    q7: string | null
    q8: string | null
    q9: string | null
    q10: string | null
    q11: string | null
    q12: string | null
    q13: string | null
    q14: string | null
    q15: string | null
    q16: string | null
    q17: string | null
    q18: string | null
    q19: string | null
    q20: string | null
    q21: string | null
    q22: string | null
    q23: string | null
    q24: string | null
    q25: string | null
    q26: string | null
    q27: string | null
    q28: string | null
    q29: string | null
    q30: string | null
    q31: string | null
    q32: string | null
    q33: string | null
    q34: string | null
  }

  export type AngketxiiMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    q1: string | null
    q2: string | null
    q3: string | null
    q4: string | null
    q5: string | null
    q6: string | null
    q7: string | null
    q8: string | null
    q9: string | null
    q10: string | null
    q11: string | null
    q12: string | null
    q13: string | null
    q14: string | null
    q15: string | null
    q16: string | null
    q17: string | null
    q18: string | null
    q19: string | null
    q20: string | null
    q21: string | null
    q22: string | null
    q23: string | null
    q24: string | null
    q25: string | null
    q26: string | null
    q27: string | null
    q28: string | null
    q29: string | null
    q30: string | null
    q31: string | null
    q32: string | null
    q33: string | null
    q34: string | null
  }

  export type AngketxiiCountAggregateOutputType = {
    id: number
    createdAt: number
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    q8: number
    q9: number
    q10: number
    q11: number
    q12: number
    q13: number
    q14: number
    q15: number
    q16: number
    q17: number
    q18: number
    q19: number
    q20: number
    q21: number
    q22: number
    q23: number
    q24: number
    q25: number
    q26: number
    q27: number
    q28: number
    q29: number
    q30: number
    q31: number
    q32: number
    q33: number
    q34: number
    _all: number
  }


  export type AngketxiiMinAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
  }

  export type AngketxiiMaxAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
  }

  export type AngketxiiCountAggregateInputType = {
    id?: true
    createdAt?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    q8?: true
    q9?: true
    q10?: true
    q11?: true
    q12?: true
    q13?: true
    q14?: true
    q15?: true
    q16?: true
    q17?: true
    q18?: true
    q19?: true
    q20?: true
    q21?: true
    q22?: true
    q23?: true
    q24?: true
    q25?: true
    q26?: true
    q27?: true
    q28?: true
    q29?: true
    q30?: true
    q31?: true
    q32?: true
    q33?: true
    q34?: true
    _all?: true
  }

  export type AngketxiiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Angketxii to aggregate.
     */
    where?: AngketxiiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angketxiis to fetch.
     */
    orderBy?: AngketxiiOrderByWithRelationInput | AngketxiiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AngketxiiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angketxiis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angketxiis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Angketxiis
    **/
    _count?: true | AngketxiiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AngketxiiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AngketxiiMaxAggregateInputType
  }

  export type GetAngketxiiAggregateType<T extends AngketxiiAggregateArgs> = {
        [P in keyof T & keyof AggregateAngketxii]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAngketxii[P]>
      : GetScalarType<T[P], AggregateAngketxii[P]>
  }




  export type AngketxiiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AngketxiiWhereInput
    orderBy?: AngketxiiOrderByWithAggregationInput | AngketxiiOrderByWithAggregationInput[]
    by: AngketxiiScalarFieldEnum[] | AngketxiiScalarFieldEnum
    having?: AngketxiiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AngketxiiCountAggregateInputType | true
    _min?: AngketxiiMinAggregateInputType
    _max?: AngketxiiMaxAggregateInputType
  }

  export type AngketxiiGroupByOutputType = {
    id: string
    createdAt: Date
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
    _count: AngketxiiCountAggregateOutputType | null
    _min: AngketxiiMinAggregateOutputType | null
    _max: AngketxiiMaxAggregateOutputType | null
  }

  type GetAngketxiiGroupByPayload<T extends AngketxiiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AngketxiiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AngketxiiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AngketxiiGroupByOutputType[P]>
            : GetScalarType<T[P], AngketxiiGroupByOutputType[P]>
        }
      >
    >


  export type AngketxiiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angketxii"]>

  export type AngketxiiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angketxii"]>

  export type AngketxiiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }, ExtArgs["result"]["angketxii"]>

  export type AngketxiiSelectScalar = {
    id?: boolean
    createdAt?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    q8?: boolean
    q9?: boolean
    q10?: boolean
    q11?: boolean
    q12?: boolean
    q13?: boolean
    q14?: boolean
    q15?: boolean
    q16?: boolean
    q17?: boolean
    q18?: boolean
    q19?: boolean
    q20?: boolean
    q21?: boolean
    q22?: boolean
    q23?: boolean
    q24?: boolean
    q25?: boolean
    q26?: boolean
    q27?: boolean
    q28?: boolean
    q29?: boolean
    q30?: boolean
    q31?: boolean
    q32?: boolean
    q33?: boolean
    q34?: boolean
  }

  export type AngketxiiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7" | "q8" | "q9" | "q10" | "q11" | "q12" | "q13" | "q14" | "q15" | "q16" | "q17" | "q18" | "q19" | "q20" | "q21" | "q22" | "q23" | "q24" | "q25" | "q26" | "q27" | "q28" | "q29" | "q30" | "q31" | "q32" | "q33" | "q34", ExtArgs["result"]["angketxii"]>

  export type $AngketxiiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Angketxii"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      q1: string
      q2: string
      q3: string
      q4: string
      q5: string
      q6: string
      q7: string
      q8: string
      q9: string
      q10: string
      q11: string
      q12: string
      q13: string
      q14: string
      q15: string
      q16: string
      q17: string
      q18: string
      q19: string
      q20: string
      q21: string
      q22: string
      q23: string
      q24: string
      q25: string
      q26: string
      q27: string
      q28: string
      q29: string
      q30: string
      q31: string
      q32: string
      q33: string
      q34: string
    }, ExtArgs["result"]["angketxii"]>
    composites: {}
  }

  type AngketxiiGetPayload<S extends boolean | null | undefined | AngketxiiDefaultArgs> = $Result.GetResult<Prisma.$AngketxiiPayload, S>

  type AngketxiiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AngketxiiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AngketxiiCountAggregateInputType | true
    }

  export interface AngketxiiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Angketxii'], meta: { name: 'Angketxii' } }
    /**
     * Find zero or one Angketxii that matches the filter.
     * @param {AngketxiiFindUniqueArgs} args - Arguments to find a Angketxii
     * @example
     * // Get one Angketxii
     * const angketxii = await prisma.angketxii.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AngketxiiFindUniqueArgs>(args: SelectSubset<T, AngketxiiFindUniqueArgs<ExtArgs>>): Prisma__AngketxiiClient<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Angketxii that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AngketxiiFindUniqueOrThrowArgs} args - Arguments to find a Angketxii
     * @example
     * // Get one Angketxii
     * const angketxii = await prisma.angketxii.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AngketxiiFindUniqueOrThrowArgs>(args: SelectSubset<T, AngketxiiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AngketxiiClient<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Angketxii that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiiFindFirstArgs} args - Arguments to find a Angketxii
     * @example
     * // Get one Angketxii
     * const angketxii = await prisma.angketxii.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AngketxiiFindFirstArgs>(args?: SelectSubset<T, AngketxiiFindFirstArgs<ExtArgs>>): Prisma__AngketxiiClient<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Angketxii that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiiFindFirstOrThrowArgs} args - Arguments to find a Angketxii
     * @example
     * // Get one Angketxii
     * const angketxii = await prisma.angketxii.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AngketxiiFindFirstOrThrowArgs>(args?: SelectSubset<T, AngketxiiFindFirstOrThrowArgs<ExtArgs>>): Prisma__AngketxiiClient<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Angketxiis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Angketxiis
     * const angketxiis = await prisma.angketxii.findMany()
     * 
     * // Get first 10 Angketxiis
     * const angketxiis = await prisma.angketxii.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const angketxiiWithIdOnly = await prisma.angketxii.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AngketxiiFindManyArgs>(args?: SelectSubset<T, AngketxiiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Angketxii.
     * @param {AngketxiiCreateArgs} args - Arguments to create a Angketxii.
     * @example
     * // Create one Angketxii
     * const Angketxii = await prisma.angketxii.create({
     *   data: {
     *     // ... data to create a Angketxii
     *   }
     * })
     * 
     */
    create<T extends AngketxiiCreateArgs>(args: SelectSubset<T, AngketxiiCreateArgs<ExtArgs>>): Prisma__AngketxiiClient<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Angketxiis.
     * @param {AngketxiiCreateManyArgs} args - Arguments to create many Angketxiis.
     * @example
     * // Create many Angketxiis
     * const angketxii = await prisma.angketxii.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AngketxiiCreateManyArgs>(args?: SelectSubset<T, AngketxiiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Angketxiis and returns the data saved in the database.
     * @param {AngketxiiCreateManyAndReturnArgs} args - Arguments to create many Angketxiis.
     * @example
     * // Create many Angketxiis
     * const angketxii = await prisma.angketxii.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Angketxiis and only return the `id`
     * const angketxiiWithIdOnly = await prisma.angketxii.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AngketxiiCreateManyAndReturnArgs>(args?: SelectSubset<T, AngketxiiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Angketxii.
     * @param {AngketxiiDeleteArgs} args - Arguments to delete one Angketxii.
     * @example
     * // Delete one Angketxii
     * const Angketxii = await prisma.angketxii.delete({
     *   where: {
     *     // ... filter to delete one Angketxii
     *   }
     * })
     * 
     */
    delete<T extends AngketxiiDeleteArgs>(args: SelectSubset<T, AngketxiiDeleteArgs<ExtArgs>>): Prisma__AngketxiiClient<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Angketxii.
     * @param {AngketxiiUpdateArgs} args - Arguments to update one Angketxii.
     * @example
     * // Update one Angketxii
     * const angketxii = await prisma.angketxii.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AngketxiiUpdateArgs>(args: SelectSubset<T, AngketxiiUpdateArgs<ExtArgs>>): Prisma__AngketxiiClient<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Angketxiis.
     * @param {AngketxiiDeleteManyArgs} args - Arguments to filter Angketxiis to delete.
     * @example
     * // Delete a few Angketxiis
     * const { count } = await prisma.angketxii.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AngketxiiDeleteManyArgs>(args?: SelectSubset<T, AngketxiiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Angketxiis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Angketxiis
     * const angketxii = await prisma.angketxii.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AngketxiiUpdateManyArgs>(args: SelectSubset<T, AngketxiiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Angketxiis and returns the data updated in the database.
     * @param {AngketxiiUpdateManyAndReturnArgs} args - Arguments to update many Angketxiis.
     * @example
     * // Update many Angketxiis
     * const angketxii = await prisma.angketxii.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Angketxiis and only return the `id`
     * const angketxiiWithIdOnly = await prisma.angketxii.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AngketxiiUpdateManyAndReturnArgs>(args: SelectSubset<T, AngketxiiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Angketxii.
     * @param {AngketxiiUpsertArgs} args - Arguments to update or create a Angketxii.
     * @example
     * // Update or create a Angketxii
     * const angketxii = await prisma.angketxii.upsert({
     *   create: {
     *     // ... data to create a Angketxii
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Angketxii we want to update
     *   }
     * })
     */
    upsert<T extends AngketxiiUpsertArgs>(args: SelectSubset<T, AngketxiiUpsertArgs<ExtArgs>>): Prisma__AngketxiiClient<$Result.GetResult<Prisma.$AngketxiiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Angketxiis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiiCountArgs} args - Arguments to filter Angketxiis to count.
     * @example
     * // Count the number of Angketxiis
     * const count = await prisma.angketxii.count({
     *   where: {
     *     // ... the filter for the Angketxiis we want to count
     *   }
     * })
    **/
    count<T extends AngketxiiCountArgs>(
      args?: Subset<T, AngketxiiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AngketxiiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Angketxii.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AngketxiiAggregateArgs>(args: Subset<T, AngketxiiAggregateArgs>): Prisma.PrismaPromise<GetAngketxiiAggregateType<T>>

    /**
     * Group by Angketxii.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AngketxiiGroupByArgs} args - Group by arguments.
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
      T extends AngketxiiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AngketxiiGroupByArgs['orderBy'] }
        : { orderBy?: AngketxiiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AngketxiiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAngketxiiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Angketxii model
   */
  readonly fields: AngketxiiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Angketxii.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AngketxiiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Angketxii model
   */
  interface AngketxiiFieldRefs {
    readonly id: FieldRef<"Angketxii", 'String'>
    readonly createdAt: FieldRef<"Angketxii", 'DateTime'>
    readonly q1: FieldRef<"Angketxii", 'String'>
    readonly q2: FieldRef<"Angketxii", 'String'>
    readonly q3: FieldRef<"Angketxii", 'String'>
    readonly q4: FieldRef<"Angketxii", 'String'>
    readonly q5: FieldRef<"Angketxii", 'String'>
    readonly q6: FieldRef<"Angketxii", 'String'>
    readonly q7: FieldRef<"Angketxii", 'String'>
    readonly q8: FieldRef<"Angketxii", 'String'>
    readonly q9: FieldRef<"Angketxii", 'String'>
    readonly q10: FieldRef<"Angketxii", 'String'>
    readonly q11: FieldRef<"Angketxii", 'String'>
    readonly q12: FieldRef<"Angketxii", 'String'>
    readonly q13: FieldRef<"Angketxii", 'String'>
    readonly q14: FieldRef<"Angketxii", 'String'>
    readonly q15: FieldRef<"Angketxii", 'String'>
    readonly q16: FieldRef<"Angketxii", 'String'>
    readonly q17: FieldRef<"Angketxii", 'String'>
    readonly q18: FieldRef<"Angketxii", 'String'>
    readonly q19: FieldRef<"Angketxii", 'String'>
    readonly q20: FieldRef<"Angketxii", 'String'>
    readonly q21: FieldRef<"Angketxii", 'String'>
    readonly q22: FieldRef<"Angketxii", 'String'>
    readonly q23: FieldRef<"Angketxii", 'String'>
    readonly q24: FieldRef<"Angketxii", 'String'>
    readonly q25: FieldRef<"Angketxii", 'String'>
    readonly q26: FieldRef<"Angketxii", 'String'>
    readonly q27: FieldRef<"Angketxii", 'String'>
    readonly q28: FieldRef<"Angketxii", 'String'>
    readonly q29: FieldRef<"Angketxii", 'String'>
    readonly q30: FieldRef<"Angketxii", 'String'>
    readonly q31: FieldRef<"Angketxii", 'String'>
    readonly q32: FieldRef<"Angketxii", 'String'>
    readonly q33: FieldRef<"Angketxii", 'String'>
    readonly q34: FieldRef<"Angketxii", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Angketxii findUnique
   */
  export type AngketxiiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxii to fetch.
     */
    where: AngketxiiWhereUniqueInput
  }

  /**
   * Angketxii findUniqueOrThrow
   */
  export type AngketxiiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxii to fetch.
     */
    where: AngketxiiWhereUniqueInput
  }

  /**
   * Angketxii findFirst
   */
  export type AngketxiiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxii to fetch.
     */
    where?: AngketxiiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angketxiis to fetch.
     */
    orderBy?: AngketxiiOrderByWithRelationInput | AngketxiiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Angketxiis.
     */
    cursor?: AngketxiiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angketxiis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angketxiis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Angketxiis.
     */
    distinct?: AngketxiiScalarFieldEnum | AngketxiiScalarFieldEnum[]
  }

  /**
   * Angketxii findFirstOrThrow
   */
  export type AngketxiiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxii to fetch.
     */
    where?: AngketxiiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angketxiis to fetch.
     */
    orderBy?: AngketxiiOrderByWithRelationInput | AngketxiiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Angketxiis.
     */
    cursor?: AngketxiiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angketxiis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angketxiis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Angketxiis.
     */
    distinct?: AngketxiiScalarFieldEnum | AngketxiiScalarFieldEnum[]
  }

  /**
   * Angketxii findMany
   */
  export type AngketxiiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * Filter, which Angketxiis to fetch.
     */
    where?: AngketxiiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Angketxiis to fetch.
     */
    orderBy?: AngketxiiOrderByWithRelationInput | AngketxiiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Angketxiis.
     */
    cursor?: AngketxiiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Angketxiis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Angketxiis.
     */
    skip?: number
    distinct?: AngketxiiScalarFieldEnum | AngketxiiScalarFieldEnum[]
  }

  /**
   * Angketxii create
   */
  export type AngketxiiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * The data needed to create a Angketxii.
     */
    data: XOR<AngketxiiCreateInput, AngketxiiUncheckedCreateInput>
  }

  /**
   * Angketxii createMany
   */
  export type AngketxiiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Angketxiis.
     */
    data: AngketxiiCreateManyInput | AngketxiiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Angketxii createManyAndReturn
   */
  export type AngketxiiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * The data used to create many Angketxiis.
     */
    data: AngketxiiCreateManyInput | AngketxiiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Angketxii update
   */
  export type AngketxiiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * The data needed to update a Angketxii.
     */
    data: XOR<AngketxiiUpdateInput, AngketxiiUncheckedUpdateInput>
    /**
     * Choose, which Angketxii to update.
     */
    where: AngketxiiWhereUniqueInput
  }

  /**
   * Angketxii updateMany
   */
  export type AngketxiiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Angketxiis.
     */
    data: XOR<AngketxiiUpdateManyMutationInput, AngketxiiUncheckedUpdateManyInput>
    /**
     * Filter which Angketxiis to update
     */
    where?: AngketxiiWhereInput
    /**
     * Limit how many Angketxiis to update.
     */
    limit?: number
  }

  /**
   * Angketxii updateManyAndReturn
   */
  export type AngketxiiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * The data used to update Angketxiis.
     */
    data: XOR<AngketxiiUpdateManyMutationInput, AngketxiiUncheckedUpdateManyInput>
    /**
     * Filter which Angketxiis to update
     */
    where?: AngketxiiWhereInput
    /**
     * Limit how many Angketxiis to update.
     */
    limit?: number
  }

  /**
   * Angketxii upsert
   */
  export type AngketxiiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * The filter to search for the Angketxii to update in case it exists.
     */
    where: AngketxiiWhereUniqueInput
    /**
     * In case the Angketxii found by the `where` argument doesn't exist, create a new Angketxii with this data.
     */
    create: XOR<AngketxiiCreateInput, AngketxiiUncheckedCreateInput>
    /**
     * In case the Angketxii was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AngketxiiUpdateInput, AngketxiiUncheckedUpdateInput>
  }

  /**
   * Angketxii delete
   */
  export type AngketxiiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
    /**
     * Filter which Angketxii to delete.
     */
    where: AngketxiiWhereUniqueInput
  }

  /**
   * Angketxii deleteMany
   */
  export type AngketxiiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Angketxiis to delete
     */
    where?: AngketxiiWhereInput
    /**
     * Limit how many Angketxiis to delete.
     */
    limit?: number
  }

  /**
   * Angketxii without action
   */
  export type AngketxiiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Angketxii
     */
    select?: AngketxiiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Angketxii
     */
    omit?: AngketxiiOmit<ExtArgs> | null
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


  export const AngketScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    q1: 'q1',
    q2: 'q2',
    q3: 'q3',
    q4: 'q4',
    q5: 'q5',
    q6: 'q6',
    q7: 'q7',
    q8: 'q8',
    q9: 'q9',
    q10: 'q10',
    q11: 'q11',
    q12: 'q12',
    q13: 'q13',
    q14: 'q14',
    q15: 'q15',
    q16: 'q16',
    q17: 'q17',
    q18: 'q18',
    q19: 'q19',
    q20: 'q20',
    q21: 'q21',
    q22: 'q22',
    q23: 'q23',
    q24: 'q24',
    q25: 'q25',
    q26: 'q26',
    q27: 'q27',
    q28: 'q28',
    q29: 'q29',
    q30: 'q30',
    q31: 'q31',
    q32: 'q32',
    q33: 'q33',
    q34: 'q34'
  };

  export type AngketScalarFieldEnum = (typeof AngketScalarFieldEnum)[keyof typeof AngketScalarFieldEnum]


  export const AngketxiScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    q1: 'q1',
    q2: 'q2',
    q3: 'q3',
    q4: 'q4',
    q5: 'q5',
    q6: 'q6',
    q7: 'q7',
    q8: 'q8',
    q9: 'q9',
    q10: 'q10',
    q11: 'q11',
    q12: 'q12',
    q13: 'q13',
    q14: 'q14',
    q15: 'q15',
    q16: 'q16',
    q17: 'q17',
    q18: 'q18',
    q19: 'q19',
    q20: 'q20',
    q21: 'q21',
    q22: 'q22',
    q23: 'q23',
    q24: 'q24',
    q25: 'q25',
    q26: 'q26',
    q27: 'q27',
    q28: 'q28',
    q29: 'q29',
    q30: 'q30',
    q31: 'q31',
    q32: 'q32',
    q33: 'q33',
    q34: 'q34'
  };

  export type AngketxiScalarFieldEnum = (typeof AngketxiScalarFieldEnum)[keyof typeof AngketxiScalarFieldEnum]


  export const AngketxiiScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    q1: 'q1',
    q2: 'q2',
    q3: 'q3',
    q4: 'q4',
    q5: 'q5',
    q6: 'q6',
    q7: 'q7',
    q8: 'q8',
    q9: 'q9',
    q10: 'q10',
    q11: 'q11',
    q12: 'q12',
    q13: 'q13',
    q14: 'q14',
    q15: 'q15',
    q16: 'q16',
    q17: 'q17',
    q18: 'q18',
    q19: 'q19',
    q20: 'q20',
    q21: 'q21',
    q22: 'q22',
    q23: 'q23',
    q24: 'q24',
    q25: 'q25',
    q26: 'q26',
    q27: 'q27',
    q28: 'q28',
    q29: 'q29',
    q30: 'q30',
    q31: 'q31',
    q32: 'q32',
    q33: 'q33',
    q34: 'q34'
  };

  export type AngketxiiScalarFieldEnum = (typeof AngketxiiScalarFieldEnum)[keyof typeof AngketxiiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AngketWhereInput = {
    AND?: AngketWhereInput | AngketWhereInput[]
    OR?: AngketWhereInput[]
    NOT?: AngketWhereInput | AngketWhereInput[]
    id?: StringFilter<"Angket"> | string
    createdAt?: DateTimeFilter<"Angket"> | Date | string
    q1?: StringFilter<"Angket"> | string
    q2?: StringFilter<"Angket"> | string
    q3?: StringFilter<"Angket"> | string
    q4?: StringFilter<"Angket"> | string
    q5?: StringFilter<"Angket"> | string
    q6?: StringFilter<"Angket"> | string
    q7?: StringFilter<"Angket"> | string
    q8?: StringFilter<"Angket"> | string
    q9?: StringFilter<"Angket"> | string
    q10?: StringFilter<"Angket"> | string
    q11?: StringFilter<"Angket"> | string
    q12?: StringFilter<"Angket"> | string
    q13?: StringFilter<"Angket"> | string
    q14?: StringFilter<"Angket"> | string
    q15?: StringFilter<"Angket"> | string
    q16?: StringFilter<"Angket"> | string
    q17?: StringFilter<"Angket"> | string
    q18?: StringFilter<"Angket"> | string
    q19?: StringFilter<"Angket"> | string
    q20?: StringFilter<"Angket"> | string
    q21?: StringFilter<"Angket"> | string
    q22?: StringFilter<"Angket"> | string
    q23?: StringFilter<"Angket"> | string
    q24?: StringFilter<"Angket"> | string
    q25?: StringFilter<"Angket"> | string
    q26?: StringFilter<"Angket"> | string
    q27?: StringFilter<"Angket"> | string
    q28?: StringFilter<"Angket"> | string
    q29?: StringFilter<"Angket"> | string
    q30?: StringFilter<"Angket"> | string
    q31?: StringFilter<"Angket"> | string
    q32?: StringFilter<"Angket"> | string
    q33?: StringFilter<"Angket"> | string
    q34?: StringFilter<"Angket"> | string
  }

  export type AngketOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AngketWhereInput | AngketWhereInput[]
    OR?: AngketWhereInput[]
    NOT?: AngketWhereInput | AngketWhereInput[]
    createdAt?: DateTimeFilter<"Angket"> | Date | string
    q1?: StringFilter<"Angket"> | string
    q2?: StringFilter<"Angket"> | string
    q3?: StringFilter<"Angket"> | string
    q4?: StringFilter<"Angket"> | string
    q5?: StringFilter<"Angket"> | string
    q6?: StringFilter<"Angket"> | string
    q7?: StringFilter<"Angket"> | string
    q8?: StringFilter<"Angket"> | string
    q9?: StringFilter<"Angket"> | string
    q10?: StringFilter<"Angket"> | string
    q11?: StringFilter<"Angket"> | string
    q12?: StringFilter<"Angket"> | string
    q13?: StringFilter<"Angket"> | string
    q14?: StringFilter<"Angket"> | string
    q15?: StringFilter<"Angket"> | string
    q16?: StringFilter<"Angket"> | string
    q17?: StringFilter<"Angket"> | string
    q18?: StringFilter<"Angket"> | string
    q19?: StringFilter<"Angket"> | string
    q20?: StringFilter<"Angket"> | string
    q21?: StringFilter<"Angket"> | string
    q22?: StringFilter<"Angket"> | string
    q23?: StringFilter<"Angket"> | string
    q24?: StringFilter<"Angket"> | string
    q25?: StringFilter<"Angket"> | string
    q26?: StringFilter<"Angket"> | string
    q27?: StringFilter<"Angket"> | string
    q28?: StringFilter<"Angket"> | string
    q29?: StringFilter<"Angket"> | string
    q30?: StringFilter<"Angket"> | string
    q31?: StringFilter<"Angket"> | string
    q32?: StringFilter<"Angket"> | string
    q33?: StringFilter<"Angket"> | string
    q34?: StringFilter<"Angket"> | string
  }, "id">

  export type AngketOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
    _count?: AngketCountOrderByAggregateInput
    _max?: AngketMaxOrderByAggregateInput
    _min?: AngketMinOrderByAggregateInput
  }

  export type AngketScalarWhereWithAggregatesInput = {
    AND?: AngketScalarWhereWithAggregatesInput | AngketScalarWhereWithAggregatesInput[]
    OR?: AngketScalarWhereWithAggregatesInput[]
    NOT?: AngketScalarWhereWithAggregatesInput | AngketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Angket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Angket"> | Date | string
    q1?: StringWithAggregatesFilter<"Angket"> | string
    q2?: StringWithAggregatesFilter<"Angket"> | string
    q3?: StringWithAggregatesFilter<"Angket"> | string
    q4?: StringWithAggregatesFilter<"Angket"> | string
    q5?: StringWithAggregatesFilter<"Angket"> | string
    q6?: StringWithAggregatesFilter<"Angket"> | string
    q7?: StringWithAggregatesFilter<"Angket"> | string
    q8?: StringWithAggregatesFilter<"Angket"> | string
    q9?: StringWithAggregatesFilter<"Angket"> | string
    q10?: StringWithAggregatesFilter<"Angket"> | string
    q11?: StringWithAggregatesFilter<"Angket"> | string
    q12?: StringWithAggregatesFilter<"Angket"> | string
    q13?: StringWithAggregatesFilter<"Angket"> | string
    q14?: StringWithAggregatesFilter<"Angket"> | string
    q15?: StringWithAggregatesFilter<"Angket"> | string
    q16?: StringWithAggregatesFilter<"Angket"> | string
    q17?: StringWithAggregatesFilter<"Angket"> | string
    q18?: StringWithAggregatesFilter<"Angket"> | string
    q19?: StringWithAggregatesFilter<"Angket"> | string
    q20?: StringWithAggregatesFilter<"Angket"> | string
    q21?: StringWithAggregatesFilter<"Angket"> | string
    q22?: StringWithAggregatesFilter<"Angket"> | string
    q23?: StringWithAggregatesFilter<"Angket"> | string
    q24?: StringWithAggregatesFilter<"Angket"> | string
    q25?: StringWithAggregatesFilter<"Angket"> | string
    q26?: StringWithAggregatesFilter<"Angket"> | string
    q27?: StringWithAggregatesFilter<"Angket"> | string
    q28?: StringWithAggregatesFilter<"Angket"> | string
    q29?: StringWithAggregatesFilter<"Angket"> | string
    q30?: StringWithAggregatesFilter<"Angket"> | string
    q31?: StringWithAggregatesFilter<"Angket"> | string
    q32?: StringWithAggregatesFilter<"Angket"> | string
    q33?: StringWithAggregatesFilter<"Angket"> | string
    q34?: StringWithAggregatesFilter<"Angket"> | string
  }

  export type AngketxiWhereInput = {
    AND?: AngketxiWhereInput | AngketxiWhereInput[]
    OR?: AngketxiWhereInput[]
    NOT?: AngketxiWhereInput | AngketxiWhereInput[]
    id?: StringFilter<"Angketxi"> | string
    createdAt?: DateTimeFilter<"Angketxi"> | Date | string
    q1?: StringFilter<"Angketxi"> | string
    q2?: StringFilter<"Angketxi"> | string
    q3?: StringFilter<"Angketxi"> | string
    q4?: StringFilter<"Angketxi"> | string
    q5?: StringFilter<"Angketxi"> | string
    q6?: StringFilter<"Angketxi"> | string
    q7?: StringFilter<"Angketxi"> | string
    q8?: StringFilter<"Angketxi"> | string
    q9?: StringFilter<"Angketxi"> | string
    q10?: StringFilter<"Angketxi"> | string
    q11?: StringFilter<"Angketxi"> | string
    q12?: StringFilter<"Angketxi"> | string
    q13?: StringFilter<"Angketxi"> | string
    q14?: StringFilter<"Angketxi"> | string
    q15?: StringFilter<"Angketxi"> | string
    q16?: StringFilter<"Angketxi"> | string
    q17?: StringFilter<"Angketxi"> | string
    q18?: StringFilter<"Angketxi"> | string
    q19?: StringFilter<"Angketxi"> | string
    q20?: StringFilter<"Angketxi"> | string
    q21?: StringFilter<"Angketxi"> | string
    q22?: StringFilter<"Angketxi"> | string
    q23?: StringFilter<"Angketxi"> | string
    q24?: StringFilter<"Angketxi"> | string
    q25?: StringFilter<"Angketxi"> | string
    q26?: StringFilter<"Angketxi"> | string
    q27?: StringFilter<"Angketxi"> | string
    q28?: StringFilter<"Angketxi"> | string
    q29?: StringFilter<"Angketxi"> | string
    q30?: StringFilter<"Angketxi"> | string
    q31?: StringFilter<"Angketxi"> | string
    q32?: StringFilter<"Angketxi"> | string
    q33?: StringFilter<"Angketxi"> | string
    q34?: StringFilter<"Angketxi"> | string
  }

  export type AngketxiOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketxiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AngketxiWhereInput | AngketxiWhereInput[]
    OR?: AngketxiWhereInput[]
    NOT?: AngketxiWhereInput | AngketxiWhereInput[]
    createdAt?: DateTimeFilter<"Angketxi"> | Date | string
    q1?: StringFilter<"Angketxi"> | string
    q2?: StringFilter<"Angketxi"> | string
    q3?: StringFilter<"Angketxi"> | string
    q4?: StringFilter<"Angketxi"> | string
    q5?: StringFilter<"Angketxi"> | string
    q6?: StringFilter<"Angketxi"> | string
    q7?: StringFilter<"Angketxi"> | string
    q8?: StringFilter<"Angketxi"> | string
    q9?: StringFilter<"Angketxi"> | string
    q10?: StringFilter<"Angketxi"> | string
    q11?: StringFilter<"Angketxi"> | string
    q12?: StringFilter<"Angketxi"> | string
    q13?: StringFilter<"Angketxi"> | string
    q14?: StringFilter<"Angketxi"> | string
    q15?: StringFilter<"Angketxi"> | string
    q16?: StringFilter<"Angketxi"> | string
    q17?: StringFilter<"Angketxi"> | string
    q18?: StringFilter<"Angketxi"> | string
    q19?: StringFilter<"Angketxi"> | string
    q20?: StringFilter<"Angketxi"> | string
    q21?: StringFilter<"Angketxi"> | string
    q22?: StringFilter<"Angketxi"> | string
    q23?: StringFilter<"Angketxi"> | string
    q24?: StringFilter<"Angketxi"> | string
    q25?: StringFilter<"Angketxi"> | string
    q26?: StringFilter<"Angketxi"> | string
    q27?: StringFilter<"Angketxi"> | string
    q28?: StringFilter<"Angketxi"> | string
    q29?: StringFilter<"Angketxi"> | string
    q30?: StringFilter<"Angketxi"> | string
    q31?: StringFilter<"Angketxi"> | string
    q32?: StringFilter<"Angketxi"> | string
    q33?: StringFilter<"Angketxi"> | string
    q34?: StringFilter<"Angketxi"> | string
  }, "id">

  export type AngketxiOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
    _count?: AngketxiCountOrderByAggregateInput
    _max?: AngketxiMaxOrderByAggregateInput
    _min?: AngketxiMinOrderByAggregateInput
  }

  export type AngketxiScalarWhereWithAggregatesInput = {
    AND?: AngketxiScalarWhereWithAggregatesInput | AngketxiScalarWhereWithAggregatesInput[]
    OR?: AngketxiScalarWhereWithAggregatesInput[]
    NOT?: AngketxiScalarWhereWithAggregatesInput | AngketxiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Angketxi"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Angketxi"> | Date | string
    q1?: StringWithAggregatesFilter<"Angketxi"> | string
    q2?: StringWithAggregatesFilter<"Angketxi"> | string
    q3?: StringWithAggregatesFilter<"Angketxi"> | string
    q4?: StringWithAggregatesFilter<"Angketxi"> | string
    q5?: StringWithAggregatesFilter<"Angketxi"> | string
    q6?: StringWithAggregatesFilter<"Angketxi"> | string
    q7?: StringWithAggregatesFilter<"Angketxi"> | string
    q8?: StringWithAggregatesFilter<"Angketxi"> | string
    q9?: StringWithAggregatesFilter<"Angketxi"> | string
    q10?: StringWithAggregatesFilter<"Angketxi"> | string
    q11?: StringWithAggregatesFilter<"Angketxi"> | string
    q12?: StringWithAggregatesFilter<"Angketxi"> | string
    q13?: StringWithAggregatesFilter<"Angketxi"> | string
    q14?: StringWithAggregatesFilter<"Angketxi"> | string
    q15?: StringWithAggregatesFilter<"Angketxi"> | string
    q16?: StringWithAggregatesFilter<"Angketxi"> | string
    q17?: StringWithAggregatesFilter<"Angketxi"> | string
    q18?: StringWithAggregatesFilter<"Angketxi"> | string
    q19?: StringWithAggregatesFilter<"Angketxi"> | string
    q20?: StringWithAggregatesFilter<"Angketxi"> | string
    q21?: StringWithAggregatesFilter<"Angketxi"> | string
    q22?: StringWithAggregatesFilter<"Angketxi"> | string
    q23?: StringWithAggregatesFilter<"Angketxi"> | string
    q24?: StringWithAggregatesFilter<"Angketxi"> | string
    q25?: StringWithAggregatesFilter<"Angketxi"> | string
    q26?: StringWithAggregatesFilter<"Angketxi"> | string
    q27?: StringWithAggregatesFilter<"Angketxi"> | string
    q28?: StringWithAggregatesFilter<"Angketxi"> | string
    q29?: StringWithAggregatesFilter<"Angketxi"> | string
    q30?: StringWithAggregatesFilter<"Angketxi"> | string
    q31?: StringWithAggregatesFilter<"Angketxi"> | string
    q32?: StringWithAggregatesFilter<"Angketxi"> | string
    q33?: StringWithAggregatesFilter<"Angketxi"> | string
    q34?: StringWithAggregatesFilter<"Angketxi"> | string
  }

  export type AngketxiiWhereInput = {
    AND?: AngketxiiWhereInput | AngketxiiWhereInput[]
    OR?: AngketxiiWhereInput[]
    NOT?: AngketxiiWhereInput | AngketxiiWhereInput[]
    id?: StringFilter<"Angketxii"> | string
    createdAt?: DateTimeFilter<"Angketxii"> | Date | string
    q1?: StringFilter<"Angketxii"> | string
    q2?: StringFilter<"Angketxii"> | string
    q3?: StringFilter<"Angketxii"> | string
    q4?: StringFilter<"Angketxii"> | string
    q5?: StringFilter<"Angketxii"> | string
    q6?: StringFilter<"Angketxii"> | string
    q7?: StringFilter<"Angketxii"> | string
    q8?: StringFilter<"Angketxii"> | string
    q9?: StringFilter<"Angketxii"> | string
    q10?: StringFilter<"Angketxii"> | string
    q11?: StringFilter<"Angketxii"> | string
    q12?: StringFilter<"Angketxii"> | string
    q13?: StringFilter<"Angketxii"> | string
    q14?: StringFilter<"Angketxii"> | string
    q15?: StringFilter<"Angketxii"> | string
    q16?: StringFilter<"Angketxii"> | string
    q17?: StringFilter<"Angketxii"> | string
    q18?: StringFilter<"Angketxii"> | string
    q19?: StringFilter<"Angketxii"> | string
    q20?: StringFilter<"Angketxii"> | string
    q21?: StringFilter<"Angketxii"> | string
    q22?: StringFilter<"Angketxii"> | string
    q23?: StringFilter<"Angketxii"> | string
    q24?: StringFilter<"Angketxii"> | string
    q25?: StringFilter<"Angketxii"> | string
    q26?: StringFilter<"Angketxii"> | string
    q27?: StringFilter<"Angketxii"> | string
    q28?: StringFilter<"Angketxii"> | string
    q29?: StringFilter<"Angketxii"> | string
    q30?: StringFilter<"Angketxii"> | string
    q31?: StringFilter<"Angketxii"> | string
    q32?: StringFilter<"Angketxii"> | string
    q33?: StringFilter<"Angketxii"> | string
    q34?: StringFilter<"Angketxii"> | string
  }

  export type AngketxiiOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketxiiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AngketxiiWhereInput | AngketxiiWhereInput[]
    OR?: AngketxiiWhereInput[]
    NOT?: AngketxiiWhereInput | AngketxiiWhereInput[]
    createdAt?: DateTimeFilter<"Angketxii"> | Date | string
    q1?: StringFilter<"Angketxii"> | string
    q2?: StringFilter<"Angketxii"> | string
    q3?: StringFilter<"Angketxii"> | string
    q4?: StringFilter<"Angketxii"> | string
    q5?: StringFilter<"Angketxii"> | string
    q6?: StringFilter<"Angketxii"> | string
    q7?: StringFilter<"Angketxii"> | string
    q8?: StringFilter<"Angketxii"> | string
    q9?: StringFilter<"Angketxii"> | string
    q10?: StringFilter<"Angketxii"> | string
    q11?: StringFilter<"Angketxii"> | string
    q12?: StringFilter<"Angketxii"> | string
    q13?: StringFilter<"Angketxii"> | string
    q14?: StringFilter<"Angketxii"> | string
    q15?: StringFilter<"Angketxii"> | string
    q16?: StringFilter<"Angketxii"> | string
    q17?: StringFilter<"Angketxii"> | string
    q18?: StringFilter<"Angketxii"> | string
    q19?: StringFilter<"Angketxii"> | string
    q20?: StringFilter<"Angketxii"> | string
    q21?: StringFilter<"Angketxii"> | string
    q22?: StringFilter<"Angketxii"> | string
    q23?: StringFilter<"Angketxii"> | string
    q24?: StringFilter<"Angketxii"> | string
    q25?: StringFilter<"Angketxii"> | string
    q26?: StringFilter<"Angketxii"> | string
    q27?: StringFilter<"Angketxii"> | string
    q28?: StringFilter<"Angketxii"> | string
    q29?: StringFilter<"Angketxii"> | string
    q30?: StringFilter<"Angketxii"> | string
    q31?: StringFilter<"Angketxii"> | string
    q32?: StringFilter<"Angketxii"> | string
    q33?: StringFilter<"Angketxii"> | string
    q34?: StringFilter<"Angketxii"> | string
  }, "id">

  export type AngketxiiOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
    _count?: AngketxiiCountOrderByAggregateInput
    _max?: AngketxiiMaxOrderByAggregateInput
    _min?: AngketxiiMinOrderByAggregateInput
  }

  export type AngketxiiScalarWhereWithAggregatesInput = {
    AND?: AngketxiiScalarWhereWithAggregatesInput | AngketxiiScalarWhereWithAggregatesInput[]
    OR?: AngketxiiScalarWhereWithAggregatesInput[]
    NOT?: AngketxiiScalarWhereWithAggregatesInput | AngketxiiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Angketxii"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Angketxii"> | Date | string
    q1?: StringWithAggregatesFilter<"Angketxii"> | string
    q2?: StringWithAggregatesFilter<"Angketxii"> | string
    q3?: StringWithAggregatesFilter<"Angketxii"> | string
    q4?: StringWithAggregatesFilter<"Angketxii"> | string
    q5?: StringWithAggregatesFilter<"Angketxii"> | string
    q6?: StringWithAggregatesFilter<"Angketxii"> | string
    q7?: StringWithAggregatesFilter<"Angketxii"> | string
    q8?: StringWithAggregatesFilter<"Angketxii"> | string
    q9?: StringWithAggregatesFilter<"Angketxii"> | string
    q10?: StringWithAggregatesFilter<"Angketxii"> | string
    q11?: StringWithAggregatesFilter<"Angketxii"> | string
    q12?: StringWithAggregatesFilter<"Angketxii"> | string
    q13?: StringWithAggregatesFilter<"Angketxii"> | string
    q14?: StringWithAggregatesFilter<"Angketxii"> | string
    q15?: StringWithAggregatesFilter<"Angketxii"> | string
    q16?: StringWithAggregatesFilter<"Angketxii"> | string
    q17?: StringWithAggregatesFilter<"Angketxii"> | string
    q18?: StringWithAggregatesFilter<"Angketxii"> | string
    q19?: StringWithAggregatesFilter<"Angketxii"> | string
    q20?: StringWithAggregatesFilter<"Angketxii"> | string
    q21?: StringWithAggregatesFilter<"Angketxii"> | string
    q22?: StringWithAggregatesFilter<"Angketxii"> | string
    q23?: StringWithAggregatesFilter<"Angketxii"> | string
    q24?: StringWithAggregatesFilter<"Angketxii"> | string
    q25?: StringWithAggregatesFilter<"Angketxii"> | string
    q26?: StringWithAggregatesFilter<"Angketxii"> | string
    q27?: StringWithAggregatesFilter<"Angketxii"> | string
    q28?: StringWithAggregatesFilter<"Angketxii"> | string
    q29?: StringWithAggregatesFilter<"Angketxii"> | string
    q30?: StringWithAggregatesFilter<"Angketxii"> | string
    q31?: StringWithAggregatesFilter<"Angketxii"> | string
    q32?: StringWithAggregatesFilter<"Angketxii"> | string
    q33?: StringWithAggregatesFilter<"Angketxii"> | string
    q34?: StringWithAggregatesFilter<"Angketxii"> | string
  }

  export type AngketCreateInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketCreateManyInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketxiCreateInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketxiUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketxiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketxiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketxiCreateManyInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketxiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketxiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketxiiCreateInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketxiiUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketxiiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketxiiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketxiiCreateManyInput = {
    id?: string
    createdAt?: Date | string
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    q6: string
    q7: string
    q8: string
    q9: string
    q10: string
    q11: string
    q12: string
    q13: string
    q14: string
    q15: string
    q16: string
    q17: string
    q18: string
    q19: string
    q20: string
    q21: string
    q22: string
    q23: string
    q24: string
    q25: string
    q26: string
    q27: string
    q28: string
    q29: string
    q30: string
    q31: string
    q32: string
    q33: string
    q34: string
  }

  export type AngketxiiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type AngketxiiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    q6?: StringFieldUpdateOperationsInput | string
    q7?: StringFieldUpdateOperationsInput | string
    q8?: StringFieldUpdateOperationsInput | string
    q9?: StringFieldUpdateOperationsInput | string
    q10?: StringFieldUpdateOperationsInput | string
    q11?: StringFieldUpdateOperationsInput | string
    q12?: StringFieldUpdateOperationsInput | string
    q13?: StringFieldUpdateOperationsInput | string
    q14?: StringFieldUpdateOperationsInput | string
    q15?: StringFieldUpdateOperationsInput | string
    q16?: StringFieldUpdateOperationsInput | string
    q17?: StringFieldUpdateOperationsInput | string
    q18?: StringFieldUpdateOperationsInput | string
    q19?: StringFieldUpdateOperationsInput | string
    q20?: StringFieldUpdateOperationsInput | string
    q21?: StringFieldUpdateOperationsInput | string
    q22?: StringFieldUpdateOperationsInput | string
    q23?: StringFieldUpdateOperationsInput | string
    q24?: StringFieldUpdateOperationsInput | string
    q25?: StringFieldUpdateOperationsInput | string
    q26?: StringFieldUpdateOperationsInput | string
    q27?: StringFieldUpdateOperationsInput | string
    q28?: StringFieldUpdateOperationsInput | string
    q29?: StringFieldUpdateOperationsInput | string
    q30?: StringFieldUpdateOperationsInput | string
    q31?: StringFieldUpdateOperationsInput | string
    q32?: StringFieldUpdateOperationsInput | string
    q33?: StringFieldUpdateOperationsInput | string
    q34?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AngketCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AngketxiCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketxiMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketxiMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketxiiCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketxiiMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type AngketxiiMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    q8?: SortOrder
    q9?: SortOrder
    q10?: SortOrder
    q11?: SortOrder
    q12?: SortOrder
    q13?: SortOrder
    q14?: SortOrder
    q15?: SortOrder
    q16?: SortOrder
    q17?: SortOrder
    q18?: SortOrder
    q19?: SortOrder
    q20?: SortOrder
    q21?: SortOrder
    q22?: SortOrder
    q23?: SortOrder
    q24?: SortOrder
    q25?: SortOrder
    q26?: SortOrder
    q27?: SortOrder
    q28?: SortOrder
    q29?: SortOrder
    q30?: SortOrder
    q31?: SortOrder
    q32?: SortOrder
    q33?: SortOrder
    q34?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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