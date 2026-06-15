import { motion } from "framer-motion";

import {
  Upload,
  ScanSearch,
  Sparkles,
  Rocket,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

/* ================================================= */
/* HOW IT WORKS */
/* ================================================= */

export default function HowItWorks() {
  /* ================================================= */
  /* NAVIGATION */
  /* ================================================= */

  const navigate = useNavigate();

  /* ================================================= */
  /* STEPS */
  /* ================================================= */

  const steps = [
    {
      icon: Upload,

      title: "Upload Resume",

      description:
        "Upload your PDF or DOCX resume securely into the AI platform for instant processing.",

      color: "from-[#312E81] to-[#A78BFA]",
    },

    {
      icon: ScanSearch,

      title: "AI Resume Analysis",

      description:
        "AI scans ATS compatibility, recruiter readability, keywords, formatting, and resume performance.",

      color: "from-#A78BFA to-rose-500",
    },

    {
      icon: Sparkles,

      title: "Smart Optimization",

      description:
        "Receive AI-powered resume rewrites, suggestions, keyword improvements, and skill recommendations.",

      color: "from-violet-500 to-#7C3AED",
    },

    {
      icon: Rocket,

      title: "Get Interview Ready",

      description:
        "Improve resume quality and confidently apply for better job opportunities faster than ever.",

      color: "from-#DDD6FEto-#A78BFA",
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

        dark:bg-[#0B1120]
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

          h-[700px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-purple-500/10

          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* GRID */}
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
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="

          relative
          z-10

          mx-auto

          max-w-1xl

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
            duration: 0.7,
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
          <BrainCircuit size={16} />
          Simple AI Workflow
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
          How It Works
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
            In Just Few Minutes
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

            mt-5

            text-lg

            leading-relaxed

            text-slate-600 dark:text-slate-400

            dark:text-gray-400
          "
        >
          From uploading resumes to receiving AI-powered ATS insights and career
          guidance, everything is designed to be intelligent, fast, and
          recruiter-focused.
        </motion.p>
      </div>

      {/* ================================================= */}
      {/* STEPS */}
      {/* ================================================= */}

      <div
        className="

          relative
          z-10

          mx-auto

          mt-13

          grid

          max-w-9xl

          grid-cols-1

          gap-8

          md:grid-cols-2

          xl:grid-cols-4
        "
      >
        {steps.map((step, index) => {
          const Icon = step.icon;

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
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -12,
              }}
              className="

                  group
                  relative

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
              {/* STEP NUMBER */}

              <div
                className="

                    absolute

                    right-5
                    top-5

                    text-6xl

                    font-black

                    text-black/5

                    dark:text-white/5
                  "
              >
                0{index + 1}
              </div>

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

              {/* ICON */}

              <div
                className={`

                    relative

                    flex

                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br

                    ${step.color}

                    shadow-lg

                    shadow-#7C3AED/20
                  `}
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
                  {step.title}
                </h3>

                <p
                  className="

                      mt-5

                      leading-relaxed

                      text-slate-600 dark:text-slate-400

                      dark:text-gray-400
                    "
                >
                  {step.description}
                </p>
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

      {/* ================================================= */}
      {/* CTA BUTTON */}
      {/* ================================================= */}

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
          duration: 1,
          delay: 0.4,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          z-10
          mt-20
          text-center
        "
      >
        <button
          onClick={() => navigate("/upload")}
          className="

            inline-flex
            items-center

            gap-3

            rounded-2xl

            bg-gradient-to-r

            from-[#312E81]

            via-[#7C3AED]

            to-[#A78BFA]

            px-8
            py-4

            font-semibold

            text-white

            shadow-lg

            shadow-[#A78BFA]/20

            transition-all
            duration-300

            hover:scale-105
          "
        >
          Start Free Resume Analysis
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </section>
  );
}
