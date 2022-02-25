import styled from '@emotion/styled';
import React from 'react';

import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { useCartSelector } from '../store/cart/cartStore';
import { minWidth } from '../style/responsive';
import CartIndex from '../components/Products/CartIndex';
import { Button } from '../style/buttons';

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
  margin-bottom: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
`;
const Left = styled.div`
  ${minWidth(960, {
    flexBasis: '66.666667%',
    flexGrow: 0,
    maxWidth: '66.666667%',
  })}
  ${minWidth(1280, {
    flexBasis: '66.666667%',
    flexGrow: 0,
    maxWidth: '66.666667%',
  })}
  padding-left: 24px;
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
`;
const BillingContainer = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  padding: 1.5rem 1.75rem;
  margin-bottom: 2rem;
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`;

const BillingTitle = styled.p`
  margin: 0px 0px 16px;
  font-size: 14px;
  font-family: 'Open Sans';
  line-height: 1.5;
  font-weight: 600;
`;

const Right = styled.div`
  ${minWidth(960, {
    flexBasis: '33.333333%',
    flexGrow: 0,
    maxWidth: '33.333333%',
  })}
  ${minWidth(1280, {
    flexBasis: '33.333333%',
    flexGrow: 0,
    maxWidth: '33.333333%',
  })}
  padding-left: 24px;
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
`;

const RightWrapper = styled.div`
  background-color: #fff;
  color: #2b3445;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
  overflow: hidden;
  border-radius: 8px;
  padding: 1.5rem 1.75rem;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const PriceTitle = styled.span`
  line-height: 1.5;
  color: #7d879c;
  text-transform: none;
  white-space: normal;
`;

const Price = styled.span`
  line-height: 1;
  font-size: 18px;
  font-weight: 600;
  text-transform: none;
  white-space: normal;
`;
const BreakLine = styled.hr`
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: #e7eaeb;
  border-bottom-width: thin;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: calc(100% + 48px);
  gap: 20px;
`;
export default function Billing() {
  const total = useCartSelector((state) => state.total);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { country, city, line1, postalCode } = e.target;
    localStorage.setItem(
      'billingAddress',
      JSON.stringify({
        country: country.value,
        city: city.value,
        line1: line1.value,
        postalCode: postalCode.value,
      }),
    );
    navigate('/payment');
  };
  return (
    <>
      <Announcement />
      <NavBar />
      <Container>
        <CartIndex state={2} />
        <Wrapper>
          <Left>
            <Form onSubmit={handleSubmit}>
              <BillingContainer>
                <BillingTitle>Billing Address</BillingTitle>
                <Row className="mb-4 g-4">
                  <Form.Group as={Col} controlId="formGridModel" lg={6} md={12}>
                    <Form.Control
                      name="country"
                      placeholder="Country"
                      style={{ fontSize: '14px', padding: '8px 12px' }}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridModel" lg={6} md={12}>
                    <Form.Control
                      name="city"
                      placeholder="City"
                      style={{ fontSize: '14px', padding: '8px 12px' }}
                      type="text"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-4 g-4">
                  <Form.Group as={Col} controlId="formGridModel" lg={6} md={12}>
                    <Form.Control
                      name="line1"
                      placeholder="Address 1"
                      style={{ fontSize: '14px', padding: '8px 12px' }}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridModel" lg={6} md={12}>
                    <Form.Control
                      name="postalCode"
                      placeholder="Postal Code"
                      style={{ fontSize: '14px', padding: '8px 12px' }}
                      type="number"
                      required
                    />
                  </Form.Group>
                </Row>
              </BillingContainer>
              <ButtonContainer>
                <Button onClick={() => navigate('/shopcart')} type="button" outline>
                  Back to Cart
                </Button>
                <Button type="submit">Proceed to Payment</Button>
              </ButtonContainer>
            </Form>
          </Left>
          <Right>
            <RightWrapper>
              <PriceContainer>
                <PriceTitle>Total: </PriceTitle>
                <div className="d-flex align-items-end">
                  <Price>${total}</Price>
                </div>
              </PriceContainer>
              <BreakLine />
            </RightWrapper>
          </Right>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
