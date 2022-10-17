import './Cart-Item.scss';

const CartItem = ({ CartItem }) => {
  const { name, quantity } = CartItem;
  return (
    <>
      <h1>{name}</h1>
      <span>{quantity}</span>
    </>
  );
};

export default CartItem;
