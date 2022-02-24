import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { minWidth } from '../../style/responsive';

const Container = styled.div`
  ${minWidth(960, {
    flexBasis: '25%',
    flexGrow: 0,
    maxWidth: '25%',
  })}
  display: block;
  padding-left: 24px;
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0;
  max-width: 100%;
`;

const Wrapper = styled.div`
  box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
  overflow: hidden;
  border-radius: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 1.5rem;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  color: #2b3445;
`;

const Title = styled.p`
  margin: 0;

  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 18px;
  padding: 26px 30px 1rem;
  color: #7d879c;
  font-size: 12px;
`;

const ItemContainer = styled.div`
  position: relative;
  color: inherit;
  transition: color 150ms ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 1.25rem;
  border-color: transparent;
  &:hover {
    border-color: #d23f57;
    color: #d23f57 !important;
    font-weight: 600;
    & svg {
      color: #d23f57;
    }
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
`;

const ItemIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.35rem;
  margin-right: 10px;
  color: #7d879c;
`;
const ItemText = styled.span`
  margin-top: 3px;
  color: inherit;
  font-size: 14px;
`;

export default function ProfileIndex({ settingArray }) {
  return (
    <Container>
      <Wrapper>
        <Title>ACCOUNT SETTINGS</Title>

        {settingArray.map((element) => (
          <Link
            key={uuidv4()}
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={element.url}>
            <ItemContainer>
              <Item>
                <ItemIcon>
                  <path d={element.icon} />
                </ItemIcon>
                <ItemText>{element.title}</ItemText>
              </Item>
            </ItemContainer>
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
}
