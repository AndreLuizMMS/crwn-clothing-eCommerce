import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../../../Context/UserContext';
import { SignOutUser } from '../../../../utils/FireBase/FireBase';

import './Navigation.scss';
import crwnLogo from '../../../../assets/crown.svg';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  async function signOutHandler() {
    const res = await SignOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={crwnLogo} alt="" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/">
            Home
          </Link>
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <a href="#" onClick={signOutHandler}>
              Sign-out
            </a>
          ) : (
            <Link className="nav-links" to="/sign-in">
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
