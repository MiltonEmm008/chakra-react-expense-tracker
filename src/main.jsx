import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import "./index.css";
import App from "./App.jsx";
import GlobalState from "./context/GlobalState";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalState>
      <Provider>
        <App />
      </Provider>
    </GlobalState>
  </StrictMode>
);
