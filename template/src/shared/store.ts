import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './slices/api-slice';
import { appSlice } from './slices/app-slice';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    app: appSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type ApplicationState = ReturnType<typeof store.getState>;
