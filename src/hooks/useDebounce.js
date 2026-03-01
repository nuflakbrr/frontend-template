import { useEffect, useRef, useState, useCallback } from 'react';

export const useDebounce = (initialValue, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const timerRef = useRef(null);

  const setDebouncedHandler = useCallback(
    (newValue) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setDebouncedValue(newValue);
      }, delay);
    },
    [delay]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return [debouncedValue, setDebouncedHandler];
};
