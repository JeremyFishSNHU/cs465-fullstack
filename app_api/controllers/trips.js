const mongoose = require('mongoose');
const Trip = require('../../app_server/models/travlr');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
const q = await Trip
    .find({})
    .exec();

res
    .status(200)
    .json(q);
};
// GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    const q = await Trip
        .findOne({ 'code': req.params.tripCode })
        .exec();

    if (!q) {
        return res
            .status(404)
            .json({ "message": "trip not found" });
    }

    res
        .status(200)
        .json(q);
};

module.exports = {
    tripsList,
    tripsFindByCode
};