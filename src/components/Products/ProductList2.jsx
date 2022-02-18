import styled from '@emotion/styled';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { minWidth } from '../../style/responsive';
import ProductCard2 from './ProductCard2';

const Container = styled.div`
  ${minWidth(1280, {
    maxWidth: '1280px',
  })}
  ${minWidth(600, {
    paddingLeft: '24px',
    paddingRight: '24px;',
  })}
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2rem;
`;

export default function ProductList2({ productArray }) {
  return (
    <Container>
      <div style={{ boxSizing: 'inherit' }}>
        {productArray.map((product) => (
          <ProductCard2 key={uuidv4()} {...product} />
        ))}
      </div>
    </Container>
  );
}
