import { useContext } from 'react';

import { CartContext } from '../../../Context/CartContext';

import ShopBag from '../../../assets/shopping-bag.svg';
import './Cart-Icon.scss';

const CartIcon = ({ onClick }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <div onClick={onClick} className="cart-icon-container">
      <img src={ShopBag} alt="shopping-bag" className="shopping-bag-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
