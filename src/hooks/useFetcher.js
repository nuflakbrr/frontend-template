import axios from '@/lib/axios';

/**
 * useFetch hooks digunakan untuk mem-fetching semua data dari API.
 * Jika Anda ingin menggunakan proyek ini sebagai aplikasi yang berbasis API, maka anda bisa membuat kustomisasi hooks
 * dengan method yang berbeda.
 *
 * Seperti contoh dibawah ini:
 * export const useFetcherById = (url, headers) => axios.get(url, headers).then((res) => res.data);
 *
 * export const usePostFetcher = (url, data, headers) => axios.post(url, data, headers).then((res) => res.data);
 *
 * export const usePutFetcher = (url, data, headers) => axios.put(url, data, headers).then((res) => res.data);
 *
 * export const useDeleteFetcher = (url, data, headers) => axios.delete(url, data, headers).then((res) => res.data);
 */

/**
 * Jika Anda tidak ingin menggunakan axios, maka Anda bisa menggunakan contoh dibawah ini:
 * export const useFetcher = (...args) => fetch(args).then((res) => res.json());
 */
export const useFetcher = (url) => axios.get(url).then((res) => res.data);
