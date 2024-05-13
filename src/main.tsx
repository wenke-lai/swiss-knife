import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { PickNearestColor } from "./PickNearestColor";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: "w-full h-auto" }}>
      <PickNearestColor />
    </IconContext.Provider>
  </React.StrictMode>
);
