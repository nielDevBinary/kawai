import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { Trending } from "../pages/Trending";
import Search from "../pages/Search";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export function AppRouter(){
    return <RouterProvider router={router} />
}