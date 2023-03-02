import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { persistedLoginReducer } from './persistConfig';
import registerReducer from '../features/register/register';
import postReducer from '../features//Post/post';

const rootReducer = combineReducers({
  login: persistedLoginReducer,
  register: registerReducer,
  post: postReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

const persistor = persistStore(store);

export { store, persistor };
