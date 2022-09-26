import { signInWithGooglePopUp } from '../../../utils/FireBase/FireBase';

const SignInForm = () => {
  const logGoogleUserPopUp = async () => {
    console.log('cheogu');
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div className="sign-in">
      <form onSubmit={() => {}}>
        <h2> Já tenho uma conta </h2>
        <p>Entrar com email e senha</p>

        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>

        <div className="password-container">
          <label htmlFor="password">Senha</label>
          <input type="text" name="password" />
        </div>
      </form>
      <div className="button-container">
        <button type="submit">Entrar</button>
        <button onClick={logGoogleUserPopUp}>Entrar com Google</button>
      </div>
    </div>
  );
};
export default SignInForm;
