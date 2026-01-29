
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model Child
 * 
 */
export type Child = $Result.DefaultSelection<Prisma.$ChildPayload>
/**
 * Model ParentChild
 * 
 */
export type ParentChild = $Result.DefaultSelection<Prisma.$ParentChildPayload>
/**
 * Model SpendingAccount
 * 
 */
export type SpendingAccount = $Result.DefaultSelection<Prisma.$SpendingAccountPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskInstance
 * 
 */
export type TaskInstance = $Result.DefaultSelection<Prisma.$TaskInstancePayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model WishlistItem
 * 
 */
export type WishlistItem = $Result.DefaultSelection<Prisma.$WishlistItemPayload>
/**
 * Model InvitationCode
 * 
 */
export type InvitationCode = $Result.DefaultSelection<Prisma.$InvitationCodePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PARENT: 'PARENT',
  CHILD: 'CHILD'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TransactionSource: {
  TASK_REWARD: 'TASK_REWARD',
  POCKET_MONEY: 'POCKET_MONEY',
  INTEREST: 'INTEREST',
  MANUAL_TOPUP: 'MANUAL_TOPUP',
  GIFT: 'GIFT',
  BONUS: 'BONUS',
  CASH: 'CASH',
  PURCHASE: 'PURCHASE'
};

export type TransactionSource = (typeof TransactionSource)[keyof typeof TransactionSource]


