import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
    removeMe: boolean;
}

const initialState: AppState = {
    removeMe: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
});
