/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { Auth } from '@/interfaces/auth';

type Props = {
  children: ReactNode;
};

type ContextType = {
  user?: Auth;
  isLoading: boolean;
  accessToken?: string;
  setAccessToken: Dispatch<SetStateAction<string>> | ((value: string) => void);
  setUser: Dispatch<SetStateAction<any>> | ((value: any) => void);
  logout: () => void;
};

const defaultValue: ContextType = {
  isLoading: false,
  setAccessToken: (value: string) => null,
  setUser: (value: any) => null,
  logout: () => null,
};

const AuthContext = createContext<ContextType>(defaultValue);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [user, setUser] = useState<Auth | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const _token = localStorage.getItem('access_token');
    const getUser = localStorage.getItem('user');
    const _user = getUser ? JSON.parse(getUser) : null;

    if (getUser) {
      setAccessToken(_token as any);
      setUser(_user);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = () => {
    setAccessToken(undefined);
    setUser(undefined);

    localStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem('access_token', accessToken || '');
    localStorage.setItem('user', JSON.stringify(user) || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        accessToken,
        setAccessToken,
        setUser,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
