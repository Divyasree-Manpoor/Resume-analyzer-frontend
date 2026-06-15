import { motion } from "framer-motion";

import { Bot, Sparkles } from "lucide-react";

/* ================================================= */
/* TYPING ANIMATION */
/* ================================================= */

export default function TypingAnimation() {
  /* ================================================= */
  /* DOTS */
  /* ================================================= */

  const dots = ["bg-purple-600", "bg-purple-400", "bg-fuchsia-500"];

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        mb-8
        flex
        items-end
        gap-4
      "
    >
      {/* ================================================= */}
      {/* AI AVATAR */}
      {/* ================================================= */}

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
        "
      >
        {/* GLOW */}

        <div
          className="
            absolute
            inset-0
            rounded-2xl
            bg-purple-500/10
            dark:bg-purple-500/20
            blur-2xl
          "
        />

        {/* ICON BOX */}

        <div
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
          <Bot
            size={24}
            className="
              text-white
            "
          />
        </div>
      </motion.div>

      {/* ================================================= */}
      {/* MESSAGE BOX */}
      {/* ================================================= */}

      <motion.div
        whileHover={{
          y: -2,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-slate-200
          dark:border-slate-800
          bg-white/90
          px-6
          py-5
          shadow-sm
          backdrop-blur-2xl
          transition-all
          duration-300
          dark:border-white/10
          dark:bg-slate-900
        "
      >
        {/* ================================================= */}
        {/* HOVER GLOW */}
        {/* ================================================= */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            bg-gradient-to-r
            from-[#312E81]/5
            via-[#7C3AED]/5
            to-[#A78BFA]/5
          "
        />

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
            mb-4
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
            dark:border-purple-500/20
            dark:bg-[#312E81]/20
            dark:text-[#A78BFA]
          "
        >
          <Sparkles size={12} />
          AI Career Assistant
        </div>

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            gap-3
          "
        >
          {/* ================================================= */}
          {/* DOTS */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            {dots.map((color, index) => (
              <motion.span
                key={index}
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                className={`
                  h-3
                  w-3
                  rounded-full
                  ${color}
                `}
              />
            ))}
          </div>

          {/* ================================================= */}
          {/* TEXT */}
          {/* ================================================= */}

          <p
            className="
              ml-1
              text-sm
              text-slate-600
              dark:text-slate-400
            "
          >
            AI is analyzing your request...
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
