import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import faqReducer from './reducers/Faq';
import facultyReducer from './reducers/Faculty'
import typeProgramReducer from './reducers/TypeProgram'
import coursesReducer from './reducers/Courses'
import teacherReducer from './reducers/Teacher'
import studentCommentReducer from './reducers/StudentComment'
import trustTrainingReducer from './reducers/TrustTraining'
import courseReducer from './reducers/Course'

const rootReducer = combineReducers({
  faqReducer,
  facultyReducer,
  typeProgramReducer,
  coursesReducer,
  teacherReducer,
  studentCommentReducer,
  trustTrainingReducer,
  courseReducer
});

// Создание и экспорт store
export const makeStore = () => configureStore({
  reducer: rootReducer,
});

// Типизация
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch']

// Определение действия HYDRATE
export const hydrate = (payload: RootState) => ({
  type: HYDRATE,
  payload,
})

// Создание и экспорт обертки
export const wrapper = createWrapper<AppStore>(makeStore);
