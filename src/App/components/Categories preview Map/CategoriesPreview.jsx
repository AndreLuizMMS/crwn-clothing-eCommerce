import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { categoriesReducer } from '../../../Store/categories/category.reducer';

import CategoryPreviewCards from '../Category Preview Card/CategoryPreviewCards';

const CategoriesPreview = ({ categoryMap }) => {
  return (
    <>
      {Object.keys(categoryMap).map(title => {
        const products = categoryMap[title];
        return (
          //prettier-ignore
          <CategoryPreviewCards key={title} title={title} productsArr={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
