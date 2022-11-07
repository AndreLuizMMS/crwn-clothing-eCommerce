import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { Elements } from '@stripe/react-stripe-js';

import { CartProvider } from './Context/CartContext';
import { UserProvider } from './Context/UserContext';
import { stripePromise } from './utils/stripe/stripe.utils';

import App from './App/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <BrowserRouter>
          <CartProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartProvider>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
//test
