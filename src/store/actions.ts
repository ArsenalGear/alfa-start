import {
  NOTIFICATION_CLEAR,
  // LOADER_SUCCESS,
  OPEN_ASYNC_MODAL,
  ASYNC_MODAL_REQUEST_FAILED,
} from './constants';

// необходимо ставить в каждую сагу где не будет события Success(то есть не предполагается туда что либо класть),
// чтобы не писать пустой экшен Success
// export const loaderSuccessAC = () => ({
//   type: LOADER_SUCCESS,
// });

export const clearNotificationAC = () => ({
  type: NOTIFICATION_CLEAR,
});

export const openAsyncModal = (payload: string) => ({
  type: OPEN_ASYNC_MODAL,
  payload,
});

export const asyncModalRequestFailed = (error: any) => ({
  type: ASYNC_MODAL_REQUEST_FAILED,
  error,
});
