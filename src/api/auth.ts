import { postForm, getUserInfoApi } from '@/utils/api/request';
// import { TLogin } from '../containers/LoginPage/types';

// export const getToken = (data: TLogin) =>
export const getToken = (data: any) =>
  postForm(
    `/auth/realms/${process.env.REACT_APP_KEYCLOAK_REALM}/protocol/openid-connect/token`,
    data,
  ).then((response) => response.data);

export const getUserInfo = () =>
  getUserInfoApi(
    `/auth/realms/${process.env.REACT_APP_KEYCLOAK_REALM}/protocol/openid-connect/userinfo`,
  ).then((response) => response.data);
