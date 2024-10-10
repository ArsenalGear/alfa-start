import { useMutation, useQueryClient } from '@tanstack/react-query';
import { jsonCreate } from 'api/json/jsonCreate';

export const useCreatePost = (data?: any) => {
  const client = useQueryClient();
  console.log('post', data);
  const { mutate: create } = useMutation({
    // mutationFn: (data) => jsonCreate(data),
    // mutationFn: jsonCreate,

    mutationFn: (data: any) => {
      // Изменяем данные перед передачей в jsonCreate
      const modifiedData = {
        ...data, // передаем исходные данные
        additionalField: 'new', // добавляем новое поле
        title: data.title?.toUpperCase(), // модифицируем существующее поле
      };
      return jsonCreate(modifiedData);
    },

    onSuccess: (newPost) => {
      console.log('newPost', newPost);
      client.invalidateQueries({ queryKey: ['posts', 'all'] }); // Инвалидация кэша по ключу 'posts', сразу получить данные чтобы обновить массив
    },

    //изменять кэш руками и не делать лишнего запроса на сервер
    //setQueriesData - какие именно параметры мы хотим обновить
    //   onSuccess: (newTodo) => {
    //     console.log('newTodo', newTodo);
    //     client.invalidateQueries({ queryKey: ['posts', 'all'] }); //инвалидация кэша при добавлении поста обновить кэш по ключу posts с моими настройками 'all'
    //     // client.getQueryData(['todos', 'all'])
    //     // client.setQueriesData<T1odo[]>(['t1odos', 'all'], (oldT1odos) => [...(oldT1odos || []), new T1odo]);
    //     // client.invalidateQueries({
    //     //   queryKey: ['todos', 'all'],
    //     //   refetchType: 'none',
    //     // });
    //   },
  });

  return { create };
};
