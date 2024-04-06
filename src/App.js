import React from "react";
import "antd/dist/reset.css";
import'./assets/scss/App.scss';

//imoprt Route
import RoutesComponents from "./Routes/index";
import { ThemeProvider as CustomThemeProvider } from "./Common/ThemeContext";


import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();

const App = () => {
  return (
    <CustomThemeProvider>
      <RoutesComponents />
    </CustomThemeProvider>
  )
}

export default App;
