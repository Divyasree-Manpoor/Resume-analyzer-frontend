import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2, BrainCircuit } from "lucide-react";

import Button from "../common/Button";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
        px-6
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

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-[1.1fr_0.9fr]
          gap-20
          items-center
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-indigo-100
              bg-white/90
              shadow-sm
              mb-8
            "
          >
            <Sparkles size={16} />

            <span className="text-sm font-medium">Career Growth Platform</span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.9,
            }}
            className="
              text-5xl
              md:text-6xl
              lg:text-5xl
              font-extrabold
              leading-[0.95]
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            Build Better Resumes
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                block
                mt-2
                bg-gradient-to-r
                from-indigo-600
                via-violet-500
                to-indigo-600
                bg-[length:200%_200%]
                bg-clip-text
                text-transparent
              "
            >
              Unlock Better Opportunities
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              mt-6
              max-w-xl
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            Create professional resumes, discover relevant opportunities,
            improve your profile, and stay prepared for every stage of your
            career journey.
          </motion.p>

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >
            <Button
              onClick={() => navigate("/signup")}
              icon={<ArrowRight size={18} />}
              className="min-w-[220px]"
            >
              Create Account
            </Button>
            <Button
              onClick={() => navigate("/upload")}
              icon={<ArrowRight size={18} />}
              className="min-w-[220px]"
            >
              Analyze My Resume
            </Button>
          </motion.div>

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
              delay: 0.55,
              duration: 0.8,
            }}
            className="
              mt-10
              flex
              flex-wrap
              gap-6
            "
          >
            {["Get started in less than 2 minutes"].map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.15 + 0.6,
                }}
                className="
                  flex
                  items-center
                  gap-1
                "
              >
                <CheckCircle2 size={18} className="text-green-500" />

                <span className="text-slate-600">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="hidden lg:flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
      relative

      w-[450px]

      rounded-[36px]

      border
      border-white/50
      dark:border-slate-800

      bg-white/90/80
      dark:bg-slate-900/80

      backdrop-blur-2xl

      p-8

      shadow-[0_30px_80px_rgba(99,102,241,0.18)]
    "
          >
            {/* Features */}

            <div className="space-y-6 pr-40">
              {[
                "Resume Review",
                "Job Matching",
                "Career Roadmap",
                "Interview Preparation",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 8,
                  }}
                  className="
            flex
            items-center
            gap-3

            text-xl
            font-medium

            text-slate-700
            dark:text-slate-300
          "
                >
                  <CheckCircle2 size={22} className="text-emerald-500" />

                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Floating Icon */}

            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 8, 0, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
        absolute

        right-8
        top-1/2

        -translate-y-1/2

        flex
        items-center
        justify-center

        h-28
        w-28

        rounded-[28px]

        bg-gradient-to-br
        from-indigo-600
        via-violet-500
        to-purple-400

        shadow-[0_30px_80px_rgba(99,102,241,0.35)]
      "
            >
              <BrainCircuit size={48} className="text-white" />
            </motion.div>

            {/* Premium Background Glow */}

            <div
              className="
    absolute
    inset-0
    -z-10

    rounded-[36px]

    bg-gradient-to-r
    from-indigo-500/5
    via-violet-500/10
    to-purple-500/5

    blur-3xl
  "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
