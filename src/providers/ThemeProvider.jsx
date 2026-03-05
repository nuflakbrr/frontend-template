import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  useCallback,
} from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'theme-preference',
}) => {
  const subscribe = useCallback(
    (callback) => {
      window.addEventListener('storage', callback);
      return () => window.removeEventListener('storage', callback);
    },
    []
  );

  const getSnapshot = useCallback(() => {
    return (localStorage.getItem(storageKey)) || defaultTheme;
  }, [storageKey, defaultTheme]);

  const getServerSnapshot = useCallback(() => {
    return defaultTheme;
  }, [defaultTheme]);

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const [resolvedTheme, setResolvedTheme] = useState('light');

  const setTheme = useCallback(
    (newTheme) => {
      localStorage.setItem(storageKey, newTheme);
      // Dispatch a storage event so useSyncExternalStore updates in the same tab
      window.dispatchEvent(new Event('storage'));
    },
    [storageKey]
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (t) => {
      let resolved;

      if (t === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      } else {
        resolved = t;
      }

      root.classList.remove('light', 'dark');
      root.classList.add(resolved);
      setResolvedTheme(resolved);
    };

    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme('system');
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
