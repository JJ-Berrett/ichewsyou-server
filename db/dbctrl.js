'use strict';
let restaurantsDb = require('./restaurantsDb');
let moment = require('moment');

module.exports = {

	getAllRestaurants: function (req, res) {
		restaurantsDb.read_confSessions([], (err, sessions) => {
			res.send(sessions);
		})
	},

	createRestaurant: function (req, res) {
		let session = req.body;
		restaurantsDb.write_confSession([
			session.sessiontype,
			session.title,
			session.speakername,
			session.speakerbio,
			session.speakerphoto,
			session.demographic,
			session.room,
			session.sessionTime,
			session.description
		], (err, response) => {
			if (err) {
				res.send("500")
				console.log(err)
			}
			else {
				console.log(response);
				res.send("200");
			}
		});
	},
	deleteRestaruant(req, res){
		restaurantsDb.delete_confSession([req.params.id], (err, response) => {
			res.send(response);
		})
	},
};