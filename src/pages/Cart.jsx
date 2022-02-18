import styled from '@emotion/styled';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import ShopCartCard from '../components/Products/ShopCartCard';
import { productsArray } from '../data/productsData';
import { Button } from '../style/buttons';
import { minWidth } from '../style/responsive';

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
  box-shadow: 0px 1px 3px rgb(3 0 71 / 9%);
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
export default function Cart() {
  return (
    <>
      <Announcement />
      <NavBar />
      <Container>
        <Wrapper>
          <Left>
            {productsArray.map((products) => (
              <ShopCartCard key={uuidv4()} {...products} />
            ))}
          </Left>
          <Right>
            <RightWrapper>
              <PriceContainer>
                <PriceTitle>Total: </PriceTitle>
                <div className="d-flex align-items-end">
                  <Price>$1250.00</Price>
                </div>
              </PriceContainer>
              <BreakLine />
              <Button className="mt-2" large outline>
                Checkout Now
              </Button>
            </RightWrapper>
          </Right>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
