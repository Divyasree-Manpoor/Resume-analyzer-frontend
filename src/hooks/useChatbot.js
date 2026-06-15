import {

  useState,

  useCallback,

} from "react";

import {

  chatbotService,

} from "../services/chatbotService";

import {

  useResume,

} from "../context/ResumeContext";

/* ================================================= */
/* USE CHATBOT */
/* ================================================= */

export default function useChatbot() {

  /* ================================================= */
  /* CONTEXT */
  /* ================================================= */

  const {

    analysisData,

  } = useResume();

  /* ================================================= */
  /* STATES */
  /* ================================================= */

  const [

    loading,

    setLoading,

  ] = useState(false);

  const [

    messages,

    setMessages,

  ] = useState([]);

  const [

    error,

    setError,

  ] = useState("");

  /* ================================================= */
  /* SEND MESSAGE */
  /* ================================================= */

  const sendMessage =

    useCallback(

      async (question) => {

        try {

          /* VALIDATION */

          if (!question) {
            return;
          }

          /* LOADING */

          setLoading(true);

          setError("");

          /* USER MESSAGE */

          const userMessage = {

            id: Date.now(),

            sender: "user",

            message: question,

            createdAt:
              new Date(),
          };

          setMessages(
            (prev) => [

              ...prev,

              userMessage,
            ]
          );

          /* API REQUEST */

          const response =

            await chatbotService(

              question,

              analysisData
            );

          /* AI MESSAGE */

          const aiMessage = {

            id:
              Date.now() + 1,

            sender: "ai",

            message:

              response?.data?.answer ||

              "AI Response Generated",

            createdAt:
              new Date(),
          };

          setMessages(
            (prev) => [

              ...prev,

              aiMessage,
            ]
          );

        } catch (error) {

          console.log(
            "Chatbot Error:",
            error
          );

          setError(

            error.message ||

            "AI Chatbot Failed"
          );

        } finally {

          setLoading(false);
        }
      },

      [

        analysisData,
      ]
    );

  /* ================================================= */
  /* CLEAR CHAT */
  /* ================================================= */

  const clearChat = () => {

    setMessages([]);
  };

  /* ================================================= */
  /* RETURN */
  /* ================================================= */

  return {

    loading,

    error,

    messages,

    sendMessage,

    clearChat,
  };
}