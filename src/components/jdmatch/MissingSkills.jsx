import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

/* ================================================= */
/* MISSING SKILLS */
/* ================================================= */

export default function MissingSkills({
  skills = ["Docker", "AWS", "CI/CD", "TypeScript"],
}) {
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
                from-red-500
                to-rose-500
              "
            >
              <ShieldAlert size={24} className="text-white" />
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
                Missing Skills
              </h2>

              <p
                className="
                  mt-1

                  text-sm

                  text-slate-600
                  dark:text-slate-400
                "
              >
                Important skills not found in your resume.
              </p>
            </div>
          </div>

          {/* COUNT */}

          <div
            className="
              inline-flex
              items-center

              gap-2

              rounded-full

              bg-red-50
              dark:bg-red-500/10

              px-4
              py-2

              text-sm

              text-red-600
              dark:text-red-300
            "
          >
            <AlertTriangle size={16} />
            {skills.length} Skills Missing
          </div>
        </div>

        {/* ================================================= */}
        {/* SKILLS */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            flex
            flex-wrap

            gap-3
          "
        >
          {skills.map((item, index) => (
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
                border-red-200

                bg-red-50

                px-4
                py-2

                text-red-700

                dark:border-red-500/20
                dark:bg-red-500/10
                dark:text-red-300
              "
            >
              <Sparkles size={14} />

              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* ================================================= */}
        {/* RECOMMENDATION */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            rounded-2xl

            border
            border-slate-200

            bg-slate-50

            p-5

            dark:border-slate-800
            dark:bg-slate-800/50
          "
        >
          <div
            className="
              flex
              items-start
              gap-4
            "
          >
            <div
              className="
                flex

                h-10
                w-10

                items-center
                justify-center

                rounded-xl

                bg-purple-100

                dark:bg-purple-500/10
              "
            >
              <TrendingUp
                size={18}
                className="
                  text-purple-700
                  dark:text-purple-400
                "
              />
            </div>

            <div>
              <h3
                className="
                  text-lg
                  font-semibold

                  text-slate-900
                  dark:text-white
                "
              >
                AI Recommendation
              </h3>

              <p
                className="
                  mt-2

                  text-sm
                  leading-relaxed

                  text-slate-600
                  dark:text-slate-400
                "
              >
                Add these skills to your projects, certifications, internships,
                or experience sections where applicable to improve ATS
                compatibility and recruiter visibility.
              </p>
            </div>
          </div>
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
            AI detected these skills in the job description but not in your
            resume.
          </p>

          <div
            className="
              flex
              items-center

              gap-2

              text-red-600
              dark:text-red-400
            "
          >
            <span>●</span>
            Resume Needs Improvement
          </div>
        </div>
      </div>
    </motion.div>
  );
}
