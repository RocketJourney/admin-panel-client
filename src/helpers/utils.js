import jstz from "jstz";
import moment from "moment-timezone";

const setTimeZone = () => {
  if (!sessionStorage.getItem("timezone")) {
    var tz = jstz.determine() || "UTC";
    sessionStorage.setItem("timezone", tz.name());
  }
};

const parseHour = date => {
  if (date === "never") {
    return "Never";
  }
  setTimeZone();
  const currTz = sessionStorage.getItem("timezone");
  const tzTime = moment.tz(currTz);
  const formattedTime = tzTime.format("h:mm A");
  const date_to_mx = moment
    .tz(date, currTz)
    .add(tzTime._offset, "minutes")
    .format();
  return moment(date_to_mx).fromNow();
};

// Calculates week range from week number
// Author: https://codepen.io/Venugopal46/pen/WrxdLY?editors=0010#0
const getDateRangeOfWeek = (week, year) => {
  const firstDayOfWeek = moment()
    .day("Monday")
    .year(year)
    .week(week)
    .format("YYYY-MM-DD");
  const lastDayOfWeek = moment()
    .day("Sunday")
    .year(year)
    .week(week)
    .add(7, "days")
    .format("YYYY-MM-DD");

  return `${firstDayOfWeek} to ${lastDayOfWeek}`;
};

export default {
  setTimeZone,
  parseHour,
  getDateRangeOfWeek
};

export { setTimeZone, parseHour, getDateRangeOfWeek };
