import API from "./api";

/* ================================================= */
/* JD MATCH SERVICE */
/* ================================================= */

export const jdMatchService =

  async (

    jobDescription,

    resumeText = ""

  ) => {

    try {

      /* ================================================= */
      /* VALIDATION */
      /* ================================================= */

      if (!jobDescription) {

        throw {

          message:
            "Job Description is required",
        };
      }

      /* ================================================= */
      /* API REQUEST */
      /* ================================================= */

      const response =

        await API.post(

          "api/jd-match",

          {

            jobDescription,

            resumeText,
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
            "JD Match Failed",
        }
      );
    }
};