import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { PickNearestColor } from "./PickNearestColor";
import { ThemeProvider } from "./hooks/useTheme";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <IconContext.Provider value={{ className: "w-full h-auto" }}>
        <PickNearestColor />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
