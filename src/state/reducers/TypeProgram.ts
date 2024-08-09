import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { ITypeProgram } from '@/api/fetchTypeProgram/types';
import type { hydrate } from '@/state/store';

interface TypeProgramDataState {
  typeProgramData: Array<ITypeProgram> | [];
}

const initialState: TypeProgramDataState = {
  typeProgramData: [],
};

export const typeProgram = createSlice({
  name: 'typeProgramData',
  initialState,
  reducers: {
    setDataTypeProgram(state, action: PayloadAction<Array<ITypeProgram>>) {
      state.typeProgramData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.typeProgramReducer,
      };
    });
  },
});

export const { setDataTypeProgram } = typeProgram.actions;

export default typeProgram.reducer;
