import { useLazyQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';
import { myOrders } from '../apollo/order.query';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import OrderCart from '../components/OrderCart';
import UserProfile from '../components/Profile/UserProfile';
import { minWidth } from '../style/responsive';

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-top: 15px;
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
  flex: 1 1 115px;
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

export default function Order() {
  const [orderArray, setOrderArray] = useState([]);
  const [getOrders, orders] = useLazyQuery(myOrders);
  const [number, setNumber] = useState(1);
  const { data } = orders;

  useEffect(() => {
    getOrders({ variables: { page: 1 } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (data) {
      setOrderArray(data.myOrders);
    }
  }, [data]);

  const handleNumber = (number) => {
    if (number >= 1 || number <= 5) {
      setNumber(number);
      getOrders({ variables: { page: number } });
    }
  };

  return (
    <>
      <Announcement />
      <NavBar />
      <UserProfile>
        <TitleContainer>
          <TitleWrapper>
            <TitleContent>
              <TitleIcon>
                <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z" />
                <path d="M19.9889 5.80737L10.7639 10.3624L10.7539 19.9899L19.9989 15.1624L19.9889 5.80737Z" />
              </TitleIcon>
              <Title>My Orders</Title>
            </TitleContent>
          </TitleWrapper>
        </TitleContainer>
        <IndexContainer>
          <IndexNameContainer className="me-5">
            <IndexName>Order #</IndexName>
          </IndexNameContainer>
          <IndexTitle>Date purchased</IndexTitle>
          <IndexTitle>Total</IndexTitle>
        </IndexContainer>
        {orderArray.map((order) => (
          <OrderCart
            key={uuidv4()}
            amount={order.amount}
            createdAt={order.createdAt}
            id={order.id}
          />
        ))}
        <ButtonContainer>
          <div>
            <List>
              <li>
                <Arrows
                  disabled={number === 1}
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
      </UserProfile>
      <Footer />
    </>
  );
}
