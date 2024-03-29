import React, { useState } from 'react';
import {
  Form, Button, Col,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../componets/FormContainer';
import { savePaymentMethod } from '../redux/actions/cartActions';
import CheckoutSteps from '../componets/CheckoutSteps';

function PaymentPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="PayPal"
              name="Payment Method"
              value="PayPal"
              checked
              onChange={((e) => setPaymentMethod(e.target.value))}
            />
            {/* <Form.Check */}
            {/*  type="radio" */}
            {/*  label="Stripe" */}
            {/*  id="Stripe" */}
            {/*  name="Payment Method" */}
            {/*  value="Stripe" */}
            {/*  onChange={((e) => setPaymentMethod(e.target.value))} */}
            {/* /> */}
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">Continue</Button>

      </Form>
    </FormContainer>
  );
}

export default PaymentPage;
