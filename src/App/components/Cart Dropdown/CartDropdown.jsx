import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../../../Context/CartContext';

import Button from '../Button/Button';
import CartItem from '../Cart-Item/Cart-Item';

import './CartDropdown.scss';

const CartDropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Link to="/checkout">
        <Button
          onClick={() => {
            setIsCartOpen(false);
          }}
        >
          Ver Carrinho
        </Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
