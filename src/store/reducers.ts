import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ASYNC_MODAL_REQUEST_FAILED, OPEN_ASYNC_MODAL } from './constants';
import { TSetNotificationPayload, TInitialNotificationValues } from './types';

const INITIAL_NOTIFICATION: TInitialNotificationValues = {
  isNotification: false,
  notificationTitle: '',
  notificationMessage: '',
  notificationStatus: '',
  notifications: [],
};
const NotificationSlice = createSlice({
  name: 'notification',
  initialState: INITIAL_NOTIFICATION,
  reducers: {
    setNotification: (state, action: PayloadAction<TSetNotificationPayload>) => {
      state.isNotification = true;
      state.notificationTitle = action.payload.notificationTitle;
      state.notificationMessage = action.payload.notificationMessage;
      state.notificationStatus = action.payload.notificationStatus;
      state.notifications = action.payload.notifications || [];
    },

    clearNotification: () => INITIAL_NOTIFICATION,
  },
});

// открытие через редакс глобальных модалок или аккордеонов
const INITIAL_STATE_UTILS: {
  isOpenLeftBar: boolean;
} = {
  isOpenLeftBar: true,
};
const UtilsSlice = createSlice({
  name: 'utils',
  initialState: INITIAL_STATE_UTILS,
  reducers: {
    setOpenLeftBar: (state, action: PayloadAction<boolean>) => {
      state.isOpenLeftBar = action.payload;
    },
  },
});

const INITIAL_THEME: {
  dark: boolean;
} = {
  dark: false,
};
export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: INITIAL_THEME,
  reducers: {
    setChangeTheme: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

// нотификация через открытие модалки с успехом или ошибкой из саги
const ERROR_STORE_INITIAL_STATE = {
  // @async modal reminds
  openModalType: '', // ключ, который помогает определить какой модалке открыться
  errorText: '', // сюда прокидываются ошибки из саг
  errorInputName: '',
};
const errorStoreReducer = (state = ERROR_STORE_INITIAL_STATE, action: AnyAction) => {
  const { type } = action;
  // @async modal reminds
  // ловим экшен на открытие модалки и забираем его payload c типом экшена.
  if (type === OPEN_ASYNC_MODAL) {
    return {
      ...state,
      openModalType: action.payload,
    };
  }
  // @async modal reminds
  // ловим экшен на ошибку запроса и прокидываем в нем текст ошибки
  if (type === ASYNC_MODAL_REQUEST_FAILED) {
    return {
      ...state,
      errorText: action.error.errorText,
      errorInputName: action.error.errorInputName,
    };
  }
  // @async modal reminds
  // любой экшен с типом success будет чистить состояние error store
  if (type.includes('Success')) {
    return ERROR_STORE_INITIAL_STATE;
  }
  return state;
};

const INITIAL_LANGUAGE: {
  language: 'ru' | 'en';
} = {
  language: 'ru',
};
export const LanguageSlice = createSlice({
  name: 'language',
  initialState: INITIAL_LANGUAGE,
  reducers: {
    setChangeLanguage: (state, action: PayloadAction<'ru' | 'en'>) => {
      state.language = action.payload === 'ru' ? 'en' : 'ru';
    },
  },
});

const INITIAL_LOADING_STATE = {};
const loadingReducer = (state = INITIAL_LOADING_STATE, action: AnyAction) => {
  const { type } = action;

  const matches = /(.*)(Request|Success|Notification)/.exec(type);

  if (!matches) {
    return state;
  }

  if (type.includes('Success') || type.includes('Notification')) {
    return {};
  }
  return { type };
};

export const { setNotification, clearNotification } = NotificationSlice.actions;
export const { setOpenLeftBar } = UtilsSlice.actions;
export const { setChangeTheme } = ThemeSlice.actions;
export const { setChangeLanguage } = LanguageSlice.actions;
export { NotificationSlice, loadingReducer, UtilsSlice, errorStoreReducer };
