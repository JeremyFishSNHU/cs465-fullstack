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
// POST: /trips - adds a new trip
const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    res
        .status(201)
        .json(q);
};

// PUT: /trips/:tripCode - updates an existing trip
const tripsUpdateTrip = async (req, res) => {
    const q = await Trip.findOneAndUpdate(
        { code: req.params.tripCode },
        {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        { new: true }
    );

    if (!q) {
        return res
            .status(404)
            .json({ message: 'Trip not found' });
    }

    res
        .status(200)
        .json(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};