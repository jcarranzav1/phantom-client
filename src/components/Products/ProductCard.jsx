import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Ripples from 'react-ripples';
import { minWidth } from '../../style/responsive';

const Container = styled.div`
  box-sizing: border-box;
  margin: 0px;
  max-width: 100%;
  padding-top: 24px;
  padding-left: 24px;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;

  ${minWidth(600, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}
  ${minWidth(960, {
    flexBasis: '33.3333%',
    flexGrow: 0,
    maxWidth: '33.3333%',
  })}
  
  ${minWidth(1280, {
    flexBasis: '25%',
    flexGrow: 0,
    maxWidth: '25%',
  })}
`;

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(43, 52, 69);
  box-shadow: rgba(3, 0, 71, 0.15) 0px 1px 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: auto;
  overflow: hidden;
  transition: all 250ms ease-in-out 0s;
  border-radius: 8px;
`;

const ImageContainer = styled.span`
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
`;

const ImageWrapper = styled.span`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 100% 0px 0px;
`;

const Image = styled.img`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const Model = styled.h3`
  margin-bottom: 8px;
  margin-top: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  color: rgb(55, 63, 80);
  text-transform: none;
  white-space: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const PriceTitle = styled.span`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  color: #7d879c;
  margin-right: 16px;
  white-space: pre;
  text-transform: none;
  white-space: normal;
  font-weight: 500;
`;

const Price = styled.span`
  padding-right: 8px;
  font-weight: 600;
  color: #d23f57;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: flex-start;
  width: 30px;
`;

const CartButton = styled.button`
  display: inline-flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.75;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(210, 63, 87, 0.5);
  color: #d23f57;
  font-weight: 600;
  text-transform: capitalize;
  min-width: 0;
  min-height: 0;
  padding: 3px;
  &:hover {
    text-decoration: none;
    background-color: rgba(210, 63, 87, 0.09);
    border: 1px solid rgb(210, 63, 87);
  }
`;
const CartIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.45rem;
  z-index: 100000000000000;
`;
export default function ProductCard({ id, url, model, price }) {
  return (
    <Container>
      <Wrapper>
        <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
          <ImageContainer>
            <ImageWrapper />
            <Link to={`/products/${id}`}>
              <Image src={url} />
            </Link>
          </ImageContainer>
        </div>
        <div style={{ padding: '1rem' }}>
          <div className="d-flex">
            <div style={{ flex: '1 1 0', minWidth: '0%', marginRight: '8px' }}>
              <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/products/${id}`}>
                <Model>{model}</Model>
              </Link>
              <PriceContainer>
                <PriceTitle>Price: </PriceTitle>
                <Price>${price}</Price>
              </PriceContainer>
            </div>
            <CartContainer>
              <Ripples color="#e07385" during={800}>
                <CartButton>
                  <CartIcon>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </CartIcon>
                </CartButton>
              </Ripples>
            </CartContainer>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
