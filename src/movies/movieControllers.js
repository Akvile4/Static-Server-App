const Movie  = require("./movieModal");

    // build function to add a new entry to our db
    // the function takes the request from the client (insomnia)
    // and sends a response from the server (our app)
exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
};

    // build function to list all of our db entrues
    // use the req when building more complicated get requests
exports.list = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({movies});
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
};

exports.testRoute = async (req, res) => {
    res.status(200).send({"test": "test route works"})
}