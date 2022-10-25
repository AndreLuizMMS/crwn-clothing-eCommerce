import { useContext } from 'react';
import { CategoriesContext } from '../../../../Context/CategoriesContext';

import CategoryPreview from '../../Category Preview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} productsArr={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
