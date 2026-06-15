import { motion } from "framer-motion";

import {
  BrainCircuit,
  Rocket,
  Sparkles,
  TrendingUp,
  Target,

  BadgeCheck,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import RoadmapCard from "../components/roadmap/RoadmapCard";

import SkillTracker from "../components/roadmap/SkillTracker";

import WeeklyPlan from "../components/roadmap/WeeklyPlan";

import LearningResources from "../components/roadmap/LearningResources";

/* ================================================= */
/* CAREER ROADMAP */
/* ================================================= */

export default function Roadmap() {
  /* ================================================= */
  /* STATS */
  /* ================================================= */

  const stats = [
    {
      icon: Rocket,

      value: "12 Weeks",

      label: "Career Roadmap",
    },

    {
      icon: TrendingUp,

      value: "95%",

      label: "Growth Tracking",
    },

    {
      icon: BrainCircuit,

      value: "AI Powered",

      label: "Personalized Learning",
    },

    {
      icon: Target,

      value: "100%",

      label: "Career Focused",
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
    min-h-screen

    overflow-hidden

    bg-gradient-to-b
    from-white
    via-slate-50
    to-slate-100

    dark:from-[#020617]
    dark:via-[#0F172A]
    dark:to-[#020617]

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
    top-24
    -translate-x-1/2
    -z-10

    h-[550px]
    w-[550px]

    rounded-full

    bg-indigo-500/10
    dark:bg-indigo-500/15

    blur-[140px]
  "
        />

        <div
          className="
    absolute
    left-[-120px]
    top-[20%]
    -z-10

    h-[300px]
    w-[300px]

    rounded-full

    bg-cyan-300/10
    dark:bg-cyan-500/5

    blur-[120px]
  "
        />

        <div
          className="
    absolute
    right-[-120px]
    bottom-[10%]
    -z-10

    h-[300px]
    w-[300px]

    rounded-full

    bg-purple-300/10
    dark:bg-purple-500/5

    blur-[120px]
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
                AI Career Intelligence
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

                md:text-5xl
              "
            >
              
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
               Personalized  Career Roadmap
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
              Build a structured learning journey, improve technical skills,
              track career growth, and achieve your dream role using AI-powered
              roadmap generation and personalized career planning.
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

                        text-4xl

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
          {/* ROADMAP GRID */}
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
            {/* WEEK 1 */}

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
              <RoadmapCard
                week="Week 1"
                topics={[
                  "Learn SQL Basics",
                  "Practice Database Queries",
                  "Understand Relational Databases",
                  "Build Small SQL Projects",
                ]}
              />
            </motion.div>

            {/* WEEK 2 */}

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
              <RoadmapCard
                week="Week 2"
                topics={[
                  "Learn Docker Fundamentals",
                  "Containerize Applications",
                  "Understand Docker Compose",
                  "Deploy Containers Locally",
                ]}
              />
            </motion.div>

            {/* SKILL TRACKER */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
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

            {/* WEEKLY PLAN */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
            >
              <WeeklyPlan />
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* LEARNING RESOURCES */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-10
            "
          >
            <LearningResources />
          </motion.div>

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
                  Career Growth Strategy
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
                  Accelerate Your Career Journey
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
                  Our AI roadmap engine creates structured weekly learning
                  plans, identifies important technologies, tracks skill
                  development, and helps you stay focused on the most valuable
                  career growth areas.
                </p>
              </div>

              {/* RIGHT */}

              <div
                className="
                  space-y-5
                "
              >
                {[
                  "Personalized Weekly Learning Plans",

                  "AI Skill Progress Tracking",

                  "Industry-Focused Technologies",

                  "Hands-On Project Recommendations",

                  "Recruiter-Oriented Career Preparation",
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
                      <BookOpen
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
