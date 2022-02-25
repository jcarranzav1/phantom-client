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
