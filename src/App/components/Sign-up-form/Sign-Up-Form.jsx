import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  auth
} from '../../../utils/FireBase/FireBase';

import './Sin-Up-form.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  confirmPassword: '',
  password: ''
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, confirmPassword, password } = formField;

  const handleChange = event => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert('As senhas não são compatíveis');
    }

    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      res.user.displayName = displayName;
    } catch (err) {
      console.log('Erro ao ccriar usuário ');
    }
  };

  return (
    <div className="sing-up">
      <form onSubmit={handleSubmit}>
        <h2> Não tenho uma conta </h2>
        <p>Cadastrar com email e senha</p>

        <div className="displayName-container">
          <label>
            Nome
            <input
              required
              type="text"
              name="displayName"
              onChange={handleChange}
              value={displayName}
            />
          </label>
        </div>

        <div className="email-container">
          <label>
            Email
            <input
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </label>
        </div>
        <div className="password-container">
          <label>
            Senha
            <input
              required
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </label>
        </div>
        <div className="confirmPassword">
          <label>
            Confirmar Senha
            <input
              required
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
            />
          </label>
        </div>
        <div className="button-container">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
