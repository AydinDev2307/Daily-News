import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { NewsProvider } from "./helper/NewsContextAPI.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NewsProvider>
      <App />
    </NewsProvider>
  </BrowserRouter>
);
