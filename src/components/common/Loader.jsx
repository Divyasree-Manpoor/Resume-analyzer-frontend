import { motion } from "framer-motion";

import { BrainCircuit } from "lucide-react";

/* ================================================= */
/* LOADER */
/* ================================================= */

export default function Loader({ text = "AI is analyzing..." }) {
  return (
    <div
      className="

        flex

        min-h-[300px]

        flex-col

        items-center
        justify-center

        px-6
        py-20
      "
    >
      {/* ================================================= */}
      {/* OUTER GLOW */}
      {/* ================================================= */}

      <div className="relative">
        {/* GLOW */}

        <div
          className="

            absolute

            inset-0

            rounded-full

            bg-purple-500/10

            opacity-80

          
          "
        />

        {/* ================================================= */}
        {/* ROTATING CIRCLE */}
        {/* ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,

            duration: 2,

            ease: "linear",
          }}
          className="

            relative

            flex

            h-24
            w-24

            items-center
            justify-center

            rounded-full

            border-4

            border-purple-200

            border-t-[#7C3AED]

            border-r-[#A78BFA]

            bg-white/90

            shadow-lg

            shadow-[#A78BFA]/10

            backdrop-blur-2xl

            dark:bg-slate-900
          "
        >
          {/* ================================================= */}
          {/* INNER ICON */}
          {/* ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,

              duration: 2,
            }}
          >
            <BrainCircuit
              size={34}
              className="
                text-[#7C3AED]

                dark:text-[#A78BFA]
              "
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ================================================= */}
      {/* TEXT */}
      {/* ================================================= */}

      <motion.h3
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="

          mt-8

          text-2xl

          font-bold

          text-[#312E81]

          dark:text-white
        "
      >
        {text}
      </motion.h3>

      {/* ================================================= */}
      {/* SUBTEXT */}
      {/* ================================================= */}

      <p
        className="

          mt-3

          max-w-md

          text-center

          leading-7

          text-slate-600

          dark:text-slate-400
        "
      >
        Please wait while our AI system processes resume insights, ATS
        optimization, and career analysis.
      </p>

      {/* ================================================= */}
      {/* ANIMATED DOTS */}
      {/* ================================================= */}

      <div
        className="

          mt-6

          flex
          items-center

          gap-3
        "
      >
        {[1, 2, 3].map((dot) => (
          <motion.div
            key={dot}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,

              duration: 0.8,

              delay: dot * 0.15,
            }}
            className="

                h-3
                w-3

                rounded-full

                bg-[#7C3AED]

                dark:bg-[#A78BFA]
              "
          />
        ))}
      </div>
    </div>
  );
}
