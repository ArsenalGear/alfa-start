import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type ApplicationState } from '../store';

export interface AppState {
    currentPeriodId: string;
    isSidePanelVisible: boolean;
}

const initialState: AppState = {
    currentPeriodId: '',
    isSidePanelVisible: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrentPeriodId: (state, action: PayloadAction<string>) => {
            state.currentPeriodId = action.payload;
        },
        setSidePanelVisible: (state, action: PayloadAction<boolean>) => {
            state.isSidePanelVisible = action.payload;
        },
    },
});

export const { setCurrentPeriodId, setSidePanelVisible } = appSlice.actions;

export const selectCurrentPeriodId = (state: ApplicationState) => state.app.currentPeriodId;
export const selectIsSidePanelVisible = (state: ApplicationState) => state.app.isSidePanelVisible;
