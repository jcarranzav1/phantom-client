/* eslint-disable max-len */
import styled from '@emotion/styled';
import React from 'react';
import Ripples from 'react-ripples';
import { Link } from 'react-router-dom';

const Container = styled.div`
  color: #2b3445;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: relative;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 1.5rem;
  box-shadow: 0px 4px 16px rgba(43, 52, 69, 0.1);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0px;
  width: 100%;
  padding: 20px;
`;

const Model = styled.span`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CloseContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 5px;
  font-size: 1.125rem;
  padding: 5px;
  margin-left: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const CloseIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
  z-index: 10000000000;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const PriceLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const PriceUnit = styled.span`
  line-height: 1.5;
  color: #7d879c;
  margin-right: 8px;
  text-transform: none;
  white-space: normal;
  font-size: 14px;
`;
const PriceTotal = styled.span`
  line-height: 1.5;
  font-weight: 600;
  color: #d23f57;
  margin-right: 16px;
  text-transform: none;
  white-space: normal;
  font-size: 14px;
`;

const PriceRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ButtonLeft = styled.button`
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
  border-radius: 4px;
  &:hover {
    text-decoration: none;
    background-color: rgba(210, 63, 87, 0.09);
    border: 1px solid rgb(210, 63, 87);
  }
`;
const ButtonRight = styled.button`
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
  border-radius: 4px;
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

export default function ShopCartCard({ id, url, model, price }) {
  return (
    <Container>
      <img alt="products" height="140px" src={url} width="140px" />
      <Body>
        <Link to={`/products/${id}`}>
          <Model>{model}</Model>
        </Link>
        <CloseContainer>
          <CloseButton>
            <CloseIcon>
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </CloseIcon>
          </CloseButton>
        </CloseContainer>
        <PriceContainer>
          <PriceLeft>
            <PriceUnit>${price}.00 x 3</PriceUnit>
            <PriceTotal>${price}.00</PriceTotal>
          </PriceLeft>
          <PriceRight>
            <Ripples color="#d8455dad" during={800}>
              <ButtonLeft>
                <ButtonIcon>
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </ButtonIcon>
              </ButtonLeft>
            </Ripples>
            <Number>3</Number>
            <Ripples color="#d8455dad" during={800}>
              <ButtonRight block={false}>
                <ButtonIcon>
                  <path d="M19 13H5v-2h14v2z" />
                </ButtonIcon>
              </ButtonRight>
            </Ripples>
          </PriceRight>
        </PriceContainer>
      </Body>
    </Container>
  );
}
