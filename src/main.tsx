//* dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

//* styling
import "./styles/main.css";

//* components
import Header from "./components/Header/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import Test from "./routes/Test";

//* routing
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about/",
        element: <About />,
      },
      {
        path: "/test/",
        element: <Test />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
