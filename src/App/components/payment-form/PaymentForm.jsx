import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import './payment-form.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const res = await fetch(
      'http://localhost:8888/netlify/functions/create-payment-intent.js',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: 10000 })
      }
    )
      .then(resp => resp.json())
      .then(data => data);
    console.log(res);
  };

  return (
    <div className="payment-form-container">
      <p className="credit-card">Credit Card:</p>
      <form onSubmit={paymentHandler}>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pagar</Button>
      </form>
    </div>
  );
};
export default PaymentForm;
