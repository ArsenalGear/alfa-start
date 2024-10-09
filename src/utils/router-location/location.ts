import { Location } from 'history';

export const pathIncludesInLocation = (url: string, location: Location) =>
  location.pathname.includes(url);
