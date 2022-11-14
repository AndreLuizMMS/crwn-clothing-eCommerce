import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

//Methods
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
  SignOutUser
} from '../utils/FireBase/FireBase';

import { setCurrentUser } from '../Context/UserContext';

//Components
import Spinner from './components/Spinner/Spinner';
const Home = lazy(() => import('./components/routes/Home/Home'));
const Shop = lazy(() => import('./components/routes/Shop/Shop'));
const Navigation = lazy(() =>
  import('./components/routes/Navigation/Navigation')
);
const Auth = lazy(() => import('./components/routes/Auth/Auth'));
const Checkout = lazy(() => import('./components/routes/Checkout/Checkout'));
const PaymentForm = lazy(() => import('./components/payment-form/PaymentForm'));

// import './App.scss';
import GlobalStyle from './global.styles';

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
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/sign-in" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
