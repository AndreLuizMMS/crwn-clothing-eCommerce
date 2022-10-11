import Button from '../Button/Button';

import './CartDropdown.scss';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button> Finalizar </Button>
    </div>
  );
};

export default CartDropDown;
