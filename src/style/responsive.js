import { css } from '@emotion/react';

export const maxWidth = (width, props) => css`
  @media only screen and (max-width: ${width}px) {
    ${props}
  }
`;
export const minWidth = (width, props) => css`
  @media only screen and (min-width: ${width}px) {
    ${props}
  }
`;
