import logoSlice from "@/slices/logoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    logo: logoSlice,
  },
});

export default store;
