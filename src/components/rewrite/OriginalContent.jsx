import { motion } from "framer-motion";

import { FileText, AlertTriangle, SearchX } from "lucide-react";

/* ================================================= */
/* ORIGINAL CONTENT */
/* ================================================= */

export default function OriginalContent({
  content = `
Worked on React projects and
developed frontend applications.
  `,
}) {
  /* ================================================= */
  /* UI */
  /* ================================================= */

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
        duration: 0.7,
      }}
      className="
        relative
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className="

          absolute

          inset-0

          rounded-[28px]

          bg-red-500/10

        
        "
      />

      {/* ================================================= */}
      {/* MAIN CARD */}
      {/* ================================================= */}

      <div
        className="

          relative

          overflow-hidden

          rounded-[28px]

          border

          border-slate-200 dark:border-slate-800

          bg-white/90

          p-8

          shadow-sm

          backdrop-blur-2xl

          dark:border-white/10

          dark:bg-[#111827]/80
        "
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="

            flex
            flex-col

            gap-5

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
            {/* ICON */}

            <div
              className="

                flex

                h-16
                w-16

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br

                from-red-500

                via-[#7C3AED]

                to-[#A78BFA]

                shadow-lg

                shadow-red-500/20
              "
            >
              <FileText
                size={30}
                className="
                  text-white
                "
              />
            </div>

            {/* TEXT */}

            <div>
              <h2
                className="

                  text-3xl

                  font-black

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                Original Resume
              </h2>

              <p
                className="

                  mt-1

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                Current resume content before AI optimization.
              </p>
            </div>
          </div>

          {/* STATUS */}

          <div
            className="

              inline-flex
              items-center

              gap-2

              rounded-full

              border
              border-red-500/20

              bg-red-500/10

              px-5
              py-3

              text-red-600

              dark:text-red-300
            "
          >
            <SearchX size={18} />
            Needs Optimization
          </div>
        </div>

        {/* ================================================= */}
        {/* CONTENT BOX */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            rounded-3xl

            border

            border-slate-200 dark:border-slate-800

            bg-slate-50 dark:bg-slate-800/50

            p-6

            dark:border-white/10

            dark:bg-black/20
          "
        >
          <p
            className="

              whitespace-pre-line

              text-lg

              leading-relaxed

              text-slate-700

              dark:text-slate-300
            "
          >
            {content}
          </p>
        </div>

        {/* ================================================= */}
        {/* ISSUES */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            grid

            grid-cols-1

            gap-5

            md:grid-cols-3
          "
        >
          {[
            "Weak Action Verbs",

            "Low ATS Optimization",

            "Missing Quantifiable Impact",
          ].map((item, index) => (
            <div
              key={index}
              className="

                  rounded-2xl

                  border
                  border-red-500/10

                  bg-red-500/5

                  p-5
                "
            >
              <div
                className="
                    flex
                    items-center
                    gap-3
                  "
              >
                <AlertTriangle
                  size={18}
                  className="
                      text-red-500

                      dark:text-red-400
                    "
                />

                <p
                  className="

                      text-sm

                      font-medium

                      text-red-600

                      dark:text-red-300
                    "
                >
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            flex
            flex-col

            gap-4

            border-t

            border-slate-200 dark:border-slate-800

            pt-6

            text-sm

            text-slate-600 dark:text-slate-400

            dark:border-white/10

            dark:text-gray-400

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            AI Resume Rewrite will improve recruiter readability, ATS keyword
            usage, and resume impact.
          </p>

          <div
            className="

              inline-flex
              items-center

              gap-2

              text-red-600

              dark:text-red-300
            "
          >
            <span
              className="
                text-red-500

                dark:text-red-400
              "
            >
              ●
            </span>
            Resume Requires Improvements
          </div>
        </div>
      </div>
    </motion.div>
  );
}
