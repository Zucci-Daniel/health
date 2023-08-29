import {createSlice} from '@reduxjs/toolkit';
import {storeState} from './type';

const initialState: storeState = {
  user: null,
  seenAuser: false,
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    reset: (state: any) => {},
    setCurrentUser: (state: any, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {reset, setCurrentUser} = storeSlice.actions;
export const storeReducer = storeSlice.reducer;
