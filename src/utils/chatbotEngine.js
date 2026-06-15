// src/utils/chatbotEngine.js

import chatbotKnowledge from "../data/chatbotKnowledge";

export const getChatbotResponse = (question) => {
  try {
    console.log("QUESTION:", question);
    console.log("KNOWLEDGE:", chatbotKnowledge);

    if (!question) {
      return "Please enter a question.";
    }

    const query = question.toLowerCase();

    const match = chatbotKnowledge.find((item) => {
      if (
        !item ||
        !item.keywords ||
        !Array.isArray(item.keywords)
      ) {
        console.error(
          "Invalid chatbot item:",
          item
        );
        return false;
      }

      return item.keywords.some((keyword) =>
        query.includes(
          keyword.toLowerCase()
        )
      );
    });

    console.log("MATCH:", match);

    if (match) {
      return match.answer;
    }

    return `
I can help with:

• ATS Optimization
• Resume Improvement
• Interview Preparation
• Career Roadmaps
• Technical Skills
• Portfolio Building

Please ask a more specific question.
`;
  } catch (error) {
    console.error(
      "CHATBOT ERROR:",
      error
    );

    return "Something went wrong while generating a response.";
  }
};