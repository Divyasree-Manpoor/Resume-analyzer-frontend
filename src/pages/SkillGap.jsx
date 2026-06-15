import { motion } from "framer-motion";

import {
  BrainCircuit,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Target,
  BadgeCheck,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import MissingSkills from "../components/jdmatch/MissingSkills";

import SkillTracker from "../components/roadmap/SkillTracker";

/* ================================================= */
/* SKILL GAP PAGE */
/* ================================================= */

export default function SkillGap() {
  /* ================================================= */
  /* STATS */
  /* ================================================= */

  const stats = [
    {
      icon: TrendingUp,

      value: "85%",

      label: "Skill Match",
    },

    {
      icon: BrainCircuit,

      value: "12+",

      label: "Skills Analyzed",
    },

    {
      icon: Target,

      value: "4",

      label: "Missing Skills",
    },

    {
      icon: BadgeCheck,

      value: "92%",

      label: "Career Readiness",
    },
  ];

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <MainLayout>
      <section
        className="

          relative

          overflow-hidden

          px-6

          pt-28
          pb-24
        "
      >
        {/* ================================================= */}
        {/* BACKGROUND GLOW */}
        {/* ================================================= */}

        <div
          className="

            absolute

            left-1/2
            top-0

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-purple-500/10

            blur-[140px]

            dark:bg-purple-500/10
          "
        />

        {/* ================================================= */}
        {/* CONTAINER */}
        {/* ================================================= */}

        <div
          className="

            relative

            mx-auto

            max-w-7xl
          "
        >
          {/* ================================================= */}
          {/* HERO */}
          {/* ================================================= */}

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
              duration: 0.7,
            }}
            className="
              text-center
            "
          >
            {/* BADGE */}

            <div
              className="
                flex
                justify-center
              "
            >
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

                  text-[#7C3AED]

                  backdrop-blur-xl

                  dark:text-[#A78BFA]
                "
              >
                <Sparkles size={18} />
                AI Skill Intelligence
              </div>
            </div>

            {/* TITLE */}

            <h1
              className="

                mt-10

                text-5xl

                font-black

                leading-tight

                text-slate-900 dark:text-white

                dark:text-white

                md:text-7xl
              "
            >
              Skill Gap
              <span
                className="

                  mt-3

                  block

                  bg-gradient-to-r

                  from-[#312E81]

                  via-[#7C3AED]

                  to-[#A78BFA]

                  bg-clip-text

                  text-transparent
                "
              >
                Analysis Dashboard
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="

                mx-auto

                mt-8

                max-w-4xl

                text-lg

                leading-relaxed

                text-slate-600 dark:text-slate-400

                dark:text-gray-400

                md:text-xl
              "
            >
              Discover missing technical skills, track career growth, improve
              job readiness, and unlock personalized AI-powered learning
              recommendations based on recruiter expectations and ATS systems.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* STATS */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              grid

              grid-cols-1

              gap-6

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="

                      rounded-3xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-white/90

                      p-8

                      text-center

                      shadow-sm

                      backdrop-blur-2xl

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

                          h-16
                          w-16

                          items-center
                          justify-center

                          rounded-2xl

                          bg-purple-500/10
                        "
                    >
                      <Icon
                        size={30}
                        className="
                            text-[#7C3AED]
                          "
                      />
                    </div>
                  </div>

                  <h2
                    className="

                        mt-6

                        text-5xl

                        font-black

                        text-slate-900 dark:text-white

                        dark:text-white
                      "
                  >
                    {item.value}
                  </h2>

                  <p
                    className="
                        mt-3

                        text-slate-600 dark:text-slate-400

                        dark:text-gray-400
                      "
                  >
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ================================================= */}
          {/* MAIN CONTENT */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              grid

              grid-cols-1

              gap-8

              xl:grid-cols-2
            "
          >
            {/* MISSING SKILLS */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
            >
              <MissingSkills />
            </motion.div>

            {/* SKILL TRACKER */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
            >
              <SkillTracker />
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* INSIGHTS SECTION */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              overflow-hidden

              rounded-[40px]

              border

              border-slate-200 dark:border-slate-800

              bg-white/90

              p-8
              md:p-12

              shadow-2xl

              backdrop-blur-2xl

              dark:border-white/10

              dark:bg-slate-900
            "
          >
            <div
              className="

                grid

                grid-cols-1

                gap-20

                lg:grid-cols-[1.1fr_0.9fr]
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

                    px-5
                    py-3

                    text-[#7C3AED]

                    dark:text-[#A78BFA]
                  "
                >
                  <ShieldCheck size={18} />
                  Career Insights
                </div>

                <h2
                  className="

                    mt-8

                    text-5xl

                    font-black

                    leading-tight

                    text-slate-900 dark:text-white

                    dark:text-white
                  "
                >
                  Improve Your Technical Strength
                </h2>

                <p
                  className="

                    mt-8

                    text-lg

                    leading-relaxed

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  AI identifies the most important missing technologies,
                  recruiter keywords, and technical competencies required for
                  your target role. Build stronger projects, improve ATS
                  performance, and accelerate your career growth.
                </p>
              </div>

              {/* RIGHT */}

              <div
                className="
                  space-y-5
                "
              >
                {[
                  "Personalized AI Skill Recommendations",

                  "ATS Keyword Optimization",

                  "Recruiter Visibility Improvement",

                  "Career Roadmap Generation",

                  "Technical Growth Tracking",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="

                        flex
                        items-center

                        gap-4

                        rounded-3xl

                        border

                        border-slate-200 dark:border-slate-800

                        bg-[#F8FAFC]

                        p-5

                        dark:border-white/10

                        dark:bg-[#111827]/70
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

                          bg-green-500/10
                        "
                    >
                      <BadgeCheck
                        size={24}
                        className="
                            text-green-500
                          "
                      />
                    </div>

                    <h3
                      className="

                          text-lg

                          font-semibold

                          text-slate-900 dark:text-white

                          dark:text-white
                        "
                    >
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
