import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Trophy,
  Target,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

export default function Analysis() {
  const location = useLocation();

  const [analysis, setAnalysis] = useState({
    overallScore: 0,
    atsScore: 0,
    readabilityScore: 0,
    impactScore: 0,

    strengths: [],
    weaknesses: [],
    suggestions: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const analysisData = location.state?.analysis;

    if (analysisData) {
      setAnalysis(analysisData);
    }

    setLoading(false);
  }, [location]);

  if (loading) {
    return (
      <MainLayout>
        <div
          className="
            flex
            min-h-screen
            items-center
            justify-center
          "
        >
          <div className="text-center">
            <div
              className="
                h-12
                w-12
                mx-auto
                rounded-full
                border-4
                border-indigo-200
                border-t-indigo-600
                animate-spin
              "
            />

            <p
              className="
                mt-5
                text-lg
                font-semibold
                text-slate-700
                dark:text-slate-300
              "
            >
              Analyzing Resume...
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }

  const scores = [
    {
      title: "Overall Score",
      value: analysis.overallScore,
      icon: Trophy,
    },
    {
      title: "ATS Score",
      value: analysis.atsScore,
      icon: Target,
    },
    {
      title: "Readability",
      value: analysis.readabilityScore,
      icon: BookOpen,
    },
    {
      title: "Impact Score",
      value: analysis.impactScore,
      icon: TrendingUp,
    },
  ];

  return (
    <MainLayout>
      <section
        className="
          min-h-screen

          bg-gradient-to-b
          from-white
          via-slate-50
          to-slate-100

          dark:from-[#020617]
          dark:via-[#0F172A]
          dark:to-[#020617]

          pt-36
          pb-16
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
          "
        >
          {/* HEADER */}

          <div className="text-center">
            <div
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-indigo-200

                bg-indigo-50

                px-4
                py-2

                text-sm
                font-medium

                text-indigo-600

                dark:border-indigo-900
                dark:bg-indigo-500/10
                dark:text-indigo-400
              "
            >
              Resume Analysis
            </div>

           {/* TITLE */}

            <h1
              className="

                mt-10

                text-5xl

                font-black

                leading-tight

                text-slate-900 dark:text-white

                dark:text-white

                md:text-5xl
              "
            >

             
              <span
                className="

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
                   Resume Analysis Report            
 </span>

            </h1>


            <span
                className="

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
               Personalized  Career Roadmap
              </span>

            <p
              className="
                mx-auto

                mt-5

                max-w-3xl

                text-lg
                md:text-xl

                leading-relaxed

                text-slate-600
                dark:text-slate-400
              "
            >
              Detailed ATS compatibility, readability, impact analysis, and
              personalized recommendations to strengthen your resume.
            </p>
          </div>

          {/* SCORE CARDS */}

          <div
            className="
              mt-16

              grid

              gap-6

              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {scores.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-[30px]

                    border
                    border-slate-200
                    dark:border-slate-800

                    bg-white/90
                    dark:bg-slate-900

                    p-7

                    shadow-lg
                    shadow-slate-200/50

                    dark:shadow-black/20

                    transition-all
                    duration-300

                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  <div className="flex items-center justify-between">
                    <p
                      className="
                        text-sm
                        font-medium

                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {item.title}
                    </p>

                    <Icon
                      size={22}
                      className="
                        text-indigo-600
                        dark:text-indigo-400
                      "
                    />
                  </div>

                  <h2
                    className="
                      mt-4

                      text-5xl

                      font-black

                      text-indigo-600
                      dark:text-indigo-400
                    "
                  >
                    {item.value}%
                  </h2>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium

                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {item.value >= 80
                      ? "Excellent"
                      : item.value >= 60
                        ? "Good"
                        : "Needs Improvement"}
                  </p>

                  <div
                    className="
                      mt-5

                      h-2

                      rounded-full

                      bg-slate-200
                      dark:bg-slate-800
                    "
                  >
                    <div
                      className="
                        h-2

                        rounded-full

                        bg-indigo-600
                      "
                      style={{
                        width: `${item.value}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* STRENGTHS + WEAKNESSES */}

          <div
            className="
              mt-10

              grid

              gap-6

              lg:grid-cols-[1.1fr_0.9fr]
            "
          >
            {/* STRENGTHS */}

            <div
              className="
                rounded-[30px]

                border
                border-green-200
                dark:border-green-900

                bg-green-50/80
                dark:bg-slate-900

                p-8

                shadow-lg
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 size={28} className="text-green-500" />

                <h3
                  className="
                    text-2xl
                    font-bold

                    text-green-600
                    dark:text-green-400
                  "
                >
                  Strengths
                </h3>
              </div>

              <ul className="space-y-4">
                {analysis.strengths?.length ? (
                  analysis.strengths.map((item, index) => (
                    <li
                      key={index}
                      className="
                          text-slate-700
                          dark:text-slate-300
                        "
                    >
                      • {item}
                    </li>
                  ))
                ) : (
                  <li className="text-slate-500">
                    No key strengths identified yet.
                  </li>
                )}
              </ul>
            </div>

            {/* WEAKNESSES */}

            <div
              className="
                rounded-[30px]

                border
                border-red-200
                dark:border-red-900

                bg-red-50/80
                dark:bg-slate-900

                p-8

                shadow-lg
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle size={28} className="text-red-500" />

                <h3
                  className="
                    text-2xl
                    font-bold

                    text-red-500
                    dark:text-red-400
                  "
                >
                  Areas To Improve
                </h3>
              </div>

              <ul className="space-y-4">
                {analysis.weaknesses?.length ? (
                  analysis.weaknesses.map((item, index) => (
                    <li
                      key={index}
                      className="
                          text-slate-700
                          dark:text-slate-300
                        "
                    >
                      • {item}
                    </li>
                  ))
                ) : (
                  <li className="text-slate-500">
                    No improvement areas identified yet.
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* SUGGESTIONS */}

          <div
            className="
              mt-6

              rounded-[30px]

              border
              border-indigo-200
              dark:border-indigo-900

              bg-indigo-50/80
              dark:bg-slate-900

              p-8

              shadow-lg
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb
                size={28}
                className="
                  text-indigo-600
                  dark:text-indigo-400
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold

                  text-indigo-600
                  dark:text-indigo-400
                "
              >
                Recommendations
              </h3>
            </div>

            <ul className="space-y-4">
              {analysis.suggestions?.length ? (
                analysis.suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="
                        text-slate-700
                        dark:text-slate-300
                      "
                  >
                    • {item}
                  </li>
                ))
              ) : (
                <li className="text-slate-500">
                  No recommendations available yet.
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
