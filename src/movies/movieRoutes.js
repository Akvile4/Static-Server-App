const { Router } = require("express");
const { addMovie, list } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", list);
movieRouter.get("/test", testRoute);

module.exports = movieRouter;