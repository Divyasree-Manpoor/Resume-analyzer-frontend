import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Target } from "lucide-react";

/* ================================================= */
/* MATCHED KEYWORDS */
/* ================================================= */

export default function MatchedKeywords({
  keywords = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "REST API",
    "Express.js",
  ],
}) {
  const matchScore = Math.min(keywords.length * 15, 100);

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
        duration: 0.5,
      }}
    >
      <div
        className="
          overflow-hidden

          rounded-3xl

          border
          border-slate-200

          bg-white/90

          p-6

          shadow-sm

          dark:border-slate-800
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
            <div
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-green-500
                to-emerald-500
              "
            >
              <CheckCircle2 size={24} className="text-white" />
            </div>

            <div>
              <h2
                className="
                  text-2xl
                  font-bold

                  text-slate-900
                  dark:text-white
                "
              >
                Matched Keywords
              </h2>

              <p
                className="
                  mt-1

                  text-sm

                  text-slate-600
                  dark:text-slate-400
                "
              >
                Skills and technologies successfully matched with the job
                description.
              </p>
            </div>
          </div>

          {/* SCORE */}

          <div
            className="
              inline-flex
              items-center

              gap-2

              rounded-full

              bg-green-50
              dark:bg-green-500/10

              px-4
              py-2

              text-sm

              text-green-600
              dark:text-green-300
            "
          >
            <Target size={16} />
            {matchScore}% Match
          </div>
        </div>

        {/* ================================================= */}
        {/* KEYWORDS */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            flex
            flex-wrap

            gap-3
          "
        >
          {keywords.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="
                flex
                items-center

                gap-2

                rounded-2xl

                border
                border-green-200

                bg-green-50

                px-4
                py-2

                text-green-700

                dark:border-green-500/20
                dark:bg-green-500/10
                dark:text-green-300
              "
            >
              <Sparkles size={14} />

              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            flex
            flex-col

            gap-3

            border-t
            border-slate-200

            pt-5

            text-sm

            text-slate-600

            dark:border-slate-800
            dark:text-slate-400

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            AI identified these keywords as strong ATS matches between the
            resume and job description.
          </p>

          <div
            className="
              flex
              items-center

              gap-2

              text-green-600
              dark:text-green-400
            "
          >
            <span>●</span>
            ATS Optimized
          </div>
        </div>
      </div>
    </motion.div>
  );
}
