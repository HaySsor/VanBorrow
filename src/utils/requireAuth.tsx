import {redirect} from './mutateResponse';

export async function requireAuth(request: Request) {
  const userIsLogged = localStorage.getItem('loggedIn');
  const pathname = new URL(request.url).pathname;

  if (userIsLogged === null || userIsLogged === 'false') {
    console.log('tu');
    return redirect(
      `/login?message=Your need login first&redirectTo=${pathname}`
    );
  }

  return null;
}
