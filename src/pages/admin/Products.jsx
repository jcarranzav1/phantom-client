import styled from '@emotion/styled';
import React from 'react';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import AdminProfile from '../../components/Profile/AdminProfile';

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
export default function Products() {
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
      </AdminProfile>
      <Footer />
    </div>
  );
}
