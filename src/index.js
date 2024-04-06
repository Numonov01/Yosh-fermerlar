import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import { customStyle, themecolor } from "./config.js";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { Provider } from "react-redux";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({ reducer: rootReducer, devTools: true });

root.render(
  <React.Fragment>
    <ConfigProvider direction={themecolor.direction} theme={customStyle}>
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
