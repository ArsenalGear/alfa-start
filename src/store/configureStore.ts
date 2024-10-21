import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import LoginSlice from 'containers/LoginPage/store/LoginSlice';
import storage from 'redux-persist/lib/storage';

// import rootSaga from 'store/rootSaga';
import {
  errorStoreReducer,
  loadingReducer,
  NotificationSlice,
  UtilsSlice,
  ThemeSlice,
  LanguageSlice,
} from '@/store/reducers';
// import CatalogsSlice from '../containers/services/Catalogs/store/CatalogsSlice';
import { authData } from './constants';
// import { postAPI } from '../containers/services/Catalogs/store/instanceRTQ.';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [authData, 'themeStore', 'languageStore'],
};

const rootReducer = combineReducers({
  // RTKQ
  // [postAPI.reducerPath]: postAPI.reducer,
  // авторизация
  // [authData]: LoginSlice.reducer,
  // оверлей и прогрессбра при обработке запроса к бэку
  loadingStore: loadingReducer,
  // тема
  themeStore: ThemeSlice.reducer,
  // язык в приложении
  languageStore: LanguageSlice.reducer,
  // нотификации в левом углу
  notificationsStore: NotificationSlice.reducer,
  // нотификация через открытие модалки с успехом или ошибкой из саги
  errorStore: errorStoreReducer,
  // открытие через редакс глобальных модалок или аккордеонов
  utils: UtilsSlice.reducer,
  // справочники
  // catalogs: CatalogsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false, // disable serializableCheck for RTK Query
  }),

  // sagaMiddleware,
  // postAPI.middleware, // add RTK Query middleware
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
const persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { persistor, store };
