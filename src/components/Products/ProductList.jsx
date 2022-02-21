import styled from '@emotion/styled';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { minWidth } from '../../style/responsive';
import ProductCard from './ProductCard';

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
  margin-bottom: 5rem;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
`;

export default function ProductList({ productArray }) {
  return (
    <Container>
      <Wrapper>
        {productArray.map((product) => (
          <ProductCard key={uuidv4()} {...product} />
        ))}
      </Wrapper>
    </Container>
  );
}
