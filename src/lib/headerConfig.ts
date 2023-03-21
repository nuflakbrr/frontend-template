export const headerConfigJSON = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access');

    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
    } else {
      return {};
    }
  }
};

export const headerConfigFormData = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access');

    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
    } else {
      return {};
    }
  }
};
