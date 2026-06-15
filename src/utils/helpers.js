/* ================================================= */
/* TRUNCATE TEXT */
/* ================================================= */

export function truncateText(

  text = "",

  limit = 100

) {

  try {

    if (
      !text ||

      typeof text !==
      "string"
    ) {

      return "";
    }

    if (
      text.length <= limit
    ) {

      return text;
    }

    return (

      text.substring(

        0,

        limit
      ) + "..."
    );

  } catch (error) {

    console.log(

      "truncateText Error:",

      error
    );

    return text;
  }
}

/* ================================================= */
/* FORMAT FILE SIZE */
/* ================================================= */

export function formatFileSize(
  bytes
) {

  if (!bytes) {
    return "0 MB";
  }

  return (
    (bytes / (1024 * 1024))
      .toFixed(2) + " MB"
  );
}

/* ================================================= */
/* GET ATS STATUS */
/* ================================================= */

export function getATSStatus(
  score
) {

  if (score >= 85) {

    return "Excellent";
  }

  if (score >= 70) {

    return "Good";
  }

  if (score >= 50) {

    return "Average";
  }

  return "Needs Improvement";
}