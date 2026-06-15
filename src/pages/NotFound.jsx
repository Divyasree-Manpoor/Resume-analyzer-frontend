import { motion } from "framer-motion";

import { SearchX, ArrowLeft, Home } from "lucide-react";

import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

/* ================================================= */
/* NOT FOUND PAGE */
/* ================================================= */

export default function NotFound() {
  return (
    <MainLayout>
      <section
        className="

          relative

          flex

          min-h-screen

          items-center
          justify-center

          overflow-hidden

          px-6

          py-20
        "
      >
        {/* ================================================= */}
        {/* BACKGROUND GLOW */}
        {/* ================================================= */}

        <div
          className="

            absolute

            left-1/2
            top-1/2

            h-[500px]
            w-[500px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-purple-500/10

            blur-[140px]

            dark:bg-purple-500/10
          "
        />

        {/* ================================================= */}
        {/* GRID OVERLAY */}
        {/* ================================================= */}

        <div
          className="

            pointer-events-none

            absolute

            inset-0

            opacity-[0.03]

            dark:opacity-[0.05]

            [background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]

            dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

            [background-size:80px_80px]
          "
        />

        {/* ================================================= */}
        {/* CONTENT */}
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
            duration: 0.7,
          }}
          className="

            relative

            z-10

            mx-auto

            max-w-4xl

            text-center
          "
        >
          {/* ================================================= */}
          {/* ICON */}
          {/* ================================================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
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

                rounded-full

                bg-gradient-to-r

                from-[#312E81]

                via-[#7C3AED]

                to-[#A78BFA]

                shadow-[0_0_50px_rgba(168,85,247,0.4)]
              "
            >
              <SearchX
                size={48}
                className="
                  text-white
                "
              />
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* 404 */}
          {/* ================================================= */}

          <h1
            className="

              mt-10

              text-[120px]

              font-black

              leading-none

              md:text-[180px]
            "
          >
            <span
              className="

                bg-gradient-to-r

                from-[#312E81]

                via-[#7C3AED]

                to-[#A78BFA]

                bg-clip-text

                text-transparent
              "
            >
              404
            </span>
          </h1>

          {/* ================================================= */}
          {/* TITLE */}
          {/* ================================================= */}

          <h2
            className="

              mt-6

              text-4xl

              font-black

              text-slate-900 dark:text-white

              dark:text-white

              md:text-6xl
            "
          >
            Page Not Found
          </h2>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <p
            className="

              mx-auto

              mt-8

              max-w-2xl

              text-lg

              leading-relaxed

              text-slate-600 dark:text-slate-400

              dark:text-gray-400

              md:text-xl
            "
          >
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable. Let’s get you back to the AI Resume
            Analyzer platform.
          </p>

          {/* ================================================= */}
          {/* BUTTONS */}
          {/* ================================================= */}

          <div
            className="

              mt-12

              flex

              flex-col

              items-center
              justify-center

              gap-5

              sm:flex-row
            "
          >
            {/* HOME */}

            <Link to="/">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="

                  inline-flex

                  items-center

                  gap-3

                  rounded-2xl

                  bg-gradient-to-r

                  from-[#312E81]

                  via-[#7C3AED]

                  to-[#A78BFA]

                  px-8
                  py-5

                  text-lg

                  font-bold

                  text-white

                  shadow-2xl

                  transition-all
                  duration-300
                "
              >
                <Home size={22} />
                Go To Homepage
              </motion.button>
            </Link>

            {/* BACK */}

            <button
              onClick={() => window.history.back()}
              className="

                inline-flex

                items-center

                gap-3

                rounded-2xl

                border

                border-slate-200 dark:border-slate-800

                bg-white/90

                px-8
                py-5

                text-lg

                font-semibold

                text-slate-900 dark:text-white

                shadow-lg

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-purple-200

                hover:bg-purple-500/10

                dark:border-white/10

                dark:bg-slate-900

                dark:text-white
              "
            >
              <ArrowLeft size={22} />
              Go Back
            </button>
          </div>

          {/* ================================================= */}
          {/* INFO CARDS */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              grid

              grid-cols-1

              gap-6

              md:grid-cols-3
            "
          >
            {[
              {
                title: "ATS Resume Analysis",

                desc: "Optimize resumes for recruiter systems.",
              },

              {
                title: "AI Resume Rewrite",

                desc: "Generate stronger professional resume content.",
              },

              {
                title: "Career Roadmaps",

                desc: "Track growth and improve technical skills.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className="

                    rounded-3xl

                    border

                    border-slate-200 dark:border-slate-800

                    bg-white/90

                    p-8

                    shadow-sm

                    backdrop-blur-2xl

                    dark:border-white/10

                    dark:bg-slate-900
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
                  {item.title}
                </h3>

                <p
                  className="

                      mt-4

                      leading-relaxed

                      text-slate-600 dark:text-slate-400

                      dark:text-gray-400
                    "
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
}
