import { gql } from '@apollo/client';

export const createOrder = gql`
  mutation CreateOrder($input: OrderInput) {
    createOrder(input: $input) {
      id
      products {
        quantity
      }
      amount
    }
  }
`;

export const myOrders = gql`
  query MyOrders($page: Int!, $limit: Int! = 5) {
    myOrders(page: $page, limit: $limit) {
      id
      amount
      createdAt
    }
  }
`;

export const orderById = gql`
  query Order($orderId: ID!) {
    order(id: $orderId) {
      products {
        product {
          model
          photo
          category
          price
        }
        quantity
      }
      billingAddress {
        city
        country
        postalCode
        line1
      }
      amount
      createdAt
    }
  }
`;
