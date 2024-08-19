import userReducer from "../features/userSlice";
import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import questionReducer from '../features/questionSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const reduxStore = () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}