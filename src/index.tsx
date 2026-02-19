import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const GA_TRACKING_ID = "G-T9KTF0E2GC";

if (process.env.NODE_ENV === "production") {
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(gaScript);

  const gaInitScript = document.createElement("script");
  gaInitScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', { send_page_view: true });
  `;
  document.head.appendChild(gaInitScript);
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
