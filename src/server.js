require("./db/connection")
const express = require("express");
const movieRouter = require("./movies/movieRoutes");
const app = express();
const port = process.env.PORT || 5001;


app.use(express.json());

app.use(movieRouter);

//     // "static" is our route path, "public" is our folder where "static" files is
// app.use("/static", express.static("public"));

// app.use("/about", express.static("about"));

// app.use("/contacts", express.static("contacts"));

    // run the express application with this function
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});