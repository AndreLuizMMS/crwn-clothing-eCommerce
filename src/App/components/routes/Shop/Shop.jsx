import { useContext } from 'react';
import { ProductContext } from '../../../../Context/ProductsContext';

import ItemCard from './ItemCard/ItemCard.jsx';

import './Shop.scss';

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className=" products-container">
      {products.map(product => {
        return <ItemCard key={product.id} products={product} />;
      })}
    </div>
  );
};

export default Shop;
