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
  money: any;
  uuid: any;
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
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  lastName?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phone?: Maybe<Scalars['String']>;
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

export type Money_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _cast?: InputMaybe<Money_Cast_Exp>;
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "order_items" */
  delete_orderItems?: Maybe<OrderItems_Mutation_Response>;
  /** delete single row from the table: "order_items" */
  delete_orderItems_by_pk?: Maybe<OrderItems>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "status_types" */
  delete_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** delete single row from the table: "status_types" */
  delete_status_types_by_pk?: Maybe<Status_Types>;
  /** delete data from the table: "test" */
  delete_test?: Maybe<Test_Mutation_Response>;
  /** delete single row from the table: "test" */
  delete_test_by_pk?: Maybe<Test>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "order_items" */
  insert_orderItems?: Maybe<OrderItems_Mutation_Response>;
  /** insert a single row into the table: "order_items" */
  insert_orderItems_one?: Maybe<OrderItems>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "status_types" */
  insert_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** insert a single row into the table: "status_types" */
  insert_status_types_one?: Maybe<Status_Types>;
  /** insert data into the table: "test" */
  insert_test?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test" */
  insert_test_one?: Maybe<Test>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "order_items" */
  update_orderItems?: Maybe<OrderItems_Mutation_Response>;
  /** update single row of the table: "order_items" */
  update_orderItems_by_pk?: Maybe<OrderItems>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "status_types" */
  update_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** update single row of the table: "status_types" */
  update_status_types_by_pk?: Maybe<Status_Types>;
  /** update data of the table: "test" */
  update_test?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test" */
  update_test_by_pk?: Maybe<Test>;
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
export type Mutation_RootDelete_OrderItemsArgs = {
  where: OrderItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrderItems_By_PkArgs = {
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
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Status_TypesArgs = {
  where: Status_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_Types_By_PkArgs = {
  status: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TestArgs = {
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootInsert_OrderItemsArgs = {
  objects: Array<OrderItems_Insert_Input>;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderItems_OneArgs = {
  object: OrderItems_Insert_Input;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
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
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_TypesArgs = {
  objects: Array<Status_Types_Insert_Input>;
  on_conflict?: InputMaybe<Status_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_Types_OneArgs = {
  object: Status_Types_Insert_Input;
  on_conflict?: InputMaybe<Status_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
  object: Test_Insert_Input;
  on_conflict?: InputMaybe<Test_On_Conflict>;
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
export type Mutation_RootUpdate_OrderItemsArgs = {
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  _set?: InputMaybe<OrderItems_Set_Input>;
  where: OrderItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrderItems_By_PkArgs = {
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  _set?: InputMaybe<OrderItems_Set_Input>;
  pk_columns: OrderItems_Pk_Columns_Input;
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


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Status_TypesArgs = {
  _set?: InputMaybe<Status_Types_Set_Input>;
  where: Status_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_Types_By_PkArgs = {
  _set?: InputMaybe<Status_Types_Set_Input>;
  pk_columns: Status_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};

/** List of items */
export type OrderItems = {
  __typename?: 'orderItems';
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  orders?: Maybe<Orders>;
  ordersId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  productId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  products?: Maybe<Products>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "order_items" */
export type OrderItems_Aggregate = {
  __typename?: 'orderItems_aggregate';
  aggregate?: Maybe<OrderItems_Aggregate_Fields>;
  nodes: Array<OrderItems>;
};

/** aggregate fields of "order_items" */
export type OrderItems_Aggregate_Fields = {
  __typename?: 'orderItems_aggregate_fields';
  avg?: Maybe<OrderItems_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<OrderItems_Max_Fields>;
  min?: Maybe<OrderItems_Min_Fields>;
  stddev?: Maybe<OrderItems_Stddev_Fields>;
  stddev_pop?: Maybe<OrderItems_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<OrderItems_Stddev_Samp_Fields>;
  sum?: Maybe<OrderItems_Sum_Fields>;
  var_pop?: Maybe<OrderItems_Var_Pop_Fields>;
  var_samp?: Maybe<OrderItems_Var_Samp_Fields>;
  variance?: Maybe<OrderItems_Variance_Fields>;
};


/** aggregate fields of "order_items" */
export type OrderItems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OrderItems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_items" */
export type OrderItems_Aggregate_Order_By = {
  avg?: InputMaybe<OrderItems_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<OrderItems_Max_Order_By>;
  min?: InputMaybe<OrderItems_Min_Order_By>;
  stddev?: InputMaybe<OrderItems_Stddev_Order_By>;
  stddev_pop?: InputMaybe<OrderItems_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<OrderItems_Stddev_Samp_Order_By>;
  sum?: InputMaybe<OrderItems_Sum_Order_By>;
  var_pop?: InputMaybe<OrderItems_Var_Pop_Order_By>;
  var_samp?: InputMaybe<OrderItems_Var_Samp_Order_By>;
  variance?: InputMaybe<OrderItems_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_items" */
export type OrderItems_Arr_Rel_Insert_Input = {
  data: Array<OrderItems_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
};

/** aggregate avg on columns */
export type OrderItems_Avg_Fields = {
  __typename?: 'orderItems_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_items" */
export type OrderItems_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_items". All fields are combined with a logical 'AND'. */
export type OrderItems_Bool_Exp = {
  _and?: InputMaybe<Array<OrderItems_Bool_Exp>>;
  _not?: InputMaybe<OrderItems_Bool_Exp>;
  _or?: InputMaybe<Array<OrderItems_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  ordersId?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  productId?: InputMaybe<Uuid_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_items" */
export enum OrderItems_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = 'order_items_pkey'
}

/** input type for incrementing numeric columns in table "order_items" */
export type OrderItems_Inc_Input = {
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_items" */
export type OrderItems_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  ordersId?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  productId?: InputMaybe<Scalars['uuid']>;
  products?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type OrderItems_Max_Fields = {
  __typename?: 'orderItems_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  ordersId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  productId?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "order_items" */
export type OrderItems_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ordersId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type OrderItems_Min_Fields = {
  __typename?: 'orderItems_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  ordersId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  productId?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "order_items" */
export type OrderItems_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ordersId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_items" */
export type OrderItems_Mutation_Response = {
  __typename?: 'orderItems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrderItems>;
};

/** on_conflict condition type for table "order_items" */
export type OrderItems_On_Conflict = {
  constraint: OrderItems_Constraint;
  update_columns?: Array<OrderItems_Update_Column>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};

/** Ordering options when selecting data from "order_items". */
export type OrderItems_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders?: InputMaybe<Orders_Order_By>;
  ordersId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  products?: InputMaybe<Products_Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orderItems */
export type OrderItems_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_items" */
export enum OrderItems_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrdersId = 'ordersId',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "order_items" */
export type OrderItems_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  ordersId?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  productId?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type OrderItems_Stddev_Fields = {
  __typename?: 'orderItems_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_items" */
export type OrderItems_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type OrderItems_Stddev_Pop_Fields = {
  __typename?: 'orderItems_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_items" */
export type OrderItems_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type OrderItems_Stddev_Samp_Fields = {
  __typename?: 'orderItems_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_items" */
export type OrderItems_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type OrderItems_Sum_Fields = {
  __typename?: 'orderItems_sum_fields';
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_items" */
export type OrderItems_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "order_items" */
export enum OrderItems_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrdersId = 'ordersId',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type OrderItems_Var_Pop_Fields = {
  __typename?: 'orderItems_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_items" */
export type OrderItems_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type OrderItems_Var_Samp_Fields = {
  __typename?: 'orderItems_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_items" */
export type OrderItems_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type OrderItems_Variance_Fields = {
  __typename?: 'orderItems_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_items" */
export type OrderItems_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
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

/** List of orders */
export type Orders = {
  __typename?: 'orders';
  /** An object relationship */
  customer?: Maybe<Customers>;
  customerId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  orderDate?: Maybe<Scalars['date']>;
  /** An array relationship */
  orderItems: Array<OrderItems>;
  /** An aggregate relationship */
  orderItems_aggregate: OrderItems_Aggregate;
  orderStatus?: Maybe<Status_Types_Enum>;
  shippedDate?: Maybe<Scalars['date']>;
  /** An object relationship */
  statusTypes?: Maybe<Status_Types>;
};


/** List of orders */
export type OrdersOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


/** List of orders */
export type OrdersOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
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
  orderItems?: InputMaybe<OrderItems_Bool_Exp>;
  orderStatus?: InputMaybe<Status_Types_Enum_Comparison_Exp>;
  shippedDate?: InputMaybe<Date_Comparison_Exp>;
  statusTypes?: InputMaybe<Status_Types_Bool_Exp>;
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
  orderItems?: InputMaybe<OrderItems_Arr_Rel_Insert_Input>;
  orderStatus?: InputMaybe<Status_Types_Enum>;
  shippedDate?: InputMaybe<Scalars['date']>;
  statusTypes?: InputMaybe<Status_Types_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  customerId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  orderDate?: Maybe<Scalars['date']>;
  shippedDate?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  customerId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  shippedDate?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  customerId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  orderDate?: Maybe<Scalars['date']>;
  shippedDate?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  customerId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
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
  orderItems_aggregate?: InputMaybe<OrderItems_Aggregate_Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  shippedDate?: InputMaybe<Order_By>;
  statusTypes?: InputMaybe<Status_Types_Order_By>;
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
  orderStatus?: InputMaybe<Status_Types_Enum>;
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

/** Types of products */
export type Products = {
  __typename?: 'products';
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  orderItems: Array<OrderItems>;
  /** An aggregate relationship */
  orderItems_aggregate: OrderItems_Aggregate;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};


/** Types of products */
export type ProductsOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


/** Types of products */
export type ProductsOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderItems?: InputMaybe<OrderItems_Bool_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orderItems?: InputMaybe<OrderItems_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderItems_aggregate?: InputMaybe<OrderItems_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  orderItems: Array<OrderItems>;
  /** An aggregate relationship */
  orderItems_aggregate: OrderItems_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  orderItems_by_pk?: Maybe<OrderItems>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
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


export type Query_RootOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Query_RootOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Query_RootOrderItems_By_PkArgs = {
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


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStatus_TypesArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Query_RootStatus_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Query_RootStatus_Types_By_PkArgs = {
  status: Scalars['String'];
};


export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "status_types" */
export type Status_Types = {
  __typename?: 'status_types';
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  status: Scalars['String'];
};


/** columns and relationships of "status_types" */
export type Status_TypesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "status_types" */
export type Status_TypesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "status_types" */
export type Status_Types_Aggregate = {
  __typename?: 'status_types_aggregate';
  aggregate?: Maybe<Status_Types_Aggregate_Fields>;
  nodes: Array<Status_Types>;
};

/** aggregate fields of "status_types" */
export type Status_Types_Aggregate_Fields = {
  __typename?: 'status_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Status_Types_Max_Fields>;
  min?: Maybe<Status_Types_Min_Fields>;
};


/** aggregate fields of "status_types" */
export type Status_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Status_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "status_types". All fields are combined with a logical 'AND'. */
export type Status_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Status_Types_Bool_Exp>>;
  _not?: InputMaybe<Status_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Status_Types_Bool_Exp>>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "status_types" */
export enum Status_Types_Constraint {
  /** unique or primary key constraint on columns "status" */
  StatusTypesPkey = 'status_types_pkey'
}

export enum Status_Types_Enum {
  Delivered = 'Delivered',
  Paid = 'Paid',
  Shipped = 'Shipped'
}

/** Boolean expression to compare columns of type "status_types_enum". All fields are combined with logical 'AND'. */
export type Status_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Status_Types_Enum>;
  _in?: InputMaybe<Array<Status_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Status_Types_Enum>;
  _nin?: InputMaybe<Array<Status_Types_Enum>>;
};

/** input type for inserting data into table "status_types" */
export type Status_Types_Insert_Input = {
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Status_Types_Max_Fields = {
  __typename?: 'status_types_max_fields';
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Status_Types_Min_Fields = {
  __typename?: 'status_types_min_fields';
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "status_types" */
export type Status_Types_Mutation_Response = {
  __typename?: 'status_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Status_Types>;
};

/** input type for inserting object relation for remote table "status_types" */
export type Status_Types_Obj_Rel_Insert_Input = {
  data: Status_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Status_Types_On_Conflict>;
};

/** on_conflict condition type for table "status_types" */
export type Status_Types_On_Conflict = {
  constraint: Status_Types_Constraint;
  update_columns?: Array<Status_Types_Update_Column>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "status_types". */
export type Status_Types_Order_By = {
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: status_types */
export type Status_Types_Pk_Columns_Input = {
  status: Scalars['String'];
};

/** select columns of table "status_types" */
export enum Status_Types_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "status_types" */
export type Status_Types_Set_Input = {
  status?: InputMaybe<Scalars['String']>;
};

/** update columns of table "status_types" */
export enum Status_Types_Update_Column {
  /** column name */
  Status = 'status'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  orderItems: Array<OrderItems>;
  /** An aggregate relationship */
  orderItems_aggregate: OrderItems_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  orderItems_by_pk?: Maybe<OrderItems>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
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


export type Subscription_RootOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Subscription_RootOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Subscription_RootOrderItems_By_PkArgs = {
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


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStatus_TypesArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Subscription_RootStatus_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Subscription_RootStatus_Types_By_PkArgs = {
  status: Scalars['String'];
};


export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  id: Scalars['uuid'];
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
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestPkey = 'test_pkey'
}

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  id?: Maybe<Scalars['uuid']>;
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
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test" */
export enum Test_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "test" */
export enum Test_Update_Column {
  /** column name */
  Id = 'id'
}

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

export type ProductsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Products_Select_Column> | Products_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By> | Products_Order_By>;
  where?: InputMaybe<Products_Bool_Exp>;
}>;


export type ProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name?: string | null, quantity?: number | null, price?: any | null, orderItems_aggregate: { __typename?: 'orderItems_aggregate', aggregate?: { __typename?: 'orderItems_aggregate_fields', count: number } | null } }> };

export type Products_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Products_By_PkQuery = { __typename?: 'query_root', products_by_pk?: { __typename?: 'products', id: any, name?: string | null, quantity?: number | null, price?: any | null, orderItems: Array<{ __typename?: 'orderItems', name?: string | null, id: any, quantity?: number | null, price?: any | null, orders?: { __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any } | null }> } | null };

export type Delete_ProductsMutationVariables = Exact<{
  where: Products_Bool_Exp;
}>;


export type Delete_ProductsMutation = { __typename?: 'mutation_root', delete_products?: { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', id: any, name?: string | null, price?: any | null, quantity?: number | null }> } | null };

export type Delete_Products_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Products_By_PkMutation = { __typename?: 'mutation_root', delete_products_by_pk?: { __typename?: 'products', id: any, name?: string | null } | null };

export type Insert_ProductsMutationVariables = Exact<{
  products: Array<Products_Insert_Input> | Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
}>;


export type Insert_ProductsMutation = { __typename?: 'mutation_root', insert_products?: { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', id: any, name?: string | null, price?: any | null, quantity?: number | null }> } | null };

export type Insert_Products_OneMutationVariables = Exact<{
  products: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
}>;


export type Insert_Products_OneMutation = { __typename?: 'mutation_root', insert_products_one?: { __typename?: 'products', id: any, name?: string | null } | null };

export type Update_ProductsMutationVariables = Exact<{
  _inc?: InputMaybe<Products_Inc_Input>;
  products?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
}>;


export type Update_ProductsMutation = { __typename?: 'mutation_root', update_products?: { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', id: any, name?: string | null, price?: any | null, quantity?: number | null }> } | null };

export type Update_Products_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Products_Inc_Input>;
  products?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
}>;


export type Update_Products_By_PkMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', id: any, name?: string | null } | null };

export type Products_ProductsFragment = { __typename?: 'products', id: any, name?: string | null, quantity?: number | null, price?: any | null };

export type Products_By_Pk_ProductsFragment = { __typename?: 'products', id: any, name?: string | null, quantity?: number | null, price?: any | null };

export type Delete_Products_Products_Mutation_ResponseFragment = { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', id: any, name?: string | null, price?: any | null, quantity?: number | null }> };

export type Delete_Products_By_Pk_ProductsFragment = { __typename?: 'products', id: any, name?: string | null };

export type Insert_Products_Products_Mutation_ResponseFragment = { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', id: any, name?: string | null, price?: any | null, quantity?: number | null }> };

export type Insert_Products_One_ProductsFragment = { __typename?: 'products', id: any, name?: string | null };

export type Update_Products_Products_Mutation_ResponseFragment = { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', id: any, name?: string | null, price?: any | null, quantity?: number | null }> };

export type Update_Products_By_Pk_ProductsFragment = { __typename?: 'products', id: any, name?: string | null };

export type Products_By_Pk_OrderItemsFragment = { __typename?: 'orderItems', name?: string | null, id: any, quantity?: number | null, price?: any | null };

export type Products_By_Pk_OrderItems_OrdersFragment = { __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any };

export type Products_OrderItems_Aggregate_AggregateFragment = { __typename?: 'orderItems_aggregate_fields', count: number };

export type OrderItemsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column> | OrderItems_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By> | OrderItems_Order_By>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
}>;


export type OrderItemsQuery = { __typename?: 'query_root', orderItems: Array<{ __typename?: 'orderItems', id: any, name?: string | null, quantity?: number | null, price?: any | null }> };

export type OrderItems_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type OrderItems_By_PkQuery = { __typename?: 'query_root', orderItems_by_pk?: { __typename?: 'orderItems', id: any, name?: string | null, quantity?: number | null, price?: any | null, products?: { __typename?: 'products', quantity?: number | null, id: any } | null, orders?: { __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any, orderDate?: any | null, shippedDate?: any | null } | null } | null };

export type Delete_OrderItemsMutationVariables = Exact<{
  where: OrderItems_Bool_Exp;
}>;


export type Delete_OrderItemsMutation = { __typename?: 'mutation_root', delete_orderItems?: { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', id: any, name?: string | null, ordersId?: any | null, price?: any | null, productId?: any | null, quantity?: number | null }> } | null };

export type Delete_OrderItems_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_OrderItems_By_PkMutation = { __typename?: 'mutation_root', delete_orderItems_by_pk?: { __typename?: 'orderItems', id: any, name?: string | null } | null };

export type Insert_OrderItemsMutationVariables = Exact<{
  orderItems: Array<OrderItems_Insert_Input> | OrderItems_Insert_Input;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
}>;


export type Insert_OrderItemsMutation = { __typename?: 'mutation_root', insert_orderItems?: { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', id: any, name?: string | null, ordersId?: any | null, price?: any | null, productId?: any | null, quantity?: number | null }> } | null };

export type Insert_OrderItems_OneMutationVariables = Exact<{
  orderItems: OrderItems_Insert_Input;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
}>;


export type Insert_OrderItems_OneMutation = { __typename?: 'mutation_root', insert_orderItems_one?: { __typename?: 'orderItems', id: any, name?: string | null } | null };

export type Update_OrderItemsMutationVariables = Exact<{
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  orderItems?: InputMaybe<OrderItems_Set_Input>;
  where: OrderItems_Bool_Exp;
}>;


export type Update_OrderItemsMutation = { __typename?: 'mutation_root', update_orderItems?: { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', id: any, name?: string | null, ordersId?: any | null, price?: any | null, productId?: any | null, quantity?: number | null }> } | null };

export type Update_OrderItems_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  orderItems?: InputMaybe<OrderItems_Set_Input>;
  pk_columns: OrderItems_Pk_Columns_Input;
}>;


export type Update_OrderItems_By_PkMutation = { __typename?: 'mutation_root', update_orderItems_by_pk?: { __typename?: 'orderItems', id: any, name?: string | null } | null };

export type OrderItems_OrderItemsFragment = { __typename?: 'orderItems', id: any, name?: string | null, quantity?: number | null, price?: any | null };

export type OrderItems_By_Pk_OrderItemsFragment = { __typename?: 'orderItems', id: any, name?: string | null, quantity?: number | null, price?: any | null };

export type Delete_OrderItems_OrderItems_Mutation_ResponseFragment = { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', id: any, name?: string | null, ordersId?: any | null, price?: any | null, productId?: any | null, quantity?: number | null }> };

export type Delete_OrderItems_By_Pk_OrderItemsFragment = { __typename?: 'orderItems', id: any, name?: string | null };

export type Insert_OrderItems_OrderItems_Mutation_ResponseFragment = { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', id: any, name?: string | null, ordersId?: any | null, price?: any | null, productId?: any | null, quantity?: number | null }> };

export type Insert_OrderItems_One_OrderItemsFragment = { __typename?: 'orderItems', id: any, name?: string | null };

export type Update_OrderItems_OrderItems_Mutation_ResponseFragment = { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', id: any, name?: string | null, ordersId?: any | null, price?: any | null, productId?: any | null, quantity?: number | null }> };

export type Update_OrderItems_By_Pk_OrderItemsFragment = { __typename?: 'orderItems', id: any, name?: string | null };

export type OrderItems_By_Pk_ProductsFragment = { __typename?: 'products', quantity?: number | null, id: any };

export type OrderItems_By_Pk_OrdersFragment = { __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any, orderDate?: any | null, shippedDate?: any | null };

export type OrdersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Orders_Select_Column> | Orders_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By> | Orders_Order_By>;
  where?: InputMaybe<Orders_Bool_Exp>;
}>;


export type OrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any, orderDate?: any | null, shippedDate?: any | null, orderItems_aggregate: { __typename?: 'orderItems_aggregate', aggregate?: { __typename?: 'orderItems_aggregate_fields', count: number } | null } }> };

export type Orders_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Orders_By_PkQuery = { __typename?: 'query_root', orders_by_pk?: { __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any, orderDate?: any | null, shippedDate?: any | null, orderItems: Array<{ __typename?: 'orderItems', name?: string | null, id: any, quantity?: number | null, price?: any | null, products?: { __typename?: 'products', quantity?: number | null, id: any } | null }> } | null };

export type Delete_OrdersMutationVariables = Exact<{
  where: Orders_Bool_Exp;
}>;


export type Delete_OrdersMutation = { __typename?: 'mutation_root', delete_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId?: any | null, id: any, orderDate?: any | null, shippedDate?: any | null }> } | null };

export type Delete_Orders_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Orders_By_PkMutation = { __typename?: 'mutation_root', delete_orders_by_pk?: { __typename?: 'orders', id: any, orderDate?: any | null, shippedDate?: any | null } | null };

export type Insert_OrdersMutationVariables = Exact<{
  orders: Array<Orders_Insert_Input> | Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type Insert_OrdersMutation = { __typename?: 'mutation_root', insert_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId?: any | null, id: any, orderDate?: any | null, shippedDate?: any | null }> } | null };

export type Insert_Orders_OneMutationVariables = Exact<{
  orders: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type Insert_Orders_OneMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', id: any, orderDate?: any | null, shippedDate?: any | null } | null };

export type Update_OrdersMutationVariables = Exact<{
  orders?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
}>;


export type Update_OrdersMutation = { __typename?: 'mutation_root', update_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId?: any | null, id: any, orderDate?: any | null, shippedDate?: any | null }> } | null };

export type Update_Orders_By_PkMutationVariables = Exact<{
  orders?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
}>;


export type Update_Orders_By_PkMutation = { __typename?: 'mutation_root', update_orders_by_pk?: { __typename?: 'orders', id: any, orderDate?: any | null, shippedDate?: any | null } | null };

export type Orders_OrdersFragment = { __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any, orderDate?: any | null, shippedDate?: any | null };

export type Orders_By_Pk_OrdersFragment = { __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any, orderDate?: any | null, shippedDate?: any | null };

export type Delete_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId?: any | null, id: any, orderDate?: any | null, shippedDate?: any | null }> };

export type Delete_Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: any, orderDate?: any | null, shippedDate?: any | null };

export type Insert_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId?: any | null, id: any, orderDate?: any | null, shippedDate?: any | null }> };

export type Insert_Orders_One_OrdersFragment = { __typename?: 'orders', id: any, orderDate?: any | null, shippedDate?: any | null };

export type Update_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', customerId?: any | null, id: any, orderDate?: any | null, shippedDate?: any | null }> };

export type Update_Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: any, orderDate?: any | null, shippedDate?: any | null };

export type Orders_By_Pk_OrderItemsFragment = { __typename?: 'orderItems', name?: string | null, id: any, quantity?: number | null, price?: any | null };

export type Orders_By_Pk_OrderItems_ProductsFragment = { __typename?: 'products', quantity?: number | null, id: any };

export type Orders_OrderItems_Aggregate_AggregateFragment = { __typename?: 'orderItems_aggregate_fields', count: number };

export type CustomersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Customers_Select_Column> | Customers_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By> | Customers_Order_By>;
  where?: InputMaybe<Customers_Bool_Exp>;
}>;


export type CustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', id: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, address?: string | null, orders_aggregate: { __typename?: 'orders_aggregate', aggregate?: { __typename?: 'orders_aggregate_fields', count: number } | null } }> };

export type Customers_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Customers_By_PkQuery = { __typename?: 'query_root', customers_by_pk?: { __typename?: 'customers', id: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, address?: string | null, orders: Array<{ __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any, orderDate?: any | null, shippedDate?: any | null, orderItems_aggregate: { __typename?: 'orderItems_aggregate', aggregate?: { __typename?: 'orderItems_aggregate_fields', count: number } | null } }> } | null };

export type Delete_CustomersMutationVariables = Exact<{
  where: Customers_Bool_Exp;
}>;


export type Delete_CustomersMutation = { __typename?: 'mutation_root', delete_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, email?: string | null, firstName?: string | null, id: any, lastName?: string | null, phone?: string | null }> } | null };

export type Delete_Customers_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Customers_By_PkMutation = { __typename?: 'mutation_root', delete_customers_by_pk?: { __typename?: 'customers', id: any, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null } | null };

export type Insert_CustomersMutationVariables = Exact<{
  customers: Array<Customers_Insert_Input> | Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type Insert_CustomersMutation = { __typename?: 'mutation_root', insert_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, email?: string | null, firstName?: string | null, id: any, lastName?: string | null, phone?: string | null }> } | null };

export type Insert_Customers_OneMutationVariables = Exact<{
  customers: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type Insert_Customers_OneMutation = { __typename?: 'mutation_root', insert_customers_one?: { __typename?: 'customers', id: any, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null } | null };

export type Update_CustomersMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
}>;


export type Update_CustomersMutation = { __typename?: 'mutation_root', update_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', firstName?: string | null, address?: string | null, email?: string | null, id: any, lastName?: string | null, phone?: string | null }> } | null };

export type Update_Customers_By_PkMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
}>;


export type Update_Customers_By_PkMutation = { __typename?: 'mutation_root', update_customers_by_pk?: { __typename?: 'customers', id: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, address?: string | null } | null };

export type Customers_CustomersFragment = { __typename?: 'customers', id: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, address?: string | null };

export type Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, address?: string | null };

export type Delete_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, email?: string | null, firstName?: string | null, id: any, lastName?: string | null, phone?: string | null }> };

export type Delete_Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null };

export type Insert_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, email?: string | null, firstName?: string | null, id: any, lastName?: string | null, phone?: string | null }> };

export type Insert_Customers_One_CustomersFragment = { __typename?: 'customers', id: any, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null };

export type Update_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', firstName?: string | null, address?: string | null, email?: string | null, id: any, lastName?: string | null, phone?: string | null }> };

export type Update_Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, address?: string | null };

export type Customers_By_Pk_OrdersFragment = { __typename?: 'orders', orderStatus?: Status_Types_Enum | null, id: any, orderDate?: any | null, shippedDate?: any | null };

export type Customers_Orders_Aggregate_AggregateFragment = { __typename?: 'orders_aggregate_fields', count: number };

export type Customers_By_Pk_Orders_OrderItems_Aggregate_AggregateFragment = { __typename?: 'orderItems_aggregate_fields', count: number };

export const Products_ProductsFragmentDoc = gql`
    fragment products_products on products {
  id
  name
  quantity
  price
}
    `;
export const Products_By_Pk_ProductsFragmentDoc = gql`
    fragment products_by_pk_products on products {
  id
  name
  quantity
  price
}
    `;
export const Delete_Products_Products_Mutation_ResponseFragmentDoc = gql`
    fragment delete_products_products_mutation_response on products_mutation_response {
  returning {
    id
    name
    price
    quantity
  }
}
    `;
export const Delete_Products_By_Pk_ProductsFragmentDoc = gql`
    fragment delete_products_by_pk_products on products {
  id
  name
}
    `;
export const Insert_Products_Products_Mutation_ResponseFragmentDoc = gql`
    fragment insert_products_products_mutation_response on products_mutation_response {
  returning {
    id
    name
    price
    quantity
  }
}
    `;
export const Insert_Products_One_ProductsFragmentDoc = gql`
    fragment insert_products_one_products on products {
  id
  name
}
    `;
export const Update_Products_Products_Mutation_ResponseFragmentDoc = gql`
    fragment update_products_products_mutation_response on products_mutation_response {
  returning {
    id
    name
    price
    quantity
  }
}
    `;
export const Update_Products_By_Pk_ProductsFragmentDoc = gql`
    fragment update_products_by_pk_products on products {
  id
  name
}
    `;
export const Products_By_Pk_OrderItemsFragmentDoc = gql`
    fragment products_by_pk_orderItems on orderItems {
  name
  id
  quantity
  price
}
    `;
export const Products_By_Pk_OrderItems_OrdersFragmentDoc = gql`
    fragment products_by_pk_orderItems_orders on orders {
  orderStatus
  id
}
    `;
export const Products_OrderItems_Aggregate_AggregateFragmentDoc = gql`
    fragment products_orderItems_aggregate_aggregate on orderItems_aggregate_fields {
  count
}
    `;
export const OrderItems_OrderItemsFragmentDoc = gql`
    fragment orderItems_orderItems on orderItems {
  id
  name
  quantity
  price
}
    `;
export const OrderItems_By_Pk_OrderItemsFragmentDoc = gql`
    fragment orderItems_by_pk_orderItems on orderItems {
  id
  name
  quantity
  price
}
    `;
export const Delete_OrderItems_OrderItems_Mutation_ResponseFragmentDoc = gql`
    fragment delete_orderItems_orderItems_mutation_response on orderItems_mutation_response {
  returning {
    id
    name
    ordersId
    price
    productId
    quantity
  }
}
    `;
export const Delete_OrderItems_By_Pk_OrderItemsFragmentDoc = gql`
    fragment delete_orderItems_by_pk_orderItems on orderItems {
  id
  name
}
    `;
export const Insert_OrderItems_OrderItems_Mutation_ResponseFragmentDoc = gql`
    fragment insert_orderItems_orderItems_mutation_response on orderItems_mutation_response {
  returning {
    id
    name
    ordersId
    price
    productId
    quantity
  }
}
    `;
export const Insert_OrderItems_One_OrderItemsFragmentDoc = gql`
    fragment insert_orderItems_one_orderItems on orderItems {
  id
  name
}
    `;
export const Update_OrderItems_OrderItems_Mutation_ResponseFragmentDoc = gql`
    fragment update_orderItems_orderItems_mutation_response on orderItems_mutation_response {
  returning {
    id
    name
    ordersId
    price
    productId
    quantity
  }
}
    `;
export const Update_OrderItems_By_Pk_OrderItemsFragmentDoc = gql`
    fragment update_orderItems_by_pk_orderItems on orderItems {
  id
  name
}
    `;
export const OrderItems_By_Pk_ProductsFragmentDoc = gql`
    fragment orderItems_by_pk_products on products {
  quantity
  id
}
    `;
export const OrderItems_By_Pk_OrdersFragmentDoc = gql`
    fragment orderItems_by_pk_orders on orders {
  orderStatus
  id
  orderDate
  shippedDate
}
    `;
export const Orders_OrdersFragmentDoc = gql`
    fragment orders_orders on orders {
  orderStatus
  id
  orderDate
  shippedDate
}
    `;
export const Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment orders_by_pk_orders on orders {
  orderStatus
  id
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
    shippedDate
  }
}
    `;
export const Delete_Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment delete_orders_by_pk_orders on orders {
  id
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
    shippedDate
  }
}
    `;
export const Insert_Orders_One_OrdersFragmentDoc = gql`
    fragment insert_orders_one_orders on orders {
  id
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
    shippedDate
  }
}
    `;
export const Update_Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment update_orders_by_pk_orders on orders {
  id
  orderDate
  shippedDate
}
    `;
export const Orders_By_Pk_OrderItemsFragmentDoc = gql`
    fragment orders_by_pk_orderItems on orderItems {
  name
  id
  quantity
  price
}
    `;
export const Orders_By_Pk_OrderItems_ProductsFragmentDoc = gql`
    fragment orders_by_pk_orderItems_products on products {
  quantity
  id
}
    `;
export const Orders_OrderItems_Aggregate_AggregateFragmentDoc = gql`
    fragment orders_orderItems_aggregate_aggregate on orderItems_aggregate_fields {
  count
}
    `;
export const Customers_CustomersFragmentDoc = gql`
    fragment customers_customers on customers {
  id
  firstName
  lastName
  email
  phone
  address
}
    `;
export const Customers_By_Pk_CustomersFragmentDoc = gql`
    fragment customers_by_pk_customers on customers {
  id
  firstName
  lastName
  email
  phone
  address
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
    firstName
    address
    email
    id
    lastName
    phone
  }
}
    `;
export const Update_Customers_By_Pk_CustomersFragmentDoc = gql`
    fragment update_customers_by_pk_customers on customers {
  id
  firstName
  lastName
  email
  phone
  address
}
    `;
export const Customers_By_Pk_OrdersFragmentDoc = gql`
    fragment customers_by_pk_orders on orders {
  orderStatus
  id
  orderDate
  shippedDate
}
    `;
export const Customers_Orders_Aggregate_AggregateFragmentDoc = gql`
    fragment customers_orders_aggregate_aggregate on orders_aggregate_fields {
  count
}
    `;
export const Customers_By_Pk_Orders_OrderItems_Aggregate_AggregateFragmentDoc = gql`
    fragment customers_by_pk_orders_orderItems_aggregate_aggregate on orderItems_aggregate_fields {
  count
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
export const ProductsDocument = gql`
    query products($distinct_on: [products_select_column!], $limit: Int, $offset: Int, $order_by: [products_order_by!], $where: products_bool_exp) {
  products(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...products_products
    orderItems_aggregate {
      aggregate {
        ...products_orderItems_aggregate_aggregate
      }
    }
  }
}
    ${Products_ProductsFragmentDoc}
${Products_OrderItems_Aggregate_AggregateFragmentDoc}`;

export function useProductsQuery(options?: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};
export const Products_By_PkDocument = gql`
    query products_by_pk($id: uuid!) {
  products_by_pk(id: $id) {
    ...products_by_pk_products
    orderItems {
      ...products_by_pk_orderItems
      orders {
        ...products_by_pk_orderItems_orders
      }
    }
  }
}
    ${Products_By_Pk_ProductsFragmentDoc}
${Products_By_Pk_OrderItemsFragmentDoc}
${Products_By_Pk_OrderItems_OrdersFragmentDoc}`;

export function useProducts_By_PkQuery(options: Omit<Urql.UseQueryArgs<Products_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Products_By_PkQuery>({ query: Products_By_PkDocument, ...options });
};
export const Delete_ProductsDocument = gql`
    mutation delete_products($where: products_bool_exp!) {
  delete_products(where: $where) {
    ...delete_products_products_mutation_response
  }
}
    ${Delete_Products_Products_Mutation_ResponseFragmentDoc}`;

export function useDelete_ProductsMutation() {
  return Urql.useMutation<Delete_ProductsMutation, Delete_ProductsMutationVariables>(Delete_ProductsDocument);
};
export const Delete_Products_By_PkDocument = gql`
    mutation delete_products_by_pk($id: uuid!) {
  delete_products_by_pk(id: $id) {
    ...delete_products_by_pk_products
  }
}
    ${Delete_Products_By_Pk_ProductsFragmentDoc}`;

export function useDelete_Products_By_PkMutation() {
  return Urql.useMutation<Delete_Products_By_PkMutation, Delete_Products_By_PkMutationVariables>(Delete_Products_By_PkDocument);
};
export const Insert_ProductsDocument = gql`
    mutation insert_products($products: [products_insert_input!]!, $on_conflict: products_on_conflict) {
  insert_products(objects: $products, on_conflict: $on_conflict) {
    ...insert_products_products_mutation_response
  }
}
    ${Insert_Products_Products_Mutation_ResponseFragmentDoc}`;

export function useInsert_ProductsMutation() {
  return Urql.useMutation<Insert_ProductsMutation, Insert_ProductsMutationVariables>(Insert_ProductsDocument);
};
export const Insert_Products_OneDocument = gql`
    mutation insert_products_one($products: products_insert_input!, $on_conflict: products_on_conflict) {
  insert_products_one(object: $products, on_conflict: $on_conflict) {
    ...insert_products_one_products
  }
}
    ${Insert_Products_One_ProductsFragmentDoc}`;

export function useInsert_Products_OneMutation() {
  return Urql.useMutation<Insert_Products_OneMutation, Insert_Products_OneMutationVariables>(Insert_Products_OneDocument);
};
export const Update_ProductsDocument = gql`
    mutation update_products($_inc: products_inc_input, $products: products_set_input, $where: products_bool_exp!) {
  update_products(_inc: $_inc, _set: $products, where: $where) {
    ...update_products_products_mutation_response
  }
}
    ${Update_Products_Products_Mutation_ResponseFragmentDoc}`;

export function useUpdate_ProductsMutation() {
  return Urql.useMutation<Update_ProductsMutation, Update_ProductsMutationVariables>(Update_ProductsDocument);
};
export const Update_Products_By_PkDocument = gql`
    mutation update_products_by_pk($_inc: products_inc_input, $products: products_set_input, $pk_columns: products_pk_columns_input!) {
  update_products_by_pk(_inc: $_inc, _set: $products, pk_columns: $pk_columns) {
    ...update_products_by_pk_products
  }
}
    ${Update_Products_By_Pk_ProductsFragmentDoc}`;

export function useUpdate_Products_By_PkMutation() {
  return Urql.useMutation<Update_Products_By_PkMutation, Update_Products_By_PkMutationVariables>(Update_Products_By_PkDocument);
};
export const OrderItemsDocument = gql`
    query orderItems($distinct_on: [orderItems_select_column!], $limit: Int, $offset: Int, $order_by: [orderItems_order_by!], $where: orderItems_bool_exp) {
  orderItems(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...orderItems_orderItems
  }
}
    ${OrderItems_OrderItemsFragmentDoc}`;

export function useOrderItemsQuery(options?: Omit<Urql.UseQueryArgs<OrderItemsQueryVariables>, 'query'>) {
  return Urql.useQuery<OrderItemsQuery>({ query: OrderItemsDocument, ...options });
};
export const OrderItems_By_PkDocument = gql`
    query orderItems_by_pk($id: uuid!) {
  orderItems_by_pk(id: $id) {
    ...orderItems_by_pk_orderItems
    products {
      ...orderItems_by_pk_products
    }
    orders {
      ...orderItems_by_pk_orders
    }
  }
}
    ${OrderItems_By_Pk_OrderItemsFragmentDoc}
${OrderItems_By_Pk_ProductsFragmentDoc}
${OrderItems_By_Pk_OrdersFragmentDoc}`;

export function useOrderItems_By_PkQuery(options: Omit<Urql.UseQueryArgs<OrderItems_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<OrderItems_By_PkQuery>({ query: OrderItems_By_PkDocument, ...options });
};
export const Delete_OrderItemsDocument = gql`
    mutation delete_orderItems($where: orderItems_bool_exp!) {
  delete_orderItems(where: $where) {
    ...delete_orderItems_orderItems_mutation_response
  }
}
    ${Delete_OrderItems_OrderItems_Mutation_ResponseFragmentDoc}`;

export function useDelete_OrderItemsMutation() {
  return Urql.useMutation<Delete_OrderItemsMutation, Delete_OrderItemsMutationVariables>(Delete_OrderItemsDocument);
};
export const Delete_OrderItems_By_PkDocument = gql`
    mutation delete_orderItems_by_pk($id: uuid!) {
  delete_orderItems_by_pk(id: $id) {
    ...delete_orderItems_by_pk_orderItems
  }
}
    ${Delete_OrderItems_By_Pk_OrderItemsFragmentDoc}`;

export function useDelete_OrderItems_By_PkMutation() {
  return Urql.useMutation<Delete_OrderItems_By_PkMutation, Delete_OrderItems_By_PkMutationVariables>(Delete_OrderItems_By_PkDocument);
};
export const Insert_OrderItemsDocument = gql`
    mutation insert_orderItems($orderItems: [orderItems_insert_input!]!, $on_conflict: orderItems_on_conflict) {
  insert_orderItems(objects: $orderItems, on_conflict: $on_conflict) {
    ...insert_orderItems_orderItems_mutation_response
  }
}
    ${Insert_OrderItems_OrderItems_Mutation_ResponseFragmentDoc}`;

export function useInsert_OrderItemsMutation() {
  return Urql.useMutation<Insert_OrderItemsMutation, Insert_OrderItemsMutationVariables>(Insert_OrderItemsDocument);
};
export const Insert_OrderItems_OneDocument = gql`
    mutation insert_orderItems_one($orderItems: orderItems_insert_input!, $on_conflict: orderItems_on_conflict) {
  insert_orderItems_one(object: $orderItems, on_conflict: $on_conflict) {
    ...insert_orderItems_one_orderItems
  }
}
    ${Insert_OrderItems_One_OrderItemsFragmentDoc}`;

export function useInsert_OrderItems_OneMutation() {
  return Urql.useMutation<Insert_OrderItems_OneMutation, Insert_OrderItems_OneMutationVariables>(Insert_OrderItems_OneDocument);
};
export const Update_OrderItemsDocument = gql`
    mutation update_orderItems($_inc: orderItems_inc_input, $orderItems: orderItems_set_input, $where: orderItems_bool_exp!) {
  update_orderItems(_inc: $_inc, _set: $orderItems, where: $where) {
    ...update_orderItems_orderItems_mutation_response
  }
}
    ${Update_OrderItems_OrderItems_Mutation_ResponseFragmentDoc}`;

export function useUpdate_OrderItemsMutation() {
  return Urql.useMutation<Update_OrderItemsMutation, Update_OrderItemsMutationVariables>(Update_OrderItemsDocument);
};
export const Update_OrderItems_By_PkDocument = gql`
    mutation update_orderItems_by_pk($_inc: orderItems_inc_input, $orderItems: orderItems_set_input, $pk_columns: orderItems_pk_columns_input!) {
  update_orderItems_by_pk(_inc: $_inc, _set: $orderItems, pk_columns: $pk_columns) {
    ...update_orderItems_by_pk_orderItems
  }
}
    ${Update_OrderItems_By_Pk_OrderItemsFragmentDoc}`;

export function useUpdate_OrderItems_By_PkMutation() {
  return Urql.useMutation<Update_OrderItems_By_PkMutation, Update_OrderItems_By_PkMutationVariables>(Update_OrderItems_By_PkDocument);
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
    orderItems_aggregate {
      aggregate {
        ...orders_orderItems_aggregate_aggregate
      }
    }
  }
}
    ${Orders_OrdersFragmentDoc}
${Orders_OrderItems_Aggregate_AggregateFragmentDoc}`;

export function useOrdersQuery(options?: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};
export const Orders_By_PkDocument = gql`
    query orders_by_pk($id: uuid!) {
  orders_by_pk(id: $id) {
    ...orders_by_pk_orders
    orderItems {
      ...orders_by_pk_orderItems
      products {
        ...orders_by_pk_orderItems_products
      }
    }
  }
}
    ${Orders_By_Pk_OrdersFragmentDoc}
${Orders_By_Pk_OrderItemsFragmentDoc}
${Orders_By_Pk_OrderItems_ProductsFragmentDoc}`;

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
    orders_aggregate {
      aggregate {
        ...customers_orders_aggregate_aggregate
      }
    }
  }
}
    ${Customers_CustomersFragmentDoc}
${Customers_Orders_Aggregate_AggregateFragmentDoc}`;

export function useCustomersQuery(options?: Omit<Urql.UseQueryArgs<CustomersQueryVariables>, 'query'>) {
  return Urql.useQuery<CustomersQuery>({ query: CustomersDocument, ...options });
};
export const Customers_By_PkDocument = gql`
    query customers_by_pk($id: uuid!) {
  customers_by_pk(id: $id) {
    ...customers_by_pk_customers
    orders {
      ...customers_by_pk_orders
      orderItems_aggregate {
        aggregate {
          ...customers_by_pk_orders_orderItems_aggregate_aggregate
        }
      }
    }
  }
}
    ${Customers_By_Pk_CustomersFragmentDoc}
${Customers_By_Pk_OrdersFragmentDoc}
${Customers_By_Pk_Orders_OrderItems_Aggregate_AggregateFragmentDoc}`;

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