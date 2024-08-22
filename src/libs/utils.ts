export const convertMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  const hoursPart = hours > 0 ? `${hours}h ` : '';
  const minutesPart = `${min}m`;

  return `${hoursPart}${minutesPart}`.trim();
};
