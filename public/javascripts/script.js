// db.restaurants.find({"_id": ObjectId("52febc83789c0f01039fa3a5")})

$( document ).ready(function() {

// Maps Initialization
	var myLatlng, mapOptions, map;

	function initialize() {
      	myLatlng = new google.maps.LatLng(40.736046, -73.990358);
        mapOptions = {
          center: myLatlng,
          zoom: 12,
          center: myLatlng
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }

      google.maps.event.addDomListener(window, 'load', initialize);

	var addMarker = function (data) {
		var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(data.place[0].location[0],data.place[0].location[1]),
	    map: map,
	    title: data.place[0].name
		});

	}
// End maps


// Add items to day plan, pin locations on map
	$('#hotel-submit').one('click', function() {
		var selectedHotel = $("#hotels-select option:selected");
		var hotelId = selectedHotel.val();
		var hotelData = _.findWhere(all_hotels, {_id: hotelId});
		addMarker(hotelData);

		var li = "<li>" + selectedHotel.text() + "</li>";
		$('#hotel-list').append(li);

		var deleteItem = "<a href='#' class='deleteItem'>Delete</a>";
		$('#hotel-list > li').append(deleteItem);

		$('a.deleteItem').click(function(event) {
			$( event.target ).closest( 'li' ).remove();
		});

	});

	$('#thingtodo-submit').click(function() {
		var selectedThingToDo = $("#thingstodo-select option:selected");
		var thingId = selectedThingToDo.val();
		var thingData = _.findWhere(all_things_to_do, {_id: thingId});
		addMarker(thingData);

		var deleteItem = "<a class='deleteItem'>Delete</a>";
		var li = "<li>" + selectedThingToDo.text() + deleteItem + "</li>";
		$('#thingstodo-list').append(li);

		$('a.deleteItem').click(function(event) {
			$( event.target ).closest( 'li' ).remove();
		});
	});

	var restaurantAddLimit = 0;
	$('#restaurant-submit').click(function() {
		if (restaurantAddLimit >= 3) return;

		var selectedRestaurant = $("#restaurants-select option:selected");
		var restaurantId = selectedRestaurant.val();
		var restaurantData = _.findWhere(all_restaurants, {_id: restaurantId});
		addMarker(restaurantData);

		var deleteItem = "<a class='deleteItem'>Delete</a>";
		var li = "<li>" + selectedRestaurant.text() + deleteItem + "</li>";
		$('#restaurant-list').append(li);

		$('a.deleteItem').click(function(event) {
			$( event.target ).closest( 'li' ).remove();
		});

		addLimit++;
	});

	$('#add-day').click(function() {
		var previousElement = $('#add-day').prev();
		var newValue = previousElement.val();
		newValue++;

		var newButton = "<button type='button' class='btn btn-default' value=" + newValue + ">" + "Day" + newValue + "</button>";
		$(previousElement).after(newButton);
	});

});

