import { create } from 'zustand';

import { Auth } from '@/utils/interfaces/auth';
import { AuthStore } from '@/utils/types/auth';

const handleSubmit = (auth: Auth, email: string, password: string): Auth => {
  return {
    ...auth,
    email,
    password,
  };
};

const useStore = create<AuthStore>(
  (set): AuthStore => ({
    auth: {
      email: '',
      password: '',
    },
    email: '',
    password: '',
    setEmail: (email: string) =>
      set((state) => ({
        ...state,
        email,
      })),

    setPassword: (password: string) =>
      set((state) => ({
        ...state,
        password,
      })),
    onSubmit: () =>
      set((state) => ({
        ...state,
        auth: handleSubmit(state.auth, state.email, state.password),
      })),
  })
);

export default useStore;
