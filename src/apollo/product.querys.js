import { gql } from '@apollo/client';

export const getAllProducts = gql`
  query Products {
    products {
      id
      model
      price
      photo
      category
      createdAt
      updatedAt
    }
  }
`;

export const createProduct = gql`
  mutation ($input: ProductInput!) {
    addProduct(input: $input) {
      id
      model
      price
      category
    }
  }
`;
