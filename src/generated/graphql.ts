import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamptz: any;
  uuid: any;
};

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Int_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** List of customers */
export type Customers = {
  __typename?: 'customers';
  address: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['uuid'];
  lastName: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phone: Scalars['String'];
};


/** List of customers */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** List of customers */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  address?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Phone = 'phone'
}

export type Date_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _cast?: InputMaybe<Date_Cast_Exp>;
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "test" */
  deleteTes?: Maybe<Test>;
  /** delete data from the table: "test" */
  deleteTest?: Maybe<Test_Mutation_Response>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "order_items" */
  delete_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** delete single row from the table: "order_items" */
  delete_order_items_by_pk?: Maybe<Order_Items>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** insert a single row into the table: "test" */
  insertTes?: Maybe<Test>;
  /** insert data into the table: "test" */
  insertTest?: Maybe<Test_Mutation_Response>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "order_items" */
  insert_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** insert a single row into the table: "order_items" */
  insert_order_items_one?: Maybe<Order_Items>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** update single row of the table: "test" */
  updateTes?: Maybe<Test>;
  /** update data of the table: "test" */
  updateTest?: Maybe<Test_Mutation_Response>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "order_items" */
  update_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** update single row of the table: "order_items" */
  update_order_items_by_pk?: Maybe<Order_Items>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
};


