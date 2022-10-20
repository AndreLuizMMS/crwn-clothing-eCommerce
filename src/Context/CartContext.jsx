import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, itemToAdd) => {
  //verifica se o item ja existe no car/shopinho
  const existingItem = cartItems.find(item => item.id === itemToAdd.id); //retorna o item ou undefined

  if (existingItem) {
    //incrementa quant do item existente
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  // se não for repetido, so retorna o array com um novo item
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cartItems.length == 0) {
      //null
    } else {
      const total = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
      setCartCount(total);
    }
  }, [cartItems]);

  const addItemToCart = itemToAdd => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
