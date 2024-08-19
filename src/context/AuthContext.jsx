/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import {
  createContext,
  useEffect,
  useState,
} from 'react';

const defaultValue = {
  isLoading: false,
  setAccessToken: (_value) => null,
  setUser: (_value) => null,
  logout: () => null,
};

const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
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

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthContext;
