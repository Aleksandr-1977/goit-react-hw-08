import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectNameFilter } from './selectors';
import { selectContacts } from '../contacts/selectors';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    contactFilter: (state, action) => {
      state.name = action.payload.toLowerCase();
    },
  },
});
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    )
);
export const { contactFilter } = filterSlice.actions;
export default filterSlice.reducer;
