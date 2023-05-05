import React from "react";
import ReactDOM from "react-dom/client";
import { App, About } from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import MainAccess from "./MainAccess";
import Error from "./pages/400";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainAccess />,
    errorElement: <Error />,  
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/admin/sign-in",
    element: <Admin />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
