/* eslint-disable max-len */
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import pc from '../assets/pc.png';
import pcOn from '../assets/pc_on.png';
import monitor from '../assets/monitor.png';
import monitorOn from '../assets/monitor_on.png';
import cpu from '../assets/cpu.png';
import cpuOn from '../assets/cpu_on.png';
import graphicsCard from '../assets/graphics-card.png';
import graphicsCardOn from '../assets/graphics-card_on.png';
import laptop from '../assets/laptop.png';
import laptopOn from '../assets/laptop_on.png';
import headphones from '../assets/headphones.png';
import headphonesOn from '../assets/headphones_on.png';

const Container = styled.div`
  display: flex;
  background-color: white;
  overflow-x: auto;
  height: 5rem;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 100px;
  margin-left: unset;
  margin-right: unset;
  background: transparent;
`;

const Title = styled.h5`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  color: inherit;
  text-transform: none;
  white-space: normal;
`;
const Icon = styled.img`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.75rem;
`;
export default function CategoryBar() {
  const navigate = useNavigate();
  const params = useParams();
  const { category } = params;

  return (
    <Container>
      <Item className="ms-auto" onClick={() => navigate('/products/case')}>
        <Icon src={category === 'case' ? pcOn : pc} />
        <Title>PC Case</Title>
      </Item>
      <Item onClick={() => navigate('/products/laptop')}>
        <Icon src={category === 'laptop' ? laptopOn : laptop} />
        <Title>Laptop</Title>
      </Item>
      <Item onClick={() => navigate('/products/cpu')}>
        <Icon src={category === 'cpu' ? cpuOn : cpu} />
        <Title>CPU</Title>
      </Item>
      <Item onClick={() => navigate('/products/graphics_card')}>
        <Icon src={category === 'graphics_card' ? graphicsCardOn : graphicsCard} />
        <Title>Graphics Card</Title>
      </Item>
      <Item onClick={() => navigate('/products/monitors')}>
        <Icon src={category === 'monitors' ? monitorOn : monitor} />
        <Title>Monitors</Title>
      </Item>
      <Item className="me-auto" onClick={() => navigate('/products/headphones')}>
        <Icon src={category === 'headphones' ? headphonesOn : headphones} />
        <Title>Headphones</Title>
      </Item>
    </Container>
  );
}
