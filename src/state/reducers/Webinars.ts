import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { IWebinars } from '@/api/fetchWebinars/type';
import type { hydrate } from '@/state/store';

interface WebinarsDataState {
  webinarsData: Array<IWebinars> | [];
}

const initialState: WebinarsDataState = {
  webinarsData: [],
};

export const webinars = createSlice({
  name: 'webinarsData',
  initialState,
  reducers: {
    setDataWebinars(state, action: PayloadAction<Array<IWebinars>>) {
      state.webinarsData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.webinarsData,
      };
    });
  },
});

export const { setDataWebinars } = webinars.actions;

export default webinars.reducer;
