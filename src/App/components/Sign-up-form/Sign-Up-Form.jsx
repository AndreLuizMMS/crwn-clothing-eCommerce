import { useState, useContext } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth
} from '../../../utils/FireBase/FireBase';

import './Sin-Up-form.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  confirmPassword: '',
  password: ''
};

function SignUpForm() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, confirmPassword, password } = formField;
  const [erro, setErro] = useState('');

  function clearForm() {
    setFormField(defaultFormFields);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (password != confirmPassword) {
      alert('As senhas não são compatíveis');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      await createUserDocFromAuth(user, { displayName });
      
      clearForm();
      setErro('');
    } catch (error) {
      let pass6Char =
        'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).';
      if (error == pass6Char) {
        setErro('A senha deve concter 6 caracteres');
      }
    }
  }

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <header>
          <h2> Não tenho uma conta </h2>
          <p>Cadastrar com email e senha</p>
        </header>

        <div className="form-container">
          <label>Nome</label>
          <input
            required
            type="text"
            name="displayName"
            onChange={handleChange}
            value={displayName}
          />

          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />

          <label>Senha</label>
          <span>{erro}</span>
          <input
            required
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />

          <label>Confirmar Senha</label>
          <input
            required
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
        </div>

        <div className="button-container">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
export default SignUpForm;
