import * as React from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./frontend/pages/main-page";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
