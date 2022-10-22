import { useContext } from 'react';

import { CartContext } from '../../../Context/CartContext';

import './CheckoutCartItem.scss';

const CheckoutCartItem = ({ cartItems }) => {
  const { addItemToCart, removeItemToCart, clearItem } =
    useContext(CartContext);
  const { name, quantity, imageUrl, price } = cartItems;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemToCart(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}$</span>
      <div className="remove-button" onClick={() => clearItem(cartItems)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutCartItem;
