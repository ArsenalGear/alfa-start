// import { TInstancesListElement } from 'containers/services/Catalogs/store/types';
import { get, post } from '@/utils/api/request';

export const getInstancesListApi = () =>
  get(`/api/db_instances/`).then((response) => response.data);

// export const createInstancesApi = (data: TInstancesListElement) =>
//   post(`/api/db_instances/`, data).then((response) => response.data);

export const getInstanceByIdApi = (id: number | string) =>
  get(`/api/db_instances/${id}/`).then((response: any) => response.data);

// export const updateInstanceApi = (id: number | string, data: TInstancesListElement) =>
//   put(`/api/db_instances/${id}/`, data).then((response) => response.data);

export const filterInstanceApi = (data: any) =>
  post(
    `api/db_instances/search/
  `,
    data,
  ).then((response: any) => response.data);

export const instancesAPI = {
  getInstancesListApi,
};
