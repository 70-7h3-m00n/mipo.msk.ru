import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { ITeacher } from '@/api/fetchTeacher/types';
import type { hydrate } from '@/state/store';

interface TeacherDataState {
  teacherData: Array<ITeacher> | [];
}

const initialState: TeacherDataState = {
  teacherData: [],
};

export const teacherSlice = createSlice({
  name: 'teacherData',
  initialState,
  reducers: {
    setDataTeacher(state, action: PayloadAction<Array<ITeacher>>) {
      state.teacherData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.teacherReducer,
      };
    });
  },
});

export const { setDataTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
