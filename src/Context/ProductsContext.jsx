import { createContext, useState, useEffect } from 'react';

import SHOP_DATA from '../shopData.js';
import { getCategoriesAndDocuments } from '../utils/FireBase/FireBase';

export const ProductContext = createContext({
  products: []
});

export function ProductsProvider({ children }) {
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const [products, setProducts] = useState([]);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
