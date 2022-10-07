import Button from '../../../Button/Button';

import './ItemCard.scss';

const ItemCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  return (
    <div className="item-card-continer">
      <img src={imageUrl} alt="" />
      <footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </footer>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

export default ItemCard;
