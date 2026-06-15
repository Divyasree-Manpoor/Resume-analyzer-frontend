import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import {

  AuthProvider,

} from "./context/AuthContext";

import {

  ResumeProvider,

} from "./context/ResumeContext";

import {

  ThemeProvider,

} from "./context/ThemeContext";

/* ================================================= */
/* ROOT */
/* ================================================= */

ReactDOM.createRoot(

  document.getElementById("root")

).render(

  <React.StrictMode>

    {/* ================================================= */}
    {/* THEME PROVIDER */}
    {/* ================================================= */}

    <ThemeProvider>

      {/* ================================================= */}
      {/* AUTH PROVIDER */}
      {/* ================================================= */}

      <AuthProvider>

        {/* ================================================= */}
        {/* RESUME PROVIDER */}
        {/* ================================================= */}

        <ResumeProvider>

          {/* ================================================= */}
          {/* APP */}
          {/* ================================================= */}

          <App />

        </ResumeProvider>

      </AuthProvider>

    </ThemeProvider>

  </React.StrictMode>
);