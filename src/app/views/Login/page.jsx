'use client'
import { useState } from 'react';
import styles from './styles.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Realiza la autenticación si la validación de formato pasó
    if (!emailError) {
      // Realizar la lógica de autenticación
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={styles.inputs}
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <div>
            <label htmlFor="password">Contraeña</label>
            <input
              type='password'
              id="password"
            />
          </div>
          {/* Otros campos del formulario */}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}