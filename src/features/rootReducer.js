import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import questionReducer from './questionSlice';

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionReducer,
});

export default rootReducer;