/** mutation root */
export type Mutation_RootDeleteTesArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTestArgs = {
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Order_ItemsArgs = {
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertTesArgs = {
  object: Test_Insert_Input;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ItemsArgs = {
  objects: Array<Order_Items_Insert_Input>;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Items_OneArgs = {
  object: Order_Items_Insert_Input;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateTesArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTestArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ItemsArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  _set?: InputMaybe<Order_Items_Set_Input>;
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Items_By_PkArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  _set?: InputMaybe<Order_Items_Set_Input>;
  pk_columns: Order_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** List of items */
export type Order_Items = {
  __typename?: 'order_items';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  order: Orders;
  orderId: Scalars['uuid'];
  price: Scalars['Int'];
  quanitity: Scalars['Int'];
};

/** aggregated selection of "order_items" */
export type Order_Items_Aggregate = {
  __typename?: 'order_items_aggregate';
  aggregate?: Maybe<Order_Items_Aggregate_Fields>;
  nodes: Array<Order_Items>;
};

/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_Fields = {
  __typename?: 'order_items_aggregate_fields';
  avg?: Maybe<Order_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Items_Max_Fields>;
  min?: Maybe<Order_Items_Min_Fields>;
  stddev?: Maybe<Order_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Items_Sum_Fields>;
  var_pop?: Maybe<Order_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Items_Var_Samp_Fields>;
  variance?: Maybe<Order_Items_Variance_Fields>;
};


/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_items" */
export type Order_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Items_Max_Order_By>;
  min?: InputMaybe<Order_Items_Min_Order_By>;
  stddev?: InputMaybe<Order_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_items" */
export type Order_Items_Arr_Rel_Insert_Input = {
  data: Array<Order_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Items_Avg_Fields = {
  __typename?: 'order_items_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quanitity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_items" */
export type Order_Items_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_items". All fields are combined with a logical 'AND'. */
export type Order_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Items_Bool_Exp>>;
  _not?: InputMaybe<Order_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Items_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  orderId?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  quanitity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_items" */
export enum Order_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = 'order_items_pkey'
}

/** input type for incrementing numeric columns in table "order_items" */
export type Order_Items_Inc_Input = {
  price?: InputMaybe<Scalars['Int']>;
  quanitity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_items" */
export type Order_Items_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  orderId?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['Int']>;
  quanitity?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Order_Items_Max_Fields = {
  __typename?: 'order_items_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['Int']>;
  quanitity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "order_items" */
export type Order_Items_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Items_Min_Fields = {
  __typename?: 'order_items_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['Int']>;
  quanitity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "order_items" */
export type Order_Items_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_items" */
export type Order_Items_Mutation_Response = {
  __typename?: 'order_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Items>;
};

/** on_conflict condition type for table "order_items" */
export type Order_Items_On_Conflict = {
  constraint: Order_Items_Constraint;
  update_columns?: Array<Order_Items_Update_Column>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "order_items". */
export type Order_Items_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_items */
export type Order_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_items" */
export enum Order_Items_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Price = 'price',
  /** column name */
  Quanitity = 'quanitity'
}

/** input type for updating data in table "order_items" */
export type Order_Items_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['Int']>;
  quanitity?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Order_Items_Stddev_Fields = {
  __typename?: 'order_items_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quanitity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_items" */
export type Order_Items_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Items_Stddev_Pop_Fields = {
  __typename?: 'order_items_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quanitity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_items" */
export type Order_Items_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Items_Stddev_Samp_Fields = {
  __typename?: 'order_items_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quanitity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_items" */
export type Order_Items_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Items_Sum_Fields = {
  __typename?: 'order_items_sum_fields';
  price?: Maybe<Scalars['Int']>;
  quanitity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_items" */
export type Order_Items_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** update columns of table "order_items" */
export enum Order_Items_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Price = 'price',
  /** column name */
  Quanitity = 'quanitity'
}

/** aggregate var_pop on columns */
export type Order_Items_Var_Pop_Fields = {
  __typename?: 'order_items_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quanitity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_items" */
export type Order_Items_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Items_Var_Samp_Fields = {
  __typename?: 'order_items_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quanitity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_items" */
export type Order_Items_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Items_Variance_Fields = {
  __typename?: 'order_items_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quanitity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_items" */
export type Order_Items_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quanitity?: InputMaybe<Order_By>;
};

/** List of orders */
export type Orders = {
  __typename?: 'orders';
  /** An object relationship */
  customer: Customers;
  customerId: Scalars['uuid'];
  id: Scalars['uuid'];
  orderDate: Scalars['date'];
  /** An array relationship */
  orderItems: Array<Order_Items>;
  /** An aggregate relationship */
  orderItems_aggregate: Order_Items_Aggregate;
  orderStatus: Scalars['String'];
  shippedDate?: Maybe<Scalars['date']>;
};


/** List of orders */
export type OrdersOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


/** List of orders */
export type OrdersOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  customerId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orderDate?: InputMaybe<Date_Comparison_Exp>;
  orderItems?: InputMaybe<Order_Items_Bool_Exp>;
  orderStatus?: InputMaybe<String_Comparison_Exp>;
  shippedDate?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  customerId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  orderDate?: InputMaybe<Scalars['date']>;
  orderItems?: InputMaybe<Order_Items_Arr_Rel_Insert_Input>;
  orderStatus?: InputMaybe<Scalars['String']>;
  shippedDate?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  customerId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  orderDate?: Maybe<Scalars['date']>;
  orderStatus?: Maybe<Scalars['String']>;
  shippedDate?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  customerId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  shippedDate?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  customerId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  orderDate?: Maybe<Scalars['date']>;
  orderStatus?: Maybe<Scalars['String']>;
  shippedDate?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  customerId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  shippedDate?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  customer?: InputMaybe<Customers_Order_By>;
  customerId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderItems_aggregate?: InputMaybe<Order_Items_Aggregate_Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  shippedDate?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'orderDate',
  /** column name */
  OrderStatus = 'orderStatus',
  /** column name */
  ShippedDate = 'shippedDate'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  customerId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  orderDate?: InputMaybe<Scalars['date']>;
  orderStatus?: InputMaybe<Scalars['String']>;
  shippedDate?: InputMaybe<Scalars['date']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'orderDate',
  /** column name */
  OrderStatus = 'orderStatus',
  /** column name */
  ShippedDate = 'shippedDate'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "order_items" */
  order_items: Array<Order_Items>;
  /** fetch aggregated fields from the table: "order_items" */
  order_items_aggregate: Order_Items_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test" using primary key columns */
  tes?: Maybe<Test>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  testAggregate: Test_Aggregate;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTesArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTestAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "order_items" */
  order_items: Array<Order_Items>;
  /** fetch aggregated fields from the table: "order_items" */
  order_items_aggregate: Order_Items_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test" using primary key columns */
  tes?: Maybe<Test>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  testAggregate: Test_Aggregate;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTesArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTestAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "test" */
export type Test_Aggregate = {
  __typename?: 'test_aggregate';
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  __typename?: 'test_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
};


/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestPkey = 'test_pkey'
}

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on_conflict condition type for table "test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test" */
export enum Test_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test" */
export enum Test_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };

export type Order_ItemsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column> | Order_Items_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By> | Order_Items_Order_By>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
}>;


export type Order_ItemsQuery = { __typename?: 'query_root', order_items: Array<{ __typename?: 'order_items', id: any, name: string }> };

export type Order_Items_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Order_Items_By_PkQuery = { __typename?: 'query_root', order_items_by_pk?: { __typename?: 'order_items', id: any, name: string } | null };

export type Delete_Order_ItemsMutationVariables = Exact<{
  where: Order_Items_Bool_Exp;
}>;


export type Delete_Order_ItemsMutation = { __typename?: 'mutation_root', delete_order_items?: { __typename?: 'order_items_mutation_response', returning: Array<{ __typename?: 'order_items', id: any, name: string, orderId: any, price: number, quanitity: number }> } | null };

export type Delete_Order_Items_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Order_Items_By_PkMutation = { __typename?: 'mutation_root', delete_order_items_by_pk?: { __typename?: 'order_items', id: any, name: string } | null };

export type Insert_Order_ItemsMutationVariables = Exact<{
  order_items: Array<Order_Items_Insert_Input> | Order_Items_Insert_Input;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
}>;


export type Insert_Order_ItemsMutation = { __typename?: 'mutation_root', insert_order_items?: { __typename?: 'order_items_mutation_response', returning: Array<{ __typename?: 'order_items', id: any, name: string, orderId: any, price: number, quanitity: number }> } | null };

export type Insert_Order_Items_OneMutationVariables = Exact<{
  order_items: Order_Items_Insert_Input;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
}>;


export type Insert_Order_Items_OneMutation = { __typename?: 'mutation_root', insert_order_items_one?: { __typename?: 'order_items', id: any, name: string } | null };

export type Update_Order_ItemsMutationVariables = Exact<{
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  order_items?: InputMaybe<Order_Items_Set_Input>;
  where: Order_Items_Bool_Exp;
}>;


export type Update_Order_ItemsMutation = { __typename?: 'mutation_root', update_order_items?: { __typename?: 'order_items_mutation_response', returning: Array<{ __typename?: 'order_items', id: any, name: string, orderId: any, price: number, quanitity: number }> } | null };

export type Update_Order_Items_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  order_items?: InputMaybe<Order_Items_Set_Input>;
  pk_columns: Order_Items_Pk_Columns_Input;
}>;


export type Update_Order_Items_By_PkMutation = { __typename?: 'mutation_root', update_order_items_by_pk?: { __typename?: 'order_items', id: any, name: string } | null };

export type Order_Items_Order_ItemsFragment = { __typename?: 'order_items', id: any, name: string };

export type Order_Items_By_Pk_Order_ItemsFragment = { __typename?: 'order_items', id: any, name: string };

export type Delete_Order_Items_Order_Items_Mutation_ResponseFragment = { __typename?: 'order_items_mutation_response', returning: Array<{ __typename?: 'order_items', id: any, name: string, orderId: any, price: number, quanitity: number }> };

export type Delete_Order_Items_By_Pk_Order_ItemsFragment = { __typename?: 'order_items', id: any, name: string };

export type Insert_Order_Items_Order_Items_Mutation_ResponseFragment = { __typename?: 'order_items_mutation_response', returning: Array<{ __typename?: 'order_items', id: any, name: string, orderId: any, price: number, quanitity: number }> };

export type Insert_Order_Items_One_Order_ItemsFragment = { __typename?: 'order_items', id: any, name: string };

export type Update_Order_Items_Order_Items_Mutation_ResponseFragment = { __typename?: 'order_items_mutation_response', returning: Array<{ __typename?: 'order_items', id: any, name: string, orderId: any, price: number, quanitity: number }> };

export type Update_Order_Items_By_Pk_Order_ItemsFragment = { __typename?: 'order_items', id: any, name: string };

export type OrdersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Orders_Select_Column> | Orders_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By> | Orders_Order_By>;
  where?: InputMaybe<Orders_Bool_Exp>;
}>;


export type OrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null }> };

export type Orders_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Orders_By_PkQuery = { __typename?: 'query_root', orders_by_pk?: { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null } | null };

export type Delete_OrdersMutationVariables = Exact<{
  where: Orders_Bool_Exp;
}>;


export type Delete_OrdersMutation = { __typename?: 'mutation_root', delete_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId: any, id: any, orderDate: any, orderStatus: string, shippedDate?: any | null }> } | null };

export type Delete_Orders_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Orders_By_PkMutation = { __typename?: 'mutation_root', delete_orders_by_pk?: { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null } | null };

export type Insert_OrdersMutationVariables = Exact<{
  orders: Array<Orders_Insert_Input> | Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type Insert_OrdersMutation = { __typename?: 'mutation_root', insert_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId: any, id: any, orderDate: any, orderStatus: string, shippedDate?: any | null }> } | null };

export type Insert_Orders_OneMutationVariables = Exact<{
  orders: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type Insert_Orders_OneMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null } | null };

export type Update_OrdersMutationVariables = Exact<{
  orders?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
}>;


export type Update_OrdersMutation = { __typename?: 'mutation_root', update_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId: any, id: any, orderDate: any, orderStatus: string, shippedDate?: any | null }> } | null };

export type Update_Orders_By_PkMutationVariables = Exact<{
  orders?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
}>;


export type Update_Orders_By_PkMutation = { __typename?: 'mutation_root', update_orders_by_pk?: { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null } | null };

export type Orders_OrdersFragment = { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null };

export type Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null };

