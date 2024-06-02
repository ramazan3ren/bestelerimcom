import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //     {
    //       index: true,
    //       element: <Home />,
    //     },
    //     {
    //       path: "hakkimda",
    //       element: <About />,
    //     },
    //     {
    //       path: "iletisim",
    //       element: <Contact />,
    //     },
    //     {
    //       path: "hizmetler",
    //       element: <Services />,
    //     },
    //     {
    //       path: "portfolyo",
    //       element: <Portfolio />,
    //     },
    //     {
    //       path: "*",
    //       element: <NotFound />,
    //     },
    //   ],
  },
]);

export default routes;
