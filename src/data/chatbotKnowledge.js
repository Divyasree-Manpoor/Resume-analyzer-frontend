// src/data/chatbotKnowledge.js

import chatbotResponses from "./chatbotResponses";
import atsResponses from "./atsResponses";
import resumeResponses from "./resumeResponses";
import interviewResponses from "./interviewResponses";
import roadmapResponses from "./roadmapResponses";

const chatbotKnowledge = [
  ...chatbotResponses,
  ...atsResponses,
  ...resumeResponses,
  ...interviewResponses,
  ...roadmapResponses,
];

export default chatbotKnowledge;