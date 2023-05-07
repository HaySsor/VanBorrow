import {ChangeEvent, useState} from 'react';
import styled from './login.module.scss';

export const LoginPage = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className={styled.loginContainer}>
      <h2 className={styled.loginTitle}>Sign in to your account</h2>
      <form onSubmit={handleSubmit} className={styled.loginForm}>
        <input
          name='email'
          onChange={handleChange}
          type='email'
          placeholder='Email address'
          value={loginFormData.email}
        />
        <input
          name='password'
          onChange={handleChange}
          type='password'
          placeholder='Password'
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};
