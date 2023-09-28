import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/tailkit.css'
import {RouterProvider} from "react-router-dom";
import router from "../router/router";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
