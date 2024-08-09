import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { IStudentComment } from '@/api/fetchStudentComment/types';
import type { hydrate } from '@/state/store';

interface StudentCommentDataState {
  studentCommentData: Array<IStudentComment> | [];
}

const initialState: StudentCommentDataState = {
  studentCommentData: [],
};

export const studentCommentSlice = createSlice({
  name: 'studentCommentData',
  initialState,
  reducers: {
    setDataStudentComment(
      state,
      action: PayloadAction<Array<IStudentComment>>
    ) {
      state.studentCommentData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.studentCommentReducer,
      };
    });
  },
});

export const { setDataStudentComment } = studentCommentSlice.actions;

export default studentCommentSlice.reducer;
