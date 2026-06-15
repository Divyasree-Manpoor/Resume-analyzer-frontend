import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";

/* ================================================= */
/* SECTION TITLE */
/* ================================================= */

export default function SectionTitle({
  badge,

  title,

  highlight,

  description,

  align = "center",
}) {
  /* ================================================= */
  /* ALIGNMENT */
  /* ================================================= */

  const alignment = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <div
      className={`

        relative

        max-w-4xl

        ${alignment}
      `}
    >
      {/* ================================================= */}
      {/* BADGE */}
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
          duration: 0.5,
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

          shadow-#7C3AED/10

          backdrop-blur-xl

          dark:bg-slate-900

          dark:text-[#A78BFA]
        "
      >
        <Sparkles size={16} />

        <span>{badge}</span>
      </motion.div>

      {/* ================================================= */}
      {/* TITLE */}
      {/* ================================================= */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
        className="

          relative

          mt-8

          text-3xl

          font-black

          leading-tight

          text-slate-900 dark:text-white

          dark:text-white

          sm:text-5xl

          lg:text-6xl
        "
      >
        {/* TITLE */}

        <span className="block">{title}</span>

        {/* ================================================= */}
        {/* HIGHLIGHT */}
        {/* ================================================= */}

        <span
          className="

            relative

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
          {highlight}

          {/* GLOW */}

          <span
            className="

              absolute

              inset-0

              opacity-20

             
            "
          >
            {highlight}
          </span>
        </span>
      </motion.h2>

      {/* ================================================= */}
      {/* DESCRIPTION */}
      {/* ================================================= */}

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
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}
        className={`

          mt-8

          max-w-3xl

          text-lg

          leading-relaxed

          text-slate-600 dark:text-slate-400

          dark:text-gray-400

          sm:text-xl

          ${align === "left" ? "" : "mx-auto"}
        `}
      >
        {description}
      </motion.p>

      {/* ================================================= */}
      {/* DECORATIVE LINE */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        viewport={{
          once: true,
        }}
        className={`

          mt-10

          h-[2px]
          w-40

          rounded-full

          bg-gradient-to-r

          from-transparent

          via-#7C3AED

          to-transparent

          ${align === "left" ? "" : "mx-auto"}
        `}
      />
    </div>
  );
}
