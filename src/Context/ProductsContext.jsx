import { createContext, useState } from 'react';

import PRODUCTS from '../shopData.json';

export const ProductContext = createContext({
  products: []
});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}