const { Router } = require("express");
const { addMovie, list, testRoute, updateMovie, deleteMovie } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", list);
movieRouter.put("/movie", updateMovie);
movieRouter.delete("/movie", deleteMovie);
movieRouter.get("/test", testRoute);

module.exports = movieRouter;