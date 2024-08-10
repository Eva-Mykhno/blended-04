import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload
    }
  },
  selectors: {
    selectFilter: (state) => state.filter
  }
});

export const { selectFilter } = filterSlice.selectors
export const filterReducer = filterSlice.reducer
export const { changeFilter } = filterSlice.actions