import { useState } from 'react';

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

  function clearForm() {
    setFormField(defaultFormFields);
    alert('Usuario criado om sucesso');
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

      await createUserDocFromAuth(user, { displayName });
      clearForm();
    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        alert('Email já cadastrado, tente outro');
      } else {
        console.log('Erro ao criar usuário ', error);
      }
    }
  }

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
}
export default SignUpForm;
