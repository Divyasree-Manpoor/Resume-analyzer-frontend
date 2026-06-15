import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

/* ================================================= */
/* CHAT INPUT */
/* ================================================= */

export default function ChatInput({
  value,
  onChange,
  onSend,
  loading = false,
}) {
  /* ================================================= */
  /* ENTER KEY */
  /* ================================================= */

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading && value.trim()) {
      e.preventDefault();
      onSend();
    }
  };

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <motion.div
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
      className="relative mt-6"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-[28px]
          bg-gradient-to-r
          from-indigo-500/10
          via-purple-500/10
          to-violet-500/10
          blur-xl
          dark:from-indigo-500/20
          dark:via-purple-500/20
          dark:to-violet-500/20
        "
      />

      {/* Main Container */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-slate-200
          bg-white/90/90
          p-4
          shadow-lg
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-slate-900/90
        "
      >
        {/* Top Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-60
            bg-gradient-to-r
            from-indigo-500/5
            via-purple-500/5
            to-violet-500/5
          "
        />

        {/* Input Row */}

        <div
          className="
            relative
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
          "
        >
          {/* Input */}

          <div className="relative flex-1">
            <Sparkles
              size={18}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-purple-700
                dark:text-purple-400
              "
            />

            <input
              type="text"
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask AI Career Assistant..."
              disabled={loading}
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-slate-50
                py-4
                pl-14
                pr-5
                text-slate-900
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-500
                focus:border-purple-500
                focus:bg-white/90
                focus:ring-4
                focus:ring-purple-500/10
                dark:border-slate-700
                dark:bg-slate-800/70
                dark:text-white
                dark:placeholder:text-slate-400
                dark:focus:border-purple-400
                dark:focus:bg-slate-800
              "
            />
          </div>

          {/* Send Button */}

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={onSend}
            disabled={loading || !value.trim()}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-indigo-700
              via-purple-600
              to-violet-500
              px-6
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:shadow-purple-500/30
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
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
              <Send size={18} />
            )}

            <span>{loading ? "Thinking..." : "Send"}</span>
          </motion.button>
        </div>

        {/* Footer */}

        <div
          className="
            relative
            mt-4
            flex
            flex-col
            gap-2
            border-t
            border-slate-200
            pt-4
            text-sm
            dark:border-slate-700
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-slate-600
              dark:text-slate-400
            "
          >
            AI-powered career assistant
          </p>

          <div
            className="
              inline-flex
              items-center
              gap-2
              text-purple-700
              dark:text-purple-400
            "
          >
            <span
              className="
                text-green-500
                dark:text-green-400
              "
            >
              ●
            </span>
            ATS Optimized Guidance
          </div>
        </div>
      </div>
    </motion.div>
  );
}
