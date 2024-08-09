import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { IFaculty } from '@/api/fetchFaculty/type';
import type { hydrate } from '@/state/store';

interface FacultyDataState {
  facultyData: Array<IFaculty> | [];
}

const initialState: FacultyDataState = {
  facultyData: [],
};

export const faculty = createSlice({
  name: 'facultyData',
  initialState,
  reducers: {
    setDataFaculty(state, action: PayloadAction<Array<IFaculty>>) {
      state.facultyData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        ...hydrateAction.payload.facultyReducer,
      };
    });
  },
});

export const { setDataFaculty } = faculty.actions;

export default faculty.reducer;
