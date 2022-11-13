import { useNavigate } from 'react-router-dom';
import { useCallback, useContext } from 'react';

import { CartContext } from '../../../Context/CartContext';

import Button from '../Button/Button';
import CartItem from '../Cart-Item/Cart-Item';

import './CartDropdown.scss';

const CartDropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = useCallback(() => {
    setIsCartOpen(false);
    navigate('/checkout');
  });

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button onClick={goToCheckout}>Ver Carrinho</Button>
    </div>
  );
};

export default CartDropDown;
