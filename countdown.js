
const releaseDate = "2026-11-05";

function daysUntilRelease(today, release) {
  const currentDate = new Date(today);
  const targetDate = new Date(release);

  const difference = targetDate - currentDate;

  return Math.max(
    0,
    Math.ceil(difference / (1000 * 60 * 60 * 24))
  );
}

module.exports = { daysUntilRelease, releaseDate };
