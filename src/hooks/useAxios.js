import axios from 'axios';
import { useRouter } from 'next/router';
import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const createNewClient = () => {
  const BASE_API =
    process.env.NEXT_PUBLIC_API_URL || 'https://tes-mobile.landa.id/api/';

  return axios.create({
    baseURL: BASE_API,
    headers: {
      Accept: 'application/json',
    },
    httpsAgent,
  });
};

const client = createNewClient();

export const useAxios = (accessToken) => {
  const { locale } = useRouter();

  client.interceptors.request.use((config) => {
    const newConfig = { ...config };
    newConfig.headers['Accept-Language'] = locale;

    if (accessToken) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
    }

    return newConfig;
  });

  return client;
};

const isAxiosError = axios.isAxiosError;

export { isAxiosError };
