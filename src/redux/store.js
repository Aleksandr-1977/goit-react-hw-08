import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filters/slice';
import contactsReducer from './contacts/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
