import { motion } from "framer-motion";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        overflow-hidden

        bg-slate-50
        dark:bg-[#070B14]

        px-6
        py-24
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-[400px]
            w-[400px]

            rounded-full

            bg-indigo-500/10

            blur-[120px]
          "
        />
      </div>

      {/* Card */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-4xl

          rounded-[32px]

          border
          border-slate-200

          bg-white/90

          p-10
          md:p-14

          text-center

          shadow-xl

          dark:bg-slate-900
          dark:border-slate-800
        "
      >
        {/* Icon */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            mx-auto

            flex
            items-center
            justify-center

            h-16
            w-16

            rounded-2xl

            bg-gradient-to-br
            from-indigo-600
            to-violet-500
          "
        >
          <BrainCircuit size={30} className="text-white" />
        </motion.div>

        {/* Heading */}

        <h2
          className="
            mt-8

            text-4xl
            md:text-5xl

            font-bold

            text-slate-900
            dark:text-white
          "
        >
          Ready To Build Your
          <span
            className="
              block
              mt-2

              bg-gradient-to-r
              from-indigo-600
              to-violet-500

              bg-clip-text
              text-transparent
            "
          >
            Next Opportunity?
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto

            mt-6

            max-w-2xl

            text-lg

            leading-relaxed

            text-slate-600
            dark:text-slate-400
          "
        >
          Create professional resumes, discover opportunities, and take the next
          step in your career journey.
        </p>

        {/* Button */}

        <div className="mt-10">
          <Button
            onClick={() => navigate("/signup")}
            icon={<ArrowRight size={18} />}
            className="
              min-w-[220px]
              h-14
            "
          >
            Get Started Free
          </Button>
        </div>

        {/* Footer */}

        <p
          className="
            mt-4

            text-sm

            text-slate-500
            dark:text-slate-400
          "
        >
          Create your account in less than 2 minutes
        </p>
      </div>
    </section>
  );
}
