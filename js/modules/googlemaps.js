define(['async!http://maps.google.com/maps/api/js?sensor=false'], function(){
	// moduł Mapster
	var Mapster = (function() {
		// domyślne opcje
		var MAP_OPTIONS = {
			disableDefaultUi: false,
			scrollWheel: false,
			draggable: true,
			center: new google.maps.LatLng( -34.397, 150.644 ),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.HYBRID,
			maxZoom: 15,
			minZoom: 4
		};
		// konstruktor, ustawia mapę
		function Mapster(elem, opts) {
			opts = opts || MAP_OPTIONS;
			this.gMap = new google.maps.Map(elem, opts);
		};
		return Mapster;
	}());
	Mapster.create = function(elem, opts) {
		return new Mapster(elem, opts);
	}
	return Mapster;
});