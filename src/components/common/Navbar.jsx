import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Menu, X, LogOut, Sparkles } from "lucide-react";

import { NavLink, Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import ThemeToggle from "./ThemeToggle";

import logo from "../../assets/logo.png";

/* ================================================= */
/* NAVBAR */
/* ================================================= */

export default function Navbar() {
  /* ================================================= */
  /* STATES */
  /* ================================================= */

  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  /* ================================================= */
  /* NAV ITEMS */
  /* ================================================= */

  const navItems = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Upload",
      path: "/upload",
    },

    {
      name: "Analysis",
      path: "/analysis",
    },

    {
      name: "JD Match",
      path: "/jd-match",
    },

    {
      name: "Roadmap",
      path: "/roadmap",
    },

    {
      name: "AI Assistant",
      path: "/chatbot",
    },
  ];

  /* ================================================= */
  /* LOGOUT */
  /* ================================================= */

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="

        fixed
        left-0
        top-0

        z-50

        w-full

        border-b

        border-slate-200 dark:border-slate-800

        bg-white/90/75

        backdrop-

        transition-all
        duration-300

        shadow-[0_8px_30px_rgba(0,0,0,0.06)]

        dark:border-white/10

        dark:bg-[#070B14]/75

        dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)]
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className="

          absolute

          inset-0

          bg-gradient-to-r

          from-[#312E81]/5

          via-transparent

          to-[#A78BFA]/5
        "
      />

      {/* ================================================= */}
      {/* CONTAINER */}
      {/* ================================================= */}

      <div
        className="

          relative
          z-10

          mx-auto

          flex
          max-w-9xl

          items-center
          justify-between

          px-5
          py-5

          sm:px-8
        "
      >
        {/* ================================================= */}
        {/* LOGO */}
        {/* ================================================= */}

        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="
      flex
      cursor-pointer
      items-center
      gap-4
    "
          >
            <img
              src={logo}
              alt="AI Resume Analyzer"
              className="
        h-14
        w-14
        object-contain
        rounded-xl
        drop-shadow-lg
      "
            />

            <div>
              <h1
                className="
          bg-gradient-to-r
          from-[#312E81]
          via-[#7C3AED]
          to-[#A78BFA]
          bg-clip-text
          text-2xl
          font-black
          text-transparent
        "
              >
                AI Resume Analyzer
              </h1>

              <p
                className="
          text-[11px]
          tracking-[0.2em]
          text-slate-500 dark:text-slate-400
          dark:text-gray-400
        "
              >
                AI CAREER INTELLIGENCE
              </p>
            </div>
          </motion.div>
        </Link>

        {/* ================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================= */}

        <div
          className="

            hidden

            items-center

            gap-10

            lg:flex
          "
        >
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => `

                  relative

                  text-sm
                  font-medium

                  transition-all
                  duration-300

                  hover:text-[#7C3AED]

                  dark:hover:text-[#A78BFA]

                  ${
                    isActive
                      ? "text-[#7C3AED]"
                      : "text-slate-700 dark:text-slate-300"
                  }
                `}
            >
              <motion.div
                whileHover={{
                  y: -2,
                }}
                className="
                    relative
                  "
              >
                {item.name}

                {/* ACTIVE LINE */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  className="

                      absolute

                      -bottom-2
                      left-0

                      h-[2px]
                      w-full

                      origin-left

                      bg-gradient-to-r

                      from-[#312E81]

                      to-[#A78BFA]
                    "
                />
              </motion.div>
            </NavLink>
          ))}
        </div>

        {/* ================================================= */}
        {/* RIGHT SECTION */}
        {/* ================================================= */}

        <div
          className="

            hidden

            items-center

            gap-4

            lg:flex
          "
        >
          {/* THEME TOGGLE */}

          <ThemeToggle />

          {!user ? (
            <>
              {/* LOGIN */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => navigate("/login")}
                className="

                  rounded-2xl

                  border

                  border-slate-200 dark:border-slate-800

                  bg-[#F8FAFC]

                  px-5
                  py-3

                  text-[#312E81]

                  transition-all
                  duration-300

                  hover:bg-purple-500/10

                  hover:shadow-lg

                  active:scale-[0.98]

                  dark:border-white/10

                  dark:bg-slate-900

                  dark:text-white

                  dark:hover:bg-white/90 dark:bg-slate-900
                "
              >
                Sign In
              </motion.button>

              {/* SIGNUP */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => navigate("/signup")}
                className="

                  rounded-2xl

                  bg-gradient-to-r

                  from-[#312E81]

                  via-[#7C3AED]

                  to-[#A78BFA]

                  px-6
                  py-3

                  font-semibold

                  text-white

                  shadow-lg

                  shadow-[#A78BFA]/20

                  transition-all
                  duration-300

                  hover:shadow-[#A78BFA]/40

                  active:scale-[0.98]
                "
              >
                Get Started
              </motion.button>
            </>
          ) : (
            <>
              {/* USER */}

              <div
                className="

                  flex
                  items-center

                  gap-3

                  rounded-2xl

                  border

                  border-slate-200 dark:border-slate-800

                  bg-[#F8FAFC]

                  px-5
                  py-3

                  text-[#312E81]

                  shadow-sm

                  dark:border-white/10

                  dark:bg-slate-900

                  dark:text-white
                "
              >
                <div
                  className="

                    flex

                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    bg-gradient-to-br

                    from-[#312E81]

                    to-[#A78BFA]

                    text-sm
                    font-bold

                    text-white
                  "
                >
                  {user?.full_name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <span
                  className="
                    text-sm
                  "
                >
                  {user?.full_name || "User"}
                </span>
              </div>

              {/* LOGOUT */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={handleLogout}
                className="

                  flex
                  items-center

                  gap-2

                  rounded-2xl

                  border
                  border-red-500/20

                  bg-red-500/10

                  px-5
                  py-3

                  text-red-500

                  transition-all
                  duration-300

                  hover:bg-red-500/20

                  dark:text-red-400

                  active:scale-[0.98]
                "
              >
                <LogOut size={18} />
                Logout
              </motion.button>
            </>
          )}
        </div>

        {/* MOBILE RIGHT */}

        <div
          className="
            flex
            items-center
            gap-3
            lg:hidden
          "
        >
          <ThemeToggle />

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="

              text-[#312E81]

              transition-all
              duration-300

              hover:text-[#7C3AED]

              dark:text-white
            "
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="

              overflow-hidden

              border-t

              border-black/5

              bg-white/90 dark:bg-slate-900


              dark:border-white/10

              dark:bg-[#070B14]/80

              lg:hidden
            "
          >
            <div
              className="

                flex
                flex-col

                gap-6

                px-6
                py-8
              "
            >
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) => `

                      rounded-2xl

                      px-4
                      py-3

                      text-lg

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `

                            bg-purple-500/10

                            text-[#7C3AED]
                          `
                          : `

                            text-slate-700

                            hover:bg-[#F8FAFC]

                            dark:text-slate-300

                            dark:hover:bg-white/90 dark:bg-slate-900
                          `
                      }
                    `}
                >
                  {item.name}
                </NavLink>
              ))}

              {!user ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/login");

                      setMobileMenu(false);
                    }}
                    className="

                      rounded-2xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-[#F8FAFC]

                      py-3

                      text-[#312E81]

                      transition-all
                      duration-300

                      hover:bg-purple-500/10

                      dark:border-white/10

                      dark:bg-slate-900

                      dark:text-white
                    "
                  >
                    Sign In
                  </button>

                  <button
                    onClick={() => {
                      navigate("/signup");

                      setMobileMenu(false);
                    }}
                    className="

                      rounded-2xl

                      bg-gradient-to-r

                      from-[#312E81]

                      to-[#A78BFA]

                      py-3

                      font-semibold

                      text-white
                    "
                  >
                    Get Started
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();

                    setMobileMenu(false);
                  }}
                  className="

                    rounded-2xl

                    border
                    border-red-500/20

                    bg-red-500/10

                    py-3

                    text-red-500

                    dark:text-red-400
                  "
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
