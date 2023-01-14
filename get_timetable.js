const {Edupage} = require("edupage-api");

const edupage = new Edupage();

require('dotenv').config();

const username=process.env.EDU_USERNAME;
const password=process.env.EDU_PASSWORD;

(async () => {
    await edupage.login(username, password);

    const from = new Date("2023-01-16");
    const to = new Date("2023-01-17");
    const timetables = await edupage.fetchTimetablesForDates(from, to);

    console.log(timetables);

    edupage.exit(); //To exit the process
})();