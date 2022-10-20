import { useContext } from 'react';

import { CartContext } from '../../../Context/CartContext';

const ProductCard = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      {cartItems.map(item => {
        const { name, id, quantity } = item;
        return (
          <div key={id}>
            <p>{name}</p>
            <div>
              <button>&lt;</button>
              <span>{quantity}</span>
              <button onClick={() => addItemToCart(item)}> &gt; </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductCard;
