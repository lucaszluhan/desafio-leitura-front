import React from "react";
import { RouterProvider, Router, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  // { path: "/criar-conta", element: <CriarConta /> },
]);
function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
