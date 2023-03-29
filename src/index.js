import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Theme>
                <GlobalStyles />
                <App />
            </Theme>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
