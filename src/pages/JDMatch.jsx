import { motion } from "framer-motion";

import MainLayout from "../layouts/MainLayout";

import JDInput from "../components/jdmatch/JDInput";
import MatchScore from "../components/jdmatch/MatchScore";
import MatchedKeywords from "../components/jdmatch/MatchedKeywords";
import MissingSkills from "../components/jdmatch/MissingSkills";

/* ================================================= */
/* JD MATCH PAGE */
/* ================================================= */

export default function JDMatch() {
  return (
    <MainLayout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          relative
          min-h-screen

          overflow-hidden

          bg-gradient-to-b
          from-white
          via-slate-50
          to-slate-100

          dark:from-[#020617]
          dark:via-[#0F172A]
          dark:to-[#020617]

          text-slate-900
          dark:text-white

          pt-32
          pb-20
        "
      >
        {/* ================================================= */}
        {/* BACKGROUND EFFECT */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-24
            -translate-x-1/2
            -z-10

            h-[500px]
            w-[500px]

            rounded-full

            bg-indigo-500/10
            dark:bg-indigo-500/15

            blur-[120px]
          "
        />

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
          "
        >
          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

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
              duration: 0.8,
            }}
            className="text-center"
          >
            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-indigo-200

                bg-white/90/80

                px-5
                py-2.5

                text-sm
                font-semibold

                text-indigo-600

                shadow-sm

                dark:border-indigo-900
                dark:bg-indigo-500/10
                dark:text-indigo-400
              "
            >
              ATS Resume Analyzer
            </div>

            {/* TITLE */}

            <h1
              className="

                mt-10

                text-5xl

                font-black

                leading-tight

                text-slate-900 dark:text-white

                dark:text-white

                md:text-5xl
              "
            >

             
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
                  Job Description Match             
 </span>

            </h1>

            <p
              className="
                mx-auto
                mt-6

                max-w-3xl

                text-lg
                leading-relaxed

                text-slate-600

                dark:text-slate-400
              "
            >
              Compare your resume against any job description, discover missing
              skills, identify ATS keyword gaps, and maximize recruiter
              visibility with AI-powered analysis.
            </p>

            <div
              className="
                mx-auto
                mt-8

                h-1.5
                w-32

                rounded-full

                bg-gradient-to-r
                from-indigo-500
                via-purple-500
                to-cyan-500
              "
            />
          </motion.div>

          {/* ================================================= */}
          {/* TOP GRID */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              mt-16

              grid
              gap-8

              lg:grid-cols-[1.1fr_0.9fr]
            "
          >
            <JDInput />

            <MatchScore />
          </motion.div>

          {/* ================================================= */}
          {/* BOTTOM GRID */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              mt-8

              grid
              gap-8

              lg:grid-cols-[1.1fr_0.9fr]
            "
          >
            <MatchedKeywords />

            <MissingSkills />
          </motion.div>
        </div>
      </motion.section>
    </MainLayout>
  );
}
