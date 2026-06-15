import { motion } from "framer-motion";

import {
  CalendarRange,
  CheckCircle2,
  Rocket,
  BrainCircuit,
  Sparkles,
  Clock3,
} from "lucide-react";

/* ================================================= */
/* WEEKLY PLAN */
/* ================================================= */

export default function WeeklyPlan({
  plans = [
    "Learn SQL Basics",

    "Build React Project",

    "Learn Docker",

    "Deploy App on AWS",
  ],
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
              <CalendarRange
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
                Weekly Learning Plan
              </h2>

              <p
                className="

                  mt-1

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                AI-generated weekly roadmap to improve skills and career
                readiness.
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
              border-purple-200

              bg-purple-500/10

              px-5
              py-3

              text-purple-700

              dark:text-[#A78BFA]
            "
          >
            <Sparkles size={16} />
            AI Weekly Planner
          </div>
        </div>

        {/* ================================================= */}
        {/* PLAN LIST */}
        {/* ================================================= */}

        <div
          className="
            mt-10
            space-y-5
          "
        >
          {plans.map((item, index) => (
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

                  dark:bg-[#111827]/80

                  dark:hover:bg-[#161F32]
                "
            >
              {/* GLOW */}

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
                      items-start
                      gap-4
                    "
                >
                  {/* CHECK */}

                  <div
                    className="

                        mt-1

                        flex

                        h-12
                        w-12

                        items-center
                        justify-center

                        rounded-2xl

                        bg-green-500/10
                      "
                  >
                    <CheckCircle2
                      size={22}
                      className="
                          text-green-500

                          dark:text-green-400
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
                      {item}
                    </h3>

                    <p
                      className="

                          mt-2

                          leading-relaxed

                          text-slate-600 dark:text-slate-400

                          dark:text-gray-400
                        "
                    >
                      AI recommends completing this learning activity to improve
                      technical expertise and strengthen career opportunities.
                    </p>
                  </div>
                </div>

                {/* TIME */}

                <div
                  className="

                      inline-flex
                      items-center

                      gap-2

                      rounded-2xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-white/90

                      px-4
                      py-3

                      text-sm

                      text-slate-700

                      dark:border-white/10

                      dark:bg-slate-900

                      dark:text-slate-300
                    "
                >
                  <Clock3 size={16} />
                  4-6 Hours
                </div>
              </div>
            </motion.div>
          ))}
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

              title: "Learning Efficiency",

              value: "92%",
            },

            {
              icon: Rocket,

              title: "Career Growth",

              value: "High",
            },

            {
              icon: Sparkles,

              title: "Skill Progress",

              value: "+40%",
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

                    dark:bg-slate-900
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
            AI generated this weekly plan based on your target role, missing
            skills, and career roadmap analysis.
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
            Personalized Weekly Roadmap
          </div>
        </div>
      </div>
    </motion.div>
  );
}
