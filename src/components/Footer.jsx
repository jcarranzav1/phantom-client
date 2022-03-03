import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { minWidth } from '../style/responsive';

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  padding: 1rem;
  color: white;
  ${minWidth(1280, {
    maxWidth: '1280px',
  })}
  ${minWidth(600, {
    paddingLeft: '24px',
    paddingRight: '24px',
  })}
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
`;

const Items1 = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  padding-top: 24px;
  padding-left: 24px;
  ${minWidth(600, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}
  ${minWidth(960, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}

  ${minWidth(1280, {
    flexBasis: '33.333333%',
    flexGrow: 0,
    maxWidth: '33.333333%',
  })}
`;

const Items2 = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  padding-top: 24px;
  padding-left: 24px;
  ${minWidth(600, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}
  ${minWidth(960, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}

  ${minWidth(1280, {
    flexBasis: '25%',
    flexGrow: 0,
    maxWidth: '25%',
  })}
`;
const Items3 = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  padding-top: 24px;
  padding-left: 24px;
  ${minWidth(600, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}
  ${minWidth(960, {
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%',
  })}

  ${minWidth(1280, {
    flexBasis: '16.666667%',
    flexGrow: 0,
    maxWidth: '16.666667%',
  })}
`;

const Logo = styled.h1`
  font-family: 'Lato';
  text-decoration: none;
  font-weight: 900;
  margin-top: 6px;
  font-size: 30px;
  color: white;
`;

const Text = styled.p`
  margin-bottom: 20px;
  margin-top: 0px;
  font-size: 14px;
  color: #aeb4be;
  text-transform: none;
  white-space: normal;
  line-height: 1.75;
`;

const ListTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1;
  color: white;
`;

const ListItem = styled.p`
  position: relative;
  display: block;
  padding: 0.3rem 0rem;
  color: #aeb4be;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 0;
`;

export default function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: '#0c0e30' }}>
        <Container>
          <div style={{ paddingTop: '40px', paddingBottom: '40px', overflow: 'hidden' }}>
            <Wrapper>
              <Items1>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                  <Logo>Phantom</Logo>
                </Link>
                <Text>
                  We will inform you when we have news, events and promotions. Don&apos;t worry, we
                  send them infrequently, just a friendly greeting from time to time!
                </Text>
              </Items1>
              <Items3>
                <ListTitle>About Us</ListTitle>
                <div>
                  <Link to="/">
                    <ListItem>Careers</ListItem>
                  </Link>
                  <Link to="/">
                    <ListItem>Our Stores</ListItem>
                  </Link>
                  <Link to="/">
                    <ListItem>Our Cares</ListItem>
                  </Link>
                  <Link to="/">
                    <ListItem>Terms & Conditions</ListItem>
                  </Link>
                  <Link to="/">
                    <ListItem>Privacy Policy</ListItem>
                  </Link>
                </div>
              </Items3>
              <Items2>
                <ListTitle>Help Center</ListTitle>

                <Link to="/">
                  <ListItem>How to Buy</ListItem>
                </Link>
                <Link to="/">
                  <ListItem>Track Your Order</ListItem>
                </Link>
                <Link to="/">
                  <ListItem>Corporate & Bulk Purchasing</ListItem>
                </Link>
                <Link to="/">
                  <ListItem>Returns & Refunds</ListItem>
                </Link>
              </Items2>
              <Items2>
                <ListTitle>Contact Us</ListTitle>
                <ListItem>Av. América Sur 3145, Trujillo 13008, La Libertad, Perú</ListItem>
                <ListItem>Email: dkartp@gmail.com</ListItem>
                <ListItem>Phone: +1 1123 456 780</ListItem>
              </Items2>
            </Wrapper>
          </div>
        </Container>
      </div>
    </footer>
  );
}
