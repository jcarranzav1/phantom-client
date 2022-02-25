import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PropagateLoader } from 'react-spinners';
import { useMutation } from '@apollo/client';
import { Button } from '../style/buttons';
import { PAYMENT } from '../apollo/payment.querys';
import { useCartActions, useCartSelector } from '../store/cart/cartStore';
import { createOrder } from '../apollo/order.query';

const BillingContainer = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  padding: 1.5rem 1.75rem;
  margin-bottom: 2rem;
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`;

const BillingTitle = styled.p`
  margin: 0px 0px 16px;
  font-size: 14px;
  font-family: 'Open Sans';
  line-height: 1.5;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: calc(100% + 48px);
  gap: 20px;
`;

export default function PaymentForm() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMutation, { data }] = useMutation(PAYMENT);
  const [orderMutation] = useMutation(createOrder);
  const [isLoading, setIsLoading] = useState(false);
  const { clearCart } = useCartActions();
  const cartState = useCartSelector((state) => state);
  const billingAddress = JSON.parse(localStorage.getItem('billingAddress'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      if (!error) {
        const { id } = paymentMethod;
        await paymentMutation({
          variables: { input: { id, amount: parseFloat(cartState.total) } },
        });
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    const orderCall = async () => {
      try {
        await orderMutation({
          variables: {
            input: {
              amount: parseFloat(cartState.total),
              products: cartState.cartItems.map((item) => ({
                product: item.id,
                quantity: item.quantity,
              })),
              billingAddress,
            },
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    if (data) {
      orderCall();
      localStorage.removeItem('billingAddress');
      clearCart();
      navigate('/success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <Form onSubmit={handleSubmit} style={{ opacity: isLoading ? '0.4' : '1' }}>
      <BillingContainer>
        <BillingTitle>Credit Card</BillingTitle>
        <Form.Group
          controlId="formGridModel"
          style={{
            border: '1px solid #c4c4c4',
            padding: '10px',
            borderRadius: '8px',
          }}>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
            }}>
            <PropagateLoader
              color="#1373e5"
              loading={isLoading}
              size={25}
              style={{ marginTop: '6000px', marginLeft: '500px' }}
            />
          </div>
          <CardElement />
        </Form.Group>
      </BillingContainer>
      <ButtonContainer>
        <Button onClick={() => navigate('/billing')} type="button" outline>
          Back to Checkout Details
        </Button>
        <Button type="submit">Pay now</Button>
      </ButtonContainer>
    </Form>
  );
}
