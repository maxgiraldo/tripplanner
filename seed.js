// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js
var mongoose = require('mongoose');
models = require('./models');

var Place = models.Place,
    Hotel = models.Hotel,
    Restaurant = models.Restaurant,
    ThingsToDo = models.ThingsToDo;

console.log("Inserting data");

var place = new Place({name: "Andaz Wall Street", address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.007624]});
Hotel.create({place: [place], num_stars: 4, amenities: "Pool, Free Wi-Fi" });

var place = new Place({name: "Hotel Mulberry", address: "52 Mulberry St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715317, -73.999542]});
Hotel.create({place: [place], num_stars: 4.5, amenities: "Free Wi-Fi" });

var place = new Place({name: "The Ritz-Carlton New York, Battery Park", address: "Two West Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705417, -74.017241]});
Hotel.create({place: [place], num_stars: 4.5, amenities: "24 hour Gym, Paid Wi-Fi" });

var place = new Place({name: "Wall Street Inn", address: "9 S William St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.704581, -74.010273]});
Hotel.create({place: [place], num_stars: 4, amenities: "Free Wi-Fi" });

var place = new Place({name: "Smyth TriBeCa", address: "85 West Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715076, -74.009301]});
Hotel.create({place: [place], num_stars: 3.5, amenities: "24 hour Gym" });

var place = new Place({name: "Double Tree", address: "8 Stone St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.703961, -74.012350]});
Hotel.create({place: [place], num_stars: 3.5, amenities: "24 hour Gym" });

var place = new Place({name: "Hotel 91", address: "91 E Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.713427, -73.993624]});
Hotel.create({place: [place], num_stars: 3.5, amenities: "Free Wi-Fi" });

var place = new Place({name: "Conrad New York Hotel", address: "102 N End Ave", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714985, -74.015841]});
Hotel.create({place: [place], num_stars: 3.5, amenities: "Paid Wi-Fi, Dogs Allowed" });

var place = new Place({name: "Millenium Hilton Hotel", address: "55 Church St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.711597, -74.010392]});
Hotel.create({place: [place], num_stars: 3.5, amenities: "Paid Wi-Fi" });

var place = new Place({name: "US Pacific Hotel", address: "106 Bowery", city: "New York", state: "NY", phone: "123-456-7890", location: [40.717873, -73.995231]});
Hotel.create({place: [place], num_stars: 2, amenities: "Accepts Credit Cards" });

var place = new Place({name: "Gild Hall, a Thompson Hotel", address: "15 Gold Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.707894, -74.007108]});
Hotel.create({place: [place], num_stars: 4, amenities: "Paid Wi-Fi" });

var place = new Place({name: "W New York", address: "123 Washington Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709102, -74.013997]});
Hotel.create({place: [place], num_stars: 3.5, amenities: "Pool, 24 hour Gym, Paid Wi-Fi" });

var place = new Place({name: "New York Marriott Downtown", address: "85 W St at Albany St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.731131, -73.989568]});
Hotel.create({place: [place], num_stars: 3.5, amenities: "24 hour Gym, Paid Wi-Fi" });

var place = new Place({name: "Cosmopolitan Hotel", address: "95 W Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715681, -74.008922]});
Hotel.create({place: [place], num_stars: 3.5, amenities: "Free Wif-Fi" });

var place = new Place({name: "Club Quarters", address: "140 Washington St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709630, -74.013940]});
Hotel.create({place: [place], num_stars: 4, amenities: "Free Wif-Fi" });



var place = new Place({name: "Bouley", address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.013940]});
Restaurant.create({place: [place], cuisine: "French", price: 4});

var place = new Place({name: "Marc Forgione", address: "134 Reade St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716526, -74.009567]});
Restaurant.create({place: [place], cuisine: "Seafood", price: 3});

var place = new Place({name: "Tamarind", address: "99 Hudson St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.718977, -74.008929]});
Restaurant.create({place: [place], cuisine: "Indian", price: 3});

var place = new Place({name: "Hop Lee Restaurant", address: "16 Mott St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714230, -73.998509]});
Restaurant.create({place: [place], cuisine: "Chinese", price: 2});

var place = new Place({name: "Jungsik", address: "2 Harrison St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.718679, -74.008900]});
Restaurant.create({place: [place], cuisine: "Korean", price: 4});

var place = new Place({name: "The Capital Grille", address: "120 Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.708475, -74.010846]});
Restaurant.create({place: [place], cuisine: "Steakhouses, American", price: 4});

var place = new Place({name: "Pylos", address: "128 E 7th St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.726096, -73.984152]});
Restaurant.create({place: [place], cuisine: "Greek", price: 3});

var place = new Place({name: "Joe's Shanghai", address: "9 Pell St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714601, -73.997761]});
Restaurant.create({place: [place], cuisine: "Shanghainese, Dim Sum", price: 2});

var place = new Place({name: "Cafe Katja", address: "79 Orchard St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.717719, -73.990565]});
Restaurant.create({place: [place], cuisine: "German, Austrian", price: 2});

var place = new Place({name: "Rosanjin", address: "141 Duane St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716403, -74.007724]});
Restaurant.create({place: [place], cuisine: "Japanese", price: 3});

var place = new Place({name: "Kittichai", address: "60 Thompson St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.724014, -74.003242]});
Restaurant.create({place: [place], cuisine: "Thai", price: 4});

var place = new Place({name: "Bianca Restaurant", address: "5 Bleecker St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.725495, -73.992662]});
Restaurant.create({place: [place], cuisine: "Italian", price: 2});

var place = new Place({name: "Rayuela", address: "165 Allen St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.721266, -73.989756]});
Restaurant.create({place: [place], cuisine: "Spanish, Latin American", price: 3});

var place = new Place({name: "Mas Farmhouse", address: "39 Downing St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729269, -74.003875]});
Restaurant.create({place: [place], cuisine: "New American, French", price: 4});

var place = new Place({name: "Xe Lua", address: "86 Mulberry St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716544, -73.998626]});
Restaurant.create({place: [place], cuisine: "Vietnamese", price: 1});



var place = new Place({name: "Mahayana Temple Buddhist Association", address: "133 Canal St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716291, -73.995315]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "South Street Seaport", address: "19 Fulton St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.707119, -74.003602]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Ground Zero", address: "1 Liberty Plz Lbby 2", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709329, -74.013120]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "National September 11th Memorial & Museum", address: "1 Albany St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709189, -74.013157]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Battery Park", address: "State St & Battery Pl", city: "New York", state: "NY", phone: "123-456-7890", location: [40.704531, -74.014334]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Staten Island Ferry Whitehall Terminal", address: "4 S St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729125, -73.989650]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Chinatown Ice Cream Factory", address: "65 Bayard St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715323, -73.998190]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Blue Man Group", address: "434 Lafayette St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729373, -73.992104]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Scott's Pizza Tours", address: "244 5th Ave", city: "New York", state: "NY", phone: "123-456-7890", location: [40.744610, -73.987708]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Apple Store", address: "103 Prince St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.724918, -73.999144]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Brooklyn Bridge Park", address: "Pier 1", city: "New York", state: "NY", phone: "123-456-7890", location: [40.702225, -73.996563]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Ellis Island Immigration Museum", address: "Ellis Island", city: "New York", state: "NY", phone: "123-456-7890", location: [40.699297, -74.040317]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Washington Square Park", address: "1 Washington Sq E", city: "New York", state: "NY", phone: "123-456-7890", location: [40.732204, -73.998649]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Union Square Holiday Market", address: "Union Sq & W 14th St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.733615, -73.987995]});
ThingsToDo.create({place: [place], age_range: "All" });

var place = new Place({name: "Strand Bookstore", address: "828 Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.733274, -73.990870]});
ThingsToDo.create({place: [place], age_range: "All" });

console.log("Finished inserting data");
console.log("Control-C to quit");
