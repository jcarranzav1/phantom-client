import styled from '@emotion/styled';
import React from 'react';
import { minWidth } from '../../style/responsive';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: calc(10% - 40px); ;
`;
const Wrapper = styled.div`
  ${minWidth(1280, {
    flexBasis: '66.6667%',
    flexGrow: 0,
    maxWidth: '66.6667%',
  })}
  ${minWidth(960, {
    flexBasis: '66.6667%',
    flexGrow: 0,
    maxWidth: '66.6667%',
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
const Index = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: -4px;
  margin-bottom: -4px;
`;
const IndexButton = styled.button`
  position: relative;
  margin: 4px 0px;
  appearance: none;
  font-family: 'Open Sans';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 16px;
  white-space: nowrap;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  outline: 0px;
  text-decoration: none;
  border: 0px;
  vertical-align: middle;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  background-color: ${(props) => (props.active ? 'rgb(210, 63, 87)' : 'rgb(252, 233, 236)')};
  color: ${(props) => (props.active ? 'rgb(255, 255, 255)' : 'rgb(210, 63, 87)')};
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    background-color: rgb(210, 63, 87);
    color: rgb(255, 255, 255);
  }
`;

const IndexText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 12px;
  padding-right: 12px;
  white-space: nowrap;
`;

const LineIndex = styled.div`
  width: 50px;
  height: 4px;
  background-color: ${(props) =>
    props.active ? 'rgb(210, 63, 87)' : 'rgb(252, 233, 236)};rgb(252, 233, 236)'};
`;

export default function CartIndex({ state }) {
  return (
    <div className="mb-4">
      <Container>
        <Wrapper>
          <Index>
            <IndexButton active>
              <IndexText>1. Cart</IndexText>
            </IndexButton>
            <LineIndex active={state >= 2} />
            <IndexButton active={state >= 2}>
              <IndexText>2. Details</IndexText>
            </IndexButton>
            <LineIndex active={state >= 3} />
            <IndexButton active={state >= 3}>
              <IndexText>3. Payment</IndexText>
            </IndexButton>
          </Index>
        </Wrapper>
      </Container>
    </div>
  );
}
