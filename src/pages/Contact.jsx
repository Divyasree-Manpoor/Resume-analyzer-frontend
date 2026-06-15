import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Clock3,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

/* ================================================= */
/* CONTACT PAGE */
/* ================================================= */

export default function Contact() {
  /* ================================================= */
  /* CONTACT INFO */
  /* ================================================= */

  const contactCards = [
    {
      icon: Mail,

      title: "Email Support",

      value: "support@airesume.ai",

      desc: "Get technical support and product assistance.",
    },

    {
      icon: Phone,

      title: "Phone Contact",

      value: "+91 98765 43210",

      desc: "Speak with our support and partnership team.",
    },

    {
      icon: MapPin,

      title: "Office Location",

      value: "Bangalore, India",

      desc: "AI Resume Analyzer Headquarters.",
    },
  ];

  /* ================================================= */
  /* FEATURES */
  /* ================================================= */

  const features = [
    "24/7 AI Platform Support",

    "Technical Assistance",

    "Partnership & Business Inquiries",

    "Career Platform Guidance",

    "Recruiter & ATS Consultation",
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

                  bg-white/90

                  px-5
                  py-3

                  text-[#7C3AED]

                  shadow-lg

                  backdrop-blur-xl

                  dark:bg-slate-900

                  dark:text-[#A78BFA]
                "
              >
                <Sparkles size={18} />
                Contact AI Resume Analyzer
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
              Let's Build Your
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
                Career Future
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
              Reach out for technical support, career platform guidance,
              partnerships, recruiter solutions, and AI resume optimization
              assistance.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* CONTACT GRID */}
          {/* ================================================= */}

          <div
            className="

              mt-20

              grid

              grid-cols-1

              gap-8

              lg:grid-cols-3
            "
          >
            {contactCards.map((item, index) => {
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

                      rounded-[28px]

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

                        mt-3

                        text-lg

                        font-semibold

                        text-[#7C3AED]
                      "
                  >
                    {item.value}
                  </p>

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
          {/* CONTACT FORM */}
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

                gap-12

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
                  "
                >
                  <MessageSquare size={18} />
                  Contact Form
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
                  Send Us A Message
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
                  Have questions about ATS optimization, resume analysis, AI
                  career tools, or platform integration? Our team is here to
                  help you succeed.
                </p>

                {/* FEATURES */}

                <div
                  className="
                    mt-10
                    space-y-5
                  "
                >
                  {features.map((item, index) => (
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
                        <ShieldCheck
                          size={22}
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

              {/* RIGHT */}

              <motion.form
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
                  space-y-6
                "
              >
                {/* NAME */}

                <div>
                  <label
                    className="

                      mb-3

                      block

                      text-sm

                      font-semibold

                      text-slate-700

                      dark:text-slate-300
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="

                      w-full

                      rounded-2xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-[#F8FAFC]

                      p-5

                      text-slate-900 dark:text-white

                      placeholder-gray-500

                      outline-none

                      transition-all

                      focus:border-#7C3AED/40

                      dark:border-white/10

                      dark:bg-[#111827]/70

                      dark:text-white
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    className="

                      mb-3

                      block

                      text-sm

                      font-semibold

                      text-slate-700

                      dark:text-slate-300
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="

                      w-full

                      rounded-2xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-[#F8FAFC]

                      p-5

                      text-slate-900 dark:text-white

                      placeholder-gray-500

                      outline-none

                      transition-all

                      focus:border-#7C3AED/40

                      dark:border-white/10

                      dark:bg-[#111827]/70

                      dark:text-white
                    "
                  />
                </div>

                {/* SUBJECT */}

                <div>
                  <label
                    className="

                      mb-3

                      block

                      text-sm

                      font-semibold

                      text-slate-700

                      dark:text-slate-300
                    "
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="

                      w-full

                      rounded-2xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-[#F8FAFC]

                      p-5

                      text-slate-900 dark:text-white

                      placeholder-gray-500

                      outline-none

                      transition-all

                      focus:border-#7C3AED/40

                      dark:border-white/10

                      dark:bg-[#111827]/70

                      dark:text-white
                    "
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    className="

                      mb-3

                      block

                      text-sm

                      font-semibold

                      text-slate-700

                      dark:text-slate-300
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="
Write your message here...
"
                    className="

                      w-full

                      resize-none

                      rounded-2xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-[#F8FAFC]

                      p-5

                      text-slate-900 dark:text-white

                      placeholder-gray-500

                      outline-none

                      transition-all

                      focus:border-#7C3AED/40

                      dark:border-white/10

                      dark:bg-[#111827]/70

                      dark:text-white
                    "
                  />
                </div>

                {/* BUTTON */}

                <button
                  type="submit"
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

                    hover:scale-105
                  "
                >
                  <Send size={22} />
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>

          {/* ================================================= */}
          {/* RESPONSE TIME */}
          {/* ================================================= */}

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
            className="

              mt-12

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
                <Clock3
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

                text-3xl

                font-black

                text-slate-900 dark:text-white

                dark:text-white
              "
            >
              Fast Response Time
            </h2>

            <p
              className="

                mx-auto

                mt-4

                max-w-2xl

                text-lg

                leading-relaxed

                text-slate-600 dark:text-slate-400

                dark:text-gray-400
              "
            >
              Our support and AI platform team typically responds within 24
              hours for technical support, partnerships, and career platform
              assistance.
            </p>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
