import React from "react";
import ReactDOM from "react-dom/client";
import "@/style.css";
import { ProviderContextAPI } from "./context/context";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("body")).render(
  <ProviderContextAPI>
    <RouterProvider router={routes} />
  </ProviderContextAPI>
);
