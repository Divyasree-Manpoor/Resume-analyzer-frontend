import {

  useState,

  useCallback,

} from "react";

import {

  useNavigate,

} from "react-router-dom";

import {

  uploadResumeService,

} from "../services/uploadService";

import {

  useResume,

} from "../context/ResumeContext";

/* ================================================= */
/* USE UPLOAD */
/* ================================================= */

export default function useUpload() {

  /* ================================================= */
  /* NAVIGATION */
  /* ================================================= */

  const navigate =
    useNavigate();

  /* ================================================= */
  /* CONTEXT */
  /* ================================================= */

  const {

    setResumeFile,

    setAnalysisData,

    setUploadLoading,

    setUploadProgress,

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

    data,

    setData,

  ] = useState(null);

  /* ================================================= */
  /* UPLOAD RESUME */
  /* ================================================= */

  const uploadResume =

    useCallback(

      async (formData) => {

        try {

          /* ================================================= */
          /* START */
          /* ================================================= */

          setLoading(true);

          setError("");

          setUploadLoading(true);

          /* ================================================= */
          /* STORE FILE */
          /* ================================================= */

          const file =

            formData.get(
              "resume"
            );

          if (file) {

            setResumeFile(
              file
            );
          }

          /* ================================================= */
          /* API REQUEST */
          /* ================================================= */

          const response =

            await uploadResumeService(

              formData,

              (
                progress
              ) => {

                setUploadProgress(
                  progress
                );
              }
            );

          /* ================================================= */
          /* STORE DATA */
          /* ================================================= */

          setData(response);

          /* ================================================= */
          /* STORE ANALYSIS */
          /* ================================================= */

          if (
            response?.data
          ) {

            setAnalysisData(
              response.data
            );
          }

          /* ================================================= */
          /* NAVIGATE */
          /* ================================================= */

          navigate(
            "/analysis"
          );

          return response;

        } catch (err) {

          console.log(
            "Upload Error:",
            err
          );

          setError(

            err.message ||

            "Resume Upload Failed"
          );

        } finally {

          setLoading(false);

          setUploadLoading(false);
        }
      },

      [

        navigate,

        setResumeFile,

        setAnalysisData,

        setUploadLoading,

        setUploadProgress,
      ]
    );

  /* ================================================= */
  /* RESET */
  /* ================================================= */

  const resetUpload = () => {

    setData(null);

    setError("");
  };

  /* ================================================= */
  /* RETURN */
  /* ================================================= */

  return {

    loading,

    error,

    data,

    uploadResume,

    resetUpload,
  };
}