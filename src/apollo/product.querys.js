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

export const getProductsByPage = gql`
  query ProductByPage($page: Int!, $limit: Int! = 5) {
    productByPage(page: $page, limit: $limit) {
      id
      model
      price
      category
      description
      photo
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

export const updateProduct = gql`
  mutation UpdateProduct($updateProductId: ID!, $input: ProductInput!) {
    updateProduct(id: $updateProductId, input: $input) {
      id
      model
      price
      category
      createdAt
      description
    }
  }
`;

export const productByID = gql`
  query Product($productId: ID!) {
    product(id: $productId) {
      model
      price
      category
      description
      photo
      id
    }
  }
`;
