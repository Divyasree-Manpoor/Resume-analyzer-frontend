import { motion } from "framer-motion";

import { FileText, CheckCircle2, Trash2, FileBadge2 } from "lucide-react";

/* ================================================= */
/* FILE PREVIEW */
/* ================================================= */

export default function FilePreview({
  fileName = "resume.pdf",

  fileSize = "2.4 MB",

  onRemove,
}) {
  /* ================================================= */
  /* FILE TYPE */
  /* ================================================= */

  const fileType = fileName?.split(".")?.pop()?.toUpperCase();

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
        duration: 0.5,
      }}
      whileHover={{
        y: -4,
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

          bg-purple-500/10

          blur-2xl
        "
      />

      {/* ================================================= */}
      {/* MAIN CARD */}
      {/* ================================================= */}

      <div
        className="

          group
          relative

          overflow-hidden

          rounded-[28px]

          border

          border-slate-200 dark:border-slate-800

          bg-white/90

          p-6

          shadow-sm

          backdrop-blur-2xl

          transition-all
          duration-300

          hover:border-purple-200

          hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]

          dark:border-white/10

          dark:bg-slate-900
        "
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
            duration-300

            group-hover:opacity-100

            bg-gradient-to-r

            from-[#312E81]/5

            via-[#7C3AED]/5

            to-[#A78BFA]/5
          "
        />

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div
          className="

            relative

            flex
            flex-col

            gap-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              gap-5
            "
          >
            {/* FILE ICON */}

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

                shadow-lg

                shadow-#7C3AED/20
              "
            >
              <FileText
                size={32}
                className="
                  text-white
                "
              />
            </div>

            {/* FILE INFO */}

            <div>
              <h3
                className="

                  max-w-[220px]

                  truncate

                  text-2xl

                  font-bold

                  text-slate-900 dark:text-white

                  dark:text-white

                  sm:max-w-[320px]
                "
              >
                {fileName}
              </h3>

              <div
                className="

                  mt-3

                  flex
                  flex-wrap

                  items-center

                  gap-3
                "
              >
                {/* FILE TYPE */}

                <div
                  className="

                    inline-flex
                    items-center

                    gap-2

                    rounded-full

                    border
                    border-purple-200

                    bg-purple-500/10

                    px-4
                    py-2

                    text-sm

                    text-purple-700

                    dark:text-[#A78BFA]
                  "
                >
                  <FileBadge2 size={14} />

                  {fileType}
                </div>

                {/* FILE SIZE */}

                <div
                  className="

                    rounded-full

                    border

                    border-slate-200 dark:border-slate-800

                    bg-[#F8FAFC]

                    px-4
                    py-2

                    text-sm

                    text-slate-600 dark:text-slate-400

                    dark:border-white/10

                    dark:bg-slate-900

                    dark:text-gray-400
                  "
                >
                  {fileSize}
                </div>

                {/* STATUS */}

                <div
                  className="

                    inline-flex
                    items-center

                    gap-2

                    rounded-full

                    border
                    border-green-500/20

                    bg-green-500/10

                    px-4
                    py-2

                    text-sm

                    text-green-600

                    dark:text-green-300
                  "
                >
                  <CheckCircle2 size={14} />
                  Upload Ready
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* REMOVE BUTTON */}
          {/* ================================================= */}

          <button
            onClick={onRemove}
            className="

              inline-flex

              items-center

              justify-center

              gap-2

              rounded-2xl

              border
              border-red-500/20

              bg-red-500/10

              px-5
              py-4

              text-red-600

              transition-all
              duration-300

              hover:scale-105

              hover:border-red-400/40

              hover:bg-red-500/20

              dark:text-red-300
            "
          >
            <Trash2 size={18} />
            Remove
          </button>
        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div
          className="

            relative

            mt-6

            flex
            flex-col

            gap-4

            border-t

            border-slate-200 dark:border-slate-800

            pt-5

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
            Your resume is ready for ATS analysis, AI rewriting, skill gap
            analysis, and roadmap generation.
          </p>

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
            Secure Upload Active
          </div>
        </div>
      </div>
    </motion.div>
  );
}
