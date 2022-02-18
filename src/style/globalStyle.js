import { css } from '@emotion/react';

export const GlobalStyles = css`
  html,
  body,
  #root {
    margin: 0;
    width: 100%;
    min-height: 100%;
    font-family: 'Open Sans';
    box-sizing: border-box;
    color: #2b3445;
    background-color: #f6f9fc;
  }
  .pointer {
    cursor: pointer;
  }

  /* Firefox */

  input {
    border: 1px solid #c4c4c4;
    &:hover {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .modalRight .modal-dialog {
    margin: 0;
    margin-left: auto;
    height: 100vh;
    max-width: 380px;
    .modal-content {
      height: 100%;
    }
  }
`;
