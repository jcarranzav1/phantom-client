import { gql } from '@apollo/client';

export const PAYMENT = gql`
  mutation Payment($input: PaymentInput!) {
    payment(input: $input) {
      status
    }
  }
`;
