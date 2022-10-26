import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../Categories preview Map/CategoriesPreview';
import CategoryShop from '../../Category Shop/CategoryShop';

import './Shop.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryShop />} />
    </Routes>
  );
};

export default Shop;
