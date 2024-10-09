import { AxiosError } from 'axios';

export const responseErrorHandler = (errorText: JSX.Element | string, error: AxiosError) => {
  const { response } = error;
  // const firstErrorArrayValue = response?.data.messages ? response?.data.messages[0] : [];
  //
  // return `${errorText}. Текст: ${
  //   response
  //     ? response.data.message || response.data.errorMessage || firstErrorArrayValue
  //     : 'Неизвестная ошибка'
  // }. Попробуйте ещё раз.`;
};
