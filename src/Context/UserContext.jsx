import { useState, createContext, useEffect, useReducer } from 'react';

import { createAction } from '../utils/Reducer/reducer.utils';

import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
  SignOutUser
} from '../utils/FireBase/FireBase';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {}
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = user =>
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
