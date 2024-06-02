import { createSlice } from "@reduxjs/toolkit";

const logoSlice = createSlice({
  name: "logo",
  initialState: {
    path: "@/assets/bestelerim-logo-black.png",
    alt: "Bestelerim Logo",
  },
  reducers: {
    updateLogoPath: (state, action) => {
      state.path = action.payload;
    },
    updateLogoAlt: (state, action) => {
      state.alt = action.payload;
    },
  },
});

export const { updateLogoPath, updateLogoAlt } = logoSlice.actions;
export default logoSlice.reducer;
