import {
  signInWithGooglePopUp,
  signInWithEmailAndPass,
  createUserDocFromAuth
} from '../../../utils/FireBase/FireBase.js';

import './Sign-in-form.scss';

import logo from '../../../assets/Google__G__Logo.png';
import { useState } from 'react';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const logGoogleUserPopUp = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
  };

  function clearForm() {
    setFormField(defaultFormFields);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const userLogin = await signInWithEmailAndPass(email, password);
      console.log(userLogin);
    } catch (erro) {
      console.log('user sign in failed', error);
    }
  }

  return (
    <div className="sign-in">
      <header>
        <h2> Já tenho uma conta </h2>
        <p>Entrar com email e senha</p>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="login-btn">
          Entrar
        </button>
      </form>
      <button onClick={logGoogleUserPopUp} className="google-btn">
        Entrar com Google
        <img src={logo} className="google-logo" alt="" />
      </button>
    </div>
  );
};
export default SignInForm;
