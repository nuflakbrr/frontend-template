import { useSyncExternalStore } from 'react';

const subscribe = (callback) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

const getSnapshot = () => {
  return window.innerWidth < 1024; // Tailwind 'lg' breakpoint
};

const getServerSnapshot = () => false;

/**
 * Hook to detect if the current screen size is mobile/tablet (below 'lg' breakpoint).
 * @returns boolean
 */
const useMobileResponsive = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMobileResponsive;
