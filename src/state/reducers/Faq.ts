import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { ITeacher } from '@/api/fetchFaq/types';
import type { hydrate } from '@/state/store';

interface FaqDataState {
  faqData: Array<ITeacher> | [];
}

const initialState: FaqDataState = {
  faqData: [],
};

export const faq = createSlice({
  name: 'faqData',
  initialState,
  reducers: {
    setDataFaq(state, action: PayloadAction<Array<ITeacher>>) {
      state.faqData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.faqReducer,
      };
    });
  },
});

export const { setDataFaq } = faq.actions;

export default faq.reducer;
