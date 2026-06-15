import { motion } from "framer-motion";

import { Sparkles, TrendingUp } from "lucide-react";

/* ================================================= */
/* SCORE CARD */
/* ================================================= */

export default function ScoreCard({
  title,

  score = 0,

  color = "from-[#312E81] via-[#7C3AED] to-[#A78BFA]",

  description = "AI-powered resume analysis",
}) {
  /* ================================================= */
  /* SCORE STATUS */
  /* ================================================= */

  const getScoreData = () => {
    if (score >= 85) {
      return {
        label: "Excellent",

        text: "text-green-600 dark:text-green-300",

        border: "border-green-500/20",

        bg: "bg-green-500/10",
      };
    }

    if (score >= 70) {
      return {
        label: "Good",

        text: "text-yellow-600 dark:text-yellow-300",

        border: "border-yellow-500/20",

        bg: "bg-yellow-500/10",
      };
    }

    if (score >= 50) {
      return {
        label: "Average",

        text: "text-orange-600 dark:text-orange-300",

        border: "border-orange-500/20",

        bg: "bg-orange-500/10",
      };
    }

    return {
      label: "Needs Work",

      text: "text-red-600 dark:text-red-300",

      border: "border-red-500/20",

      bg: "bg-red-500/10",
    };
  };

  const scoreData = getScoreData();

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        relative
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className={`

          absolute

          inset-0

          rounded-[28px]

          bg-gradient-to-r

          ${color}

          opacity-10

          
        `}
      />

      {/* ================================================= */}
      {/* MAIN CARD */}
      {/* ================================================= */}

      <div
        className="

          group
          relative

          overflow-hidden

          rounded-[28px]

          border

          border-slate-200 dark:border-slate-800

          bg-white/90

          p-8

          shadow-sm

          backdrop-blur-2xl

          transition-all
          duration-300

          hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]

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
            duration-500

            group-hover:opacity-100

            bg-gradient-to-br

            from-[#312E81]/5

            via-[#7C3AED]/5

            to-[#A78BFA]/5
          "
        />

        {/* ================================================= */}
        {/* TOP GLOW */}
        {/* ================================================= */}

        <div
          className="

            absolute

            -right-20
            -top-20

            h-52
            w-52

            rounded-full

            bg-fuchsia-500/10

           
          "
        />

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
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
              sm:items-start
              sm:justify-between
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

                  px-4
                  py-2

                  text-sm

                  text-purple-700

                  dark:text-[#A78BFA]
                "
              >
                <Sparkles size={14} />
                AI Resume Analytics
              </div>

              <h2
                className="

                  mt-5

                  text-3xl

                  font-black

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                {title}
              </h2>

              <p
                className="

                  mt-3

                  max-w-xl

                  leading-7

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                {description}
              </p>
            </div>

            {/* STATUS */}

            <div
              className={`

                inline-flex
                items-center

                gap-2

                rounded-full

                border

                px-5
                py-3

                text-sm

                font-semibold

                ${scoreData.border}

                ${scoreData.bg}

                ${scoreData.text}
              `}
            >
              <TrendingUp size={16} />

              {scoreData.label}
            </div>
          </div>

          {/* ================================================= */}
          {/* SCORE */}
          {/* ================================================= */}

          <div
            className="

              mt-10

              flex
              flex-col

              gap-6

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            {/* NUMBER */}

            <div>
              <h1
                className="

                  text-7xl

                  font-black

                  tracking-tight

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                {score}

                <span
                  className="

                    ml-2

                    text-4xl

                    text-[#7C3AED]

                    dark:text-[#A78BFA]
                  "
                >
                  %
                </span>
              </h1>

              <p
                className="

                  mt-2

                  text-slate-500 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                Resume Performance Score
              </p>
            </div>

            {/* METADATA */}

            <div
              className="
                text-right
              "
            >
              <p
                className="

                  text-sm

                  uppercase
                  tracking-[0.2em]

                  text-slate-500 dark:text-slate-400
                "
              >
                AI Generated Insight
              </p>

              <p
                className="

                  mt-2

                  text-sm

                  text-purple-700

                  dark:text-[#A78BFA]
                "
              >
                ATS Optimized Analysis
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* PROGRESS BAR */}
          {/* ================================================= */}

          <div className="mt-10">
            <div
              className="

                mb-3

                flex
                items-center
                justify-between
              "
            >
              <p
                className="

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                Resume Optimization Level
              </p>

              <span
                className="
                  text-sm

                  text-purple-700

                  dark:text-[#A78BFA]
                "
              >
                {score} / 100
              </span>
            </div>

            {/* BAR */}

            <div
              className="

                h-5

                overflow-hidden

                rounded-full

                bg-gray-200

                dark:bg-slate-900
              "
            >
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${score}%`,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className={`

                  relative

                  h-full

                  rounded-full

                  bg-gradient-to-r

                  ${color}
                `}
              >
                {/* SHINE */}

                <div
                  className="

                    absolute

                    inset-0

                    bg-white/90 dark:bg-slate-900

                    blur-sm
                  "
                />
              </motion.div>
            </div>
          </div>

          {/* ================================================= */}
          {/* FOOTER */}
          {/* ================================================= */}

          <div
            className="

              mt-8

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
              AI analyzes ATS compatibility, recruiter readability, keyword
              optimization, and resume impact.
            </p>

            <div
              className={`

                inline-flex
                items-center

                gap-2

                ${scoreData.text}
              `}
            >
              <span>●</span>
              Resume Analysis Complete
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
