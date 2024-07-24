import React from "react";
import ReactDOM from "react-dom/client";
import "@/style.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import { ProviderContextAPI } from "./context/context";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("body")).render(
  <Provider store={store}>
    <ProviderContextAPI>
      <RouterProvider router={routes} />
    </ProviderContextAPI>
  </Provider>
);
