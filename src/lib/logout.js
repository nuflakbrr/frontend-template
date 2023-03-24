/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';

const router = useRouter();

export const logout = (localItem) => {
  localStorage.removeItem(localItem);
  localStorage.removeItem('access');
  router.push('/');
};
