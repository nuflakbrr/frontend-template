import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const createNewClient = () => {
  const BASE_API =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/';

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
  client.interceptors.request.use((config) => {
    const newConfig = { ...config };

    if (accessToken) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
    }

    return newConfig;
  });

  return client;
};

const isAxiosError = axios.isAxiosError;

export { isAxiosError };
