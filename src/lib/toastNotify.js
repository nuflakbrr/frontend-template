import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const errorToast = (message) => {
  toast.error(message);
};

export const successToast = (message) => {
  toast.success(message);
};

export const infoToast = (message) => {
  toast.info(message);
};

export const warningToast = (message) => {
  toast.warning(message);
};
