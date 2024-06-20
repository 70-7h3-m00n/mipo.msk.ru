import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrate } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { ITeacher } from '@/api/fetchFaq/types'

interface FaqDataState {
  faqData: Array<ITeacher> | []
}

const initialState: FaqDataState = {
  faqData: [],
};

export const faq = createSlice({
  name: 'faqData',
  initialState,
  reducers: {
    setDataFaq(state, action: PayloadAction<ITeacher[]>) {
      state.faqData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>

      return {
        ...state,
        ...hydrateAction.payload.faqReducer,
      }
    })
  },
})

export const { setDataFaq } = faq.actions;

export default faq.reducer
