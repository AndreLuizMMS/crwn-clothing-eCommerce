import { useState, createContext, useEffect } from 'react';

import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
  SignOutUser
} from '../utils/FireBase/FireBase';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {}
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) createUserDocFromAuth(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
