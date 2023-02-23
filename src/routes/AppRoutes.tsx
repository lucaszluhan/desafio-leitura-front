import React from "react";
import { RouterProvider, Router, createBrowserRouter } from "react-router-dom";
import CriarConta from "../pages/CriarConta";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/criar-conta", element: <CriarConta /> },
]);
function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
