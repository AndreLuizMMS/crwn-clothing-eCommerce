import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../../../utils/FireBase/FireBase';
import { setCategories } from '../../../../Store/categories/category.action';

import CategoriesPreview from '../../Categories preview Map/CategoriesPreview';
import CategoryShop from '../../Category Shop/CategoryShop';

import './Shop.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryShop />} />
    </Routes>
  );
};

export default Shop;
