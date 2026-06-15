import { motion } from "framer-motion";

/* ================================================= */
/* GRADIENT BACKGROUND */
/* ================================================= */

export default function GradientBackground() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      {/* ================================================= */}
      {/* TOP RIGHT GLOW */}
      {/* ================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-220px]
          top-[-260px]

          h-[750px]
          w-[750px]

          rounded-full

          bg-[#7C3AED]/15

          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* BOTTOM LEFT GLOW */}
      {/* ================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-320px]
          left-[-240px]

          h-[720px]
          w-[720px]

          rounded-full

          bg-[#312E81]/20

          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* CENTER GLOW */}
      {/* ================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-1/2

          h-[500px]
          w-[500px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#7C3AED]/20

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

          bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)]

          bg-[size:70px_70px]

          opacity-20
        "
      />

      {/* ================================================= */}
      {/* DARK OVERLAY */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0

          bg-[#070B14]/80
        "
      />
    </div>
  );
}
