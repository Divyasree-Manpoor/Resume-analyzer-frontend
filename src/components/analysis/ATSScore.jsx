import { motion } from "framer-motion";

import { BrainCircuit, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

import { useResume } from "../../context/ResumeContext";

import ScoreCard from "./ScoreCard";

/* ================================================= */
/* ATS SCORE */
/* ================================================= */

export default function ATSScore() {
  /* ================================================= */
  /* CONTEXT */
  /* ================================================= */

  const { analysisData } = useResume();

  /* ================================================= */
  /* SCORE */
  /* ================================================= */

  const atsScore = analysisData?.atsScore || 0;

  /* ================================================= */
  /* SCORE STATUS */
  /* ================================================= */

  const getScoreStatus = () => {
    if (atsScore >= 85) {
      return {
        label: "Excellent",

        color: "text-green-600 dark:text-green-300",

        bg: "bg-green-500/10",

        border: "border-green-500/20",
      };
    }

    if (atsScore >= 70) {
      return {
        label: "Good",

        color: "text-yellow-600 dark:text-yellow-300",

        bg: "bg-yellow-500/10",

        border: "border-yellow-500/20",
      };
    }

    if (atsScore >= 50) {
      return {
        label: "Average",

        color: "text-orange-600 dark:text-orange-300",

        bg: "bg-orange-500/10",

        border: "border-orange-500/20",
      };
    }

    return {
      label: "Needs Improvement",

      color: "text-red-600 dark:text-red-300",

      bg: "bg-red-500/10",

      border: "border-red-500/20",
    };
  };

  const status = getScoreStatus();

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
                <ShieldCheck
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
                  ATS Resume Score
                </h2>

                <p
                  className="

                    mt-1

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  AI-powered ATS compatibility and recruiter evaluation.
                </p>
              </div>
            </div>

            {/* BADGE */}

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

                ${status.border}

                ${status.bg}

                ${status.color}
              `}
            >
              <Sparkles size={16} />

              {status.label}
            </div>
          </div>

          {/* ================================================= */}
          {/* SCORE CARD */}
          {/* ================================================= */}

          <div className="mt-10">
            <ScoreCard title="ATS Resume Score" score={atsScore} />
          </div>

          {/* ================================================= */}
          {/* STATS */}
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
                icon: BrainCircuit,

                title: "AI Optimization",

                value: "Active",
              },

              {
                icon: TrendingUp,

                title: "Recruiter Impact",

                value: `${atsScore}%`,
              },

              {
                icon: Sparkles,

                title: "Keyword Matching",

                value: atsScore >= 70 ? "Strong" : "Improving",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
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

                      dark:bg-[#111827]/70
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

                          h-12
                          w-12

                          items-center
                          justify-center

                          rounded-2xl

                          bg-purple-500/10
                        "
                    >
                      <Icon
                        size={22}
                        className="
                            text-purple-700

                            dark:text-[#A78BFA]
                          "
                      />
                    </div>
                  </div>

                  <h3
                    className="

                        mt-4

                        text-3xl

                        font-black

                        text-slate-900 dark:text-white

                        dark:text-white
                      "
                  >
                    {item.value}
                  </h3>

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
              );
            })}
          </div>

          {/* ================================================= */}
          {/* DESCRIPTION */}
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
            <p
              className="

                leading-8

                text-slate-600 dark:text-slate-400

                dark:text-gray-400
              "
            >
              Your resume was analyzed using AI-powered ATS optimization,
              keyword relevance detection, recruiter readability analysis,
              formatting validation, and career-focused scoring metrics.
            </p>
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
              ATS Resume Score helps improve recruiter visibility and job
              application success.
            </p>

            <div
              className={`

                inline-flex
                items-center

                gap-2

                ${status.color}
              `}
            >
              <span>●</span>
              Resume Evaluation Complete
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
