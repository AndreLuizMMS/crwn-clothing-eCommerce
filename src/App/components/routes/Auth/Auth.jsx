import {
  signInWithGooglePopUp,
  createUserDocFromAuth
} from '../../../../utils/FireBase/FireBase';

import SignInForm from '../../Sign-in-form/Sign-in-form';
import SignUpForm from '../../Sign-up-form/Sign-Up-Form';

import './Auth.scss';

const SignIn = () => {
  return (
    <>
      <div className="content-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default SignIn;
