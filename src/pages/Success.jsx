import styled from '@emotion/styled';
import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
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
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10rem;
`;

const Body = styled.div`
  background-color: #fff;
  color: #2b3445;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
  overflow: hidden;
  border-radius: 8px;
  border-radius: 8px;
  overflow: unset;
  transition: all 250ms ease-in-out;
  text-align: center;
  width: 630px;
  padding: 3rem;
`;
const ImageContainer = styled.span`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  max-width: 100%;
`;

const Image = styled.img`
  max-width: 116px;
  max-height: 116px;
`;
const Title = styled.h1`
  margin-bottom: 0px;
  margin-top: 1.5rem;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: none;
  white-space: normal;
`;
export default function Success() {
  return (
    <>
      <Announcement />
      <NavBar />
      <Container>
        <Wrapper>
          <Body>
            <ImageContainer>
              <Image src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fillustrations%2Fparty-popper.svg&w=128&q=75" />
            </ImageContainer>
            <Title>Your order is completed!</Title>
            <Button className="mt-4">See the Order</Button>
          </Body>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
