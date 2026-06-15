import {

  createContext,

  useContext,

  useMemo,

  useState,

} from "react";

/* ================================================= */
/* CREATE CONTEXT */
/* ================================================= */

const ResumeContext =
  createContext();

/* ================================================= */
/* RESUME PROVIDER */
/* ================================================= */

export function ResumeProvider({
  children,
}) {

  /* ================================================= */
  /* RESUME FILE */
  /* ================================================= */

  const [

    resumeFile,

    setResumeFile,

  ] = useState(null);

  /* ================================================= */
  /* ANALYSIS DATA */
  /* ================================================= */

  const [

    analysisData,

    setAnalysisData,

  ] = useState(null);

  /* ================================================= */
  /* JOB DESCRIPTION */
  /* ================================================= */

  const [

    jobDescription,

    setJobDescription,

  ] = useState("");

  /* ================================================= */
  /* TARGET ROLE */
  /* ================================================= */

  const [

    targetRole,

    setTargetRole,

  ] = useState("");

  /* ================================================= */
  /* UPLOAD LOADING */
  /* ================================================= */

  const [

    uploadLoading,

    setUploadLoading,

  ] = useState(false);

  /* ================================================= */
  /* UPLOAD PROGRESS */
  /* ================================================= */

  const [

    uploadProgress,

    setUploadProgress,

  ] = useState(0);

  /* ================================================= */
  /* AI REWRITTEN CONTENT */
  /* ================================================= */

  const [

    rewrittenContent,

    setRewrittenContent,

  ] = useState("");

  /* ================================================= */
  /* CHATBOT MESSAGES */
  /* ================================================= */

  const [

    chatbotMessages,

    setChatbotMessages,

  ] = useState([]);

  /* ================================================= */
  /* ROADMAP DATA */
  /* ================================================= */

  const [

    roadmapData,

    setRoadmapData,

  ] = useState(null);

  /* ================================================= */
  /* SKILL GAP DATA */
  /* ================================================= */

  const [

    skillGapData,

    setSkillGapData,

  ] = useState(null);

  /* ================================================= */
  /* JD MATCH DATA */
  /* ================================================= */

  const [

    jdMatchData,

    setJdMatchData,

  ] = useState(null);

  /* ================================================= */
  /* RESET ALL DATA */
  /* ================================================= */

  const resetResumeData = () => {

    setResumeFile(null);

    setAnalysisData(null);

    setJobDescription("");

    setTargetRole("");

    setUploadLoading(false);

    setUploadProgress(0);

    setRewrittenContent("");

    setChatbotMessages([]);

    setRoadmapData(null);

    setSkillGapData(null);

    setJdMatchData(null);
  };

  /* ================================================= */
  /* CONTEXT VALUE */
  /* ================================================= */

  const value = useMemo(

    () => ({

      /* ================================================= */
      /* RESUME */
      /* ================================================= */

      resumeFile,

      setResumeFile,

      /* ================================================= */
      /* ANALYSIS */
      /* ================================================= */

      analysisData,

      setAnalysisData,

      /* ================================================= */
      /* JOB DESCRIPTION */
      /* ================================================= */

      jobDescription,

      setJobDescription,

      /* ================================================= */
      /* TARGET ROLE */
      /* ================================================= */

      targetRole,

      setTargetRole,

      /* ================================================= */
      /* UPLOAD */
      /* ================================================= */

      uploadLoading,

      setUploadLoading,

      uploadProgress,

      setUploadProgress,

      /* ================================================= */
      /* REWRITE */
      /* ================================================= */

      rewrittenContent,

      setRewrittenContent,

      /* ================================================= */
      /* CHATBOT */
      /* ================================================= */

      chatbotMessages,

      setChatbotMessages,

      /* ================================================= */
      /* ROADMAP */
      /* ================================================= */

      roadmapData,

      setRoadmapData,

      /* ================================================= */
      /* SKILL GAP */
      /* ================================================= */

      skillGapData,

      setSkillGapData,

      /* ================================================= */
      /* JD MATCH */
      /* ================================================= */

      jdMatchData,

      setJdMatchData,

      /* ================================================= */
      /* RESET */
      /* ================================================= */

      resetResumeData,
    }),

    [

      resumeFile,

      analysisData,

      jobDescription,

      targetRole,

      uploadLoading,

      uploadProgress,

      rewrittenContent,

      chatbotMessages,

      roadmapData,

      skillGapData,

      jdMatchData,
    ]
  );

  /* ================================================= */
  /* PROVIDER */
  /* ================================================= */

  return (

    <ResumeContext.Provider
      value={value}
    >

      {children}

    </ResumeContext.Provider>
  );
}

/* ================================================= */
/* USE RESUME */
/* ================================================= */

export const useResume = () => {

  const context =

    useContext(
      ResumeContext
    );

  /* ================================================= */
  /* SAFETY CHECK */
  /* ================================================= */

  if (!context) {

    throw new Error(

      "useResume must be used inside ResumeProvider"
    );
  }

  return context;
};