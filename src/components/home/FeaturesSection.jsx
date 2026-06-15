import { motion } from "framer-motion";

import {
  FileSearch,
  Sparkles,
  Bot,
  Target,
  Brain,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

/* ================================================= */
/* FEATURES SECTION */
/* ================================================= */

export default function FeaturesSection() {
  /* ================================================= */
  /* NAVIGATION */
  /* ================================================= */

  const navigate = useNavigate();

  /* ================================================= */
  /* FEATURES */
  /* ================================================= */

  const features = [
    {
      icon: FileSearch,

      title: "ATS Resume Analysis",

      description:
        "Analyze ATS compatibility, recruiter readability, keyword optimization, and resume performance instantly.",

      route: "/analysis",
    },

    {
      icon: Target,

      title: "Job Description Match",

      description:
        "Compare resumes against job descriptions and identify missing keywords and required technical skills.",

      route: "/jd-match",
    },

    {
      icon: Sparkles,

      title: "AI Resume Rewrite",

      description:
        "Rewrite resume content using AI-powered optimization for stronger recruiter impact and ATS ranking.",

      route: "/rewrite",
    },

    {
      icon: Brain,

      title: "Skill Gap Analysis",

      description:
        "Discover missing technical and soft skills required for your target job role and career growth.",

      route: "/skill-gap",
    },

    {
      icon: Rocket,

      title: "Career Roadmaps",

      description:
        "Generate personalized AI learning roadmaps to improve technical skills and accelerate career success.",

      route: "/roadmap",
    },

    {
      icon: Bot,

      title: "AI Career Assistant",

      description:
        "Chat with an intelligent AI assistant for resume guidance, interview preparation, and career advice.",

      route: "/chatbot",
    },
  ];

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <section
      className="

        relative
        overflow-hidden

        bg-slate-50 dark:bg-slate-800/50

        px-6
        py-32

        dark:bg-[#070B14]
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className="

          absolute

          left-1/2
          top-1/2

          h-[600px]
          w-[600px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-purple-500/10

          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* GRID OVERLAY */}
      {/* ================================================= */}

      <div
        className="

          absolute
          inset-0

          bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]

          dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]

          bg-[size:70px_70px]

          opacity-20
        "
      />

      {/* ================================================= */}
      {/* SECTION HEADER */}
      {/* ================================================= */}

      <div
        className="

          relative
          z-10

          mx-auto

          max-w-3xl

          text-center
        "
      >
        {/* BADGE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="

            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-purple-200

            bg-white/90

            px-5
            py-2.5

            text-sm

            text-purple-700

            shadow-lg

            backdrop-blur-xl

            dark:bg-slate-900

            dark:text-[#A78BFA]
          "
        >
          <Sparkles size={16} />
          Powerful AI Features
        </motion.div>

        {/* TITLE */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="

            mt-8

            text-3xl

            font-black

            leading-tight

            text-slate-900 dark:text-white

            dark:text-white

            sm:text-5xl

            lg:text-5xl
          "
        >
          Everything You Need
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
            To Get Hired Faster
          </span>
        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          className="

            mt-8

            text-lg

            leading-relaxed

            text-slate-600 dark:text-slate-400

            dark:text-gray-400
          "
        >
          AI-powered tools designed to optimize resumes, improve ATS scores,
          identify missing skills, and accelerate career growth.
        </motion.p>
      </div>

      {/* ================================================= */}
      {/* FEATURES GRID */}
      {/* ================================================= */}

      <div
        className="

          relative
          z-10

          mx-auto

          mt-24

          grid

          max-w-7xl

          grid-cols-1

          gap-8

          md:grid-cols-2

          xl:grid-cols-3
        "
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -12,
              }}
              onClick={() => navigate(feature.route)}
              className="

                  group
                  relative

                  cursor-pointer

                  overflow-hidden

                  rounded-3xl

                  border

                  border-slate-200 dark:border-slate-800

                  bg-white/90

                  p-8

                  shadow-sm

                  backdrop-blur-2xl

                  transition-all
                  duration-500

                  hover:border-#7C3AED/40

                  hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]

                  dark:border-white/10

                  dark:bg-slate-900
                "
            >
              {/* GLOW */}

              <div
                className="

                    absolute

                    inset-0

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100

                    bg-gradient-to-br

                    from-[#312E81]/10

                    via-[#7C3AED]/5

                    to-[#A78BFA]/10
                  "
              />

              {/* TOP ICON */}

              <div
                className="

                    relative

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
                <Icon
                  size={30}
                  className="
                      text-white
                    "
                />
              </div>

              {/* CONTENT */}

              <div className="relative">
                <h3
                  className="

                      mt-8

                      text-2xl

                      font-bold

                      text-slate-900 dark:text-white

                      dark:text-white
                    "
                >
                  {feature.title}
                </h3>

                <p
                  className="

                      mt-5

                      leading-relaxed

                      text-slate-600 dark:text-slate-400

                      dark:text-gray-400
                    "
                >
                  {feature.description}
                </p>

                {/* FOOTER */}

                <div
                  className="

                      mt-8

                      flex
                      items-center
                      gap-2

                      text-sm
                      font-medium

                      text-purple-700

                      dark:text-[#A78BFA]
                    "
                >
                  Explore Feature
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* HOVER BORDER */}

              <div
                className="

                    absolute

                    inset-0

                    rounded-3xl

                    border
                    border-transparent

                    transition-all
                    duration-500

                    group-hover:border-purple-200
                  "
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
