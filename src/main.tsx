import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { Color } from "./pages/color";
import { Layout } from "./pages/layout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout.Layout />,
    children: [
      { index: true, element: <div>Hello World</div> },
      { path: "color", element: <Color.Picker /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <IconContext.Provider value={{ className: "w-full h-auto text-3xl" }}>
        <RouterProvider router={router} />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
