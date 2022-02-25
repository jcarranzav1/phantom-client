import styled from '@emotion/styled';
import React from 'react';
import { format } from 'date-fns';

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  --box-align: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 6px 18px;
`;

const ModelContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 6px;
  flex: 2 2 220px !important;
`;

const Model = styled.p`
  margin: 0px 0px 0px 20px;
  font-size: 15px;
  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;

const Values = styled.h5`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  margin: 20px;
  text-align: left;
  text-transform: none;
  white-space: normal;
  flex: 1 1 0px;
`;
export default function OrderCart({ id, createdAt, amount }) {
  console.log(createdAt);
  return (
    <Container>
      <ModelContainer>
        <Model>{id.slice(0, 11)}</Model>
      </ModelContainer>
      <Values>{format(new Date(parseInt(createdAt, 10)), 'dd MMM yyyy')}</Values>
      <Values>${amount.toFixed(2)}</Values>
    </Container>
  );
}
