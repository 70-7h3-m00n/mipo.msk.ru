import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { hydrate } from '@/state/store';
import { HYDRATE } from 'next-redux-wrapper';

interface TemplateNameDataState {
  templateNameData: Array<any> | [];
}

const initialState: TemplateNameDataState = {
  templateNameData: [],
};

export const templateNameSlice = createSlice({
  name: 'templateNameData',
  initialState,
  reducers: {
    setDataTemplateName(state, action: PayloadAction<any[]>) {
      state.templateNameData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      const hydrateAction = action as ReturnType<typeof hydrate>;

      return {
        ...state,
        // ...hydrateAction.payload.templateNameReducer,
      };
    });
  },
});

export const { setDataTemplateName } = templateNameSlice.actions;

export default templateNameSlice.reducer;
