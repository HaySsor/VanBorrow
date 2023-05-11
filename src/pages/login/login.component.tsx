import styled from './login.module.scss';
import {
  useLoaderData,
  Form,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import {usePostLoginData} from '../../hooks/usePostLoginData';
import {redirect} from '../../utils/mutateResponse';

export const loader = ({request}: {request: Request}) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('message');
  return searchTerm;
};

export const action = async ({request}: {request: Request}) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const pathname =
    new URL(request.url).searchParams.get('redirectTo') || '/host';

   console.log(new URL(request.url).searchParams.get('redirectTo'))
  try {
    await usePostLoginData({email, password});
    localStorage.setItem('loggedIn', 'true');
    return redirect(pathname);
  } catch (error: any) {
    return error.message;
  }
};

export const LoginPage = () => {
  const message = (useLoaderData() as string) || null;
  const errorMessage = useActionData() as string;
  const navigation = useNavigation();
  const {state} = navigation;
  return (
    <div className={styled.loginContainer}>
      <h2 className={styled.loginTitle}>Sign in to your account</h2>
      {message && (
        <div>
          <p className={styled.alert}>{message}</p>
        </div>
      )}
      {errorMessage && (
        <div>
          <p className={styled.alert}>{errorMessage}</p>
        </div>
      )}
      <Form method='post' className={styled.loginForm} replace>
        <input name='email' type='email' value='test@test.com' placeholder='Email address' />
        <input name='password' type='password' value='test' placeholder='Password' />
        <button disabled={state !== 'idle'}>
          {state !== 'idle'
            ? state.charAt(0).toUpperCase() + state.slice(1) + '...'
            : 'Log in'}
        </button>
      </Form>
    </div>
  );
};
