import { motion } from "framer-motion";

import {
  UploadCloud,
  CheckCircle2,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

/* ================================================= */
/* UPLOAD PROGRESS */
/* ================================================= */

export default function UploadProgress({ progress = 70 }) {
  /* ================================================= */
  /* STATUS */
  /* ================================================= */

  const getStatus = () => {
    if (progress >= 100) {
      return {
        label: "Upload Complete",

        icon: CheckCircle2,

        color: "from-green-500 to-emerald-500",

        text: "text-green-600 dark:text-green-400",
      };
    }

    if (progress >= 60) {
      return {
        label: "Uploading Resume",

        icon: LoaderCircle,

        color: "from-[#312E81] to-[#A78BFA]",

        text: "text-purple-700 dark:text-[#A78BFA]",
      };
    }

    return {
      label: "Preparing Upload",

      icon: UploadCloud,

      color: "from-yellow-500 to-orange-500",

      text: "text-yellow-600 dark:text-yellow-400",
    };
  };

  const status = getStatus();

  const StatusIcon = status.icon;

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
      className="
        relative
        mt-8
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className={`

          absolute

          inset-0

          rounded-[28px]

          bg-gradient-to-r

          ${status.color}

          opacity-10

          
        `}
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

          p-6

          shadow-sm

          backdrop-blur-2xl

          dark:border-white/10

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
              className={`

                flex

                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br

                ${status.color}

                shadow-lg
              `}
            >
              <StatusIcon
                size={28}
                className={`
                  text-white

                  ${progress < 100 ? "animate-spin" : ""}
                `}
              />
            </div>

            {/* TEXT */}

            <div>
              <h3
                className="

                  text-2xl

                  font-bold

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                Upload Progress
              </h3>

              <p
                className={`
                  mt-1

                  ${status.text}
                `}
              >
                {status.label}
              </p>
            </div>
          </div>

          {/* PERCENTAGE */}

          <div
            className="
              text-right
            "
          >
            <h2
              className="

                text-5xl

                font-black

                text-slate-900 dark:text-white

                dark:text-white
              "
            >
              {progress}%
            </h2>

            <p
              className="
                mt-1

                text-slate-500 dark:text-slate-400
              "
            >
              Resume Upload Status
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* PROGRESS BAR */}
        {/* ================================================= */}

        <div className="mt-8">
          <div
            className="

              mb-3

              flex
              items-center
              justify-between
            "
          >
            <p
              className="

                text-slate-600 dark:text-slate-400

                dark:text-gray-400
              "
            >
              Resume Uploading
            </p>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Sparkles
                size={16}
                className="
                  text-purple-700

                  dark:text-[#A78BFA]
                "
              />

              <span
                className="
                  text-purple-700

                  dark:text-[#A78BFA]
                "
              >
                AI Processing
              </span>
            </div>
          </div>

          {/* BAR */}

          <div
            className="

              h-5

              overflow-hidden

              rounded-full

              bg-gray-200

              dark:bg-slate-900
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.8,
              }}
              className={`

                relative

                h-full

                rounded-full

                bg-gradient-to-r

                ${status.color}
              `}
            >
              {/* SHINE EFFECT */}

              <div
                className="

                  absolute

                  inset-0

                  bg-white/90 dark:bg-slate-900

                  blur-sm
                "
              />
            </motion.div>
          </div>
        </div>

        {/* ================================================= */}
        {/* INFO CARDS */}
        {/* ================================================= */}

        <div
          className="

            mt-8

            grid

            grid-cols-1

            gap-5

            md:grid-cols-3
          "
        >
          {[
            {
              title: "ATS Analysis",

              value: progress >= 40 ? "Started" : "Pending",
            },

            {
              title: "AI Resume Scan",

              value: progress >= 70 ? "Running" : "Waiting",
            },

            {
              title: "Skill Detection",

              value: progress >= 100 ? "Completed" : "Processing",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="

                  rounded-2xl

                  border

                  border-slate-200 dark:border-slate-800

                  bg-slate-50 dark:bg-slate-800/50

                  p-5

                  text-center

                  dark:border-white/10

                  dark:bg-[#111827]/70
                "
            >
              <h3
                className="

                    text-2xl

                    font-black

                    text-slate-900 dark:text-white

                    dark:text-white
                  "
              >
                {item.value}
              </h3>

              <p
                className="

                    mt-2

                    text-sm

                    text-slate-500 dark:text-slate-400
                  "
              >
                {item.title}
              </p>
            </div>
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
            Your resume is securely processed for ATS analysis, AI rewriting,
            and career intelligence insights.
          </p>

          <div
            className={`

              inline-flex
              items-center

              gap-2

              ${status.text}
            `}
          >
            <span>●</span>
            Secure AI Upload Active
          </div>
        </div>
      </div>
    </motion.div>
  );
}
