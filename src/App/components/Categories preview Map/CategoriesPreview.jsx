import { useContext } from 'react';
import { CategoriesContext } from '../../../Context/CategoriesContext';

import CategoryPreviewCards from '../Category Preview Card/CategoryPreviewCards';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
