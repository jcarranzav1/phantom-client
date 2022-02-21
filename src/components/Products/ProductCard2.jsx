import styled from '@emotion/styled';
import React from 'react';
import Ripples from 'react-ripples';
import { Link } from 'react-router-dom';
import { useCartActions } from '../../store/cart/cartStore';
import { minWidth } from '../../style/responsive';

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgba(3, 0, 71, 0.15) 0px 1px 3px;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 1.25rem;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin-top: -8px;
  width: calc(100% + 8px);
  margin-left: -8px;
`;

const ImageContainer = styled.div`
  ${minWidth(600, {
    flexBasis: '25%',
    flexGrow: 0,
    maxWidth: '25%',
  })}
  padding-left: 8px;
  padding-top: 8px;
  box-sizing: border-box;
  margin: 0px;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;
const BodyContainer = styled.div`
  ${minWidth(600, {
    flexBasis: '66.6667%',
    flexGrow: 0,
    maxWidth: '66.6667%',
  })}
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0px;
  flex-direction: row;
  padding: 12px;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 16px;
`;

const Model = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: none;
  white-space: normal;
`;

const RatingContainer = styled.span`
  display: inline-flex;
  position: relative;
  font-size: 1.5rem;
  color: rgb(250, 175, 0);
  cursor: pointer;
  text-align: left;
  pointer-events: none;
`;
const Rating = styled.span`
  display: flex;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  pointer-events: none;
  /* color: rgba(0, 0, 0, 0.26); */
`;

const RatingIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: inherit;
`;

const PriceContainer = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 16px;
  align-items: center;
`;

const Price = styled.h5`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: rgb(210, 63, 87);
  margin-right: 8px;
  text-transform: none;
  white-space: normal;
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

const CartBodyContainer = styled.div`
  ${minWidth(600, {
    display: 'none',
  })}
  display:'flex';
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  height: 30px;
`;

const CartBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const CartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: 'Open Sans';
  font-size: 0.875rem;
  line-height: 1.75;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(210, 63, 87, 0.5);
  color: rgb(210, 63, 87);
  font-weight: 600;
  text-transform: capitalize;
  min-width: 0px;
  min-height: 0px;
  padding: 5px;
  &:hover {
    text-decoration: none;
    background-color: rgba(210, 63, 87, 0.04);
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
  z-index: 10;
`;

const SideContainer = styled.div`
  padding-left: 8px;
  padding-top: 8px;
  ${minWidth(600, {
    flexBasis: '8.33333%',
    flexGrow: 0,
    maxWidth: '8.33333%',
  })}
  box-sizing: border-box;
  margin: 0px;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
`;

const SideWrapper = styled.div`
  ${minWidth(0, {
    display: 'none',
  })}
  ${minWidth(600, {
    display: 'flex',
  })}
  
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 30px;
  height: 100%;
  padding: 1rem 0rem;
  margin-left: auto;
`;
const HeartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 5px;
  font-size: 1.125rem;
`;

const HeartIcon = styled.svg`
  user-select: none;
  width: 1.2em;
  height: 1.2em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.25rem;
`;

const CartSideContainer = styled.div`
  align-items: center;
  flex-direction: column;
`;

export default function ProductCard2({ id, photo, model, price }) {
  const { addProduct } = useCartActions();

  const handleAdd = () => {
    addProduct({ id, model, price, photo });
  };
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <div>
            <Link to={`/products/${id}`}>
              <Image src={photo} />
            </Link>
          </div>
        </ImageContainer>
        <BodyContainer>
          <BodyWrapper>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/products/${id}`}>
              <Model>{model}</Model>
            </Link>
            <RatingContainer>
              <Rating>
                <RatingIcon>
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                </RatingIcon>
                <RatingIcon>
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                </RatingIcon>
                <RatingIcon>
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                </RatingIcon>
                <RatingIcon>
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                </RatingIcon>
                <RatingIcon>
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                </RatingIcon>
              </Rating>
            </RatingContainer>
            <PriceContainer>
              <PriceTitle>Price: </PriceTitle>
              <Price>${price.toFixed(2)}</Price>
            </PriceContainer>

            <CartBodyContainer>
              <CartBodyWrapper>
                <Ripples color="#e07385" during={800}>
                  <CartButton onClick={handleAdd}>
                    <CartIcon>
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </CartIcon>
                  </CartButton>
                </Ripples>
              </CartBodyWrapper>
            </CartBodyContainer>
          </BodyWrapper>
        </BodyContainer>
        <SideContainer>
          <SideWrapper>
            <HeartButton>
              <HeartIcon>
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
              </HeartIcon>
            </HeartButton>
            <CartSideContainer>
              <Ripples color="#e07385" during={800}>
                <CartButton onClick={handleAdd}>
                  <CartIcon>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </CartIcon>
                </CartButton>
              </Ripples>
            </CartSideContainer>
          </SideWrapper>
        </SideContainer>
      </Wrapper>
    </Container>
  );
}
