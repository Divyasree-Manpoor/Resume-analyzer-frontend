import { useState } from "react";

import { motion } from "framer-motion";

import { ShieldCheck, Sparkles, BrainCircuit } from "lucide-react";

import DragDropArea from "./DragDropArea";

import FilePreview from "./FilePreview";

/* ================================================= */
/* UPLOAD BOX */
/* ================================================= */

export default function UploadBox({ onFileSelect }) {
  /* ================================================= */
  /* STATE */
  /* ================================================= */

  const [selectedFile, setSelectedFile] = useState(null);

  const [dragActive, setDragActive] = useState(false);

  /* ================================================= */
  /* HANDLE FILE */
  /* ================================================= */

  const handleFile = (file) => {
    if (!file) {
      return;
    }

    setSelectedFile(file);

    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  /* ================================================= */
  /* FILE INPUT */
  /* ================================================= */

  const handleChange = (e) => {
    const file = e.target.files?.[0];

    handleFile(file);
  };

  /* ================================================= */
  /* DROP */
  /* ================================================= */

  const handleDrop = (e) => {
    e.preventDefault();

    setDragActive(false);

    const file = e.dataTransfer.files?.[0];

    handleFile(file);
  };

  /* ================================================= */
  /* REMOVE FILE */
  /* ================================================= */

  const removeFile = () => {
    setSelectedFile(null);
  };

  /* ================================================= */
  /* FORMAT SIZE */
  /* ================================================= */

  const formatFileSize = (size) => {
    if (!size) {
      return "0 MB";
    }

    return `${(size / 1024 / 1024).toFixed(2)} MB`;
  };

  /* ================================================= */
  /* UI */
  /* ================================================= */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className="

          absolute

          inset-0

          rounded-[40px]

          bg-purple-500/10

          
        "
      />

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div
        className="

          relative

          overflow-hidden

          rounded-[40px]

          border

          border-slate-200 dark:border-slate-800

          bg-white/90

          p-6
          md:p-8

          shadow-sm

          backdrop-blur-2xl

          dark:border-white/10

          dark:bg-slate-900
        "
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="

            flex
            flex-col

            gap-5

            border-b

            border-slate-200 dark:border-slate-800

            pb-6

            dark:border-white/10

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* LEFT */}

          <div>
            <h2
              className="

                text-3xl

                font-black

                text-slate-900 dark:text-white

                md:text-4xl

                dark:text-white
              "
            >
              Upload Resume
            </h2>

            <p
              className="

                mt-3

                max-w-2xl

                text-slate-600 dark:text-slate-400

                dark:text-gray-400
              "
            >
              Upload your resume to unlock AI-powered ATS analysis, resume
              rewriting, keyword matching, skill gap tracking, and career
              roadmap generation.
            </p>
          </div>

          {/* RIGHT */}

          <div
            className="

              flex
              flex-wrap

              gap-3
            "
          >
            <div
              className="

                inline-flex
                items-center

                gap-2

                rounded-2xl

                border
                border-green-500/20

                bg-green-500/10

                px-4
                py-3

                text-sm

                text-green-600

                dark:text-green-300
              "
            >
              <ShieldCheck size={16} />
              Secure Upload
            </div>

            <div
              className="

                inline-flex
                items-center

                gap-2

                rounded-2xl

                border
                border-purple-200

                bg-purple-500/10

                px-4
                py-3

                text-sm

                text-purple-700

                dark:text-[#A78BFA]
              "
            >
              <Sparkles size={16} />
              AI Ready
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* DRAG AREA */}
        {/* ================================================= */}

        <div className="mt-8">
          <div
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
          >
            <DragDropArea
              dragActive={dragActive}
              onDrop={handleDrop}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* FILE PREVIEW */}
        {/* ================================================= */}

        {selectedFile && (
          <div className="mt-8">
            <FilePreview
              fileName={selectedFile.name}
              fileSize={formatFileSize(selectedFile.size)}
              onRemove={removeFile}
            />
          </div>
        )}

        {/* ================================================= */}
        {/* FEATURES */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            grid

            grid-cols-1

            gap-5

            md:grid-cols-3
          "
        >
          {[
            {
              icon: BrainCircuit,

              title: "ATS Resume Analysis",

              desc: "Analyze ATS compatibility, keywords, and recruiter readability.",
            },

            {
              icon: Sparkles,

              title: "AI Resume Rewrite",

              desc: "Improve resume quality with recruiter-focused AI rewriting.",
            },

            {
              icon: ShieldCheck,

              title: "Career Growth Insights",

              desc: "Get roadmap planning, missing skills, and career guidance.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="

                    rounded-3xl

                    border

                    border-slate-200 dark:border-slate-800

                    bg-slate-50 dark:bg-slate-800/50

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
                          text-purple-700

                          dark:text-[#A78BFA]
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
        {/* FOOTER */}
        {/* ================================================= */}

        <div
          className="

            mt-10

            flex
            flex-col

            gap-4

            border-t

            border-slate-200 dark:border-slate-800

            pt-6

            text-sm

            text-slate-600 dark:text-slate-400

            dark:border-white/10

            dark:text-gray-400

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>Supported formats: PDF and DOCX • Maximum upload size: 5MB</p>

          <div
            className="

              inline-flex
              items-center

              gap-2

              text-purple-700

              dark:text-[#A78BFA]
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
            Resume Analyzer Active
          </div>
        </div>
      </div>
    </motion.div>
  );
}