export type Delete_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId: any, id: any, orderDate: any, orderStatus: string, shippedDate?: any | null }> };

export type Delete_Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null };

export type Insert_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId: any, id: any, orderDate: any, orderStatus: string, shippedDate?: any | null }> };

export type Insert_Orders_One_OrdersFragment = { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null };

export type Update_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId: any, id: any, orderDate: any, orderStatus: string, shippedDate?: any | null }> };

export type Update_Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: any, orderStatus: string, orderDate: any, shippedDate?: any | null };

export type CustomersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Customers_Select_Column> | Customers_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By> | Customers_Order_By>;
  where?: InputMaybe<Customers_Bool_Exp>;
}>;


export type CustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string }> };

export type Customers_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Customers_By_PkQuery = { __typename?: 'query_root', customers_by_pk?: { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string } | null };

export type Delete_CustomersMutationVariables = Exact<{
  where: Customers_Bool_Exp;
}>;


export type Delete_CustomersMutation = { __typename?: 'mutation_root', delete_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address: string, email: string, firstName: string, id: any, lastName: string, phone: string }> } | null };

export type Delete_Customers_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Customers_By_PkMutation = { __typename?: 'mutation_root', delete_customers_by_pk?: { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string } | null };

export type Insert_CustomersMutationVariables = Exact<{
  customers: Array<Customers_Insert_Input> | Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type Insert_CustomersMutation = { __typename?: 'mutation_root', insert_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address: string, email: string, firstName: string, id: any, lastName: string, phone: string }> } | null };

