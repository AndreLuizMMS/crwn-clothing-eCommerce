import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/Home/Home';
import Shop from './components/routes/Shop/Shop';
import Navigation from './components/routes/Navigation/Navigation';
import Auth from './components/routes/Auth/Auth';

import './App.scss';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
