import { useContext, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../../Context/CategoriesContext';
import ItemCard from '../routes/Shop/ItemCard/ItemCard';

import './Category-Shop.scss';

const CategoryShop = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h1>{category.toUpperCase()}</h1>
      <div className="category-shop">
        {products &&
          products.map(product => {
            return <ItemCard products={product} key={product.id} />;
          })}
      </div>
    </>
  );
};

export default CategoryShop;
