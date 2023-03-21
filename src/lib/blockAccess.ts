export const blockAccess = (localItem: string, router: any) => {
  if (typeof window !== 'undefined') {
    const item = JSON.parse(localStorage.getItem(localItem) || '{}');
    if (item.role !== localItem) {
      localStorage.clear();
      router.push('/');
    }
  }
};
