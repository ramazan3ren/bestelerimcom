import { createSlice } from "@reduxjs/toolkit";

export const logoSlice = createSlice({
  name: "logo",
  initialState: {
    path: "https://i.imgur.com/rdR8T53.png",
  },
  reducers: {
    setLogoPath: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { setLogoPath } = logoSlice.actions;
export default logoSlice.reducer;
