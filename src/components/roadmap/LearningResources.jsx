import { motion } from "framer-motion";

import {
  BookOpen,
  GraduationCap,
  Rocket,
  ExternalLink,
  Sparkles,
  BrainCircuit,
} from "lucide-react";

/* ================================================= */
/* LEARNING RESOURCES */
/* ================================================= */

export default function LearningResources({
  resources = [
    {
      name: "Frontend Masters",
      category: "Frontend Development",
      level: "Advanced",
    },
    {
      name: "FreeCodeCamp",
      category: "Full Stack Development",
      level: "Beginner",
    },
    {
      name: "Coursera",
      category: "Professional Certifications",
      level: "Intermediate",
    },
    {
      name: "YouTube Tutorials",
      category: "Practical Learning",
      level: "All Levels",
    },
  ],
}) {
  const icons = [GraduationCap, Rocket, BrainCircuit, BookOpen];

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
      className="relative"
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0

          rounded-[28px]

          bg-[#312E81]/5

          blur-3xl
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
          border-slate-200
          dark:border-white/10

          bg-white/90/90
          dark:bg-slate-900

          p-8

          backdrop-blur-xl

          shadow-xl
          shadow-slate-200/60

          dark:shadow-black/20
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
          <div
            className="
              flex
              items-center
              gap-4
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

                bg-gradient-to-br
                from-[#312E81]
                via-[#7C3AED]
                to-[#A78BFA]

                shadow-lg
                shadow-purple-500/20
              "
            >
              <BookOpen size={30} className="text-white" />
            </div>

            <div>
              <h2
                className="
                  text-3xl
                  font-black

                  text-slate-900 dark:text-white
                  dark:text-white
                "
              >
                Recommended Learning Resources
              </h2>

              <p
                className="
                  mt-1

                  text-slate-600 dark:text-slate-400
                  dark:text-gray-400
                "
              >
                Recommended platforms to improve your skills and accelerate
                career growth.
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

              bg-[#312E81]/10

              px-5
              py-3

              text-[#7C3AED]

              dark:text-[#A78BFA]
            "
          >
            <Sparkles size={16} />
            AI Recommended
          </div>
        </div>

        {/* ================================================= */}
        {/* RESOURCES */}
        {/* ================================================= */}

        <div
          className="
            mt-10

            grid
            grid-cols-1

            gap-5

            md:grid-cols-2
          "
        >
          {resources.map((item, index) => {
            const Icon = icons[index % icons.length];

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
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className="
                  group
                  relative

                  rounded-3xl

                  border
                  border-slate-200
                  dark:border-slate-800

                  bg-slate-50
                  dark:bg-slate-950

                  p-6

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-xl
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

                    bg-gradient-to-br
                    from-[#312E81]/10
                    via-[#7C3AED]/5
                    to-[#A78BFA]/10
                  "
                />

                <div className="relative">
                  {/* TOP */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >
                    <div
                      className="
                        flex
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex

                          h-14
                          w-14

                          items-center
                          justify-center

                          rounded-2xl

                          bg-[#312E81]/10
                        "
                      >
                        <Icon
                          size={26}
                          className="
                            text-[#7C3AED]

                            dark:text-[#A78BFA]
                          "
                        />
                      </div>

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
                          className="
                            mt-1

                            text-sm

                            text-slate-600

                            dark:text-slate-400
                          "
                        >
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <ExternalLink
                      size={18}
                      className="
                        text-slate-500 dark:text-slate-400

                        transition-colors
                        duration-300

                        group-hover:text-[#7C3AED]

                        dark:group-hover:text-[#A78BFA]
                      "
                    />
                  </div>

                  {/* LEVEL */}

                  <div
                    className="
                      mt-6

                      inline-flex
                      items-center

                      gap-2

                      rounded-full

                      border
                      border-slate-200
                      dark:border-white/10

                      bg-slate-50
                      dark:bg-slate-900

                      px-4
                      py-2

                      text-sm

                      text-slate-700
                      dark:text-slate-300
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

                    {item.level}
                  </div>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-5

                      leading-relaxed

                      text-slate-600 dark:text-slate-400

                      dark:text-gray-400
                    "
                  >
                    Recommended to help you build practical skills, improve job
                    readiness, and support your career roadmap.
                  </p>
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
            border-slate-200
            dark:border-white/10

            pt-6

            text-sm

            text-slate-600 dark:text-slate-400
            dark:text-gray-400

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            These resources are selected to help improve missing skills,
            technical expertise, and interview readiness.
          </p>

          <div
            className="
              inline-flex
              items-center

              gap-2

              text-[#7C3AED]

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
            Aligned With Your Career Roadmap
          </div>
        </div>
      </div>
    </motion.div>
  );
}
