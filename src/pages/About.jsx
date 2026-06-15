import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <section
        className="
          relative
          mx-auto
          max-w-5xl
          px-6
          py-24
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            inset-0
            -z-10
            rounded-[40px]
            bg-purple-500/10
            opacity-80
           
          "
        />

        {/* Heading */}

        <h1
          className="
            text-5xl
            font-black
            tracking-tight

            text-[#312E81]

            dark:text-white

            sm:text-6xl
          "
        >
          About Platform
        </h1>

        {/* Decorative Line */}

        <div
          className="
            mt-6
            h-1
            w-24
            rounded-full

            bg-gradient-to-r
            from-[#7C3AED]
            via-[#A78BFA]
            to-[#DDD6FE]
          "
        />

        {/* Description */}

        <p
          className="
            mt-8
            max-w-3xl

            text-lg
            leading-relaxed

            text-slate-600

            dark:text-slate-400
          "
        >
          AI Resume Analyzer helps job seekers optimize resumes, improve ATS
          scores, identify missing skills, and accelerate career growth using
          intelligent AI-powered tools.
        </p>

        {/* Feature Card */}

        <div
          className="
            mt-12

            rounded-3xl

            border
            border-slate-200 dark:border-slate-800

            bg-white/90 dark:bg-slate-900

            p-8

            backdrop-blur-sm

            shadow-sm
            shadow-[#A78BFA]/10

            dark:border-white/10
            dark:bg-slate-900
          "
        >
          <h2
            className="
              text-2xl
              font-bold

              text-[#312E81]

              dark:text-white
            "
          >
            Why Choose Us?
          </h2>

          <p
            className="
              mt-4

              leading-relaxed

              text-slate-600

              dark:text-slate-400
            "
          >
            Our AI-powered platform analyzes resumes, identifies improvement
            opportunities, enhances ATS compatibility, and provides actionable
            insights to help candidates stand out in today's competitive job
            market.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