export type Insert_Customers_OneMutationVariables = Exact<{
  customers: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type Insert_Customers_OneMutation = { __typename?: 'mutation_root', insert_customers_one?: { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string } | null };

export type Update_CustomersMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
}>;


export type Update_CustomersMutation = { __typename?: 'mutation_root', update_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address: string, email: string, firstName: string, id: any, lastName: string, phone: string }> } | null };

export type Update_Customers_By_PkMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
}>;


export type Update_Customers_By_PkMutation = { __typename?: 'mutation_root', update_customers_by_pk?: { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string } | null };

export type Customers_CustomersFragment = { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string };

export type Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string };

export type Delete_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address: string, email: string, firstName: string, id: any, lastName: string, phone: string }> };

export type Delete_Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string };

export type Insert_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address: string, email: string, firstName: string, id: any, lastName: string, phone: string }> };

export type Insert_Customers_One_CustomersFragment = { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string };

export type Update_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address: string, email: string, firstName: string, id: any, lastName: string, phone: string }> };

export type Update_Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, address: string, email: string, firstName: string, lastName: string, phone: string };

export const Order_Items_Order_ItemsFragmentDoc = gql`
    fragment order_items_order_items on order_items {
  id
  name
}
    `;
export const Order_Items_By_Pk_Order_ItemsFragmentDoc = gql`
    fragment order_items_by_pk_order_items on order_items {
  id
  name
}
    `;
