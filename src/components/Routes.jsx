import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router";
import { Home } from "./Home";
import { BadRoute } from "./BadRoute";
import { ProductDescription } from "./ProductDescription";
import { Cart } from "./Cart";
import { Header } from "./Header";

// Layout component that includes Header and renders child routes
const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </>
  );
};

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        {
          path: "home",
          Component: Home,
        },
        {
          path: "product/:id",
          Component: ProductDescription,
        },
        {
          path: "cart",
          Component: Cart,
        },
        {
          path: "*",
          Component: BadRoute,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
