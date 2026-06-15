import { motion } from "framer-motion";

/* ================================================= */
/* BUTTON */
/* ================================================= */

export default function Button({
  children,

  className = "",

  loading = false,

  disabled = false,

  variant = "primary",

  icon = null,

  ...props
}) {
  /* ================================================= */
  /* VARIANTS */
  /* ================================================= */

  const variants = {
    /* ================================================= */
    /* PRIMARY */
    /* ================================================= */

    primary: `

      bg-gradient-to-r

      from-[#312E81]

      via-[#7C3AED]

      to-[#A78BFA]

      text-white

      shadow-[#A78BFA]/20
    `,

    /* ================================================= */
    /* SECONDARY */
    /* ================================================= */

    secondary: `

      border

      border-slate-200 dark:border-slate-800

      bg-white/90

      text-[#312E81]

      dark:border-white/10

      dark:bg-slate-900

      dark:text-white
    `,

    /* ================================================= */
    /* DANGER */
    /* ================================================= */

    danger: `

      bg-gradient-to-r

      from-red-500

      to-orange-500

      text-white
    `,
  };

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      disabled={disabled || loading}
      className={`

        relative

        flex
        items-center
        justify-center

        gap-3

        overflow-hidden

        rounded-2xl

        px-8
        py-4

        font-semibold

        transition-all
        duration-300

        shadow-lg

        backdrop-blur-xl

        disabled:cursor-not-allowed

        disabled:opacity-60

        hover:shadow-sm

        ${variants[variant]}

        ${className}
      `}
      {...props}
    >
      {/* ================================================= */}
      {/* GLOW */}
      {/* ================================================= */}

      <div
        className="

          absolute

          inset-0

          bg-white/90

          opacity-10
        "
      />

      {/* ================================================= */}
      {/* LOADING */}
      {/* ================================================= */}

      {loading ? (
        <div
          className="

            h-5
            w-5

            animate-spin

            rounded-full

            border-2

            border-white/30

            border-t-white
          "
        />
      ) : (
        <>
          {/* ================================================= */}
          {/* ICON */}
          {/* ================================================= */}

          {icon && <span className="relative z-10">{icon}</span>}

          {/* ================================================= */}
          {/* TEXT */}
          {/* ================================================= */}

          <span className="relative z-10">{children}</span>
        </>
      )}
    </motion.button>
  );
}
