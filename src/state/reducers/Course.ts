import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrate } from '@/state/store'
import { HYDRATE } from 'next-redux-wrapper'
import { IProgramCourse } from '@/api/fetchProgramCourse/types'

interface CourseDataState {
  courseData: IProgramCourse | null
}

const initialState: CourseDataState = {
  courseData: null,
};

export const courseSlice = createSlice({
  name: 'courseData',
  initialState,
  reducers: {
    setDataCourse(state, action: PayloadAction<IProgramCourse>) {
      state.courseData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>

      return {
        ...state,
        ...hydrateAction.payload.courseReducer,
      }
    })
  },
})

export const { setDataCourse } = courseSlice.actions;

export default courseSlice.reducer
