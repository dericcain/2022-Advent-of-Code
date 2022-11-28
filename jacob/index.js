let today = new Date();
let hour = 0;
let isAfternoon = true;
if ((today.getHours() - 6) - 12 <= 0) {
  hour = (today.getHours() - 6)
  isAfternoon = false
} else {
  hour = (today.getHours() - 6) - 12
  isAfternoon
};
let amOrPm = isAfternoon ? "PM" : "AM";

console.log(`It is currently: ${hour}:${today.getMinutes()}${amOrPm} on ${(today.getMonth() + 1)}/${today.getDate()}/${today.getFullYear()}.`);