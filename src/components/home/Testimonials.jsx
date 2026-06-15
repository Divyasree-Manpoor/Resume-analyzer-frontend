import { motion } from "framer-motion";

import { Star, Quote, Sparkles } from "lucide-react";

/* ================================================= */
/* TESTIMONIALS */
/* ================================================= */

export default function Testimonials() {
  /* ================================================= */
  /* TESTIMONIALS */
  /* ================================================= */

  const testimonials = [
    {
      name: "David Johnson",

      role: "Frontend Developer",

      feedback:
        "This platform improved my ATS score from 58% to 91%. I started getting recruiter responses within weeks.",

      score: "91%",
    },

    {
      name: "Sophia Williams",

      role: "Data Analyst",

      feedback:
        "The AI rewrite suggestions completely transformed my resume and made it far more recruiter-friendly.",

      score: "94%",
    },

    {
      name: "Michael Brown",

      role: "Full Stack Engineer",

      feedback:
        "The roadmap and skill gap analysis helped me prepare for interviews and improve my technical profile.",

      score: "89%",
    },
  ];

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <section
      className="

        relative
        overflow-hidden

        bg-slate-50 dark:bg-slate-800/50

        px-6
        py-32

        dark:bg-[#070B14]
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className="

          absolute

          right-[-200px]
          top-[-150px]

          h-[600px]
          w-[600px]

          rounded-full

          bg-purple-500/10

          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* GRID OVERLAY */}
      {/* ================================================= */}

      <div
        className="

          absolute
          inset-0

          bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]

          dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]

          bg-[size:70px_70px]

          opacity-20
        "
      />

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="

          relative
          z-10

          mx-auto

          max-w-3xl

          text-center
        "
      >
        {/* BADGE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          whileHover={{
            scale: 1.03,
          }}
          className="

            inline-flex
            items-center

            gap-2

            rounded-full

            border
            border-purple-200

            bg-white/90

            px-5
            py-2.5

            text-sm

            text-purple-700

            shadow-lg

            backdrop-blur-xl

            dark:bg-slate-900

            dark:text-[#A78BFA]
          "
        >
          <Sparkles size={16} />
          Success Stories
        </motion.div>

        {/* TITLE */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="

            mt-8

            text-3xl

            font-black

            leading-tight

            text-slate-900 dark:text-white

            dark:text-white

            sm:text-5xl

            lg:text-5xl
          "
        >
          Trusted By
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
            For Career Growth
          </span>
        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          className="

            mx-auto

            mt-8

            max-w-3xl

            text-lg

            leading-relaxed

            text-slate-600 dark:text-slate-400

            dark:text-gray-400
          "
        ></motion.p>
      </div>

      {/* ================================================= */}
      {/* TESTIMONIAL GRID */}
      {/* ================================================= */}

      <div
        className="

          relative
          z-10

          mx-auto

          mt-24

          grid

          max-w-7xl

          grid-cols-2

          gap-6

          md:grid-cols-1

          lg:grid-cols-3
        "
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -12,
            }}
            className="

                group
                relative

                overflow-hidden

                rounded-3xl

                border

                border-slate-200 dark:border-slate-800

                bg-white/90

                p-8

                shadow-sm

                backdrop-blur-2xl

                transition-all
                duration-500

                hover:border-purple-200

                hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]

                dark:border-white/10

                dark:bg-slate-900
              "
          >
            {/* GLOW */}

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

            {/* QUOTE ICON */}

            <div
              className="

                  relative

                  flex

                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br

                  from-[#312E81]

                  to-[#A78BFA]

                  shadow-lg

                  shadow-#7C3AED/20
                "
            >
              <Quote
                size={26}
                className="
                    text-white
                  "
              />
            </div>

            {/* STARS */}

            <div
              className="

                  relative

                  mt-6

                  flex
                  items-center

                  gap-1
                "
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="

                        fill-yellow-400

                        text-yellow-400
                      "
                />
              ))}
            </div>

            {/* FEEDBACK */}

            <p
              className="

                  relative

                  mt-6

                  leading-relaxed

                  text-slate-700

                  dark:text-slate-300
                "
            >
              "{item.feedback}"
            </p>

            {/* FOOTER */}

            <div
              className="

                  relative

                  mt-10

                  flex
                  items-center
                  justify-between
                "
            >
              <div>
                <h3
                  className="

                      text-xl

                      font-bold

                      text-slate-900 dark:text-white

                      dark:text-white
                    "
                >
                  {item.name}
                </h3>

                <p
                  className="

                      mt-1

                      text-slate-500 dark:text-slate-400
                    "
                >
                  {item.role}
                </p>
              </div>

              {/* SCORE */}

              <div
                className="

                    rounded-2xl

                    bg-green-500/10

                    px-4
                    py-3

                    text-center
                  "
              >
                <h4
                  className="

                      text-xl

                      font-black

                      text-green-600

                      dark:text-green-400
                    "
                >
                  {item.score}
                </h4>

                <p
                  className="

                      text-xs

                      text-slate-500 dark:text-slate-400
                    "
                >
                  ATS Score
                </p>
              </div>
            </div>

            {/* NUMBER */}

            <div
              className="

                  absolute

                  right-5
                  top-5

                  text-6xl

                  font-black

                  text-black/5

                  dark:text-white/5
                "
            >
              0{index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
