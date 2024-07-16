import React from "react";
import ReactDOM from "react-dom/client";
import Signup from "./Routes/Signup";
import Login from "./Routes/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
