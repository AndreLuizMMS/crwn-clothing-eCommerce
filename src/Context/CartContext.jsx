import { createContext, useState, useEffect } from 'react';

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

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

    const priceSum = cartItems.reduce((sum, item) => {
      sum += item.price * item.quantity;
      return sum;
    }, 0);
    setCartPrice(priceSum);
  }, [cartItems]);

  const addItemToCart = itemToAdd => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };
  const removeItemToCart = itemToRemove => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };
  const clearItem = itemToClear => {
    setCartItems(clearItemFromCart(cartItems, itemToClear));
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
