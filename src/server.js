const express = require("express");
const app = express();
const port = 5001;

    // makes root 
app.use("/static", express.static("public"));

    // run the express application with this function
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});