import customAxiosInstance from './helpers';

export const getFormData = (object: any) => {
  const formData = new URLSearchParams();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
};

const axiosForJSON = customAxiosInstance(
  'application/json',
  process.env.REACT_APP_API_HOST1 as string,
);

export const get = (url: string) => axiosForJSON.get(url);
export const deleteMethod = (url: string) => axiosForJSON.delete(url);
export const post = (url: string, data: any, config?: any) => axiosForJSON.post(url, data, config);
export const put = (url: string, data: any) => axiosForJSON.put(url, data);

// отправка используя x-www-form-urlencoded content type
export const axiosForUrlEncoded = customAxiosInstance(
  'application/x-www-form-urlencoded',
  process.env.REACT_APP_API_HOST as string,
);

export const postForm = (url: string, data: any, config?: any) =>
  axiosForUrlEncoded.post(url, getFormData(data), config);
export const getUserInfoApi = (url: string) => axiosForUrlEncoded.get(url);
