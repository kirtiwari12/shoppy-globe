import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { Home } from "./Home";
import { BadRoute } from "./BadRoute";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      Component: Home,
    },
    { path: "*", Component: BadRoute },
  ]);

  return <RouterProvider router={router} />;
};
