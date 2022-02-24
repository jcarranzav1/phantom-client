import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      user {
        id
        firstName
        email
        isAdmin
        photo
      }
      token
    }
  }
`;

export const SINGUP = gql`
  mutation CreateUser($input: CreateAccountInput!) {
    createUser(input: $input) {
      firstName
      isAdmin
      id
    }
  }
`;

export const PROFILE = gql`
  query Profile {
    profile {
      id
      isAdmin
      firstName
      email
      lastName
      cellphone
      photo
    }
  }
`;

export const UDPATE_PROFILE = gql`
  mutation UpdateProfile($input: UpdateAccountInput!) {
    updateProfile(input: $input) {
      firstName
      id
      cellphone
      lastName
      photo
    }
  }
`;
