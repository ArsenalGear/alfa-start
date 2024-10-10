import { fetchData } from '../../api/json/json';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useTodosQuery = (state?: any) => {
  console.log('1', 1);
  return useQuery<any>({
    queryFn: () => fetchData(),
    // queryFn: () => fetchData(state), //параметры для get запроса
    queryKey: ['posts', state], //posts - сохранять под этим именем в кэше или обновлять //state - все тудушки, параметр выдуманный 'all'  queryKey: ['posts', 'all']
    staleTime: 1000 * 50, //время в течении которого сначала смотрим кэш а потом идем на сервер
    // cacheTime: 1000 * 5,
    throwOnError: (error: Error | AxiosError) => {
      // console.log(error.response?.status >= 500);
      console.log(999, error);
      return false;
    },
  });
};

export { useTodosQuery };
