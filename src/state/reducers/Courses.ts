import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrate } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { IProgramCourses } from '@/api/fetchProgramCourses/types'

interface CoursesDataState {
  coursesData: Array<IProgramCourses> | []
}

const initialState: CoursesDataState = {
  coursesData: [],
};

export const coursesSlice = createSlice({
  name: 'coursesData',
  initialState,
  reducers: {
    setDataCourses(state, action: PayloadAction<IProgramCourses[]>) {
      state.coursesData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>

      return {
        ...state,
        ...hydrateAction.payload.coursesReducer,
      }
    })
  },
})

export const { setDataCourses } = coursesSlice.actions;

export default coursesSlice.reducer
