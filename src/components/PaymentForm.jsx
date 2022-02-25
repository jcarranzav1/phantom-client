import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PropagateLoader } from 'react-spinners';
import queryString from 'query-string';
import { Button } from '../style/buttons';
import { CLIENT_URL } from '../session/consts';

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
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { payment_intent_client_secret: clientSecret } = query;

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
      case 'succeeded':
        navigate('/success');
        break;
      case 'requires_payment_method':
        navigate('/error');
        break;
      default:
        navigate('/error');
        break;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const data = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // eslint-disable-next-line camelcase
        return_url: `${CLIENT_URL}/payment`,
      },
    });
    console.log(data);
    if (data.error.type === 'card_error' || data.error.type === 'validation_error') {
      console.log(data.error.message);
    } else {
      console.log('An unexpected error occured.');
    }

    setIsLoading(false);
  };
  return (
    <Form onSubmit={handleSubmit} style={{ opacity: isLoading ? '0.4' : '1' }}>
      <BillingContainer>
        <BillingTitle>Credit Card</BillingTitle>
        <Form.Group controlId="formGridModel" style={{ padding: 0 }}>
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
          <PaymentElement />
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
