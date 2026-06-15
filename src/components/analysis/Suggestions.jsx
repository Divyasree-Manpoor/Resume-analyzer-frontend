import { motion } from "framer-motion";

import { Sparkles, BrainCircuit, TrendingUp, ShieldCheck } from "lucide-react";

import { useResume } from "../../context/ResumeContext";

/* ================================================= */
/* AI SUGGESTIONS */
/* ================================================= */

export default function Suggestions() {
  /* ================================================= */
  /* CONTEXT */
  /* ================================================= */

  const { analysisData } = useResume();

  /* ================================================= */
  /* SUGGESTIONS */
  /* ================================================= */

  const suggestions = analysisData?.suggestions || [];

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

            right-[-100px]
            top-[-100px]

            h-[240px]
            w-[240px]

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
                  AI Suggestions
                </h2>

                <p
                  className="

                    mt-1

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  Personalized ATS optimization and resume improvement
                  recommendations.
                </p>
              </div>
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
              <BrainCircuit size={16} />
              AI Recommendation Engine
            </div>
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
                icon: TrendingUp,

                title: "Resume Growth",

                value: "High",
              },

              {
                icon: ShieldCheck,

                title: "ATS Optimization",

                value: "Active",
              },

              {
                icon: Sparkles,

                title: "AI Suggestions",

                value: suggestions.length || 0,
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
          {/* SUGGESTIONS LIST */}
          {/* ================================================= */}

          <div className="mt-10 space-y-5">
            {suggestions.length > 0 ? (
              suggestions.map((item, index) => (
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
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                  className="

                      group
                      relative

                      overflow-hidden

                      rounded-3xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-slate-50 dark:bg-slate-800/50

                      p-6

                      transition-all
                      duration-300

                      hover:border-purple-200

                      hover:bg-purple-50/80

                      dark:border-white/10

                      dark:bg-[#111827]/70

                      dark:hover:bg-[#1A1830]
                    "
                >
                  {/* HOVER GLOW */}

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

                        to-[#A78BFA]/5
                      "
                  />

                  {/* CONTENT */}

                  <div
                    className="

                        relative

                        flex
                        items-start

                        gap-5
                      "
                  >
                    {/* ICON */}

                    <div
                      className="

                          flex

                          h-12
                          w-12

                          shrink-0

                          items-center
                          justify-center

                          rounded-2xl

                          bg-purple-500/10
                        "
                    >
                      <Sparkles
                        size={22}
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

                            text-xl

                            font-bold

                            text-slate-900 dark:text-white

                            dark:text-white
                          "
                      >
                        AI Suggestion #{index + 1}
                      </h3>

                      <p
                        className="

                            mt-3

                            leading-8

                            text-slate-600 dark:text-slate-400

                            dark:text-gray-400
                          "
                      >
                        {item}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div
                className="

                  rounded-3xl

                  border
                  border-dashed

                  border-slate-200 dark:border-slate-800

                  bg-slate-50 dark:bg-slate-800/50

                  p-10

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

                      h-16
                      w-16

                      items-center
                      justify-center

                      rounded-2xl

                      bg-purple-500/10
                    "
                  >
                    <Sparkles
                      size={30}
                      className="
                        text-purple-700

                        dark:text-[#A78BFA]
                      "
                    />
                  </div>
                </div>

                <h3
                  className="

                    mt-5

                    text-2xl

                    font-bold

                    text-slate-900 dark:text-white

                    dark:text-white
                  "
                >
                  No Suggestions Available
                </h3>

                <p
                  className="

                    mt-3

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  Upload and analyze your resume to receive personalized
                  AI-powered ATS improvement suggestions.
                </p>
              </div>
            )}
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
              AI Suggestions improve ATS score, recruiter visibility, keyword
              optimization, and overall resume quality.
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
                "
              >
                ●
              </span>
              Suggestion Analysis Complete
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
