/* eslint-disable no-unused-vars */
'use client';
import React, { createContext, useEffect, useState } from 'react';

const defaultValue = {
  user: undefined,
  isLoading: false,
  accessToken: null,
  setAccessToken: (value) => null,
  setUser: (value) => null,
  logout: () => null,
};

const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const _token = localStorage.getItem('access_token');
    const getUser = localStorage.getItem('user');
    const _user = getUser ? JSON.parse(getUser) : null;

    if (getUser) {
      setAccessToken(_token);
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
