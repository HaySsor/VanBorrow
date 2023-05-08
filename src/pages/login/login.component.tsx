import {ChangeEvent, useState} from 'react';
import styled from './login.module.scss';
import {useLoaderData} from 'react-router-dom';
import type {userType} from '../../types/userType';
import {usePostLoginData} from '../../hooks/usePostLoginData';

export const loader = ({request}: {request: Request}) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('message');
  return searchTerm;
};

export const LoginPage = () => {
  const [loginFormData, setLoginFormData] = useState<userType>({
    email: '',
    password: '',
  });
  const message = (useLoaderData() as string) || null;

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await usePostLoginData(loginFormData);
    console.log(user);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styled.loginContainer}>
      <h2 className={styled.loginTitle}>Sign in to your account</h2>
      {message && (
        <div>
          <p className={styled.alert}>{message}</p>
        </div>
      )}
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
