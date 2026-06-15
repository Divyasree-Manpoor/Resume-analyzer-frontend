import { useState } from "react";

import { motion } from "framer-motion";

import {
  Sparkles,
  FileText,
  BrainCircuit,
  ShieldCheck,
  Wand2,
  TrendingUp,
  Copy,
  CheckCircle2,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import RewriteBox from "../components/rewrite/RewriteBox";

import OriginalContent from "../components/rewrite/OriginalContent";

import RewrittenContent from "../components/rewrite/RewrittenContent";

/* ================================================= */
/* REWRITE RESUME */
/* ================================================= */

export default function RewriteResume() {
  /* ================================================= */
  /* STATE */
  /* ================================================= */

  const [copied, setCopied] = useState(false);

  /* ================================================= */
  /* COPY */
  /* ================================================= */

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("AI Rewritten Resume Content");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  /* ================================================= */
  /* FEATURES */
  /* ================================================= */

  const features = [
    {
      icon: Sparkles,

      title: "AI Content Optimization",

      desc: "Rewrite resume content professionally using advanced AI models.",
    },

    {
      icon: TrendingUp,

      title: "ATS Keyword Enhancement",

      desc: "Improve recruiter visibility with ATS-focused keyword optimization.",
    },

    {
      icon: BrainCircuit,

      title: "Career Intelligence",

      desc: "Generate stronger impact statements and recruiter-ready resume language.",
    },
  ];

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <MainLayout>
      <section
        className="

          relative

          overflow-hidden

          px-6

          pt-28
          pb-24
        "
      >
        {/* ================================================= */}
        {/* BACKGROUND GLOW */}
        {/* ================================================= */}

        <div
          className="

            absolute

            left-1/2
            top-0

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-purple-500/10

            blur-[140px]

            dark:bg-purple-500/10
          "
        />

        {/* ================================================= */}
        {/* CONTAINER */}
        {/* ================================================= */}

        <div
          className="

            relative

            mx-auto

            max-w-7xl
          "
        >
          {/* ================================================= */}
          {/* HERO */}
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
              text-center
            "
          >
            {/* BADGE */}

            <div
              className="
                flex
                justify-center
              "
            >
              <div
                className="

                  inline-flex
                  items-center

                  gap-2

                  rounded-full

                  border

                  border-purple-200

                  bg-purple-500/10

                  px-5
                  py-3

                  text-[#7C3AED]

                  backdrop-blur-xl

                  dark:text-[#A78BFA]
                "
              >
                <Sparkles size={18} />
                AI Resume Intelligence
              </div>
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

                md:text-7xl
              "
            >
              AI Resume
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
                Rewrite Engine
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="

                mx-auto

                mt-8

                max-w-4xl

                text-lg

                leading-relaxed

                text-slate-600 dark:text-slate-400

                dark:text-gray-400

                md:text-xl
              "
            >
              Transform weak resume content into recruiter-focused,
              ATS-optimized, high-impact professional statements using
              AI-powered resume rewriting technology.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* FEATURES */}
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
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
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

                      text-center

                      shadow-sm

                      backdrop-blur-2xl

                      dark:border-white/10

                      dark:bg-slate-900
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

                          h-16
                          w-16

                          items-center
                          justify-center

                          rounded-2xl

                          bg-purple-500/10
                        "
                    >
                      <Icon
                        size={30}
                        className="
                            text-[#7C3AED]
                          "
                      />
                    </div>
                  </div>

                  <h2
                    className="

                        mt-6

                        text-2xl

                        font-black

                        text-slate-900 dark:text-white

                        dark:text-white
                      "
                  >
                    {item.title}
                  </h2>

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
              );
            })}
          </div>

          {/* ================================================= */}
          {/* REWRITE BOX */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-20
            "
          >
            <div
              className="

                overflow-hidden

                rounded-[40px]

                border

                border-slate-200 dark:border-slate-800

                bg-white/90

                p-8
                md:p-10

                shadow-2xl

                backdrop-blur-2xl

                dark:border-white/10

                dark:bg-slate-900
              "
            >
              {/* HEADER */}

              <div
                className="

                  flex
                  flex-col

                  gap-5

                  border-b

                  border-slate-200 dark:border-slate-800

                  pb-6

                  dark:border-white/10

                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <div>
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

                      text-[#7C3AED]

                      dark:text-[#A78BFA]
                    "
                  >
                    <Wand2 size={16} />
                    AI Rewrite Workspace
                  </div>

                  <h2
                    className="

                      mt-5

                      text-4xl

                      font-black

                      text-slate-900 dark:text-white

                      dark:text-white
                    "
                  >
                    Rewrite Your Resume
                  </h2>
                </div>

                {/* COPY BUTTON */}

                <button
                  onClick={handleCopy}
                  className="

                    inline-flex

                    items-center

                    gap-2

                    rounded-2xl

                    border

                    border-slate-200 dark:border-slate-800

                    bg-[#F8FAFC]

                    px-5
                    py-4

                    text-slate-900 dark:text-white

                    transition-all
                    duration-300

                    hover:border-purple-200

                    hover:bg-purple-500/10

                    dark:border-white/10

                    dark:bg-slate-900

                    dark:text-white
                  "
                >
                  {copied ? (
                    <>
                      <CheckCircle2
                        size={18}
                        className="
                          text-green-500
                        "
                      />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy Rewrite
                    </>
                  )}
                </button>
              </div>

              {/* INPUT */}

              <div className="mt-8">
                <RewriteBox />
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* COMPARISON GRID */}
          {/* ================================================= */}

          <div
            className="

              mt-12

              grid

              grid-cols-1

              gap-8

              xl:grid-cols-2
            "
          >
            {/* ORIGINAL */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
            >
              <div
                className="

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-red-500/20

                  bg-white/90

                  shadow-sm

                  backdrop-blur-2xl

                  dark:bg-slate-900
                "
              >
                {/* HEADER */}

                <div
                  className="

                    flex
                    items-center

                    gap-3

                    border-b

                    border-slate-200 dark:border-slate-800

                    px-8
                    py-6

                    dark:border-white/10
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

                      bg-red-500/10
                    "
                  >
                    <FileText
                      size={24}
                      className="
                        text-red-500
                      "
                    />
                  </div>

                  <div>
                    <h3
                      className="

                        text-2xl

                        font-black

                        text-slate-900 dark:text-white

                        dark:text-white
                      "
                    >
                      Original Resume
                    </h3>

                    <p
                      className="
                        mt-1

                        text-slate-600 dark:text-slate-400

                        dark:text-gray-400
                      "
                    >
                      Before AI Optimization
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <OriginalContent />
                </div>
              </div>
            </motion.div>

            {/* REWRITTEN */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
            >
              <div
                className="

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-green-500/20

                  bg-white/90

                  shadow-sm

                  backdrop-blur-2xl

                  dark:bg-slate-900
                "
              >
                {/* HEADER */}

                <div
                  className="

                    flex
                    items-center

                    gap-3

                    border-b

                    border-slate-200 dark:border-slate-800

                    px-8
                    py-6

                    dark:border-white/10
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

                      bg-green-500/10
                    "
                  >
                    <BrainCircuit
                      size={24}
                      className="
                        text-green-500
                      "
                    />
                  </div>

                  <div>
                    <h3
                      className="

                        text-2xl

                        font-black

                        text-slate-900 dark:text-white

                        dark:text-white
                      "
                    >
                      AI Rewritten Resume
                    </h3>

                    <p
                      className="
                        mt-1

                        text-slate-600 dark:text-slate-400

                        dark:text-gray-400
                      "
                    >
                      ATS Optimized Content
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <RewrittenContent />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* INSIGHTS */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              overflow-hidden

              rounded-[40px]

              border

              border-slate-200 dark:border-slate-800

              bg-white/90

              p-8
              md:p-12

              shadow-2xl

              backdrop-blur-2xl

              dark:border-white/10

              dark:bg-slate-900
            "
          >
            <div
              className="

                grid

                grid-cols-1

                gap-20

                lg:grid-cols-[1.1fr_0.9fr]
              "
            >
              {/* LEFT */}

              <div>
                <div
                  className="

                    inline-flex
                    items-center

                    gap-2

                    rounded-full

                    border
                    border-purple-200

                    bg-purple-500/10

                    px-5
                    py-3

                    text-[#7C3AED]

                    dark:text-[#A78BFA]
                  "
                >
                  <ShieldCheck size={18} />
                  Resume Intelligence
                </div>

                <h2
                  className="

                    mt-8

                    text-5xl

                    font-black

                    leading-tight

                    text-slate-900 dark:text-white

                    dark:text-white
                  "
                >
                  Create Recruiter-Ready Resume Content
                </h2>

                <p
                  className="

                    mt-8

                    text-lg

                    leading-relaxed

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  AI transforms weak resume lines into strong professional
                  achievements using ATS optimization, recruiter-focused
                  language, measurable impact statements, and modern hiring
                  standards.
                </p>
              </div>

              {/* RIGHT */}

              <div
                className="
                  space-y-5
                "
              >
                {[
                  "ATS Keyword Enhancement",

                  "Professional Resume Language",

                  "Recruiter Visibility Optimization",

                  "Impact-Based Achievement Statements",

                  "AI Career Content Intelligence",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="

                        flex
                        items-center

                        gap-4

                        rounded-3xl

                        border

                        border-slate-200 dark:border-slate-800

                        bg-[#F8FAFC]

                        p-5

                        dark:border-white/10

                        dark:bg-[#111827]/70
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

                          bg-green-500/10
                        "
                    >
                      <CheckCircle2
                        size={24}
                        className="
                            text-green-500
                          "
                      />
                    </div>

                    <h3
                      className="

                          text-lg

                          font-semibold

                          text-slate-900 dark:text-white

                          dark:text-white
                        "
                    >
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
