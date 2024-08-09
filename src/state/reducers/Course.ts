import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { IProgramCourse } from '@/api/fetchProgramCourse/types';
import type { hydrate } from '@/state/store';

interface CourseDataState {
  courseData: IProgramCourse | null;
}

const initialState: CourseDataState = {
  courseData: null,
};

export const courseSlice = createSlice({
  name: 'courseData',
  initialState,
  reducers: {
    setDataCourse(state, action: PayloadAction<IProgramCourse>) {
      state.courseData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.courseReducer,
      };
    });
  },
});

export const { setDataCourse } = courseSlice.actions;

export default courseSlice.reducer;
