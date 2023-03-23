import axios from '@/lib/axios';

/**
 * useFetch hooks digunakan untuk mem-fetching semua data dari API.
 * Jika Anda ingin menggunakan proyek ini sebagai aplikasi yang berbasis API, maka anda bisa membuat kustomisasi hooks
 * dengan method yang berbeda.
 *
 * Seperti contoh dibawah ini:
 * export const useFetchById = (url: string) => axios.get(url).then((res) => res.data);
 *
 * export const usePost = (url: string, data: any, headers: any) => axios.post(url, data, headers).then((res) => res.data);
 *
 * export const usePut = (url: string, data: any, headers: any) => axios.put(url, data, headers).then((res) => res.data);
 *
 * export const useDelete = (url: string) => axios.delete(url).then((res) => res.data);
 */

/**
 * Jika Anda tidak ingin menggunakan axios, maka Anda bisa menggunakan contoh dibawah ini:
 * export const useFetcher = (...args: string | any) => fetch(args).then((res) => res.json());
 */
export const useFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);
