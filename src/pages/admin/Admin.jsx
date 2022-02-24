import styled from '@emotion/styled';
import React from 'react';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import AdminProfile from '../../components/Profile/AdminProfile';
import { minWidth } from '../../style/responsive';

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

const Body = styled.div`
  ${minWidth(600, {
    maxWidth: '100%',
    flexWrap: 'nowrap',
  })}

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  margin-top: 24px;
  width: calc(100% + 24px);
  margin-left: -24px;
`;

const ItemContainer = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
`;
const Item = styled.div`
  background-color: #fff;
  color: #2b3445;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
  overflow: hidden;
  border-radius: 8px;
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  height: 100%;
`;

const ItemTitle = styled.h5`
  margin-bottom: 8px;
  margin-top: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #7d879c;
  text-transform: none;
  white-space: normal;
`;

const ItemValue = styled.h5`
  margin-bottom: 4px;
  margin-top: 0px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.3;
  color: #4b566b;
  text-transform: none;
  white-space: normal;
`;

export default function Admin() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <AdminProfile>
        <TitleContainer>
          <TitleWrapper>
            <TitleContent>
              <TitleIcon>
                <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z" />
              </TitleIcon>
              <Title>Dashboard</Title>
            </TitleContent>
          </TitleWrapper>
        </TitleContainer>
        <Body>
          <ItemContainer>
            <Item>
              <ItemTitle>Earnings</ItemTitle>
              <ItemValue>$5632.026</ItemValue>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <ItemTitle>Earnings</ItemTitle>
              <ItemValue>$5632.026</ItemValue>
            </Item>
          </ItemContainer>
        </Body>
      </AdminProfile>
      <Footer />
    </div>
  );
}
