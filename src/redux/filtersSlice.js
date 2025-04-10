import { createSlice } from '@reduxjs/toolkit';

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
export const selectNameFilter = state => state.filters.name;
export const { contactFilter } = filterSlice.actions;
export default filterSlice.reducer;
