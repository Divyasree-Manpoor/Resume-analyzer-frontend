import { motion } from "framer-motion";
import { FileSearch, Sparkles } from "lucide-react";

export default function JDInput({ value = "", onChange }) {
  const wordCount = value?.trim()?.split(/\s+/)?.filter(Boolean)?.length || 0;

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

          shadow-sm

          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            gap-4

            border-b
            border-slate-200

            px-6
            py-5

            dark:border-slate-800

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
                from-[#7C3AED]
                to-[#A78BFA]
              "
            >
              <FileSearch size={24} className="text-white" />
            </div>

            <div>
              <h3
                className="
                  text-xl
                  font-bold

                  text-slate-900
                  dark:text-white
                "
              >
                Job Description
              </h3>

              <p
                className="
                  mt-1
                  text-sm

                  text-slate-600
                  dark:text-slate-400
                "
              >
                Paste the target job description for ATS analysis.
              </p>
            </div>
          </div>

          <div
            className="
              inline-flex
              items-center

              gap-2

              rounded-full

              bg-purple-50
              dark:bg-purple-500/10

              px-4
              py-2

              text-sm

              text-purple-700
              dark:text-purple-300
            "
          >
            <Sparkles size={14} />
            {wordCount} Words
          </div>
        </div>

        {/* TEXTAREA */}

        <textarea
          value={value}
          onChange={onChange}
          placeholder="Paste the complete job description here..."
          className="
            min-h-[280px]
            w-full

            resize-none

            bg-transparent

            px-6
            py-6

            text-slate-900
            dark:text-white

            outline-none

            placeholder:text-slate-400
          "
        />

        {/* FOOTER */}

        <div
          className="
            flex
            flex-col

            gap-3

            border-t
            border-slate-200

            px-6
            py-4

            text-sm

            text-slate-600

            dark:border-slate-800
            dark:text-slate-400

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>AI will analyze ATS keywords and skill gaps.</p>

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
            AI Analysis Ready
          </div>
        </div>
      </div>
    </motion.div>
  );
}
