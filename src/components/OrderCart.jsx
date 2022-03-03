import styled from '@emotion/styled';
import React from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

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

const ButtonContainer = styled.p`
  margin: 0px;
  margin-right: 50px;
  color: rgb(125, 135, 156);
  flex: 0 0 0px !important;
`;

const EditButton = styled.button`
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.15rem;
  padding: 4px 6px;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const EditIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.55rem;
`;

export default function OrderCart({ id, createdAt, amount }) {
  const navigate = useNavigate();
  return (
    <Container>
      <ModelContainer onClick={() => navigate(`/order/${id}`)}>
        <Model>{id.slice(0, 11)}</Model>
      </ModelContainer>
      <Values onClick={() => navigate(`/order/${id}`)}>{format(new Date(parseInt(createdAt, 10)), 'dd MMM yyyy')}</Values>
      <Values onClick={() => navigate(`/order/${id}`)}>${amount.toFixed(2)}</Values>
      <ButtonContainer>
        <EditButton onClick={() => navigate(`/order/${id}`)}>
          <EditIcon>
            <path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
          </EditIcon>
        </EditButton>
      </ButtonContainer>
    </Container>
  );
}
