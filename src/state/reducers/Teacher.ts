import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrate } from '@/state/store'
import { HYDRATE } from 'next-redux-wrapper'
import { ITeacher } from '@/api/fetchTeacher/types'

interface TeacherDataState {
  teacherData: Array<ITeacher> | []
}

const initialState: TeacherDataState = {
  teacherData: [],
};

export const teacherSlice = createSlice({
  name: 'teacherData',
  initialState,
  reducers: {
    setDataTeacher(state, action: PayloadAction<ITeacher[]>) {
      state.teacherData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>

      return {
        ...state,
        ...hydrateAction.payload.teacherReducer,
      }
    })
  },
})

export const { setDataTeacher } = teacherSlice.actions;

export default teacherSlice.reducer
