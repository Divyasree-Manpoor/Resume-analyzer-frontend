import { motion } from "framer-motion";
import { Target, TrendingUp, Sparkles } from "lucide-react";

/* ================================================= */
/* MATCH SCORE */
/* ================================================= */

export default function MatchScore({ score = 87 }) {
  const getStatus = () => {
    if (score >= 85) {
      return {
        label: "Excellent Match",
        color: "text-green-600 dark:text-green-400",
        glow: "from-green-500 to-emerald-500",
      };
    }

    if (score >= 70) {
      return {
        label: "Good Match",
        color: "text-yellow-600 dark:text-yellow-400",
        glow: "from-yellow-500 to-orange-500",
      };
    }

    return {
      label: "Needs Improvement",
      color: "text-red-600 dark:text-red-400",
      glow: "from-red-500 to-purple-500",
    };
  };

  const status = getStatus();

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
    >
      <div
        className="
          overflow-hidden

          rounded-3xl

          border
          border-slate-200

          bg-white/90

          p-6

          shadow-sm

          dark:border-slate-800
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

            gap-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className={`
                  flex

                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  ${status.glow}
                `}
              >
                <Target size={24} className="text-white" />
              </div>

              <div>
                <p
                  className="
                    text-xs

                    uppercase

                    tracking-[0.2em]

                    text-slate-500
                  "
                >
                  Resume Match Score
                </p>

                <h2
                  className="
                    mt-1

                    text-xl
                    font-bold

                    text-slate-900
                    dark:text-white
                  "
                >
                  ATS Compatibility
                </h2>
              </div>
            </div>

            {/* STATUS */}

            <div
              className={`
                mt-4

                inline-flex
                items-center

                gap-2

                rounded-full

                bg-slate-100
                dark:bg-slate-800

                px-4
                py-2

                text-sm

                ${status.color}
              `}
            >
              <Sparkles size={14} />
              {status.label}
            </div>
          </div>

          {/* SCORE */}

          <div className="text-center">
            <motion.h2
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                text-6xl

                font-black

                text-slate-900
                dark:text-white

                sm:text-7xl
              "
            >
              {score}%
            </motion.h2>

            <p
              className="
                mt-1

                text-sm

                text-slate-500
              "
            >
              Overall Resume Match
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* PROGRESS BAR */}
        {/* ================================================= */}

        <div className="mt-8">
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
                text-sm

                text-slate-600
                dark:text-slate-400
              "
            >
              ATS Optimization Progress
            </p>

            <div
              className="
                flex
                items-center

                gap-2
              "
            >
              <TrendingUp
                size={14}
                className="
                  text-purple-700
                  dark:text-purple-400
                "
              />

              <span
                className="
                  text-sm

                  text-purple-700
                  dark:text-purple-400
                "
              >
                High Visibility
              </span>
            </div>
          </div>

          <div
            className="
              h-3

              overflow-hidden

              rounded-full

              bg-slate-200
              dark:bg-slate-800
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
                duration: 1,
              }}
              className={`
                h-full

                rounded-full

                bg-gradient-to-r
                ${status.glow}
              `}
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            grid

            gap-4

            md:grid-cols-3
          "
        >
          {[
            {
              label: "Keyword Match",
              value: `${Math.max(score - 3, 70)}%`,
            },
            {
              label: "Readability",
              value: `${Math.max(score - 1, 72)}%`,
            },
            {
              label: "Recruiter Impact",
              value: `${Math.max(score - 5, 68)}%`,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                p-4

                text-center

                dark:border-slate-800
                dark:bg-slate-800/50
              "
            >
              <h3
                className="
                  text-2xl

                  font-bold

                  text-slate-900
                  dark:text-white
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-2

                  text-sm

                  text-slate-500
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            flex
            flex-col

            gap-3

            border-t
            border-slate-200

            pt-5

            text-sm

            text-slate-600

            dark:border-slate-800
            dark:text-slate-400

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            AI calculated this score using ATS keywords, formatting quality,
            readability, and job description matching.
          </p>

          <div
            className="
              flex
              items-center

              gap-2

              text-green-600
              dark:text-green-400
            "
          >
            <span>●</span>
            Analysis Complete
          </div>
        </div>
      </div>
    </motion.div>
  );
}
