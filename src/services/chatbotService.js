import chatbotKnowledge from "../data/chatbotKnowledge.js";

/* ================================================= */
/* GENERATE CHATBOT RESPONSE */
/* ================================================= */

const generateChatbotResponse = async (
userQuestion,
resumeAnalysis = {},
targetRole = ""
) => {
try {
if (!userQuestion) {
return {
success: false,
message: "User question is required",
};
}
const query =
  userQuestion.toLowerCase();

const match =
  chatbotKnowledge.find((item) =>
    item.keywords.some((keyword) =>
      query.includes(
        keyword.toLowerCase()
      )
    )
  );
  

return {
  success: true,
  response: {
    answer:
      match?.answer ||
      `

I can help you with:

• ATS Optimization
• Resume Improvement
• Interview Preparation
• Career Roadmaps
• Technical Skills
• Portfolio Building
• Career Growth Guidance

Please ask a more specific question.
`,
},
};
} catch (error) {
return {
success: false,
message: "Chatbot Service Failed",
error: error.message,
};
}
};

export default generateChatbotResponse;
