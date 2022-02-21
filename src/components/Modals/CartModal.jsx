import styled from '@emotion/styled';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartCard } from '../Products/CartCard';
import { Button } from '../../style/buttons';
import { useCartSelector } from '../../store/cart/cartStore';

const Top = styled.div`
  overflow: auto;
  height: calc((100vh - 80px) - 3.25rem);
`;

const Bottom = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px;
  height: 74px;
  color: rgb(15, 52, 96);
`;

const BreakLine = styled.hr`
  margin: 0px;
  flex-shrink: 0;
  border-width: 1px 1px thin;
  border-style: solid;
  border-color: #e1e6e9;
`;
const HeaderIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
`;

const HeaderText = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-left: 8px;
`;

const CartModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const cartArray = useCartSelector((state) => state.cartItems);
  const total = useCartSelector((state) => state.total);

  return (
    <Modal className="p-0 modalRight" onHide={handleClose} show={show}>
      <Top>
        <Header>
          <HeaderIcon>
            <path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" />
          </HeaderIcon>
          <HeaderText>{cartArray.length} item</HeaderText>
        </Header>
        <BreakLine />
        {cartArray.map((products) => (
          <CartCard key={uuidv4()} {...products} />
        ))}
      </Top>
      <Bottom>
        <Button className="mb-3" large>
          Checkout Now (${total})
        </Button>
        <Button onClick={() => navigate('/shopcart')} large outline>
          View Cart
        </Button>
      </Bottom>
    </Modal>
  );
};
export default CartModal;
