import { useRoutes, type RouteObject } from "react-router-dom";
import Layout from "../components/ui/RootLayout";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import ProductsPage from "../pages/Product";
// import { Suspense, lazy } from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
];

export function AppRoutes() {
  return <>{useRoutes(routes)}</>;
}
