import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../style/buttons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

const Image = styled.img`
  display: block;
  max-width: 320px;
  width: 100%;
  margin-bottom: 1.5rem;
`;
const ButtonContaier = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export default function NotFound({ admin = false }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src="https://bazar-react.vercel.app/assets/images/illustrations/404.svg" />
      <ButtonContaier>
        <Button onClick={() => navigate(-1)} outline>
          Go Back
        </Button>
        <Button onClick={() => (admin ? navigate('/admin') : navigate('/'))}>Go to Home</Button>
      </ButtonContaier>
    </Container>
  );
}
