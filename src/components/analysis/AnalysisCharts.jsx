import { motion } from "framer-motion";

import { BrainCircuit, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";

import { useResume } from "../../context/ResumeContext";

import { formatPercentage } from "../../utils/formatters";

/* ================================================= */
/* ANALYSIS CHARTS */
/* ================================================= */

export default function AnalysisCharts() {
  /* ================================================= */
  /* CONTEXT */
  /* ================================================= */

  const { analysisData } = useResume();

  /* ================================================= */
  /* CHART DATA */
  /* ================================================= */

  const chartData = [
    {
      title: "ATS Optimization",

      value: analysisData?.atsScore || 0,

      icon: ShieldCheck,
    },

    {
      title: "Overall Resume Score",

      value: analysisData?.overallScore || 0,

      icon: TrendingUp,
    },

    {
      title: "Readability",

      value: analysisData?.readabilityScore || 0,

      icon: Sparkles,
    },

    {
      title: "Impact Score",

      value: analysisData?.impactScore || 0,

      icon: BrainCircuit,
    },
  ];

  /* ================================================= */
  /* GET COLOR */
  /* ================================================= */

  const getGradient = (value) => {
    if (value >= 80) {
      return `
        from-green-500
        via-emerald-500
        to-lime-500
      `;
    }

    if (value >= 60) {
      return `
        from-yellow-500
        via-orange-500
        to-amber-500
      `;
    }

    return `
      from-red-500
      via-[#7C3AED]
      to-[#A78BFA]
    `;
  };

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
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

            bg-fuchsia-500/10

            
          "
        />

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
          "
        >
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

            <div>
              <h2
                className="

                  text-4xl

                  font-black

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                Resume Analytics
              </h2>

              <p
                className="

                  mt-2

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                AI-powered ATS analysis and resume performance insights.
              </p>
            </div>

            {/* BADGE */}

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

                text-sm

                text-purple-700

                dark:text-[#A78BFA]
              "
            >
              <Sparkles size={16} />
              AI Analytics Active
            </div>
          </div>

          {/* ================================================= */}
          {/* CHARTS */}
          {/* ================================================= */}

          <div
            className="
              mt-10
              space-y-8
            "
          >
            {chartData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="

                      rounded-3xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-slate-50 dark:bg-slate-800/50

                      p-6

                      dark:border-white/10

                      dark:bg-[#111827]/70
                    "
                >
                  {/* ================================================= */}
                  {/* TOP */}
                  {/* ================================================= */}

                  <div
                    className="

                        mb-5

                        flex
                        flex-col

                        gap-4

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

                            h-14
                            w-14

                            items-center
                            justify-center

                            rounded-2xl

                            bg-purple-500/10
                          "
                      >
                        <Icon
                          size={24}
                          className="
                              text-purple-700

                              dark:text-[#A78BFA]
                            "
                        />
                      </div>

                      {/* TEXT */}

                      <div>
                        <h3
                          className="

                              text-2xl

                              font-bold

                              text-slate-900 dark:text-white

                              dark:text-white
                            "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="

                              mt-1

                              text-sm

                              text-slate-500 dark:text-slate-400
                            "
                        >
                          Resume Performance Metric
                        </p>
                      </div>
                    </div>

                    {/* SCORE */}

                    <div
                      className="
                          text-right
                        "
                    >
                      <h3
                        className="

                            text-4xl

                            font-black

                            text-slate-900 dark:text-white

                            dark:text-white
                          "
                      >
                        {formatPercentage(item.value)}
                      </h3>

                      <p
                        className="

                            text-sm

                            text-slate-500 dark:text-slate-400
                          "
                      >
                        Current Score
                      </p>
                    </div>
                  </div>

                  {/* ================================================= */}
                  {/* PROGRESS BAR */}
                  {/* ================================================= */}

                  <div>
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
                        Performance Level
                      </p>

                      <span
                        className="

                            text-sm

                            text-purple-700

                            dark:text-[#A78BFA]
                          "
                      >
                        AI Optimized
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
                          width: `${item.value}%`,
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

                            ${getGradient(item.value)}
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
                </motion.div>
              );
            })}
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
              AI Resume Analyzer evaluates ATS compatibility, recruiter
              readability, keyword optimization, and resume impact.
            </p>

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
              Resume Analytics Active
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
