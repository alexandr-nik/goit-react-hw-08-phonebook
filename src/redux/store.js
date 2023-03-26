import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import contactsSlice from './contacts/contactsSlice';
import filterSlice from './contacts/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
 
}
const authReducer = persistReducer(persistConfig, authSlice);
export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);



