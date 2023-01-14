const {Edupage} = require("edupage-api");
const edupage = new Edupage();

require('dotenv').config();

const username=process.env.EDU_USERNAME;
const password=process.env.EDU_PASSWORD;

(async () => {
    await edupage.login(username, password);

    console.log(edupage.user);

    edupage.exit();
})();

