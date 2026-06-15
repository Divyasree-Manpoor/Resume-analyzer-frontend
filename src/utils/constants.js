/* ================================================= */
/* API */
/* ================================================= */

export const API_BASE_URL =
  "http://localhost:9000/api";

/* ================================================= */
/* APP */
/* ================================================= */

export const APP_NAME =
  "AI Resume Analyzer";

/* ================================================= */
/* FILE */
/* ================================================= */

export const MAX_FILE_SIZE =
  5 * 1024 * 1024;

/* ================================================= */
/* SUPPORTED FILE TYPES */
/* ================================================= */

export const ALLOWED_FILE_TYPES = [

  "application/pdf",

  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

/* ================================================= */
/* ATS SCORE COLORS */
/* ================================================= */

export const ATS_SCORE_COLORS = {

  excellent:
    "#22c55e",

  good:
    "#3b82f6",

  average:
    "#f59e0b",

  poor:
    "#ef4444",
};

/* ================================================= */
/* ROUTES */
/* ================================================= */

export const APP_ROUTES = {

  HOME: "/",

  LOGIN: "/login",

  SIGNUP: "/signup",

  UPLOAD: "/upload",

  ANALYSIS: "/analysis",

  JD_MATCH: "/jd-match",

  ROADMAP: "/roadmap",

  CHATBOT: "/chatbot",

  REWRITE: "/rewrite",

  SKILL_GAP: "/skill-gap",
};