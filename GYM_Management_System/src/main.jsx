import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./Home-page/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
