import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { IProgramCourses } from '@/api/fetchProgramCourses/types';
import type { hydrate } from '@/state/store';

interface CoursesDataState {
  coursesData: Array<IProgramCourses> | [];
}

const initialState: CoursesDataState = {
  coursesData: [],
};

export const coursesSlice = createSlice({
  name: 'coursesData',
  initialState,
  reducers: {
    setDataCourses(state, action: PayloadAction<Array<IProgramCourses>>) {
      state.coursesData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.coursesReducer,
      };
    });
  },
});

export const { setDataCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
