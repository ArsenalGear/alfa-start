import { isEmpty } from '@/utils/validation';

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
  }
  return '';
};
