import API from "./api";

/* ================================================= */
/* GET ANALYSIS HISTORY */
/* ================================================= */

export const getAnalysisHistoryService =
  async () => {

    try {

      const response =
        await API.get(
          "/analysis/history"
        );

      return response.data;

    } catch (error) {

      throw (

        error.response?.data ||

        {
          message:
            "Failed to fetch resume history",
        }
      );
    }
};