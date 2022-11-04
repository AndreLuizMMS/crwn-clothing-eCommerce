import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartContext } from '../../../../Context/CartContext';
import { SignOutUser } from '../../../../utils/FireBase/FireBase';
import { selectCurrentUser } from '../../../../Store/user/user.selector';

import CartDropDown from '../../Cart Dropdown/CartDropdown';
import CartIcon from '../../cart icon/Cart-Icon';

import './Navigation.scss';
import crwnLogo from '../../../../assets/crown.svg';

const Navigation = () => {
  const { currentUser } = useSelector(selectCurrentUser);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={crwnLogo} alt="" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <a href="#" onClick={SignOutUser}>
              Sign-out
            </a>
          ) : (
            <Link className="nav-links" to="/sign-in">
              Login
            </Link>
          )}
          <CartIcon onClick={setIsCartOpen} />
        </div>
        {isCartOpen ? <CartDropDown /> : false}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
