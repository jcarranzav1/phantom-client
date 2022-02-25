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
  max-width: 300px;
  max-height: 300;
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
export default function Error() {
  return (
    <>
      <Announcement />
      <NavBar />
      <Container>
        <Wrapper>
          <Body>
            <ImageContainer>
              <Image src="	https://bazar-react.vercel.app/assets/images/illustrations/404.svg" />
            </ImageContainer>
            <Title>We were unable to process your purchase</Title>
            <Button className="mt-5">Browse Products</Button>
          </Body>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
