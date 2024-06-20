import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrate } from '@/state/store'
import { HYDRATE } from 'next-redux-wrapper'
import { IStudentComment } from '@/api/fetchStudentComment/types'

interface StudentCommentDataState {
  studentCommentData: Array<IStudentComment> | []
}

const initialState: StudentCommentDataState = {
  studentCommentData: [],
};

export const studentCommentSlice = createSlice({
  name: 'studentCommentData',
  initialState,
  reducers: {
    setDataStudentComment(state, action: PayloadAction<IStudentComment[]>) {
      state.studentCommentData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>

      return {
        ...state,
        ...hydrateAction.payload.studentCommentReducer,
      }
    })
  },
})

export const { setDataStudentComment } = studentCommentSlice.actions;

export default studentCommentSlice.reducer
