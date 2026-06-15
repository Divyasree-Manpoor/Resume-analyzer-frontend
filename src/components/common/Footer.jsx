import { motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-slate-200
        dark:border-white/10

        bg-gradient-to-b
        from-white
        to-slate-50

        dark:from-[#070B14]
        dark:to-[#0B1220]

        px-6
        py-12

        transition-all
        duration-300
      "
    >
      {/* Soft Background Glow */}

      <div
        className="
          absolute
          top-0
          right-0

          h-[300px]
          w-[300px]

          rounded-full

          bg-[#7C3AED]/10

          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          grid
          gap-10

          lg:grid-cols-[2fr_1fr]

          items-center
        "
      >
        {/* ===================================== */}
        {/* LEFT SECTION */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            {/* Logo */}

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

                shadow-xl
                shadow-[#7C3AED]/20
              "
            >
              <BrainCircuit
                size={30}
                className="text-white"
              />
            </div>

            {/* Brand */}

            <div>
              <h2
                className="
                  text-2xl
                  md:text-3xl

                  font-black

                  text-[#312E81]
                  dark:text-white
                "
              >
                AI Resume Analyzer
              </h2>

              <p
                className="
                  mt-1

                  flex
                  items-center
                  gap-2

                  text-sm

                  text-[#7C3AED]
                  dark:text-[#A78BFA]
                "
              >
                <Sparkles size={14} />
                AI Career Intelligence Platform
              </p>
            </div>
          </div>

          {/* Description */}

          <p
            className="
              mt-6

              max-w-2xl

              text-base
              md:text-lg

              leading-8

              text-slate-600
              dark:text-slate-400
            "
          >
            Optimize resumes, improve ATS scores, identify missing
            skills, and accelerate career growth using AI-powered
            insights and smart career intelligence tools.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* RIGHT SECTION */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            flex
            flex-col

            items-center
            text-center

            lg:items-end
            lg:text-right
          "
        >
          <div
            className="
              w-full

              border-t
              border-slate-200
              dark:border-white/10

              pt-6
            "
          >
            <p
              className="
                text-sm

                text-slate-500
                dark:text-slate-400
              "
            >
              © 2026 AI Resume Analyzer.
              <br />
              All rights reserved.
            </p>

            <p
              className="
                mt-4

                text-xs

                uppercase

                tracking-[0.3em]

                text-[#7C3AED]
                dark:text-[#A78BFA]
              "
            >
              Built With AI Innovation
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}