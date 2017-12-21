'use strict';
let restaurantsDb = require('./restaurantsDb');

module.exports = {

	getRestaurants: (req, res) => {
    restaurantsDb.read_restaurants([], function (err, restaurants) {
    	if (err) {
    		console.error(err);
    		res.status(500).send(err);
			}
			res.send(restaurants);
		});
	},

  getRestaurant: (req, res) => {
	  restaurantsDb.read_restaurant([req.params.id], (err, response) => {
	    if(err) {
	      res.status(500).send(err);
      }
      else {
	      res.status(200).send(response);
      }
    })
  },

	createRestaurant: (req, res) => {
		let restaurant = req.body;
		restaurantsDb.write_restaurant([
      restaurant.name,
      restaurant.google_url,
      restaurant.type
		], (err, response) => {
			if (err) {
        console.error(err);
				res.status(500).send(err);
			}
			else {
				res.status(200).send(restaurant);
			}
		});
	},

	deleteRestaurant: (req, res) => {
		restaurantsDb.delete_restaurant([req.params.id], (err, response) => {
		  if(err) {
		    res.status(500).send(err);
      }
			res.status(202).send(response);
		});
	},
};
