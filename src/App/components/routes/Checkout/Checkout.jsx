import { useContext, useEffect } from 'react';

import { CartContext } from '../../../../Context/CartContext';

import ProductCard from '../../Checkout product card/ProductCard';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h1>CheckoutPage</h1>
      <div>
        <ProductCard />
      </div>
    </>
  );
};

export default Checkout;
