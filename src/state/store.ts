import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import courseReducer from './reducers/Course';
import coursesReducer from './reducers/Courses';
import facultyReducer from './reducers/Faculty';
import faqReducer from './reducers/Faq';
import studentCommentReducer from './reducers/StudentComment';
import teacherReducer from './reducers/Teacher';
import trustTrainingReducer from './reducers/TrustTraining';
import typeProgramReducer from './reducers/TypeProgram';
import webinarsData from './reducers/Webinars';

const rootReducer = combineReducers({
  faqReducer,
  facultyReducer,
  typeProgramReducer,
  coursesReducer,
  teacherReducer,
  studentCommentReducer,
  trustTrainingReducer,
  courseReducer,
  webinarsData,
});

// Создание и экспорт store
export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

// Типизация
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

// Определение действия HYDRATE
export const hydrate = (payload: RootState) => ({
  type: HYDRATE,
  payload,
});

// Создание и экспорт обертки
export const wrapper = createWrapper<AppStore>(makeStore);
