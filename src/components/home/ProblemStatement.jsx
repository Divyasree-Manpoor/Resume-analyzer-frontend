import { motion } from "framer-motion";
import { SearchX, ShieldAlert, AlertTriangle, Sparkles } from "lucide-react";

export default function ProblemStatement() {
  const problems = [
    {
      icon: SearchX,
      title: "Missed Opportunities",
      description:
        "Qualified candidates are often overlooked because their resumes fail to highlight relevant skills and achievements effectively.",
    },

    {
      icon: ShieldAlert,
      title: "Weak First Impression",
      description:
        "Poor formatting and inconsistent structure make it difficult for recruiters to quickly assess your value.",
    },

    {
      icon: AlertTriangle,
      title: "Lack of Impact",
      description:
        "Generic descriptions without measurable achievements reduce your chances of securing interview opportunities.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden

        px-6
        py-24
        lg:py-28

        bg-white/90
        dark:bg-[#020617]
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-white
          via-slate-50
          to-white

          dark:from-[#020617]
          dark:via-[#0F172A]
          dark:to-[#020617]
        "
      />

      {/* Animated Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-0

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-indigo-500

          blur-[140px]
        "
      />

      {/* Floating Sparkles */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-16
          top-20

          hidden
          lg:block

          opacity-10
        "
      >
        <Sparkles size={110} />
      </motion.div>

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl
        "
      >
        {/* Header */}

        <div className="text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-slate-200

              bg-white/90

              px-5
              py-2.5

              text-sm
              font-medium

              text-indigo-600

              shadow-sm

              dark:bg-slate-900
              dark:border-slate-800
              dark:text-indigo-400
            "
          >
            <Sparkles size={16} />
            Resume Success Starts Here
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mt-6

              text-3xl
              md:text-4xl
              lg:text-5xl

              font-bold

              leading-[1.05]
              tracking-tight

              text-slate-900

              dark:text-white
            "
          >
            Why Great Candidates
            <span
              className="
                block
                mt-2

                bg-gradient-to-r

                from-indigo-600
                via-violet-500
                to-purple-500

                bg-clip-text
                text-transparent
              "
            >
              Get Overlooked
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.8,
            }}
            className="
              mx-auto

              mt-6

              max-w-2xl

              text-base
              md:text-lg

              leading-relaxed

              text-slate-600

              dark:text-slate-400
            "
          >
            Many qualified professionals miss opportunities because of resume
            issues recruiters notice within seconds during the initial screening
            process.
          </motion.p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-20

            grid
            gap-8

            md:grid-cols-3
          "
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;

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
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-slate-200

                  bg-white/90

                  p-7

                  shadow-[0_10px_40px_rgba(15,23,42,0.06)]

                  transition-all
                  duration-500

                  hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]

                  dark:bg-slate-900/80
                  dark:border-slate-800
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0

                    opacity-0

                    bg-gradient-to-br
                    from-indigo-500/5
                    via-transparent
                    to-violet-500/5

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative

                    flex
                    items-center
                    justify-center

                    h-14
                    w-14

                    rounded-2xl

                    bg-gradient-to-br
                    from-indigo-600
                    to-violet-500

                    shadow-lg
                    shadow-indigo-500/20
                  "
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* Content */}

                <div className="relative">
                  <h3
                    className="
                      mt-6

                      text-xl
                      font-semibold

                      text-slate-900

                      dark:text-white
                    "
                  >
                    {problem.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      leading-relaxed

                      text-slate-600

                      dark:text-slate-400
                    "
                  >
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Notice */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mt-16
            text-center
          "
        >
          <div
            className="
              inline-flex

              items-center
              gap-3

              rounded-full

              border
              border-slate-200

              bg-white/90

              px-6
              py-3

              text-sm
              font-medium

              text-slate-700

              shadow-sm

              dark:bg-slate-900
              dark:border-slate-800
              dark:text-slate-300
            "
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Small resume improvements can significantly increase recruiter
            response rates.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
