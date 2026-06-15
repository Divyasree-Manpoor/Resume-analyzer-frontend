/* ================================================= */
/* FORMAT PERCENTAGE */
/* ================================================= */

export function formatPercentage(
  value = 0
) {

  return `${value}%`;
}

/* ================================================= */
/* CAPITALIZE TEXT */
/* ================================================= */

export function capitalizeText(
  text = ""
) {

  if (!text) {
    return "";
  }

  return (

    text.charAt(0)
      .toUpperCase() +

    text.slice(1)
  );
}

/* ================================================= */
/* FORMAT DATE */
/* ================================================= */

export function formatDate(
  date
) {

  if (!date) {
    return "";
  }

  return new Date(
    date
  ).toLocaleDateString();
}