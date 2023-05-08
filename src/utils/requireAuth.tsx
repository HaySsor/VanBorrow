import {redirect} from './mutateResponse';

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return redirect('/login?message=Your need login first');
  }

  return null;
}
