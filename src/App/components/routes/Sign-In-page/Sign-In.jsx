import {
  signInWithGooglePopUp,
  createUserDocFromAuth
} from '../../../../utils/FireBase/FireBase';

import SignInForm from '../../Sign-in-form/Sign-in-form';
import SignUpForm from '../../Sign-up-form/Sign-Up-Form';

import './Sign-In.scss';

const SignIn = () => {
  return (
    <>
      <h1>Sign-In page</h1>
      <div className="content-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default SignIn;
