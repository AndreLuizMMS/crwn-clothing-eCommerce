import ShopBag from '../../../assets/shopping-bag.svg';
import './Cart-Icon.scss';

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <img src={ShopBag} alt="shopping-bag" className="shopping-bag-icon" />
      <span className="item-count">4</span>
    </div>
  );
};

export default CartIcon;
