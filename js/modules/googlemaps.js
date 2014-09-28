define(function(){
	function addMap(mapCanvas) {
		var options = {
				center: new google.maps.LatLng( -34.397, 150.644 ),
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		var map = new google.maps.Map( mapCanvas, options );
	}
	return {
		addMap: addMap
	};
});