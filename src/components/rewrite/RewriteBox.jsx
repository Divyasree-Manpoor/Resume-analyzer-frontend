import { motion } from "framer-motion";

import { Sparkles, FileEdit, BrainCircuit } from "lucide-react";

/* ================================================= */
/* REWRITE BOX */
/* ================================================= */

export default function RewriteBox({
  value,

  onChange,
}) {
  /* ================================================= */
  /* WORD COUNT */
  /* ================================================= */

  const wordCount = value?.trim()?.split(/\s+/)?.filter(Boolean)?.length || 0;

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
        duration: 0.7,
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
      {/* MAIN CARD */}
      {/* ================================================= */}

      <div
        className="

          relative

          overflow-hidden

          rounded-[28px]

          border

          border-slate-200 dark:border-slate-800

          bg-white/90

          shadow-sm

          backdrop-blur-2xl

          dark:border-white/10

          dark:bg-slate-900
        "
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="

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

                flex

                h-16
                w-16

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br

                from-[#312E81]

                via-[#7C3AED]

                to-[#A78BFA]

                shadow-lg

                shadow-#7C3AED/20
              "
            >
              <FileEdit
                size={30}
                className="
                  text-white
                "
              />
            </div>

            {/* TEXT */}

            <div>
              <h2
                className="

                  text-3xl

                  font-black

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                Resume Rewrite
              </h2>

              <p
                className="

                  mt-1

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                Paste your resume content and let AI optimize it for ATS and
                recruiters.
              </p>
            </div>
          </div>

          {/* WORD COUNT */}

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

              text-purple-700

              dark:text-[#A78BFA]
            "
          >
            <Sparkles size={16} />
            {wordCount} Words
          </div>
        </div>

        {/* ================================================= */}
        {/* TEXTAREA */}
        {/* ================================================= */}

        <textarea
          value={value}
          onChange={onChange}
          placeholder="Paste your complete resume content here for AI-powered rewriting, ATS optimization, stronger action verbs, measurable achievements, and recruiter-friendly improvements..."
          className="

            min-h-[350px]
            w-full

            resize-none

            bg-transparent

            px-6
            py-6

            text-slate-900 dark:text-white

            outline-none

            placeholder:text-slate-500 dark:text-slate-400

            dark:text-white
          "
        />

        {/* ================================================= */}
        {/* FEATURES */}
        {/* ================================================= */}

        <div
          className="

            grid

            grid-cols-1

            gap-5

            border-t

            border-slate-200 dark:border-slate-800

            px-6
            py-6

            dark:border-white/10

            md:grid-cols-3
          "
        >
          {[
            {
              title: "ATS Optimization",

              description: "Improve keyword matching and ATS compatibility.",
            },

            {
              title: "Better Impact",

              description:
                "Generate stronger action verbs and measurable results.",
            },

            {
              title: "Recruiter Friendly",

              description: "Improve readability and professional presentation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="

                  rounded-2xl

                  border

                  border-slate-200 dark:border-slate-800

                  bg-slate-50 dark:bg-slate-800/50

                  p-5

                  dark:border-white/10

                  dark:bg-slate-900
                "
            >
              <h3
                className="

                    text-lg

                    font-bold

                    text-slate-900 dark:text-white

                    dark:text-white
                  "
              >
                {item.title}
              </h3>

              <p
                className="

                    mt-3

                    text-sm

                    leading-relaxed

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div
          className="

            flex
            flex-col

            gap-4

            border-t

            border-slate-200 dark:border-slate-800

            px-6
            py-5

            text-sm

            text-slate-600 dark:text-slate-400

            dark:border-white/10

            dark:text-gray-400

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <BrainCircuit
              size={18}
              className="
                text-purple-700

                dark:text-[#A78BFA]
              "
            />

            <p>
              AI will rewrite your resume using recruiter-focused and
              ATS-friendly optimization.
            </p>
          </div>

          <div
            className="

              inline-flex
              items-center

              gap-2

              text-purple-700

              dark:text-[#A78BFA]
            "
          >
            <span
              className="
                text-green-500

                dark:text-green-400
              "
            >
              ●
            </span>
            AI Rewrite Ready
          </div>
        </div>
      </div>
    </motion.div>
  );
}
