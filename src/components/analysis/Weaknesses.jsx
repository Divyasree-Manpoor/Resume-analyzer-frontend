import { motion } from "framer-motion";

import {
  AlertTriangle,
  ShieldAlert,
  TrendingDown,
  BrainCircuit,
} from "lucide-react";

import { useResume } from "../../context/ResumeContext";

/* ================================================= */
/* WEAKNESSES */
/* ================================================= */

export default function Weaknesses() {
  /* ================================================= */
  /* CONTEXT */
  /* ================================================= */

  const { analysisData } = useResume();

  /* ================================================= */
  /* WEAKNESSES */
  /* ================================================= */

  const weaknesses = analysisData?.weaknesses || [];

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

          bg-yellow-500/10

          
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

            bg-yellow-500/10

            
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

                  from-yellow-500

                  via-orange-500

                  to-amber-500

                  shadow-lg

                  shadow-yellow-500/20
                "
              >
                <AlertTriangle
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
                  Resume Weaknesses
                </h2>

                <p
                  className="

                    mt-1

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  AI detected resume sections that need improvement for better
                  ATS performance.
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
                border-yellow-500/20

                bg-yellow-500/10

                px-5
                py-3

                text-sm

                text-yellow-600

                dark:text-yellow-300
              "
            >
              <ShieldAlert size={16} />
              Improvement Areas
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
                icon: TrendingDown,

                title: "Optimization Need",

                value: "Medium",
              },

              {
                icon: BrainCircuit,

                title: "AI Detection",

                value: "Active",
              },

              {
                icon: AlertTriangle,

                title: "Weakness Points",

                value: weaknesses.length || 0,
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

                          bg-yellow-500/10
                        "
                    >
                      <Icon
                        size={22}
                        className="
                            text-yellow-600

                            dark:text-yellow-300
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
          {/* WEAKNESSES LIST */}
          {/* ================================================= */}

          <div className="mt-10 space-y-5">
            {weaknesses.length > 0 ? (
              weaknesses.map((item, index) => (
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

                      hover:border-yellow-500/30

                      hover:bg-yellow-50/80

                      dark:border-white/10

                      dark:bg-[#111827]/70

                      dark:hover:bg-[#241C10]
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

                        from-yellow-500/5

                        to-orange-500/5
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

                          bg-yellow-500/10
                        "
                    >
                      <AlertTriangle
                        size={22}
                        className="
                            text-yellow-600

                            dark:text-yellow-300
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
                        Weakness #{index + 1}
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

                      bg-yellow-500/10
                    "
                  >
                    <AlertTriangle
                      size={30}
                      className="
                        text-yellow-600

                        dark:text-yellow-300
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
                  No Weaknesses Detected
                </h3>

                <p
                  className="

                    mt-3

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  Your resume currently shows strong ATS compatibility and
                  recruiter-focused structure.
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
              AI highlights resume weaknesses that may reduce ATS score,
              recruiter visibility, and application success rate.
            </p>

            <div
              className="

                inline-flex
                items-center

                gap-2

                text-yellow-600

                dark:text-yellow-300
              "
            >
              <span
                className="
                  text-yellow-500
                "
              >
                ●
              </span>
              Weakness Analysis Complete
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