export const TaskScheduleType: {
  ONE_TIME: 'ONE_TIME',
  DAILY: 'DAILY',
  EVERY_N_DAYS: 'EVERY_N_DAYS',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

export type TaskScheduleType = (typeof TaskScheduleType)[keyof typeof TaskScheduleType]


export const TaskCompletionStatus: {
  NEW: 'NEW',
  COMPLETED: 'COMPLETED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  DECLINED_BY_CHILD: 'DECLINED_BY_CHILD',
  EXPIRED: 'EXPIRED'
};

export type TaskCompletionStatus = (typeof TaskCompletionStatus)[keyof typeof TaskCompletionStatus]


export const RequestType: {
  NEW_TASK: 'NEW_TASK',
  TASK_APPROVAL: 'TASK_APPROVAL',
  WISHLIST_PURCHASE: 'WISHLIST_PURCHASE',
  MONEY_WITHDRAW: 'MONEY_WITHDRAW',
  NEW_DEPOSIT: 'NEW_DEPOSIT'
};

export type RequestType = (typeof RequestType)[keyof typeof RequestType]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const DepositStatus: {
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED'
};

export type DepositStatus = (typeof DepositStatus)[keyof typeof DepositStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TransactionSource = $Enums.TransactionSource

export const TransactionSource: typeof $Enums.TransactionSource

export type TaskScheduleType = $Enums.TaskScheduleType

export const TaskScheduleType: typeof $Enums.TaskScheduleType

export type TaskCompletionStatus = $Enums.TaskCompletionStatus

export const TaskCompletionStatus: typeof $Enums.TaskCompletionStatus

export type RequestType = $Enums.RequestType

export const RequestType: typeof $Enums.RequestType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type DepositStatus = $Enums.DepositStatus

export const DepositStatus: typeof $Enums.DepositStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Parents
 * const parents = await prisma.parent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Parents
   * const parents = await prisma.parent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.child`: Exposes CRUD operations for the **Child** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Children
    * const children = await prisma.child.findMany()
    * ```
    */
  get child(): Prisma.ChildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parentChild`: Exposes CRUD operations for the **ParentChild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParentChildren
    * const parentChildren = await prisma.parentChild.findMany()
    * ```
    */
  get parentChild(): Prisma.ParentChildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spendingAccount`: Exposes CRUD operations for the **SpendingAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpendingAccounts
    * const spendingAccounts = await prisma.spendingAccount.findMany()
    * ```
    */
  get spendingAccount(): Prisma.SpendingAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskInstance`: Exposes CRUD operations for the **TaskInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskInstances
    * const taskInstances = await prisma.taskInstance.findMany()
    * ```
    */
  get taskInstance(): Prisma.TaskInstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlistItem`: Exposes CRUD operations for the **WishlistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WishlistItems
    * const wishlistItems = await prisma.wishlistItem.findMany()
    * ```
    */
  get wishlistItem(): Prisma.WishlistItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitationCode`: Exposes CRUD operations for the **InvitationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvitationCodes
    * const invitationCodes = await prisma.invitationCode.findMany()
    * ```
    */
  get invitationCode(): Prisma.InvitationCodeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Parent: 'Parent',
    Child: 'Child',
    ParentChild: 'ParentChild',
    SpendingAccount: 'SpendingAccount',
    Deposit: 'Deposit',
    Transaction: 'Transaction',
    Task: 'Task',
    TaskInstance: 'TaskInstance',
    Request: 'Request',
    Notification: 'Notification',
    WishlistItem: 'WishlistItem',
    InvitationCode: 'InvitationCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "parent" | "child" | "parentChild" | "spendingAccount" | "deposit" | "transaction" | "task" | "taskInstance" | "request" | "notification" | "wishlistItem" | "invitationCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      Child: {
        payload: Prisma.$ChildPayload<ExtArgs>
        fields: Prisma.ChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          findFirst: {
            args: Prisma.ChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          findMany: {
            args: Prisma.ChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          create: {
            args: Prisma.ChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          createMany: {
            args: Prisma.ChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          delete: {
            args: Prisma.ChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          update: {
            args: Prisma.ChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          deleteMany: {
            args: Prisma.ChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>[]
          }
          upsert: {
            args: Prisma.ChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildPayload>
          }
          aggregate: {
            args: Prisma.ChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChild>
          }
          groupBy: {
            args: Prisma.ChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChildCountArgs<ExtArgs>
            result: $Utils.Optional<ChildCountAggregateOutputType> | number
          }
        }
      }
      ParentChild: {
        payload: Prisma.$ParentChildPayload<ExtArgs>
        fields: Prisma.ParentChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          findFirst: {
            args: Prisma.ParentChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          findMany: {
            args: Prisma.ParentChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          create: {
            args: Prisma.ParentChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          createMany: {
            args: Prisma.ParentChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          delete: {
            args: Prisma.ParentChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          update: {
            args: Prisma.ParentChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          deleteMany: {
            args: Prisma.ParentChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          upsert: {
            args: Prisma.ParentChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          aggregate: {
            args: Prisma.ParentChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParentChild>
          }
          groupBy: {
            args: Prisma.ParentChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentChildCountArgs<ExtArgs>
            result: $Utils.Optional<ParentChildCountAggregateOutputType> | number
          }
        }
      }
      SpendingAccount: {
        payload: Prisma.$SpendingAccountPayload<ExtArgs>
        fields: Prisma.SpendingAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpendingAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpendingAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>
          }
          findFirst: {
            args: Prisma.SpendingAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpendingAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>
          }
          findMany: {
            args: Prisma.SpendingAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>[]
          }
          create: {
            args: Prisma.SpendingAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>
          }
          createMany: {
            args: Prisma.SpendingAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpendingAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>[]
          }
          delete: {
            args: Prisma.SpendingAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>
          }
          update: {
            args: Prisma.SpendingAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>
          }
          deleteMany: {
            args: Prisma.SpendingAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpendingAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpendingAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>[]
          }
          upsert: {
            args: Prisma.SpendingAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingAccountPayload>
          }
          aggregate: {
            args: Prisma.SpendingAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpendingAccount>
          }
          groupBy: {
            args: Prisma.SpendingAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpendingAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpendingAccountCountArgs<ExtArgs>
            result: $Utils.Optional<SpendingAccountCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskInstance: {
        payload: Prisma.$TaskInstancePayload<ExtArgs>
        fields: Prisma.TaskInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>
          }
          findFirst: {
            args: Prisma.TaskInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>
          }
          findMany: {
            args: Prisma.TaskInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>[]
          }
          create: {
            args: Prisma.TaskInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>
          }
          createMany: {
            args: Prisma.TaskInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>[]
          }
          delete: {
            args: Prisma.TaskInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>
          }
          update: {
            args: Prisma.TaskInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>
          }
          deleteMany: {
            args: Prisma.TaskInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskInstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>[]
          }
          upsert: {
            args: Prisma.TaskInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskInstancePayload>
          }
          aggregate: {
            args: Prisma.TaskInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskInstance>
          }
          groupBy: {
            args: Prisma.TaskInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<TaskInstanceCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      WishlistItem: {
        payload: Prisma.$WishlistItemPayload<ExtArgs>
        fields: Prisma.WishlistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishlistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishlistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          findFirst: {
            args: Prisma.WishlistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishlistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          findMany: {
            args: Prisma.WishlistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          create: {
            args: Prisma.WishlistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          createMany: {
            args: Prisma.WishlistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishlistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          delete: {
            args: Prisma.WishlistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          update: {
            args: Prisma.WishlistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          deleteMany: {
            args: Prisma.WishlistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishlistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishlistItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          upsert: {
            args: Prisma.WishlistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          aggregate: {
            args: Prisma.WishlistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlistItem>
          }
          groupBy: {
            args: Prisma.WishlistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishlistItemCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistItemCountAggregateOutputType> | number
          }
        }
      }
      InvitationCode: {
        payload: Prisma.$InvitationCodePayload<ExtArgs>
        fields: Prisma.InvitationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>
          }
          findFirst: {
            args: Prisma.InvitationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>
          }
          findMany: {
            args: Prisma.InvitationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>[]
          }
          create: {
            args: Prisma.InvitationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>
          }
          createMany: {
            args: Prisma.InvitationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>[]
          }
          delete: {
            args: Prisma.InvitationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>
          }
          update: {
            args: Prisma.InvitationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>
          }
          deleteMany: {
            args: Prisma.InvitationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>[]
          }
          upsert: {
            args: Prisma.InvitationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationCodePayload>
          }
          aggregate: {
            args: Prisma.InvitationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitationCode>
          }
          groupBy: {
            args: Prisma.InvitationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCodeCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    parent?: ParentOmit
    child?: ChildOmit
    parentChild?: ParentChildOmit
    spendingAccount?: SpendingAccountOmit
    deposit?: DepositOmit
    transaction?: TransactionOmit
    task?: TaskOmit
    taskInstance?: TaskInstanceOmit
    request?: RequestOmit
    notification?: NotificationOmit
    wishlistItem?: WishlistItemOmit
    invitationCode?: InvitationCodeOmit
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
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    children: number
    invitations: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ParentCountOutputTypeCountChildrenArgs
    invitations?: boolean | ParentCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationCodeWhereInput
  }


  /**
   * Count Type ChildCountOutputType
   */

  export type ChildCountOutputType = {
    parents: number
    deposits: number
    tasks: number
    taskInstances: number
    requests: number
    wishlist: number
  }

  export type ChildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parents?: boolean | ChildCountOutputTypeCountParentsArgs
    deposits?: boolean | ChildCountOutputTypeCountDepositsArgs
    tasks?: boolean | ChildCountOutputTypeCountTasksArgs
    taskInstances?: boolean | ChildCountOutputTypeCountTaskInstancesArgs
    requests?: boolean | ChildCountOutputTypeCountRequestsArgs
    wishlist?: boolean | ChildCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * ChildCountOutputType without action
   */
  export type ChildCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildCountOutputType
     */
    select?: ChildCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChildCountOutputType without action
   */
  export type ChildCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
  }

  /**
   * ChildCountOutputType without action
   */
  export type ChildCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }

  /**
   * ChildCountOutputType without action
   */
  export type ChildCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ChildCountOutputType without action
   */
  export type ChildCountOutputTypeCountTaskInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskInstanceWhereInput
  }

  /**
   * ChildCountOutputType without action
   */
  export type ChildCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * ChildCountOutputType without action
   */
  export type ChildCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistItemWhereInput
  }


  /**
   * Count Type SpendingAccountCountOutputType
   */

  export type SpendingAccountCountOutputType = {
    transactions: number
  }

  export type SpendingAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | SpendingAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * SpendingAccountCountOutputType without action
   */
  export type SpendingAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccountCountOutputType
     */
    select?: SpendingAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpendingAccountCountOutputType without action
   */
  export type SpendingAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type DepositCountOutputType
   */

  export type DepositCountOutputType = {
    transactions: number
  }

  export type DepositCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | DepositCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * DepositCountOutputType without action
   */
  export type DepositCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositCountOutputType
     */
    select?: DepositCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepositCountOutputType without action
   */
  export type DepositCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    instances: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instances?: boolean | TaskCountOutputTypeCountInstancesArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskInstanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    children?: boolean | Parent$childrenArgs<ExtArgs>
    invitations?: boolean | Parent$invitationsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Parent$childrenArgs<ExtArgs>
    invitations?: boolean | Parent$invitationsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      children: Prisma.$ParentChildPayload<ExtArgs>[]
      invitations: Prisma.$InvitationCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {ParentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents and returns the data updated in the database.
     * @param {ParentUpdateManyAndReturnArgs} args - Arguments to update many Parents.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParentUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
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
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    children<T extends Parent$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Parent$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Parent$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Parent$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parent model
   */
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'String'>
    readonly email: FieldRef<"Parent", 'String'>
    readonly password: FieldRef<"Parent", 'String'>
    readonly name: FieldRef<"Parent", 'String'>
    readonly avatarUrl: FieldRef<"Parent", 'String'>
    readonly createdAt: FieldRef<"Parent", 'DateTime'>
    readonly updatedAt: FieldRef<"Parent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent createManyAndReturn
   */
  export type ParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent updateManyAndReturn
   */
  export type ParentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent.children
   */
  export type Parent$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    cursor?: ParentChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * Parent.invitations
   */
  export type Parent$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    where?: InvitationCodeWhereInput
    orderBy?: InvitationCodeOrderByWithRelationInput | InvitationCodeOrderByWithRelationInput[]
    cursor?: InvitationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationCodeScalarFieldEnum | InvitationCodeScalarFieldEnum[]
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model Child
   */

  export type AggregateChild = {
    _count: ChildCountAggregateOutputType | null
    _min: ChildMinAggregateOutputType | null
    _max: ChildMaxAggregateOutputType | null
  }

  export type ChildMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    pin: string | null
    birthDate: Date | null
    city: string | null
    locale: string | null
    newsPrompt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChildMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    pin: string | null
    birthDate: Date | null
    city: string | null
    locale: string | null
    newsPrompt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChildCountAggregateOutputType = {
    id: number
    name: number
    password: number
    pin: number
    birthDate: number
    city: number
    locale: number
    newsPrompt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChildMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    pin?: true
    birthDate?: true
    city?: true
    locale?: true
    newsPrompt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChildMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    pin?: true
    birthDate?: true
    city?: true
    locale?: true
    newsPrompt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChildCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    pin?: true
    birthDate?: true
    city?: true
    locale?: true
    newsPrompt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Child to aggregate.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Children
    **/
    _count?: true | ChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChildMaxAggregateInputType
  }

  export type GetChildAggregateType<T extends ChildAggregateArgs> = {
        [P in keyof T & keyof AggregateChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChild[P]>
      : GetScalarType<T[P], AggregateChild[P]>
  }




  export type ChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChildWhereInput
    orderBy?: ChildOrderByWithAggregationInput | ChildOrderByWithAggregationInput[]
    by: ChildScalarFieldEnum[] | ChildScalarFieldEnum
    having?: ChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChildCountAggregateInputType | true
    _min?: ChildMinAggregateInputType
    _max?: ChildMaxAggregateInputType
  }

  export type ChildGroupByOutputType = {
    id: string
    name: string
    password: string
    pin: string | null
    birthDate: Date | null
    city: string | null
    locale: string | null
    newsPrompt: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChildCountAggregateOutputType | null
    _min: ChildMinAggregateOutputType | null
    _max: ChildMaxAggregateOutputType | null
  }

  type GetChildGroupByPayload<T extends ChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChildGroupByOutputType[P]>
            : GetScalarType<T[P], ChildGroupByOutputType[P]>
        }
      >
    >


  export type ChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    pin?: boolean
    birthDate?: boolean
    city?: boolean
    locale?: boolean
    newsPrompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parents?: boolean | Child$parentsArgs<ExtArgs>
    spending?: boolean | Child$spendingArgs<ExtArgs>
    deposits?: boolean | Child$depositsArgs<ExtArgs>
    tasks?: boolean | Child$tasksArgs<ExtArgs>
    taskInstances?: boolean | Child$taskInstancesArgs<ExtArgs>
    requests?: boolean | Child$requestsArgs<ExtArgs>
    wishlist?: boolean | Child$wishlistArgs<ExtArgs>
    _count?: boolean | ChildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["child"]>

  export type ChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    pin?: boolean
    birthDate?: boolean
    city?: boolean
    locale?: boolean
    newsPrompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["child"]>

  export type ChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    pin?: boolean
    birthDate?: boolean
    city?: boolean
    locale?: boolean
    newsPrompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["child"]>

  export type ChildSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    pin?: boolean
    birthDate?: boolean
    city?: boolean
    locale?: boolean
    newsPrompt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "pin" | "birthDate" | "city" | "locale" | "newsPrompt" | "createdAt" | "updatedAt", ExtArgs["result"]["child"]>
  export type ChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parents?: boolean | Child$parentsArgs<ExtArgs>
    spending?: boolean | Child$spendingArgs<ExtArgs>
    deposits?: boolean | Child$depositsArgs<ExtArgs>
    tasks?: boolean | Child$tasksArgs<ExtArgs>
    taskInstances?: boolean | Child$taskInstancesArgs<ExtArgs>
    requests?: boolean | Child$requestsArgs<ExtArgs>
    wishlist?: boolean | Child$wishlistArgs<ExtArgs>
    _count?: boolean | ChildCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Child"
    objects: {
      parents: Prisma.$ParentChildPayload<ExtArgs>[]
      spending: Prisma.$SpendingAccountPayload<ExtArgs> | null
      deposits: Prisma.$DepositPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      taskInstances: Prisma.$TaskInstancePayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
      wishlist: Prisma.$WishlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      pin: string | null
      birthDate: Date | null
      city: string | null
      locale: string | null
      newsPrompt: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["child"]>
    composites: {}
  }

  type ChildGetPayload<S extends boolean | null | undefined | ChildDefaultArgs> = $Result.GetResult<Prisma.$ChildPayload, S>

  type ChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChildCountAggregateInputType | true
    }

  export interface ChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Child'], meta: { name: 'Child' } }
    /**
     * Find zero or one Child that matches the filter.
     * @param {ChildFindUniqueArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChildFindUniqueArgs>(args: SelectSubset<T, ChildFindUniqueArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Child that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChildFindUniqueOrThrowArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChildFindUniqueOrThrowArgs>(args: SelectSubset<T, ChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Child that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindFirstArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChildFindFirstArgs>(args?: SelectSubset<T, ChildFindFirstArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Child that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindFirstOrThrowArgs} args - Arguments to find a Child
     * @example
     * // Get one Child
     * const child = await prisma.child.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChildFindFirstOrThrowArgs>(args?: SelectSubset<T, ChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Children that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Children
     * const children = await prisma.child.findMany()
     * 
     * // Get first 10 Children
     * const children = await prisma.child.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const childWithIdOnly = await prisma.child.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChildFindManyArgs>(args?: SelectSubset<T, ChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Child.
     * @param {ChildCreateArgs} args - Arguments to create a Child.
     * @example
     * // Create one Child
     * const Child = await prisma.child.create({
     *   data: {
     *     // ... data to create a Child
     *   }
     * })
     * 
     */
    create<T extends ChildCreateArgs>(args: SelectSubset<T, ChildCreateArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Children.
     * @param {ChildCreateManyArgs} args - Arguments to create many Children.
     * @example
     * // Create many Children
     * const child = await prisma.child.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChildCreateManyArgs>(args?: SelectSubset<T, ChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Children and returns the data saved in the database.
     * @param {ChildCreateManyAndReturnArgs} args - Arguments to create many Children.
     * @example
     * // Create many Children
     * const child = await prisma.child.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Children and only return the `id`
     * const childWithIdOnly = await prisma.child.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChildCreateManyAndReturnArgs>(args?: SelectSubset<T, ChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Child.
     * @param {ChildDeleteArgs} args - Arguments to delete one Child.
     * @example
     * // Delete one Child
     * const Child = await prisma.child.delete({
     *   where: {
     *     // ... filter to delete one Child
     *   }
     * })
     * 
     */
    delete<T extends ChildDeleteArgs>(args: SelectSubset<T, ChildDeleteArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Child.
     * @param {ChildUpdateArgs} args - Arguments to update one Child.
     * @example
     * // Update one Child
     * const child = await prisma.child.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChildUpdateArgs>(args: SelectSubset<T, ChildUpdateArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Children.
     * @param {ChildDeleteManyArgs} args - Arguments to filter Children to delete.
     * @example
     * // Delete a few Children
     * const { count } = await prisma.child.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChildDeleteManyArgs>(args?: SelectSubset<T, ChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Children.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Children
     * const child = await prisma.child.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChildUpdateManyArgs>(args: SelectSubset<T, ChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Children and returns the data updated in the database.
     * @param {ChildUpdateManyAndReturnArgs} args - Arguments to update many Children.
     * @example
     * // Update many Children
     * const child = await prisma.child.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Children and only return the `id`
     * const childWithIdOnly = await prisma.child.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChildUpdateManyAndReturnArgs>(args: SelectSubset<T, ChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Child.
     * @param {ChildUpsertArgs} args - Arguments to update or create a Child.
     * @example
     * // Update or create a Child
     * const child = await prisma.child.upsert({
     *   create: {
     *     // ... data to create a Child
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Child we want to update
     *   }
     * })
     */
    upsert<T extends ChildUpsertArgs>(args: SelectSubset<T, ChildUpsertArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Children.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildCountArgs} args - Arguments to filter Children to count.
     * @example
     * // Count the number of Children
     * const count = await prisma.child.count({
     *   where: {
     *     // ... the filter for the Children we want to count
     *   }
     * })
    **/
    count<T extends ChildCountArgs>(
      args?: Subset<T, ChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Child.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChildAggregateArgs>(args: Subset<T, ChildAggregateArgs>): Prisma.PrismaPromise<GetChildAggregateType<T>>

    /**
     * Group by Child.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildGroupByArgs} args - Group by arguments.
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
      T extends ChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChildGroupByArgs['orderBy'] }
        : { orderBy?: ChildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Child model
   */
  readonly fields: ChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Child.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parents<T extends Child$parentsArgs<ExtArgs> = {}>(args?: Subset<T, Child$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spending<T extends Child$spendingArgs<ExtArgs> = {}>(args?: Subset<T, Child$spendingArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deposits<T extends Child$depositsArgs<ExtArgs> = {}>(args?: Subset<T, Child$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Child$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Child$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskInstances<T extends Child$taskInstancesArgs<ExtArgs> = {}>(args?: Subset<T, Child$taskInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Child$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Child$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlist<T extends Child$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, Child$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Child model
   */
  interface ChildFieldRefs {
    readonly id: FieldRef<"Child", 'String'>
    readonly name: FieldRef<"Child", 'String'>
    readonly password: FieldRef<"Child", 'String'>
    readonly pin: FieldRef<"Child", 'String'>
    readonly birthDate: FieldRef<"Child", 'DateTime'>
    readonly city: FieldRef<"Child", 'String'>
    readonly locale: FieldRef<"Child", 'String'>
    readonly newsPrompt: FieldRef<"Child", 'String'>
    readonly createdAt: FieldRef<"Child", 'DateTime'>
    readonly updatedAt: FieldRef<"Child", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Child findUnique
   */
  export type ChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child findUniqueOrThrow
   */
  export type ChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child findFirst
   */
  export type ChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Children.
     */
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child findFirstOrThrow
   */
  export type ChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Child to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Children.
     */
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child findMany
   */
  export type ChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter, which Children to fetch.
     */
    where?: ChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Children to fetch.
     */
    orderBy?: ChildOrderByWithRelationInput | ChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Children.
     */
    cursor?: ChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Children from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Children.
     */
    skip?: number
    distinct?: ChildScalarFieldEnum | ChildScalarFieldEnum[]
  }

  /**
   * Child create
   */
  export type ChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The data needed to create a Child.
     */
    data: XOR<ChildCreateInput, ChildUncheckedCreateInput>
  }

  /**
   * Child createMany
   */
  export type ChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Children.
     */
    data: ChildCreateManyInput | ChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Child createManyAndReturn
   */
  export type ChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * The data used to create many Children.
     */
    data: ChildCreateManyInput | ChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Child update
   */
  export type ChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The data needed to update a Child.
     */
    data: XOR<ChildUpdateInput, ChildUncheckedUpdateInput>
    /**
     * Choose, which Child to update.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child updateMany
   */
  export type ChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Children.
     */
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyInput>
    /**
     * Filter which Children to update
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to update.
     */
    limit?: number
  }

  /**
   * Child updateManyAndReturn
   */
  export type ChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * The data used to update Children.
     */
    data: XOR<ChildUpdateManyMutationInput, ChildUncheckedUpdateManyInput>
    /**
     * Filter which Children to update
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to update.
     */
    limit?: number
  }

  /**
   * Child upsert
   */
  export type ChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * The filter to search for the Child to update in case it exists.
     */
    where: ChildWhereUniqueInput
    /**
     * In case the Child found by the `where` argument doesn't exist, create a new Child with this data.
     */
    create: XOR<ChildCreateInput, ChildUncheckedCreateInput>
    /**
     * In case the Child was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChildUpdateInput, ChildUncheckedUpdateInput>
  }

  /**
   * Child delete
   */
  export type ChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
    /**
     * Filter which Child to delete.
     */
    where: ChildWhereUniqueInput
  }

  /**
   * Child deleteMany
   */
  export type ChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Children to delete
     */
    where?: ChildWhereInput
    /**
     * Limit how many Children to delete.
     */
    limit?: number
  }

  /**
   * Child.parents
   */
  export type Child$parentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    cursor?: ParentChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * Child.spending
   */
  export type Child$spendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    where?: SpendingAccountWhereInput
  }

  /**
   * Child.deposits
   */
  export type Child$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Child.tasks
   */
  export type Child$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Child.taskInstances
   */
  export type Child$taskInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    where?: TaskInstanceWhereInput
    orderBy?: TaskInstanceOrderByWithRelationInput | TaskInstanceOrderByWithRelationInput[]
    cursor?: TaskInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskInstanceScalarFieldEnum | TaskInstanceScalarFieldEnum[]
  }

  /**
   * Child.requests
   */
  export type Child$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Child.wishlist
   */
  export type Child$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    where?: WishlistItemWhereInput
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    cursor?: WishlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * Child without action
   */
  export type ChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Child
     */
    select?: ChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Child
     */
    omit?: ChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildInclude<ExtArgs> | null
  }


  /**
   * Model ParentChild
   */

  export type AggregateParentChild = {
    _count: ParentChildCountAggregateOutputType | null
    _min: ParentChildMinAggregateOutputType | null
    _max: ParentChildMaxAggregateOutputType | null
  }

  export type ParentChildMinAggregateOutputType = {
    parentId: string | null
    childId: string | null
    createdAt: Date | null
  }

  export type ParentChildMaxAggregateOutputType = {
    parentId: string | null
    childId: string | null
    createdAt: Date | null
  }

  export type ParentChildCountAggregateOutputType = {
    parentId: number
    childId: number
    createdAt: number
    _all: number
  }


  export type ParentChildMinAggregateInputType = {
    parentId?: true
    childId?: true
    createdAt?: true
  }

  export type ParentChildMaxAggregateInputType = {
    parentId?: true
    childId?: true
    createdAt?: true
  }

  export type ParentChildCountAggregateInputType = {
    parentId?: true
    childId?: true
    createdAt?: true
    _all?: true
  }

  export type ParentChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentChild to aggregate.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParentChildren
    **/
    _count?: true | ParentChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentChildMaxAggregateInputType
  }

  export type GetParentChildAggregateType<T extends ParentChildAggregateArgs> = {
        [P in keyof T & keyof AggregateParentChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParentChild[P]>
      : GetScalarType<T[P], AggregateParentChild[P]>
  }




  export type ParentChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithAggregationInput | ParentChildOrderByWithAggregationInput[]
    by: ParentChildScalarFieldEnum[] | ParentChildScalarFieldEnum
    having?: ParentChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentChildCountAggregateInputType | true
    _min?: ParentChildMinAggregateInputType
    _max?: ParentChildMaxAggregateInputType
  }

  export type ParentChildGroupByOutputType = {
    parentId: string
    childId: string
    createdAt: Date
    _count: ParentChildCountAggregateOutputType | null
    _min: ParentChildMinAggregateOutputType | null
    _max: ParentChildMaxAggregateOutputType | null
  }

  type GetParentChildGroupByPayload<T extends ParentChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentChildGroupByOutputType[P]>
            : GetScalarType<T[P], ParentChildGroupByOutputType[P]>
        }
      >
    >


  export type ParentChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectScalar = {
    parentId?: boolean
    childId?: boolean
    createdAt?: boolean
  }

  export type ParentChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"parentId" | "childId" | "createdAt", ExtArgs["result"]["parentChild"]>
  export type ParentChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type ParentChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type ParentChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }

  export type $ParentChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParentChild"
    objects: {
      parent: Prisma.$ParentPayload<ExtArgs>
      child: Prisma.$ChildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      parentId: string
      childId: string
      createdAt: Date
    }, ExtArgs["result"]["parentChild"]>
    composites: {}
  }

  type ParentChildGetPayload<S extends boolean | null | undefined | ParentChildDefaultArgs> = $Result.GetResult<Prisma.$ParentChildPayload, S>

  type ParentChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentChildCountAggregateInputType | true
    }

  export interface ParentChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParentChild'], meta: { name: 'ParentChild' } }
    /**
     * Find zero or one ParentChild that matches the filter.
     * @param {ParentChildFindUniqueArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentChildFindUniqueArgs>(args: SelectSubset<T, ParentChildFindUniqueArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParentChild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentChildFindUniqueOrThrowArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentChildFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParentChild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindFirstArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentChildFindFirstArgs>(args?: SelectSubset<T, ParentChildFindFirstArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParentChild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindFirstOrThrowArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentChildFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParentChildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParentChildren
     * const parentChildren = await prisma.parentChild.findMany()
     * 
     * // Get first 10 ParentChildren
     * const parentChildren = await prisma.parentChild.findMany({ take: 10 })
     * 
     * // Only select the `parentId`
     * const parentChildWithParentIdOnly = await prisma.parentChild.findMany({ select: { parentId: true } })
     * 
     */
    findMany<T extends ParentChildFindManyArgs>(args?: SelectSubset<T, ParentChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParentChild.
     * @param {ParentChildCreateArgs} args - Arguments to create a ParentChild.
     * @example
     * // Create one ParentChild
     * const ParentChild = await prisma.parentChild.create({
     *   data: {
     *     // ... data to create a ParentChild
     *   }
     * })
     * 
     */
    create<T extends ParentChildCreateArgs>(args: SelectSubset<T, ParentChildCreateArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParentChildren.
     * @param {ParentChildCreateManyArgs} args - Arguments to create many ParentChildren.
     * @example
     * // Create many ParentChildren
     * const parentChild = await prisma.parentChild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentChildCreateManyArgs>(args?: SelectSubset<T, ParentChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParentChildren and returns the data saved in the database.
     * @param {ParentChildCreateManyAndReturnArgs} args - Arguments to create many ParentChildren.
     * @example
     * // Create many ParentChildren
     * const parentChild = await prisma.parentChild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParentChildren and only return the `parentId`
     * const parentChildWithParentIdOnly = await prisma.parentChild.createManyAndReturn({
     *   select: { parentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentChildCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParentChild.
     * @param {ParentChildDeleteArgs} args - Arguments to delete one ParentChild.
     * @example
     * // Delete one ParentChild
     * const ParentChild = await prisma.parentChild.delete({
     *   where: {
     *     // ... filter to delete one ParentChild
     *   }
     * })
     * 
     */
    delete<T extends ParentChildDeleteArgs>(args: SelectSubset<T, ParentChildDeleteArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParentChild.
     * @param {ParentChildUpdateArgs} args - Arguments to update one ParentChild.
     * @example
     * // Update one ParentChild
     * const parentChild = await prisma.parentChild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentChildUpdateArgs>(args: SelectSubset<T, ParentChildUpdateArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParentChildren.
     * @param {ParentChildDeleteManyArgs} args - Arguments to filter ParentChildren to delete.
     * @example
     * // Delete a few ParentChildren
     * const { count } = await prisma.parentChild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentChildDeleteManyArgs>(args?: SelectSubset<T, ParentChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParentChildren
     * const parentChild = await prisma.parentChild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentChildUpdateManyArgs>(args: SelectSubset<T, ParentChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentChildren and returns the data updated in the database.
     * @param {ParentChildUpdateManyAndReturnArgs} args - Arguments to update many ParentChildren.
     * @example
     * // Update many ParentChildren
     * const parentChild = await prisma.parentChild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParentChildren and only return the `parentId`
     * const parentChildWithParentIdOnly = await prisma.parentChild.updateManyAndReturn({
     *   select: { parentId: true },
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
    updateManyAndReturn<T extends ParentChildUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParentChild.
     * @param {ParentChildUpsertArgs} args - Arguments to update or create a ParentChild.
     * @example
     * // Update or create a ParentChild
     * const parentChild = await prisma.parentChild.upsert({
     *   create: {
     *     // ... data to create a ParentChild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParentChild we want to update
     *   }
     * })
     */
    upsert<T extends ParentChildUpsertArgs>(args: SelectSubset<T, ParentChildUpsertArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildCountArgs} args - Arguments to filter ParentChildren to count.
     * @example
     * // Count the number of ParentChildren
     * const count = await prisma.parentChild.count({
     *   where: {
     *     // ... the filter for the ParentChildren we want to count
     *   }
     * })
    **/
    count<T extends ParentChildCountArgs>(
      args?: Subset<T, ParentChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParentChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentChildAggregateArgs>(args: Subset<T, ParentChildAggregateArgs>): Prisma.PrismaPromise<GetParentChildAggregateType<T>>

    /**
     * Group by ParentChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildGroupByArgs} args - Group by arguments.
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
      T extends ParentChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentChildGroupByArgs['orderBy'] }
        : { orderBy?: ParentChildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParentChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParentChild model
   */
  readonly fields: ParentChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParentChild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    child<T extends ChildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildDefaultArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParentChild model
   */
  interface ParentChildFieldRefs {
    readonly parentId: FieldRef<"ParentChild", 'String'>
    readonly childId: FieldRef<"ParentChild", 'String'>
    readonly createdAt: FieldRef<"ParentChild", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParentChild findUnique
   */
  export type ParentChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild findUniqueOrThrow
   */
  export type ParentChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild findFirst
   */
  export type ParentChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentChildren.
     */
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild findFirstOrThrow
   */
  export type ParentChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentChildren.
     */
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild findMany
   */
  export type ParentChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChildren to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild create
   */
  export type ParentChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The data needed to create a ParentChild.
     */
    data: XOR<ParentChildCreateInput, ParentChildUncheckedCreateInput>
  }

  /**
   * ParentChild createMany
   */
  export type ParentChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParentChildren.
     */
    data: ParentChildCreateManyInput | ParentChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParentChild createManyAndReturn
   */
  export type ParentChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * The data used to create many ParentChildren.
     */
    data: ParentChildCreateManyInput | ParentChildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentChild update
   */
  export type ParentChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The data needed to update a ParentChild.
     */
    data: XOR<ParentChildUpdateInput, ParentChildUncheckedUpdateInput>
    /**
     * Choose, which ParentChild to update.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild updateMany
   */
  export type ParentChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParentChildren.
     */
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyInput>
    /**
     * Filter which ParentChildren to update
     */
    where?: ParentChildWhereInput
    /**
     * Limit how many ParentChildren to update.
     */
    limit?: number
  }

  /**
   * ParentChild updateManyAndReturn
   */
  export type ParentChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * The data used to update ParentChildren.
     */
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyInput>
    /**
     * Filter which ParentChildren to update
     */
    where?: ParentChildWhereInput
    /**
     * Limit how many ParentChildren to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentChild upsert
   */
  export type ParentChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The filter to search for the ParentChild to update in case it exists.
     */
    where: ParentChildWhereUniqueInput
    /**
     * In case the ParentChild found by the `where` argument doesn't exist, create a new ParentChild with this data.
     */
    create: XOR<ParentChildCreateInput, ParentChildUncheckedCreateInput>
    /**
     * In case the ParentChild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentChildUpdateInput, ParentChildUncheckedUpdateInput>
  }

  /**
   * ParentChild delete
   */
  export type ParentChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter which ParentChild to delete.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild deleteMany
   */
  export type ParentChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentChildren to delete
     */
    where?: ParentChildWhereInput
    /**
     * Limit how many ParentChildren to delete.
     */
    limit?: number
  }

  /**
   * ParentChild without action
   */
  export type ParentChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
  }


  /**
   * Model SpendingAccount
   */

  export type AggregateSpendingAccount = {
    _count: SpendingAccountCountAggregateOutputType | null
    _min: SpendingAccountMinAggregateOutputType | null
    _max: SpendingAccountMaxAggregateOutputType | null
  }

  export type SpendingAccountMinAggregateOutputType = {
    id: string | null
    childId: string | null
    createdAt: Date | null
  }

  export type SpendingAccountMaxAggregateOutputType = {
    id: string | null
    childId: string | null
    createdAt: Date | null
  }

  export type SpendingAccountCountAggregateOutputType = {
    id: number
    childId: number
    createdAt: number
    _all: number
  }


  export type SpendingAccountMinAggregateInputType = {
    id?: true
    childId?: true
    createdAt?: true
  }

  export type SpendingAccountMaxAggregateInputType = {
    id?: true
    childId?: true
    createdAt?: true
  }

  export type SpendingAccountCountAggregateInputType = {
    id?: true
    childId?: true
    createdAt?: true
    _all?: true
  }

  export type SpendingAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpendingAccount to aggregate.
     */
    where?: SpendingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpendingAccounts to fetch.
     */
    orderBy?: SpendingAccountOrderByWithRelationInput | SpendingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpendingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpendingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpendingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpendingAccounts
    **/
    _count?: true | SpendingAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpendingAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpendingAccountMaxAggregateInputType
  }

  export type GetSpendingAccountAggregateType<T extends SpendingAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateSpendingAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpendingAccount[P]>
      : GetScalarType<T[P], AggregateSpendingAccount[P]>
  }




  export type SpendingAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpendingAccountWhereInput
    orderBy?: SpendingAccountOrderByWithAggregationInput | SpendingAccountOrderByWithAggregationInput[]
    by: SpendingAccountScalarFieldEnum[] | SpendingAccountScalarFieldEnum
    having?: SpendingAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpendingAccountCountAggregateInputType | true
    _min?: SpendingAccountMinAggregateInputType
    _max?: SpendingAccountMaxAggregateInputType
  }

  export type SpendingAccountGroupByOutputType = {
    id: string
    childId: string
    createdAt: Date
    _count: SpendingAccountCountAggregateOutputType | null
    _min: SpendingAccountMinAggregateOutputType | null
    _max: SpendingAccountMaxAggregateOutputType | null
  }

  type GetSpendingAccountGroupByPayload<T extends SpendingAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpendingAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpendingAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpendingAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SpendingAccountGroupByOutputType[P]>
        }
      >
    >


  export type SpendingAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
    transactions?: boolean | SpendingAccount$transactionsArgs<ExtArgs>
    _count?: boolean | SpendingAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spendingAccount"]>

  export type SpendingAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spendingAccount"]>

  export type SpendingAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spendingAccount"]>

  export type SpendingAccountSelectScalar = {
    id?: boolean
    childId?: boolean
    createdAt?: boolean
  }

  export type SpendingAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "childId" | "createdAt", ExtArgs["result"]["spendingAccount"]>
  export type SpendingAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
    transactions?: boolean | SpendingAccount$transactionsArgs<ExtArgs>
    _count?: boolean | SpendingAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpendingAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type SpendingAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }

  export type $SpendingAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpendingAccount"
    objects: {
      child: Prisma.$ChildPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      childId: string
      createdAt: Date
    }, ExtArgs["result"]["spendingAccount"]>
    composites: {}
  }

  type SpendingAccountGetPayload<S extends boolean | null | undefined | SpendingAccountDefaultArgs> = $Result.GetResult<Prisma.$SpendingAccountPayload, S>

  type SpendingAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpendingAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpendingAccountCountAggregateInputType | true
    }

  export interface SpendingAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpendingAccount'], meta: { name: 'SpendingAccount' } }
    /**
     * Find zero or one SpendingAccount that matches the filter.
     * @param {SpendingAccountFindUniqueArgs} args - Arguments to find a SpendingAccount
     * @example
     * // Get one SpendingAccount
     * const spendingAccount = await prisma.spendingAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpendingAccountFindUniqueArgs>(args: SelectSubset<T, SpendingAccountFindUniqueArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpendingAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpendingAccountFindUniqueOrThrowArgs} args - Arguments to find a SpendingAccount
     * @example
     * // Get one SpendingAccount
     * const spendingAccount = await prisma.spendingAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpendingAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, SpendingAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpendingAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingAccountFindFirstArgs} args - Arguments to find a SpendingAccount
     * @example
     * // Get one SpendingAccount
     * const spendingAccount = await prisma.spendingAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpendingAccountFindFirstArgs>(args?: SelectSubset<T, SpendingAccountFindFirstArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpendingAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingAccountFindFirstOrThrowArgs} args - Arguments to find a SpendingAccount
     * @example
     * // Get one SpendingAccount
     * const spendingAccount = await prisma.spendingAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpendingAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, SpendingAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpendingAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpendingAccounts
     * const spendingAccounts = await prisma.spendingAccount.findMany()
     * 
     * // Get first 10 SpendingAccounts
     * const spendingAccounts = await prisma.spendingAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spendingAccountWithIdOnly = await prisma.spendingAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpendingAccountFindManyArgs>(args?: SelectSubset<T, SpendingAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpendingAccount.
     * @param {SpendingAccountCreateArgs} args - Arguments to create a SpendingAccount.
     * @example
     * // Create one SpendingAccount
     * const SpendingAccount = await prisma.spendingAccount.create({
     *   data: {
     *     // ... data to create a SpendingAccount
     *   }
     * })
     * 
     */
    create<T extends SpendingAccountCreateArgs>(args: SelectSubset<T, SpendingAccountCreateArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpendingAccounts.
     * @param {SpendingAccountCreateManyArgs} args - Arguments to create many SpendingAccounts.
     * @example
     * // Create many SpendingAccounts
     * const spendingAccount = await prisma.spendingAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpendingAccountCreateManyArgs>(args?: SelectSubset<T, SpendingAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpendingAccounts and returns the data saved in the database.
     * @param {SpendingAccountCreateManyAndReturnArgs} args - Arguments to create many SpendingAccounts.
     * @example
     * // Create many SpendingAccounts
     * const spendingAccount = await prisma.spendingAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpendingAccounts and only return the `id`
     * const spendingAccountWithIdOnly = await prisma.spendingAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpendingAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, SpendingAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpendingAccount.
     * @param {SpendingAccountDeleteArgs} args - Arguments to delete one SpendingAccount.
     * @example
     * // Delete one SpendingAccount
     * const SpendingAccount = await prisma.spendingAccount.delete({
     *   where: {
     *     // ... filter to delete one SpendingAccount
     *   }
     * })
     * 
     */
    delete<T extends SpendingAccountDeleteArgs>(args: SelectSubset<T, SpendingAccountDeleteArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpendingAccount.
     * @param {SpendingAccountUpdateArgs} args - Arguments to update one SpendingAccount.
     * @example
     * // Update one SpendingAccount
     * const spendingAccount = await prisma.spendingAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpendingAccountUpdateArgs>(args: SelectSubset<T, SpendingAccountUpdateArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpendingAccounts.
     * @param {SpendingAccountDeleteManyArgs} args - Arguments to filter SpendingAccounts to delete.
     * @example
     * // Delete a few SpendingAccounts
     * const { count } = await prisma.spendingAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpendingAccountDeleteManyArgs>(args?: SelectSubset<T, SpendingAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpendingAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpendingAccounts
     * const spendingAccount = await prisma.spendingAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpendingAccountUpdateManyArgs>(args: SelectSubset<T, SpendingAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpendingAccounts and returns the data updated in the database.
     * @param {SpendingAccountUpdateManyAndReturnArgs} args - Arguments to update many SpendingAccounts.
     * @example
     * // Update many SpendingAccounts
     * const spendingAccount = await prisma.spendingAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpendingAccounts and only return the `id`
     * const spendingAccountWithIdOnly = await prisma.spendingAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpendingAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, SpendingAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpendingAccount.
     * @param {SpendingAccountUpsertArgs} args - Arguments to update or create a SpendingAccount.
     * @example
     * // Update or create a SpendingAccount
     * const spendingAccount = await prisma.spendingAccount.upsert({
     *   create: {
     *     // ... data to create a SpendingAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpendingAccount we want to update
     *   }
     * })
     */
    upsert<T extends SpendingAccountUpsertArgs>(args: SelectSubset<T, SpendingAccountUpsertArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpendingAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingAccountCountArgs} args - Arguments to filter SpendingAccounts to count.
     * @example
     * // Count the number of SpendingAccounts
     * const count = await prisma.spendingAccount.count({
     *   where: {
     *     // ... the filter for the SpendingAccounts we want to count
     *   }
     * })
    **/
    count<T extends SpendingAccountCountArgs>(
      args?: Subset<T, SpendingAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpendingAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpendingAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpendingAccountAggregateArgs>(args: Subset<T, SpendingAccountAggregateArgs>): Prisma.PrismaPromise<GetSpendingAccountAggregateType<T>>

    /**
     * Group by SpendingAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingAccountGroupByArgs} args - Group by arguments.
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
      T extends SpendingAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpendingAccountGroupByArgs['orderBy'] }
        : { orderBy?: SpendingAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpendingAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpendingAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpendingAccount model
   */
  readonly fields: SpendingAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpendingAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpendingAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    child<T extends ChildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildDefaultArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends SpendingAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, SpendingAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SpendingAccount model
   */
  interface SpendingAccountFieldRefs {
    readonly id: FieldRef<"SpendingAccount", 'String'>
    readonly childId: FieldRef<"SpendingAccount", 'String'>
    readonly createdAt: FieldRef<"SpendingAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpendingAccount findUnique
   */
  export type SpendingAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * Filter, which SpendingAccount to fetch.
     */
    where: SpendingAccountWhereUniqueInput
  }

  /**
   * SpendingAccount findUniqueOrThrow
   */
  export type SpendingAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * Filter, which SpendingAccount to fetch.
     */
    where: SpendingAccountWhereUniqueInput
  }

  /**
   * SpendingAccount findFirst
   */
  export type SpendingAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * Filter, which SpendingAccount to fetch.
     */
    where?: SpendingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpendingAccounts to fetch.
     */
    orderBy?: SpendingAccountOrderByWithRelationInput | SpendingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpendingAccounts.
     */
    cursor?: SpendingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpendingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpendingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpendingAccounts.
     */
    distinct?: SpendingAccountScalarFieldEnum | SpendingAccountScalarFieldEnum[]
  }

  /**
   * SpendingAccount findFirstOrThrow
   */
  export type SpendingAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * Filter, which SpendingAccount to fetch.
     */
    where?: SpendingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpendingAccounts to fetch.
     */
    orderBy?: SpendingAccountOrderByWithRelationInput | SpendingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpendingAccounts.
     */
    cursor?: SpendingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpendingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpendingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpendingAccounts.
     */
    distinct?: SpendingAccountScalarFieldEnum | SpendingAccountScalarFieldEnum[]
  }

  /**
   * SpendingAccount findMany
   */
  export type SpendingAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * Filter, which SpendingAccounts to fetch.
     */
    where?: SpendingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpendingAccounts to fetch.
     */
    orderBy?: SpendingAccountOrderByWithRelationInput | SpendingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpendingAccounts.
     */
    cursor?: SpendingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpendingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpendingAccounts.
     */
    skip?: number
    distinct?: SpendingAccountScalarFieldEnum | SpendingAccountScalarFieldEnum[]
  }

  /**
   * SpendingAccount create
   */
  export type SpendingAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a SpendingAccount.
     */
    data: XOR<SpendingAccountCreateInput, SpendingAccountUncheckedCreateInput>
  }

  /**
   * SpendingAccount createMany
   */
  export type SpendingAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpendingAccounts.
     */
    data: SpendingAccountCreateManyInput | SpendingAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpendingAccount createManyAndReturn
   */
  export type SpendingAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * The data used to create many SpendingAccounts.
     */
    data: SpendingAccountCreateManyInput | SpendingAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpendingAccount update
   */
  export type SpendingAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a SpendingAccount.
     */
    data: XOR<SpendingAccountUpdateInput, SpendingAccountUncheckedUpdateInput>
    /**
     * Choose, which SpendingAccount to update.
     */
    where: SpendingAccountWhereUniqueInput
  }

  /**
   * SpendingAccount updateMany
   */
  export type SpendingAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpendingAccounts.
     */
    data: XOR<SpendingAccountUpdateManyMutationInput, SpendingAccountUncheckedUpdateManyInput>
    /**
     * Filter which SpendingAccounts to update
     */
    where?: SpendingAccountWhereInput
    /**
     * Limit how many SpendingAccounts to update.
     */
    limit?: number
  }

  /**
   * SpendingAccount updateManyAndReturn
   */
  export type SpendingAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * The data used to update SpendingAccounts.
     */
    data: XOR<SpendingAccountUpdateManyMutationInput, SpendingAccountUncheckedUpdateManyInput>
    /**
     * Filter which SpendingAccounts to update
     */
    where?: SpendingAccountWhereInput
    /**
     * Limit how many SpendingAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpendingAccount upsert
   */
  export type SpendingAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the SpendingAccount to update in case it exists.
     */
    where: SpendingAccountWhereUniqueInput
    /**
     * In case the SpendingAccount found by the `where` argument doesn't exist, create a new SpendingAccount with this data.
     */
    create: XOR<SpendingAccountCreateInput, SpendingAccountUncheckedCreateInput>
    /**
     * In case the SpendingAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpendingAccountUpdateInput, SpendingAccountUncheckedUpdateInput>
  }

  /**
   * SpendingAccount delete
   */
  export type SpendingAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    /**
     * Filter which SpendingAccount to delete.
     */
    where: SpendingAccountWhereUniqueInput
  }

  /**
   * SpendingAccount deleteMany
   */
  export type SpendingAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpendingAccounts to delete
     */
    where?: SpendingAccountWhereInput
    /**
     * Limit how many SpendingAccounts to delete.
     */
    limit?: number
  }

  /**
   * SpendingAccount.transactions
   */
  export type SpendingAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * SpendingAccount without action
   */
  export type SpendingAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    amount: Decimal | null
    interestRate: number | null
  }

  export type DepositSumAggregateOutputType = {
    amount: Decimal | null
    interestRate: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    interestRate: number | null
    startsAt: Date | null
    endsAt: Date | null
    status: $Enums.DepositStatus | null
    childId: string | null
    createdAt: Date | null
    closedAt: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    interestRate: number | null
    startsAt: Date | null
    endsAt: Date | null
    status: $Enums.DepositStatus | null
    childId: string | null
    createdAt: Date | null
    closedAt: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    amount: number
    interestRate: number
    startsAt: number
    endsAt: number
    status: number
    childId: number
    createdAt: number
    closedAt: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    amount?: true
    interestRate?: true
  }

  export type DepositSumAggregateInputType = {
    amount?: true
    interestRate?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    amount?: true
    interestRate?: true
    startsAt?: true
    endsAt?: true
    status?: true
    childId?: true
    createdAt?: true
    closedAt?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    amount?: true
    interestRate?: true
    startsAt?: true
    endsAt?: true
    status?: true
    childId?: true
    createdAt?: true
    closedAt?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    amount?: true
    interestRate?: true
    startsAt?: true
    endsAt?: true
    status?: true
    childId?: true
    createdAt?: true
    closedAt?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: string
    amount: Decimal
    interestRate: number
    startsAt: Date
    endsAt: Date
    status: $Enums.DepositStatus
    childId: string
    createdAt: Date
    closedAt: Date | null
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    interestRate?: boolean
    startsAt?: boolean
    endsAt?: boolean
    status?: boolean
    childId?: boolean
    createdAt?: boolean
    closedAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
    transactions?: boolean | Deposit$transactionsArgs<ExtArgs>
    _count?: boolean | DepositCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    interestRate?: boolean
    startsAt?: boolean
    endsAt?: boolean
    status?: boolean
    childId?: boolean
    createdAt?: boolean
    closedAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    interestRate?: boolean
    startsAt?: boolean
    endsAt?: boolean
    status?: boolean
    childId?: boolean
    createdAt?: boolean
    closedAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    amount?: boolean
    interestRate?: boolean
    startsAt?: boolean
    endsAt?: boolean
    status?: boolean
    childId?: boolean
    createdAt?: boolean
    closedAt?: boolean
  }

  export type DepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "interestRate" | "startsAt" | "endsAt" | "status" | "childId" | "createdAt" | "closedAt", ExtArgs["result"]["deposit"]>
  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
    transactions?: boolean | Deposit$transactionsArgs<ExtArgs>
    _count?: boolean | DepositCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type DepositIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      child: Prisma.$ChildPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      interestRate: number
      startsAt: Date
      endsAt: Date
      status: $Enums.DepositStatus
      childId: string
      createdAt: Date
      closedAt: Date | null
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits and returns the data updated in the database.
     * @param {DepositUpdateManyAndReturnArgs} args - Arguments to update many Deposits.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepositUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
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
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    child<T extends ChildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildDefaultArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Deposit$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Deposit$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Deposit model
   */
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'String'>
    readonly amount: FieldRef<"Deposit", 'Decimal'>
    readonly interestRate: FieldRef<"Deposit", 'Float'>
    readonly startsAt: FieldRef<"Deposit", 'DateTime'>
    readonly endsAt: FieldRef<"Deposit", 'DateTime'>
    readonly status: FieldRef<"Deposit", 'DepositStatus'>
    readonly childId: FieldRef<"Deposit", 'String'>
    readonly createdAt: FieldRef<"Deposit", 'DateTime'>
    readonly closedAt: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
  }

  /**
   * Deposit updateManyAndReturn
   */
  export type DepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to delete.
     */
    limit?: number
  }

  /**
   * Deposit.transactions
   */
  export type Deposit$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    source: $Enums.TransactionSource | null
    comment: string | null
    spendingAccountId: string | null
    depositId: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    source: $Enums.TransactionSource | null
    comment: string | null
    spendingAccountId: string | null
    depositId: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    amount: number
    source: number
    comment: number
    spendingAccountId: number
    depositId: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    amount?: true
    source?: true
    comment?: true
    spendingAccountId?: true
    depositId?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    source?: true
    comment?: true
    spendingAccountId?: true
    depositId?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    amount?: true
    source?: true
    comment?: true
    spendingAccountId?: true
    depositId?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    amount: Decimal
    source: $Enums.TransactionSource
    comment: string | null
    spendingAccountId: string | null
    depositId: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    source?: boolean
    comment?: boolean
    spendingAccountId?: boolean
    depositId?: boolean
    createdAt?: boolean
    spendingAccount?: boolean | Transaction$spendingAccountArgs<ExtArgs>
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    source?: boolean
    comment?: boolean
    spendingAccountId?: boolean
    depositId?: boolean
    createdAt?: boolean
    spendingAccount?: boolean | Transaction$spendingAccountArgs<ExtArgs>
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    source?: boolean
    comment?: boolean
    spendingAccountId?: boolean
    depositId?: boolean
    createdAt?: boolean
    spendingAccount?: boolean | Transaction$spendingAccountArgs<ExtArgs>
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    source?: boolean
    comment?: boolean
    spendingAccountId?: boolean
    depositId?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "source" | "comment" | "spendingAccountId" | "depositId" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spendingAccount?: boolean | Transaction$spendingAccountArgs<ExtArgs>
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spendingAccount?: boolean | Transaction$spendingAccountArgs<ExtArgs>
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spendingAccount?: boolean | Transaction$spendingAccountArgs<ExtArgs>
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      spendingAccount: Prisma.$SpendingAccountPayload<ExtArgs> | null
      deposit: Prisma.$DepositPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      source: $Enums.TransactionSource
      comment: string | null
      spendingAccountId: string | null
      depositId: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spendingAccount<T extends Transaction$spendingAccountArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$spendingAccountArgs<ExtArgs>>): Prisma__SpendingAccountClient<$Result.GetResult<Prisma.$SpendingAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deposit<T extends Transaction$depositArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$depositArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly source: FieldRef<"Transaction", 'TransactionSource'>
    readonly comment: FieldRef<"Transaction", 'String'>
    readonly spendingAccountId: FieldRef<"Transaction", 'String'>
    readonly depositId: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.spendingAccount
   */
  export type Transaction$spendingAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingAccount
     */
    select?: SpendingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpendingAccount
     */
    omit?: SpendingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingAccountInclude<ExtArgs> | null
    where?: SpendingAccountWhereInput
  }

  /**
   * Transaction.deposit
   */
  export type Transaction$depositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    reward: Decimal | null
    intervalDays: number | null
    weekDays: number | null
    dayOfMonth: number | null
  }

  export type TaskSumAggregateOutputType = {
    reward: Decimal | null
    intervalDays: number | null
    weekDays: number[]
    dayOfMonth: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    reward: Decimal | null
    scheduleType: $Enums.TaskScheduleType | null
    intervalDays: number | null
    dayOfMonth: number | null
    startsAt: Date | null
    endsAt: Date | null
    childId: string | null
    createdAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    reward: Decimal | null
    scheduleType: $Enums.TaskScheduleType | null
    intervalDays: number | null
    dayOfMonth: number | null
    startsAt: Date | null
    endsAt: Date | null
    childId: string | null
    createdAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    reward: number
    scheduleType: number
    intervalDays: number
    weekDays: number
    dayOfMonth: number
    startsAt: number
    endsAt: number
    childId: number
    createdAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    reward?: true
    intervalDays?: true
    weekDays?: true
    dayOfMonth?: true
  }

  export type TaskSumAggregateInputType = {
    reward?: true
    intervalDays?: true
    weekDays?: true
    dayOfMonth?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    reward?: true
    scheduleType?: true
    intervalDays?: true
    dayOfMonth?: true
    startsAt?: true
    endsAt?: true
    childId?: true
    createdAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    reward?: true
    scheduleType?: true
    intervalDays?: true
    dayOfMonth?: true
    startsAt?: true
    endsAt?: true
    childId?: true
    createdAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    reward?: true
    scheduleType?: true
    intervalDays?: true
    weekDays?: true
    dayOfMonth?: true
    startsAt?: true
    endsAt?: true
    childId?: true
    createdAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    reward: Decimal
    scheduleType: $Enums.TaskScheduleType
    intervalDays: number | null
    weekDays: number[]
    dayOfMonth: number | null
    startsAt: Date
    endsAt: Date | null
    childId: string
    createdAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    reward?: boolean
    scheduleType?: boolean
    intervalDays?: boolean
    weekDays?: boolean
    dayOfMonth?: boolean
    startsAt?: boolean
    endsAt?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
    instances?: boolean | Task$instancesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    reward?: boolean
    scheduleType?: boolean
    intervalDays?: boolean
    weekDays?: boolean
    dayOfMonth?: boolean
    startsAt?: boolean
    endsAt?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    reward?: boolean
    scheduleType?: boolean
    intervalDays?: boolean
    weekDays?: boolean
    dayOfMonth?: boolean
    startsAt?: boolean
    endsAt?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    reward?: boolean
    scheduleType?: boolean
    intervalDays?: boolean
    weekDays?: boolean
    dayOfMonth?: boolean
    startsAt?: boolean
    endsAt?: boolean
    childId?: boolean
    createdAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "reward" | "scheduleType" | "intervalDays" | "weekDays" | "dayOfMonth" | "startsAt" | "endsAt" | "childId" | "createdAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
    instances?: boolean | Task$instancesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      child: Prisma.$ChildPayload<ExtArgs>
      instances: Prisma.$TaskInstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      reward: Prisma.Decimal
      scheduleType: $Enums.TaskScheduleType
      intervalDays: number | null
      weekDays: number[]
      dayOfMonth: number | null
      startsAt: Date
      endsAt: Date | null
      childId: string
      createdAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    child<T extends ChildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildDefaultArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instances<T extends Task$instancesArgs<ExtArgs> = {}>(args?: Subset<T, Task$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly reward: FieldRef<"Task", 'Decimal'>
    readonly scheduleType: FieldRef<"Task", 'TaskScheduleType'>
    readonly intervalDays: FieldRef<"Task", 'Int'>
    readonly weekDays: FieldRef<"Task", 'Int[]'>
    readonly dayOfMonth: FieldRef<"Task", 'Int'>
    readonly startsAt: FieldRef<"Task", 'DateTime'>
    readonly endsAt: FieldRef<"Task", 'DateTime'>
    readonly childId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.instances
   */
  export type Task$instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    where?: TaskInstanceWhereInput
    orderBy?: TaskInstanceOrderByWithRelationInput | TaskInstanceOrderByWithRelationInput[]
    cursor?: TaskInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskInstanceScalarFieldEnum | TaskInstanceScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskInstance
   */

  export type AggregateTaskInstance = {
    _count: TaskInstanceCountAggregateOutputType | null
    _min: TaskInstanceMinAggregateOutputType | null
    _max: TaskInstanceMaxAggregateOutputType | null
  }

  export type TaskInstanceMinAggregateOutputType = {
    id: string | null
    date: Date | null
    status: $Enums.TaskCompletionStatus | null
    taskId: string | null
    childId: string | null
    createdAt: Date | null
    approvedAt: Date | null
    expiredAt: Date | null
  }

  export type TaskInstanceMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    status: $Enums.TaskCompletionStatus | null
    taskId: string | null
    childId: string | null
    createdAt: Date | null
    approvedAt: Date | null
    expiredAt: Date | null
  }

  export type TaskInstanceCountAggregateOutputType = {
    id: number
    date: number
    status: number
    taskId: number
    childId: number
    createdAt: number
    approvedAt: number
    expiredAt: number
    _all: number
  }


  export type TaskInstanceMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    taskId?: true
    childId?: true
    createdAt?: true
    approvedAt?: true
    expiredAt?: true
  }

  export type TaskInstanceMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    taskId?: true
    childId?: true
    createdAt?: true
    approvedAt?: true
    expiredAt?: true
  }

  export type TaskInstanceCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    taskId?: true
    childId?: true
    createdAt?: true
    approvedAt?: true
    expiredAt?: true
    _all?: true
  }

  export type TaskInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskInstance to aggregate.
     */
    where?: TaskInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskInstances to fetch.
     */
    orderBy?: TaskInstanceOrderByWithRelationInput | TaskInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskInstances
    **/
    _count?: true | TaskInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskInstanceMaxAggregateInputType
  }

  export type GetTaskInstanceAggregateType<T extends TaskInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskInstance[P]>
      : GetScalarType<T[P], AggregateTaskInstance[P]>
  }




  export type TaskInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskInstanceWhereInput
    orderBy?: TaskInstanceOrderByWithAggregationInput | TaskInstanceOrderByWithAggregationInput[]
    by: TaskInstanceScalarFieldEnum[] | TaskInstanceScalarFieldEnum
    having?: TaskInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskInstanceCountAggregateInputType | true
    _min?: TaskInstanceMinAggregateInputType
    _max?: TaskInstanceMaxAggregateInputType
  }

  export type TaskInstanceGroupByOutputType = {
    id: string
    date: Date
    status: $Enums.TaskCompletionStatus
    taskId: string
    childId: string
    createdAt: Date
    approvedAt: Date | null
    expiredAt: Date | null
    _count: TaskInstanceCountAggregateOutputType | null
    _min: TaskInstanceMinAggregateOutputType | null
    _max: TaskInstanceMaxAggregateOutputType | null
  }

  type GetTaskInstanceGroupByPayload<T extends TaskInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], TaskInstanceGroupByOutputType[P]>
        }
      >
    >


  export type TaskInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    taskId?: boolean
    childId?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    expiredAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskInstance"]>

  export type TaskInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    taskId?: boolean
    childId?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    expiredAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskInstance"]>

  export type TaskInstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    taskId?: boolean
    childId?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    expiredAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskInstance"]>

  export type TaskInstanceSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    taskId?: boolean
    childId?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    expiredAt?: boolean
  }

  export type TaskInstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "status" | "taskId" | "childId" | "createdAt" | "approvedAt" | "expiredAt", ExtArgs["result"]["taskInstance"]>
  export type TaskInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type TaskInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type TaskInstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }

  export type $TaskInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskInstance"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      child: Prisma.$ChildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      status: $Enums.TaskCompletionStatus
      taskId: string
      childId: string
      createdAt: Date
      approvedAt: Date | null
      expiredAt: Date | null
    }, ExtArgs["result"]["taskInstance"]>
    composites: {}
  }

  type TaskInstanceGetPayload<S extends boolean | null | undefined | TaskInstanceDefaultArgs> = $Result.GetResult<Prisma.$TaskInstancePayload, S>

  type TaskInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskInstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskInstanceCountAggregateInputType | true
    }

  export interface TaskInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskInstance'], meta: { name: 'TaskInstance' } }
    /**
     * Find zero or one TaskInstance that matches the filter.
     * @param {TaskInstanceFindUniqueArgs} args - Arguments to find a TaskInstance
     * @example
     * // Get one TaskInstance
     * const taskInstance = await prisma.taskInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskInstanceFindUniqueArgs>(args: SelectSubset<T, TaskInstanceFindUniqueArgs<ExtArgs>>): Prisma__TaskInstanceClient<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskInstance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskInstanceFindUniqueOrThrowArgs} args - Arguments to find a TaskInstance
     * @example
     * // Get one TaskInstance
     * const taskInstance = await prisma.taskInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskInstanceClient<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInstanceFindFirstArgs} args - Arguments to find a TaskInstance
     * @example
     * // Get one TaskInstance
     * const taskInstance = await prisma.taskInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskInstanceFindFirstArgs>(args?: SelectSubset<T, TaskInstanceFindFirstArgs<ExtArgs>>): Prisma__TaskInstanceClient<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInstanceFindFirstOrThrowArgs} args - Arguments to find a TaskInstance
     * @example
     * // Get one TaskInstance
     * const taskInstance = await prisma.taskInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskInstanceClient<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskInstances
     * const taskInstances = await prisma.taskInstance.findMany()
     * 
     * // Get first 10 TaskInstances
     * const taskInstances = await prisma.taskInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskInstanceWithIdOnly = await prisma.taskInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskInstanceFindManyArgs>(args?: SelectSubset<T, TaskInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskInstance.
     * @param {TaskInstanceCreateArgs} args - Arguments to create a TaskInstance.
     * @example
     * // Create one TaskInstance
     * const TaskInstance = await prisma.taskInstance.create({
     *   data: {
     *     // ... data to create a TaskInstance
     *   }
     * })
     * 
     */
    create<T extends TaskInstanceCreateArgs>(args: SelectSubset<T, TaskInstanceCreateArgs<ExtArgs>>): Prisma__TaskInstanceClient<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskInstances.
     * @param {TaskInstanceCreateManyArgs} args - Arguments to create many TaskInstances.
     * @example
     * // Create many TaskInstances
     * const taskInstance = await prisma.taskInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskInstanceCreateManyArgs>(args?: SelectSubset<T, TaskInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskInstances and returns the data saved in the database.
     * @param {TaskInstanceCreateManyAndReturnArgs} args - Arguments to create many TaskInstances.
     * @example
     * // Create many TaskInstances
     * const taskInstance = await prisma.taskInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskInstances and only return the `id`
     * const taskInstanceWithIdOnly = await prisma.taskInstance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskInstance.
     * @param {TaskInstanceDeleteArgs} args - Arguments to delete one TaskInstance.
     * @example
     * // Delete one TaskInstance
     * const TaskInstance = await prisma.taskInstance.delete({
     *   where: {
     *     // ... filter to delete one TaskInstance
     *   }
     * })
     * 
     */
    delete<T extends TaskInstanceDeleteArgs>(args: SelectSubset<T, TaskInstanceDeleteArgs<ExtArgs>>): Prisma__TaskInstanceClient<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskInstance.
     * @param {TaskInstanceUpdateArgs} args - Arguments to update one TaskInstance.
     * @example
     * // Update one TaskInstance
     * const taskInstance = await prisma.taskInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskInstanceUpdateArgs>(args: SelectSubset<T, TaskInstanceUpdateArgs<ExtArgs>>): Prisma__TaskInstanceClient<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskInstances.
     * @param {TaskInstanceDeleteManyArgs} args - Arguments to filter TaskInstances to delete.
     * @example
     * // Delete a few TaskInstances
     * const { count } = await prisma.taskInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskInstanceDeleteManyArgs>(args?: SelectSubset<T, TaskInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskInstances
     * const taskInstance = await prisma.taskInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskInstanceUpdateManyArgs>(args: SelectSubset<T, TaskInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskInstances and returns the data updated in the database.
     * @param {TaskInstanceUpdateManyAndReturnArgs} args - Arguments to update many TaskInstances.
     * @example
     * // Update many TaskInstances
     * const taskInstance = await prisma.taskInstance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskInstances and only return the `id`
     * const taskInstanceWithIdOnly = await prisma.taskInstance.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskInstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskInstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskInstance.
     * @param {TaskInstanceUpsertArgs} args - Arguments to update or create a TaskInstance.
     * @example
     * // Update or create a TaskInstance
     * const taskInstance = await prisma.taskInstance.upsert({
     *   create: {
     *     // ... data to create a TaskInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskInstance we want to update
     *   }
     * })
     */
    upsert<T extends TaskInstanceUpsertArgs>(args: SelectSubset<T, TaskInstanceUpsertArgs<ExtArgs>>): Prisma__TaskInstanceClient<$Result.GetResult<Prisma.$TaskInstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInstanceCountArgs} args - Arguments to filter TaskInstances to count.
     * @example
     * // Count the number of TaskInstances
     * const count = await prisma.taskInstance.count({
     *   where: {
     *     // ... the filter for the TaskInstances we want to count
     *   }
     * })
    **/
    count<T extends TaskInstanceCountArgs>(
      args?: Subset<T, TaskInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskInstanceAggregateArgs>(args: Subset<T, TaskInstanceAggregateArgs>): Prisma.PrismaPromise<GetTaskInstanceAggregateType<T>>

    /**
     * Group by TaskInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskInstanceGroupByArgs} args - Group by arguments.
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
      T extends TaskInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskInstanceGroupByArgs['orderBy'] }
        : { orderBy?: TaskInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskInstance model
   */
  readonly fields: TaskInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    child<T extends ChildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildDefaultArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskInstance model
   */
  interface TaskInstanceFieldRefs {
    readonly id: FieldRef<"TaskInstance", 'String'>
    readonly date: FieldRef<"TaskInstance", 'DateTime'>
    readonly status: FieldRef<"TaskInstance", 'TaskCompletionStatus'>
    readonly taskId: FieldRef<"TaskInstance", 'String'>
    readonly childId: FieldRef<"TaskInstance", 'String'>
    readonly createdAt: FieldRef<"TaskInstance", 'DateTime'>
    readonly approvedAt: FieldRef<"TaskInstance", 'DateTime'>
    readonly expiredAt: FieldRef<"TaskInstance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskInstance findUnique
   */
  export type TaskInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * Filter, which TaskInstance to fetch.
     */
    where: TaskInstanceWhereUniqueInput
  }

  /**
   * TaskInstance findUniqueOrThrow
   */
  export type TaskInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * Filter, which TaskInstance to fetch.
     */
    where: TaskInstanceWhereUniqueInput
  }

  /**
   * TaskInstance findFirst
   */
  export type TaskInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * Filter, which TaskInstance to fetch.
     */
    where?: TaskInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskInstances to fetch.
     */
    orderBy?: TaskInstanceOrderByWithRelationInput | TaskInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskInstances.
     */
    cursor?: TaskInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskInstances.
     */
    distinct?: TaskInstanceScalarFieldEnum | TaskInstanceScalarFieldEnum[]
  }

  /**
   * TaskInstance findFirstOrThrow
   */
  export type TaskInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * Filter, which TaskInstance to fetch.
     */
    where?: TaskInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskInstances to fetch.
     */
    orderBy?: TaskInstanceOrderByWithRelationInput | TaskInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskInstances.
     */
    cursor?: TaskInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskInstances.
     */
    distinct?: TaskInstanceScalarFieldEnum | TaskInstanceScalarFieldEnum[]
  }

  /**
   * TaskInstance findMany
   */
  export type TaskInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * Filter, which TaskInstances to fetch.
     */
    where?: TaskInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskInstances to fetch.
     */
    orderBy?: TaskInstanceOrderByWithRelationInput | TaskInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskInstances.
     */
    cursor?: TaskInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskInstances.
     */
    skip?: number
    distinct?: TaskInstanceScalarFieldEnum | TaskInstanceScalarFieldEnum[]
  }

  /**
   * TaskInstance create
   */
  export type TaskInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskInstance.
     */
    data: XOR<TaskInstanceCreateInput, TaskInstanceUncheckedCreateInput>
  }

  /**
   * TaskInstance createMany
   */
  export type TaskInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskInstances.
     */
    data: TaskInstanceCreateManyInput | TaskInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskInstance createManyAndReturn
   */
  export type TaskInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * The data used to create many TaskInstances.
     */
    data: TaskInstanceCreateManyInput | TaskInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskInstance update
   */
  export type TaskInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskInstance.
     */
    data: XOR<TaskInstanceUpdateInput, TaskInstanceUncheckedUpdateInput>
    /**
     * Choose, which TaskInstance to update.
     */
    where: TaskInstanceWhereUniqueInput
  }

  /**
   * TaskInstance updateMany
   */
  export type TaskInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskInstances.
     */
    data: XOR<TaskInstanceUpdateManyMutationInput, TaskInstanceUncheckedUpdateManyInput>
    /**
     * Filter which TaskInstances to update
     */
    where?: TaskInstanceWhereInput
    /**
     * Limit how many TaskInstances to update.
     */
    limit?: number
  }

  /**
   * TaskInstance updateManyAndReturn
   */
  export type TaskInstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * The data used to update TaskInstances.
     */
    data: XOR<TaskInstanceUpdateManyMutationInput, TaskInstanceUncheckedUpdateManyInput>
    /**
     * Filter which TaskInstances to update
     */
    where?: TaskInstanceWhereInput
    /**
     * Limit how many TaskInstances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskInstance upsert
   */
  export type TaskInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskInstance to update in case it exists.
     */
    where: TaskInstanceWhereUniqueInput
    /**
     * In case the TaskInstance found by the `where` argument doesn't exist, create a new TaskInstance with this data.
     */
    create: XOR<TaskInstanceCreateInput, TaskInstanceUncheckedCreateInput>
    /**
     * In case the TaskInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskInstanceUpdateInput, TaskInstanceUncheckedUpdateInput>
  }

  /**
   * TaskInstance delete
   */
  export type TaskInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
    /**
     * Filter which TaskInstance to delete.
     */
    where: TaskInstanceWhereUniqueInput
  }

  /**
   * TaskInstance deleteMany
   */
  export type TaskInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskInstances to delete
     */
    where?: TaskInstanceWhereInput
    /**
     * Limit how many TaskInstances to delete.
     */
    limit?: number
  }

  /**
   * TaskInstance without action
   */
  export type TaskInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskInstance
     */
    select?: TaskInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskInstance
     */
    omit?: TaskInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInstanceInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    type: $Enums.RequestType | null
    status: $Enums.RequestStatus | null
    childId: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    type: $Enums.RequestType | null
    status: $Enums.RequestStatus | null
    childId: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    type: number
    status: number
    childId: number
    payload: number
    createdAt: number
    resolvedAt: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    childId?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    childId?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    childId?: true
    payload?: true
    createdAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    type: $Enums.RequestType
    status: $Enums.RequestStatus
    childId: string
    payload: JsonValue
    createdAt: Date
    resolvedAt: Date | null
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    childId?: boolean
    payload?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    childId?: boolean
    payload?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    childId?: boolean
    payload?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    childId?: boolean
    payload?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "childId" | "payload" | "createdAt" | "resolvedAt", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      child: Prisma.$ChildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.RequestType
      status: $Enums.RequestStatus
      childId: string
      payload: Prisma.JsonValue
      createdAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
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
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
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
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    child<T extends ChildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildDefaultArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly type: FieldRef<"Request", 'RequestType'>
    readonly status: FieldRef<"Request", 'RequestStatus'>
    readonly childId: FieldRef<"Request", 'String'>
    readonly payload: FieldRef<"Request", 'Json'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
    readonly resolvedAt: FieldRef<"Request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userRole: $Enums.UserRole | null
    userId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userRole: $Enums.UserRole | null
    userId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userRole: number
    userId: number
    title: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userRole?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userRole?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userRole?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userRole: $Enums.UserRole
    userId: string
    title: string
    message: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRole?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRole?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRole?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userRole?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userRole" | "userId" | "title" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userRole: $Enums.UserRole
      userId: string
      title: string
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userRole: FieldRef<"Notification", 'UserRole'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Model WishlistItem
   */

  export type AggregateWishlistItem = {
    _count: WishlistItemCountAggregateOutputType | null
    _avg: WishlistItemAvgAggregateOutputType | null
    _sum: WishlistItemSumAggregateOutputType | null
    _min: WishlistItemMinAggregateOutputType | null
    _max: WishlistItemMaxAggregateOutputType | null
  }

  export type WishlistItemAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type WishlistItemSumAggregateOutputType = {
    price: Decimal | null
  }

  export type WishlistItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    price: Decimal | null
    imageUrl: string | null
    childId: string | null
    createdAt: Date | null
  }

  export type WishlistItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    price: Decimal | null
    imageUrl: string | null
    childId: string | null
    createdAt: Date | null
  }

  export type WishlistItemCountAggregateOutputType = {
    id: number
    title: number
    price: number
    imageUrl: number
    childId: number
    createdAt: number
    _all: number
  }


  export type WishlistItemAvgAggregateInputType = {
    price?: true
  }

  export type WishlistItemSumAggregateInputType = {
    price?: true
  }

  export type WishlistItemMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    imageUrl?: true
    childId?: true
    createdAt?: true
  }

  export type WishlistItemMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    imageUrl?: true
    childId?: true
    createdAt?: true
  }

  export type WishlistItemCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    imageUrl?: true
    childId?: true
    createdAt?: true
    _all?: true
  }

  export type WishlistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WishlistItem to aggregate.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WishlistItems
    **/
    _count?: true | WishlistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistItemMaxAggregateInputType
  }

  export type GetWishlistItemAggregateType<T extends WishlistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlistItem[P]>
      : GetScalarType<T[P], AggregateWishlistItem[P]>
  }




  export type WishlistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistItemWhereInput
    orderBy?: WishlistItemOrderByWithAggregationInput | WishlistItemOrderByWithAggregationInput[]
    by: WishlistItemScalarFieldEnum[] | WishlistItemScalarFieldEnum
    having?: WishlistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistItemCountAggregateInputType | true
    _avg?: WishlistItemAvgAggregateInputType
    _sum?: WishlistItemSumAggregateInputType
    _min?: WishlistItemMinAggregateInputType
    _max?: WishlistItemMaxAggregateInputType
  }

  export type WishlistItemGroupByOutputType = {
    id: string
    title: string
    price: Decimal
    imageUrl: string | null
    childId: string
    createdAt: Date
    _count: WishlistItemCountAggregateOutputType | null
    _avg: WishlistItemAvgAggregateOutputType | null
    _sum: WishlistItemSumAggregateOutputType | null
    _min: WishlistItemMinAggregateOutputType | null
    _max: WishlistItemMaxAggregateOutputType | null
  }

  type GetWishlistItemGroupByPayload<T extends WishlistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistItemGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistItemGroupByOutputType[P]>
        }
      >
    >


  export type WishlistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    imageUrl?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    imageUrl?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    imageUrl?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    imageUrl?: boolean
    childId?: boolean
    createdAt?: boolean
  }

  export type WishlistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "price" | "imageUrl" | "childId" | "createdAt", ExtArgs["result"]["wishlistItem"]>
  export type WishlistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type WishlistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }
  export type WishlistItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | ChildDefaultArgs<ExtArgs>
  }

  export type $WishlistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WishlistItem"
    objects: {
      child: Prisma.$ChildPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      price: Prisma.Decimal
      imageUrl: string | null
      childId: string
      createdAt: Date
    }, ExtArgs["result"]["wishlistItem"]>
    composites: {}
  }

  type WishlistItemGetPayload<S extends boolean | null | undefined | WishlistItemDefaultArgs> = $Result.GetResult<Prisma.$WishlistItemPayload, S>

  type WishlistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishlistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistItemCountAggregateInputType | true
    }

  export interface WishlistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WishlistItem'], meta: { name: 'WishlistItem' } }
    /**
     * Find zero or one WishlistItem that matches the filter.
     * @param {WishlistItemFindUniqueArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishlistItemFindUniqueArgs>(args: SelectSubset<T, WishlistItemFindUniqueArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WishlistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishlistItemFindUniqueOrThrowArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishlistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WishlistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WishlistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindFirstArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishlistItemFindFirstArgs>(args?: SelectSubset<T, WishlistItemFindFirstArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WishlistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindFirstOrThrowArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishlistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WishlistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WishlistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WishlistItems
     * const wishlistItems = await prisma.wishlistItem.findMany()
     * 
     * // Get first 10 WishlistItems
     * const wishlistItems = await prisma.wishlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishlistItemFindManyArgs>(args?: SelectSubset<T, WishlistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WishlistItem.
     * @param {WishlistItemCreateArgs} args - Arguments to create a WishlistItem.
     * @example
     * // Create one WishlistItem
     * const WishlistItem = await prisma.wishlistItem.create({
     *   data: {
     *     // ... data to create a WishlistItem
     *   }
     * })
     * 
     */
    create<T extends WishlistItemCreateArgs>(args: SelectSubset<T, WishlistItemCreateArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WishlistItems.
     * @param {WishlistItemCreateManyArgs} args - Arguments to create many WishlistItems.
     * @example
     * // Create many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishlistItemCreateManyArgs>(args?: SelectSubset<T, WishlistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WishlistItems and returns the data saved in the database.
     * @param {WishlistItemCreateManyAndReturnArgs} args - Arguments to create many WishlistItems.
     * @example
     * // Create many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WishlistItems and only return the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishlistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WishlistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WishlistItem.
     * @param {WishlistItemDeleteArgs} args - Arguments to delete one WishlistItem.
     * @example
     * // Delete one WishlistItem
     * const WishlistItem = await prisma.wishlistItem.delete({
     *   where: {
     *     // ... filter to delete one WishlistItem
     *   }
     * })
     * 
     */
    delete<T extends WishlistItemDeleteArgs>(args: SelectSubset<T, WishlistItemDeleteArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WishlistItem.
     * @param {WishlistItemUpdateArgs} args - Arguments to update one WishlistItem.
     * @example
     * // Update one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishlistItemUpdateArgs>(args: SelectSubset<T, WishlistItemUpdateArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WishlistItems.
     * @param {WishlistItemDeleteManyArgs} args - Arguments to filter WishlistItems to delete.
     * @example
     * // Delete a few WishlistItems
     * const { count } = await prisma.wishlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishlistItemDeleteManyArgs>(args?: SelectSubset<T, WishlistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WishlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishlistItemUpdateManyArgs>(args: SelectSubset<T, WishlistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WishlistItems and returns the data updated in the database.
     * @param {WishlistItemUpdateManyAndReturnArgs} args - Arguments to update many WishlistItems.
     * @example
     * // Update many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WishlistItems and only return the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends WishlistItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WishlistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WishlistItem.
     * @param {WishlistItemUpsertArgs} args - Arguments to update or create a WishlistItem.
     * @example
     * // Update or create a WishlistItem
     * const wishlistItem = await prisma.wishlistItem.upsert({
     *   create: {
     *     // ... data to create a WishlistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WishlistItem we want to update
     *   }
     * })
     */
    upsert<T extends WishlistItemUpsertArgs>(args: SelectSubset<T, WishlistItemUpsertArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WishlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemCountArgs} args - Arguments to filter WishlistItems to count.
     * @example
     * // Count the number of WishlistItems
     * const count = await prisma.wishlistItem.count({
     *   where: {
     *     // ... the filter for the WishlistItems we want to count
     *   }
     * })
    **/
    count<T extends WishlistItemCountArgs>(
      args?: Subset<T, WishlistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WishlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WishlistItemAggregateArgs>(args: Subset<T, WishlistItemAggregateArgs>): Prisma.PrismaPromise<GetWishlistItemAggregateType<T>>

    /**
     * Group by WishlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemGroupByArgs} args - Group by arguments.
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
      T extends WishlistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishlistItemGroupByArgs['orderBy'] }
        : { orderBy?: WishlistItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WishlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WishlistItem model
   */
  readonly fields: WishlistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WishlistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishlistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    child<T extends ChildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildDefaultArgs<ExtArgs>>): Prisma__ChildClient<$Result.GetResult<Prisma.$ChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WishlistItem model
   */
  interface WishlistItemFieldRefs {
    readonly id: FieldRef<"WishlistItem", 'String'>
    readonly title: FieldRef<"WishlistItem", 'String'>
    readonly price: FieldRef<"WishlistItem", 'Decimal'>
    readonly imageUrl: FieldRef<"WishlistItem", 'String'>
    readonly childId: FieldRef<"WishlistItem", 'String'>
    readonly createdAt: FieldRef<"WishlistItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WishlistItem findUnique
   */
  export type WishlistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem findUniqueOrThrow
   */
  export type WishlistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem findFirst
   */
  export type WishlistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WishlistItems.
     */
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem findFirstOrThrow
   */
  export type WishlistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WishlistItems.
     */
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem findMany
   */
  export type WishlistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItems to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem create
   */
  export type WishlistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WishlistItem.
     */
    data: XOR<WishlistItemCreateInput, WishlistItemUncheckedCreateInput>
  }

  /**
   * WishlistItem createMany
   */
  export type WishlistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WishlistItems.
     */
    data: WishlistItemCreateManyInput | WishlistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WishlistItem createManyAndReturn
   */
  export type WishlistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * The data used to create many WishlistItems.
     */
    data: WishlistItemCreateManyInput | WishlistItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WishlistItem update
   */
  export type WishlistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WishlistItem.
     */
    data: XOR<WishlistItemUpdateInput, WishlistItemUncheckedUpdateInput>
    /**
     * Choose, which WishlistItem to update.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem updateMany
   */
  export type WishlistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WishlistItems.
     */
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WishlistItems to update
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to update.
     */
    limit?: number
  }

  /**
   * WishlistItem updateManyAndReturn
   */
  export type WishlistItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * The data used to update WishlistItems.
     */
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WishlistItems to update
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WishlistItem upsert
   */
  export type WishlistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WishlistItem to update in case it exists.
     */
    where: WishlistItemWhereUniqueInput
    /**
     * In case the WishlistItem found by the `where` argument doesn't exist, create a new WishlistItem with this data.
     */
    create: XOR<WishlistItemCreateInput, WishlistItemUncheckedCreateInput>
    /**
     * In case the WishlistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishlistItemUpdateInput, WishlistItemUncheckedUpdateInput>
  }

  /**
   * WishlistItem delete
   */
  export type WishlistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter which WishlistItem to delete.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem deleteMany
   */
  export type WishlistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WishlistItems to delete
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to delete.
     */
    limit?: number
  }

  /**
   * WishlistItem without action
   */
  export type WishlistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
  }


  /**
   * Model InvitationCode
   */

  export type AggregateInvitationCode = {
    _count: InvitationCodeCountAggregateOutputType | null
    _min: InvitationCodeMinAggregateOutputType | null
    _max: InvitationCodeMaxAggregateOutputType | null
  }

  export type InvitationCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    usedAt: Date | null
    parentId: string | null
    createdAt: Date | null
  }

  export type InvitationCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    usedAt: Date | null
    parentId: string | null
    createdAt: Date | null
  }

  export type InvitationCodeCountAggregateOutputType = {
    id: number
    code: number
    usedAt: number
    parentId: number
    createdAt: number
    _all: number
  }


  export type InvitationCodeMinAggregateInputType = {
    id?: true
    code?: true
    usedAt?: true
    parentId?: true
    createdAt?: true
  }

  export type InvitationCodeMaxAggregateInputType = {
    id?: true
    code?: true
    usedAt?: true
    parentId?: true
    createdAt?: true
  }

  export type InvitationCodeCountAggregateInputType = {
    id?: true
    code?: true
    usedAt?: true
    parentId?: true
    createdAt?: true
    _all?: true
  }

  export type InvitationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvitationCode to aggregate.
     */
    where?: InvitationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitationCodes to fetch.
     */
    orderBy?: InvitationCodeOrderByWithRelationInput | InvitationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvitationCodes
    **/
    _count?: true | InvitationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationCodeMaxAggregateInputType
  }

  export type GetInvitationCodeAggregateType<T extends InvitationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitationCode[P]>
      : GetScalarType<T[P], AggregateInvitationCode[P]>
  }




  export type InvitationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationCodeWhereInput
    orderBy?: InvitationCodeOrderByWithAggregationInput | InvitationCodeOrderByWithAggregationInput[]
    by: InvitationCodeScalarFieldEnum[] | InvitationCodeScalarFieldEnum
    having?: InvitationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCodeCountAggregateInputType | true
    _min?: InvitationCodeMinAggregateInputType
    _max?: InvitationCodeMaxAggregateInputType
  }

  export type InvitationCodeGroupByOutputType = {
    id: string
    code: string
    usedAt: Date | null
    parentId: string
    createdAt: Date
    _count: InvitationCodeCountAggregateOutputType | null
    _min: InvitationCodeMinAggregateOutputType | null
    _max: InvitationCodeMaxAggregateOutputType | null
  }

  type GetInvitationCodeGroupByPayload<T extends InvitationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationCodeGroupByOutputType[P]>
        }
      >
    >


  export type InvitationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    usedAt?: boolean
    parentId?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitationCode"]>

  export type InvitationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    usedAt?: boolean
    parentId?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitationCode"]>

  export type InvitationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    usedAt?: boolean
    parentId?: boolean
    createdAt?: boolean
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitationCode"]>

  export type InvitationCodeSelectScalar = {
    id?: boolean
    code?: boolean
    usedAt?: boolean
    parentId?: boolean
    createdAt?: boolean
  }

  export type InvitationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "usedAt" | "parentId" | "createdAt", ExtArgs["result"]["invitationCode"]>
  export type InvitationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }
  export type InvitationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }
  export type InvitationCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentDefaultArgs<ExtArgs>
  }

  export type $InvitationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvitationCode"
    objects: {
      parent: Prisma.$ParentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      usedAt: Date | null
      parentId: string
      createdAt: Date
    }, ExtArgs["result"]["invitationCode"]>
    composites: {}
  }

  type InvitationCodeGetPayload<S extends boolean | null | undefined | InvitationCodeDefaultArgs> = $Result.GetResult<Prisma.$InvitationCodePayload, S>

  type InvitationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCodeCountAggregateInputType | true
    }

  export interface InvitationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvitationCode'], meta: { name: 'InvitationCode' } }
    /**
     * Find zero or one InvitationCode that matches the filter.
     * @param {InvitationCodeFindUniqueArgs} args - Arguments to find a InvitationCode
     * @example
     * // Get one InvitationCode
     * const invitationCode = await prisma.invitationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationCodeFindUniqueArgs>(args: SelectSubset<T, InvitationCodeFindUniqueArgs<ExtArgs>>): Prisma__InvitationCodeClient<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvitationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationCodeFindUniqueOrThrowArgs} args - Arguments to find a InvitationCode
     * @example
     * // Get one InvitationCode
     * const invitationCode = await prisma.invitationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationCodeClient<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvitationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCodeFindFirstArgs} args - Arguments to find a InvitationCode
     * @example
     * // Get one InvitationCode
     * const invitationCode = await prisma.invitationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationCodeFindFirstArgs>(args?: SelectSubset<T, InvitationCodeFindFirstArgs<ExtArgs>>): Prisma__InvitationCodeClient<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvitationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCodeFindFirstOrThrowArgs} args - Arguments to find a InvitationCode
     * @example
     * // Get one InvitationCode
     * const invitationCode = await prisma.invitationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationCodeClient<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvitationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvitationCodes
     * const invitationCodes = await prisma.invitationCode.findMany()
     * 
     * // Get first 10 InvitationCodes
     * const invitationCodes = await prisma.invitationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationCodeWithIdOnly = await prisma.invitationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationCodeFindManyArgs>(args?: SelectSubset<T, InvitationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvitationCode.
     * @param {InvitationCodeCreateArgs} args - Arguments to create a InvitationCode.
     * @example
     * // Create one InvitationCode
     * const InvitationCode = await prisma.invitationCode.create({
     *   data: {
     *     // ... data to create a InvitationCode
     *   }
     * })
     * 
     */
    create<T extends InvitationCodeCreateArgs>(args: SelectSubset<T, InvitationCodeCreateArgs<ExtArgs>>): Prisma__InvitationCodeClient<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvitationCodes.
     * @param {InvitationCodeCreateManyArgs} args - Arguments to create many InvitationCodes.
     * @example
     * // Create many InvitationCodes
     * const invitationCode = await prisma.invitationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCodeCreateManyArgs>(args?: SelectSubset<T, InvitationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvitationCodes and returns the data saved in the database.
     * @param {InvitationCodeCreateManyAndReturnArgs} args - Arguments to create many InvitationCodes.
     * @example
     * // Create many InvitationCodes
     * const invitationCode = await prisma.invitationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvitationCodes and only return the `id`
     * const invitationCodeWithIdOnly = await prisma.invitationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvitationCode.
     * @param {InvitationCodeDeleteArgs} args - Arguments to delete one InvitationCode.
     * @example
     * // Delete one InvitationCode
     * const InvitationCode = await prisma.invitationCode.delete({
     *   where: {
     *     // ... filter to delete one InvitationCode
     *   }
     * })
     * 
     */
    delete<T extends InvitationCodeDeleteArgs>(args: SelectSubset<T, InvitationCodeDeleteArgs<ExtArgs>>): Prisma__InvitationCodeClient<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvitationCode.
     * @param {InvitationCodeUpdateArgs} args - Arguments to update one InvitationCode.
     * @example
     * // Update one InvitationCode
     * const invitationCode = await prisma.invitationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationCodeUpdateArgs>(args: SelectSubset<T, InvitationCodeUpdateArgs<ExtArgs>>): Prisma__InvitationCodeClient<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvitationCodes.
     * @param {InvitationCodeDeleteManyArgs} args - Arguments to filter InvitationCodes to delete.
     * @example
     * // Delete a few InvitationCodes
     * const { count } = await prisma.invitationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationCodeDeleteManyArgs>(args?: SelectSubset<T, InvitationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvitationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvitationCodes
     * const invitationCode = await prisma.invitationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationCodeUpdateManyArgs>(args: SelectSubset<T, InvitationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvitationCodes and returns the data updated in the database.
     * @param {InvitationCodeUpdateManyAndReturnArgs} args - Arguments to update many InvitationCodes.
     * @example
     * // Update many InvitationCodes
     * const invitationCode = await prisma.invitationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvitationCodes and only return the `id`
     * const invitationCodeWithIdOnly = await prisma.invitationCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvitationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvitationCode.
     * @param {InvitationCodeUpsertArgs} args - Arguments to update or create a InvitationCode.
     * @example
     * // Update or create a InvitationCode
     * const invitationCode = await prisma.invitationCode.upsert({
     *   create: {
     *     // ... data to create a InvitationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvitationCode we want to update
     *   }
     * })
     */
    upsert<T extends InvitationCodeUpsertArgs>(args: SelectSubset<T, InvitationCodeUpsertArgs<ExtArgs>>): Prisma__InvitationCodeClient<$Result.GetResult<Prisma.$InvitationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvitationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCodeCountArgs} args - Arguments to filter InvitationCodes to count.
     * @example
     * // Count the number of InvitationCodes
     * const count = await prisma.invitationCode.count({
     *   where: {
     *     // ... the filter for the InvitationCodes we want to count
     *   }
     * })
    **/
    count<T extends InvitationCodeCountArgs>(
      args?: Subset<T, InvitationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvitationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationCodeAggregateArgs>(args: Subset<T, InvitationCodeAggregateArgs>): Prisma.PrismaPromise<GetInvitationCodeAggregateType<T>>

    /**
     * Group by InvitationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCodeGroupByArgs} args - Group by arguments.
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
      T extends InvitationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationCodeGroupByArgs['orderBy'] }
        : { orderBy?: InvitationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvitationCode model
   */
  readonly fields: InvitationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvitationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvitationCode model
   */
  interface InvitationCodeFieldRefs {
    readonly id: FieldRef<"InvitationCode", 'String'>
    readonly code: FieldRef<"InvitationCode", 'String'>
    readonly usedAt: FieldRef<"InvitationCode", 'DateTime'>
    readonly parentId: FieldRef<"InvitationCode", 'String'>
    readonly createdAt: FieldRef<"InvitationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvitationCode findUnique
   */
  export type InvitationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * Filter, which InvitationCode to fetch.
     */
    where: InvitationCodeWhereUniqueInput
  }

  /**
   * InvitationCode findUniqueOrThrow
   */
  export type InvitationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * Filter, which InvitationCode to fetch.
     */
    where: InvitationCodeWhereUniqueInput
  }

  /**
   * InvitationCode findFirst
   */
  export type InvitationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * Filter, which InvitationCode to fetch.
     */
    where?: InvitationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitationCodes to fetch.
     */
    orderBy?: InvitationCodeOrderByWithRelationInput | InvitationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvitationCodes.
     */
    cursor?: InvitationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvitationCodes.
     */
    distinct?: InvitationCodeScalarFieldEnum | InvitationCodeScalarFieldEnum[]
  }

  /**
   * InvitationCode findFirstOrThrow
   */
  export type InvitationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * Filter, which InvitationCode to fetch.
     */
    where?: InvitationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitationCodes to fetch.
     */
    orderBy?: InvitationCodeOrderByWithRelationInput | InvitationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvitationCodes.
     */
    cursor?: InvitationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvitationCodes.
     */
    distinct?: InvitationCodeScalarFieldEnum | InvitationCodeScalarFieldEnum[]
  }

  /**
   * InvitationCode findMany
   */
  export type InvitationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * Filter, which InvitationCodes to fetch.
     */
    where?: InvitationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvitationCodes to fetch.
     */
    orderBy?: InvitationCodeOrderByWithRelationInput | InvitationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvitationCodes.
     */
    cursor?: InvitationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvitationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvitationCodes.
     */
    skip?: number
    distinct?: InvitationCodeScalarFieldEnum | InvitationCodeScalarFieldEnum[]
  }

  /**
   * InvitationCode create
   */
  export type InvitationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a InvitationCode.
     */
    data: XOR<InvitationCodeCreateInput, InvitationCodeUncheckedCreateInput>
  }

  /**
   * InvitationCode createMany
   */
  export type InvitationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvitationCodes.
     */
    data: InvitationCodeCreateManyInput | InvitationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvitationCode createManyAndReturn
   */
  export type InvitationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many InvitationCodes.
     */
    data: InvitationCodeCreateManyInput | InvitationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvitationCode update
   */
  export type InvitationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a InvitationCode.
     */
    data: XOR<InvitationCodeUpdateInput, InvitationCodeUncheckedUpdateInput>
    /**
     * Choose, which InvitationCode to update.
     */
    where: InvitationCodeWhereUniqueInput
  }

  /**
   * InvitationCode updateMany
   */
  export type InvitationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvitationCodes.
     */
    data: XOR<InvitationCodeUpdateManyMutationInput, InvitationCodeUncheckedUpdateManyInput>
    /**
     * Filter which InvitationCodes to update
     */
    where?: InvitationCodeWhereInput
    /**
     * Limit how many InvitationCodes to update.
     */
    limit?: number
  }

  /**
   * InvitationCode updateManyAndReturn
   */
  export type InvitationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * The data used to update InvitationCodes.
     */
    data: XOR<InvitationCodeUpdateManyMutationInput, InvitationCodeUncheckedUpdateManyInput>
    /**
     * Filter which InvitationCodes to update
     */
    where?: InvitationCodeWhereInput
    /**
     * Limit how many InvitationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvitationCode upsert
   */
  export type InvitationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the InvitationCode to update in case it exists.
     */
    where: InvitationCodeWhereUniqueInput
    /**
     * In case the InvitationCode found by the `where` argument doesn't exist, create a new InvitationCode with this data.
     */
    create: XOR<InvitationCodeCreateInput, InvitationCodeUncheckedCreateInput>
    /**
     * In case the InvitationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationCodeUpdateInput, InvitationCodeUncheckedUpdateInput>
  }

  /**
   * InvitationCode delete
   */
  export type InvitationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
    /**
     * Filter which InvitationCode to delete.
     */
    where: InvitationCodeWhereUniqueInput
  }

  /**
   * InvitationCode deleteMany
   */
  export type InvitationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvitationCodes to delete
     */
    where?: InvitationCodeWhereInput
    /**
     * Limit how many InvitationCodes to delete.
     */
    limit?: number
  }

  /**
   * InvitationCode without action
   */
  export type InvitationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationCode
     */
    select?: InvitationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvitationCode
     */
    omit?: InvitationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationCodeInclude<ExtArgs> | null
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


  export const ParentScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const ChildScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    pin: 'pin',
    birthDate: 'birthDate',
    city: 'city',
    locale: 'locale',
    newsPrompt: 'newsPrompt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChildScalarFieldEnum = (typeof ChildScalarFieldEnum)[keyof typeof ChildScalarFieldEnum]


  export const ParentChildScalarFieldEnum: {
    parentId: 'parentId',
    childId: 'childId',
    createdAt: 'createdAt'
  };

  export type ParentChildScalarFieldEnum = (typeof ParentChildScalarFieldEnum)[keyof typeof ParentChildScalarFieldEnum]


  export const SpendingAccountScalarFieldEnum: {
    id: 'id',
    childId: 'childId',
    createdAt: 'createdAt'
  };

  export type SpendingAccountScalarFieldEnum = (typeof SpendingAccountScalarFieldEnum)[keyof typeof SpendingAccountScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    interestRate: 'interestRate',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    status: 'status',
    childId: 'childId',
    createdAt: 'createdAt',
    closedAt: 'closedAt'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    source: 'source',
    comment: 'comment',
    spendingAccountId: 'spendingAccountId',
    depositId: 'depositId',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    reward: 'reward',
    scheduleType: 'scheduleType',
    intervalDays: 'intervalDays',
    weekDays: 'weekDays',
    dayOfMonth: 'dayOfMonth',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    childId: 'childId',
    createdAt: 'createdAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskInstanceScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    taskId: 'taskId',
    childId: 'childId',
    createdAt: 'createdAt',
    approvedAt: 'approvedAt',
    expiredAt: 'expiredAt'
  };

  export type TaskInstanceScalarFieldEnum = (typeof TaskInstanceScalarFieldEnum)[keyof typeof TaskInstanceScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    childId: 'childId',
    payload: 'payload',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userRole: 'userRole',
    userId: 'userId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const WishlistItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    imageUrl: 'imageUrl',
    childId: 'childId',
    createdAt: 'createdAt'
  };

  export type WishlistItemScalarFieldEnum = (typeof WishlistItemScalarFieldEnum)[keyof typeof WishlistItemScalarFieldEnum]


  export const InvitationCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    usedAt: 'usedAt',
    parentId: 'parentId',
    createdAt: 'createdAt'
  };

  export type InvitationCodeScalarFieldEnum = (typeof InvitationCodeScalarFieldEnum)[keyof typeof InvitationCodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DepositStatus'
   */
  export type EnumDepositStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositStatus'>
    


  /**
   * Reference to a field of type 'DepositStatus[]'
   */
  export type ListEnumDepositStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionSource'
   */
  export type EnumTransactionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionSource'>
    


  /**
   * Reference to a field of type 'TransactionSource[]'
   */
  export type ListEnumTransactionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionSource[]'>
    


  /**
   * Reference to a field of type 'TaskScheduleType'
   */
  export type EnumTaskScheduleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskScheduleType'>
    


  /**
   * Reference to a field of type 'TaskScheduleType[]'
   */
  export type ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskScheduleType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TaskCompletionStatus'
   */
  export type EnumTaskCompletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskCompletionStatus'>
    


  /**
   * Reference to a field of type 'TaskCompletionStatus[]'
   */
  export type ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskCompletionStatus[]'>
    


  /**
   * Reference to a field of type 'RequestType'
   */
  export type EnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType'>
    


  /**
   * Reference to a field of type 'RequestType[]'
   */
  export type ListEnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: StringFilter<"Parent"> | string
    email?: StringFilter<"Parent"> | string
    password?: StringFilter<"Parent"> | string
    name?: StringFilter<"Parent"> | string
    avatarUrl?: StringNullableFilter<"Parent"> | string | null
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    updatedAt?: DateTimeFilter<"Parent"> | Date | string
    children?: ParentChildListRelationFilter
    invitations?: InvitationCodeListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    children?: ParentChildOrderByRelationAggregateInput
    invitations?: InvitationCodeOrderByRelationAggregateInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    password?: StringFilter<"Parent"> | string
    name?: StringFilter<"Parent"> | string
    avatarUrl?: StringNullableFilter<"Parent"> | string | null
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    updatedAt?: DateTimeFilter<"Parent"> | Date | string
    children?: ParentChildListRelationFilter
    invitations?: InvitationCodeListRelationFilter
  }, "id" | "email">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parent"> | string
    email?: StringWithAggregatesFilter<"Parent"> | string
    password?: StringWithAggregatesFilter<"Parent"> | string
    name?: StringWithAggregatesFilter<"Parent"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Parent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parent"> | Date | string
  }

  export type ChildWhereInput = {
    AND?: ChildWhereInput | ChildWhereInput[]
    OR?: ChildWhereInput[]
    NOT?: ChildWhereInput | ChildWhereInput[]
    id?: StringFilter<"Child"> | string
    name?: StringFilter<"Child"> | string
    password?: StringFilter<"Child"> | string
    pin?: StringNullableFilter<"Child"> | string | null
    birthDate?: DateTimeNullableFilter<"Child"> | Date | string | null
    city?: StringNullableFilter<"Child"> | string | null
    locale?: StringNullableFilter<"Child"> | string | null
    newsPrompt?: StringNullableFilter<"Child"> | string | null
    createdAt?: DateTimeFilter<"Child"> | Date | string
    updatedAt?: DateTimeFilter<"Child"> | Date | string
    parents?: ParentChildListRelationFilter
    spending?: XOR<SpendingAccountNullableScalarRelationFilter, SpendingAccountWhereInput> | null
    deposits?: DepositListRelationFilter
    tasks?: TaskListRelationFilter
    taskInstances?: TaskInstanceListRelationFilter
    requests?: RequestListRelationFilter
    wishlist?: WishlistItemListRelationFilter
  }

  export type ChildOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    pin?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    locale?: SortOrderInput | SortOrder
    newsPrompt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parents?: ParentChildOrderByRelationAggregateInput
    spending?: SpendingAccountOrderByWithRelationInput
    deposits?: DepositOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    taskInstances?: TaskInstanceOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
    wishlist?: WishlistItemOrderByRelationAggregateInput
  }

  export type ChildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChildWhereInput | ChildWhereInput[]
    OR?: ChildWhereInput[]
    NOT?: ChildWhereInput | ChildWhereInput[]
    name?: StringFilter<"Child"> | string
    password?: StringFilter<"Child"> | string
    pin?: StringNullableFilter<"Child"> | string | null
    birthDate?: DateTimeNullableFilter<"Child"> | Date | string | null
    city?: StringNullableFilter<"Child"> | string | null
    locale?: StringNullableFilter<"Child"> | string | null
    newsPrompt?: StringNullableFilter<"Child"> | string | null
    createdAt?: DateTimeFilter<"Child"> | Date | string
    updatedAt?: DateTimeFilter<"Child"> | Date | string
    parents?: ParentChildListRelationFilter
    spending?: XOR<SpendingAccountNullableScalarRelationFilter, SpendingAccountWhereInput> | null
    deposits?: DepositListRelationFilter
    tasks?: TaskListRelationFilter
    taskInstances?: TaskInstanceListRelationFilter
    requests?: RequestListRelationFilter
    wishlist?: WishlistItemListRelationFilter
  }, "id">

  export type ChildOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    pin?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    locale?: SortOrderInput | SortOrder
    newsPrompt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChildCountOrderByAggregateInput
    _max?: ChildMaxOrderByAggregateInput
    _min?: ChildMinOrderByAggregateInput
  }

  export type ChildScalarWhereWithAggregatesInput = {
    AND?: ChildScalarWhereWithAggregatesInput | ChildScalarWhereWithAggregatesInput[]
    OR?: ChildScalarWhereWithAggregatesInput[]
    NOT?: ChildScalarWhereWithAggregatesInput | ChildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Child"> | string
    name?: StringWithAggregatesFilter<"Child"> | string
    password?: StringWithAggregatesFilter<"Child"> | string
    pin?: StringNullableWithAggregatesFilter<"Child"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Child"> | Date | string | null
    city?: StringNullableWithAggregatesFilter<"Child"> | string | null
    locale?: StringNullableWithAggregatesFilter<"Child"> | string | null
    newsPrompt?: StringNullableWithAggregatesFilter<"Child"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Child"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Child"> | Date | string
  }

  export type ParentChildWhereInput = {
    AND?: ParentChildWhereInput | ParentChildWhereInput[]
    OR?: ParentChildWhereInput[]
    NOT?: ParentChildWhereInput | ParentChildWhereInput[]
    parentId?: StringFilter<"ParentChild"> | string
    childId?: StringFilter<"ParentChild"> | string
    createdAt?: DateTimeFilter<"ParentChild"> | Date | string
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
  }

  export type ParentChildOrderByWithRelationInput = {
    parentId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    parent?: ParentOrderByWithRelationInput
    child?: ChildOrderByWithRelationInput
  }

  export type ParentChildWhereUniqueInput = Prisma.AtLeast<{
    parentId_childId?: ParentChildParentIdChildIdCompoundUniqueInput
    AND?: ParentChildWhereInput | ParentChildWhereInput[]
    OR?: ParentChildWhereInput[]
    NOT?: ParentChildWhereInput | ParentChildWhereInput[]
    parentId?: StringFilter<"ParentChild"> | string
    childId?: StringFilter<"ParentChild"> | string
    createdAt?: DateTimeFilter<"ParentChild"> | Date | string
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
  }, "parentId_childId">

  export type ParentChildOrderByWithAggregationInput = {
    parentId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    _count?: ParentChildCountOrderByAggregateInput
    _max?: ParentChildMaxOrderByAggregateInput
    _min?: ParentChildMinOrderByAggregateInput
  }

  export type ParentChildScalarWhereWithAggregatesInput = {
    AND?: ParentChildScalarWhereWithAggregatesInput | ParentChildScalarWhereWithAggregatesInput[]
    OR?: ParentChildScalarWhereWithAggregatesInput[]
    NOT?: ParentChildScalarWhereWithAggregatesInput | ParentChildScalarWhereWithAggregatesInput[]
    parentId?: StringWithAggregatesFilter<"ParentChild"> | string
    childId?: StringWithAggregatesFilter<"ParentChild"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ParentChild"> | Date | string
  }

  export type SpendingAccountWhereInput = {
    AND?: SpendingAccountWhereInput | SpendingAccountWhereInput[]
    OR?: SpendingAccountWhereInput[]
    NOT?: SpendingAccountWhereInput | SpendingAccountWhereInput[]
    id?: StringFilter<"SpendingAccount"> | string
    childId?: StringFilter<"SpendingAccount"> | string
    createdAt?: DateTimeFilter<"SpendingAccount"> | Date | string
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type SpendingAccountOrderByWithRelationInput = {
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    child?: ChildOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type SpendingAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    childId?: string
    AND?: SpendingAccountWhereInput | SpendingAccountWhereInput[]
    OR?: SpendingAccountWhereInput[]
    NOT?: SpendingAccountWhereInput | SpendingAccountWhereInput[]
    createdAt?: DateTimeFilter<"SpendingAccount"> | Date | string
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "childId">

  export type SpendingAccountOrderByWithAggregationInput = {
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    _count?: SpendingAccountCountOrderByAggregateInput
    _max?: SpendingAccountMaxOrderByAggregateInput
    _min?: SpendingAccountMinOrderByAggregateInput
  }

  export type SpendingAccountScalarWhereWithAggregatesInput = {
    AND?: SpendingAccountScalarWhereWithAggregatesInput | SpendingAccountScalarWhereWithAggregatesInput[]
    OR?: SpendingAccountScalarWhereWithAggregatesInput[]
    NOT?: SpendingAccountScalarWhereWithAggregatesInput | SpendingAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpendingAccount"> | string
    childId?: StringWithAggregatesFilter<"SpendingAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SpendingAccount"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: StringFilter<"Deposit"> | string
    amount?: DecimalFilter<"Deposit"> | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFilter<"Deposit"> | number
    startsAt?: DateTimeFilter<"Deposit"> | Date | string
    endsAt?: DateTimeFilter<"Deposit"> | Date | string
    status?: EnumDepositStatusFilter<"Deposit"> | $Enums.DepositStatus
    childId?: StringFilter<"Deposit"> | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    closedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    child?: ChildOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    amount?: DecimalFilter<"Deposit"> | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFilter<"Deposit"> | number
    startsAt?: DateTimeFilter<"Deposit"> | Date | string
    endsAt?: DateTimeFilter<"Deposit"> | Date | string
    status?: EnumDepositStatusFilter<"Deposit"> | $Enums.DepositStatus
    childId?: StringFilter<"Deposit"> | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    closedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deposit"> | string
    amount?: DecimalWithAggregatesFilter<"Deposit"> | Decimal | DecimalJsLike | number | string
    interestRate?: FloatWithAggregatesFilter<"Deposit"> | number
    startsAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    status?: EnumDepositStatusWithAggregatesFilter<"Deposit"> | $Enums.DepositStatus
    childId?: StringWithAggregatesFilter<"Deposit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"Deposit"> | Date | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFilter<"Transaction"> | $Enums.TransactionSource
    comment?: StringNullableFilter<"Transaction"> | string | null
    spendingAccountId?: StringNullableFilter<"Transaction"> | string | null
    depositId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    spendingAccount?: XOR<SpendingAccountNullableScalarRelationFilter, SpendingAccountWhereInput> | null
    deposit?: XOR<DepositNullableScalarRelationFilter, DepositWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    source?: SortOrder
    comment?: SortOrderInput | SortOrder
    spendingAccountId?: SortOrderInput | SortOrder
    depositId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    spendingAccount?: SpendingAccountOrderByWithRelationInput
    deposit?: DepositOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFilter<"Transaction"> | $Enums.TransactionSource
    comment?: StringNullableFilter<"Transaction"> | string | null
    spendingAccountId?: StringNullableFilter<"Transaction"> | string | null
    depositId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    spendingAccount?: XOR<SpendingAccountNullableScalarRelationFilter, SpendingAccountWhereInput> | null
    deposit?: XOR<DepositNullableScalarRelationFilter, DepositWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    source?: SortOrder
    comment?: SortOrderInput | SortOrder
    spendingAccountId?: SortOrderInput | SortOrder
    depositId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceWithAggregatesFilter<"Transaction"> | $Enums.TransactionSource
    comment?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    spendingAccountId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    depositId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    reward?: DecimalFilter<"Task"> | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFilter<"Task"> | $Enums.TaskScheduleType
    intervalDays?: IntNullableFilter<"Task"> | number | null
    weekDays?: IntNullableListFilter<"Task">
    dayOfMonth?: IntNullableFilter<"Task"> | number | null
    startsAt?: DateTimeFilter<"Task"> | Date | string
    endsAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    childId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
    instances?: TaskInstanceListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    reward?: SortOrder
    scheduleType?: SortOrder
    intervalDays?: SortOrderInput | SortOrder
    weekDays?: SortOrder
    dayOfMonth?: SortOrderInput | SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrderInput | SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    child?: ChildOrderByWithRelationInput
    instances?: TaskInstanceOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    reward?: DecimalFilter<"Task"> | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFilter<"Task"> | $Enums.TaskScheduleType
    intervalDays?: IntNullableFilter<"Task"> | number | null
    weekDays?: IntNullableListFilter<"Task">
    dayOfMonth?: IntNullableFilter<"Task"> | number | null
    startsAt?: DateTimeFilter<"Task"> | Date | string
    endsAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    childId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
    instances?: TaskInstanceListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    reward?: SortOrder
    scheduleType?: SortOrder
    intervalDays?: SortOrderInput | SortOrder
    weekDays?: SortOrder
    dayOfMonth?: SortOrderInput | SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrderInput | SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    reward?: DecimalWithAggregatesFilter<"Task"> | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeWithAggregatesFilter<"Task"> | $Enums.TaskScheduleType
    intervalDays?: IntNullableWithAggregatesFilter<"Task"> | number | null
    weekDays?: IntNullableListFilter<"Task">
    dayOfMonth?: IntNullableWithAggregatesFilter<"Task"> | number | null
    startsAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    endsAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    childId?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskInstanceWhereInput = {
    AND?: TaskInstanceWhereInput | TaskInstanceWhereInput[]
    OR?: TaskInstanceWhereInput[]
    NOT?: TaskInstanceWhereInput | TaskInstanceWhereInput[]
    id?: StringFilter<"TaskInstance"> | string
    date?: DateTimeFilter<"TaskInstance"> | Date | string
    status?: EnumTaskCompletionStatusFilter<"TaskInstance"> | $Enums.TaskCompletionStatus
    taskId?: StringFilter<"TaskInstance"> | string
    childId?: StringFilter<"TaskInstance"> | string
    createdAt?: DateTimeFilter<"TaskInstance"> | Date | string
    approvedAt?: DateTimeNullableFilter<"TaskInstance"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"TaskInstance"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
  }

  export type TaskInstanceOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    task?: TaskOrderByWithRelationInput
    child?: ChildOrderByWithRelationInput
  }

  export type TaskInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskInstanceWhereInput | TaskInstanceWhereInput[]
    OR?: TaskInstanceWhereInput[]
    NOT?: TaskInstanceWhereInput | TaskInstanceWhereInput[]
    date?: DateTimeFilter<"TaskInstance"> | Date | string
    status?: EnumTaskCompletionStatusFilter<"TaskInstance"> | $Enums.TaskCompletionStatus
    taskId?: StringFilter<"TaskInstance"> | string
    childId?: StringFilter<"TaskInstance"> | string
    createdAt?: DateTimeFilter<"TaskInstance"> | Date | string
    approvedAt?: DateTimeNullableFilter<"TaskInstance"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"TaskInstance"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
  }, "id">

  export type TaskInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    _count?: TaskInstanceCountOrderByAggregateInput
    _max?: TaskInstanceMaxOrderByAggregateInput
    _min?: TaskInstanceMinOrderByAggregateInput
  }

  export type TaskInstanceScalarWhereWithAggregatesInput = {
    AND?: TaskInstanceScalarWhereWithAggregatesInput | TaskInstanceScalarWhereWithAggregatesInput[]
    OR?: TaskInstanceScalarWhereWithAggregatesInput[]
    NOT?: TaskInstanceScalarWhereWithAggregatesInput | TaskInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskInstance"> | string
    date?: DateTimeWithAggregatesFilter<"TaskInstance"> | Date | string
    status?: EnumTaskCompletionStatusWithAggregatesFilter<"TaskInstance"> | $Enums.TaskCompletionStatus
    taskId?: StringWithAggregatesFilter<"TaskInstance"> | string
    childId?: StringWithAggregatesFilter<"TaskInstance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskInstance"> | Date | string
    approvedAt?: DateTimeNullableWithAggregatesFilter<"TaskInstance"> | Date | string | null
    expiredAt?: DateTimeNullableWithAggregatesFilter<"TaskInstance"> | Date | string | null
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    childId?: StringFilter<"Request"> | string
    payload?: JsonFilter<"Request">
    createdAt?: DateTimeFilter<"Request"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    child?: ChildOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    childId?: StringFilter<"Request"> | string
    payload?: JsonFilter<"Request">
    createdAt?: DateTimeFilter<"Request"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    type?: EnumRequestTypeWithAggregatesFilter<"Request"> | $Enums.RequestType
    status?: EnumRequestStatusWithAggregatesFilter<"Request"> | $Enums.RequestStatus
    childId?: StringWithAggregatesFilter<"Request"> | string
    payload?: JsonWithAggregatesFilter<"Request">
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userRole?: EnumUserRoleFilter<"Notification"> | $Enums.UserRole
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userRole?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userRole?: EnumUserRoleFilter<"Notification"> | $Enums.UserRole
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userRole?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userRole?: EnumUserRoleWithAggregatesFilter<"Notification"> | $Enums.UserRole
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type WishlistItemWhereInput = {
    AND?: WishlistItemWhereInput | WishlistItemWhereInput[]
    OR?: WishlistItemWhereInput[]
    NOT?: WishlistItemWhereInput | WishlistItemWhereInput[]
    id?: StringFilter<"WishlistItem"> | string
    title?: StringFilter<"WishlistItem"> | string
    price?: DecimalFilter<"WishlistItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"WishlistItem"> | string | null
    childId?: StringFilter<"WishlistItem"> | string
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
  }

  export type WishlistItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    child?: ChildOrderByWithRelationInput
  }

  export type WishlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WishlistItemWhereInput | WishlistItemWhereInput[]
    OR?: WishlistItemWhereInput[]
    NOT?: WishlistItemWhereInput | WishlistItemWhereInput[]
    title?: StringFilter<"WishlistItem"> | string
    price?: DecimalFilter<"WishlistItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"WishlistItem"> | string | null
    childId?: StringFilter<"WishlistItem"> | string
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
    child?: XOR<ChildScalarRelationFilter, ChildWhereInput>
  }, "id">

  export type WishlistItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    _count?: WishlistItemCountOrderByAggregateInput
    _avg?: WishlistItemAvgOrderByAggregateInput
    _max?: WishlistItemMaxOrderByAggregateInput
    _min?: WishlistItemMinOrderByAggregateInput
    _sum?: WishlistItemSumOrderByAggregateInput
  }

  export type WishlistItemScalarWhereWithAggregatesInput = {
    AND?: WishlistItemScalarWhereWithAggregatesInput | WishlistItemScalarWhereWithAggregatesInput[]
    OR?: WishlistItemScalarWhereWithAggregatesInput[]
    NOT?: WishlistItemScalarWhereWithAggregatesInput | WishlistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WishlistItem"> | string
    title?: StringWithAggregatesFilter<"WishlistItem"> | string
    price?: DecimalWithAggregatesFilter<"WishlistItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableWithAggregatesFilter<"WishlistItem"> | string | null
    childId?: StringWithAggregatesFilter<"WishlistItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WishlistItem"> | Date | string
  }

  export type InvitationCodeWhereInput = {
    AND?: InvitationCodeWhereInput | InvitationCodeWhereInput[]
    OR?: InvitationCodeWhereInput[]
    NOT?: InvitationCodeWhereInput | InvitationCodeWhereInput[]
    id?: StringFilter<"InvitationCode"> | string
    code?: StringFilter<"InvitationCode"> | string
    usedAt?: DateTimeNullableFilter<"InvitationCode"> | Date | string | null
    parentId?: StringFilter<"InvitationCode"> | string
    createdAt?: DateTimeFilter<"InvitationCode"> | Date | string
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
  }

  export type InvitationCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    parent?: ParentOrderByWithRelationInput
  }

  export type InvitationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: InvitationCodeWhereInput | InvitationCodeWhereInput[]
    OR?: InvitationCodeWhereInput[]
    NOT?: InvitationCodeWhereInput | InvitationCodeWhereInput[]
    usedAt?: DateTimeNullableFilter<"InvitationCode"> | Date | string | null
    parentId?: StringFilter<"InvitationCode"> | string
    createdAt?: DateTimeFilter<"InvitationCode"> | Date | string
    parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
  }, "id" | "code">

  export type InvitationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    _count?: InvitationCodeCountOrderByAggregateInput
    _max?: InvitationCodeMaxOrderByAggregateInput
    _min?: InvitationCodeMinOrderByAggregateInput
  }

  export type InvitationCodeScalarWhereWithAggregatesInput = {
    AND?: InvitationCodeScalarWhereWithAggregatesInput | InvitationCodeScalarWhereWithAggregatesInput[]
    OR?: InvitationCodeScalarWhereWithAggregatesInput[]
    NOT?: InvitationCodeScalarWhereWithAggregatesInput | InvitationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvitationCode"> | string
    code?: StringWithAggregatesFilter<"InvitationCode"> | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"InvitationCode"> | Date | string | null
    parentId?: StringWithAggregatesFilter<"InvitationCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InvitationCode"> | Date | string
  }

  export type ParentCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ParentChildCreateNestedManyWithoutParentInput
    invitations?: InvitationCodeCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ParentChildUncheckedCreateNestedManyWithoutParentInput
    invitations?: InvitationCodeUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ParentChildUpdateManyWithoutParentNestedInput
    invitations?: InvitationCodeUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
    invitations?: InvitationCodeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildCreateInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    spending?: SpendingAccountCreateNestedOneWithoutChildInput
    deposits?: DepositCreateNestedManyWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceCreateNestedManyWithoutChildInput
    requests?: RequestCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemCreateNestedManyWithoutChildInput
  }

  export type ChildUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    spending?: SpendingAccountUncheckedCreateNestedOneWithoutChildInput
    deposits?: DepositUncheckedCreateNestedManyWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceUncheckedCreateNestedManyWithoutChildInput
    requests?: RequestUncheckedCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutChildInput
  }

  export type ChildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUpdateOneWithoutChildNestedInput
    deposits?: DepositUpdateManyWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUpdateManyWithoutChildNestedInput
    requests?: RequestUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUpdateManyWithoutChildNestedInput
  }

  export type ChildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUncheckedUpdateOneWithoutChildNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUncheckedUpdateManyWithoutChildNestedInput
    requests?: RequestUncheckedUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutChildNestedInput
  }

  export type ChildCreateManyInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentChildCreateInput = {
    createdAt?: Date | string
    parent: ParentCreateNestedOneWithoutChildrenInput
    child: ChildCreateNestedOneWithoutParentsInput
  }

  export type ParentChildUncheckedCreateInput = {
    parentId: string
    childId: string
    createdAt?: Date | string
  }

  export type ParentChildUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUpdateOneRequiredWithoutChildrenNestedInput
    child?: ChildUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ParentChildUncheckedUpdateInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentChildCreateManyInput = {
    parentId: string
    childId: string
    createdAt?: Date | string
  }

  export type ParentChildUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentChildUncheckedUpdateManyInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendingAccountCreateInput = {
    id?: string
    createdAt?: Date | string
    child: ChildCreateNestedOneWithoutSpendingInput
    transactions?: TransactionCreateNestedManyWithoutSpendingAccountInput
  }

  export type SpendingAccountUncheckedCreateInput = {
    id?: string
    childId: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutSpendingAccountInput
  }

  export type SpendingAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: ChildUpdateOneRequiredWithoutSpendingNestedInput
    transactions?: TransactionUpdateManyWithoutSpendingAccountNestedInput
  }

  export type SpendingAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutSpendingAccountNestedInput
  }

  export type SpendingAccountCreateManyInput = {
    id?: string
    childId: string
    createdAt?: Date | string
  }

  export type SpendingAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendingAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate: number
    startsAt: Date | string
    endsAt: Date | string
    status?: $Enums.DepositStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
    child: ChildCreateNestedOneWithoutDepositsInput
    transactions?: TransactionCreateNestedManyWithoutDepositInput
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate: number
    startsAt: Date | string
    endsAt: Date | string
    status?: $Enums.DepositStatus
    childId: string
    createdAt?: Date | string
    closedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutDepositInput
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    child?: ChildUpdateOneRequiredWithoutDepositsNestedInput
    transactions?: TransactionUpdateManyWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutDepositNestedInput
  }

  export type DepositCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate: number
    startsAt: Date | string
    endsAt: Date | string
    status?: $Enums.DepositStatus
    childId: string
    createdAt?: Date | string
    closedAt?: Date | string | null
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    createdAt?: Date | string
    spendingAccount?: SpendingAccountCreateNestedOneWithoutTransactionsInput
    deposit?: DepositCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    spendingAccountId?: string | null
    depositId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spendingAccount?: SpendingAccountUpdateOneWithoutTransactionsNestedInput
    deposit?: DepositUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    spendingAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    depositId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    spendingAccountId?: string | null
    depositId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    spendingAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    depositId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    reward: Decimal | DecimalJsLike | number | string
    scheduleType: $Enums.TaskScheduleType
    intervalDays?: number | null
    weekDays?: TaskCreateweekDaysInput | number[]
    dayOfMonth?: number | null
    startsAt: Date | string
    endsAt?: Date | string | null
    createdAt?: Date | string
    child: ChildCreateNestedOneWithoutTasksInput
    instances?: TaskInstanceCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    reward: Decimal | DecimalJsLike | number | string
    scheduleType: $Enums.TaskScheduleType
    intervalDays?: number | null
    weekDays?: TaskCreateweekDaysInput | number[]
    dayOfMonth?: number | null
    startsAt: Date | string
    endsAt?: Date | string | null
    childId: string
    createdAt?: Date | string
    instances?: TaskInstanceUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: ChildUpdateOneRequiredWithoutTasksNestedInput
    instances?: TaskInstanceUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: TaskInstanceUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    reward: Decimal | DecimalJsLike | number | string
    scheduleType: $Enums.TaskScheduleType
    intervalDays?: number | null
    weekDays?: TaskCreateweekDaysInput | number[]
    dayOfMonth?: number | null
    startsAt: Date | string
    endsAt?: Date | string | null
    childId: string
    createdAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskInstanceCreateInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
    task: TaskCreateNestedOneWithoutInstancesInput
    child: ChildCreateNestedOneWithoutTaskInstancesInput
  }

  export type TaskInstanceUncheckedCreateInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    taskId: string
    childId: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type TaskInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutInstancesNestedInput
    child?: ChildUpdateOneRequiredWithoutTaskInstancesNestedInput
  }

  export type TaskInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    taskId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskInstanceCreateManyInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    taskId: string
    childId: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type TaskInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    taskId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestCreateInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    child: ChildCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    childId: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    child?: ChildUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    childId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestCreateManyInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    childId: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    childId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    userRole: $Enums.UserRole
    userId: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userRole: $Enums.UserRole
    userId: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userRole: $Enums.UserRole
    userId: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemCreateInput = {
    id?: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
    child: ChildCreateNestedOneWithoutWishlistInput
  }

  export type WishlistItemUncheckedCreateInput = {
    id?: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    childId: string
    createdAt?: Date | string
  }

  export type WishlistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: ChildUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemCreateManyInput = {
    id?: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    childId: string
    createdAt?: Date | string
  }

  export type WishlistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCodeCreateInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    createdAt?: Date | string
    parent: ParentCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationCodeUncheckedCreateInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    parentId: string
    createdAt?: Date | string
  }

  export type InvitationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCodeCreateManyInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    parentId: string
    createdAt?: Date | string
  }

  export type InvitationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ParentChildListRelationFilter = {
    every?: ParentChildWhereInput
    some?: ParentChildWhereInput
    none?: ParentChildWhereInput
  }

  export type InvitationCodeListRelationFilter = {
    every?: InvitationCodeWhereInput
    some?: InvitationCodeWhereInput
    none?: InvitationCodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParentChildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SpendingAccountNullableScalarRelationFilter = {
    is?: SpendingAccountWhereInput | null
    isNot?: SpendingAccountWhereInput | null
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskInstanceListRelationFilter = {
    every?: TaskInstanceWhereInput
    some?: TaskInstanceWhereInput
    none?: TaskInstanceWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type WishlistItemListRelationFilter = {
    every?: WishlistItemWhereInput
    some?: WishlistItemWhereInput
    none?: WishlistItemWhereInput
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishlistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChildCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    locale?: SortOrder
    newsPrompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChildMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    locale?: SortOrder
    newsPrompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChildMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    locale?: SortOrder
    newsPrompt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ParentScalarRelationFilter = {
    is?: ParentWhereInput
    isNot?: ParentWhereInput
  }

  export type ChildScalarRelationFilter = {
    is?: ChildWhereInput
    isNot?: ChildWhereInput
  }

  export type ParentChildParentIdChildIdCompoundUniqueInput = {
    parentId: string
    childId: string
  }

  export type ParentChildCountOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentChildMaxOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentChildMinOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpendingAccountCountOrderByAggregateInput = {
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpendingAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpendingAccountMinOrderByAggregateInput = {
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDepositStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusFilter<$PrismaModel> | $Enums.DepositStatus
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumDepositStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepositStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositStatusFilter<$PrismaModel>
    _max?: NestedEnumDepositStatusFilter<$PrismaModel>
  }

  export type EnumTransactionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceFilter<$PrismaModel> | $Enums.TransactionSource
  }

  export type DepositNullableScalarRelationFilter = {
    is?: DepositWhereInput | null
    isNot?: DepositWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    spendingAccountId?: SortOrder
    depositId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    spendingAccountId?: SortOrder
    depositId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    spendingAccountId?: SortOrder
    depositId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel> | $Enums.TransactionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionSourceFilter<$PrismaModel>
    _max?: NestedEnumTransactionSourceFilter<$PrismaModel>
  }

  export type EnumTaskScheduleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskScheduleType | EnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskScheduleType[] | ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskScheduleType[] | ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskScheduleTypeFilter<$PrismaModel> | $Enums.TaskScheduleType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reward?: SortOrder
    scheduleType?: SortOrder
    intervalDays?: SortOrder
    weekDays?: SortOrder
    dayOfMonth?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    reward?: SortOrder
    intervalDays?: SortOrder
    weekDays?: SortOrder
    dayOfMonth?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reward?: SortOrder
    scheduleType?: SortOrder
    intervalDays?: SortOrder
    dayOfMonth?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reward?: SortOrder
    scheduleType?: SortOrder
    intervalDays?: SortOrder
    dayOfMonth?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    reward?: SortOrder
    intervalDays?: SortOrder
    weekDays?: SortOrder
    dayOfMonth?: SortOrder
  }

  export type EnumTaskScheduleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskScheduleType | EnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskScheduleType[] | ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskScheduleType[] | ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskScheduleTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskScheduleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskScheduleTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskScheduleTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumTaskCompletionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskCompletionStatus | EnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskCompletionStatus[] | ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskCompletionStatus[] | ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskCompletionStatusFilter<$PrismaModel> | $Enums.TaskCompletionStatus
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type TaskInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type TaskInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    taskId?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type EnumTaskCompletionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskCompletionStatus | EnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskCompletionStatus[] | ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskCompletionStatus[] | ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskCompletionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskCompletionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskCompletionStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskCompletionStatusFilter<$PrismaModel>
  }

  export type EnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userRole?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userRole?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userRole?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WishlistItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type WishlistItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type WishlistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type WishlistItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type WishlistItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type InvitationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type InvitationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type InvitationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentChildCreateNestedManyWithoutParentInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type InvitationCodeCreateNestedManyWithoutParentInput = {
    create?: XOR<InvitationCodeCreateWithoutParentInput, InvitationCodeUncheckedCreateWithoutParentInput> | InvitationCodeCreateWithoutParentInput[] | InvitationCodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: InvitationCodeCreateOrConnectWithoutParentInput | InvitationCodeCreateOrConnectWithoutParentInput[]
    createMany?: InvitationCodeCreateManyParentInputEnvelope
    connect?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
  }

  export type ParentChildUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type InvitationCodeUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<InvitationCodeCreateWithoutParentInput, InvitationCodeUncheckedCreateWithoutParentInput> | InvitationCodeCreateWithoutParentInput[] | InvitationCodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: InvitationCodeCreateOrConnectWithoutParentInput | InvitationCodeCreateOrConnectWithoutParentInput[]
    createMany?: InvitationCodeCreateManyParentInputEnvelope
    connect?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParentChildUpdateManyWithoutParentNestedInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutParentInput | ParentChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutParentInput | ParentChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutParentInput | ParentChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type InvitationCodeUpdateManyWithoutParentNestedInput = {
    create?: XOR<InvitationCodeCreateWithoutParentInput, InvitationCodeUncheckedCreateWithoutParentInput> | InvitationCodeCreateWithoutParentInput[] | InvitationCodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: InvitationCodeCreateOrConnectWithoutParentInput | InvitationCodeCreateOrConnectWithoutParentInput[]
    upsert?: InvitationCodeUpsertWithWhereUniqueWithoutParentInput | InvitationCodeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: InvitationCodeCreateManyParentInputEnvelope
    set?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
    disconnect?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
    delete?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
    connect?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
    update?: InvitationCodeUpdateWithWhereUniqueWithoutParentInput | InvitationCodeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: InvitationCodeUpdateManyWithWhereWithoutParentInput | InvitationCodeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: InvitationCodeScalarWhereInput | InvitationCodeScalarWhereInput[]
  }

  export type ParentChildUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutParentInput | ParentChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutParentInput | ParentChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutParentInput | ParentChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type InvitationCodeUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<InvitationCodeCreateWithoutParentInput, InvitationCodeUncheckedCreateWithoutParentInput> | InvitationCodeCreateWithoutParentInput[] | InvitationCodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: InvitationCodeCreateOrConnectWithoutParentInput | InvitationCodeCreateOrConnectWithoutParentInput[]
    upsert?: InvitationCodeUpsertWithWhereUniqueWithoutParentInput | InvitationCodeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: InvitationCodeCreateManyParentInputEnvelope
    set?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
    disconnect?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
    delete?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
    connect?: InvitationCodeWhereUniqueInput | InvitationCodeWhereUniqueInput[]
    update?: InvitationCodeUpdateWithWhereUniqueWithoutParentInput | InvitationCodeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: InvitationCodeUpdateManyWithWhereWithoutParentInput | InvitationCodeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: InvitationCodeScalarWhereInput | InvitationCodeScalarWhereInput[]
  }

  export type ParentChildCreateNestedManyWithoutChildInput = {
    create?: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput> | ParentChildCreateWithoutChildInput[] | ParentChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutChildInput | ParentChildCreateOrConnectWithoutChildInput[]
    createMany?: ParentChildCreateManyChildInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type SpendingAccountCreateNestedOneWithoutChildInput = {
    create?: XOR<SpendingAccountCreateWithoutChildInput, SpendingAccountUncheckedCreateWithoutChildInput>
    connectOrCreate?: SpendingAccountCreateOrConnectWithoutChildInput
    connect?: SpendingAccountWhereUniqueInput
  }

  export type DepositCreateNestedManyWithoutChildInput = {
    create?: XOR<DepositCreateWithoutChildInput, DepositUncheckedCreateWithoutChildInput> | DepositCreateWithoutChildInput[] | DepositUncheckedCreateWithoutChildInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutChildInput | DepositCreateOrConnectWithoutChildInput[]
    createMany?: DepositCreateManyChildInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutChildInput = {
    create?: XOR<TaskCreateWithoutChildInput, TaskUncheckedCreateWithoutChildInput> | TaskCreateWithoutChildInput[] | TaskUncheckedCreateWithoutChildInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutChildInput | TaskCreateOrConnectWithoutChildInput[]
    createMany?: TaskCreateManyChildInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskInstanceCreateNestedManyWithoutChildInput = {
    create?: XOR<TaskInstanceCreateWithoutChildInput, TaskInstanceUncheckedCreateWithoutChildInput> | TaskInstanceCreateWithoutChildInput[] | TaskInstanceUncheckedCreateWithoutChildInput[]
    connectOrCreate?: TaskInstanceCreateOrConnectWithoutChildInput | TaskInstanceCreateOrConnectWithoutChildInput[]
    createMany?: TaskInstanceCreateManyChildInputEnvelope
    connect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutChildInput = {
    create?: XOR<RequestCreateWithoutChildInput, RequestUncheckedCreateWithoutChildInput> | RequestCreateWithoutChildInput[] | RequestUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutChildInput | RequestCreateOrConnectWithoutChildInput[]
    createMany?: RequestCreateManyChildInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type WishlistItemCreateNestedManyWithoutChildInput = {
    create?: XOR<WishlistItemCreateWithoutChildInput, WishlistItemUncheckedCreateWithoutChildInput> | WishlistItemCreateWithoutChildInput[] | WishlistItemUncheckedCreateWithoutChildInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutChildInput | WishlistItemCreateOrConnectWithoutChildInput[]
    createMany?: WishlistItemCreateManyChildInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type ParentChildUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput> | ParentChildCreateWithoutChildInput[] | ParentChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutChildInput | ParentChildCreateOrConnectWithoutChildInput[]
    createMany?: ParentChildCreateManyChildInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type SpendingAccountUncheckedCreateNestedOneWithoutChildInput = {
    create?: XOR<SpendingAccountCreateWithoutChildInput, SpendingAccountUncheckedCreateWithoutChildInput>
    connectOrCreate?: SpendingAccountCreateOrConnectWithoutChildInput
    connect?: SpendingAccountWhereUniqueInput
  }

  export type DepositUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<DepositCreateWithoutChildInput, DepositUncheckedCreateWithoutChildInput> | DepositCreateWithoutChildInput[] | DepositUncheckedCreateWithoutChildInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutChildInput | DepositCreateOrConnectWithoutChildInput[]
    createMany?: DepositCreateManyChildInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<TaskCreateWithoutChildInput, TaskUncheckedCreateWithoutChildInput> | TaskCreateWithoutChildInput[] | TaskUncheckedCreateWithoutChildInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutChildInput | TaskCreateOrConnectWithoutChildInput[]
    createMany?: TaskCreateManyChildInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskInstanceUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<TaskInstanceCreateWithoutChildInput, TaskInstanceUncheckedCreateWithoutChildInput> | TaskInstanceCreateWithoutChildInput[] | TaskInstanceUncheckedCreateWithoutChildInput[]
    connectOrCreate?: TaskInstanceCreateOrConnectWithoutChildInput | TaskInstanceCreateOrConnectWithoutChildInput[]
    createMany?: TaskInstanceCreateManyChildInputEnvelope
    connect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<RequestCreateWithoutChildInput, RequestUncheckedCreateWithoutChildInput> | RequestCreateWithoutChildInput[] | RequestUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutChildInput | RequestCreateOrConnectWithoutChildInput[]
    createMany?: RequestCreateManyChildInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type WishlistItemUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<WishlistItemCreateWithoutChildInput, WishlistItemUncheckedCreateWithoutChildInput> | WishlistItemCreateWithoutChildInput[] | WishlistItemUncheckedCreateWithoutChildInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutChildInput | WishlistItemCreateOrConnectWithoutChildInput[]
    createMany?: WishlistItemCreateManyChildInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ParentChildUpdateManyWithoutChildNestedInput = {
    create?: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput> | ParentChildCreateWithoutChildInput[] | ParentChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutChildInput | ParentChildCreateOrConnectWithoutChildInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutChildInput | ParentChildUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: ParentChildCreateManyChildInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutChildInput | ParentChildUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutChildInput | ParentChildUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type SpendingAccountUpdateOneWithoutChildNestedInput = {
    create?: XOR<SpendingAccountCreateWithoutChildInput, SpendingAccountUncheckedCreateWithoutChildInput>
    connectOrCreate?: SpendingAccountCreateOrConnectWithoutChildInput
    upsert?: SpendingAccountUpsertWithoutChildInput
    disconnect?: SpendingAccountWhereInput | boolean
    delete?: SpendingAccountWhereInput | boolean
    connect?: SpendingAccountWhereUniqueInput
    update?: XOR<XOR<SpendingAccountUpdateToOneWithWhereWithoutChildInput, SpendingAccountUpdateWithoutChildInput>, SpendingAccountUncheckedUpdateWithoutChildInput>
  }

  export type DepositUpdateManyWithoutChildNestedInput = {
    create?: XOR<DepositCreateWithoutChildInput, DepositUncheckedCreateWithoutChildInput> | DepositCreateWithoutChildInput[] | DepositUncheckedCreateWithoutChildInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutChildInput | DepositCreateOrConnectWithoutChildInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutChildInput | DepositUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: DepositCreateManyChildInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutChildInput | DepositUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutChildInput | DepositUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutChildNestedInput = {
    create?: XOR<TaskCreateWithoutChildInput, TaskUncheckedCreateWithoutChildInput> | TaskCreateWithoutChildInput[] | TaskUncheckedCreateWithoutChildInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutChildInput | TaskCreateOrConnectWithoutChildInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutChildInput | TaskUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: TaskCreateManyChildInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutChildInput | TaskUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutChildInput | TaskUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskInstanceUpdateManyWithoutChildNestedInput = {
    create?: XOR<TaskInstanceCreateWithoutChildInput, TaskInstanceUncheckedCreateWithoutChildInput> | TaskInstanceCreateWithoutChildInput[] | TaskInstanceUncheckedCreateWithoutChildInput[]
    connectOrCreate?: TaskInstanceCreateOrConnectWithoutChildInput | TaskInstanceCreateOrConnectWithoutChildInput[]
    upsert?: TaskInstanceUpsertWithWhereUniqueWithoutChildInput | TaskInstanceUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: TaskInstanceCreateManyChildInputEnvelope
    set?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    disconnect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    delete?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    connect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    update?: TaskInstanceUpdateWithWhereUniqueWithoutChildInput | TaskInstanceUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: TaskInstanceUpdateManyWithWhereWithoutChildInput | TaskInstanceUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: TaskInstanceScalarWhereInput | TaskInstanceScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutChildNestedInput = {
    create?: XOR<RequestCreateWithoutChildInput, RequestUncheckedCreateWithoutChildInput> | RequestCreateWithoutChildInput[] | RequestUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutChildInput | RequestCreateOrConnectWithoutChildInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutChildInput | RequestUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RequestCreateManyChildInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutChildInput | RequestUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutChildInput | RequestUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type WishlistItemUpdateManyWithoutChildNestedInput = {
    create?: XOR<WishlistItemCreateWithoutChildInput, WishlistItemUncheckedCreateWithoutChildInput> | WishlistItemCreateWithoutChildInput[] | WishlistItemUncheckedCreateWithoutChildInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutChildInput | WishlistItemCreateOrConnectWithoutChildInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutChildInput | WishlistItemUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: WishlistItemCreateManyChildInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutChildInput | WishlistItemUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutChildInput | WishlistItemUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type ParentChildUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput> | ParentChildCreateWithoutChildInput[] | ParentChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutChildInput | ParentChildCreateOrConnectWithoutChildInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutChildInput | ParentChildUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: ParentChildCreateManyChildInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutChildInput | ParentChildUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutChildInput | ParentChildUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type SpendingAccountUncheckedUpdateOneWithoutChildNestedInput = {
    create?: XOR<SpendingAccountCreateWithoutChildInput, SpendingAccountUncheckedCreateWithoutChildInput>
    connectOrCreate?: SpendingAccountCreateOrConnectWithoutChildInput
    upsert?: SpendingAccountUpsertWithoutChildInput
    disconnect?: SpendingAccountWhereInput | boolean
    delete?: SpendingAccountWhereInput | boolean
    connect?: SpendingAccountWhereUniqueInput
    update?: XOR<XOR<SpendingAccountUpdateToOneWithWhereWithoutChildInput, SpendingAccountUpdateWithoutChildInput>, SpendingAccountUncheckedUpdateWithoutChildInput>
  }

  export type DepositUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<DepositCreateWithoutChildInput, DepositUncheckedCreateWithoutChildInput> | DepositCreateWithoutChildInput[] | DepositUncheckedCreateWithoutChildInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutChildInput | DepositCreateOrConnectWithoutChildInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutChildInput | DepositUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: DepositCreateManyChildInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutChildInput | DepositUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutChildInput | DepositUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<TaskCreateWithoutChildInput, TaskUncheckedCreateWithoutChildInput> | TaskCreateWithoutChildInput[] | TaskUncheckedCreateWithoutChildInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutChildInput | TaskCreateOrConnectWithoutChildInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutChildInput | TaskUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: TaskCreateManyChildInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutChildInput | TaskUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutChildInput | TaskUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskInstanceUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<TaskInstanceCreateWithoutChildInput, TaskInstanceUncheckedCreateWithoutChildInput> | TaskInstanceCreateWithoutChildInput[] | TaskInstanceUncheckedCreateWithoutChildInput[]
    connectOrCreate?: TaskInstanceCreateOrConnectWithoutChildInput | TaskInstanceCreateOrConnectWithoutChildInput[]
    upsert?: TaskInstanceUpsertWithWhereUniqueWithoutChildInput | TaskInstanceUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: TaskInstanceCreateManyChildInputEnvelope
    set?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    disconnect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    delete?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    connect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    update?: TaskInstanceUpdateWithWhereUniqueWithoutChildInput | TaskInstanceUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: TaskInstanceUpdateManyWithWhereWithoutChildInput | TaskInstanceUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: TaskInstanceScalarWhereInput | TaskInstanceScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<RequestCreateWithoutChildInput, RequestUncheckedCreateWithoutChildInput> | RequestCreateWithoutChildInput[] | RequestUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutChildInput | RequestCreateOrConnectWithoutChildInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutChildInput | RequestUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RequestCreateManyChildInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutChildInput | RequestUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutChildInput | RequestUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type WishlistItemUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<WishlistItemCreateWithoutChildInput, WishlistItemUncheckedCreateWithoutChildInput> | WishlistItemCreateWithoutChildInput[] | WishlistItemUncheckedCreateWithoutChildInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutChildInput | WishlistItemCreateOrConnectWithoutChildInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutChildInput | WishlistItemUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: WishlistItemCreateManyChildInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutChildInput | WishlistItemUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutChildInput | WishlistItemUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type ParentCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ParentCreateWithoutChildrenInput, ParentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChildrenInput
    connect?: ParentWhereUniqueInput
  }

  export type ChildCreateNestedOneWithoutParentsInput = {
    create?: XOR<ChildCreateWithoutParentsInput, ChildUncheckedCreateWithoutParentsInput>
    connectOrCreate?: ChildCreateOrConnectWithoutParentsInput
    connect?: ChildWhereUniqueInput
  }

  export type ParentUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<ParentCreateWithoutChildrenInput, ParentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChildrenInput
    upsert?: ParentUpsertWithoutChildrenInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutChildrenInput, ParentUpdateWithoutChildrenInput>, ParentUncheckedUpdateWithoutChildrenInput>
  }

  export type ChildUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<ChildCreateWithoutParentsInput, ChildUncheckedCreateWithoutParentsInput>
    connectOrCreate?: ChildCreateOrConnectWithoutParentsInput
    upsert?: ChildUpsertWithoutParentsInput
    connect?: ChildWhereUniqueInput
    update?: XOR<XOR<ChildUpdateToOneWithWhereWithoutParentsInput, ChildUpdateWithoutParentsInput>, ChildUncheckedUpdateWithoutParentsInput>
  }

  export type ChildCreateNestedOneWithoutSpendingInput = {
    create?: XOR<ChildCreateWithoutSpendingInput, ChildUncheckedCreateWithoutSpendingInput>
    connectOrCreate?: ChildCreateOrConnectWithoutSpendingInput
    connect?: ChildWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutSpendingAccountInput = {
    create?: XOR<TransactionCreateWithoutSpendingAccountInput, TransactionUncheckedCreateWithoutSpendingAccountInput> | TransactionCreateWithoutSpendingAccountInput[] | TransactionUncheckedCreateWithoutSpendingAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSpendingAccountInput | TransactionCreateOrConnectWithoutSpendingAccountInput[]
    createMany?: TransactionCreateManySpendingAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSpendingAccountInput = {
    create?: XOR<TransactionCreateWithoutSpendingAccountInput, TransactionUncheckedCreateWithoutSpendingAccountInput> | TransactionCreateWithoutSpendingAccountInput[] | TransactionUncheckedCreateWithoutSpendingAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSpendingAccountInput | TransactionCreateOrConnectWithoutSpendingAccountInput[]
    createMany?: TransactionCreateManySpendingAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ChildUpdateOneRequiredWithoutSpendingNestedInput = {
    create?: XOR<ChildCreateWithoutSpendingInput, ChildUncheckedCreateWithoutSpendingInput>
    connectOrCreate?: ChildCreateOrConnectWithoutSpendingInput
    upsert?: ChildUpsertWithoutSpendingInput
    connect?: ChildWhereUniqueInput
    update?: XOR<XOR<ChildUpdateToOneWithWhereWithoutSpendingInput, ChildUpdateWithoutSpendingInput>, ChildUncheckedUpdateWithoutSpendingInput>
  }

  export type TransactionUpdateManyWithoutSpendingAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutSpendingAccountInput, TransactionUncheckedCreateWithoutSpendingAccountInput> | TransactionCreateWithoutSpendingAccountInput[] | TransactionUncheckedCreateWithoutSpendingAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSpendingAccountInput | TransactionCreateOrConnectWithoutSpendingAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSpendingAccountInput | TransactionUpsertWithWhereUniqueWithoutSpendingAccountInput[]
    createMany?: TransactionCreateManySpendingAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSpendingAccountInput | TransactionUpdateWithWhereUniqueWithoutSpendingAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSpendingAccountInput | TransactionUpdateManyWithWhereWithoutSpendingAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSpendingAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutSpendingAccountInput, TransactionUncheckedCreateWithoutSpendingAccountInput> | TransactionCreateWithoutSpendingAccountInput[] | TransactionUncheckedCreateWithoutSpendingAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSpendingAccountInput | TransactionCreateOrConnectWithoutSpendingAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSpendingAccountInput | TransactionUpsertWithWhereUniqueWithoutSpendingAccountInput[]
    createMany?: TransactionCreateManySpendingAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSpendingAccountInput | TransactionUpdateWithWhereUniqueWithoutSpendingAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSpendingAccountInput | TransactionUpdateManyWithWhereWithoutSpendingAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ChildCreateNestedOneWithoutDepositsInput = {
    create?: XOR<ChildCreateWithoutDepositsInput, ChildUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: ChildCreateOrConnectWithoutDepositsInput
    connect?: ChildWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutDepositInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput> | TransactionCreateWithoutDepositInput[] | TransactionUncheckedCreateWithoutDepositInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput | TransactionCreateOrConnectWithoutDepositInput[]
    createMany?: TransactionCreateManyDepositInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutDepositInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput> | TransactionCreateWithoutDepositInput[] | TransactionUncheckedCreateWithoutDepositInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput | TransactionCreateOrConnectWithoutDepositInput[]
    createMany?: TransactionCreateManyDepositInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDepositStatusFieldUpdateOperationsInput = {
    set?: $Enums.DepositStatus
  }

  export type ChildUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<ChildCreateWithoutDepositsInput, ChildUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: ChildCreateOrConnectWithoutDepositsInput
    upsert?: ChildUpsertWithoutDepositsInput
    connect?: ChildWhereUniqueInput
    update?: XOR<XOR<ChildUpdateToOneWithWhereWithoutDepositsInput, ChildUpdateWithoutDepositsInput>, ChildUncheckedUpdateWithoutDepositsInput>
  }

  export type TransactionUpdateManyWithoutDepositNestedInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput> | TransactionCreateWithoutDepositInput[] | TransactionUncheckedCreateWithoutDepositInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput | TransactionCreateOrConnectWithoutDepositInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDepositInput | TransactionUpsertWithWhereUniqueWithoutDepositInput[]
    createMany?: TransactionCreateManyDepositInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDepositInput | TransactionUpdateWithWhereUniqueWithoutDepositInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDepositInput | TransactionUpdateManyWithWhereWithoutDepositInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutDepositNestedInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput> | TransactionCreateWithoutDepositInput[] | TransactionUncheckedCreateWithoutDepositInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput | TransactionCreateOrConnectWithoutDepositInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDepositInput | TransactionUpsertWithWhereUniqueWithoutDepositInput[]
    createMany?: TransactionCreateManyDepositInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDepositInput | TransactionUpdateWithWhereUniqueWithoutDepositInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDepositInput | TransactionUpdateManyWithWhereWithoutDepositInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type SpendingAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<SpendingAccountCreateWithoutTransactionsInput, SpendingAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: SpendingAccountCreateOrConnectWithoutTransactionsInput
    connect?: SpendingAccountWhereUniqueInput
  }

  export type DepositCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<DepositCreateWithoutTransactionsInput, DepositUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DepositCreateOrConnectWithoutTransactionsInput
    connect?: DepositWhereUniqueInput
  }

  export type EnumTransactionSourceFieldUpdateOperationsInput = {
    set?: $Enums.TransactionSource
  }

  export type SpendingAccountUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<SpendingAccountCreateWithoutTransactionsInput, SpendingAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: SpendingAccountCreateOrConnectWithoutTransactionsInput
    upsert?: SpendingAccountUpsertWithoutTransactionsInput
    disconnect?: SpendingAccountWhereInput | boolean
    delete?: SpendingAccountWhereInput | boolean
    connect?: SpendingAccountWhereUniqueInput
    update?: XOR<XOR<SpendingAccountUpdateToOneWithWhereWithoutTransactionsInput, SpendingAccountUpdateWithoutTransactionsInput>, SpendingAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type DepositUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<DepositCreateWithoutTransactionsInput, DepositUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DepositCreateOrConnectWithoutTransactionsInput
    upsert?: DepositUpsertWithoutTransactionsInput
    disconnect?: DepositWhereInput | boolean
    delete?: DepositWhereInput | boolean
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutTransactionsInput, DepositUpdateWithoutTransactionsInput>, DepositUncheckedUpdateWithoutTransactionsInput>
  }

  export type TaskCreateweekDaysInput = {
    set: number[]
  }

  export type ChildCreateNestedOneWithoutTasksInput = {
    create?: XOR<ChildCreateWithoutTasksInput, ChildUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChildCreateOrConnectWithoutTasksInput
    connect?: ChildWhereUniqueInput
  }

  export type TaskInstanceCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskInstanceCreateWithoutTaskInput, TaskInstanceUncheckedCreateWithoutTaskInput> | TaskInstanceCreateWithoutTaskInput[] | TaskInstanceUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskInstanceCreateOrConnectWithoutTaskInput | TaskInstanceCreateOrConnectWithoutTaskInput[]
    createMany?: TaskInstanceCreateManyTaskInputEnvelope
    connect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
  }

  export type TaskInstanceUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskInstanceCreateWithoutTaskInput, TaskInstanceUncheckedCreateWithoutTaskInput> | TaskInstanceCreateWithoutTaskInput[] | TaskInstanceUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskInstanceCreateOrConnectWithoutTaskInput | TaskInstanceCreateOrConnectWithoutTaskInput[]
    createMany?: TaskInstanceCreateManyTaskInputEnvelope
    connect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
  }

  export type EnumTaskScheduleTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskScheduleType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateweekDaysInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ChildUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ChildCreateWithoutTasksInput, ChildUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChildCreateOrConnectWithoutTasksInput
    upsert?: ChildUpsertWithoutTasksInput
    connect?: ChildWhereUniqueInput
    update?: XOR<XOR<ChildUpdateToOneWithWhereWithoutTasksInput, ChildUpdateWithoutTasksInput>, ChildUncheckedUpdateWithoutTasksInput>
  }

  export type TaskInstanceUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskInstanceCreateWithoutTaskInput, TaskInstanceUncheckedCreateWithoutTaskInput> | TaskInstanceCreateWithoutTaskInput[] | TaskInstanceUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskInstanceCreateOrConnectWithoutTaskInput | TaskInstanceCreateOrConnectWithoutTaskInput[]
    upsert?: TaskInstanceUpsertWithWhereUniqueWithoutTaskInput | TaskInstanceUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskInstanceCreateManyTaskInputEnvelope
    set?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    disconnect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    delete?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    connect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    update?: TaskInstanceUpdateWithWhereUniqueWithoutTaskInput | TaskInstanceUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskInstanceUpdateManyWithWhereWithoutTaskInput | TaskInstanceUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskInstanceScalarWhereInput | TaskInstanceScalarWhereInput[]
  }

  export type TaskInstanceUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskInstanceCreateWithoutTaskInput, TaskInstanceUncheckedCreateWithoutTaskInput> | TaskInstanceCreateWithoutTaskInput[] | TaskInstanceUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskInstanceCreateOrConnectWithoutTaskInput | TaskInstanceCreateOrConnectWithoutTaskInput[]
    upsert?: TaskInstanceUpsertWithWhereUniqueWithoutTaskInput | TaskInstanceUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskInstanceCreateManyTaskInputEnvelope
    set?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    disconnect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    delete?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    connect?: TaskInstanceWhereUniqueInput | TaskInstanceWhereUniqueInput[]
    update?: TaskInstanceUpdateWithWhereUniqueWithoutTaskInput | TaskInstanceUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskInstanceUpdateManyWithWhereWithoutTaskInput | TaskInstanceUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskInstanceScalarWhereInput | TaskInstanceScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutInstancesInput = {
    create?: XOR<TaskCreateWithoutInstancesInput, TaskUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutInstancesInput
    connect?: TaskWhereUniqueInput
  }

  export type ChildCreateNestedOneWithoutTaskInstancesInput = {
    create?: XOR<ChildCreateWithoutTaskInstancesInput, ChildUncheckedCreateWithoutTaskInstancesInput>
    connectOrCreate?: ChildCreateOrConnectWithoutTaskInstancesInput
    connect?: ChildWhereUniqueInput
  }

  export type EnumTaskCompletionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskCompletionStatus
  }

  export type TaskUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<TaskCreateWithoutInstancesInput, TaskUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutInstancesInput
    upsert?: TaskUpsertWithoutInstancesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutInstancesInput, TaskUpdateWithoutInstancesInput>, TaskUncheckedUpdateWithoutInstancesInput>
  }

  export type ChildUpdateOneRequiredWithoutTaskInstancesNestedInput = {
    create?: XOR<ChildCreateWithoutTaskInstancesInput, ChildUncheckedCreateWithoutTaskInstancesInput>
    connectOrCreate?: ChildCreateOrConnectWithoutTaskInstancesInput
    upsert?: ChildUpsertWithoutTaskInstancesInput
    connect?: ChildWhereUniqueInput
    update?: XOR<XOR<ChildUpdateToOneWithWhereWithoutTaskInstancesInput, ChildUpdateWithoutTaskInstancesInput>, ChildUncheckedUpdateWithoutTaskInstancesInput>
  }

  export type ChildCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ChildCreateWithoutRequestsInput, ChildUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ChildCreateOrConnectWithoutRequestsInput
    connect?: ChildWhereUniqueInput
  }

  export type EnumRequestTypeFieldUpdateOperationsInput = {
    set?: $Enums.RequestType
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type ChildUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<ChildCreateWithoutRequestsInput, ChildUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ChildCreateOrConnectWithoutRequestsInput
    upsert?: ChildUpsertWithoutRequestsInput
    connect?: ChildWhereUniqueInput
    update?: XOR<XOR<ChildUpdateToOneWithWhereWithoutRequestsInput, ChildUpdateWithoutRequestsInput>, ChildUncheckedUpdateWithoutRequestsInput>
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChildCreateNestedOneWithoutWishlistInput = {
    create?: XOR<ChildCreateWithoutWishlistInput, ChildUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ChildCreateOrConnectWithoutWishlistInput
    connect?: ChildWhereUniqueInput
  }

  export type ChildUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<ChildCreateWithoutWishlistInput, ChildUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ChildCreateOrConnectWithoutWishlistInput
    upsert?: ChildUpsertWithoutWishlistInput
    connect?: ChildWhereUniqueInput
    update?: XOR<XOR<ChildUpdateToOneWithWhereWithoutWishlistInput, ChildUpdateWithoutWishlistInput>, ChildUncheckedUpdateWithoutWishlistInput>
  }

  export type ParentCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<ParentCreateWithoutInvitationsInput, ParentUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutInvitationsInput
    connect?: ParentWhereUniqueInput
  }

  export type ParentUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<ParentCreateWithoutInvitationsInput, ParentUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutInvitationsInput
    upsert?: ParentUpsertWithoutInvitationsInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutInvitationsInput, ParentUpdateWithoutInvitationsInput>, ParentUncheckedUpdateWithoutInvitationsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDepositStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusFilter<$PrismaModel> | $Enums.DepositStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepositStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositStatusFilter<$PrismaModel>
    _max?: NestedEnumDepositStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceFilter<$PrismaModel> | $Enums.TransactionSource
  }

  export type NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel> | $Enums.TransactionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionSourceFilter<$PrismaModel>
    _max?: NestedEnumTransactionSourceFilter<$PrismaModel>
  }

  export type NestedEnumTaskScheduleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskScheduleType | EnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskScheduleType[] | ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskScheduleType[] | ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskScheduleTypeFilter<$PrismaModel> | $Enums.TaskScheduleType
  }

  export type NestedEnumTaskScheduleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskScheduleType | EnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskScheduleType[] | ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskScheduleType[] | ListEnumTaskScheduleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskScheduleTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskScheduleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskScheduleTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskScheduleTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTaskCompletionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskCompletionStatus | EnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskCompletionStatus[] | ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskCompletionStatus[] | ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskCompletionStatusFilter<$PrismaModel> | $Enums.TaskCompletionStatus
  }

  export type NestedEnumTaskCompletionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskCompletionStatus | EnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskCompletionStatus[] | ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskCompletionStatus[] | ListEnumTaskCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskCompletionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskCompletionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskCompletionStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskCompletionStatusFilter<$PrismaModel>
  }

  export type NestedEnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParentChildCreateWithoutParentInput = {
    createdAt?: Date | string
    child: ChildCreateNestedOneWithoutParentsInput
  }

  export type ParentChildUncheckedCreateWithoutParentInput = {
    childId: string
    createdAt?: Date | string
  }

  export type ParentChildCreateOrConnectWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    create: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput>
  }

  export type ParentChildCreateManyParentInputEnvelope = {
    data: ParentChildCreateManyParentInput | ParentChildCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCodeCreateWithoutParentInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type InvitationCodeUncheckedCreateWithoutParentInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type InvitationCodeCreateOrConnectWithoutParentInput = {
    where: InvitationCodeWhereUniqueInput
    create: XOR<InvitationCodeCreateWithoutParentInput, InvitationCodeUncheckedCreateWithoutParentInput>
  }

  export type InvitationCodeCreateManyParentInputEnvelope = {
    data: InvitationCodeCreateManyParentInput | InvitationCodeCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ParentChildUpsertWithWhereUniqueWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    update: XOR<ParentChildUpdateWithoutParentInput, ParentChildUncheckedUpdateWithoutParentInput>
    create: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput>
  }

  export type ParentChildUpdateWithWhereUniqueWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    data: XOR<ParentChildUpdateWithoutParentInput, ParentChildUncheckedUpdateWithoutParentInput>
  }

  export type ParentChildUpdateManyWithWhereWithoutParentInput = {
    where: ParentChildScalarWhereInput
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyWithoutParentInput>
  }

  export type ParentChildScalarWhereInput = {
    AND?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
    OR?: ParentChildScalarWhereInput[]
    NOT?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
    parentId?: StringFilter<"ParentChild"> | string
    childId?: StringFilter<"ParentChild"> | string
    createdAt?: DateTimeFilter<"ParentChild"> | Date | string
  }

  export type InvitationCodeUpsertWithWhereUniqueWithoutParentInput = {
    where: InvitationCodeWhereUniqueInput
    update: XOR<InvitationCodeUpdateWithoutParentInput, InvitationCodeUncheckedUpdateWithoutParentInput>
    create: XOR<InvitationCodeCreateWithoutParentInput, InvitationCodeUncheckedCreateWithoutParentInput>
  }

  export type InvitationCodeUpdateWithWhereUniqueWithoutParentInput = {
    where: InvitationCodeWhereUniqueInput
    data: XOR<InvitationCodeUpdateWithoutParentInput, InvitationCodeUncheckedUpdateWithoutParentInput>
  }

  export type InvitationCodeUpdateManyWithWhereWithoutParentInput = {
    where: InvitationCodeScalarWhereInput
    data: XOR<InvitationCodeUpdateManyMutationInput, InvitationCodeUncheckedUpdateManyWithoutParentInput>
  }

  export type InvitationCodeScalarWhereInput = {
    AND?: InvitationCodeScalarWhereInput | InvitationCodeScalarWhereInput[]
    OR?: InvitationCodeScalarWhereInput[]
    NOT?: InvitationCodeScalarWhereInput | InvitationCodeScalarWhereInput[]
    id?: StringFilter<"InvitationCode"> | string
    code?: StringFilter<"InvitationCode"> | string
    usedAt?: DateTimeNullableFilter<"InvitationCode"> | Date | string | null
    parentId?: StringFilter<"InvitationCode"> | string
    createdAt?: DateTimeFilter<"InvitationCode"> | Date | string
  }

  export type ParentChildCreateWithoutChildInput = {
    createdAt?: Date | string
    parent: ParentCreateNestedOneWithoutChildrenInput
  }

  export type ParentChildUncheckedCreateWithoutChildInput = {
    parentId: string
    createdAt?: Date | string
  }

  export type ParentChildCreateOrConnectWithoutChildInput = {
    where: ParentChildWhereUniqueInput
    create: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput>
  }

  export type ParentChildCreateManyChildInputEnvelope = {
    data: ParentChildCreateManyChildInput | ParentChildCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type SpendingAccountCreateWithoutChildInput = {
    id?: string
    createdAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutSpendingAccountInput
  }

  export type SpendingAccountUncheckedCreateWithoutChildInput = {
    id?: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutSpendingAccountInput
  }

  export type SpendingAccountCreateOrConnectWithoutChildInput = {
    where: SpendingAccountWhereUniqueInput
    create: XOR<SpendingAccountCreateWithoutChildInput, SpendingAccountUncheckedCreateWithoutChildInput>
  }

  export type DepositCreateWithoutChildInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate: number
    startsAt: Date | string
    endsAt: Date | string
    status?: $Enums.DepositStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutChildInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate: number
    startsAt: Date | string
    endsAt: Date | string
    status?: $Enums.DepositStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutDepositInput
  }

  export type DepositCreateOrConnectWithoutChildInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutChildInput, DepositUncheckedCreateWithoutChildInput>
  }

  export type DepositCreateManyChildInputEnvelope = {
    data: DepositCreateManyChildInput | DepositCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutChildInput = {
    id?: string
    title: string
    description?: string | null
    reward: Decimal | DecimalJsLike | number | string
    scheduleType: $Enums.TaskScheduleType
    intervalDays?: number | null
    weekDays?: TaskCreateweekDaysInput | number[]
    dayOfMonth?: number | null
    startsAt: Date | string
    endsAt?: Date | string | null
    createdAt?: Date | string
    instances?: TaskInstanceCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutChildInput = {
    id?: string
    title: string
    description?: string | null
    reward: Decimal | DecimalJsLike | number | string
    scheduleType: $Enums.TaskScheduleType
    intervalDays?: number | null
    weekDays?: TaskCreateweekDaysInput | number[]
    dayOfMonth?: number | null
    startsAt: Date | string
    endsAt?: Date | string | null
    createdAt?: Date | string
    instances?: TaskInstanceUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutChildInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutChildInput, TaskUncheckedCreateWithoutChildInput>
  }

  export type TaskCreateManyChildInputEnvelope = {
    data: TaskCreateManyChildInput | TaskCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type TaskInstanceCreateWithoutChildInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
    task: TaskCreateNestedOneWithoutInstancesInput
  }

  export type TaskInstanceUncheckedCreateWithoutChildInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    taskId: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type TaskInstanceCreateOrConnectWithoutChildInput = {
    where: TaskInstanceWhereUniqueInput
    create: XOR<TaskInstanceCreateWithoutChildInput, TaskInstanceUncheckedCreateWithoutChildInput>
  }

  export type TaskInstanceCreateManyChildInputEnvelope = {
    data: TaskInstanceCreateManyChildInput | TaskInstanceCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutChildInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type RequestUncheckedCreateWithoutChildInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type RequestCreateOrConnectWithoutChildInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutChildInput, RequestUncheckedCreateWithoutChildInput>
  }

  export type RequestCreateManyChildInputEnvelope = {
    data: RequestCreateManyChildInput | RequestCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type WishlistItemCreateWithoutChildInput = {
    id?: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type WishlistItemUncheckedCreateWithoutChildInput = {
    id?: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type WishlistItemCreateOrConnectWithoutChildInput = {
    where: WishlistItemWhereUniqueInput
    create: XOR<WishlistItemCreateWithoutChildInput, WishlistItemUncheckedCreateWithoutChildInput>
  }

  export type WishlistItemCreateManyChildInputEnvelope = {
    data: WishlistItemCreateManyChildInput | WishlistItemCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type ParentChildUpsertWithWhereUniqueWithoutChildInput = {
    where: ParentChildWhereUniqueInput
    update: XOR<ParentChildUpdateWithoutChildInput, ParentChildUncheckedUpdateWithoutChildInput>
    create: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput>
  }

  export type ParentChildUpdateWithWhereUniqueWithoutChildInput = {
    where: ParentChildWhereUniqueInput
    data: XOR<ParentChildUpdateWithoutChildInput, ParentChildUncheckedUpdateWithoutChildInput>
  }

  export type ParentChildUpdateManyWithWhereWithoutChildInput = {
    where: ParentChildScalarWhereInput
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyWithoutChildInput>
  }

  export type SpendingAccountUpsertWithoutChildInput = {
    update: XOR<SpendingAccountUpdateWithoutChildInput, SpendingAccountUncheckedUpdateWithoutChildInput>
    create: XOR<SpendingAccountCreateWithoutChildInput, SpendingAccountUncheckedCreateWithoutChildInput>
    where?: SpendingAccountWhereInput
  }

  export type SpendingAccountUpdateToOneWithWhereWithoutChildInput = {
    where?: SpendingAccountWhereInput
    data: XOR<SpendingAccountUpdateWithoutChildInput, SpendingAccountUncheckedUpdateWithoutChildInput>
  }

  export type SpendingAccountUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutSpendingAccountNestedInput
  }

  export type SpendingAccountUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutSpendingAccountNestedInput
  }

  export type DepositUpsertWithWhereUniqueWithoutChildInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutChildInput, DepositUncheckedUpdateWithoutChildInput>
    create: XOR<DepositCreateWithoutChildInput, DepositUncheckedCreateWithoutChildInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutChildInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutChildInput, DepositUncheckedUpdateWithoutChildInput>
  }

  export type DepositUpdateManyWithWhereWithoutChildInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutChildInput>
  }

  export type DepositScalarWhereInput = {
    AND?: DepositScalarWhereInput | DepositScalarWhereInput[]
    OR?: DepositScalarWhereInput[]
    NOT?: DepositScalarWhereInput | DepositScalarWhereInput[]
    id?: StringFilter<"Deposit"> | string
    amount?: DecimalFilter<"Deposit"> | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFilter<"Deposit"> | number
    startsAt?: DateTimeFilter<"Deposit"> | Date | string
    endsAt?: DateTimeFilter<"Deposit"> | Date | string
    status?: EnumDepositStatusFilter<"Deposit"> | $Enums.DepositStatus
    childId?: StringFilter<"Deposit"> | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    closedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
  }

  export type TaskUpsertWithWhereUniqueWithoutChildInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutChildInput, TaskUncheckedUpdateWithoutChildInput>
    create: XOR<TaskCreateWithoutChildInput, TaskUncheckedCreateWithoutChildInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutChildInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutChildInput, TaskUncheckedUpdateWithoutChildInput>
  }

  export type TaskUpdateManyWithWhereWithoutChildInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutChildInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    reward?: DecimalFilter<"Task"> | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFilter<"Task"> | $Enums.TaskScheduleType
    intervalDays?: IntNullableFilter<"Task"> | number | null
    weekDays?: IntNullableListFilter<"Task">
    dayOfMonth?: IntNullableFilter<"Task"> | number | null
    startsAt?: DateTimeFilter<"Task"> | Date | string
    endsAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    childId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskInstanceUpsertWithWhereUniqueWithoutChildInput = {
    where: TaskInstanceWhereUniqueInput
    update: XOR<TaskInstanceUpdateWithoutChildInput, TaskInstanceUncheckedUpdateWithoutChildInput>
    create: XOR<TaskInstanceCreateWithoutChildInput, TaskInstanceUncheckedCreateWithoutChildInput>
  }

  export type TaskInstanceUpdateWithWhereUniqueWithoutChildInput = {
    where: TaskInstanceWhereUniqueInput
    data: XOR<TaskInstanceUpdateWithoutChildInput, TaskInstanceUncheckedUpdateWithoutChildInput>
  }

  export type TaskInstanceUpdateManyWithWhereWithoutChildInput = {
    where: TaskInstanceScalarWhereInput
    data: XOR<TaskInstanceUpdateManyMutationInput, TaskInstanceUncheckedUpdateManyWithoutChildInput>
  }

  export type TaskInstanceScalarWhereInput = {
    AND?: TaskInstanceScalarWhereInput | TaskInstanceScalarWhereInput[]
    OR?: TaskInstanceScalarWhereInput[]
    NOT?: TaskInstanceScalarWhereInput | TaskInstanceScalarWhereInput[]
    id?: StringFilter<"TaskInstance"> | string
    date?: DateTimeFilter<"TaskInstance"> | Date | string
    status?: EnumTaskCompletionStatusFilter<"TaskInstance"> | $Enums.TaskCompletionStatus
    taskId?: StringFilter<"TaskInstance"> | string
    childId?: StringFilter<"TaskInstance"> | string
    createdAt?: DateTimeFilter<"TaskInstance"> | Date | string
    approvedAt?: DateTimeNullableFilter<"TaskInstance"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"TaskInstance"> | Date | string | null
  }

  export type RequestUpsertWithWhereUniqueWithoutChildInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutChildInput, RequestUncheckedUpdateWithoutChildInput>
    create: XOR<RequestCreateWithoutChildInput, RequestUncheckedCreateWithoutChildInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutChildInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutChildInput, RequestUncheckedUpdateWithoutChildInput>
  }

  export type RequestUpdateManyWithWhereWithoutChildInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutChildInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    childId?: StringFilter<"Request"> | string
    payload?: JsonFilter<"Request">
    createdAt?: DateTimeFilter<"Request"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
  }

  export type WishlistItemUpsertWithWhereUniqueWithoutChildInput = {
    where: WishlistItemWhereUniqueInput
    update: XOR<WishlistItemUpdateWithoutChildInput, WishlistItemUncheckedUpdateWithoutChildInput>
    create: XOR<WishlistItemCreateWithoutChildInput, WishlistItemUncheckedCreateWithoutChildInput>
  }

  export type WishlistItemUpdateWithWhereUniqueWithoutChildInput = {
    where: WishlistItemWhereUniqueInput
    data: XOR<WishlistItemUpdateWithoutChildInput, WishlistItemUncheckedUpdateWithoutChildInput>
  }

  export type WishlistItemUpdateManyWithWhereWithoutChildInput = {
    where: WishlistItemScalarWhereInput
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyWithoutChildInput>
  }

  export type WishlistItemScalarWhereInput = {
    AND?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
    OR?: WishlistItemScalarWhereInput[]
    NOT?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
    id?: StringFilter<"WishlistItem"> | string
    title?: StringFilter<"WishlistItem"> | string
    price?: DecimalFilter<"WishlistItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"WishlistItem"> | string | null
    childId?: StringFilter<"WishlistItem"> | string
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
  }

  export type ParentCreateWithoutChildrenInput = {
    id?: string
    email: string
    password: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitations?: InvitationCodeCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutChildrenInput = {
    id?: string
    email: string
    password: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitations?: InvitationCodeUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutChildrenInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutChildrenInput, ParentUncheckedCreateWithoutChildrenInput>
  }

  export type ChildCreateWithoutParentsInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spending?: SpendingAccountCreateNestedOneWithoutChildInput
    deposits?: DepositCreateNestedManyWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceCreateNestedManyWithoutChildInput
    requests?: RequestCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemCreateNestedManyWithoutChildInput
  }

  export type ChildUncheckedCreateWithoutParentsInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spending?: SpendingAccountUncheckedCreateNestedOneWithoutChildInput
    deposits?: DepositUncheckedCreateNestedManyWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceUncheckedCreateNestedManyWithoutChildInput
    requests?: RequestUncheckedCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutChildInput
  }

  export type ChildCreateOrConnectWithoutParentsInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutParentsInput, ChildUncheckedCreateWithoutParentsInput>
  }

  export type ParentUpsertWithoutChildrenInput = {
    update: XOR<ParentUpdateWithoutChildrenInput, ParentUncheckedUpdateWithoutChildrenInput>
    create: XOR<ParentCreateWithoutChildrenInput, ParentUncheckedCreateWithoutChildrenInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutChildrenInput, ParentUncheckedUpdateWithoutChildrenInput>
  }

  export type ParentUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitations?: InvitationCodeUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitations?: InvitationCodeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ChildUpsertWithoutParentsInput = {
    update: XOR<ChildUpdateWithoutParentsInput, ChildUncheckedUpdateWithoutParentsInput>
    create: XOR<ChildCreateWithoutParentsInput, ChildUncheckedCreateWithoutParentsInput>
    where?: ChildWhereInput
  }

  export type ChildUpdateToOneWithWhereWithoutParentsInput = {
    where?: ChildWhereInput
    data: XOR<ChildUpdateWithoutParentsInput, ChildUncheckedUpdateWithoutParentsInput>
  }

  export type ChildUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spending?: SpendingAccountUpdateOneWithoutChildNestedInput
    deposits?: DepositUpdateManyWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUpdateManyWithoutChildNestedInput
    requests?: RequestUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUpdateManyWithoutChildNestedInput
  }

  export type ChildUncheckedUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spending?: SpendingAccountUncheckedUpdateOneWithoutChildNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUncheckedUpdateManyWithoutChildNestedInput
    requests?: RequestUncheckedUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutChildNestedInput
  }

  export type ChildCreateWithoutSpendingInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    deposits?: DepositCreateNestedManyWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceCreateNestedManyWithoutChildInput
    requests?: RequestCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemCreateNestedManyWithoutChildInput
  }

  export type ChildUncheckedCreateWithoutSpendingInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    deposits?: DepositUncheckedCreateNestedManyWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceUncheckedCreateNestedManyWithoutChildInput
    requests?: RequestUncheckedCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutChildInput
  }

  export type ChildCreateOrConnectWithoutSpendingInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutSpendingInput, ChildUncheckedCreateWithoutSpendingInput>
  }

  export type TransactionCreateWithoutSpendingAccountInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    createdAt?: Date | string
    deposit?: DepositCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutSpendingAccountInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    depositId?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutSpendingAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSpendingAccountInput, TransactionUncheckedCreateWithoutSpendingAccountInput>
  }

  export type TransactionCreateManySpendingAccountInputEnvelope = {
    data: TransactionCreateManySpendingAccountInput | TransactionCreateManySpendingAccountInput[]
    skipDuplicates?: boolean
  }

  export type ChildUpsertWithoutSpendingInput = {
    update: XOR<ChildUpdateWithoutSpendingInput, ChildUncheckedUpdateWithoutSpendingInput>
    create: XOR<ChildCreateWithoutSpendingInput, ChildUncheckedCreateWithoutSpendingInput>
    where?: ChildWhereInput
  }

  export type ChildUpdateToOneWithWhereWithoutSpendingInput = {
    where?: ChildWhereInput
    data: XOR<ChildUpdateWithoutSpendingInput, ChildUncheckedUpdateWithoutSpendingInput>
  }

  export type ChildUpdateWithoutSpendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    deposits?: DepositUpdateManyWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUpdateManyWithoutChildNestedInput
    requests?: RequestUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUpdateManyWithoutChildNestedInput
  }

  export type ChildUncheckedUpdateWithoutSpendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUncheckedUpdateManyWithoutChildNestedInput
    requests?: RequestUncheckedUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutChildNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutSpendingAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSpendingAccountInput, TransactionUncheckedUpdateWithoutSpendingAccountInput>
    create: XOR<TransactionCreateWithoutSpendingAccountInput, TransactionUncheckedCreateWithoutSpendingAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSpendingAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSpendingAccountInput, TransactionUncheckedUpdateWithoutSpendingAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSpendingAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSpendingAccountInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFilter<"Transaction"> | $Enums.TransactionSource
    comment?: StringNullableFilter<"Transaction"> | string | null
    spendingAccountId?: StringNullableFilter<"Transaction"> | string | null
    depositId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type ChildCreateWithoutDepositsInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    spending?: SpendingAccountCreateNestedOneWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceCreateNestedManyWithoutChildInput
    requests?: RequestCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemCreateNestedManyWithoutChildInput
  }

  export type ChildUncheckedCreateWithoutDepositsInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    spending?: SpendingAccountUncheckedCreateNestedOneWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceUncheckedCreateNestedManyWithoutChildInput
    requests?: RequestUncheckedCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutChildInput
  }

  export type ChildCreateOrConnectWithoutDepositsInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutDepositsInput, ChildUncheckedCreateWithoutDepositsInput>
  }

  export type TransactionCreateWithoutDepositInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    createdAt?: Date | string
    spendingAccount?: SpendingAccountCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutDepositInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    spendingAccountId?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutDepositInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput>
  }

  export type TransactionCreateManyDepositInputEnvelope = {
    data: TransactionCreateManyDepositInput | TransactionCreateManyDepositInput[]
    skipDuplicates?: boolean
  }

  export type ChildUpsertWithoutDepositsInput = {
    update: XOR<ChildUpdateWithoutDepositsInput, ChildUncheckedUpdateWithoutDepositsInput>
    create: XOR<ChildCreateWithoutDepositsInput, ChildUncheckedCreateWithoutDepositsInput>
    where?: ChildWhereInput
  }

  export type ChildUpdateToOneWithWhereWithoutDepositsInput = {
    where?: ChildWhereInput
    data: XOR<ChildUpdateWithoutDepositsInput, ChildUncheckedUpdateWithoutDepositsInput>
  }

  export type ChildUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUpdateOneWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUpdateManyWithoutChildNestedInput
    requests?: RequestUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUpdateManyWithoutChildNestedInput
  }

  export type ChildUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUncheckedUpdateOneWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUncheckedUpdateManyWithoutChildNestedInput
    requests?: RequestUncheckedUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutChildNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutDepositInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutDepositInput, TransactionUncheckedUpdateWithoutDepositInput>
    create: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutDepositInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutDepositInput, TransactionUncheckedUpdateWithoutDepositInput>
  }

  export type TransactionUpdateManyWithWhereWithoutDepositInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutDepositInput>
  }

  export type SpendingAccountCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    child: ChildCreateNestedOneWithoutSpendingInput
  }

  export type SpendingAccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    childId: string
    createdAt?: Date | string
  }

  export type SpendingAccountCreateOrConnectWithoutTransactionsInput = {
    where: SpendingAccountWhereUniqueInput
    create: XOR<SpendingAccountCreateWithoutTransactionsInput, SpendingAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type DepositCreateWithoutTransactionsInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate: number
    startsAt: Date | string
    endsAt: Date | string
    status?: $Enums.DepositStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
    child: ChildCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateWithoutTransactionsInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate: number
    startsAt: Date | string
    endsAt: Date | string
    status?: $Enums.DepositStatus
    childId: string
    createdAt?: Date | string
    closedAt?: Date | string | null
  }

  export type DepositCreateOrConnectWithoutTransactionsInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutTransactionsInput, DepositUncheckedCreateWithoutTransactionsInput>
  }

  export type SpendingAccountUpsertWithoutTransactionsInput = {
    update: XOR<SpendingAccountUpdateWithoutTransactionsInput, SpendingAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<SpendingAccountCreateWithoutTransactionsInput, SpendingAccountUncheckedCreateWithoutTransactionsInput>
    where?: SpendingAccountWhereInput
  }

  export type SpendingAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: SpendingAccountWhereInput
    data: XOR<SpendingAccountUpdateWithoutTransactionsInput, SpendingAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type SpendingAccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: ChildUpdateOneRequiredWithoutSpendingNestedInput
  }

  export type SpendingAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpsertWithoutTransactionsInput = {
    update: XOR<DepositUpdateWithoutTransactionsInput, DepositUncheckedUpdateWithoutTransactionsInput>
    create: XOR<DepositCreateWithoutTransactionsInput, DepositUncheckedCreateWithoutTransactionsInput>
    where?: DepositWhereInput
  }

  export type DepositUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: DepositWhereInput
    data: XOR<DepositUpdateWithoutTransactionsInput, DepositUncheckedUpdateWithoutTransactionsInput>
  }

  export type DepositUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    child?: ChildUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChildCreateWithoutTasksInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    spending?: SpendingAccountCreateNestedOneWithoutChildInput
    deposits?: DepositCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceCreateNestedManyWithoutChildInput
    requests?: RequestCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemCreateNestedManyWithoutChildInput
  }

  export type ChildUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    spending?: SpendingAccountUncheckedCreateNestedOneWithoutChildInput
    deposits?: DepositUncheckedCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceUncheckedCreateNestedManyWithoutChildInput
    requests?: RequestUncheckedCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutChildInput
  }

  export type ChildCreateOrConnectWithoutTasksInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutTasksInput, ChildUncheckedCreateWithoutTasksInput>
  }

  export type TaskInstanceCreateWithoutTaskInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
    child: ChildCreateNestedOneWithoutTaskInstancesInput
  }

  export type TaskInstanceUncheckedCreateWithoutTaskInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    childId: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type TaskInstanceCreateOrConnectWithoutTaskInput = {
    where: TaskInstanceWhereUniqueInput
    create: XOR<TaskInstanceCreateWithoutTaskInput, TaskInstanceUncheckedCreateWithoutTaskInput>
  }

  export type TaskInstanceCreateManyTaskInputEnvelope = {
    data: TaskInstanceCreateManyTaskInput | TaskInstanceCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ChildUpsertWithoutTasksInput = {
    update: XOR<ChildUpdateWithoutTasksInput, ChildUncheckedUpdateWithoutTasksInput>
    create: XOR<ChildCreateWithoutTasksInput, ChildUncheckedCreateWithoutTasksInput>
    where?: ChildWhereInput
  }

  export type ChildUpdateToOneWithWhereWithoutTasksInput = {
    where?: ChildWhereInput
    data: XOR<ChildUpdateWithoutTasksInput, ChildUncheckedUpdateWithoutTasksInput>
  }

  export type ChildUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUpdateOneWithoutChildNestedInput
    deposits?: DepositUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUpdateManyWithoutChildNestedInput
    requests?: RequestUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUpdateManyWithoutChildNestedInput
  }

  export type ChildUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUncheckedUpdateOneWithoutChildNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUncheckedUpdateManyWithoutChildNestedInput
    requests?: RequestUncheckedUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutChildNestedInput
  }

  export type TaskInstanceUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskInstanceWhereUniqueInput
    update: XOR<TaskInstanceUpdateWithoutTaskInput, TaskInstanceUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskInstanceCreateWithoutTaskInput, TaskInstanceUncheckedCreateWithoutTaskInput>
  }

  export type TaskInstanceUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskInstanceWhereUniqueInput
    data: XOR<TaskInstanceUpdateWithoutTaskInput, TaskInstanceUncheckedUpdateWithoutTaskInput>
  }

  export type TaskInstanceUpdateManyWithWhereWithoutTaskInput = {
    where: TaskInstanceScalarWhereInput
    data: XOR<TaskInstanceUpdateManyMutationInput, TaskInstanceUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutInstancesInput = {
    id?: string
    title: string
    description?: string | null
    reward: Decimal | DecimalJsLike | number | string
    scheduleType: $Enums.TaskScheduleType
    intervalDays?: number | null
    weekDays?: TaskCreateweekDaysInput | number[]
    dayOfMonth?: number | null
    startsAt: Date | string
    endsAt?: Date | string | null
    createdAt?: Date | string
    child: ChildCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutInstancesInput = {
    id?: string
    title: string
    description?: string | null
    reward: Decimal | DecimalJsLike | number | string
    scheduleType: $Enums.TaskScheduleType
    intervalDays?: number | null
    weekDays?: TaskCreateweekDaysInput | number[]
    dayOfMonth?: number | null
    startsAt: Date | string
    endsAt?: Date | string | null
    childId: string
    createdAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutInstancesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutInstancesInput, TaskUncheckedCreateWithoutInstancesInput>
  }

  export type ChildCreateWithoutTaskInstancesInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    spending?: SpendingAccountCreateNestedOneWithoutChildInput
    deposits?: DepositCreateNestedManyWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutChildInput
    requests?: RequestCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemCreateNestedManyWithoutChildInput
  }

  export type ChildUncheckedCreateWithoutTaskInstancesInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    spending?: SpendingAccountUncheckedCreateNestedOneWithoutChildInput
    deposits?: DepositUncheckedCreateNestedManyWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutChildInput
    requests?: RequestUncheckedCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutChildInput
  }

  export type ChildCreateOrConnectWithoutTaskInstancesInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutTaskInstancesInput, ChildUncheckedCreateWithoutTaskInstancesInput>
  }

  export type TaskUpsertWithoutInstancesInput = {
    update: XOR<TaskUpdateWithoutInstancesInput, TaskUncheckedUpdateWithoutInstancesInput>
    create: XOR<TaskCreateWithoutInstancesInput, TaskUncheckedCreateWithoutInstancesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutInstancesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutInstancesInput, TaskUncheckedUpdateWithoutInstancesInput>
  }

  export type TaskUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: ChildUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUpsertWithoutTaskInstancesInput = {
    update: XOR<ChildUpdateWithoutTaskInstancesInput, ChildUncheckedUpdateWithoutTaskInstancesInput>
    create: XOR<ChildCreateWithoutTaskInstancesInput, ChildUncheckedCreateWithoutTaskInstancesInput>
    where?: ChildWhereInput
  }

  export type ChildUpdateToOneWithWhereWithoutTaskInstancesInput = {
    where?: ChildWhereInput
    data: XOR<ChildUpdateWithoutTaskInstancesInput, ChildUncheckedUpdateWithoutTaskInstancesInput>
  }

  export type ChildUpdateWithoutTaskInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUpdateOneWithoutChildNestedInput
    deposits?: DepositUpdateManyWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutChildNestedInput
    requests?: RequestUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUpdateManyWithoutChildNestedInput
  }

  export type ChildUncheckedUpdateWithoutTaskInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUncheckedUpdateOneWithoutChildNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutChildNestedInput
    requests?: RequestUncheckedUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutChildNestedInput
  }

  export type ChildCreateWithoutRequestsInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    spending?: SpendingAccountCreateNestedOneWithoutChildInput
    deposits?: DepositCreateNestedManyWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemCreateNestedManyWithoutChildInput
  }

  export type ChildUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    spending?: SpendingAccountUncheckedCreateNestedOneWithoutChildInput
    deposits?: DepositUncheckedCreateNestedManyWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceUncheckedCreateNestedManyWithoutChildInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutChildInput
  }

  export type ChildCreateOrConnectWithoutRequestsInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutRequestsInput, ChildUncheckedCreateWithoutRequestsInput>
  }

  export type ChildUpsertWithoutRequestsInput = {
    update: XOR<ChildUpdateWithoutRequestsInput, ChildUncheckedUpdateWithoutRequestsInput>
    create: XOR<ChildCreateWithoutRequestsInput, ChildUncheckedCreateWithoutRequestsInput>
    where?: ChildWhereInput
  }

  export type ChildUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ChildWhereInput
    data: XOR<ChildUpdateWithoutRequestsInput, ChildUncheckedUpdateWithoutRequestsInput>
  }

  export type ChildUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUpdateOneWithoutChildNestedInput
    deposits?: DepositUpdateManyWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUpdateManyWithoutChildNestedInput
  }

  export type ChildUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUncheckedUpdateOneWithoutChildNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUncheckedUpdateManyWithoutChildNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutChildNestedInput
  }

  export type ChildCreateWithoutWishlistInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    spending?: SpendingAccountCreateNestedOneWithoutChildInput
    deposits?: DepositCreateNestedManyWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceCreateNestedManyWithoutChildInput
    requests?: RequestCreateNestedManyWithoutChildInput
  }

  export type ChildUncheckedCreateWithoutWishlistInput = {
    id?: string
    name: string
    password: string
    pin?: string | null
    birthDate?: Date | string | null
    city?: string | null
    locale?: string | null
    newsPrompt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    spending?: SpendingAccountUncheckedCreateNestedOneWithoutChildInput
    deposits?: DepositUncheckedCreateNestedManyWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutChildInput
    taskInstances?: TaskInstanceUncheckedCreateNestedManyWithoutChildInput
    requests?: RequestUncheckedCreateNestedManyWithoutChildInput
  }

  export type ChildCreateOrConnectWithoutWishlistInput = {
    where: ChildWhereUniqueInput
    create: XOR<ChildCreateWithoutWishlistInput, ChildUncheckedCreateWithoutWishlistInput>
  }

  export type ChildUpsertWithoutWishlistInput = {
    update: XOR<ChildUpdateWithoutWishlistInput, ChildUncheckedUpdateWithoutWishlistInput>
    create: XOR<ChildCreateWithoutWishlistInput, ChildUncheckedCreateWithoutWishlistInput>
    where?: ChildWhereInput
  }

  export type ChildUpdateToOneWithWhereWithoutWishlistInput = {
    where?: ChildWhereInput
    data: XOR<ChildUpdateWithoutWishlistInput, ChildUncheckedUpdateWithoutWishlistInput>
  }

  export type ChildUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUpdateOneWithoutChildNestedInput
    deposits?: DepositUpdateManyWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUpdateManyWithoutChildNestedInput
    requests?: RequestUpdateManyWithoutChildNestedInput
  }

  export type ChildUncheckedUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    newsPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    spending?: SpendingAccountUncheckedUpdateOneWithoutChildNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutChildNestedInput
    taskInstances?: TaskInstanceUncheckedUpdateManyWithoutChildNestedInput
    requests?: RequestUncheckedUpdateManyWithoutChildNestedInput
  }

  export type ParentCreateWithoutInvitationsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutInvitationsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutInvitationsInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutInvitationsInput, ParentUncheckedCreateWithoutInvitationsInput>
  }

  export type ParentUpsertWithoutInvitationsInput = {
    update: XOR<ParentUpdateWithoutInvitationsInput, ParentUncheckedUpdateWithoutInvitationsInput>
    create: XOR<ParentCreateWithoutInvitationsInput, ParentUncheckedCreateWithoutInvitationsInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutInvitationsInput, ParentUncheckedUpdateWithoutInvitationsInput>
  }

  export type ParentUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentChildCreateManyParentInput = {
    childId: string
    createdAt?: Date | string
  }

  export type InvitationCodeCreateManyParentInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ParentChildUpdateWithoutParentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: ChildUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ParentChildUncheckedUpdateWithoutParentInput = {
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentChildUncheckedUpdateManyWithoutParentInput = {
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCodeUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCodeUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCodeUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentChildCreateManyChildInput = {
    parentId: string
    createdAt?: Date | string
  }

  export type DepositCreateManyChildInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate: number
    startsAt: Date | string
    endsAt: Date | string
    status?: $Enums.DepositStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
  }

  export type TaskCreateManyChildInput = {
    id?: string
    title: string
    description?: string | null
    reward: Decimal | DecimalJsLike | number | string
    scheduleType: $Enums.TaskScheduleType
    intervalDays?: number | null
    weekDays?: TaskCreateweekDaysInput | number[]
    dayOfMonth?: number | null
    startsAt: Date | string
    endsAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TaskInstanceCreateManyChildInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    taskId: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type RequestCreateManyChildInput = {
    id?: string
    type: $Enums.RequestType
    status?: $Enums.RequestStatus
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type WishlistItemCreateManyChildInput = {
    id?: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ParentChildUpdateWithoutChildInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ParentUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type ParentChildUncheckedUpdateWithoutChildInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentChildUncheckedUpdateManyWithoutChildInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateManyWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: FloatFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: TaskInstanceUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: TaskInstanceUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduleType?: EnumTaskScheduleTypeFieldUpdateOperationsInput | $Enums.TaskScheduleType
    intervalDays?: NullableIntFieldUpdateOperationsInput | number | null
    weekDays?: TaskUpdateweekDaysInput | number[]
    dayOfMonth?: NullableIntFieldUpdateOperationsInput | number | null
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskInstanceUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutInstancesNestedInput
  }

  export type TaskInstanceUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskInstanceUncheckedUpdateManyWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestUncheckedUpdateManyWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WishlistItemUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateManyWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManySpendingAccountInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    depositId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutSpendingAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: DepositUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSpendingAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    depositId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutSpendingAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    depositId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyDepositInput = {
    id: string
    amount: Decimal | DecimalJsLike | number | string
    source: $Enums.TransactionSource
    comment?: string | null
    spendingAccountId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spendingAccount?: SpendingAccountUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    spendingAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    spendingAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskInstanceCreateManyTaskInput = {
    id?: string
    date: Date | string
    status?: $Enums.TaskCompletionStatus
    childId: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type TaskInstanceUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    child?: ChildUpdateOneRequiredWithoutTaskInstancesNestedInput
  }

  export type TaskInstanceUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskInstanceUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskCompletionStatusFieldUpdateOperationsInput | $Enums.TaskCompletionStatus
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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