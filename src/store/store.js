import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "../features/userSlice";
import questionReducer from '../features/questionSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'questions'] 
}

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const reduxStore = () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  let persistor = persistStore(store)
  return { store, persistor }
}