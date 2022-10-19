import { useContext, useEffect } from 'react';

import { CartContext } from '../../../Context/CartContext';

import Button from '../Button/Button';
import CartItem from '../Cart-Item/Cart-Item';

import './CartDropdown.scss';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button> Finalizar </Button>
    </div>
  );
};

export default CartDropDown;
