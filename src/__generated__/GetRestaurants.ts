/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRestaurants
// ====================================================

export interface GetRestaurants_restaurants {
  __typename: "Restaurant";
  /**
   * Restaurant id
   */
  id: string;
  /**
   * Restaurant name
   */
  name: string;
}

export interface GetRestaurants {
  restaurants: GetRestaurants_restaurants[];
}
