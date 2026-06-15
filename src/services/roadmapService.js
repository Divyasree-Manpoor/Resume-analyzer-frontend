import API from "./api";

/* ================================================= */
/* ROADMAP SERVICE */
/* ================================================= */

export const roadmapService = async (

  targetRole,

  missingSkills = [],

  analysisData = {}

) => {

  try {

    /* ================================================= */
    /* VALIDATION */
    /* ================================================= */

    if (!targetRole) {

      throw {

        message:
          "Target role is required",
      };
    }

    /* ================================================= */
    /* REQUEST BODY */
    /* ================================================= */

    const requestBody = {

      targetRole,

      missingSkills,

      resumeAnalysis: {

        atsScore:
          analysisData?.atsScore || 0,

        strengths:
          analysisData?.strengths || [],

        weaknesses:
          analysisData?.weaknesses || [],

      },

    };

    /* ================================================= */
    /* API REQUEST */
    /* ================================================= */

    const response = await API.post(

      "/roadmap",

      requestBody

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
          "Roadmap Generation Failed",

      }

    );

  }

};