export const formatReadableDate = (date: Date) => {
  if (!(date instanceof Date)) throw new Error("Invalid date!");

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const timeZone = date
    .toLocaleTimeString("en-US", { timeZoneName: "short" })
    .split(" ")[2];

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${timeZone}`;
};
