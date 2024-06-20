import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ResultContextProvider } from "./contexts/Results.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ResultContextProvider>
            <App />
        </ResultContextProvider>
    </React.StrictMode>
);
