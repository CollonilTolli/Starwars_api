import { createSlice } from "@reduxjs/toolkit";

export const fetchingSlice = createSlice({
  name: "fetching",
  initialState: {
    fetching: true
  },
  reducers: {
    enableFetching: (state:any) => {
      state.fetching = true;
      
    },
    disableFetching: (state:any) => {
        state.fetching = false;
    }
  }
});

export const { enableFetching, disableFetching } = fetchingSlice.actions;

export default fetchingSlice.reducer;