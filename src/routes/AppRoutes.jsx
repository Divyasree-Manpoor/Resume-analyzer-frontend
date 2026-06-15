import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  AnimatePresence,
} from "framer-motion";

/* ================================================= */
/* PAGES */
/* ================================================= */

import Home from "../pages/Home";

import UploadResume from "../pages/UploadResume";

import Analysis from "../pages/Analysis";

import JDMatch from "../pages/JDMatch";

import SkillGap from "../pages/SkillGap";

import Roadmap from "../pages/Roadmap";

import RewriteResume from "../pages/RewriteResume";

import Chatbot from "../pages/Chatbot";

import About from "../pages/About";

import Contact from "../pages/Contact";

import Login from "../pages/Login";

import Signup from "../pages/Signup";

import NotFound from "../pages/NotFound";

/* ================================================= */
/* APP ROUTES */
/* ================================================= */

export default function AppRoutes() {

  return (

    <BrowserRouter>

      <AnimatePresence mode="wait">

        <Routes>

          {/* ================================================= */}
          {/* PUBLIC ROUTES */}
          {/* ================================================= */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* ================================================= */}
          {/* FEATURE PAGES */}
          {/* ================================================= */}

          <Route
            path="/upload"
            element={<UploadResume />}
          />

          <Route
            path="/analysis"
            element={<Analysis />}
          />

          <Route
            path="/jd-match"
            element={<JDMatch />}
          />

          <Route
            path="/skill-gap"
            element={<SkillGap />}
          />

          <Route
            path="/roadmap"
            element={<Roadmap />}
          />

          <Route
            path="/rewrite"
            element={<RewriteResume />}
          />

          <Route
            path="/chatbot"
            element={<Chatbot />}
          />

          {/* ================================================= */}
          {/* 404 */}
          {/* ================================================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </AnimatePresence>

    </BrowserRouter>
  );
}