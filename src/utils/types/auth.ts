import { Auth } from '../interfaces/auth';

export type AuthStore = {
  auth: Auth;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onSubmit: (auth: Auth) => void;
};
