import jstz from "jstz";
import moment from "moment-timezone";

const setTimeZone = () => {
  if (!sessionStorage.getItem("timezone")) {
    var tz = jstz.determine() || "UTC";
    sessionStorage.setItem("timezone", tz.name());
  }
};

const parseHour = date => {
  const currTz = sessionStorage.getItem("timezone");
  const tzTime = moment.tz(currTz);
  const formattedTime = tzTime.format("h:mm A");
  const date_to_mx = moment
    .tz(date, "America/Mexico_City")
    .add(tzTime._offset, "minutes")
    .format();
  return moment(date_to_mx).fromNow();
};

export default {
  setTimeZone,
  parseHour
};

export { setTimeZone, parseHour };
