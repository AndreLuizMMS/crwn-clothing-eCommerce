import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../../Context/CartContext';

import CheckoutCartItem from '../Checkout Cart Item/CheckoutCartItem';
import PaymentForm from '../payment-form/PaymentForm';

import './CheckoutCart.scss';

const CheckoutCart = () => {
  const { cartItems, cartPrice } = useContext(CartContext);

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
          <div className="purchase-container">
            <span>{`${cartPrice} $`}</span>
            <PaymentForm />
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
