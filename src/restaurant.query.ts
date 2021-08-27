import { gql } from '@apollo/client'

export const RestaurantQuery = gql`
  query GetRestaurants {
    restaurants {
      id
      name
    }
  }
`
