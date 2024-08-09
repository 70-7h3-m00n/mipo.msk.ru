import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { ITrustTraining } from '@/api/fetchTrustTraining/types';
import type { hydrate } from '@/state/store';

interface TrustTrainingDataState {
  trustTrainingData: Array<ITrustTraining> | [];
}

const initialState: TrustTrainingDataState = {
  trustTrainingData: [],
};

export const trustTrainingSlice = createSlice({
  name: 'trustTrainingData',
  initialState,
  reducers: {
    setDataTrustTraining(state, action: PayloadAction<Array<ITrustTraining>>) {
      state.trustTrainingData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.trustTrainingReducer,
      };
    });
  },
});

export const { setDataTrustTraining } = trustTrainingSlice.actions;

export default trustTrainingSlice.reducer;
