import { motion } from "framer-motion";

import {
  UploadCloud,
  FileText,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/* ================================================= */
/* DRAG DROP AREA */
/* ================================================= */

export default function DragDropArea({
  onDrop,

  onChange,

  dragActive = false,
}) {
  /* ================================================= */
  /* HANDLE DROP */
  /* ================================================= */

  const handleDrop = (e) => {
    e.preventDefault();

    if (onDrop) {
      onDrop(e);
    }
  };

  /* ================================================= */
  /* HANDLE DRAG OVER */
  /* ================================================= */

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
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

          rounded-[40px]

          bg-purple-500/10

        "
      />

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`

          group
          relative

          overflow-hidden

          rounded-[40px]

          border-2
          border-dashed

          p-10
          md:p-16

          text-center

          shadow-sm

          backdrop-blur-2xl

          transition-all
          duration-500

          ${
            dragActive
              ? `
                border-#A78BFA
                bg-purple-500/10
                scale-[1.01]
              `
              : `
                border-slate-200 dark:border-slate-800
                bg-white/90
                hover:border-#A78BFA/40

                dark:border-purple-200
                dark:bg-slate-900
              `
          }
        `}
      >
        {/* ================================================= */}
        {/* HOVER GLOW */}
        {/* ================================================= */}

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

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
          "
        >
          {/* ================================================= */}
          {/* ICON */}
          {/* ================================================= */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
              flex
              justify-center
            "
          >
            <div
              className="

                flex

                h-28
                w-28

                items-center
                justify-center

                rounded-[30px]

                bg-gradient-to-br

                from-[#312E81]

                via-[#7C3AED]

                to-[#A78BFA]

                shadow-[0_0_40px_rgba(168,85,247,0.35)]
              "
            >
              <UploadCloud
                size={50}
                className="
                  text-white
                "
              />
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* TITLE */}
          {/* ================================================= */}

          <h2
            className="

              mt-10

              text-4xl

              font-black

              leading-tight

              text-slate-900 dark:text-white

              dark:text-white

              md:text-5xl
            "
          >
            Drag & Drop Resume
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
              AI Resume Analysis
            </span>
          </h2>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <p
            className="

              mx-auto

              mt-8

              max-w-3xl

              text-lg

              leading-relaxed

              text-slate-600 dark:text-slate-400

              dark:text-gray-400
            "
          >
            Upload your resume in PDF or DOCX format to get ATS score analysis,
            AI resume rewriting, keyword matching, skill gap analysis, and
            personalized career roadmap generation.
          </p>

          {/* ================================================= */}
          {/* BUTTON */}
          {/* ================================================= */}

          <div className="mt-10">
            <label
              className="

                inline-flex

                cursor-pointer

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

                shadow-#7C3AED/20

                transition-all
                duration-300

                hover:scale-105
              "
            >
              <FileText size={20} />
              Choose Resume File
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={onChange}
                className="hidden"
              />
            </label>
          </div>

          {/* ================================================= */}
          {/* FEATURES */}
          {/* ================================================= */}

          <div
            className="

              mt-12

              grid

              grid-cols-1

              gap-5

              md:grid-cols-3
            "
          >
            {[
              {
                icon: ShieldCheck,

                title: "ATS Analysis",

                desc: "Smart ATS compatibility and keyword matching.",
              },

              {
                icon: Sparkles,

                title: "AI Resume Rewrite",

                desc: "Improve resume impact and recruiter visibility.",
              },

              {
                icon: CheckCircle2,

                title: "Career Roadmap",

                desc: "Personalized learning roadmap and skill tracking.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="

                      rounded-3xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-slate-50 dark:bg-slate-800/50

                      p-6

                      dark:border-white/10

                      dark:bg-[#111827]/70
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

                          h-14
                          w-14

                          items-center
                          justify-center

                          rounded-2xl

                          bg-purple-500/10
                        "
                    >
                      <Icon
                        size={26}
                        className="
                            text-purple-700

                            dark:text-[#A78BFA]
                          "
                      />
                    </div>
                  </div>

                  <h3
                    className="

                        mt-5

                        text-xl

                        font-bold

                        text-slate-900 dark:text-white

                        dark:text-white
                      "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="

                        mt-3

                        leading-relaxed

                        text-slate-600 dark:text-slate-400

                        dark:text-gray-400
                      "
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ================================================= */}
          {/* FOOTER */}
          {/* ================================================= */}

          <div
            className="

              mt-12

              flex
              flex-col

              items-center

              gap-4

              border-t

              border-slate-200 dark:border-slate-800

              pt-6

              text-sm

              text-slate-600 dark:text-slate-400

              dark:border-white/10

              dark:text-gray-400

              md:flex-row
              md:justify-between
            "
          >
            <p>Supported formats: PDF and DOCX • Max file size: 5MB</p>

            <div
              className="

                inline-flex
                items-center

                gap-2

                text-purple-700

                dark:text-[#A78BFA]
              "
            >
              <span
                className="
                  text-green-500

                  dark:text-green-400
                "
              >
                ●
              </span>
              AI Resume Analyzer Ready
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
