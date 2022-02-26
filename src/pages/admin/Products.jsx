import { useLazyQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';
import { getProductsByPage } from '../../apollo/product.querys';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import AdminProfile from '../../components/Profile/AdminProfile';
import { minWidth } from '../../style/responsive';
import CardPageProducts from '../../components/Products/CardPageProducts';

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-top: 10px;
`;
const TitleWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  display: flex;
`;
const TitleContent = styled.div`
  display: flex;
  align-items: center;
`;

const TitleIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
  color: #d23f57;
`;
const Title = styled.h2`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
  margin-left: 12px;
  white-space: pre;
  text-transform: none;
  white-space: normal;
`;

const IndexContainer = styled.div`
  ${minWidth(0, {
    display: 'none',
  })}
  ${minWidth(600, {
    display: 'flex',
  })}
  
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  padding: 0px 18px;
  margin-bottom: -0.125rem;
  background-color: transparent;
`;

const IndexNameContainer = styled.div`
  display: flex;
  flex: 2 2 220px !important;
`;

const IndexName = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 56px;
  color: rgb(125, 135, 156);
  text-align: left;
  text-transform: none;
  white-space: normal;
`;

const IndexTitle = styled.div`
  flex: 1 1 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: rgb(125, 135, 156);
  text-align: left;
  text-transform: none;
  white-space: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

const Arrows = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  outline: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.93;
  border-radius: 16px;
  text-align: center;
  box-sizing: border-box;
  min-width: 32px;
  height: 32px;
  padding: 0px 6px;
  margin: 0px 3px;
  color: rgb(43, 52, 69);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(0, 0, 0, 0.23);
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const ArrowIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.35rem;
  margin: -5px -8px;
`;

const Number = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) => (props.active ? 'rgba(210, 63, 87, 0.12)' : 'transparent')};
  outline: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 1.43;
  border-radius: 16px;
  text-align: center;
  box-sizing: border-box;
  min-width: 32px;
  height: 32px;
  padding: 0px 6px;
  margin: 0px 3px;
  color: ${(props) => (props.active ? 'rgb(210, 63, 87)' : 'rgb(43, 52, 69)')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: ${(props) =>
    props.active ? '1px solid rgba(210, 63, 87, 0.5)' : '1px solid rgba(0, 0, 0, 0.23)'};

  &:hover {
    background-color: ${(props) =>
    props.active ? 'rgba(210, 63, 87, 0.24)' : 'rgba(0, 0, 0, 0.04)'};
  }
`;

export default function Products() {
  const [number, setNumber] = useState(1);
  const [productArray, setProductArray] = useState([]);
  const [getProducts, products] = useLazyQuery(getProductsByPage);
  const { data } = products;

  useEffect(() => {
    getProducts({ variables: { page: 1 } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      setProductArray(data.productByPage);
    }
  }, [data]);

  const handleNumber = (number) => {
    if (number >= 1 || number <= 5) {
      setNumber(number);
      getProducts({ variables: { page: number } });
    }
  };
  return (
    <div>
      <Announcement />
      <NavBar />
      <AdminProfile>
        <TitleContainer>
          <TitleWrapper>
            <TitleContent>
              <TitleIcon>
                <path d="M13.4333 1.60733L4.3575 6.25399L0.75 4.47899L9.66583 0.0764941C9.86583 -0.0251725 10.1058 -0.0251725 10.3158 0.0764941L13.4333 1.60733Z" />{' '}
                <path d="M19.2402 4.47912L10.0052 9.05412L6.54687 7.34995L6.04688 7.09579L15.1327 2.44995L15.6327 2.70328L19.2402 4.47912Z" />
                <path d="M9.265 10.3726L9.255 20.0001L0.41 15.3843C0.16 15.2526 0 14.9884 0 14.7043V5.79761L3.74833 7.64427V10.8909C3.74833 11.3068 4.08833 11.6518 4.49833 11.6518C4.90833 11.6518 5.24833 11.3068 5.24833 10.8909V8.39511L5.74833 8.63844L9.265 10.3726Z" />
                <path d="M19.9889 5.80737L10.7639 10.3624L10.7539 19.9899L19.9989 15.1624L19.9889 5.80737Z" />
              </TitleIcon>
              <Title>Products</Title>
            </TitleContent>
          </TitleWrapper>
        </TitleContainer>
        <IndexContainer>
          <IndexNameContainer className="me-5">
            <IndexName>Name</IndexName>
          </IndexNameContainer>
          <IndexTitle style={{ marginLeft: '-80px' }}>Price</IndexTitle>
        </IndexContainer>
        {productArray.map((product) => (
          <CardPageProducts
            key={uuidv4()}
            id={product.id}
            model={product.model}
            photo={product.photo}
            price={product.price}
          />
        ))}
        <ButtonContainer>
          <div>
            <List>
              <li>
                <Arrows
                  disabled={number === 1}
                  id="previousArrow"
                  onClick={() => handleNumber(number - 1)}
                  style={{ opacity: number === 1 ? '0.4' : '1' }}>
                  <ArrowIcon>
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </ArrowIcon>
                </Arrows>
              </li>
              <li>
                <Number active={number === 1} onClick={() => handleNumber(1)}>
                  1
                </Number>
              </li>
              <li>
                <Number active={number === 2} onClick={() => handleNumber(2)}>
                  2
                </Number>
              </li>
              <li>
                <Number active={number === 3} onClick={() => handleNumber(3)}>
                  3
                </Number>
              </li>
              <li>
                <Number active={number === 4} onClick={() => handleNumber(4)}>
                  4
                </Number>
              </li>
              <li>
                <Number active={number === 5} onClick={() => handleNumber(5)}>
                  5
                </Number>
              </li>
              <li>
                <Arrows
                  disabled={number === 5}
                  id="nextArrow"
                  onClick={() => handleNumber(number + 1)}
                  style={{ opacity: number === 5 ? '0.4' : '1' }}>
                  <ArrowIcon>
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </ArrowIcon>
                </Arrows>
              </li>
            </List>
          </div>
        </ButtonContainer>
      </AdminProfile>
      <Footer />
    </div>
  );
}
