import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartActions } from '../../store/cart/cartStore';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgb(243, 245, 249);
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & .react-ripples {
    border-radius: 50%;
  }
`;
const ButtonTop = styled.button`
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
  padding: 5px 15px;
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
  height: 32px;
  width: 32px;
  border-radius: 300px;
  &:hover {
    text-decoration: none;
    background-color: rgba(210, 63, 87, 0.09);
    border: 1px solid rgb(210, 63, 87);
  }
`;

const ButtonBottom = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  margin: 0;
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
  color: ${(props) => (props.block ? 'rgba(0, 0, 0, 0.26)' : 'rgb(210, 63, 87)')};
  border: ${(props) =>
    props.block ? '1px solid rgba(0, 0, 0, 0.12)' : '1px solid rgba(210, 63, 87, 0.5)'};
  &:hover {
    text-decoration: none;
    background-color: ${(props) => (props.block ? 'transparent' : 'rgba(210, 63, 87, 0.09)')};
    border: ${(props) =>
    props.block ? '1px solid rgba(0, 0, 0, 0.12)' : '1px solid rgb(210, 63, 87)'};
  }
`;

const ButtonIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.45rem;
`;

const Number = styled.div`
  font-weight: 600;
  font-size: 15px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  margin-left: 16px;
  margin-right: 16px;
  height: 76px;
  width: 76px;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000px;
`;
const Model = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: none;
  white-space: normal;
`;
const Price = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: rgb(210, 63, 87);
  margin-top: 8px;
`;

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px 0px 0px 20px;
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
export const CartCard = ({ id, photo, model, price, quantity }) => {
  const { increase, decrease, removeProduct } = useCartActions();
  return (
    <Container>
      <ButtonContainer>
        <ButtonTop onClick={() => increase({ id })}>
          <ButtonIcon>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </ButtonIcon>
        </ButtonTop>
        <Number>{quantity}</Number>
        <ButtonBottom
          block={quantity === 1}
          disabled={quantity === 1}
          onClick={() => decrease({ id })}>
          <ButtonIcon>
            <path d="M19 13H5v-2h14v2z" />
          </ButtonIcon>
        </ButtonBottom>
      </ButtonContainer>
      <Link to={`/products/${id}`}>
        <ImgContainer>
          <Imagen alt="product" src={photo} />
        </ImgContainer>
      </Link>
      <div style={{ flex: '1 1 0' }}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/products/${id}`}>
          <Model>{model}</Model>
        </Link>
        <Price>${price.toFixed(2)}</Price>
      </div>
      <CloseButton onClick={() => removeProduct({ id })}>
        <ButtonIcon>
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </ButtonIcon>
      </CloseButton>
    </Container>
  );
};
