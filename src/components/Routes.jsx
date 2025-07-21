import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router";
import { lazy, Suspense } from "react";
import { Header } from "./Header";
import { ErrorBoundary } from "./ErrorBoundary";

const Home = lazy(() =>
  import("./Home").then((module) => ({ default: module.Home }))
);
const ProductDescription = lazy(() =>
  import("./ProductDescription").then((module) => ({
    default: module.ProductDescription,
  }))
);
const Cart = lazy(() =>
  import("./Cart").then((module) => ({ default: module.Cart }))
);
const BadRoute = lazy(() =>
  import("./BadRoute").then((module) => ({ default: module.BadRoute }))
);

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <ErrorBoundary fallbackMessage="Failed to load page content. Please try refreshing the page.">
          <Suspense>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
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
          path: "search",
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
