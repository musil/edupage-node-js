const {Edupage} = require("edupage-api");

const edupage = new Edupage();

require('dotenv').config();

const username=process.env.EDU_USERNAME;
const password=process.env.EDU_PASSWORD;

(async () => {
    await edupage.login(username, password);

    //Get tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    //Get the day after tomorrow date
    const tomorrow2 = new Date();
    tomorrow2.setDate(tomorrow.getDate() + 2);
    
    //Get lessons
    const timetable = await edupage.getTimetableForDate(tomorrow);
    const lessons = timetable.lessons;

    const timetable2 = await edupage.getTimetableForDate(tomorrow);
    const lessons2 = timetable2.lessons;

    //Collect assignments
    const homeworks = lessons.reduce((arr, lesson) => (arr.push(...lesson.assignments), arr), []);
    console.log(homeworks);

    const homeworks2 = lessons2.reduce((arr, lesson) => (arr.push(...lesson.assignments), arr), []);
    console.log(homeworks2);

    edupage.exit();
})();