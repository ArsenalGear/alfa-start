import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './configureStore';

export const state = (state: RootState) => state;

export const createNotificationDataSelector = () =>
  createSelector(state, (state) => state.notificationsStore);

export const createLoadingSelector = () => createSelector(state, (state) => state.loadingStore);

export const isOpenLeftBarSelector = () =>
  createSelector(state, (state) => state.utils.isOpenLeftBar);

export const getThemeModeSelector = () => createSelector(state, (state) => state.themeStore.dark);

export const openModalTypeSelector = () =>
  createSelector(state, (state) => state.errorStore.openModalType);

export const getLanguageAppSelector = () =>
  createSelector(state, (state) => state.languageStore.language);
