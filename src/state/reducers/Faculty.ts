import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrate } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { IFaculty } from '@/api/fetchFaculty/type'

interface FacultyDataState {
  facultyData: Array<IFaculty> | []
}

const initialState: FacultyDataState = {
  facultyData: [],
};

export const faculty = createSlice({
  name: 'facultyData',
  initialState,
  reducers: {
    setDataFaculty(state, action: PayloadAction<IFaculty[]>) {
      state.facultyData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>

      return {
        ...state,
        ...hydrateAction.payload.facultyReducer,
      }
    })
  },
})

export const { setDataFaculty } = faculty.actions;

export default faculty.reducer
