import React from "react";
import ReactDOM from "react-dom/client";
import "@/style.css";
import { Provider } from "react-redux";
import store from "@/store/Store";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("body")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
