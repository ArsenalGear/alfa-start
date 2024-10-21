import axios, { AxiosRequestConfig } from 'axios';
import { getTokenFromLocalStorage } from '@/utils/localstorage/api';

const customAxiosInstance = (contentType: string, baseURL: string) => {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': contentType,
    },
  });

  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getTokenFromLocalStorage();

      // @ts-ignore
      config.headers.common.Authorization = token ? `Bearer ${token}` : '';
      return config;
    },
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};

export default customAxiosInstance;
