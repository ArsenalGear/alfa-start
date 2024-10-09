import { isEmpty } from 'utils/validation';

export const loaderLabelChecker = (loadingData: { type: string }) => {
  if (!isEmpty(loadingData)) {
    if (Object.values(loadingData).includes('authData/loginUserRequest')) {
      return 'Идет авторизация';
    }
    if (Object.values(loadingData).includes('catalogs/getModulesListRequest')) {
      return 'Получение списка модулей';
    }
    if (Object.values(loadingData).includes('catalogs/createModuleRequest')) {
      return 'Создание модуля';
    }
    if (Object.values(loadingData).includes('catalogs/getModuleByIdRequest')) {
      return 'Получение информации по модулю';
    }
    if (Object.values(loadingData).includes('catalogs/getModuleByIdRequest')) {
      return 'Обновление модуля';
    }
    if (Object.values(loadingData).includes('catalogs/filterModuleRequest')) {
      return 'Применение параметров фильтра';
    }

    if (Object.values(loadingData).includes('catalogs/filterInstanceRequest')) {
      return 'Применение параметров фильтра';
    }
    if (Object.values(loadingData).includes('catalogs/getInstancesListRequest')) {
      return 'Получение списка инстанций';
    }
    if (Object.values(loadingData).includes('catalogs/createInstanceRequest')) {
      return 'Создание инстанции';
    }
    if (Object.values(loadingData).includes('catalogs/getInstanceByIdRequest')) {
      return 'Получение информации по инстанции';
    }
    if (Object.values(loadingData).includes('catalogs/updateInstanceRequest')) {
      return 'Обновление инстанции';
    }
    if (Object.values(loadingData).includes('services/getRequestPackagesDataRequest')) {
      return 'Получение списка пакетов запросов';
    }
    if (Object.values(loadingData).includes('services/filterRequestPackagesRequest')) {
      return 'Применение параметров фильтра';
    }
    if (Object.values(loadingData).includes('services/getRequestResultById')) {
      return 'Применение результатов выполнения запросов';
    }
  }
  return '';
};
