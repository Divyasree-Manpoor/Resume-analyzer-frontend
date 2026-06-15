import API from "./api";

/* ================================================= */
/* UPLOAD RESUME SERVICE */
/* ================================================= */

export const uploadResumeService =

  async (

    formData,

    onUploadProgress = null

  ) => {

    try {

      /* ================================================= */
      /* VALIDATION */
      /* ================================================= */

      if (!formData) {

        throw {

          message:
            "Resume data is required",
        };
      }

      /* ================================================= */
      /* API REQUEST */
      /* ================================================= */

      const response =

        await API.post(

          "/upload",

          formData,

          {

            headers: {

              "Content-Type":
                "multipart/form-data",
            },

            onUploadProgress:
              (progressEvent) => {

                if (
                  onUploadProgress
                ) {

                  const percentCompleted =

                    Math.round(

                      (
                        progressEvent.loaded *

                        100

                      ) /

                      progressEvent.total
                    );

                  onUploadProgress(
                    percentCompleted
                  );
                }
              },
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
            "Resume Upload Failed",
        }
      );
    }
};