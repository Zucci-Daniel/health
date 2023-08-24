import {createSlice} from '@reduxjs/toolkit';
import {storeState} from './type';

const initialState: storeState = {
  user: {
    name: 'daniel',
  },
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    reset: (state: any) => {},
  },
  extraReducers: builder => {},
});

export const {reset} = storeSlice.actions;
export const storeReducer = storeSlice.reducer;
