import { motion } from "framer-motion";

import { BrainCircuit, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

/* ================================================= */
/* SKILL TRACKER */
/* ================================================= */

export default function SkillTracker({
  skills = [
    {
      name: "Docker",
      progress: 70,
    },

    {
      name: "AWS",
      progress: 50,
    },

    {
      name: "TypeScript",
      progress: 80,
    },
  ],
}) {
  /* ================================================= */
  /* SKILL LEVEL */
  /* ================================================= */

  const getSkillStatus = (progress) => {
    if (progress >= 80) {
      return {
        label: "Advanced",

        color: "from-green-500 to-emerald-500",

        text: "text-green-600 dark:text-green-400",
      };
    }

    if (progress >= 60) {
      return {
        label: "Intermediate",

        color: "from-yellow-500 to-orange-500",

        text: "text-yellow-600 dark:text-yellow-400",
      };
    }

    return {
      label: "Beginner",

      color: "from-red-500 to-#A78BFA",

      text: "text-red-600 dark:text-red-400",
    };
  };

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

          l
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
              <BrainCircuit
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
                Skill Tracker
              </h2>

              <p
                className="

                  mt-1

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                Track your technical skill growth and roadmap progress.
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
            AI Progress Tracking
          </div>
        </div>

        {/* ================================================= */}
        {/* SKILLS */}
        {/* ================================================= */}

        <div
          className="
            mt-10
            space-y-8
          "
        >
          {skills.map((item, index) => {
            const status = getSkillStatus(item.progress);

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
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
                {/* TOP */}

                <div
                  className="

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

                          h-12
                          w-12

                          items-center
                          justify-center

                          rounded-2xl

                          bg-purple-500/10
                        "
                    >
                      <CheckCircle2
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

                            text-2xl

                            font-bold

                            text-slate-900 dark:text-white

                            dark:text-white
                          "
                      >
                        {item.name}
                      </h3>

                      <p
                        className={`

                            mt-1

                            text-sm

                            ${status.text}
                          `}
                      >
                        {status.label}
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
                      {item.progress}%
                    </h3>

                    <p
                      className="

                          text-sm

                          text-slate-500 dark:text-slate-400
                        "
                    >
                      Completion
                    </p>
                  </div>
                </div>

                {/* ================================================= */}
                {/* PROGRESS BAR */}
                {/* ================================================= */}

                <div className="mt-6">
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
                      Learning Progress
                    </p>

                    <div
                      className="
                          flex
                          items-center
                          gap-2
                        "
                    >
                      <TrendingUp
                        size={16}
                        className="
                            text-purple-700

                            dark:text-[#A78BFA]
                          "
                      />

                      <span
                        className="
                            text-purple-700

                            dark:text-[#A78BFA]
                          "
                      >
                        Improving
                      </span>
                    </div>
                  </div>

                  {/* BAR */}

                  <div
                    className="

                        h-4

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
                        width: `${item.progress}%`,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.2,
                      }}
                      className={`

                          relative

                          h-full

                          rounded-full

                          bg-gradient-to-r

                          ${status.color}
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
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <p
                  className="

                      mt-5

                      leading-relaxed

                      text-slate-600 dark:text-slate-400

                      dark:text-gray-400
                    "
                >
                  Continue improving your {item.name} skills through projects,
                  certifications, and consistent practice to strengthen your
                  career profile.
                </p>
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
            AI Skill Tracker monitors your learning roadmap, technical growth,
            and career readiness progress.
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
            Smart Progress Monitoring
          </div>
        </div>
      </div>
    </motion.div>
  );
}
