const date = new Date();
const newDate = date.toISOString();
const otherDate = "2022-10-15T15:30:00";
console.log(newDate);
console.log("date", newDate.split("T")[0]);
console.log("time", otherDate.split("T")[1]);
console.log(new Date().toISOString().slice(0, 10));
