import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Bot,
  User,
  BadgeCheck,
  Briefcase,
} from "lucide-react";

import MainLayout from
"../layouts/MainLayout";

import ChatWindow from
"../components/chatbot/ChatWindow";

import ChatMessage from
"../components/chatbot/ChatMessage";

import ChatInput from
"../components/chatbot/ChatInput";

import TypingAnimation from
"../components/chatbot/TypingAnimation";

import { getChatbotResponse }
from "../utils/chatbotEngine";

/* ================================================= */
/* CHATBOT PAGE */
/* ================================================= */

export default function Chatbot() {

  /* ================================================= */
  /* STATE */
  /* ================================================= */

  const [messages,
    setMessages] =
    useState([
      {
        sender: "ai",

        message:
          "Hello 👋 I’m your AI Career Assistant. Ask me anything about resumes, ATS optimization, interview preparation, career growth, roadmap planning, or technical skills.",
      },
    ]);

  const [input,
    setInput] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

    const chatSectionRef = useRef(null);

    useEffect(() => {
  if (loading && chatSectionRef.current) {
    chatSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, [loading]);

  /* ================================================= */
  /* SEND MESSAGE */
  /* ================================================= */

  const handleSend = async () => {

  if (!input.trim()) {
    return;
  }

  const question = input;

  const userMessage = {
    sender: "user",
    message: question,
  };

  setMessages((prev) => [
    ...prev,
    userMessage,
  ]);

  setInput("");

  setLoading(true);

  setTimeout(() => {

    console.log("QUESTION:", question);

const response =
  getChatbotResponse(question);

console.log("RESPONSE:", response);

    const aiMessage = {
      sender: "ai",
      message: response,
    };

    setMessages((prev) => [
      ...prev,
      aiMessage,
    ]);

    setLoading(false);

  }, 800);

};

  /* ================================================= */
  /* FEATURES */
  /* ================================================= */

  const features = [

    {
      icon:
        BrainCircuit,

      title:
        "AI Career Guidance",

      desc:
        "Get personalized career recommendations and roadmap suggestions.",
    },

    {
      icon:
        ShieldCheck,

      title:
        "ATS Resume Support",

      desc:
        "Improve ATS scores and recruiter visibility instantly.",
    },

    {
      icon:
        TrendingUp,

      title:
        "Growth Intelligence",

      desc:
        "Discover missing skills and optimize career growth strategies.",
    },
  ];

  /* ================================================= */
  /* QUICK QUESTIONS */
  /* ================================================= */

  const quickQuestions = [

    "How do I improve ATS score?",

    "What skills are missing in my resume?",

    "How can I prepare for interviews?",

    "Suggest roadmap for Full Stack Developer",

    "Improve my resume summary",
  ];

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (

    <MainLayout>

      <section
  className="
    relative
    overflow-hidden

    bg-gradient-to-b
    from-slate-50
    via-white
    to-slate-100

    dark:from-[#020617]
    dark:via-[#0F172A]
    dark:to-[#111827]

    px-6
    pt-28
    pb-24

    transition-colors
    duration-300
  "
>

        {/* ================================================= */}
        {/* BACKGROUND GLOW */}
        {/* ================================================= */}

        <div
          className="

            absolute

            left-1/2
            top-0

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-purple-500/10

            blur-[140px]

            dark:bg-purple-500/10
          "
        />

        {/* ================================================= */}
        {/* CONTAINER */}
        {/* ================================================= */}

        <div
          className="

            relative

            mx-auto

            max-w-7xl
          "
        >

          {/* ================================================= */}
          {/* HERO */}
          {/* ================================================= */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
              text-center
            "
          >

            {/* BADGE */}

            <div
              className="
                flex
                justify-center
              "
            >

              <div
                className="

                  inline-flex
                  items-center

                  gap-2

                  rounded-full

                  border

                  border-purple-200

                  bg-white/90

                  px-5
                  py-3

                  text-[#7C3AED]

                  shadow-lg

                  backdrop-blur-xl

                  dark:bg-slate-900

                  dark:text-[#A78BFA]
                "
              >

                <Sparkles
                  size={18}
                />

                AI Career Intelligence Assistant

              </div>

            </div>

            {/* TITLE */}

            <h1
              className="

                mt-10

                text-5xl

                font-black

                leading-tight

                text-slate-900 dark:text-white

                dark:text-white

                md:text-5xl
              "
            >

             
              <span
                className="

                  mt-3

                  block

                  bg-gradient-to-r

                  from-[#312E81]

                  via-[#7C3AED]

                  to-[#A78BFA]

                  bg-clip-text

                  text-transparent
                "
              >
                 AI Career Assistant Chatbot
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p
              className="

                mx-auto

                mt-8

                max-w-4xl

                text-lg

                leading-relaxed

                text-slate-600 dark:text-slate-400

                dark:text-gray-400

                md:text-xl
              "
            >
              Get AI-powered guidance for resumes,
              ATS optimization,
              interview preparation,
              career roadmaps,
              technical skills,
              and professional growth strategies.
            </p>

          </motion.div>

          {/* ================================================= */}
          {/* FEATURES */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              grid

              grid-cols-1

              gap-6

              md:grid-cols-3
            "
          >

            {features.map(
              (
                item,
                index
              ) => {

                const Icon =
                  item.icon;

                return (

                  <motion.div

                    key={index}

                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      delay:
                        index * 0.1,
                    }}

                    viewport={{
                      once: true,
                    }}

                    whileHover={{
                      y: -6,
                    }}

                    className="

                      rounded-3xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-white/90

                      p-8

                      text-center

                      shadow-sm

                      backdrop-blur-2xl

                      dark:border-white/10

                      dark:bg-slate-900
                    "
                  >

                    <div
                      className="
                        flex
                        justify-center
                      "
                    >

                      <div
                        className="

                          flex

                          h-16
                          w-16

                          items-center
                          justify-center

                          rounded-2xl

                          bg-purple-500/10
                        "
                      >

                        <Icon
                          size={30}
                          className="
                            text-[#7C3AED]
                          "
                        />

                      </div>

                    </div>

                    <h2
                      className="

                        mt-6

                        text-2xl

                        font-black

                        text-slate-900 dark:text-white

                        dark:text-white
                      "
                    >
                      {item.title}
                    </h2>

                    <p
                      className="

                        mt-4

                        leading-relaxed

                        text-slate-600 dark:text-slate-400

                        dark:text-gray-400
                      "
                    >
                      {item.desc}
                    </p>

                  </motion.div>
                );
              }
            )}

          </div>

          {/* ================================================= */}
          {/* CHAT SECTION */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              overflow-hidden

              rounded-[40px]

              border

              border-slate-200 dark:border-slate-800

              bg-white/90

              p-8
              md:p-10

              shadow-2xl

              backdrop-blur-2xl

              dark:border-white/10

              dark:bg-slate-900
            "
          >

            {/* HEADER */}

            <div
              className="

                flex
                flex-col

                gap-5

                border-b

                border-slate-200 dark:border-slate-800

                pb-6

                dark:border-white/10

                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <div>

                <div
                  className="

                    inline-flex
                    items-center

                    gap-2

                    rounded-full

                    border
                    border-purple-200

                    bg-purple-500/10

                    px-4
                    py-2

                    text-[#7C3AED]
                  "
                >

                  <Bot
                    size={16}
                  />

                  Live AI Assistant

                </div>

                <h2
                  className="

                    mt-5

                    text-4xl

                    font-black

                    text-slate-900 dark:text-white

                    dark:text-white
                  "
                >
                  Career Chat Workspace
                </h2>

              </div>

              {/* STATUS */}

              <div
                className="

                  inline-flex

                  items-center

                  gap-3

                  rounded-2xl

                  border
                  border-green-500/20

                  bg-green-500/10

                  px-5
                  py-4

                  text-green-500
                "
              >

                <BadgeCheck
                  size={20}
                />

                AI Assistant Online

              </div>

            </div>

            {/* CHAT WINDOW */}

          <div className="mt-8">

            <ChatWindow messages={messages}>

                {messages.map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      key={index}
                    >

                      <ChatMessage
                        sender={
                          item.sender
                        }
                        message={
                          item.message
                        }
                      />

                    </div>
                  )
                )}

                {loading && (

                  <div
                    className="
                      mt-4
                    "
                  >

                    <TypingAnimation />

                  </div>
                )}

              </ChatWindow>

            </div>

            {/* CHAT INPUT */}

            <div className="mt-8">

              <ChatInput

                value={input}

                onChange={(e) =>
                  setInput(
                    e.target.value
                  )
                }

                onSend={
                  handleSend
                }
              />

            </div>

            {/* QUICK QUESTIONS */}

            <div className="mt-10">

              <h3
                className="

                  mb-5

                  text-lg

                  font-bold

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                Quick Questions
              </h3>

              <div
                className="

                  flex

                  flex-wrap

                  gap-4
                "
              >

                {quickQuestions.map(
                  (
                    item,
                    index
                  ) => (

                    <button

                      key={index}

                      onClick={() =>
                        setInput(item)
                      }

                      className="

                        rounded-2xl

                        border

                        border-slate-200 dark:border-slate-800

                        bg-[#F8FAFC]

                        px-5
                        py-3

                        text-slate-700

                        transition-all
                        duration-300

                        hover:border-purple-200

                        hover:bg-purple-500/10

                        hover:text-[#7C3AED]

                        dark:border-white/10

                        dark:bg-[#111827]/70

                        dark:text-slate-300

                        dark:hover:text-white
                      "
                    >
                      {item}
                    </button>
                  )
                )}

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* AI INSIGHTS */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              overflow-hidden

              rounded-[40px]

              border

              border-slate-200 dark:border-slate-800

              bg-white/90

              p-8
              md:p-12

              shadow-2xl

              backdrop-blur-2xl

              dark:border-white/10

              dark:bg-slate-900
            "
          >

            <div
              className="

                grid

                grid-cols-1

                gap-20

                lg:grid-cols-[1.1fr_0.9fr]
              "
            >

              {/* LEFT */}

              <div>

                <div
                  className="

                    inline-flex
                    items-center

                    gap-2

                    rounded-full

                    border
                    border-purple-200

                    bg-purple-500/10

                    px-5
                    py-3

                    text-[#7C3AED]
                  "
                >

                  <Briefcase
                    size={18}
                  />

                  AI Career Insights

                </div>

                <h2
                  className="

                    mt-8

                    text-5xl

                    font-black

                    leading-tight

                    text-slate-900 dark:text-white

                    dark:text-white
                  "
                >
                  Get Personalized
                  Career Guidance
                </h2>

                <p
                  className="

                    mt-8

                    text-lg

                    leading-relaxed

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  The AI assistant helps you
                  improve resumes,
                  prepare for interviews,
                  identify skill gaps,
                  optimize ATS performance,
                  and accelerate your career growth journey.
                </p>

              </div>

              {/* RIGHT */}

              <div
                className="
                  space-y-5
                "
              >

                {[
                  "ATS Resume Optimization",

                  "Interview Preparation Guidance",

                  "Technical Skill Recommendations",

                  "Career Roadmap Planning",

                  "Professional Resume Rewriting",
                ].map(
                  (
                    item,
                    index
                  ) => (

                    <motion.div

                      key={index}

                      initial={{
                        opacity: 0,
                        x: 20,
                      }}

                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay:
                          index * 0.1,
                      }}

                      viewport={{
                        once: true,
                      }}

                      className="

                        flex
                        items-center

                        gap-4

                        rounded-3xl

                        border

                        border-slate-200 dark:border-slate-800

                        bg-[#F8FAFC]

                        p-5

                        dark:border-white/10

                        dark:bg-[#111827]/70
                      "
                    >

                      <div
                        className="

                          flex

                          h-12
                          w-12

                          items-center
                          justify-center

                          rounded-2xl

                          bg-green-500/10
                        "
                      >

                        <User
                          size={22}
                          className="
                            text-green-500
                          "
                        />

                      </div>

                      <h3
                        className="

                          text-lg

                          font-semibold

                          text-slate-900 dark:text-white

                          dark:text-white
                        "
                      >
                        {item}
                      </h3>

                    </motion.div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
}