export const Delete_Order_Items_Order_Items_Mutation_ResponseFragmentDoc = gql`
    fragment delete_order_items_order_items_mutation_response on order_items_mutation_response {
  returning {
    id
    name
    orderId
    price
    quanitity
  }
}
    `;
export const Delete_Order_Items_By_Pk_Order_ItemsFragmentDoc = gql`
    fragment delete_order_items_by_pk_order_items on order_items {
  id
  name
}
    `;
export const Insert_Order_Items_Order_Items_Mutation_ResponseFragmentDoc = gql`
    fragment insert_order_items_order_items_mutation_response on order_items_mutation_response {
  returning {
    id
    name
    orderId
    price
    quanitity
  }
}
    `;
export const Insert_Order_Items_One_Order_ItemsFragmentDoc = gql`
    fragment insert_order_items_one_order_items on order_items {
  id
  name
}
    `;
export const Update_Order_Items_Order_Items_Mutation_ResponseFragmentDoc = gql`
    fragment update_order_items_order_items_mutation_response on order_items_mutation_response {
  returning {
    id
    name
    orderId
    price
    quanitity
  }
}
    `;
export const Update_Order_Items_By_Pk_Order_ItemsFragmentDoc = gql`
    fragment update_order_items_by_pk_order_items on order_items {
  id
  name
}
    `;
export const Orders_OrdersFragmentDoc = gql`
    fragment orders_orders on orders {
  id
  orderStatus
  orderDate
  shippedDate
}
    `;
export const Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment orders_by_pk_orders on orders {
  id
  orderStatus
  orderDate
  shippedDate
}
    `;
export const Delete_Orders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment delete_orders_orders_mutation_response on orders_mutation_response {
  returning {
    customerId
    id
    orderDate
    orderStatus
    shippedDate
  }
}
    `;
export const Delete_Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment delete_orders_by_pk_orders on orders {
  id
  orderStatus
  orderDate
  shippedDate
}
    `;
export const Insert_Orders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment insert_orders_orders_mutation_response on orders_mutation_response {
  returning {
    customerId
    id
    orderDate
    orderStatus
    shippedDate
  }
}
    `;
export const Insert_Orders_One_OrdersFragmentDoc = gql`
    fragment insert_orders_one_orders on orders {
  id
  orderStatus
  orderDate
  shippedDate
}
    `;
export const Update_Orders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment update_orders_orders_mutation_response on orders_mutation_response {
  returning {
    customerId
    id
    orderDate
    orderStatus
    shippedDate
  }
}
    `;
export const Update_Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment update_orders_by_pk_orders on orders {
  id
  orderStatus
  orderDate
  shippedDate
}
    `;
export const Customers_CustomersFragmentDoc = gql`
    fragment customers_customers on customers {
  id
  address
  email
  firstName
  lastName
  phone
}
    `;
export const Customers_By_Pk_CustomersFragmentDoc = gql`
    fragment customers_by_pk_customers on customers {
  id
  address
  email
  firstName
  lastName
  phone
}
    `;
export const Delete_Customers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment delete_customers_customers_mutation_response on customers_mutation_response {
  returning {
    address
    email
    firstName
    id
    lastName
    phone
  }
}
    `;
export const Delete_Customers_By_Pk_CustomersFragmentDoc = gql`
    fragment delete_customers_by_pk_customers on customers {
  id
  address
  email
  firstName
  lastName
  phone
}
    `;
export const Insert_Customers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment insert_customers_customers_mutation_response on customers_mutation_response {
  returning {
    address
    email
    firstName
    id
    lastName
    phone
  }
}
    `;
export const Insert_Customers_One_CustomersFragmentDoc = gql`
    fragment insert_customers_one_customers on customers {
  id
  address
  email
  firstName
  lastName
  phone
}
    `;
