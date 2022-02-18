import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <AppContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContext>,
  document.getElementById("root")
);
