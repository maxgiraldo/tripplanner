// typeof models.Place._id.valueOf() === "string"
// findById("52febc83789c0f01039fa37f")

var models = require('../models');
var data = {};

exports.index = function(req, res){

  models.Hotel.find(function(err, results) {
  	data.hotels = results;
  });

  models.Restaurant.find(function(err, results) {
  	data.restaurants = results;
  });

  models.ThingsToDo.find(function(err, results) {
  	data.thingstodo = results;
  	res.render('index', {hotels: data.hotels, restaurants: data.restaurants, thingstodo: results});
  });

};
