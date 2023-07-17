import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import RoutesProvider from "./routers/RoutesProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <BrowserRouter>
        <RoutesProvider/>
    </BrowserRouter>
</React.StrictMode>
);
