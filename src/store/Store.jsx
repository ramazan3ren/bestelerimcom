import { configureStore } from "@reduxjs/toolkit";
import logoReducer from "@/assets/bestelerim-logo-black.png";

const rootReducer = {
  logo: logoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
