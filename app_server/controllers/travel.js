const url = 'http://localhost:3000/api/trips';
const options = { method: 'GET', headers: { 'Accept': 'application/json' } };

/* GET travel view */
const travel = async (req, res) => {
const response = await fetch(url, options);
const trips = await response.json();

res.render('travel', {
    title: 'Travlr Getaways',
    trips: trips
});
};

module.exports = {
    travel
};