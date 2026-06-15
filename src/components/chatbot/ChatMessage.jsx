import { motion } from "framer-motion";

import { Bot, User, Sparkles } from "lucide-react";

/* ================================================= */
/* CHAT MESSAGE */
/* ================================================= */

export default function ChatMessage({
  message,

  sender,

  createdAt,
}) {
  /* ================================================= */
  /* USER CHECK */
  /* ================================================= */

  const isUser = sender === "user";

  /* ================================================= */
  /* FORMAT TIME */
  /* ================================================= */

  const formattedTime = createdAt
    ? new Date(createdAt).toLocaleTimeString([], {
        hour: "2-digit",

        minute: "2-digit",
      })
    : "";

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
        duration: 0.35,
      }}
      className={`
        mb-8
        flex
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
          flex
          max-w-[92%]
          items-end
          gap-4
          sm:max-w-[80%]
        `}
      >
        {/* ================================================= */}
        {/* AI AVATAR */}
        {/* ================================================= */}

        {!isUser && (
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="
              relative
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-[#312E81]
              via-[#7C3AED]
              to-[#A78BFA]
              shadow-[0_0_25px_rgba(168,85,247,0.35)]
            "
          >
            {/* GLOW */}

            <div
              className="
                absolute
                inset-0
                rounded-2xl
                bg-white/90/10
                dark:bg-black/10
              "
            />

            <Bot
              size={24}
              className="
                relative
                z-10
                text-white
              "
            />
          </motion.div>
        )}

        {/* ================================================= */}
        {/* MESSAGE SECTION */}
        {/* ================================================= */}

        <div>
          {/* ================================================= */}
          {/* MESSAGE BOX */}
          {/* ================================================= */}

          <motion.div
            whileHover={{
              y: -2,
            }}
            className={`
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              px-6
              py-5
              shadow-sm
              backdrop-blur-2xl
              transition-all
              duration-300

              ${
                isUser
                  ? `
                    border-purple-300
                    bg-gradient-to-r
                    from-[#312E81]
                    via-[#7C3AED]
                    to-[#A78BFA]
                    text-white
                    shadow-[0_0_35px_rgba(168,85,247,0.25)]
                  `
                  : `
                    border-slate-200 dark:border-slate-800
                    bg-white/90
                    text-slate-800
                    dark:border-white/10
                    dark:bg-slate-900
                    dark:text-slate-200
                  `
              }
            `}
          >
            {/* ================================================= */}
            {/* HOVER GLOW */}
            {/* ================================================= */}

            <div
              className={`
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100

                ${
                  isUser
                    ? `
                      bg-white/90 dark:bg-slate-900
                    `
                    : `
                      bg-gradient-to-r
                      from-[#312E81]/5
                      via-[#7C3AED]/5
                      to-[#A78BFA]/5
                    `
                }
              `}
            />

            {/* ================================================= */}
            {/* AI LABEL */}
            {/* ================================================= */}

            {!isUser && (
              <div
                className="
                  relative
                  z-10
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-purple-200
                  bg-purple-50
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-purple-700
                  dark:bg-[#312E81]/20
                  dark:text-[#A78BFA]
                "
              >
                <Sparkles size={12} />
                AI Career Assistant
              </div>
            )}

            {/* ================================================= */}
            {/* MESSAGE */}
            {/* ================================================= */}

            <p
              className="
                relative
                z-10
                whitespace-pre-wrap
                text-[15px]
                leading-8
              "
            >
              {message}
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* FOOTER */}
          {/* ================================================= */}

          <div
            className={`
              mt-3
              flex
              items-center
              gap-2
              px-2
              text-xs
              text-slate-500
              dark:text-slate-400
              ${isUser ? "justify-end" : "justify-start"}
            `}
          >
            {isUser ? (
              <>
                <span>You</span>
                <User size={12} />
              </>
            ) : (
              <>
                <Bot size={12} />
                <span>AI Assistant</span>
              </>
            )}

            {formattedTime && <span>• {formattedTime}</span>}
          </div>
        </div>

        {/* ================================================= */}
        {/* USER AVATAR */}
        {/* ================================================= */}

        {isUser && (
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="
              relative
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/90 dark:bg-slate-900
              backdrop-blur-xl
            "
          >
            <User
              size={24}
              className="
                text-slate-700
                dark:text-white
              "
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
