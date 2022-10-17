import Button from '../Button/Button';
import CartItem from '../Cart-Item/Cart-Item';

import './CartDropdown.scss';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {}
      </div>
      <Button> Finalizar </Button>
    </div>
  );
};

export default CartDropDown;
