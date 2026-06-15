import { motion } from "framer-motion";

import { Sparkles, CheckCircle2, BrainCircuit, TrendingUp } from "lucide-react";

/* ================================================= */
/* REWRITTEN CONTENT */
/* ================================================= */

export default function RewrittenContent({
  content = `
Developed scalable React-based web
applications improving user
experience, application
performance, and frontend
maintainability.
  `,
}) {
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

          p-8

          shadow-sm

          backdrop-blur-2xl

          dark:border-purple-200

          dark:bg-#7C3AED/5
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
              <Sparkles
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
                AI Rewritten Resume
              </h2>

              <p
                className="

                  mt-1

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                AI-optimized resume content for better ATS performance and
                recruiter impact.
              </p>
            </div>
          </div>

          {/* STATUS */}

          <div
            className="

              inline-flex
              items-center

              gap-2

              rounded-full

              border
              border-green-500/20

              bg-green-500/10

              px-5
              py-3

              text-green-600

              dark:text-green-300
            "
          >
            <CheckCircle2 size={18} />
            Optimized Successfully
          </div>
        </div>

        {/* ================================================= */}
        {/* CONTENT BOX */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            rounded-3xl

            border

            border-#7C3AED/10

            bg-slate-50 dark:bg-slate-800/50

            p-6

            dark:bg-black/20
          "
        >
          <p
            className="

              whitespace-pre-line

              text-lg

              leading-relaxed

              text-slate-700

              dark:text-gray-200
            "
          >
            {content}
          </p>
        </div>

        {/* ================================================= */}
        {/* IMPROVEMENTS */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            grid

            grid-cols-1

            gap-5

            md:grid-cols-3
          "
        >
          {[
            "Stronger Action Verbs",

            "ATS Keyword Optimized",

            "Better Recruiter Readability",
          ].map((item, index) => (
            <div
              key={index}
              className="

                  rounded-2xl

                  border
                  border-green-500/10

                  bg-green-500/5

                  p-5
                "
            >
              <div
                className="
                    flex
                    items-center
                    gap-3
                  "
              >
                <CheckCircle2
                  size={18}
                  className="
                      text-green-500

                      dark:text-green-400
                    "
                />

                <p
                  className="

                      text-sm

                      font-medium

                      text-green-600

                      dark:text-green-300
                    "
                >
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* AI INSIGHTS */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            rounded-3xl

            border

            border-slate-200 dark:border-slate-800

            bg-slate-50 dark:bg-slate-800/50

            p-6

            dark:border-white/10

            dark:bg-slate-900
          "
        >
          <div
            className="
              flex
              items-start
              gap-4
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

                bg-purple-500/10
              "
            >
              <BrainCircuit
                size={22}
                className="
                  text-purple-700

                  dark:text-[#A78BFA]
                "
              />
            </div>

            <div>
              <h3
                className="

                  text-xl

                  font-bold

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                AI Resume Improvements
              </h3>

              <p
                className="

                  mt-3

                  leading-relaxed

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                AI enhanced your resume using stronger wording, measurable
                impact, ATS-friendly keywords, and professional
                recruiter-focused formatting.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* METRICS */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            grid

            grid-cols-1

            gap-5

            md:grid-cols-3
          "
        >
          {[
            {
              title: "ATS Score",

              value: "+28%",
            },

            {
              title: "Readability",

              value: "+35%",
            },

            {
              title: "Recruiter Impact",

              value: "+42%",
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

                  text-center

                  dark:border-white/10

                  dark:bg-slate-900
                "
            >
              <div
                className="
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
              >
                <TrendingUp
                  size={18}
                  className="
                      text-green-500

                      dark:text-green-400
                    "
                />

                <h3
                  className="

                      text-3xl

                      font-black

                      text-slate-900 dark:text-white

                      dark:text-white
                    "
                >
                  {item.value}
                </h3>
              </div>

              <p
                className="

                    mt-2

                    text-sm

                    text-slate-500 dark:text-slate-400
                  "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            flex
            flex-col

            gap-4

            border-t

            border-slate-200 dark:border-slate-800

            pt-6

            text-sm

            text-slate-600 dark:text-slate-400

            dark:border-white/10

            dark:text-gray-400

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            AI Resume Analyzer optimized this content for ATS systems, recruiter
            readability, and professional presentation.
          </p>

          <div
            className="

              inline-flex
              items-center

              gap-2

              text-green-600

              dark:text-green-300
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
            AI Optimization Complete
          </div>
        </div>
      </div>
    </motion.div>
  );
}
