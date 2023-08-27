'use client'
import { useState } from 'react';

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
      <div
        className='flex align-middle justify-center min-w-fit[1104]'>
        <form
          className='flex flex-col items-center gap-5'
          onSubmit={handleLogin}>
          <div className='azul'>
            <label htmlFor="email">Email</label>
            <input
              className='relative shadow-md bg-#e2f2fe h-12 w-[451px] top-0 left-0 rounded-lg bg-azulClaro'
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              className='relative shadow-md bg-#e2f2fe h-12 w-[451px] top-0 left-0 rounded-lg bg-azulClaro'
              type='password'
              id="password"
            />
          </div>
          <button
            className='flex justify-start mt-10 shadow-md rounded-lg px-6 pr-6 py-3 gap-2 text-azul'
            type="submit">Login</button>
        </form>
      </div>
    </>
  )
}