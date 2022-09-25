import { signInWithGooglePopUp } from '../../../../utils/FireBase/FireBase';

import { createUserDocFromAuth } from '../../../../utils/FireBase/FireBase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocFromAuth(user);
  };

  return (
    <>
      <h1>Sign-In page</h1>

      <button onClick={logGoogleUser}>Sign Ing with google</button>
    </>
  );
};

export default SignIn;
