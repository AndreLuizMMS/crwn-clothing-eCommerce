import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { CartContext } from '../../../Context/CartContext';

import CheckoutCartItem from '../Checkout Cart Item/CheckoutCartItem';
import PaymentForm from '../payment-form/PaymentForm';

import './CheckoutCart.scss';

const CheckoutCart = () => {
  const { cartItems, cartPrice } = useContext(CartContext);
  const stripePromise = loadStripe(
    'pk_test_51M1YDOH8J7vimQRgyJynkr0ATu4gCW0mgmMNLUyGlxEu9hiGFdedFtiMQyV696RX7keATViGDaQpBLnMJ48FCPp100it58vTzO'
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produto</span>
        </div>
        <div className="header-block">
          <span>Descrição</span>
        </div>
        <div className="header-block">
          <span>Quantidade</span>
        </div>
        <div className="header-block">
          <span>Preço</span>
        </div>
        <div className="header-block">
          <span>Remover</span>
        </div>
      </div>
      {cartItems.map(item => {
        return <CheckoutCartItem key={item.id} cartItems={item} />;
      })}
      <div className="total">
        {cartPrice ? (
          <div className='price'>
              <span>{`${cartPrice} $`}</span>
            <div className="unavaliable">
              <h3> UNAVALIABLE </h3>
              <div  className="purchase-container">
                <PaymentForm />
              </div>
            </div>
          </div>
        ) : (
          <>
            Carrinho Vazio
            <Link to="/shop">
              <h2 className="buy-now">Comprar já &gt; </h2>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default CheckoutCart;
