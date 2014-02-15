var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Place, Hotel, ThingsToDo, Restaurant, Day;
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number, Number]
});

var hotelSchema = new Schema({
	place: [placeSchema],
	num_stars: Number,
	amenities: String
});

var thingsToDoSchema = new Schema({
	place: [placeSchema],
	age_range: String
});

var restaurantSchema = new Schema({
	place: [placeSchema],
	cuisine: String,
	price: Number
});

var daySchema = new Schema({
	hotel: String,
	restaurant: String,
	thingsToDo: String
})



Place      = mongoose.model('Place', placeSchema);
Hotel      = mongoose.model('Hotel', hotelSchema);
ThingsToDo = mongoose.model('ThingsToDo', thingsToDoSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);
Day        = mongoose.model('Day', daySchema);

module.exports = {
	"Place": Place,
	"Hotel": Hotel,
	"ThingsToDo": ThingsToDo,
	"Restaurant": Restaurant,
	"Day": Day
};
