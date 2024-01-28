import moment from "moment";

export const getFullDate = ({ date, age }) => {
  return (
    moment(date).format("dddd") +
    " " +
    moment(date).format("DD/MM/YYYY hh:mm a") +
    " " +
    "Age:" +
    age
  );
};
