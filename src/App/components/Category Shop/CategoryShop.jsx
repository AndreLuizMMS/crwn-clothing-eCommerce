import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { categoriesReducer } from '../../../Store/categories/category.reducer';

import ItemCard from '../routes/Shop/ItemCard/ItemCard';

import './Category-Shop.scss';

const CategoryShop = () => {
  const { category } = useParams();
  const { categories } = useSelector(categoriesReducer);

  const categoriesMap = categories.categoriesMap[category];

  return (
    <>
      <h1>{category.toUpperCase()}</h1>
      <div className="category-shop">
        {categoriesMap &&
          categoriesMap.map(product => {
            return <ItemCard products={product} key={product.id} />;
          })}
      </div>
    </>
  );
};

export default CategoryShop;
