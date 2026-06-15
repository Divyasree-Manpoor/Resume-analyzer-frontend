import API from "./api";

/* ================================================= */
/* RESUME REWRITE SERVICE */
/* ================================================= */

export const rewriteResumeService =

  async (

    resumeText,

    targetRole = "",

    missingSkills = []

  ) => {

    try {

      /* ================================================= */
      /* VALIDATION */
      /* ================================================= */

      if (!resumeText) {

        throw {

          message:
            "Resume content is required",
        };
      }

      /* ================================================= */
      /* API REQUEST */
      /* ================================================= */

      const response =

        await API.post(

          "/rewrite",

          {

            resumeText,

            targetRole,

            missingSkills,
          }
        );

      /* ================================================= */
      /* SUCCESS */
      /* ================================================= */

      return response.data;

    } catch (error) {

      throw (

        error.response?.data ||

        {

          message:
            "Resume Rewrite Failed",
        }
      );
    }
};