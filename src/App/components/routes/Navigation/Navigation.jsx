import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './Navigation.scss'

import crwnLogo from '../../../../assets/crown.svg'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
        <img src={crwnLogo} alt="" />
          </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
          <Link className="nav-links" to="/shop">
            pega
          </Link>
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
          <Link className="nav-links" to="/sign-in">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
