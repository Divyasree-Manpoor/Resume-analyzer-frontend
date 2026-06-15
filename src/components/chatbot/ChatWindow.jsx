import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import { Bot, Sparkles, ShieldCheck } from "lucide-react";

/* ================================================= */
/* CHAT WINDOW */
/* ================================================= */

export default function ChatWindow({
  children,

  messages = [],
}) {
  /* ================================================= */
  /* REF */
  /* ================================================= */

  const bottomRef = useRef(null);

  /* ================================================= */
  /* AUTO SCROLL */
  /* ================================================= */

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  /* ================================================= */
  /* EMPTY */
  /* ================================================= */

  const isEmpty = messages.length === 0;

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        relative
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className="

          absolute

          inset-0

          rounded-[28px]

          bg-purple-500/10

          
        "
      />

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div
        className="

          relative

          overflow-hidden

          rounded-[28px]

          border

          border-slate-200 dark:border-slate-800

          bg-white

          shadow-sm

          backdrop-blur-2xl

          dark:border-white/10

          dark:bg-slate-900
        "
      >
        {/* ================================================= */}
        {/* TOP GLOW */}
        {/* ================================================= */}

        <div
          className="

            absolute

            right-[-120px]
            top-[-120px]

            h-[260px]
            w-[260px]

            rounded-full

            bg-purple-500/10

            
          "
        />

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="

            relative

            flex
            flex-col

            gap-5

            border-b

            border-slate-200 dark:border-slate-800

            px-6
            py-5

            dark:border-white/10

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            {/* ICON */}

            <div
              className="

                relative

                flex

                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br

                from-[#312E81]

                via-[#7C3AED]

                to-[#A78BFA]

                shadow-[0_0_25px_rgba(168,85,247,0.3)]
              "
            >
              <Bot
                size={26}
                className="
                  text-white
                "
              />
            </div>

            {/* TEXT */}

            <div>
              <h2
                className="

                  text-2xl

                  font-black

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                AI Career Assistant
              </h2>

              <p
                className="

                  mt-1

                  text-sm

                  text-slate-500 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                ATS Optimization • Resume Guidance • Career Growth
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            <div
              className="

                inline-flex
                items-center

                gap-2

                rounded-full

                border
                border-green-500/20

                bg-green-500/10

                px-4
                py-2

                text-sm

                text-green-600

                dark:text-green-300
              "
            >
              <ShieldCheck size={14} />
              Online
            </div>

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

                text-sm

                text-purple-700

                dark:text-[#A78BFA]
              "
            >
              <Sparkles size={14} />
              AI Powered
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* CHAT AREA */}
        {/* ================================================= */}

        <div
          className="

            relative

            h-[650px]

            overflow-y-auto

            px-5
            py-6

            sm:px-6
          "
        >
          {isEmpty ? (
            /* ================================================= */
            /* EMPTY STATE */
            /* ================================================= */

            <div
              className="

                flex

                h-full

                flex-col
                items-center
                justify-center

                text-center
              "
            >
              {/* ICON */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="
                  relative
                "
              >
                <div
                  className="

                    absolute

                    inset-0

                    rounded-[28px]

                    bg-purple-500/10

                   
                  "
                />

                <div
                  className="

                    relative

                    flex

                    h-28
                    w-28

                    items-center
                    justify-center

                    rounded-[28px]

                    bg-gradient-to-br

                    from-[#312E81]

                    via-[#7C3AED]

                    to-[#A78BFA]

                    shadow-[0_0_40px_rgba(168,85,247,0.3)]
                  "
                >
                  <Bot
                    size={48}
                    className="
                      text-white
                    "
                  />
                </div>
              </motion.div>

              {/* TITLE */}

              <h3
                className="

                  mt-8

                  text-4xl

                  font-black

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                AI Career Assistant
              </h3>

              {/* DESCRIPTION */}

              <p
                className="

                  mt-5

                  max-w-2xl

                  text-lg

                  leading-8

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                Ask questions about ATS optimization, resume rewriting, missing
                skills, interview preparation, recruiter visibility, and
                personalized career growth.
              </p>

              {/* SUGGESTIONS */}

              <div
                className="

                  mt-10

                  grid

                  w-full
                  max-w-4xl

                  grid-cols-1

                  gap-4

                  md:grid-cols-2
                "
              >
                {[
                  "How can I improve my ATS score?",

                  "Rewrite my resume professionally",

                  "What skills are missing in my resume?",

                  "Create a frontend developer roadmap",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="

                        rounded-2xl

                        border

                        border-slate-200 dark:border-slate-800

                        bg-slate-50 dark:bg-slate-800/50

                        px-5
                        py-4

                        text-left

                        text-slate-700

                        transition-all
                        duration-300

                        hover:border-purple-200

                        hover:bg-purple-50/60

                        dark:border-white/10

                        dark:bg-[#111827]/70

                        dark:text-slate-300

                        dark:hover:bg-[#161F32]
                      "
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {children}

              {/* ================================================= */}
              {/* AUTO SCROLL */}
              {/* ================================================= */}

              <div ref={bottomRef} />
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
