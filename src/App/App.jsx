import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

//Methods
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
  SignOutUser
} from '../utils/FireBase/FireBase';
import { setCurrentUser } from '../Store/user/user.action';

//Components
import Home from './components/routes/Home/Home';
import Shop from './components/routes/Shop/Shop';
import Navigation from './components/routes/Navigation/Navigation';
import Auth from './components/routes/Auth/Auth';
import Checkout from './components/routes/Checkout/Checkout';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/sign-in" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
