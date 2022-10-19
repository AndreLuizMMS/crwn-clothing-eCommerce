import { useContext } from 'react';

import Button from '../../../Button/Button';
import { CartContext } from '../../../../../Context/CartContext';

import './ItemCard.scss';

const ItemCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  const { addItemToCart, cartItems } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(products);
  };

  return (
    <div className="item-card-continer">
      <img src={imageUrl} alt={`${name}`} />
      <footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ItemCard;
