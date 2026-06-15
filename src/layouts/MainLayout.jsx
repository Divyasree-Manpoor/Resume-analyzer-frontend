import { motion } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import GradientBackground from "../components/common/GradientBackground";

/* ================================================= */
/* MAIN LAYOUT */
/* ================================================= */

export default function MainLayout({ children }) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden

        bg-purple-500/10

        text-[#312E81]

        transition-all
        duration-300

        dark:bg-[#070B14]
        dark:text-white
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ================================================= */}

      <GradientBackground />

      {/* ================================================= */}
      {/* GRID OVERLAY */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.025]

          [background-image:linear-gradient(to_right,#7C3AED_1px,transparent_1px),linear-gradient(to_bottom,#7C3AED_1px,transparent_1px)]

          [background-size:80px_80px]

          dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />

      {/* ================================================= */}
      {/* TOP GLOW */}
      {/* ================================================= */}

      <div
        className="
          absolute

          left-1/2
          top-[-120px]

          h-[550px]
          w-[550px]

          -translate-x-1/2

          rounded-full

          bg-[#7C3AED]/12

          blur-[120px]
        "
      />

      {/* ================================================= */}
      {/* LEFT GLOW */}
      {/* ================================================= */}

      <div
        className="
          absolute

          left-[-150px]
          top-[25%]

          h-[350px]
          w-[350px]

          rounded-full

          bg-[#DDD6FE]/40

          blur-[120px]
        "
      />

      {/* ================================================= */}
      {/* RIGHT GLOW */}
      {/* ================================================= */}

      <div
        className="
          absolute

          right-[-150px]
          bottom-[15%]

          h-[350px]
          w-[350px]

          rounded-full

          bg-[#A78BFA]/15

          blur-[120px]
        "
      />

      {/* ================================================= */}
      {/* PAGE CONTAINER */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10

          flex
          min-h-screen
          flex-col
        "
      >
        {/* ================================================= */}
        {/* NAVBAR */}
        {/* ================================================= */}

        <Navbar />

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <motion.main
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
            flex-1
            w-full
          "
        >
          {/* ================================================= */}
          {/* CONTENT WRAPPER */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-10
            "
          >
            {children}
          </div>
        </motion.main>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <Footer />
      </div>
    </div>
  );
}
