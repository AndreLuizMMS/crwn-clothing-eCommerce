import { CardElement } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import './payment-form.scss';

const PaymentForm = () => {
  return (
    <div className="payment-form-container">
      <p className="credit-card">Cartão de Crédito:</p>
      <form onSubmit={paymentHandler}>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pagar</Button>
      </form>
    </div>
  );
};
export default PaymentForm;
