import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { orderById } from '../apollo/order.query';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
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

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  overflow: hidden;
  border-radius: 8px;
  padding: 0px;
  margin-bottom: 30px;
`;
const TableTitleContainer = styled.div`
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgb(243, 245, 249);
  padding: 12px;
  box-shadow: none;
  border-radius: 0px;
`;

const TableTitleItem = styled.div`
  display: flex;
  margin: 6px;
  align-items: center;
  flex: 1 1 0px;
  white-space: pre;
`;

const TableTitleText = styled.div`
  margin: 0px;
  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 1.5;
  font-size: 13px;
`;
const ProductContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const ProductItems = styled.div`
  display: flex;
  padding: 8px 16px;
  flex-wrap: wrap;
  align-items: center;
`;

const ProductLeft = styled.div`
  display: flex;
  flex: 2 2 260px;
  margin: 6px;
  margin-right: 50px;
  align-items: center;
  max-width: 400px;
`;

const ProductImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  height: 64px;
  width: 64px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000px;
`;

const ProductModelContainer = styled.div`
  margin-left: 20px;
`;

const ProductModel = styled.h6`
  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: none;
  white-space: normal;
`;

const ProductPrice = styled.p`
  margin: 0px;
  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 1.5;
  font-size: 13px;
  color: rgb(125, 135, 156);
`;

const ProductCenter = styled.div`
  display: flex;
  flex: 1 1 260px;
  margin: 6px;
  align-items: center;
`;

const ProductCategory = styled.p`
  margin: 0px;
  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 1.5;
  font-size: 13px;
  color: rgb(125, 135, 156);
`;

const ProductRight = styled.div`
  display: flex;
  flex: 1 1 160px;
  margin: 6px;
  align-items: center;
`;

const TotalPrice = styled.div`
  color: #d63f5c;
  margin: 0px;
  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 1.5;
  font-size: 13px;
`;

const Billing = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
`;

const BillingContainer = styled.div`
  ${minWidth(1280, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}
  ${minWidth(960, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}
  padding-left: 24px;
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0px;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
`;

const BillingWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px 30px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const BillingTittle = styled.h5`
  margin-bottom: 16px;
  margin-top: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: none;
  white-space: normal;
`;
const BillingText = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 14px;
  text-transform: none;
  white-space: normal;
`;

export default function OrderDetails() {
  const { orderId } = useParams();
  const { data } = useQuery(orderById, { variables: { orderId } });

  const {
    createdAt = Date.now(),
    products = [],
    billingAddress = {},
    amount = 0.0,
  } = !!data && data.order;

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
              <Title>Order Details</Title>
            </TitleContent>
          </TitleWrapper>
        </TitleContainer>
        <Container>
          <TableTitleContainer>
            <TableTitleItem>
              <TableTitleText style={{ color: 'rgb(125, 135, 156)', marginRight: '5px' }}>
                Order ID:
              </TableTitleText>
              <TableTitleText>{orderId}</TableTitleText>
            </TableTitleItem>
            <TableTitleItem>
              <TableTitleText style={{ color: 'rgb(125, 135, 156)', marginRight: '5px' }}>
                Day of purchase:
              </TableTitleText>
              <TableTitleText>
                {format(new Date(parseInt(createdAt, 10)), 'dd MMM yyyy')}
              </TableTitleText>
            </TableTitleItem>
          </TableTitleContainer>
          <ProductContainer>
            {products.map(({ product, quantity }) => (
              <ProductItems key={uuidv4()}>
                <ProductLeft>
                  <ProductImgContainer>
                    <ProductImg src={product.photo} />
                  </ProductImgContainer>
                  <ProductModelContainer>
                    <ProductModel> {product.model}</ProductModel>
                    <ProductPrice>
                      ${product.price.toFixed(2)} x {quantity}
                    </ProductPrice>
                  </ProductModelContainer>
                </ProductLeft>
                <ProductCenter>
                  <ProductCategory> Category: {product.category}</ProductCategory>
                </ProductCenter>
                <ProductRight>
                  <TotalPrice>
                    Total: ${(parseFloat(product.price) * quantity).toFixed(2)}
                  </TotalPrice>
                </ProductRight>
              </ProductItems>
            ))}
          </ProductContainer>
        </Container>
        <Billing>
          <BillingContainer>
            <BillingWrapper>
              <BillingTittle>Shipping Address</BillingTittle>
              <BillingText>
                {billingAddress.country}, {billingAddress.city}, {billingAddress.line1}.
              </BillingText>
            </BillingWrapper>
          </BillingContainer>
          <BillingContainer>
            <BillingWrapper>
              <Price>
                <BillingTittle>Total Price</BillingTittle>
                <BillingTittle>${amount.toFixed(2)}</BillingTittle>
              </Price>
              <BillingText>Paid by Credit/Debit Card</BillingText>
            </BillingWrapper>
          </BillingContainer>
        </Billing>
      </UserProfile>
      <Footer />
    </>
  );
}
