/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';

const router = useRouter();

export const blockAccess = (localItem) => {
  if (typeof window !== 'undefined') {
    const item = JSON.parse(localStorage.getItem(localItem) || '{}');

    if (item.role !== localItem) {
      localStorage.clear();
      router.push('/');
    }
  }
};
