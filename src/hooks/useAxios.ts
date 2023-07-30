import axios, { AxiosInstance } from 'axios';
import { useRouter } from 'next/router';
import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const createNewClient: () => AxiosInstance = () => {
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

export const client: AxiosInstance = createNewClient();

type HookType = (accessToken?: string) => AxiosInstance;

export const useAxios: HookType = (accessToken) => {
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

export const { isAxiosError } = axios;
