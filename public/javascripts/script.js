$( document ).ready(function() {

	$('#hotel-submit').one('click', function() {
		var selectedHotel = $("#hotels-select option:selected");
		var li = "<li>" + selectedHotel.text() + "</li>";
		$('#hotel-list').append(li);
	});

	$('#thingtodo-submit').click(function() {
		var selectedThingToDo = $("#thingstodo-select option:selected");
		var li = "<li>" + selectedThingToDo.text() + "</li>";
		$('#thingstodo-list').append(li);
	});

	var addLimit = 0;
	$('#restaurant-submit').click(function() {
		if (addLimit >= 3) return;

		var selectedRestaurant = $("#restaurants-select option:selected");
		var li = "<li>" + selectedRestaurant.text() + "</li>";
		$('#restaurant-list').append(li);

		addLimit++;
	});

});

