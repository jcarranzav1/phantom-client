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
