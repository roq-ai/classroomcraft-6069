/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model content
 *
 */
export type content = $Result.DefaultSelection<Prisma.$contentPayload>;
/**
 * Model institution
 *
 */
export type institution = $Result.DefaultSelection<Prisma.$institutionPayload>;
/**
 * Model learning_module
 *
 */
export type learning_module = $Result.DefaultSelection<Prisma.$learning_modulePayload>;
/**
 * Model lesson_plan
 *
 */
export type lesson_plan = $Result.DefaultSelection<Prisma.$lesson_planPayload>;
/**
 * Model proposal
 *
 */
export type proposal = $Result.DefaultSelection<Prisma.$proposalPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contents
 * const contents = await prisma.content.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contents
   * const contents = await prisma.content.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **content** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Contents
   * const contents = await prisma.content.findMany()
   * ```
   */
  get content(): Prisma.contentDelegate<ExtArgs>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **institution** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Institutions
   * const institutions = await prisma.institution.findMany()
   * ```
   */
  get institution(): Prisma.institutionDelegate<ExtArgs>;

  /**
   * `prisma.learning_module`: Exposes CRUD operations for the **learning_module** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Learning_modules
   * const learning_modules = await prisma.learning_module.findMany()
   * ```
   */
  get learning_module(): Prisma.learning_moduleDelegate<ExtArgs>;

  /**
   * `prisma.lesson_plan`: Exposes CRUD operations for the **lesson_plan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Lesson_plans
   * const lesson_plans = await prisma.lesson_plan.findMany()
   * ```
   */
  get lesson_plan(): Prisma.lesson_planDelegate<ExtArgs>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **proposal** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Proposals
   * const proposals = await prisma.proposal.findMany()
   * ```
   */
  get proposal(): Prisma.proposalDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    content: 'content';
    institution: 'institution';
    learning_module: 'learning_module';
    lesson_plan: 'lesson_plan';
    proposal: 'proposal';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'content' | 'institution' | 'learning_module' | 'lesson_plan' | 'proposal' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      content: {
        payload: Prisma.$contentPayload<ExtArgs>;
        fields: Prisma.contentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.contentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.contentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          findFirst: {
            args: Prisma.contentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.contentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          findMany: {
            args: Prisma.contentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>[];
          };
          create: {
            args: Prisma.contentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          createMany: {
            args: Prisma.contentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.contentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          update: {
            args: Prisma.contentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          deleteMany: {
            args: Prisma.contentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.contentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.contentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContent>;
          };
          groupBy: {
            args: Prisma.contentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContentGroupByOutputType>[];
          };
          count: {
            args: Prisma.contentCountArgs<ExtArgs>;
            result: $Utils.Optional<ContentCountAggregateOutputType> | number;
          };
        };
      };
      institution: {
        payload: Prisma.$institutionPayload<ExtArgs>;
        fields: Prisma.institutionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.institutionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.institutionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          findFirst: {
            args: Prisma.institutionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.institutionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          findMany: {
            args: Prisma.institutionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>[];
          };
          create: {
            args: Prisma.institutionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          createMany: {
            args: Prisma.institutionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.institutionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          update: {
            args: Prisma.institutionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          deleteMany: {
            args: Prisma.institutionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.institutionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.institutionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>;
          };
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInstitution>;
          };
          groupBy: {
            args: Prisma.institutionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InstitutionGroupByOutputType>[];
          };
          count: {
            args: Prisma.institutionCountArgs<ExtArgs>;
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number;
          };
        };
      };
      learning_module: {
        payload: Prisma.$learning_modulePayload<ExtArgs>;
        fields: Prisma.learning_moduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.learning_moduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.learning_moduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          findFirst: {
            args: Prisma.learning_moduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.learning_moduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          findMany: {
            args: Prisma.learning_moduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>[];
          };
          create: {
            args: Prisma.learning_moduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          createMany: {
            args: Prisma.learning_moduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.learning_moduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          update: {
            args: Prisma.learning_moduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          deleteMany: {
            args: Prisma.learning_moduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.learning_moduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.learning_moduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$learning_modulePayload>;
          };
          aggregate: {
            args: Prisma.Learning_moduleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLearning_module>;
          };
          groupBy: {
            args: Prisma.learning_moduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Learning_moduleGroupByOutputType>[];
          };
          count: {
            args: Prisma.learning_moduleCountArgs<ExtArgs>;
            result: $Utils.Optional<Learning_moduleCountAggregateOutputType> | number;
          };
        };
      };
      lesson_plan: {
        payload: Prisma.$lesson_planPayload<ExtArgs>;
        fields: Prisma.lesson_planFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.lesson_planFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.lesson_planFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          findFirst: {
            args: Prisma.lesson_planFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.lesson_planFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          findMany: {
            args: Prisma.lesson_planFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>[];
          };
          create: {
            args: Prisma.lesson_planCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          createMany: {
            args: Prisma.lesson_planCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.lesson_planDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          update: {
            args: Prisma.lesson_planUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          deleteMany: {
            args: Prisma.lesson_planDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.lesson_planUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.lesson_planUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lesson_planPayload>;
          };
          aggregate: {
            args: Prisma.Lesson_planAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLesson_plan>;
          };
          groupBy: {
            args: Prisma.lesson_planGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Lesson_planGroupByOutputType>[];
          };
          count: {
            args: Prisma.lesson_planCountArgs<ExtArgs>;
            result: $Utils.Optional<Lesson_planCountAggregateOutputType> | number;
          };
        };
      };
      proposal: {
        payload: Prisma.$proposalPayload<ExtArgs>;
        fields: Prisma.proposalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.proposalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.proposalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          findFirst: {
            args: Prisma.proposalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.proposalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          findMany: {
            args: Prisma.proposalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>[];
          };
          create: {
            args: Prisma.proposalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          createMany: {
            args: Prisma.proposalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.proposalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          update: {
            args: Prisma.proposalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          deleteMany: {
            args: Prisma.proposalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.proposalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.proposalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>;
          };
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProposal>;
          };
          groupBy: {
            args: Prisma.proposalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProposalGroupByOutputType>[];
          };
          count: {
            args: Prisma.proposalCountArgs<ExtArgs>;
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    learning_module: number;
    lesson_plan: number;
    proposal: number;
  };

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learning_module?: boolean | ContentCountOutputTypeCountLearning_moduleArgs;
    lesson_plan?: boolean | ContentCountOutputTypeCountLesson_planArgs;
    proposal?: boolean | ContentCountOutputTypeCountProposalArgs;
  };

  // Custom InputTypes

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountLearning_moduleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: learning_moduleWhereInput;
  };

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountLesson_planArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: lesson_planWhereInput;
  };

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountProposalArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: proposalWhereInput;
  };

  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    user: number;
  };

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InstitutionCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    content: number;
    learning_module: number;
    lesson_plan: number;
    proposal: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | UserCountOutputTypeCountContentArgs;
    learning_module?: boolean | UserCountOutputTypeCountLearning_moduleArgs;
    lesson_plan?: boolean | UserCountOutputTypeCountLesson_planArgs;
    proposal?: boolean | UserCountOutputTypeCountProposalArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: contentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearning_moduleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: learning_moduleWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLesson_planArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: lesson_planWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: proposalWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null;
    _avg: ContentAvgAggregateOutputType | null;
    _sum: ContentSumAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
  };

  export type ContentAvgAggregateOutputType = {
    grade_level: number | null;
  };

  export type ContentSumAggregateOutputType = {
    grade_level: number | null;
  };

  export type ContentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    subject: string | null;
    grade_level: number | null;
    created_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    subject: string | null;
    grade_level: number | null;
    created_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContentCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    subject: number;
    grade_level: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ContentAvgAggregateInputType = {
    grade_level?: true;
  };

  export type ContentSumAggregateInputType = {
    grade_level?: true;
  };

  export type ContentMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContentMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContentCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    subject?: true;
    grade_level?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which content to aggregate.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contents
     **/
    _count?: true | ContentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ContentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ContentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContentMaxAggregateInputType;
  };

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
    [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>;
  };

  export type contentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contentWhereInput;
    orderBy?: contentOrderByWithAggregationInput | contentOrderByWithAggregationInput[];
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum;
    having?: contentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentCountAggregateInputType | true;
    _avg?: ContentAvgAggregateInputType;
    _sum?: ContentSumAggregateInputType;
    _min?: ContentMinAggregateInputType;
    _max?: ContentMaxAggregateInputType;
  };

  export type ContentGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    subject: string;
    grade_level: number;
    created_by: string;
    created_at: Date;
    updated_at: Date;
    _count: ContentCountAggregateOutputType | null;
    _avg: ContentAvgAggregateOutputType | null;
    _sum: ContentSumAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
  };

  type GetContentGroupByPayload<T extends contentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ContentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
          : GetScalarType<T[P], ContentGroupByOutputType[P]>;
      }
    >
  >;

  export type contentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      subject?: boolean;
      grade_level?: boolean;
      created_by?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      learning_module?: boolean | content$learning_moduleArgs<ExtArgs>;
      lesson_plan?: boolean | content$lesson_planArgs<ExtArgs>;
      proposal?: boolean | content$proposalArgs<ExtArgs>;
      _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['content']
  >;

  export type contentSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    subject?: boolean;
    grade_level?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type contentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    learning_module?: boolean | content$learning_moduleArgs<ExtArgs>;
    lesson_plan?: boolean | content$lesson_planArgs<ExtArgs>;
    proposal?: boolean | content$proposalArgs<ExtArgs>;
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $contentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'content';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      learning_module: Prisma.$learning_modulePayload<ExtArgs>[];
      lesson_plan: Prisma.$lesson_planPayload<ExtArgs>[];
      proposal: Prisma.$proposalPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        subject: string;
        grade_level: number;
        created_by: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['content']
    >;
    composites: {};
  };

  type contentGetPayload<S extends boolean | null | undefined | contentDefaultArgs> = $Result.GetResult<
    Prisma.$contentPayload,
    S
  >;

  type contentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    contentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ContentCountAggregateInputType | true;
  };

  export interface contentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['content']; meta: { name: 'content' } };
    /**
     * Find zero or one Content that matches the filter.
     * @param {contentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends contentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contentFindUniqueArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Content that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {contentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends contentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends contentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindFirstArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends contentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     *
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends contentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Content.
     * @param {contentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     *
     **/
    create<T extends contentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contentCreateArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Contents.
     *     @param {contentCreateManyArgs} args - Arguments to create many Contents.
     *     @example
     *     // Create many Contents
     *     const content = await prisma.content.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends contentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Content.
     * @param {contentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     *
     **/
    delete<T extends contentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contentDeleteArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Content.
     * @param {contentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends contentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpdateArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Contents.
     * @param {contentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends contentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends contentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Content.
     * @param {contentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     **/
    upsert<T extends contentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpsertArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
     **/
    count<T extends contentCountArgs>(
      args?: Subset<T, contentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentAggregateArgs>(
      args: Subset<T, ContentAggregateArgs>,
    ): Prisma.PrismaPromise<GetContentAggregateType<T>>;

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentGroupByArgs} args - Group by arguments.
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
      T extends contentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contentGroupByArgs['orderBy'] }
        : { orderBy?: contentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, contentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the content model
     */
    readonly fields: contentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    learning_module<T extends content$learning_moduleArgs<ExtArgs> = {}>(
      args?: Subset<T, content$learning_moduleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findMany'> | Null>;

    lesson_plan<T extends content$lesson_planArgs<ExtArgs> = {}>(
      args?: Subset<T, content$lesson_planArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findMany'> | Null>;

    proposal<T extends content$proposalArgs<ExtArgs> = {}>(
      args?: Subset<T, content$proposalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the content model
   */
  interface contentFieldRefs {
    readonly id: FieldRef<'content', 'String'>;
    readonly title: FieldRef<'content', 'String'>;
    readonly description: FieldRef<'content', 'String'>;
    readonly subject: FieldRef<'content', 'String'>;
    readonly grade_level: FieldRef<'content', 'Int'>;
    readonly created_by: FieldRef<'content', 'String'>;
    readonly created_at: FieldRef<'content', 'DateTime'>;
    readonly updated_at: FieldRef<'content', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * content findUnique
   */
  export type contentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content findUniqueOrThrow
   */
  export type contentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content findFirst
   */
  export type contentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content findFirstOrThrow
   */
  export type contentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content findMany
   */
  export type contentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which contents to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content create
   */
  export type contentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The data needed to create a content.
     */
    data: XOR<contentCreateInput, contentUncheckedCreateInput>;
  };

  /**
   * content createMany
   */
  export type contentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contents.
     */
    data: contentCreateManyInput | contentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * content update
   */
  export type contentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The data needed to update a content.
     */
    data: XOR<contentUpdateInput, contentUncheckedUpdateInput>;
    /**
     * Choose, which content to update.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content updateMany
   */
  export type contentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contents.
     */
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyInput>;
    /**
     * Filter which contents to update
     */
    where?: contentWhereInput;
  };

  /**
   * content upsert
   */
  export type contentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The filter to search for the content to update in case it exists.
     */
    where: contentWhereUniqueInput;
    /**
     * In case the content found by the `where` argument doesn't exist, create a new content with this data.
     */
    create: XOR<contentCreateInput, contentUncheckedCreateInput>;
    /**
     * In case the content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contentUpdateInput, contentUncheckedUpdateInput>;
  };

  /**
   * content delete
   */
  export type contentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter which content to delete.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content deleteMany
   */
  export type contentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contents to delete
     */
    where?: contentWhereInput;
  };

  /**
   * content.learning_module
   */
  export type content$learning_moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    where?: learning_moduleWhereInput;
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    cursor?: learning_moduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
  };

  /**
   * content.lesson_plan
   */
  export type content$lesson_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    where?: lesson_planWhereInput;
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    cursor?: lesson_planWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * content.proposal
   */
  export type content$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    where?: proposalWhereInput;
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    cursor?: proposalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * content without action
   */
  export type contentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
  };

  /**
   * Model institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null;
    _min: InstitutionMinAggregateOutputType | null;
    _max: InstitutionMaxAggregateOutputType | null;
  };

  export type InstitutionMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    website: string | null;
    established_on: Date | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InstitutionMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    website: string | null;
    established_on: Date | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InstitutionCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    contact_number: number;
    website: number;
    established_on: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InstitutionMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    website?: true;
    established_on?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InstitutionMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    website?: true;
    established_on?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InstitutionCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    website?: true;
    established_on?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which institution to aggregate.
     */
    where?: institutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: institutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` institutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned institutions
     **/
    _count?: true | InstitutionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InstitutionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InstitutionMaxAggregateInputType;
  };

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
    [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>;
  };

  export type institutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: institutionWhereInput;
    orderBy?: institutionOrderByWithAggregationInput | institutionOrderByWithAggregationInput[];
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum;
    having?: institutionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstitutionCountAggregateInputType | true;
    _min?: InstitutionMinAggregateInputType;
    _max?: InstitutionMaxAggregateInputType;
  };

  export type InstitutionGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    website: string | null;
    established_on: Date | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: InstitutionCountAggregateOutputType | null;
    _min: InstitutionMinAggregateOutputType | null;
    _max: InstitutionMaxAggregateOutputType | null;
  };

  type GetInstitutionGroupByPayload<T extends institutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InstitutionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
          : GetScalarType<T[P], InstitutionGroupByOutputType[P]>;
      }
    >
  >;

  export type institutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        location?: boolean;
        contact_number?: boolean;
        website?: boolean;
        established_on?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | institution$userArgs<ExtArgs>;
        _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['institution']
    >;

  export type institutionSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    contact_number?: boolean;
    website?: boolean;
    established_on?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type institutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | institution$userArgs<ExtArgs>;
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $institutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'institution';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        contact_number: string | null;
        website: string | null;
        established_on: Date | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['institution']
    >;
    composites: {};
  };

  type institutionGetPayload<S extends boolean | null | undefined | institutionDefaultArgs> = $Result.GetResult<
    Prisma.$institutionPayload,
    S
  >;

  type institutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    institutionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InstitutionCountAggregateInputType | true;
  };

  export interface institutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['institution']; meta: { name: 'institution' } };
    /**
     * Find zero or one Institution that matches the filter.
     * @param {institutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends institutionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, institutionFindUniqueArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Institution that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {institutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends institutionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends institutionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionFindFirstArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends institutionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     *
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends institutionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Institution.
     * @param {institutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     *
     **/
    create<T extends institutionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, institutionCreateArgs<ExtArgs>>,
    ): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Institutions.
     *     @param {institutionCreateManyArgs} args - Arguments to create many Institutions.
     *     @example
     *     // Create many Institutions
     *     const institution = await prisma.institution.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends institutionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Institution.
     * @param {institutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     *
     **/
    delete<T extends institutionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, institutionDeleteArgs<ExtArgs>>,
    ): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Institution.
     * @param {institutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends institutionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, institutionUpdateArgs<ExtArgs>>,
    ): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Institutions.
     * @param {institutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends institutionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, institutionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends institutionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, institutionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Institution.
     * @param {institutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     **/
    upsert<T extends institutionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, institutionUpsertArgs<ExtArgs>>,
    ): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
     **/
    count<T extends institutionCountArgs>(
      args?: Subset<T, institutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstitutionAggregateArgs>(
      args: Subset<T, InstitutionAggregateArgs>,
    ): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>;

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionGroupByArgs} args - Group by arguments.
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
      T extends institutionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: institutionGroupByArgs['orderBy'] }
        : { orderBy?: institutionGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, institutionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the institution model
     */
    readonly fields: institutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__institutionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends institution$userArgs<ExtArgs> = {}>(
      args?: Subset<T, institution$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the institution model
   */
  interface institutionFieldRefs {
    readonly id: FieldRef<'institution', 'String'>;
    readonly description: FieldRef<'institution', 'String'>;
    readonly location: FieldRef<'institution', 'String'>;
    readonly contact_number: FieldRef<'institution', 'String'>;
    readonly website: FieldRef<'institution', 'String'>;
    readonly established_on: FieldRef<'institution', 'DateTime'>;
    readonly name: FieldRef<'institution', 'String'>;
    readonly created_at: FieldRef<'institution', 'DateTime'>;
    readonly updated_at: FieldRef<'institution', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * institution findUnique
   */
  export type institutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institution to fetch.
     */
    where: institutionWhereUniqueInput;
  };

  /**
   * institution findUniqueOrThrow
   */
  export type institutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institution to fetch.
     */
    where: institutionWhereUniqueInput;
  };

  /**
   * institution findFirst
   */
  export type institutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institution to fetch.
     */
    where?: institutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for institutions.
     */
    cursor?: institutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` institutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[];
  };

  /**
   * institution findFirstOrThrow
   */
  export type institutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institution to fetch.
     */
    where?: institutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for institutions.
     */
    cursor?: institutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` institutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[];
  };

  /**
   * institution findMany
   */
  export type institutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter, which institutions to fetch.
     */
    where?: institutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing institutions.
     */
    cursor?: institutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` institutions.
     */
    skip?: number;
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[];
  };

  /**
   * institution create
   */
  export type institutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * The data needed to create a institution.
     */
    data: XOR<institutionCreateInput, institutionUncheckedCreateInput>;
  };

  /**
   * institution createMany
   */
  export type institutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many institutions.
     */
    data: institutionCreateManyInput | institutionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * institution update
   */
  export type institutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * The data needed to update a institution.
     */
    data: XOR<institutionUpdateInput, institutionUncheckedUpdateInput>;
    /**
     * Choose, which institution to update.
     */
    where: institutionWhereUniqueInput;
  };

  /**
   * institution updateMany
   */
  export type institutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update institutions.
     */
    data: XOR<institutionUpdateManyMutationInput, institutionUncheckedUpdateManyInput>;
    /**
     * Filter which institutions to update
     */
    where?: institutionWhereInput;
  };

  /**
   * institution upsert
   */
  export type institutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * The filter to search for the institution to update in case it exists.
     */
    where: institutionWhereUniqueInput;
    /**
     * In case the institution found by the `where` argument doesn't exist, create a new institution with this data.
     */
    create: XOR<institutionCreateInput, institutionUncheckedCreateInput>;
    /**
     * In case the institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<institutionUpdateInput, institutionUncheckedUpdateInput>;
  };

  /**
   * institution delete
   */
  export type institutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    /**
     * Filter which institution to delete.
     */
    where: institutionWhereUniqueInput;
  };

  /**
   * institution deleteMany
   */
  export type institutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which institutions to delete
     */
    where?: institutionWhereInput;
  };

  /**
   * institution.user
   */
  export type institution$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * institution without action
   */
  export type institutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
  };

  /**
   * Model learning_module
   */

  export type AggregateLearning_module = {
    _count: Learning_moduleCountAggregateOutputType | null;
    _avg: Learning_moduleAvgAggregateOutputType | null;
    _sum: Learning_moduleSumAggregateOutputType | null;
    _min: Learning_moduleMinAggregateOutputType | null;
    _max: Learning_moduleMaxAggregateOutputType | null;
  };

  export type Learning_moduleAvgAggregateOutputType = {
    duration: number | null;
  };

  export type Learning_moduleSumAggregateOutputType = {
    duration: number | null;
  };

  export type Learning_moduleMinAggregateOutputType = {
    id: string | null;
    content_id: string | null;
    created_by: string | null;
    module_type: string | null;
    duration: number | null;
    objectives: string | null;
    resources: string | null;
    assessment: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Learning_moduleMaxAggregateOutputType = {
    id: string | null;
    content_id: string | null;
    created_by: string | null;
    module_type: string | null;
    duration: number | null;
    objectives: string | null;
    resources: string | null;
    assessment: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Learning_moduleCountAggregateOutputType = {
    id: number;
    content_id: number;
    created_by: number;
    module_type: number;
    duration: number;
    objectives: number;
    resources: number;
    assessment: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Learning_moduleAvgAggregateInputType = {
    duration?: true;
  };

  export type Learning_moduleSumAggregateInputType = {
    duration?: true;
  };

  export type Learning_moduleMinAggregateInputType = {
    id?: true;
    content_id?: true;
    created_by?: true;
    module_type?: true;
    duration?: true;
    objectives?: true;
    resources?: true;
    assessment?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Learning_moduleMaxAggregateInputType = {
    id?: true;
    content_id?: true;
    created_by?: true;
    module_type?: true;
    duration?: true;
    objectives?: true;
    resources?: true;
    assessment?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Learning_moduleCountAggregateInputType = {
    id?: true;
    content_id?: true;
    created_by?: true;
    module_type?: true;
    duration?: true;
    objectives?: true;
    resources?: true;
    assessment?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Learning_moduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which learning_module to aggregate.
     */
    where?: learning_moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of learning_modules to fetch.
     */
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: learning_moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` learning_modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` learning_modules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned learning_modules
     **/
    _count?: true | Learning_moduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Learning_moduleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Learning_moduleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Learning_moduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Learning_moduleMaxAggregateInputType;
  };

  export type GetLearning_moduleAggregateType<T extends Learning_moduleAggregateArgs> = {
    [P in keyof T & keyof AggregateLearning_module]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearning_module[P]>
      : GetScalarType<T[P], AggregateLearning_module[P]>;
  };

  export type learning_moduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: learning_moduleWhereInput;
    orderBy?: learning_moduleOrderByWithAggregationInput | learning_moduleOrderByWithAggregationInput[];
    by: Learning_moduleScalarFieldEnum[] | Learning_moduleScalarFieldEnum;
    having?: learning_moduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Learning_moduleCountAggregateInputType | true;
    _avg?: Learning_moduleAvgAggregateInputType;
    _sum?: Learning_moduleSumAggregateInputType;
    _min?: Learning_moduleMinAggregateInputType;
    _max?: Learning_moduleMaxAggregateInputType;
  };

  export type Learning_moduleGroupByOutputType = {
    id: string;
    content_id: string;
    created_by: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at: Date;
    updated_at: Date;
    _count: Learning_moduleCountAggregateOutputType | null;
    _avg: Learning_moduleAvgAggregateOutputType | null;
    _sum: Learning_moduleSumAggregateOutputType | null;
    _min: Learning_moduleMinAggregateOutputType | null;
    _max: Learning_moduleMaxAggregateOutputType | null;
  };

  type GetLearning_moduleGroupByPayload<T extends learning_moduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Learning_moduleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Learning_moduleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Learning_moduleGroupByOutputType[P]>
          : GetScalarType<T[P], Learning_moduleGroupByOutputType[P]>;
      }
    >
  >;

  export type learning_moduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        content_id?: boolean;
        created_by?: boolean;
        module_type?: boolean;
        duration?: boolean;
        objectives?: boolean;
        resources?: boolean;
        assessment?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        content?: boolean | contentDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['learning_module']
    >;

  export type learning_moduleSelectScalar = {
    id?: boolean;
    content_id?: boolean;
    created_by?: boolean;
    module_type?: boolean;
    duration?: boolean;
    objectives?: boolean;
    resources?: boolean;
    assessment?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type learning_moduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | contentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $learning_modulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'learning_module';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content_id: string;
        created_by: string;
        module_type: string;
        duration: number;
        objectives: string;
        resources: string;
        assessment: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['learning_module']
    >;
    composites: {};
  };

  type learning_moduleGetPayload<S extends boolean | null | undefined | learning_moduleDefaultArgs> = $Result.GetResult<
    Prisma.$learning_modulePayload,
    S
  >;

  type learning_moduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    learning_moduleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Learning_moduleCountAggregateInputType | true;
  };

  export interface learning_moduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['learning_module']; meta: { name: 'learning_module' } };
    /**
     * Find zero or one Learning_module that matches the filter.
     * @param {learning_moduleFindUniqueArgs} args - Arguments to find a Learning_module
     * @example
     * // Get one Learning_module
     * const learning_module = await prisma.learning_module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends learning_moduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Learning_module that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {learning_moduleFindUniqueOrThrowArgs} args - Arguments to find a Learning_module
     * @example
     * // Get one Learning_module
     * const learning_module = await prisma.learning_module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends learning_moduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Learning_module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleFindFirstArgs} args - Arguments to find a Learning_module
     * @example
     * // Get one Learning_module
     * const learning_module = await prisma.learning_module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends learning_moduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleFindFirstArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Learning_module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleFindFirstOrThrowArgs} args - Arguments to find a Learning_module
     * @example
     * // Get one Learning_module
     * const learning_module = await prisma.learning_module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends learning_moduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Learning_modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Learning_modules
     * const learning_modules = await prisma.learning_module.findMany()
     *
     * // Get first 10 Learning_modules
     * const learning_modules = await prisma.learning_module.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const learning_moduleWithIdOnly = await prisma.learning_module.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends learning_moduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Learning_module.
     * @param {learning_moduleCreateArgs} args - Arguments to create a Learning_module.
     * @example
     * // Create one Learning_module
     * const Learning_module = await prisma.learning_module.create({
     *   data: {
     *     // ... data to create a Learning_module
     *   }
     * })
     *
     **/
    create<T extends learning_moduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleCreateArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Learning_modules.
     *     @param {learning_moduleCreateManyArgs} args - Arguments to create many Learning_modules.
     *     @example
     *     // Create many Learning_modules
     *     const learning_module = await prisma.learning_module.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends learning_moduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Learning_module.
     * @param {learning_moduleDeleteArgs} args - Arguments to delete one Learning_module.
     * @example
     * // Delete one Learning_module
     * const Learning_module = await prisma.learning_module.delete({
     *   where: {
     *     // ... filter to delete one Learning_module
     *   }
     * })
     *
     **/
    delete<T extends learning_moduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleDeleteArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Learning_module.
     * @param {learning_moduleUpdateArgs} args - Arguments to update one Learning_module.
     * @example
     * // Update one Learning_module
     * const learning_module = await prisma.learning_module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends learning_moduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleUpdateArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Learning_modules.
     * @param {learning_moduleDeleteManyArgs} args - Arguments to filter Learning_modules to delete.
     * @example
     * // Delete a few Learning_modules
     * const { count } = await prisma.learning_module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends learning_moduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, learning_moduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Learning_modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Learning_modules
     * const learning_module = await prisma.learning_module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends learning_moduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Learning_module.
     * @param {learning_moduleUpsertArgs} args - Arguments to update or create a Learning_module.
     * @example
     * // Update or create a Learning_module
     * const learning_module = await prisma.learning_module.upsert({
     *   create: {
     *     // ... data to create a Learning_module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Learning_module we want to update
     *   }
     * })
     **/
    upsert<T extends learning_moduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, learning_moduleUpsertArgs<ExtArgs>>,
    ): Prisma__learning_moduleClient<
      $Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Learning_modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleCountArgs} args - Arguments to filter Learning_modules to count.
     * @example
     * // Count the number of Learning_modules
     * const count = await prisma.learning_module.count({
     *   where: {
     *     // ... the filter for the Learning_modules we want to count
     *   }
     * })
     **/
    count<T extends learning_moduleCountArgs>(
      args?: Subset<T, learning_moduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Learning_moduleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Learning_module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Learning_moduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Learning_moduleAggregateArgs>(
      args: Subset<T, Learning_moduleAggregateArgs>,
    ): Prisma.PrismaPromise<GetLearning_moduleAggregateType<T>>;

    /**
     * Group by Learning_module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_moduleGroupByArgs} args - Group by arguments.
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
      T extends learning_moduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: learning_moduleGroupByArgs['orderBy'] }
        : { orderBy?: learning_moduleGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, learning_moduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLearning_moduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the learning_module model
     */
    readonly fields: learning_moduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for learning_module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__learning_moduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends contentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, contentDefaultArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the learning_module model
   */
  interface learning_moduleFieldRefs {
    readonly id: FieldRef<'learning_module', 'String'>;
    readonly content_id: FieldRef<'learning_module', 'String'>;
    readonly created_by: FieldRef<'learning_module', 'String'>;
    readonly module_type: FieldRef<'learning_module', 'String'>;
    readonly duration: FieldRef<'learning_module', 'Int'>;
    readonly objectives: FieldRef<'learning_module', 'String'>;
    readonly resources: FieldRef<'learning_module', 'String'>;
    readonly assessment: FieldRef<'learning_module', 'String'>;
    readonly created_at: FieldRef<'learning_module', 'DateTime'>;
    readonly updated_at: FieldRef<'learning_module', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * learning_module findUnique
   */
  export type learning_moduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * Filter, which learning_module to fetch.
     */
    where: learning_moduleWhereUniqueInput;
  };

  /**
   * learning_module findUniqueOrThrow
   */
  export type learning_moduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the learning_module
       */
      select?: learning_moduleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: learning_moduleInclude<ExtArgs> | null;
      /**
       * Filter, which learning_module to fetch.
       */
      where: learning_moduleWhereUniqueInput;
    };

  /**
   * learning_module findFirst
   */
  export type learning_moduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * Filter, which learning_module to fetch.
     */
    where?: learning_moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of learning_modules to fetch.
     */
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for learning_modules.
     */
    cursor?: learning_moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` learning_modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` learning_modules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of learning_modules.
     */
    distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
  };

  /**
   * learning_module findFirstOrThrow
   */
  export type learning_moduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the learning_module
       */
      select?: learning_moduleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: learning_moduleInclude<ExtArgs> | null;
      /**
       * Filter, which learning_module to fetch.
       */
      where?: learning_moduleWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of learning_modules to fetch.
       */
      orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for learning_modules.
       */
      cursor?: learning_moduleWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` learning_modules from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` learning_modules.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of learning_modules.
       */
      distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
    };

  /**
   * learning_module findMany
   */
  export type learning_moduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * Filter, which learning_modules to fetch.
     */
    where?: learning_moduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of learning_modules to fetch.
     */
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing learning_modules.
     */
    cursor?: learning_moduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` learning_modules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` learning_modules.
     */
    skip?: number;
    distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
  };

  /**
   * learning_module create
   */
  export type learning_moduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * The data needed to create a learning_module.
     */
    data: XOR<learning_moduleCreateInput, learning_moduleUncheckedCreateInput>;
  };

  /**
   * learning_module createMany
   */
  export type learning_moduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many learning_modules.
     */
    data: learning_moduleCreateManyInput | learning_moduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * learning_module update
   */
  export type learning_moduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * The data needed to update a learning_module.
     */
    data: XOR<learning_moduleUpdateInput, learning_moduleUncheckedUpdateInput>;
    /**
     * Choose, which learning_module to update.
     */
    where: learning_moduleWhereUniqueInput;
  };

  /**
   * learning_module updateMany
   */
  export type learning_moduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update learning_modules.
     */
    data: XOR<learning_moduleUpdateManyMutationInput, learning_moduleUncheckedUpdateManyInput>;
    /**
     * Filter which learning_modules to update
     */
    where?: learning_moduleWhereInput;
  };

  /**
   * learning_module upsert
   */
  export type learning_moduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * The filter to search for the learning_module to update in case it exists.
     */
    where: learning_moduleWhereUniqueInput;
    /**
     * In case the learning_module found by the `where` argument doesn't exist, create a new learning_module with this data.
     */
    create: XOR<learning_moduleCreateInput, learning_moduleUncheckedCreateInput>;
    /**
     * In case the learning_module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<learning_moduleUpdateInput, learning_moduleUncheckedUpdateInput>;
  };

  /**
   * learning_module delete
   */
  export type learning_moduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    /**
     * Filter which learning_module to delete.
     */
    where: learning_moduleWhereUniqueInput;
  };

  /**
   * learning_module deleteMany
   */
  export type learning_moduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which learning_modules to delete
     */
    where?: learning_moduleWhereInput;
  };

  /**
   * learning_module without action
   */
  export type learning_moduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
  };

  /**
   * Model lesson_plan
   */

  export type AggregateLesson_plan = {
    _count: Lesson_planCountAggregateOutputType | null;
    _avg: Lesson_planAvgAggregateOutputType | null;
    _sum: Lesson_planSumAggregateOutputType | null;
    _min: Lesson_planMinAggregateOutputType | null;
    _max: Lesson_planMaxAggregateOutputType | null;
  };

  export type Lesson_planAvgAggregateOutputType = {
    duration: number | null;
  };

  export type Lesson_planSumAggregateOutputType = {
    duration: number | null;
  };

  export type Lesson_planMinAggregateOutputType = {
    id: string | null;
    content_id: string | null;
    created_by: string | null;
    duration: number | null;
    objectives: string | null;
    resources: string | null;
    assessment: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Lesson_planMaxAggregateOutputType = {
    id: string | null;
    content_id: string | null;
    created_by: string | null;
    duration: number | null;
    objectives: string | null;
    resources: string | null;
    assessment: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Lesson_planCountAggregateOutputType = {
    id: number;
    content_id: number;
    created_by: number;
    duration: number;
    objectives: number;
    resources: number;
    assessment: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Lesson_planAvgAggregateInputType = {
    duration?: true;
  };

  export type Lesson_planSumAggregateInputType = {
    duration?: true;
  };

  export type Lesson_planMinAggregateInputType = {
    id?: true;
    content_id?: true;
    created_by?: true;
    duration?: true;
    objectives?: true;
    resources?: true;
    assessment?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Lesson_planMaxAggregateInputType = {
    id?: true;
    content_id?: true;
    created_by?: true;
    duration?: true;
    objectives?: true;
    resources?: true;
    assessment?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Lesson_planCountAggregateInputType = {
    id?: true;
    content_id?: true;
    created_by?: true;
    duration?: true;
    objectives?: true;
    resources?: true;
    assessment?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Lesson_planAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lesson_plan to aggregate.
     */
    where?: lesson_planWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lesson_plans to fetch.
     */
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: lesson_planWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lesson_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lesson_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned lesson_plans
     **/
    _count?: true | Lesson_planCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Lesson_planAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Lesson_planSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Lesson_planMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Lesson_planMaxAggregateInputType;
  };

  export type GetLesson_planAggregateType<T extends Lesson_planAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson_plan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson_plan[P]>
      : GetScalarType<T[P], AggregateLesson_plan[P]>;
  };

  export type lesson_planGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lesson_planWhereInput;
    orderBy?: lesson_planOrderByWithAggregationInput | lesson_planOrderByWithAggregationInput[];
    by: Lesson_planScalarFieldEnum[] | Lesson_planScalarFieldEnum;
    having?: lesson_planScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lesson_planCountAggregateInputType | true;
    _avg?: Lesson_planAvgAggregateInputType;
    _sum?: Lesson_planSumAggregateInputType;
    _min?: Lesson_planMinAggregateInputType;
    _max?: Lesson_planMaxAggregateInputType;
  };

  export type Lesson_planGroupByOutputType = {
    id: string;
    content_id: string;
    created_by: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at: Date;
    updated_at: Date;
    _count: Lesson_planCountAggregateOutputType | null;
    _avg: Lesson_planAvgAggregateOutputType | null;
    _sum: Lesson_planSumAggregateOutputType | null;
    _min: Lesson_planMinAggregateOutputType | null;
    _max: Lesson_planMaxAggregateOutputType | null;
  };

  type GetLesson_planGroupByPayload<T extends lesson_planGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lesson_planGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Lesson_planGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Lesson_planGroupByOutputType[P]>
          : GetScalarType<T[P], Lesson_planGroupByOutputType[P]>;
      }
    >
  >;

  export type lesson_planSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        content_id?: boolean;
        created_by?: boolean;
        duration?: boolean;
        objectives?: boolean;
        resources?: boolean;
        assessment?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        content?: boolean | contentDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['lesson_plan']
    >;

  export type lesson_planSelectScalar = {
    id?: boolean;
    content_id?: boolean;
    created_by?: boolean;
    duration?: boolean;
    objectives?: boolean;
    resources?: boolean;
    assessment?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type lesson_planInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | contentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $lesson_planPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'lesson_plan';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content_id: string;
        created_by: string;
        duration: number;
        objectives: string;
        resources: string;
        assessment: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['lesson_plan']
    >;
    composites: {};
  };

  type lesson_planGetPayload<S extends boolean | null | undefined | lesson_planDefaultArgs> = $Result.GetResult<
    Prisma.$lesson_planPayload,
    S
  >;

  type lesson_planCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    lesson_planFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Lesson_planCountAggregateInputType | true;
  };

  export interface lesson_planDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lesson_plan']; meta: { name: 'lesson_plan' } };
    /**
     * Find zero or one Lesson_plan that matches the filter.
     * @param {lesson_planFindUniqueArgs} args - Arguments to find a Lesson_plan
     * @example
     * // Get one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends lesson_planFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planFindUniqueArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<
      $Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Lesson_plan that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {lesson_planFindUniqueOrThrowArgs} args - Arguments to find a Lesson_plan
     * @example
     * // Get one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends lesson_planFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<
      $Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Lesson_plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planFindFirstArgs} args - Arguments to find a Lesson_plan
     * @example
     * // Get one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends lesson_planFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planFindFirstArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<
      $Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Lesson_plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planFindFirstOrThrowArgs} args - Arguments to find a Lesson_plan
     * @example
     * // Get one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends lesson_planFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<
      $Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Lesson_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lesson_plans
     * const lesson_plans = await prisma.lesson_plan.findMany()
     *
     * // Get first 10 Lesson_plans
     * const lesson_plans = await prisma.lesson_plan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lesson_planWithIdOnly = await prisma.lesson_plan.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends lesson_planFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Lesson_plan.
     * @param {lesson_planCreateArgs} args - Arguments to create a Lesson_plan.
     * @example
     * // Create one Lesson_plan
     * const Lesson_plan = await prisma.lesson_plan.create({
     *   data: {
     *     // ... data to create a Lesson_plan
     *   }
     * })
     *
     **/
    create<T extends lesson_planCreateArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planCreateArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Lesson_plans.
     *     @param {lesson_planCreateManyArgs} args - Arguments to create many Lesson_plans.
     *     @example
     *     // Create many Lesson_plans
     *     const lesson_plan = await prisma.lesson_plan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends lesson_planCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Lesson_plan.
     * @param {lesson_planDeleteArgs} args - Arguments to delete one Lesson_plan.
     * @example
     * // Delete one Lesson_plan
     * const Lesson_plan = await prisma.lesson_plan.delete({
     *   where: {
     *     // ... filter to delete one Lesson_plan
     *   }
     * })
     *
     **/
    delete<T extends lesson_planDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planDeleteArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Lesson_plan.
     * @param {lesson_planUpdateArgs} args - Arguments to update one Lesson_plan.
     * @example
     * // Update one Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends lesson_planUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planUpdateArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Lesson_plans.
     * @param {lesson_planDeleteManyArgs} args - Arguments to filter Lesson_plans to delete.
     * @example
     * // Delete a few Lesson_plans
     * const { count } = await prisma.lesson_plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends lesson_planDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lesson_planDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Lesson_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lesson_plans
     * const lesson_plan = await prisma.lesson_plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends lesson_planUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Lesson_plan.
     * @param {lesson_planUpsertArgs} args - Arguments to update or create a Lesson_plan.
     * @example
     * // Update or create a Lesson_plan
     * const lesson_plan = await prisma.lesson_plan.upsert({
     *   create: {
     *     // ... data to create a Lesson_plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson_plan we want to update
     *   }
     * })
     **/
    upsert<T extends lesson_planUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, lesson_planUpsertArgs<ExtArgs>>,
    ): Prisma__lesson_planClient<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Lesson_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planCountArgs} args - Arguments to filter Lesson_plans to count.
     * @example
     * // Count the number of Lesson_plans
     * const count = await prisma.lesson_plan.count({
     *   where: {
     *     // ... the filter for the Lesson_plans we want to count
     *   }
     * })
     **/
    count<T extends lesson_planCountArgs>(
      args?: Subset<T, lesson_planCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lesson_planCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Lesson_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lesson_planAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lesson_planAggregateArgs>(
      args: Subset<T, Lesson_planAggregateArgs>,
    ): Prisma.PrismaPromise<GetLesson_planAggregateType<T>>;

    /**
     * Group by Lesson_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lesson_planGroupByArgs} args - Group by arguments.
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
      T extends lesson_planGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lesson_planGroupByArgs['orderBy'] }
        : { orderBy?: lesson_planGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, lesson_planGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLesson_planGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the lesson_plan model
     */
    readonly fields: lesson_planFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lesson_plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lesson_planClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends contentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, contentDefaultArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the lesson_plan model
   */
  interface lesson_planFieldRefs {
    readonly id: FieldRef<'lesson_plan', 'String'>;
    readonly content_id: FieldRef<'lesson_plan', 'String'>;
    readonly created_by: FieldRef<'lesson_plan', 'String'>;
    readonly duration: FieldRef<'lesson_plan', 'Int'>;
    readonly objectives: FieldRef<'lesson_plan', 'String'>;
    readonly resources: FieldRef<'lesson_plan', 'String'>;
    readonly assessment: FieldRef<'lesson_plan', 'String'>;
    readonly created_at: FieldRef<'lesson_plan', 'DateTime'>;
    readonly updated_at: FieldRef<'lesson_plan', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * lesson_plan findUnique
   */
  export type lesson_planFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plan to fetch.
     */
    where: lesson_planWhereUniqueInput;
  };

  /**
   * lesson_plan findUniqueOrThrow
   */
  export type lesson_planFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plan to fetch.
     */
    where: lesson_planWhereUniqueInput;
  };

  /**
   * lesson_plan findFirst
   */
  export type lesson_planFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plan to fetch.
     */
    where?: lesson_planWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lesson_plans to fetch.
     */
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lesson_plans.
     */
    cursor?: lesson_planWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lesson_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lesson_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lesson_plans.
     */
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * lesson_plan findFirstOrThrow
   */
  export type lesson_planFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plan to fetch.
     */
    where?: lesson_planWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lesson_plans to fetch.
     */
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lesson_plans.
     */
    cursor?: lesson_planWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lesson_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lesson_plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lesson_plans.
     */
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * lesson_plan findMany
   */
  export type lesson_planFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter, which lesson_plans to fetch.
     */
    where?: lesson_planWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lesson_plans to fetch.
     */
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing lesson_plans.
     */
    cursor?: lesson_planWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lesson_plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lesson_plans.
     */
    skip?: number;
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * lesson_plan create
   */
  export type lesson_planCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * The data needed to create a lesson_plan.
     */
    data: XOR<lesson_planCreateInput, lesson_planUncheckedCreateInput>;
  };

  /**
   * lesson_plan createMany
   */
  export type lesson_planCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lesson_plans.
     */
    data: lesson_planCreateManyInput | lesson_planCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * lesson_plan update
   */
  export type lesson_planUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * The data needed to update a lesson_plan.
     */
    data: XOR<lesson_planUpdateInput, lesson_planUncheckedUpdateInput>;
    /**
     * Choose, which lesson_plan to update.
     */
    where: lesson_planWhereUniqueInput;
  };

  /**
   * lesson_plan updateMany
   */
  export type lesson_planUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lesson_plans.
     */
    data: XOR<lesson_planUpdateManyMutationInput, lesson_planUncheckedUpdateManyInput>;
    /**
     * Filter which lesson_plans to update
     */
    where?: lesson_planWhereInput;
  };

  /**
   * lesson_plan upsert
   */
  export type lesson_planUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * The filter to search for the lesson_plan to update in case it exists.
     */
    where: lesson_planWhereUniqueInput;
    /**
     * In case the lesson_plan found by the `where` argument doesn't exist, create a new lesson_plan with this data.
     */
    create: XOR<lesson_planCreateInput, lesson_planUncheckedCreateInput>;
    /**
     * In case the lesson_plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lesson_planUpdateInput, lesson_planUncheckedUpdateInput>;
  };

  /**
   * lesson_plan delete
   */
  export type lesson_planDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    /**
     * Filter which lesson_plan to delete.
     */
    where: lesson_planWhereUniqueInput;
  };

  /**
   * lesson_plan deleteMany
   */
  export type lesson_planDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lesson_plans to delete
     */
    where?: lesson_planWhereInput;
  };

  /**
   * lesson_plan without action
   */
  export type lesson_planDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
  };

  /**
   * Model proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null;
    _min: ProposalMinAggregateOutputType | null;
    _max: ProposalMaxAggregateOutputType | null;
  };

  export type ProposalMinAggregateOutputType = {
    id: string | null;
    content_id: string | null;
    submitted_by: string | null;
    description: string | null;
    status: string | null;
    submitted_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProposalMaxAggregateOutputType = {
    id: string | null;
    content_id: string | null;
    submitted_by: string | null;
    description: string | null;
    status: string | null;
    submitted_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProposalCountAggregateOutputType = {
    id: number;
    content_id: number;
    submitted_by: number;
    description: number;
    status: number;
    submitted_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProposalMinAggregateInputType = {
    id?: true;
    content_id?: true;
    submitted_by?: true;
    description?: true;
    status?: true;
    submitted_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProposalMaxAggregateInputType = {
    id?: true;
    content_id?: true;
    submitted_by?: true;
    description?: true;
    status?: true;
    submitted_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProposalCountAggregateInputType = {
    id?: true;
    content_id?: true;
    submitted_by?: true;
    description?: true;
    status?: true;
    submitted_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proposal to aggregate.
     */
    where?: proposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: proposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned proposals
     **/
    _count?: true | ProposalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProposalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProposalMaxAggregateInputType;
  };

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
    [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>;
  };

  export type proposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proposalWhereInput;
    orderBy?: proposalOrderByWithAggregationInput | proposalOrderByWithAggregationInput[];
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum;
    having?: proposalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProposalCountAggregateInputType | true;
    _min?: ProposalMinAggregateInputType;
    _max?: ProposalMaxAggregateInputType;
  };

  export type ProposalGroupByOutputType = {
    id: string;
    content_id: string;
    submitted_by: string;
    description: string | null;
    status: string;
    submitted_at: Date;
    created_at: Date;
    updated_at: Date;
    _count: ProposalCountAggregateOutputType | null;
    _min: ProposalMinAggregateOutputType | null;
    _max: ProposalMaxAggregateOutputType | null;
  };

  type GetProposalGroupByPayload<T extends proposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProposalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
          : GetScalarType<T[P], ProposalGroupByOutputType[P]>;
      }
    >
  >;

  export type proposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        content_id?: boolean;
        submitted_by?: boolean;
        description?: boolean;
        status?: boolean;
        submitted_at?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        content?: boolean | contentDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['proposal']
    >;

  export type proposalSelectScalar = {
    id?: boolean;
    content_id?: boolean;
    submitted_by?: boolean;
    description?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type proposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | contentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $proposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'proposal';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content_id: string;
        submitted_by: string;
        description: string | null;
        status: string;
        submitted_at: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['proposal']
    >;
    composites: {};
  };

  type proposalGetPayload<S extends boolean | null | undefined | proposalDefaultArgs> = $Result.GetResult<
    Prisma.$proposalPayload,
    S
  >;

  type proposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    proposalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ProposalCountAggregateInputType | true;
  };

  export interface proposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proposal']; meta: { name: 'proposal' } };
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {proposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends proposalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, proposalFindUniqueArgs<ExtArgs>>,
    ): Prisma__proposalClient<
      $Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Proposal that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {proposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends proposalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__proposalClient<
      $Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends proposalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalFindFirstArgs<ExtArgs>>,
    ): Prisma__proposalClient<
      $Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends proposalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__proposalClient<
      $Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     *
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends proposalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Proposal.
     * @param {proposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     *
     **/
    create<T extends proposalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, proposalCreateArgs<ExtArgs>>,
    ): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Proposals.
     *     @param {proposalCreateManyArgs} args - Arguments to create many Proposals.
     *     @example
     *     // Create many Proposals
     *     const proposal = await prisma.proposal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends proposalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Proposal.
     * @param {proposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     *
     **/
    delete<T extends proposalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, proposalDeleteArgs<ExtArgs>>,
    ): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Proposal.
     * @param {proposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends proposalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, proposalUpdateArgs<ExtArgs>>,
    ): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Proposals.
     * @param {proposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends proposalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, proposalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends proposalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, proposalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Proposal.
     * @param {proposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     **/
    upsert<T extends proposalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, proposalUpsertArgs<ExtArgs>>,
    ): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
     **/
    count<T extends proposalCountArgs>(
      args?: Subset<T, proposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalAggregateArgs>(
      args: Subset<T, ProposalAggregateArgs>,
    ): Prisma.PrismaPromise<GetProposalAggregateType<T>>;

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalGroupByArgs} args - Group by arguments.
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
      T extends proposalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proposalGroupByArgs['orderBy'] }
        : { orderBy?: proposalGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, proposalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the proposal model
     */
    readonly fields: proposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proposalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends contentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, contentDefaultArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the proposal model
   */
  interface proposalFieldRefs {
    readonly id: FieldRef<'proposal', 'String'>;
    readonly content_id: FieldRef<'proposal', 'String'>;
    readonly submitted_by: FieldRef<'proposal', 'String'>;
    readonly description: FieldRef<'proposal', 'String'>;
    readonly status: FieldRef<'proposal', 'String'>;
    readonly submitted_at: FieldRef<'proposal', 'DateTime'>;
    readonly created_at: FieldRef<'proposal', 'DateTime'>;
    readonly updated_at: FieldRef<'proposal', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * proposal findUnique
   */
  export type proposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposal to fetch.
     */
    where: proposalWhereUniqueInput;
  };

  /**
   * proposal findUniqueOrThrow
   */
  export type proposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposal to fetch.
     */
    where: proposalWhereUniqueInput;
  };

  /**
   * proposal findFirst
   */
  export type proposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposal to fetch.
     */
    where?: proposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proposals.
     */
    cursor?: proposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * proposal findFirstOrThrow
   */
  export type proposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposal to fetch.
     */
    where?: proposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proposals.
     */
    cursor?: proposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * proposal findMany
   */
  export type proposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter, which proposals to fetch.
     */
    where?: proposalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing proposals.
     */
    cursor?: proposalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * proposal create
   */
  export type proposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * The data needed to create a proposal.
     */
    data: XOR<proposalCreateInput, proposalUncheckedCreateInput>;
  };

  /**
   * proposal createMany
   */
  export type proposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proposals.
     */
    data: proposalCreateManyInput | proposalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * proposal update
   */
  export type proposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * The data needed to update a proposal.
     */
    data: XOR<proposalUpdateInput, proposalUncheckedUpdateInput>;
    /**
     * Choose, which proposal to update.
     */
    where: proposalWhereUniqueInput;
  };

  /**
   * proposal updateMany
   */
  export type proposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proposals.
     */
    data: XOR<proposalUpdateManyMutationInput, proposalUncheckedUpdateManyInput>;
    /**
     * Filter which proposals to update
     */
    where?: proposalWhereInput;
  };

  /**
   * proposal upsert
   */
  export type proposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * The filter to search for the proposal to update in case it exists.
     */
    where: proposalWhereUniqueInput;
    /**
     * In case the proposal found by the `where` argument doesn't exist, create a new proposal with this data.
     */
    create: XOR<proposalCreateInput, proposalUncheckedCreateInput>;
    /**
     * In case the proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proposalUpdateInput, proposalUncheckedUpdateInput>;
  };

  /**
   * proposal delete
   */
  export type proposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    /**
     * Filter which proposal to delete.
     */
    where: proposalWhereUniqueInput;
  };

  /**
   * proposal deleteMany
   */
  export type proposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proposals to delete
     */
    where?: proposalWhereInput;
  };

  /**
   * proposal without action
   */
  export type proposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    institution_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    institution_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    institution_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    institution_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    institution_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    institution_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    institution_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      institution_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      content?: boolean | user$contentArgs<ExtArgs>;
      learning_module?: boolean | user$learning_moduleArgs<ExtArgs>;
      lesson_plan?: boolean | user$lesson_planArgs<ExtArgs>;
      proposal?: boolean | user$proposalArgs<ExtArgs>;
      institution?: boolean | user$institutionArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    institution_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | user$contentArgs<ExtArgs>;
    learning_module?: boolean | user$learning_moduleArgs<ExtArgs>;
    lesson_plan?: boolean | user$lesson_planArgs<ExtArgs>;
    proposal?: boolean | user$proposalArgs<ExtArgs>;
    institution?: boolean | user$institutionArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      content: Prisma.$contentPayload<ExtArgs>[];
      learning_module: Prisma.$learning_modulePayload<ExtArgs>[];
      lesson_plan: Prisma.$lesson_planPayload<ExtArgs>[];
      proposal: Prisma.$proposalPayload<ExtArgs>[];
      institution: Prisma.$institutionPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        institution_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    content<T extends user$contentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$contentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'> | Null>;

    learning_module<T extends user$learning_moduleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$learning_moduleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_modulePayload<ExtArgs>, T, 'findMany'> | Null>;

    lesson_plan<T extends user$lesson_planArgs<ExtArgs> = {}>(
      args?: Subset<T, user$lesson_planArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lesson_planPayload<ExtArgs>, T, 'findMany'> | Null>;

    proposal<T extends user$proposalArgs<ExtArgs> = {}>(
      args?: Subset<T, user$proposalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, 'findMany'> | Null>;

    institution<T extends user$institutionArgs<ExtArgs> = {}>(
      args?: Subset<T, user$institutionArgs<ExtArgs>>,
    ): Prisma__institutionClient<
      $Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly institution_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.content
   */
  export type user$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    where?: contentWhereInput;
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    cursor?: contentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * user.learning_module
   */
  export type user$learning_moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_module
     */
    select?: learning_moduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: learning_moduleInclude<ExtArgs> | null;
    where?: learning_moduleWhereInput;
    orderBy?: learning_moduleOrderByWithRelationInput | learning_moduleOrderByWithRelationInput[];
    cursor?: learning_moduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Learning_moduleScalarFieldEnum | Learning_moduleScalarFieldEnum[];
  };

  /**
   * user.lesson_plan
   */
  export type user$lesson_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson_plan
     */
    select?: lesson_planSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lesson_planInclude<ExtArgs> | null;
    where?: lesson_planWhereInput;
    orderBy?: lesson_planOrderByWithRelationInput | lesson_planOrderByWithRelationInput[];
    cursor?: lesson_planWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Lesson_planScalarFieldEnum | Lesson_planScalarFieldEnum[];
  };

  /**
   * user.proposal
   */
  export type user$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: proposalInclude<ExtArgs> | null;
    where?: proposalWhereInput;
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[];
    cursor?: proposalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[];
  };

  /**
   * user.institution
   */
  export type user$institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: institutionInclude<ExtArgs> | null;
    where?: institutionWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ContentScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    subject: 'subject';
    grade_level: 'grade_level';
    created_by: 'created_by';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum];

  export const InstitutionScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    contact_number: 'contact_number';
    website: 'website';
    established_on: 'established_on';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum];

  export const Learning_moduleScalarFieldEnum: {
    id: 'id';
    content_id: 'content_id';
    created_by: 'created_by';
    module_type: 'module_type';
    duration: 'duration';
    objectives: 'objectives';
    resources: 'resources';
    assessment: 'assessment';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Learning_moduleScalarFieldEnum =
    (typeof Learning_moduleScalarFieldEnum)[keyof typeof Learning_moduleScalarFieldEnum];

  export const Lesson_planScalarFieldEnum: {
    id: 'id';
    content_id: 'content_id';
    created_by: 'created_by';
    duration: 'duration';
    objectives: 'objectives';
    resources: 'resources';
    assessment: 'assessment';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Lesson_planScalarFieldEnum = (typeof Lesson_planScalarFieldEnum)[keyof typeof Lesson_planScalarFieldEnum];

  export const ProposalScalarFieldEnum: {
    id: 'id';
    content_id: 'content_id';
    submitted_by: 'submitted_by';
    description: 'description';
    status: 'status';
    submitted_at: 'submitted_at';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    institution_id: 'institution_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type contentWhereInput = {
    AND?: contentWhereInput | contentWhereInput[];
    OR?: contentWhereInput[];
    NOT?: contentWhereInput | contentWhereInput[];
    id?: UuidFilter<'content'> | string;
    title?: StringFilter<'content'> | string;
    description?: StringNullableFilter<'content'> | string | null;
    subject?: StringFilter<'content'> | string;
    grade_level?: IntFilter<'content'> | number;
    created_by?: UuidFilter<'content'> | string;
    created_at?: DateTimeFilter<'content'> | Date | string;
    updated_at?: DateTimeFilter<'content'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    learning_module?: Learning_moduleListRelationFilter;
    lesson_plan?: Lesson_planListRelationFilter;
    proposal?: ProposalListRelationFilter;
  };

  export type contentOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    learning_module?: learning_moduleOrderByRelationAggregateInput;
    lesson_plan?: lesson_planOrderByRelationAggregateInput;
    proposal?: proposalOrderByRelationAggregateInput;
  };

  export type contentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: contentWhereInput | contentWhereInput[];
      OR?: contentWhereInput[];
      NOT?: contentWhereInput | contentWhereInput[];
      title?: StringFilter<'content'> | string;
      description?: StringNullableFilter<'content'> | string | null;
      subject?: StringFilter<'content'> | string;
      grade_level?: IntFilter<'content'> | number;
      created_by?: UuidFilter<'content'> | string;
      created_at?: DateTimeFilter<'content'> | Date | string;
      updated_at?: DateTimeFilter<'content'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      learning_module?: Learning_moduleListRelationFilter;
      lesson_plan?: Lesson_planListRelationFilter;
      proposal?: ProposalListRelationFilter;
    },
    'id'
  >;

  export type contentOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: contentCountOrderByAggregateInput;
    _avg?: contentAvgOrderByAggregateInput;
    _max?: contentMaxOrderByAggregateInput;
    _min?: contentMinOrderByAggregateInput;
    _sum?: contentSumOrderByAggregateInput;
  };

  export type contentScalarWhereWithAggregatesInput = {
    AND?: contentScalarWhereWithAggregatesInput | contentScalarWhereWithAggregatesInput[];
    OR?: contentScalarWhereWithAggregatesInput[];
    NOT?: contentScalarWhereWithAggregatesInput | contentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'content'> | string;
    title?: StringWithAggregatesFilter<'content'> | string;
    description?: StringNullableWithAggregatesFilter<'content'> | string | null;
    subject?: StringWithAggregatesFilter<'content'> | string;
    grade_level?: IntWithAggregatesFilter<'content'> | number;
    created_by?: UuidWithAggregatesFilter<'content'> | string;
    created_at?: DateTimeWithAggregatesFilter<'content'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'content'> | Date | string;
  };

  export type institutionWhereInput = {
    AND?: institutionWhereInput | institutionWhereInput[];
    OR?: institutionWhereInput[];
    NOT?: institutionWhereInput | institutionWhereInput[];
    id?: UuidFilter<'institution'> | string;
    description?: StringNullableFilter<'institution'> | string | null;
    location?: StringNullableFilter<'institution'> | string | null;
    contact_number?: StringNullableFilter<'institution'> | string | null;
    website?: StringNullableFilter<'institution'> | string | null;
    established_on?: DateTimeNullableFilter<'institution'> | Date | string | null;
    name?: StringFilter<'institution'> | string;
    created_at?: DateTimeFilter<'institution'> | Date | string;
    updated_at?: DateTimeFilter<'institution'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type institutionOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    established_on?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type institutionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: institutionWhereInput | institutionWhereInput[];
      OR?: institutionWhereInput[];
      NOT?: institutionWhereInput | institutionWhereInput[];
      description?: StringNullableFilter<'institution'> | string | null;
      location?: StringNullableFilter<'institution'> | string | null;
      contact_number?: StringNullableFilter<'institution'> | string | null;
      website?: StringNullableFilter<'institution'> | string | null;
      established_on?: DateTimeNullableFilter<'institution'> | Date | string | null;
      name?: StringFilter<'institution'> | string;
      created_at?: DateTimeFilter<'institution'> | Date | string;
      updated_at?: DateTimeFilter<'institution'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type institutionOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    established_on?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: institutionCountOrderByAggregateInput;
    _max?: institutionMaxOrderByAggregateInput;
    _min?: institutionMinOrderByAggregateInput;
  };

  export type institutionScalarWhereWithAggregatesInput = {
    AND?: institutionScalarWhereWithAggregatesInput | institutionScalarWhereWithAggregatesInput[];
    OR?: institutionScalarWhereWithAggregatesInput[];
    NOT?: institutionScalarWhereWithAggregatesInput | institutionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'institution'> | string;
    description?: StringNullableWithAggregatesFilter<'institution'> | string | null;
    location?: StringNullableWithAggregatesFilter<'institution'> | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'institution'> | string | null;
    website?: StringNullableWithAggregatesFilter<'institution'> | string | null;
    established_on?: DateTimeNullableWithAggregatesFilter<'institution'> | Date | string | null;
    name?: StringWithAggregatesFilter<'institution'> | string;
    created_at?: DateTimeWithAggregatesFilter<'institution'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'institution'> | Date | string;
  };

  export type learning_moduleWhereInput = {
    AND?: learning_moduleWhereInput | learning_moduleWhereInput[];
    OR?: learning_moduleWhereInput[];
    NOT?: learning_moduleWhereInput | learning_moduleWhereInput[];
    id?: UuidFilter<'learning_module'> | string;
    content_id?: UuidFilter<'learning_module'> | string;
    created_by?: UuidFilter<'learning_module'> | string;
    module_type?: StringFilter<'learning_module'> | string;
    duration?: IntFilter<'learning_module'> | number;
    objectives?: StringFilter<'learning_module'> | string;
    resources?: StringFilter<'learning_module'> | string;
    assessment?: StringFilter<'learning_module'> | string;
    created_at?: DateTimeFilter<'learning_module'> | Date | string;
    updated_at?: DateTimeFilter<'learning_module'> | Date | string;
    content?: XOR<ContentRelationFilter, contentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type learning_moduleOrderByWithRelationInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    module_type?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type learning_moduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: learning_moduleWhereInput | learning_moduleWhereInput[];
      OR?: learning_moduleWhereInput[];
      NOT?: learning_moduleWhereInput | learning_moduleWhereInput[];
      content_id?: UuidFilter<'learning_module'> | string;
      created_by?: UuidFilter<'learning_module'> | string;
      module_type?: StringFilter<'learning_module'> | string;
      duration?: IntFilter<'learning_module'> | number;
      objectives?: StringFilter<'learning_module'> | string;
      resources?: StringFilter<'learning_module'> | string;
      assessment?: StringFilter<'learning_module'> | string;
      created_at?: DateTimeFilter<'learning_module'> | Date | string;
      updated_at?: DateTimeFilter<'learning_module'> | Date | string;
      content?: XOR<ContentRelationFilter, contentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type learning_moduleOrderByWithAggregationInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    module_type?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: learning_moduleCountOrderByAggregateInput;
    _avg?: learning_moduleAvgOrderByAggregateInput;
    _max?: learning_moduleMaxOrderByAggregateInput;
    _min?: learning_moduleMinOrderByAggregateInput;
    _sum?: learning_moduleSumOrderByAggregateInput;
  };

  export type learning_moduleScalarWhereWithAggregatesInput = {
    AND?: learning_moduleScalarWhereWithAggregatesInput | learning_moduleScalarWhereWithAggregatesInput[];
    OR?: learning_moduleScalarWhereWithAggregatesInput[];
    NOT?: learning_moduleScalarWhereWithAggregatesInput | learning_moduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'learning_module'> | string;
    content_id?: UuidWithAggregatesFilter<'learning_module'> | string;
    created_by?: UuidWithAggregatesFilter<'learning_module'> | string;
    module_type?: StringWithAggregatesFilter<'learning_module'> | string;
    duration?: IntWithAggregatesFilter<'learning_module'> | number;
    objectives?: StringWithAggregatesFilter<'learning_module'> | string;
    resources?: StringWithAggregatesFilter<'learning_module'> | string;
    assessment?: StringWithAggregatesFilter<'learning_module'> | string;
    created_at?: DateTimeWithAggregatesFilter<'learning_module'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'learning_module'> | Date | string;
  };

  export type lesson_planWhereInput = {
    AND?: lesson_planWhereInput | lesson_planWhereInput[];
    OR?: lesson_planWhereInput[];
    NOT?: lesson_planWhereInput | lesson_planWhereInput[];
    id?: UuidFilter<'lesson_plan'> | string;
    content_id?: UuidFilter<'lesson_plan'> | string;
    created_by?: UuidFilter<'lesson_plan'> | string;
    duration?: IntFilter<'lesson_plan'> | number;
    objectives?: StringFilter<'lesson_plan'> | string;
    resources?: StringFilter<'lesson_plan'> | string;
    assessment?: StringFilter<'lesson_plan'> | string;
    created_at?: DateTimeFilter<'lesson_plan'> | Date | string;
    updated_at?: DateTimeFilter<'lesson_plan'> | Date | string;
    content?: XOR<ContentRelationFilter, contentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type lesson_planOrderByWithRelationInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type lesson_planWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: lesson_planWhereInput | lesson_planWhereInput[];
      OR?: lesson_planWhereInput[];
      NOT?: lesson_planWhereInput | lesson_planWhereInput[];
      content_id?: UuidFilter<'lesson_plan'> | string;
      created_by?: UuidFilter<'lesson_plan'> | string;
      duration?: IntFilter<'lesson_plan'> | number;
      objectives?: StringFilter<'lesson_plan'> | string;
      resources?: StringFilter<'lesson_plan'> | string;
      assessment?: StringFilter<'lesson_plan'> | string;
      created_at?: DateTimeFilter<'lesson_plan'> | Date | string;
      updated_at?: DateTimeFilter<'lesson_plan'> | Date | string;
      content?: XOR<ContentRelationFilter, contentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type lesson_planOrderByWithAggregationInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: lesson_planCountOrderByAggregateInput;
    _avg?: lesson_planAvgOrderByAggregateInput;
    _max?: lesson_planMaxOrderByAggregateInput;
    _min?: lesson_planMinOrderByAggregateInput;
    _sum?: lesson_planSumOrderByAggregateInput;
  };

  export type lesson_planScalarWhereWithAggregatesInput = {
    AND?: lesson_planScalarWhereWithAggregatesInput | lesson_planScalarWhereWithAggregatesInput[];
    OR?: lesson_planScalarWhereWithAggregatesInput[];
    NOT?: lesson_planScalarWhereWithAggregatesInput | lesson_planScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'lesson_plan'> | string;
    content_id?: UuidWithAggregatesFilter<'lesson_plan'> | string;
    created_by?: UuidWithAggregatesFilter<'lesson_plan'> | string;
    duration?: IntWithAggregatesFilter<'lesson_plan'> | number;
    objectives?: StringWithAggregatesFilter<'lesson_plan'> | string;
    resources?: StringWithAggregatesFilter<'lesson_plan'> | string;
    assessment?: StringWithAggregatesFilter<'lesson_plan'> | string;
    created_at?: DateTimeWithAggregatesFilter<'lesson_plan'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'lesson_plan'> | Date | string;
  };

  export type proposalWhereInput = {
    AND?: proposalWhereInput | proposalWhereInput[];
    OR?: proposalWhereInput[];
    NOT?: proposalWhereInput | proposalWhereInput[];
    id?: UuidFilter<'proposal'> | string;
    content_id?: UuidFilter<'proposal'> | string;
    submitted_by?: UuidFilter<'proposal'> | string;
    description?: StringNullableFilter<'proposal'> | string | null;
    status?: StringFilter<'proposal'> | string;
    submitted_at?: DateTimeFilter<'proposal'> | Date | string;
    created_at?: DateTimeFilter<'proposal'> | Date | string;
    updated_at?: DateTimeFilter<'proposal'> | Date | string;
    content?: XOR<ContentRelationFilter, contentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type proposalOrderByWithRelationInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    submitted_by?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    submitted_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type proposalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: proposalWhereInput | proposalWhereInput[];
      OR?: proposalWhereInput[];
      NOT?: proposalWhereInput | proposalWhereInput[];
      content_id?: UuidFilter<'proposal'> | string;
      submitted_by?: UuidFilter<'proposal'> | string;
      description?: StringNullableFilter<'proposal'> | string | null;
      status?: StringFilter<'proposal'> | string;
      submitted_at?: DateTimeFilter<'proposal'> | Date | string;
      created_at?: DateTimeFilter<'proposal'> | Date | string;
      updated_at?: DateTimeFilter<'proposal'> | Date | string;
      content?: XOR<ContentRelationFilter, contentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type proposalOrderByWithAggregationInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    submitted_by?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    submitted_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: proposalCountOrderByAggregateInput;
    _max?: proposalMaxOrderByAggregateInput;
    _min?: proposalMinOrderByAggregateInput;
  };

  export type proposalScalarWhereWithAggregatesInput = {
    AND?: proposalScalarWhereWithAggregatesInput | proposalScalarWhereWithAggregatesInput[];
    OR?: proposalScalarWhereWithAggregatesInput[];
    NOT?: proposalScalarWhereWithAggregatesInput | proposalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'proposal'> | string;
    content_id?: UuidWithAggregatesFilter<'proposal'> | string;
    submitted_by?: UuidWithAggregatesFilter<'proposal'> | string;
    description?: StringNullableWithAggregatesFilter<'proposal'> | string | null;
    status?: StringWithAggregatesFilter<'proposal'> | string;
    submitted_at?: DateTimeWithAggregatesFilter<'proposal'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'proposal'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'proposal'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    institution_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    content?: ContentListRelationFilter;
    learning_module?: Learning_moduleListRelationFilter;
    lesson_plan?: Lesson_planListRelationFilter;
    proposal?: ProposalListRelationFilter;
    institution?: XOR<InstitutionNullableRelationFilter, institutionWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    content?: contentOrderByRelationAggregateInput;
    learning_module?: learning_moduleOrderByRelationAggregateInput;
    lesson_plan?: lesson_planOrderByRelationAggregateInput;
    proposal?: proposalOrderByRelationAggregateInput;
    institution?: institutionOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      institution_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      content?: ContentListRelationFilter;
      learning_module?: Learning_moduleListRelationFilter;
      lesson_plan?: Lesson_planListRelationFilter;
      proposal?: ProposalListRelationFilter;
      institution?: XOR<InstitutionNullableRelationFilter, institutionWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    institution_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type contentCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    learning_module?: learning_moduleCreateNestedManyWithoutContentInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutContentInput;
    proposal?: proposalCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutContentInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutContentInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutContentNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutContentNestedInput;
    proposal?: proposalUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutContentNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutContentNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type institutionCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website?: string | null;
    established_on?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutInstitutionInput;
  };

  export type institutionUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website?: string | null;
    established_on?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutInstitutionInput;
  };

  export type institutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    established_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutInstitutionNestedInput;
  };

  export type institutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    established_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutInstitutionNestedInput;
  };

  export type institutionCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website?: string | null;
    established_on?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type institutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    established_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type institutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    established_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleCreateInput = {
    id?: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutLearning_moduleInput;
    user: userCreateNestedOneWithoutLearning_moduleInput;
  };

  export type learning_moduleUncheckedCreateInput = {
    id?: string;
    content_id: string;
    created_by: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutLearning_moduleNestedInput;
    user?: userUpdateOneRequiredWithoutLearning_moduleNestedInput;
  };

  export type learning_moduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleCreateManyInput = {
    id?: string;
    content_id: string;
    created_by: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planCreateInput = {
    id?: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutLesson_planInput;
    user: userCreateNestedOneWithoutLesson_planInput;
  };

  export type lesson_planUncheckedCreateInput = {
    id?: string;
    content_id: string;
    created_by: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutLesson_planNestedInput;
    user?: userUpdateOneRequiredWithoutLesson_planNestedInput;
  };

  export type lesson_planUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planCreateManyInput = {
    id?: string;
    content_id: string;
    created_by: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalCreateInput = {
    id?: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutProposalInput;
    user: userCreateNestedOneWithoutProposalInput;
  };

  export type proposalUncheckedCreateInput = {
    id?: string;
    content_id: string;
    submitted_by: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutProposalNestedInput;
    user?: userUpdateOneRequiredWithoutProposalNestedInput;
  };

  export type proposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    submitted_by?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalCreateManyInput = {
    id?: string;
    content_id: string;
    submitted_by: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    submitted_by?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Learning_moduleListRelationFilter = {
    every?: learning_moduleWhereInput;
    some?: learning_moduleWhereInput;
    none?: learning_moduleWhereInput;
  };

  export type Lesson_planListRelationFilter = {
    every?: lesson_planWhereInput;
    some?: lesson_planWhereInput;
    none?: lesson_planWhereInput;
  };

  export type ProposalListRelationFilter = {
    every?: proposalWhereInput;
    some?: proposalWhereInput;
    none?: proposalWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type learning_moduleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type lesson_planOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type proposalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type contentCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentAvgOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type contentMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    subject?: SortOrder;
    grade_level?: SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentSumOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type institutionCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    website?: SortOrder;
    established_on?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type institutionMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    website?: SortOrder;
    established_on?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type institutionMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    website?: SortOrder;
    established_on?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type ContentRelationFilter = {
    is?: contentWhereInput;
    isNot?: contentWhereInput;
  };

  export type learning_moduleCountOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    module_type?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type learning_moduleAvgOrderByAggregateInput = {
    duration?: SortOrder;
  };

  export type learning_moduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    module_type?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type learning_moduleMinOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    module_type?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type learning_moduleSumOrderByAggregateInput = {
    duration?: SortOrder;
  };

  export type lesson_planCountOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lesson_planAvgOrderByAggregateInput = {
    duration?: SortOrder;
  };

  export type lesson_planMaxOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lesson_planMinOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    created_by?: SortOrder;
    duration?: SortOrder;
    objectives?: SortOrder;
    resources?: SortOrder;
    assessment?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lesson_planSumOrderByAggregateInput = {
    duration?: SortOrder;
  };

  export type proposalCountOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    submitted_by?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    submitted_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type proposalMaxOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    submitted_by?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    submitted_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type proposalMinOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    submitted_by?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    submitted_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type ContentListRelationFilter = {
    every?: contentWhereInput;
    some?: contentWhereInput;
    none?: contentWhereInput;
  };

  export type InstitutionNullableRelationFilter = {
    is?: institutionWhereInput | null;
    isNot?: institutionWhereInput | null;
  };

  export type contentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    institution_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateNestedOneWithoutContentInput = {
    create?: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    connectOrCreate?: userCreateOrConnectWithoutContentInput;
    connect?: userWhereUniqueInput;
  };

  export type learning_moduleCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<learning_moduleCreateWithoutContentInput, learning_moduleUncheckedCreateWithoutContentInput>
      | learning_moduleCreateWithoutContentInput[]
      | learning_moduleUncheckedCreateWithoutContentInput[];
    connectOrCreate?:
      | learning_moduleCreateOrConnectWithoutContentInput
      | learning_moduleCreateOrConnectWithoutContentInput[];
    createMany?: learning_moduleCreateManyContentInputEnvelope;
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
  };

  export type lesson_planCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<lesson_planCreateWithoutContentInput, lesson_planUncheckedCreateWithoutContentInput>
      | lesson_planCreateWithoutContentInput[]
      | lesson_planUncheckedCreateWithoutContentInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutContentInput | lesson_planCreateOrConnectWithoutContentInput[];
    createMany?: lesson_planCreateManyContentInputEnvelope;
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
  };

  export type proposalCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>
      | proposalCreateWithoutContentInput[]
      | proposalUncheckedCreateWithoutContentInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutContentInput | proposalCreateOrConnectWithoutContentInput[];
    createMany?: proposalCreateManyContentInputEnvelope;
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
  };

  export type learning_moduleUncheckedCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<learning_moduleCreateWithoutContentInput, learning_moduleUncheckedCreateWithoutContentInput>
      | learning_moduleCreateWithoutContentInput[]
      | learning_moduleUncheckedCreateWithoutContentInput[];
    connectOrCreate?:
      | learning_moduleCreateOrConnectWithoutContentInput
      | learning_moduleCreateOrConnectWithoutContentInput[];
    createMany?: learning_moduleCreateManyContentInputEnvelope;
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
  };

  export type lesson_planUncheckedCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<lesson_planCreateWithoutContentInput, lesson_planUncheckedCreateWithoutContentInput>
      | lesson_planCreateWithoutContentInput[]
      | lesson_planUncheckedCreateWithoutContentInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutContentInput | lesson_planCreateOrConnectWithoutContentInput[];
    createMany?: lesson_planCreateManyContentInputEnvelope;
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
  };

  export type proposalUncheckedCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>
      | proposalCreateWithoutContentInput[]
      | proposalUncheckedCreateWithoutContentInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutContentInput | proposalCreateOrConnectWithoutContentInput[];
    createMany?: proposalCreateManyContentInputEnvelope;
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    connectOrCreate?: userCreateOrConnectWithoutContentInput;
    upsert?: userUpsertWithoutContentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutContentInput, userUpdateWithoutContentInput>,
      userUncheckedUpdateWithoutContentInput
    >;
  };

  export type learning_moduleUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<learning_moduleCreateWithoutContentInput, learning_moduleUncheckedCreateWithoutContentInput>
      | learning_moduleCreateWithoutContentInput[]
      | learning_moduleUncheckedCreateWithoutContentInput[];
    connectOrCreate?:
      | learning_moduleCreateOrConnectWithoutContentInput
      | learning_moduleCreateOrConnectWithoutContentInput[];
    upsert?:
      | learning_moduleUpsertWithWhereUniqueWithoutContentInput
      | learning_moduleUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: learning_moduleCreateManyContentInputEnvelope;
    set?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    disconnect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    delete?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    update?:
      | learning_moduleUpdateWithWhereUniqueWithoutContentInput
      | learning_moduleUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?:
      | learning_moduleUpdateManyWithWhereWithoutContentInput
      | learning_moduleUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
  };

  export type lesson_planUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<lesson_planCreateWithoutContentInput, lesson_planUncheckedCreateWithoutContentInput>
      | lesson_planCreateWithoutContentInput[]
      | lesson_planUncheckedCreateWithoutContentInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutContentInput | lesson_planCreateOrConnectWithoutContentInput[];
    upsert?:
      | lesson_planUpsertWithWhereUniqueWithoutContentInput
      | lesson_planUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: lesson_planCreateManyContentInputEnvelope;
    set?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    disconnect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    delete?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    update?:
      | lesson_planUpdateWithWhereUniqueWithoutContentInput
      | lesson_planUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?:
      | lesson_planUpdateManyWithWhereWithoutContentInput
      | lesson_planUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
  };

  export type proposalUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>
      | proposalCreateWithoutContentInput[]
      | proposalUncheckedCreateWithoutContentInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutContentInput | proposalCreateOrConnectWithoutContentInput[];
    upsert?: proposalUpsertWithWhereUniqueWithoutContentInput | proposalUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: proposalCreateManyContentInputEnvelope;
    set?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    disconnect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    delete?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    update?: proposalUpdateWithWhereUniqueWithoutContentInput | proposalUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: proposalUpdateManyWithWhereWithoutContentInput | proposalUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: proposalScalarWhereInput | proposalScalarWhereInput[];
  };

  export type learning_moduleUncheckedUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<learning_moduleCreateWithoutContentInput, learning_moduleUncheckedCreateWithoutContentInput>
      | learning_moduleCreateWithoutContentInput[]
      | learning_moduleUncheckedCreateWithoutContentInput[];
    connectOrCreate?:
      | learning_moduleCreateOrConnectWithoutContentInput
      | learning_moduleCreateOrConnectWithoutContentInput[];
    upsert?:
      | learning_moduleUpsertWithWhereUniqueWithoutContentInput
      | learning_moduleUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: learning_moduleCreateManyContentInputEnvelope;
    set?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    disconnect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    delete?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    update?:
      | learning_moduleUpdateWithWhereUniqueWithoutContentInput
      | learning_moduleUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?:
      | learning_moduleUpdateManyWithWhereWithoutContentInput
      | learning_moduleUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
  };

  export type lesson_planUncheckedUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<lesson_planCreateWithoutContentInput, lesson_planUncheckedCreateWithoutContentInput>
      | lesson_planCreateWithoutContentInput[]
      | lesson_planUncheckedCreateWithoutContentInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutContentInput | lesson_planCreateOrConnectWithoutContentInput[];
    upsert?:
      | lesson_planUpsertWithWhereUniqueWithoutContentInput
      | lesson_planUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: lesson_planCreateManyContentInputEnvelope;
    set?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    disconnect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    delete?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    update?:
      | lesson_planUpdateWithWhereUniqueWithoutContentInput
      | lesson_planUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?:
      | lesson_planUpdateManyWithWhereWithoutContentInput
      | lesson_planUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
  };

  export type proposalUncheckedUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>
      | proposalCreateWithoutContentInput[]
      | proposalUncheckedCreateWithoutContentInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutContentInput | proposalCreateOrConnectWithoutContentInput[];
    upsert?: proposalUpsertWithWhereUniqueWithoutContentInput | proposalUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: proposalCreateManyContentInputEnvelope;
    set?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    disconnect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    delete?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    update?: proposalUpdateWithWhereUniqueWithoutContentInput | proposalUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: proposalUpdateManyWithWhereWithoutContentInput | proposalUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: proposalScalarWhereInput | proposalScalarWhereInput[];
  };

  export type userCreateNestedManyWithoutInstitutionInput = {
    create?:
      | XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
      | userCreateWithoutInstitutionInput[]
      | userUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[];
    createMany?: userCreateManyInstitutionInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?:
      | XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
      | userCreateWithoutInstitutionInput[]
      | userUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[];
    createMany?: userCreateManyInstitutionInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateManyWithoutInstitutionNestedInput = {
    create?:
      | XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
      | userCreateWithoutInstitutionInput[]
      | userUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[];
    upsert?: userUpsertWithWhereUniqueWithoutInstitutionInput | userUpsertWithWhereUniqueWithoutInstitutionInput[];
    createMany?: userCreateManyInstitutionInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutInstitutionInput | userUpdateWithWhereUniqueWithoutInstitutionInput[];
    updateMany?: userUpdateManyWithWhereWithoutInstitutionInput | userUpdateManyWithWhereWithoutInstitutionInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?:
      | XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
      | userCreateWithoutInstitutionInput[]
      | userUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[];
    upsert?: userUpsertWithWhereUniqueWithoutInstitutionInput | userUpsertWithWhereUniqueWithoutInstitutionInput[];
    createMany?: userCreateManyInstitutionInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutInstitutionInput | userUpdateWithWhereUniqueWithoutInstitutionInput[];
    updateMany?: userUpdateManyWithWhereWithoutInstitutionInput | userUpdateManyWithWhereWithoutInstitutionInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type contentCreateNestedOneWithoutLearning_moduleInput = {
    create?: XOR<contentCreateWithoutLearning_moduleInput, contentUncheckedCreateWithoutLearning_moduleInput>;
    connectOrCreate?: contentCreateOrConnectWithoutLearning_moduleInput;
    connect?: contentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutLearning_moduleInput = {
    create?: XOR<userCreateWithoutLearning_moduleInput, userUncheckedCreateWithoutLearning_moduleInput>;
    connectOrCreate?: userCreateOrConnectWithoutLearning_moduleInput;
    connect?: userWhereUniqueInput;
  };

  export type contentUpdateOneRequiredWithoutLearning_moduleNestedInput = {
    create?: XOR<contentCreateWithoutLearning_moduleInput, contentUncheckedCreateWithoutLearning_moduleInput>;
    connectOrCreate?: contentCreateOrConnectWithoutLearning_moduleInput;
    upsert?: contentUpsertWithoutLearning_moduleInput;
    connect?: contentWhereUniqueInput;
    update?: XOR<
      XOR<contentUpdateToOneWithWhereWithoutLearning_moduleInput, contentUpdateWithoutLearning_moduleInput>,
      contentUncheckedUpdateWithoutLearning_moduleInput
    >;
  };

  export type userUpdateOneRequiredWithoutLearning_moduleNestedInput = {
    create?: XOR<userCreateWithoutLearning_moduleInput, userUncheckedCreateWithoutLearning_moduleInput>;
    connectOrCreate?: userCreateOrConnectWithoutLearning_moduleInput;
    upsert?: userUpsertWithoutLearning_moduleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLearning_moduleInput, userUpdateWithoutLearning_moduleInput>,
      userUncheckedUpdateWithoutLearning_moduleInput
    >;
  };

  export type contentCreateNestedOneWithoutLesson_planInput = {
    create?: XOR<contentCreateWithoutLesson_planInput, contentUncheckedCreateWithoutLesson_planInput>;
    connectOrCreate?: contentCreateOrConnectWithoutLesson_planInput;
    connect?: contentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutLesson_planInput = {
    create?: XOR<userCreateWithoutLesson_planInput, userUncheckedCreateWithoutLesson_planInput>;
    connectOrCreate?: userCreateOrConnectWithoutLesson_planInput;
    connect?: userWhereUniqueInput;
  };

  export type contentUpdateOneRequiredWithoutLesson_planNestedInput = {
    create?: XOR<contentCreateWithoutLesson_planInput, contentUncheckedCreateWithoutLesson_planInput>;
    connectOrCreate?: contentCreateOrConnectWithoutLesson_planInput;
    upsert?: contentUpsertWithoutLesson_planInput;
    connect?: contentWhereUniqueInput;
    update?: XOR<
      XOR<contentUpdateToOneWithWhereWithoutLesson_planInput, contentUpdateWithoutLesson_planInput>,
      contentUncheckedUpdateWithoutLesson_planInput
    >;
  };

  export type userUpdateOneRequiredWithoutLesson_planNestedInput = {
    create?: XOR<userCreateWithoutLesson_planInput, userUncheckedCreateWithoutLesson_planInput>;
    connectOrCreate?: userCreateOrConnectWithoutLesson_planInput;
    upsert?: userUpsertWithoutLesson_planInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLesson_planInput, userUpdateWithoutLesson_planInput>,
      userUncheckedUpdateWithoutLesson_planInput
    >;
  };

  export type contentCreateNestedOneWithoutProposalInput = {
    create?: XOR<contentCreateWithoutProposalInput, contentUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: contentCreateOrConnectWithoutProposalInput;
    connect?: contentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutProposalInput = {
    create?: XOR<userCreateWithoutProposalInput, userUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: userCreateOrConnectWithoutProposalInput;
    connect?: userWhereUniqueInput;
  };

  export type contentUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<contentCreateWithoutProposalInput, contentUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: contentCreateOrConnectWithoutProposalInput;
    upsert?: contentUpsertWithoutProposalInput;
    connect?: contentWhereUniqueInput;
    update?: XOR<
      XOR<contentUpdateToOneWithWhereWithoutProposalInput, contentUpdateWithoutProposalInput>,
      contentUncheckedUpdateWithoutProposalInput
    >;
  };

  export type userUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<userCreateWithoutProposalInput, userUncheckedCreateWithoutProposalInput>;
    connectOrCreate?: userCreateOrConnectWithoutProposalInput;
    upsert?: userUpsertWithoutProposalInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutProposalInput, userUpdateWithoutProposalInput>,
      userUncheckedUpdateWithoutProposalInput
    >;
  };

  export type contentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type learning_moduleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>
      | learning_moduleCreateWithoutUserInput[]
      | learning_moduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: learning_moduleCreateOrConnectWithoutUserInput | learning_moduleCreateOrConnectWithoutUserInput[];
    createMany?: learning_moduleCreateManyUserInputEnvelope;
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
  };

  export type lesson_planCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>
      | lesson_planCreateWithoutUserInput[]
      | lesson_planUncheckedCreateWithoutUserInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutUserInput | lesson_planCreateOrConnectWithoutUserInput[];
    createMany?: lesson_planCreateManyUserInputEnvelope;
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
  };

  export type proposalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>
      | proposalCreateWithoutUserInput[]
      | proposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutUserInput | proposalCreateOrConnectWithoutUserInput[];
    createMany?: proposalCreateManyUserInputEnvelope;
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
  };

  export type institutionCreateNestedOneWithoutUserInput = {
    create?: XOR<institutionCreateWithoutUserInput, institutionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: institutionCreateOrConnectWithoutUserInput;
    connect?: institutionWhereUniqueInput;
  };

  export type contentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type learning_moduleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>
      | learning_moduleCreateWithoutUserInput[]
      | learning_moduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: learning_moduleCreateOrConnectWithoutUserInput | learning_moduleCreateOrConnectWithoutUserInput[];
    createMany?: learning_moduleCreateManyUserInputEnvelope;
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
  };

  export type lesson_planUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>
      | lesson_planCreateWithoutUserInput[]
      | lesson_planUncheckedCreateWithoutUserInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutUserInput | lesson_planCreateOrConnectWithoutUserInput[];
    createMany?: lesson_planCreateManyUserInputEnvelope;
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
  };

  export type proposalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>
      | proposalCreateWithoutUserInput[]
      | proposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutUserInput | proposalCreateOrConnectWithoutUserInput[];
    createMany?: proposalCreateManyUserInputEnvelope;
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
  };

  export type contentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutUserInput | contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutUserInput | contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contentUpdateManyWithWhereWithoutUserInput | contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type learning_moduleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>
      | learning_moduleCreateWithoutUserInput[]
      | learning_moduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: learning_moduleCreateOrConnectWithoutUserInput | learning_moduleCreateOrConnectWithoutUserInput[];
    upsert?:
      | learning_moduleUpsertWithWhereUniqueWithoutUserInput
      | learning_moduleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: learning_moduleCreateManyUserInputEnvelope;
    set?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    disconnect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    delete?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    update?:
      | learning_moduleUpdateWithWhereUniqueWithoutUserInput
      | learning_moduleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | learning_moduleUpdateManyWithWhereWithoutUserInput
      | learning_moduleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
  };

  export type lesson_planUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>
      | lesson_planCreateWithoutUserInput[]
      | lesson_planUncheckedCreateWithoutUserInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutUserInput | lesson_planCreateOrConnectWithoutUserInput[];
    upsert?: lesson_planUpsertWithWhereUniqueWithoutUserInput | lesson_planUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: lesson_planCreateManyUserInputEnvelope;
    set?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    disconnect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    delete?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    update?: lesson_planUpdateWithWhereUniqueWithoutUserInput | lesson_planUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: lesson_planUpdateManyWithWhereWithoutUserInput | lesson_planUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
  };

  export type proposalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>
      | proposalCreateWithoutUserInput[]
      | proposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutUserInput | proposalCreateOrConnectWithoutUserInput[];
    upsert?: proposalUpsertWithWhereUniqueWithoutUserInput | proposalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: proposalCreateManyUserInputEnvelope;
    set?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    disconnect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    delete?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    update?: proposalUpdateWithWhereUniqueWithoutUserInput | proposalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: proposalUpdateManyWithWhereWithoutUserInput | proposalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: proposalScalarWhereInput | proposalScalarWhereInput[];
  };

  export type institutionUpdateOneWithoutUserNestedInput = {
    create?: XOR<institutionCreateWithoutUserInput, institutionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: institutionCreateOrConnectWithoutUserInput;
    upsert?: institutionUpsertWithoutUserInput;
    disconnect?: institutionWhereInput | boolean;
    delete?: institutionWhereInput | boolean;
    connect?: institutionWhereUniqueInput;
    update?: XOR<
      XOR<institutionUpdateToOneWithWhereWithoutUserInput, institutionUpdateWithoutUserInput>,
      institutionUncheckedUpdateWithoutUserInput
    >;
  };

  export type contentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutUserInput | contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutUserInput | contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contentUpdateManyWithWhereWithoutUserInput | contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type learning_moduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>
      | learning_moduleCreateWithoutUserInput[]
      | learning_moduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: learning_moduleCreateOrConnectWithoutUserInput | learning_moduleCreateOrConnectWithoutUserInput[];
    upsert?:
      | learning_moduleUpsertWithWhereUniqueWithoutUserInput
      | learning_moduleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: learning_moduleCreateManyUserInputEnvelope;
    set?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    disconnect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    delete?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    connect?: learning_moduleWhereUniqueInput | learning_moduleWhereUniqueInput[];
    update?:
      | learning_moduleUpdateWithWhereUniqueWithoutUserInput
      | learning_moduleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | learning_moduleUpdateManyWithWhereWithoutUserInput
      | learning_moduleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
  };

  export type lesson_planUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>
      | lesson_planCreateWithoutUserInput[]
      | lesson_planUncheckedCreateWithoutUserInput[];
    connectOrCreate?: lesson_planCreateOrConnectWithoutUserInput | lesson_planCreateOrConnectWithoutUserInput[];
    upsert?: lesson_planUpsertWithWhereUniqueWithoutUserInput | lesson_planUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: lesson_planCreateManyUserInputEnvelope;
    set?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    disconnect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    delete?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    connect?: lesson_planWhereUniqueInput | lesson_planWhereUniqueInput[];
    update?: lesson_planUpdateWithWhereUniqueWithoutUserInput | lesson_planUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: lesson_planUpdateManyWithWhereWithoutUserInput | lesson_planUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
  };

  export type proposalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>
      | proposalCreateWithoutUserInput[]
      | proposalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: proposalCreateOrConnectWithoutUserInput | proposalCreateOrConnectWithoutUserInput[];
    upsert?: proposalUpsertWithWhereUniqueWithoutUserInput | proposalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: proposalCreateManyUserInputEnvelope;
    set?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    disconnect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    delete?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    connect?: proposalWhereUniqueInput | proposalWhereUniqueInput[];
    update?: proposalUpdateWithWhereUniqueWithoutUserInput | proposalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: proposalUpdateManyWithWhereWithoutUserInput | proposalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: proposalScalarWhereInput | proposalScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutContentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutContentInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutContentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
  };

  export type learning_moduleCreateWithoutContentInput = {
    id?: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLearning_moduleInput;
  };

  export type learning_moduleUncheckedCreateWithoutContentInput = {
    id?: string;
    created_by: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleCreateOrConnectWithoutContentInput = {
    where: learning_moduleWhereUniqueInput;
    create: XOR<learning_moduleCreateWithoutContentInput, learning_moduleUncheckedCreateWithoutContentInput>;
  };

  export type learning_moduleCreateManyContentInputEnvelope = {
    data: learning_moduleCreateManyContentInput | learning_moduleCreateManyContentInput[];
    skipDuplicates?: boolean;
  };

  export type lesson_planCreateWithoutContentInput = {
    id?: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLesson_planInput;
  };

  export type lesson_planUncheckedCreateWithoutContentInput = {
    id?: string;
    created_by: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planCreateOrConnectWithoutContentInput = {
    where: lesson_planWhereUniqueInput;
    create: XOR<lesson_planCreateWithoutContentInput, lesson_planUncheckedCreateWithoutContentInput>;
  };

  export type lesson_planCreateManyContentInputEnvelope = {
    data: lesson_planCreateManyContentInput | lesson_planCreateManyContentInput[];
    skipDuplicates?: boolean;
  };

  export type proposalCreateWithoutContentInput = {
    id?: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutProposalInput;
  };

  export type proposalUncheckedCreateWithoutContentInput = {
    id?: string;
    submitted_by: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalCreateOrConnectWithoutContentInput = {
    where: proposalWhereUniqueInput;
    create: XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>;
  };

  export type proposalCreateManyContentInputEnvelope = {
    data: proposalCreateManyContentInput | proposalCreateManyContentInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutContentInput = {
    update: XOR<userUpdateWithoutContentInput, userUncheckedUpdateWithoutContentInput>;
    create: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutContentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutContentInput, userUncheckedUpdateWithoutContentInput>;
  };

  export type userUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type learning_moduleUpsertWithWhereUniqueWithoutContentInput = {
    where: learning_moduleWhereUniqueInput;
    update: XOR<learning_moduleUpdateWithoutContentInput, learning_moduleUncheckedUpdateWithoutContentInput>;
    create: XOR<learning_moduleCreateWithoutContentInput, learning_moduleUncheckedCreateWithoutContentInput>;
  };

  export type learning_moduleUpdateWithWhereUniqueWithoutContentInput = {
    where: learning_moduleWhereUniqueInput;
    data: XOR<learning_moduleUpdateWithoutContentInput, learning_moduleUncheckedUpdateWithoutContentInput>;
  };

  export type learning_moduleUpdateManyWithWhereWithoutContentInput = {
    where: learning_moduleScalarWhereInput;
    data: XOR<learning_moduleUpdateManyMutationInput, learning_moduleUncheckedUpdateManyWithoutContentInput>;
  };

  export type learning_moduleScalarWhereInput = {
    AND?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
    OR?: learning_moduleScalarWhereInput[];
    NOT?: learning_moduleScalarWhereInput | learning_moduleScalarWhereInput[];
    id?: UuidFilter<'learning_module'> | string;
    content_id?: UuidFilter<'learning_module'> | string;
    created_by?: UuidFilter<'learning_module'> | string;
    module_type?: StringFilter<'learning_module'> | string;
    duration?: IntFilter<'learning_module'> | number;
    objectives?: StringFilter<'learning_module'> | string;
    resources?: StringFilter<'learning_module'> | string;
    assessment?: StringFilter<'learning_module'> | string;
    created_at?: DateTimeFilter<'learning_module'> | Date | string;
    updated_at?: DateTimeFilter<'learning_module'> | Date | string;
  };

  export type lesson_planUpsertWithWhereUniqueWithoutContentInput = {
    where: lesson_planWhereUniqueInput;
    update: XOR<lesson_planUpdateWithoutContentInput, lesson_planUncheckedUpdateWithoutContentInput>;
    create: XOR<lesson_planCreateWithoutContentInput, lesson_planUncheckedCreateWithoutContentInput>;
  };

  export type lesson_planUpdateWithWhereUniqueWithoutContentInput = {
    where: lesson_planWhereUniqueInput;
    data: XOR<lesson_planUpdateWithoutContentInput, lesson_planUncheckedUpdateWithoutContentInput>;
  };

  export type lesson_planUpdateManyWithWhereWithoutContentInput = {
    where: lesson_planScalarWhereInput;
    data: XOR<lesson_planUpdateManyMutationInput, lesson_planUncheckedUpdateManyWithoutContentInput>;
  };

  export type lesson_planScalarWhereInput = {
    AND?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
    OR?: lesson_planScalarWhereInput[];
    NOT?: lesson_planScalarWhereInput | lesson_planScalarWhereInput[];
    id?: UuidFilter<'lesson_plan'> | string;
    content_id?: UuidFilter<'lesson_plan'> | string;
    created_by?: UuidFilter<'lesson_plan'> | string;
    duration?: IntFilter<'lesson_plan'> | number;
    objectives?: StringFilter<'lesson_plan'> | string;
    resources?: StringFilter<'lesson_plan'> | string;
    assessment?: StringFilter<'lesson_plan'> | string;
    created_at?: DateTimeFilter<'lesson_plan'> | Date | string;
    updated_at?: DateTimeFilter<'lesson_plan'> | Date | string;
  };

  export type proposalUpsertWithWhereUniqueWithoutContentInput = {
    where: proposalWhereUniqueInput;
    update: XOR<proposalUpdateWithoutContentInput, proposalUncheckedUpdateWithoutContentInput>;
    create: XOR<proposalCreateWithoutContentInput, proposalUncheckedCreateWithoutContentInput>;
  };

  export type proposalUpdateWithWhereUniqueWithoutContentInput = {
    where: proposalWhereUniqueInput;
    data: XOR<proposalUpdateWithoutContentInput, proposalUncheckedUpdateWithoutContentInput>;
  };

  export type proposalUpdateManyWithWhereWithoutContentInput = {
    where: proposalScalarWhereInput;
    data: XOR<proposalUpdateManyMutationInput, proposalUncheckedUpdateManyWithoutContentInput>;
  };

  export type proposalScalarWhereInput = {
    AND?: proposalScalarWhereInput | proposalScalarWhereInput[];
    OR?: proposalScalarWhereInput[];
    NOT?: proposalScalarWhereInput | proposalScalarWhereInput[];
    id?: UuidFilter<'proposal'> | string;
    content_id?: UuidFilter<'proposal'> | string;
    submitted_by?: UuidFilter<'proposal'> | string;
    description?: StringNullableFilter<'proposal'> | string | null;
    status?: StringFilter<'proposal'> | string;
    submitted_at?: DateTimeFilter<'proposal'> | Date | string;
    created_at?: DateTimeFilter<'proposal'> | Date | string;
    updated_at?: DateTimeFilter<'proposal'> | Date | string;
  };

  export type userCreateWithoutInstitutionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInstitutionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInstitutionInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>;
  };

  export type userCreateManyInstitutionInputEnvelope = {
    data: userCreateManyInstitutionInput | userCreateManyInstitutionInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutInstitutionInput, userUncheckedUpdateWithoutInstitutionInput>;
    create: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>;
  };

  export type userUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutInstitutionInput, userUncheckedUpdateWithoutInstitutionInput>;
  };

  export type userUpdateManyWithWhereWithoutInstitutionInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutInstitutionInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    institution_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type contentCreateWithoutLearning_moduleInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutContentInput;
    proposal?: proposalCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutLearning_moduleInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutContentInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutLearning_moduleInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutLearning_moduleInput, contentUncheckedCreateWithoutLearning_moduleInput>;
  };

  export type userCreateWithoutLearning_moduleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLearning_moduleInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLearning_moduleInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLearning_moduleInput, userUncheckedCreateWithoutLearning_moduleInput>;
  };

  export type contentUpsertWithoutLearning_moduleInput = {
    update: XOR<contentUpdateWithoutLearning_moduleInput, contentUncheckedUpdateWithoutLearning_moduleInput>;
    create: XOR<contentCreateWithoutLearning_moduleInput, contentUncheckedCreateWithoutLearning_moduleInput>;
    where?: contentWhereInput;
  };

  export type contentUpdateToOneWithWhereWithoutLearning_moduleInput = {
    where?: contentWhereInput;
    data: XOR<contentUpdateWithoutLearning_moduleInput, contentUncheckedUpdateWithoutLearning_moduleInput>;
  };

  export type contentUpdateWithoutLearning_moduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutContentNestedInput;
    proposal?: proposalUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutLearning_moduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutContentNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type userUpsertWithoutLearning_moduleInput = {
    update: XOR<userUpdateWithoutLearning_moduleInput, userUncheckedUpdateWithoutLearning_moduleInput>;
    create: XOR<userCreateWithoutLearning_moduleInput, userUncheckedCreateWithoutLearning_moduleInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLearning_moduleInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLearning_moduleInput, userUncheckedUpdateWithoutLearning_moduleInput>;
  };

  export type userUpdateWithoutLearning_moduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLearning_moduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type contentCreateWithoutLesson_planInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    learning_module?: learning_moduleCreateNestedManyWithoutContentInput;
    proposal?: proposalCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutLesson_planInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutContentInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutLesson_planInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutLesson_planInput, contentUncheckedCreateWithoutLesson_planInput>;
  };

  export type userCreateWithoutLesson_planInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    proposal?: proposalCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLesson_planInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLesson_planInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLesson_planInput, userUncheckedCreateWithoutLesson_planInput>;
  };

  export type contentUpsertWithoutLesson_planInput = {
    update: XOR<contentUpdateWithoutLesson_planInput, contentUncheckedUpdateWithoutLesson_planInput>;
    create: XOR<contentCreateWithoutLesson_planInput, contentUncheckedCreateWithoutLesson_planInput>;
    where?: contentWhereInput;
  };

  export type contentUpdateToOneWithWhereWithoutLesson_planInput = {
    where?: contentWhereInput;
    data: XOR<contentUpdateWithoutLesson_planInput, contentUncheckedUpdateWithoutLesson_planInput>;
  };

  export type contentUpdateWithoutLesson_planInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutContentNestedInput;
    proposal?: proposalUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutLesson_planInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutContentNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type userUpsertWithoutLesson_planInput = {
    update: XOR<userUpdateWithoutLesson_planInput, userUncheckedUpdateWithoutLesson_planInput>;
    create: XOR<userCreateWithoutLesson_planInput, userUncheckedCreateWithoutLesson_planInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLesson_planInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLesson_planInput, userUncheckedUpdateWithoutLesson_planInput>;
  };

  export type userUpdateWithoutLesson_planInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLesson_planInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type contentCreateWithoutProposalInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    learning_module?: learning_moduleCreateNestedManyWithoutContentInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutProposalInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutContentInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutProposalInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutProposalInput, contentUncheckedCreateWithoutProposalInput>;
  };

  export type userCreateWithoutProposalInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutUserInput;
    institution?: institutionCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProposalInput = {
    id?: string;
    email: string;
    institution_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutUserInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProposalInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutProposalInput, userUncheckedCreateWithoutProposalInput>;
  };

  export type contentUpsertWithoutProposalInput = {
    update: XOR<contentUpdateWithoutProposalInput, contentUncheckedUpdateWithoutProposalInput>;
    create: XOR<contentCreateWithoutProposalInput, contentUncheckedCreateWithoutProposalInput>;
    where?: contentWhereInput;
  };

  export type contentUpdateToOneWithWhereWithoutProposalInput = {
    where?: contentWhereInput;
    data: XOR<contentUpdateWithoutProposalInput, contentUncheckedUpdateWithoutProposalInput>;
  };

  export type contentUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutContentNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutContentNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type userUpsertWithoutProposalInput = {
    update: XOR<userUpdateWithoutProposalInput, userUncheckedUpdateWithoutProposalInput>;
    create: XOR<userCreateWithoutProposalInput, userUncheckedCreateWithoutProposalInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProposalInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutProposalInput, userUncheckedUpdateWithoutProposalInput>;
  };

  export type userUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    institution?: institutionUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    institution_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type contentCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    learning_module?: learning_moduleCreateNestedManyWithoutContentInput;
    lesson_plan?: lesson_planCreateNestedManyWithoutContentInput;
    proposal?: proposalCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    learning_module?: learning_moduleUncheckedCreateNestedManyWithoutContentInput;
    lesson_plan?: lesson_planUncheckedCreateNestedManyWithoutContentInput;
    proposal?: proposalUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutUserInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>;
  };

  export type contentCreateManyUserInputEnvelope = {
    data: contentCreateManyUserInput | contentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type learning_moduleCreateWithoutUserInput = {
    id?: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutLearning_moduleInput;
  };

  export type learning_moduleUncheckedCreateWithoutUserInput = {
    id?: string;
    content_id: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleCreateOrConnectWithoutUserInput = {
    where: learning_moduleWhereUniqueInput;
    create: XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>;
  };

  export type learning_moduleCreateManyUserInputEnvelope = {
    data: learning_moduleCreateManyUserInput | learning_moduleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type lesson_planCreateWithoutUserInput = {
    id?: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutLesson_planInput;
  };

  export type lesson_planUncheckedCreateWithoutUserInput = {
    id?: string;
    content_id: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planCreateOrConnectWithoutUserInput = {
    where: lesson_planWhereUniqueInput;
    create: XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>;
  };

  export type lesson_planCreateManyUserInputEnvelope = {
    data: lesson_planCreateManyUserInput | lesson_planCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type proposalCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutProposalInput;
  };

  export type proposalUncheckedCreateWithoutUserInput = {
    id?: string;
    content_id: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalCreateOrConnectWithoutUserInput = {
    where: proposalWhereUniqueInput;
    create: XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>;
  };

  export type proposalCreateManyUserInputEnvelope = {
    data: proposalCreateManyUserInput | proposalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type institutionCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website?: string | null;
    established_on?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type institutionUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    website?: string | null;
    established_on?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type institutionCreateOrConnectWithoutUserInput = {
    where: institutionWhereUniqueInput;
    create: XOR<institutionCreateWithoutUserInput, institutionUncheckedCreateWithoutUserInput>;
  };

  export type contentUpsertWithWhereUniqueWithoutUserInput = {
    where: contentWhereUniqueInput;
    update: XOR<contentUpdateWithoutUserInput, contentUncheckedUpdateWithoutUserInput>;
    create: XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>;
  };

  export type contentUpdateWithWhereUniqueWithoutUserInput = {
    where: contentWhereUniqueInput;
    data: XOR<contentUpdateWithoutUserInput, contentUncheckedUpdateWithoutUserInput>;
  };

  export type contentUpdateManyWithWhereWithoutUserInput = {
    where: contentScalarWhereInput;
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyWithoutUserInput>;
  };

  export type contentScalarWhereInput = {
    AND?: contentScalarWhereInput | contentScalarWhereInput[];
    OR?: contentScalarWhereInput[];
    NOT?: contentScalarWhereInput | contentScalarWhereInput[];
    id?: UuidFilter<'content'> | string;
    title?: StringFilter<'content'> | string;
    description?: StringNullableFilter<'content'> | string | null;
    subject?: StringFilter<'content'> | string;
    grade_level?: IntFilter<'content'> | number;
    created_by?: UuidFilter<'content'> | string;
    created_at?: DateTimeFilter<'content'> | Date | string;
    updated_at?: DateTimeFilter<'content'> | Date | string;
  };

  export type learning_moduleUpsertWithWhereUniqueWithoutUserInput = {
    where: learning_moduleWhereUniqueInput;
    update: XOR<learning_moduleUpdateWithoutUserInput, learning_moduleUncheckedUpdateWithoutUserInput>;
    create: XOR<learning_moduleCreateWithoutUserInput, learning_moduleUncheckedCreateWithoutUserInput>;
  };

  export type learning_moduleUpdateWithWhereUniqueWithoutUserInput = {
    where: learning_moduleWhereUniqueInput;
    data: XOR<learning_moduleUpdateWithoutUserInput, learning_moduleUncheckedUpdateWithoutUserInput>;
  };

  export type learning_moduleUpdateManyWithWhereWithoutUserInput = {
    where: learning_moduleScalarWhereInput;
    data: XOR<learning_moduleUpdateManyMutationInput, learning_moduleUncheckedUpdateManyWithoutUserInput>;
  };

  export type lesson_planUpsertWithWhereUniqueWithoutUserInput = {
    where: lesson_planWhereUniqueInput;
    update: XOR<lesson_planUpdateWithoutUserInput, lesson_planUncheckedUpdateWithoutUserInput>;
    create: XOR<lesson_planCreateWithoutUserInput, lesson_planUncheckedCreateWithoutUserInput>;
  };

  export type lesson_planUpdateWithWhereUniqueWithoutUserInput = {
    where: lesson_planWhereUniqueInput;
    data: XOR<lesson_planUpdateWithoutUserInput, lesson_planUncheckedUpdateWithoutUserInput>;
  };

  export type lesson_planUpdateManyWithWhereWithoutUserInput = {
    where: lesson_planScalarWhereInput;
    data: XOR<lesson_planUpdateManyMutationInput, lesson_planUncheckedUpdateManyWithoutUserInput>;
  };

  export type proposalUpsertWithWhereUniqueWithoutUserInput = {
    where: proposalWhereUniqueInput;
    update: XOR<proposalUpdateWithoutUserInput, proposalUncheckedUpdateWithoutUserInput>;
    create: XOR<proposalCreateWithoutUserInput, proposalUncheckedCreateWithoutUserInput>;
  };

  export type proposalUpdateWithWhereUniqueWithoutUserInput = {
    where: proposalWhereUniqueInput;
    data: XOR<proposalUpdateWithoutUserInput, proposalUncheckedUpdateWithoutUserInput>;
  };

  export type proposalUpdateManyWithWhereWithoutUserInput = {
    where: proposalScalarWhereInput;
    data: XOR<proposalUpdateManyMutationInput, proposalUncheckedUpdateManyWithoutUserInput>;
  };

  export type institutionUpsertWithoutUserInput = {
    update: XOR<institutionUpdateWithoutUserInput, institutionUncheckedUpdateWithoutUserInput>;
    create: XOR<institutionCreateWithoutUserInput, institutionUncheckedCreateWithoutUserInput>;
    where?: institutionWhereInput;
  };

  export type institutionUpdateToOneWithWhereWithoutUserInput = {
    where?: institutionWhereInput;
    data: XOR<institutionUpdateWithoutUserInput, institutionUncheckedUpdateWithoutUserInput>;
  };

  export type institutionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    established_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type institutionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    established_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleCreateManyContentInput = {
    id?: string;
    created_by: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planCreateManyContentInput = {
    id?: string;
    created_by: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalCreateManyContentInput = {
    id?: string;
    submitted_by: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLearning_moduleNestedInput;
  };

  export type learning_moduleUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLesson_planNestedInput;
  };

  export type lesson_planUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutProposalNestedInput;
  };

  export type proposalUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    submitted_by?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    submitted_by?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInstitutionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutUserNestedInput;
    proposal?: proposalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutUserNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutUserNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contentCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    subject: string;
    grade_level: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type learning_moduleCreateManyUserInput = {
    id?: string;
    content_id: string;
    module_type: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lesson_planCreateManyUserInput = {
    id?: string;
    content_id: string;
    duration: number;
    objectives: string;
    resources: string;
    assessment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type proposalCreateManyUserInput = {
    id?: string;
    content_id: string;
    description?: string | null;
    status: string;
    submitted_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    learning_module?: learning_moduleUpdateManyWithoutContentNestedInput;
    lesson_plan?: lesson_planUpdateManyWithoutContentNestedInput;
    proposal?: proposalUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    learning_module?: learning_moduleUncheckedUpdateManyWithoutContentNestedInput;
    lesson_plan?: lesson_planUncheckedUpdateManyWithoutContentNestedInput;
    proposal?: proposalUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    subject?: StringFieldUpdateOperationsInput | string;
    grade_level?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutLearning_moduleNestedInput;
  };

  export type learning_moduleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type learning_moduleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    module_type?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutLesson_planNestedInput;
  };

  export type lesson_planUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lesson_planUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    objectives?: StringFieldUpdateOperationsInput | string;
    resources?: StringFieldUpdateOperationsInput | string;
    assessment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutProposalNestedInput;
  };

  export type proposalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type proposalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ContentCountOutputTypeDefaultArgs instead
   */
  export type ContentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ContentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use InstitutionCountOutputTypeDefaultArgs instead
   */
  export type InstitutionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    InstitutionCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use contentDefaultArgs instead
   */
  export type contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    contentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use institutionDefaultArgs instead
   */
  export type institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    institutionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use learning_moduleDefaultArgs instead
   */
  export type learning_moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    learning_moduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use lesson_planDefaultArgs instead
   */
  export type lesson_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    lesson_planDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use proposalDefaultArgs instead
   */
  export type proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    proposalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
