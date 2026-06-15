import {

  useState,

  useCallback,

} from "react";

import {

  analyzeResumeService,

} from "../services/analysisService";

import {

  useResume,

} from "../context/ResumeContext";

/* ================================================= */
/* USE ANALYSIS */
/* ================================================= */

export default function useAnalysis() {

  /* ================================================= */
  /* CONTEXT */
  /* ================================================= */

  const {

    setAnalysisData,

  } = useResume();

  /* ================================================= */
  /* STATES */
  /* ================================================= */

  const [

    loading,

    setLoading,

  ] = useState(false);

  const [

    error,

    setError,

  ] = useState("");

  const [

    analysis,

    setAnalysis,

  ] = useState(null);

  /* ================================================= */
  /* ANALYZE RESUME */
  /* ================================================= */

  const analyzeResume =

    useCallback(

      async (resumeData) => {

        try {

          /* LOADING */

          setLoading(true);

          setError("");

          /* API CALL */

          const response =

            await analyzeResumeService(
              resumeData
            );

          /* STORE LOCAL */

          setAnalysis(response);

          /* STORE GLOBAL */

          if (
            response?.data
          ) {

            setAnalysisData(
              response.data
            );
          }

          return response;

        } catch (err) {

          const errorMessage =

            err.message ||

            "Resume Analysis Failed";

          setError(
            errorMessage
          );

          console.log(
            "Analysis Error:",
            err
          );

        } finally {

          setLoading(false);
        }
      },

      [

        setAnalysisData,
      ]
    );

  /* ================================================= */
  /* RESET */
  /* ================================================= */

  const resetAnalysis = () => {

    setAnalysis(null);

    setError("");
  };

  /* ================================================= */
  /* RETURN */
  /* ================================================= */

  return {

    loading,

    error,

    analysis,

    analyzeResume,

    resetAnalysis,
  };
}