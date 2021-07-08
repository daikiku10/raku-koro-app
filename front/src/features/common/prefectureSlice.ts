import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface PrefectureState {
  prefCode: number;
  status: 'success' | 'loading' | 'failed';
}

const initialState: PrefectureState = {
  prefCode: 1,
  status: 'loading',
};

export const prefectureSlice = createSlice({
  name: 'prefecture',
  initialState,
  reducers: {
    selectedPrefecture: (state, action) => {
      const clonedState = { ...state };
      clonedState.status = 'success';
      clonedState.prefCode = action.payload;
      return clonedState;
    },
  },
});

export const { selectedPrefecture } = prefectureSlice.actions;

export const selectPrefecture = (state: RootState) => state.prefecture;

export default prefectureSlice.reducer;
