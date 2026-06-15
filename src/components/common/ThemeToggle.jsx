import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

/* ================================================= */
/* THEME TOGGLE */
/* ================================================= */

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="

        group

        relative

        flex
        h-11
        w-11

        items-center
        justify-center

        overflow-hidden

        rounded-xl

        border

        border-slate-200 dark:border-slate-800

        bg-white/90 dark:bg-slate-900

        text-black

        shadow-md

        backdrop-blur-md

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-sm

        dark:border-white/10

        dark:bg-[#111827]/80

        dark:text-white
      "
    >
      <span
        className="
          transition-transform
          duration-300
          group-hover:rotate-12
        "
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </span>
    </button>
  );
}

/* ================================================= */
/* EXPORT */
/* ================================================= */

export default ThemeToggle;
