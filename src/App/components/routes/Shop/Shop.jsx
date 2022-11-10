import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../../../utils/FireBase/FireBase';
import { setCategories } from '../../../../Store/categories/category.action';

import CategoriesPreview from '../../Categories preview Map/CategoriesPreview';
import CategoryShop from '../../Category Shop/CategoryShop';

import './Shop.scss';

const Shop = () => {
  const [categories, setCategories] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview categoryMap={categories} />} />
      <Route path=":category" element={<CategoryShop categoryMap={categories}/>} />
    </Routes>
  );
};

export default Shop;
