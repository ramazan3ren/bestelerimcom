import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { NotFoundPage } from "@/components/NotFoundPage";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
