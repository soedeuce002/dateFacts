const moment = require("moment");
const chalk = require("chalk");

let dateTime = moment().format("dddd, MMMM D GGGG, h:mm:ss a");
let day = moment().format("DDDo");


let dst
if(moment().isDST(dateTime) === true){
  dst = "is";
} else {
  dst = "is not";
};


// let seconds = moment([2017, 06, 24]).toNow();

let start = moment().startOf('day');
let now = moment();
let seconds = (now.diff(start) / 1000);



let leap

if(moment().isLeapYear("GGGG") === true){
  leap = "is"
} else {
  leap = "isn't"
};





console.log(`It is ${chalk.blue.bold(dateTime)}.`);
console.log(`It is the ${chalk.magenta.bold(day)} day of the year.`);
console.log(`It is ${chalk.yellow.bold(seconds)} seconds into the day.`);
console.log(`It ${chalk.greenBright.bold(dst)} during Daylight Savings Time.`)
console.log(`It ${chalk.red.bold(leap)} a leap year. `);
