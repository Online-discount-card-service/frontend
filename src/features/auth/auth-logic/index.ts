import { ISignInRequest, ISignUpRequest, api } from '~/shared';

export type TDebouncedFunction<
  T extends (...args: string[]) => Promise<boolean>,
> = (...args: Parameters<T>) => Promise<ReturnType<T>>;

export function signUp(data: ISignUpRequest) {
  return api.signUp(data);
}

export function signIn(data: ISignInRequest) {
  return api.signIn(data).then((res) => {
    localStorage.setItem('token', res.auth_token);
    return res;
  });
}

export function signOut() {
  return api.signOut().then(() => localStorage.removeItem('token'));
}

export async function checkEmail(email: string): Promise<boolean> {
  return api
    .checkCredentials({
      email: email,
      password: 'aaAA1234',
    })
    .then((res) => {
      console.log('res in fetch', res);
      return res;
    })
    .then((res) => (res ? true : false));
}

//NOTE: Debouncer for prevalidation on server
export function debounce<T extends (...args: string[]) => Promise<boolean>>(
  func: T,
  delay: number
): TDebouncedFunction<T> {
  let timeoutId: NodeJS.Timeout;

  return async function (...args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise<ReturnType<T>>((resolve) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(async () => {
        try {
          const result = await func(...args);
          console.log(result);
          resolve(result as ReturnType<T>);
        } catch (error) {
          console.log('error');
          resolve(false as ReturnType<T>);
        }
      }, delay);
    });
  };
}
