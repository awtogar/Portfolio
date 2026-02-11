/**
 * Format date from "YYYY-MM" to "MM/YYYY"
 * @param {string|null} date - Date in 'YYYY-MM' format, or null for present
 * @returns {string} Formatted date (e.g., "11/2025" or "Present")
 */
export function formatDate(date) {
  if (!date) return 'Present';
  const [year, month] = date.split('-');
  return `${month}/${year}`;
}

/**
 * Calculate duration between two dates
 * @param {string} startDate - Start date in 'YYYY-MM' format
 * @param {string|null} endDate - End date in 'YYYY-MM' format, or null for present
 * @returns {string} Formatted duration (e.g., "4 months" or "1y 2mo")
 */
export function calculateDuration(startDate, endDate = null) {
  const start = new Date(startDate + '-01');
  const end = endDate ? new Date(endDate + '-01') : new Date();

  // Calculate total months difference
  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Add 1 to include both start and end months
  totalMonths += 1;

  // Ensure minimum of 1 month
  totalMonths = Math.max(1, totalMonths);

  if (totalMonths < 12) {
    // Under 12 months: show as "X mo"
    return `${totalMonths} mo`;
  } else {
    // 12 months or more: show as "Xy Xmo"
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (months === 0) {
      return `${years}y`;
    }
    return `${years}y ${months}mo`;
  }
}

export default calculateDuration;
