import { createStore } from "redux";

// İlk durum (initial state)
const initialState = {
  logoPath: "", // Logonun URL'sini saklayacağız
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGO_PATH":
      return { ...state, logoPath: action.payload };
    default:
      return state;
  }
};

// Store'u oluştur
const store = createStore(rootReducer);

export default store;
