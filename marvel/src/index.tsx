import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";

ReactDOM.render(
  <React.StrictMode>
    <FormspreeProvider project="{1891140116810824740}">
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </FormspreeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
