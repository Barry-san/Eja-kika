/* eslint-disable react-refresh/only-export-components */
import Layout from "../components/ui/RootLayout";
import { type RouteObject } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));
const ContactPage = lazy(() => import("../pages/Contact"));
const AboutPage = lazy(() => import("../pages/About"));
const ProductsPage = lazy(() => import("../pages/Product"));

export const routes: RouteObject[] = [
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
