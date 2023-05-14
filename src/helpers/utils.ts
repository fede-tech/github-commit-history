export const convertDate = (utcDate: string) => {
  const date = new Date(utcDate).toString();
  return date;
};
