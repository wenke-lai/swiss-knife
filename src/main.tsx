import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PickNearestColor } from "./PickNearestColor";
import { ThemeProvider } from "./hooks/useTheme";
import { Layouts } from "./pages/Layout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { index: true, element: <div>Hello World</div> },
      { path: "color", element: <PickNearestColor /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <IconContext.Provider value={{ className: "w-full h-auto" }}>
        <RouterProvider router={router} />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
