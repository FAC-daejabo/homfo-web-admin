export const getDate = (date: string) => {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");
  return year + "-" + month + "-" + day;
};

export const getDday = (date: string) => {
  const targetDate = new Date(date);
  const today = new Date();

  return `D-${Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  )}`;
};
