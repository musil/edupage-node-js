const {Edupage} = require("edupage-api");

const edupage = new Edupage();

require('dotenv').config();

const username=process.env.EDU_USERNAME;
const password=process.env.EDU_PASSWORD;
//Get tomorrow's date
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
//Get the day after tomorrow date
const tomorrow2 = new Date();
tomorrow2.setDate(tomorrow.getDate() + 2);

(async () => {
    await edupage.login(username, password);

    const from = tomorrow // new Date("2024-04-26"); // static date from which to get the timetable
    const to = tomorrow2 //new Date("2024-04-27"); // static date to which to get the timetable
    const timetables = await edupage.fetchTimetablesForDates(from, to);

    console.log(timetables);

    edupage.exit(); //To exit the process
})();