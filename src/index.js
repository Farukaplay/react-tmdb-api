import React from "react";
import ReactDom from "react-dom/client"


import App from "./components/App"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <div>
        <App/>
    </div>
)