export const getFullName = ({ first, last }, title = "") => {
  const fullName = `${first} ${last}`;
  return title ? `${title} ${fullName}` : fullName;
};
