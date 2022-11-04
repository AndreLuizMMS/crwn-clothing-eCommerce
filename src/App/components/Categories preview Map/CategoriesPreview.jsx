import { useSelector } from 'react-redux';
import { categoriesReducer } from '../../../Store/categories/category.reducer';

import CategoryPreviewCards from '../Category Preview Card/CategoryPreviewCards';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(
    categoriesReducer(some => some.categories.categoriesMap)
  );
  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          //prettier-ignore
          <CategoryPreviewCards key={title} title={title} productsArr={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
