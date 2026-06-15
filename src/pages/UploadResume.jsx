import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { getAnalysisHistoryService } from "../services/analysisService";

import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Briefcase,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  LoaderCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import { useAuth } from "../context/AuthContext";

import { uploadResumeService } from "../services/uploadService";

/* ================================================= */
/* UPLOAD RESUME */
/* ================================================= */

export default function UploadResume() {
  /* ================================================= */
  /* NAVIGATION */
  /* ================================================= */

  const navigate = useNavigate();

  const { token } = useAuth();

  /* ================================================= */
  /* STATES */
  /* ================================================= */

  const [file, setFile] = useState(null);

  const [response, setResponse] = useState(null);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [jobDescription, setJobDescription] = useState("");

  const [targetRole, setTargetRole] = useState("");

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const result = await getAnalysisHistoryService();

        console.log("History:", result);

        setHistory(result.data || []);
      } catch (error) {
        console.log("History Error:", error);
      }
    };

    if (token) {
      loadHistory();
    }
  }, [token]);

  /* ================================================= */
  /* HANDLE FILE */
  /* ================================================= */

  const handleFileChange = (e) => {
    setError("");

    setResponse(null);

    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    setFile(selectedFile);
  };

  /* ================================================= */
  /* HANDLE UPLOAD */
  /* ================================================= */
  const handleUpload = async () => {
    if (!token) {
      navigate("/login", {
        state: {
          from: "/upload",
        },
      });

      return;
    }

    try {
      /* VALIDATION */

      if (!file) {
        return setError("Please select a resume file.");
      }

      if (!jobDescription) {
        return setError("Please add job description.");
      }

      /* LOADING */

      setLoading(true);

      setError("");

      /* FORM DATA */

      const formData = new FormData();

      formData.append("resume", file);

      formData.append("jobDescription", jobDescription);

      formData.append("targetRole", targetRole);

      /* API */

      const result = await uploadResumeService(formData);

      setResponse(result);

      /* REDIRECT */

      setTimeout(() => {
        navigate("/analysis", {
          state: {
            analysis: result.data,
          },
        });
      }, 2000);
    } catch (error) {
      setError(error.message || "Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <MainLayout>
      <section
        className="
    relative
    min-h-screen
    overflow-hidden

    bg-gradient-to-b
    from-slate-50
    via-white
    to-slate-100

    dark:from-[#020617]
    dark:via-[#0F172A]
    dark:to-[#111827]

    px-6
    py-28
  "
      >
        {/* ================================================= */}
        {/* BACKGROUND GLOW */}
        {/* ================================================= */}

        <div
          className="
    absolute
    left-1/2
    top-0
    h-[500px]
    w-[500px]
    -translate-x-1/2
    rounded-full

    bg-purple-500/10
    dark:bg-purple-500/20

    blur-[140px]
  "
        />
        {/* ================================================= */}
        {/* MAIN CONTAINER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="

            relative

            mx-auto

            w-full

            max-w-6xl

            overflow-hidden

            rounded-[40px]

            border

            border-slate-200 dark:border-slate-800

            bg-white/90

            p-8
            md:p-12

            shadow-2xl

            backdrop-blur-2xl

            dark:border-white/10

            dark:bg-slate-900

            dark:shadow-[0_0_80px_rgba(168,85,247,0.15)]
          "
        >
          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <div
            className="
              text-center
            "
          >
            {/* ICON */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
                flex
                justify-center
              "
            >
              <div
                className="

                  flex

                  h-28
                  w-28

                  items-center
                  justify-center

                  rounded-full

                  bg-gradient-to-r

                  from-[#312E81]

                  via-[#7C3AED]

                  to-[#A78BFA]

                  shadow-[0_0_50px_rgba(168,85,247,0.4)]
                "
              >
                <UploadCloud
                  size={48}
                  className="
                    text-white
                  "
                />
              </div>
            </motion.div>

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
               AI Resume Analyzer Platform
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="

                mx-auto

                mt-8

                max-w-4xl

                text-lg

                leading-relaxed

                text-slate-600 dark:text-slate-400

                dark:text-gray-400

                md:text-xl
              "
            >
              Upload your resume and let AI analyze ATS compatibility, improve
              recruiter visibility, detect missing skills, generate personalized
              career roadmaps, and rewrite resume content professionally.
            </p>
          </div>

          {/* ================================================= */}
          {/* UPLOAD AREA */}
          {/* ================================================= */}

          <div
            className="

              mt-14

              rounded-[28px]

              border-2
              border-dashed
              border-purple-200

              bg-#7C3AED/5

              p-10
              md:p-16

              text-center
            "
          >
            {/* INPUT */}

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="
                hidden
              "
              id="resumeUpload"
            />

            {/* LABEL */}

            <label
              htmlFor="resumeUpload"
              className="

                flex

                cursor-pointer

                flex-col

                items-center
                justify-center
              "
            >
              <FileText
                size={70}
                className="
                  text-[#7C3AED]
                "
              />

              <h2
                className="

                  mt-6

                  text-3xl

                  font-black

                  text-slate-900 dark:text-white

                  dark:text-white
                "
              >
                Click To Upload Resume
              </h2>

              <p
                className="

                  mt-3

                  text-slate-600 dark:text-slate-400

                  dark:text-gray-400
                "
              >
                Supported formats: PDF and DOCX
              </p>
            </label>

            {/* FILE */}

            {file && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="

                  mx-auto

                  mt-8

                  flex

                  max-w-md

                  items-center
                  justify-center

                  gap-3

                  rounded-2xl

                  border
                  border-green-500/20

                  bg-green-500/10

                  px-6
                  py-4

                  text-green-600

                  dark:text-green-300
                "
              >
                <CheckCircle2 />

                <span
                  className="
                    truncate
                  "
                >
                  {file.name}
                </span>
              </motion.div>
            )}
          </div>

          {/* ================================================= */}
          {/* TARGET ROLE */}
          {/* ================================================= */}

          <div className="mt-12">
            <label
              className="

                mb-4

                flex

                items-center

                gap-3

                text-lg

                font-bold

                text-slate-900 dark:text-white

                dark:text-white
              "
            >
              <Briefcase size={22} />
              Target Role
            </label>

            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="

                w-full

                rounded-2xl

                border

                border-slate-200 dark:border-slate-800

                bg-[#F8FAFC]

                p-5

                text-slate-900 dark:text-white

                outline-none

                dark:border-white/10

                dark:bg-slate-900

                dark:text-white
              "
            >
              <option value="">Select Target Role</option>

              <option>Frontend Developer</option>

              <option>Backend Developer</option>

              <option>Full Stack Developer</option>

              <option>Software Engineer</option>

              <option>DevOps Engineer</option>

              <option>Data Analyst</option>
            </select>
          </div>

          {/* ================================================= */}
          {/* JOB DESCRIPTION */}
          {/* ================================================= */}

          <div className="mt-10">
            <label
              className="

                mb-4

                block

                text-lg

                font-bold

                text-slate-900 dark:text-white

                dark:text-white
              "
            >
              Job Description
            </label>

            <textarea
              rows={8}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="
Paste Job Description Here...
"
              className="

                w-full

                resize-none

                rounded-2xl

                border

                border-slate-200 dark:border-slate-800

                bg-[#F8FAFC]

                p-5

                text-slate-900 dark:text-white

                placeholder-gray-500

                outline-none

                dark:border-white/10

                dark:bg-slate-900

                dark:text-white

                dark:placeholder-gray-400
              "
            />
          </div>

          {/* ================================================= */}
          {/* FEATURES */}
          {/* ================================================= */}

          <div
            className="

              mt-12

              grid

              grid-cols-1

              gap-5

              md:grid-cols-3
            "
          >
            {[
              {
                icon: ShieldCheck,

                title: "ATS Optimization",

                desc: "Improve recruiter visibility and ATS compatibility.",
              },

              {
                icon: Sparkles,

                title: "AI Resume Rewrite",

                desc: "Generate stronger professional resume content instantly.",
              },

              {
                icon: BrainCircuit,

                title: "Career Intelligence",

                desc: "Discover missing skills and roadmap recommendations.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  className="

                      rounded-3xl

                      border

                      border-slate-200 dark:border-slate-800

                      bg-[#F8FAFC]

                      p-6

                      dark:border-white/10

                      dark:bg-[#111827]/70
                    "
                >
                  <div
                    className="
                        flex
                        justify-center
                      "
                  >
                    <div
                      className="

                          flex

                          h-14
                          w-14

                          items-center
                          justify-center

                          rounded-2xl

                          bg-purple-500/10
                        "
                    >
                      <Icon
                        size={26}
                        className="
                            text-[#7C3AED]
                          "
                      />
                    </div>
                  </div>

                  <h3
                    className="

                        mt-5

                        text-xl

                        font-bold

                        text-slate-900 dark:text-white

                        dark:text-white
                      "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="

                        mt-3

                        leading-relaxed

                        text-slate-600 dark:text-slate-400

                        dark:text-gray-400
                      "
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ================================================= */}
          {/* ERROR */}
          {/* ================================================= */}

          {error && (
            <div
              className="

                mt-8

                rounded-2xl

                border
                border-red-500/20

                bg-red-500/10

                p-5

                text-center

                text-red-500
              "
            >
              {error}
            </div>
          )}

          {/* ================================================= */}
          {/* BUTTON */}
          {/* ================================================= */}

          <div
            className="
              mt-12
              flex
              justify-center
            "
          >
            <button
              onClick={handleUpload}
              disabled={loading}
              className="

                inline-flex

                items-center

                gap-3

                rounded-2xl

                bg-gradient-to-r

                from-[#312E81]

                via-[#7C3AED]

                to-[#A78BFA]

                px-10
                py-5

                text-lg

                font-bold

                text-white

                shadow-2xl

                transition-all
                duration-300

                hover:scale-105

                disabled:cursor-not-allowed

                disabled:opacity-60
              "
            >
              {loading ? (
                <>
                  <LoaderCircle
                    className="
                      animate-spin
                    "
                  />
                  Analyzing Resume...
                </>
              ) : (
                <>Analyze Resume 🚀</>
              )}
            </button>
          </div>

          {/* ================================================= */}
          {/* RESUME HISTORY */}
          {/* ================================================= */}

          {history.length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-12"
            >
              <h2
                className="
        text-3xl
        font-black
        text-slate-900 dark:text-white
        dark:text-white
      "
              >
                My Resume History
              </h2>

              <div
                className="
        mt-6
        grid
        gap-4
      "
              >
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="
            rounded-3xl
            border
            border-slate-200 dark:border-slate-800
            bg-[#F8FAFC]
            p-6
            dark:border-white/10
            dark:bg-slate-900
          "
                  >
                    <h3
                      className="
              text-xl
              font-bold
              text-slate-900 dark:text-white
              dark:text-white
            "
                    >
                      {item.resume_name}
                    </h3>

                    <div
                      className="
              mt-4
              flex
              flex-wrap
              gap-6
            "
                    >
                      <p>
                        ATS Score:
                        <strong> {item.ats_score}%</strong>
                      </p>

                      <p>
                        Overall Score:
                        <strong> {item.overall_score}%</strong>
                      </p>
                    </div>

                    <p
                      className="
              mt-3
              text-sm
              text-slate-500 dark:text-slate-400
            "
                    >
                      {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================================================= */}
          {/* RESPONSE */}
          {/* ================================================= */}

          {response && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="

                mt-12

                rounded-3xl

                border
                border-green-500/20

                bg-green-500/10

                p-8
              "
            >
              <h2
                className="

                  text-3xl

                  font-black

                  text-green-600

                  dark:text-green-400
                "
              >
                Resume Analysis Completed 🚀
              </h2>

              <p
                className="

                  mt-5

                  text-lg

                  text-slate-700

                  dark:text-slate-300
                "
              >
                {response.data.fileName}
              </p>

              <div
                className="
                  mt-6
                "
              >
                <h3
                  className="

                    text-slate-600 dark:text-slate-400

                    dark:text-gray-400
                  "
                >
                  ATS Resume Score
                </h3>

                <h2
                  className="

                    mt-2

                    text-6xl

                    font-black

                    text-slate-900 dark:text-white

                    dark:text-white
                  "
                >
                  {response.data.atsScore}%
                </h2>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </MainLayout>
  );
}
