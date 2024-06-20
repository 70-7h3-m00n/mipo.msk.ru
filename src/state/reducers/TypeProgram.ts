import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrate } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { ITypeProgram } from '@/api/fetchTypeProgram/types'

interface TypeProgramDataState {
  typeProgramData: Array<ITypeProgram> | []
}

const initialState: TypeProgramDataState = {
  typeProgramData: [],
};

export const typeProgram = createSlice({
  name: 'typeProgramData',
  initialState,
  reducers: {
    setDataTypeProgram(state, action: PayloadAction<ITypeProgram[]>) {
      state.typeProgramData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>

      return {
        ...state,
        ...hydrateAction.payload.typeProgramReducer,
      }
    })
  },
})

export const { setDataTypeProgram } = typeProgram.actions;

export default typeProgram.reducer
