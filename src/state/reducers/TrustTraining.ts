import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrate } from '@/state/store'
import { HYDRATE } from 'next-redux-wrapper'
import { ITrustTraining } from '@/api/fetchTrustTraining/types'

interface TrustTrainingDataState {
  trustTrainingData: Array<ITrustTraining> | []
}

const initialState: TrustTrainingDataState = {
  trustTrainingData: [],
};

export const trustTrainingSlice = createSlice({
  name: 'trustTrainingData',
  initialState,
  reducers: {
    setDataTrustTraining(state, action: PayloadAction<ITrustTraining[]>) {
      state.trustTrainingData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>

      return {
        ...state,
        ...hydrateAction.payload.trustTrainingReducer,
      }
    })
  },
})

export const { setDataTrustTraining } = trustTrainingSlice.actions;

export default trustTrainingSlice.reducer
