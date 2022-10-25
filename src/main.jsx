import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';
import { UserProvider } from './Context/UserContext';
import { CategoriesProvider } from './Context/CategoriesContext';
import { CartProvider } from './Context/CartContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
//test
