import { createContext, useReducer } from 'react';

import { createAction } from '../utils/Reducer/reducer.utils';

const addCartItem = (cartItems, itemToAdd) => {
  //verifica se o item ja existe no car/shopinho
  //incrementa quant do item existente
  // se não for repetido, so retorna o array com um novo item

  const existingCartItem = cartItems.find(item => item.id === itemToAdd.id); //retorna o item ou undefined

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  // achar o item pra remover
  // se quantity == 1, remover  completamente
  // senão, retornar o mesmo array com quantity -1

  const existingCartItem = cartItems.find(cartItem => {
    return cartItem.id == itemToRemove.id; // retorna o item achado ou undefined
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => {
      item.id != itemToRemove.id;
    });
  }

  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter(item => item.id != itemToClear.id);
};

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartPrice: 0
});

const INITAL_STATE = {
  isCartOpen: false,
  cartCount: 0,
  cartPrice: 0,
  cartItems: []
};

const ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };
    case ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        ...payload
      };
    default:
      throw new Error(`Unhandled type of ${type} `);
  }
};

export const CartProvider = ({ children }) => {
  //
  const [{ isCartOpen, cartCount, cartPrice, cartItems }, dispatch] =
    useReducer(cartReducer, INITAL_STATE);

  const setIsCartOpen = () => {
    dispatch(createAction('SET_IS_CART_OPEN', { isCartOpen: !isCartOpen }));
  };

  const updateCartItemsReducer = newCartItems => {
    const newCartCount = newCartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    dispatch(
      createAction('SET_CART_ITEMS', {
        cartItems: newCartItems,
        cartPrice: newCartTotal,
        cartCount: newCartCount
      })
    );
  };

  const addItemToCart = itemToAdd => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = itemToRemove => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItem = itemToClear => {
    const newCartItems = clearItemFromCart(cartItems, itemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItem,
    cartItems,
    cartCount,
    cartPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
