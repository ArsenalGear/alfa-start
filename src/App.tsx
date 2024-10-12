import React, { FC, useEffect } from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
// import { AppWrapper } from 'containers/styles';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
// import { clearNotification, setNotification } from 'store/reducers';
// import { loaderLabelChecker } from 'utils/redux/loader';
import { isEmpty } from '@/utils/validation';
import { Routes } from './routes';
import { createNotificationDataSelector, createLoadingSelector } from './store/selectors';
import { useTodosQuery } from './utils/hooks/usePostsQuery';
import { useCreatePost } from './utils/hooks/useCreatePost';
import { BaseButton } from '@/components/custom-components/Button';

const App: FC = () => {
  // const dispatch = useDispatch();
  // const client = useQueryClient();
  const { create } = useCreatePost();
  // const { create } = useCreatePost({ test: 1 });

  // const { mutate: create } = useMutation({
  //   //create - можем дать любое имя
  //   // mutationFn: () => jsonCreate(id, !completed), - передать сразу ключи
  //   mutationFn: jsonCreate,
  //   // onSuccess: () => {
  //   //   client.invalidateQueries({ queryKey: ['todos', 'all'] });
  //   // },
  //
  //   onSuccess: (newTodo) => {
  //     console.log('newTodo', newTodo);
  //     client.invalidateQueries({ queryKey: ['posts', 'all'] }); //инвалидация кэша при добавлении поста обновить кэш по ключу posts с моими настройками 'all'
  //     // client.getQueryData(['todos', 'all'])
  //     // client.setQueriesData<T1odo[]>(['todos', 'all'], (oldTodos) => [...(oldTodos || []), newTodo]);
  //     // client.invalidateQueries({
  //     //   queryKey: ['todos', 'all'],
  //     //   refetchType: 'none',
  //     // });
  //   },
  // });

  const loadingData: any = useSelector(createLoadingSelector());
  const notificationData: any = useSelector(createNotificationDataSelector());

  // const singleNotificationLength = notificationData.notifications.length === 1;

  // const isSingleNotification = (elem: string) => {
  //   if (singleNotificationLength) {
  //     dispatch(clearNotification());
  //   } else {
  //     dispatch(
  //       setNotification({
  //         notificationTitle: 'Ошибка',
  //         notificationStatus: 'error-status',
  //         notifications: deleteNotify(elem),
  //       }),
  //     );
  //   }
  // };

  // const deleteNotify = (elem: any) =>
  //   notificationData.notifications.filter(
  //     (e: any, index: number) => elem !== notificationData.notifications[index][0],
  //   );
  // 1
  const returnBackOrFrontNotify = () => {
    if (notificationData.notifications.length > 0) {
      return notificationData.notifications.map((e: any[]) => (
        <React.Fragment key={e[0]}>
          {/*<NotificationWindow*/}
          {/*  style={{ bottom: `${(i + 1) * 5.5 - 4.5}rem` }}*/}
          {/*  handleClose={() => isSingleNotification(e[0])}*/}
          {/*  notificationTitle={notificationData.notificationTitle}*/}
          {/*  message={`${e[0]}: ${e[1]}`}*/}
          {/*  status={notificationData.notificationStatus}*/}
          {/*/>*/}
        </React.Fragment>
      ));
    }
    return (
      <>
        {/*<NotificationWindow*/}
        {/*  handleClose={() => dispatch(clearNotification())}*/}
        {/*  notificationTitle={notificationData.notificationTitle}*/}
        {/*  message={notificationData.notificationMessage}*/}
        {/*  status={notificationData.notificationStatus}*/}
        {/*/>*/}
      </>
    );
  };

  // const { data, isLoading, isSuccess } = useTodosQuery(state); //параметры для get запроса
  // const { data, isLoading, isSuccess, isError } = useTodosQuery();
  const { data, isError } = useTodosQuery();
  console.log('isError', isError);

  console.log('data', data);
  // console.log('isLoading', isLoading);
  // console.log('isSuccess', isSuccess);

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const result = await fetchData();
    //     console.log('result', result);
    //     // setData(result);
    //   } catch (err) {
    //     // setError(err);
    //   } finally {
    //     // setLoading(false);
    //   }
    // };
    //
    // getData();
  }, []);

  const createPost = async () => {
    // try {
    //   const result = await jsonCreate({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   });
    // //   console.log('result', result);
    // //   // setData(result);
    // // } catch (err) {
    // //   // setError(err);
    // // } finally {
    // //   // setLoading(false);
    // // }
    //create - можем дать любое имя
    create({
      id: 1,
      title: '11',
      body: 'bar11',
      // userId: 1,
    });
  };

  return (
    <>
      {/*<AppWrapper>*/}
      <BrowserRouter>
        <title>App</title>
        {/*<>{console.log('4', 421)}</>*/}
        {/*<button*/}
        {/*  onClick={() =>*/}
        {/*    create({*/}
        {/*      id: 1,*/}
        {/*      title: 'foo',*/}
        {/*      body: 'bar',*/}
        {/*      // userId: 1,*/}
        {/*    })*/}
        {/*  }*/}
        {/*>*/}
        {/*  Изменить пост*/}
        {/*</button>*/}
        <button onClick={createPost}>Создать пост2222 </button>
        <BaseButton btnText="123" />
        <Routes />
      </BrowserRouter>

      {!isEmpty(loadingData) && (
        <>
          {/*<MainLoader*/}
          {/*  open={!isEmpty(loadingData)}*/}
          {/*  label={loaderLabelChecker(loadingData as { type: string })}*/}
          {/*/>*/}
        </>
      )}
      {/*</AppWrapper>*/}
      {notificationData.isNotification && returnBackOrFrontNotify()}
    </>
  );
};

export default App;
