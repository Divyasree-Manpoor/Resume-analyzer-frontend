import { motion } from "framer-motion";

import AppRoutes from "./routes/AppRoutes";

/* ================================================= */
/* APP */
/* ================================================= */

function App() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        relative
        min-h-screen
        overflow-x-hidden

        bg-[#F8FAFC]
        text-[#0F172A]

        transition-colors
        duration-300

        antialiased

        dark:bg-[#0F172A]
        dark:text-[#F8FAFC]
      "
    >
      {/* ================================================= */}
      {/* GLOBAL BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* TOP RIGHT */}

        <div
          className="
            absolute
            right-[-180px]
            top-[-180px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-indigo-500/8

            blur-[120px]

            dark:bg-indigo-500/12
          "
        />

        {/* BOTTOM LEFT */}

        <div
          className="
            absolute
            bottom-[-220px]
            left-[-220px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-blue-500/5

            blur-[140px]

            dark:bg-blue-500/10
          "
        />

        {/* CENTER */}

        <div
          className="
            absolute
            left-1/2
            top-1/3

            h-[350px]
            w-[350px]

            -translate-x-1/2

            rounded-full

            bg-indigo-100

            opacity-50

            blur-[140px]

            dark:bg-indigo-500/10
          "
        />
      </div>

      {/* ================================================= */}
      {/* GRID OVERLAY */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.015]

          dark:opacity-[0.03]

          [background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]

          dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

          [background-size:80px_80px]
        "
      />

      {/* ================================================= */}
      {/* ROUTES */}
      {/* ================================================= */}

      <div className="relative z-10">
        <AppRoutes />
      </div>
    </motion.div>
  );
}

export default App;
