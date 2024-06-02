import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("body")).render(
  <RouterProvider router={routes} />
);
