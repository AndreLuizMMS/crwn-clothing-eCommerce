import { useContext, useEffect } from 'react';

import { CartContext } from '../../../../Context/CartContext';

import CheckoutCart from '../../Checkout Cart/CheckoutCart';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div>
        <CheckoutCart />
      </div>
    </>
  );
};

export default Checkout;
