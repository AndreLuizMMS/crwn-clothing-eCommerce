import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/Home/Home';
import Shop from './components/routes/Shop/Shop';
import Navigation from './components/routes/Navigation/Navigation';
import SignIn from './components/routes/Sign-In/Sign-In';

import './App.scss';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}> 
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