export const Update_Customers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment update_customers_customers_mutation_response on customers_mutation_response {
  returning {
    address
    email
    firstName
    id
    lastName
    phone
  }
}
    `;
export const Update_Customers_By_Pk_CustomersFragmentDoc = gql`
    fragment update_customers_by_pk_customers on customers {
  id
  address
  email
  firstName
  lastName
  phone
}
    `;
export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options?: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'>) {
  return Urql.useQuery<DummyQuery>({ query: DummyDocument, ...options });
};
export const Order_ItemsDocument = gql`
    query order_items($distinct_on: [order_items_select_column!], $limit: Int, $offset: Int, $order_by: [order_items_order_by!], $where: order_items_bool_exp) {
  order_items(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...order_items_order_items
  }
}
    ${Order_Items_Order_ItemsFragmentDoc}`;

export function useOrder_ItemsQuery(options?: Omit<Urql.UseQueryArgs<Order_ItemsQueryVariables>, 'query'>) {
  return Urql.useQuery<Order_ItemsQuery>({ query: Order_ItemsDocument, ...options });
};
export const Order_Items_By_PkDocument = gql`
    query order_items_by_pk($id: uuid!) {
  order_items_by_pk(id: $id) {
    ...order_items_by_pk_order_items
  }
}
    ${Order_Items_By_Pk_Order_ItemsFragmentDoc}`;

export function useOrder_Items_By_PkQuery(options: Omit<Urql.UseQueryArgs<Order_Items_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Order_Items_By_PkQuery>({ query: Order_Items_By_PkDocument, ...options });
};
export const Delete_Order_ItemsDocument = gql`
    mutation delete_order_items($where: order_items_bool_exp!) {
  delete_order_items(where: $where) {
    ...delete_order_items_order_items_mutation_response
  }
}
    ${Delete_Order_Items_Order_Items_Mutation_ResponseFragmentDoc}`;

export function useDelete_Order_ItemsMutation() {
  return Urql.useMutation<Delete_Order_ItemsMutation, Delete_Order_ItemsMutationVariables>(Delete_Order_ItemsDocument);
};
export const Delete_Order_Items_By_PkDocument = gql`
    mutation delete_order_items_by_pk($id: uuid!) {
  delete_order_items_by_pk(id: $id) {
    ...delete_order_items_by_pk_order_items
  }
}
    ${Delete_Order_Items_By_Pk_Order_ItemsFragmentDoc}`;

export function useDelete_Order_Items_By_PkMutation() {
  return Urql.useMutation<Delete_Order_Items_By_PkMutation, Delete_Order_Items_By_PkMutationVariables>(Delete_Order_Items_By_PkDocument);
};
export const Insert_Order_ItemsDocument = gql`
    mutation insert_order_items($order_items: [order_items_insert_input!]!, $on_conflict: order_items_on_conflict) {
  insert_order_items(objects: $order_items, on_conflict: $on_conflict) {
    ...insert_order_items_order_items_mutation_response
  }
}
    ${Insert_Order_Items_Order_Items_Mutation_ResponseFragmentDoc}`;

export function useInsert_Order_ItemsMutation() {
  return Urql.useMutation<Insert_Order_ItemsMutation, Insert_Order_ItemsMutationVariables>(Insert_Order_ItemsDocument);
};
export const Insert_Order_Items_OneDocument = gql`
    mutation insert_order_items_one($order_items: order_items_insert_input!, $on_conflict: order_items_on_conflict) {
  insert_order_items_one(object: $order_items, on_conflict: $on_conflict) {
    ...insert_order_items_one_order_items
  }
}
    ${Insert_Order_Items_One_Order_ItemsFragmentDoc}`;

export function useInsert_Order_Items_OneMutation() {
  return Urql.useMutation<Insert_Order_Items_OneMutation, Insert_Order_Items_OneMutationVariables>(Insert_Order_Items_OneDocument);
};
export const Update_Order_ItemsDocument = gql`
    mutation update_order_items($_inc: order_items_inc_input, $order_items: order_items_set_input, $where: order_items_bool_exp!) {
  update_order_items(_inc: $_inc, _set: $order_items, where: $where) {
    ...update_order_items_order_items_mutation_response
  }
}
    ${Update_Order_Items_Order_Items_Mutation_ResponseFragmentDoc}`;

export function useUpdate_Order_ItemsMutation() {
  return Urql.useMutation<Update_Order_ItemsMutation, Update_Order_ItemsMutationVariables>(Update_Order_ItemsDocument);
};
export const Update_Order_Items_By_PkDocument = gql`
    mutation update_order_items_by_pk($_inc: order_items_inc_input, $order_items: order_items_set_input, $pk_columns: order_items_pk_columns_input!) {
  update_order_items_by_pk(
    _inc: $_inc
    _set: $order_items
    pk_columns: $pk_columns
  ) {
    ...update_order_items_by_pk_order_items
  }
}
    ${Update_Order_Items_By_Pk_Order_ItemsFragmentDoc}`;

export function useUpdate_Order_Items_By_PkMutation() {
  return Urql.useMutation<Update_Order_Items_By_PkMutation, Update_Order_Items_By_PkMutationVariables>(Update_Order_Items_By_PkDocument);
};
export const OrdersDocument = gql`
    query orders($distinct_on: [orders_select_column!], $limit: Int, $offset: Int, $order_by: [orders_order_by!], $where: orders_bool_exp) {
  orders(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...orders_orders
  }
}
    ${Orders_OrdersFragmentDoc}`;

export function useOrdersQuery(options?: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};
export const Orders_By_PkDocument = gql`
    query orders_by_pk($id: uuid!) {
  orders_by_pk(id: $id) {
    ...orders_by_pk_orders
  }
}
    ${Orders_By_Pk_OrdersFragmentDoc}`;

export function useOrders_By_PkQuery(options: Omit<Urql.UseQueryArgs<Orders_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Orders_By_PkQuery>({ query: Orders_By_PkDocument, ...options });
};
export const Delete_OrdersDocument = gql`
    mutation delete_orders($where: orders_bool_exp!) {
  delete_orders(where: $where) {
    ...delete_orders_orders_mutation_response
  }
}
    ${Delete_Orders_Orders_Mutation_ResponseFragmentDoc}`;

export function useDelete_OrdersMutation() {
  return Urql.useMutation<Delete_OrdersMutation, Delete_OrdersMutationVariables>(Delete_OrdersDocument);
};
export const Delete_Orders_By_PkDocument = gql`
    mutation delete_orders_by_pk($id: uuid!) {
  delete_orders_by_pk(id: $id) {
    ...delete_orders_by_pk_orders
  }
}
    ${Delete_Orders_By_Pk_OrdersFragmentDoc}`;

export function useDelete_Orders_By_PkMutation() {
  return Urql.useMutation<Delete_Orders_By_PkMutation, Delete_Orders_By_PkMutationVariables>(Delete_Orders_By_PkDocument);
};
export const Insert_OrdersDocument = gql`
    mutation insert_orders($orders: [orders_insert_input!]!, $on_conflict: orders_on_conflict) {
  insert_orders(objects: $orders, on_conflict: $on_conflict) {
    ...insert_orders_orders_mutation_response
  }
}
    ${Insert_Orders_Orders_Mutation_ResponseFragmentDoc}`;

export function useInsert_OrdersMutation() {
  return Urql.useMutation<Insert_OrdersMutation, Insert_OrdersMutationVariables>(Insert_OrdersDocument);
};
export const Insert_Orders_OneDocument = gql`
    mutation insert_orders_one($orders: orders_insert_input!, $on_conflict: orders_on_conflict) {
  insert_orders_one(object: $orders, on_conflict: $on_conflict) {
    ...insert_orders_one_orders
  }
}
    ${Insert_Orders_One_OrdersFragmentDoc}`;

export function useInsert_Orders_OneMutation() {
  return Urql.useMutation<Insert_Orders_OneMutation, Insert_Orders_OneMutationVariables>(Insert_Orders_OneDocument);
};
export const Update_OrdersDocument = gql`
    mutation update_orders($orders: orders_set_input, $where: orders_bool_exp!) {
  update_orders(_set: $orders, where: $where) {
    ...update_orders_orders_mutation_response
  }
}
    ${Update_Orders_Orders_Mutation_ResponseFragmentDoc}`;

export function useUpdate_OrdersMutation() {
  return Urql.useMutation<Update_OrdersMutation, Update_OrdersMutationVariables>(Update_OrdersDocument);
};
export const Update_Orders_By_PkDocument = gql`
    mutation update_orders_by_pk($orders: orders_set_input, $pk_columns: orders_pk_columns_input!) {
  update_orders_by_pk(_set: $orders, pk_columns: $pk_columns) {
    ...update_orders_by_pk_orders
  }
}
    ${Update_Orders_By_Pk_OrdersFragmentDoc}`;

export function useUpdate_Orders_By_PkMutation() {
  return Urql.useMutation<Update_Orders_By_PkMutation, Update_Orders_By_PkMutationVariables>(Update_Orders_By_PkDocument);
};
export const CustomersDocument = gql`
    query customers($distinct_on: [customers_select_column!], $limit: Int, $offset: Int, $order_by: [customers_order_by!], $where: customers_bool_exp) {
  customers(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...customers_customers
  }
}
    ${Customers_CustomersFragmentDoc}`;

export function useCustomersQuery(options?: Omit<Urql.UseQueryArgs<CustomersQueryVariables>, 'query'>) {
  return Urql.useQuery<CustomersQuery>({ query: CustomersDocument, ...options });
};
export const Customers_By_PkDocument = gql`
    query customers_by_pk($id: uuid!) {
  customers_by_pk(id: $id) {
    ...customers_by_pk_customers
  }
}
    ${Customers_By_Pk_CustomersFragmentDoc}`;

export function useCustomers_By_PkQuery(options: Omit<Urql.UseQueryArgs<Customers_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Customers_By_PkQuery>({ query: Customers_By_PkDocument, ...options });
};
export const Delete_CustomersDocument = gql`
    mutation delete_customers($where: customers_bool_exp!) {
  delete_customers(where: $where) {
    ...delete_customers_customers_mutation_response
  }
}
    ${Delete_Customers_Customers_Mutation_ResponseFragmentDoc}`;

export function useDelete_CustomersMutation() {
  return Urql.useMutation<Delete_CustomersMutation, Delete_CustomersMutationVariables>(Delete_CustomersDocument);
};
export const Delete_Customers_By_PkDocument = gql`
    mutation delete_customers_by_pk($id: uuid!) {
  delete_customers_by_pk(id: $id) {
    ...delete_customers_by_pk_customers
  }
}
    ${Delete_Customers_By_Pk_CustomersFragmentDoc}`;

export function useDelete_Customers_By_PkMutation() {
  return Urql.useMutation<Delete_Customers_By_PkMutation, Delete_Customers_By_PkMutationVariables>(Delete_Customers_By_PkDocument);
};
export const Insert_CustomersDocument = gql`
    mutation insert_customers($customers: [customers_insert_input!]!, $on_conflict: customers_on_conflict) {
  insert_customers(objects: $customers, on_conflict: $on_conflict) {
    ...insert_customers_customers_mutation_response
  }
}
    ${Insert_Customers_Customers_Mutation_ResponseFragmentDoc}`;

export function useInsert_CustomersMutation() {
  return Urql.useMutation<Insert_CustomersMutation, Insert_CustomersMutationVariables>(Insert_CustomersDocument);
};
export const Insert_Customers_OneDocument = gql`
    mutation insert_customers_one($customers: customers_insert_input!, $on_conflict: customers_on_conflict) {
  insert_customers_one(object: $customers, on_conflict: $on_conflict) {
    ...insert_customers_one_customers
  }
}
    ${Insert_Customers_One_CustomersFragmentDoc}`;

export function useInsert_Customers_OneMutation() {
  return Urql.useMutation<Insert_Customers_OneMutation, Insert_Customers_OneMutationVariables>(Insert_Customers_OneDocument);
};
export const Update_CustomersDocument = gql`
    mutation update_customers($customers: customers_set_input, $where: customers_bool_exp!) {
  update_customers(_set: $customers, where: $where) {
    ...update_customers_customers_mutation_response
  }
}
    ${Update_Customers_Customers_Mutation_ResponseFragmentDoc}`;

export function useUpdate_CustomersMutation() {
  return Urql.useMutation<Update_CustomersMutation, Update_CustomersMutationVariables>(Update_CustomersDocument);
};
export const Update_Customers_By_PkDocument = gql`
    mutation update_customers_by_pk($customers: customers_set_input, $pk_columns: customers_pk_columns_input!) {
  update_customers_by_pk(_set: $customers, pk_columns: $pk_columns) {
    ...update_customers_by_pk_customers
  }
}
    ${Update_Customers_By_Pk_CustomersFragmentDoc}`;

export function useUpdate_Customers_By_PkMutation() {
  return Urql.useMutation<Update_Customers_By_PkMutation, Update_Customers_By_PkMutationVariables>(Update_Customers_By_PkDocument);
};