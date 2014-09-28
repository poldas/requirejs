require.config({
    'paths': {
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'async': "lib/async"
    }
});

require(['jquery', 'modules/Mapster'], function($, mapster) {
    $('h1').text('It\'s working!');
    var mapCanvas = $("#map-canvas").get(0);
    var map = mapster.create(mapCanvas);
    map._on({
		elem: map.gMap,
		event: 'rightclick',
		callback: function() {
			alert('prawy klik');
		}
	});
    var marker = map.addMarker({
		lat: 37.791350,
		lng: -122.435883,
		draggable: true,
		icon: "http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/soccer.png",
		id: 1,
		content: "<div class='color'>Im open</div>",
		event: {
			name: 'click',
			callback: function() {
				alert('jestem klikniety');
			}
		}
	});
    var marker2 = map.addMarker({
		lat: 37.771350 + Math.random(),
		lng: -122.565883 + Math.random(),
		draggable: true,
		icon: "http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/soccer.png",
		id: 2,
		content: "<div class='color'>Im open</div>",
		event: {
			name: 'click',
			callback: function() {
				alert('jestem klikniety');
			}
		}
	});
    for (i=0; i< 40; i++) {
    	map.addMarker({
    		lat: 37.771350 + Math.random(),
    		lng: -122.565883 + Math.random(),
    		draggable: true,
    		icon: "http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/soccer.png",
    		id: i,
    		content: "<div class='color'>Im open</div>",
    		event: {
    			name: 'click',
    			callback: function() {
    				alert('jestem klikniety');
    			}
    		}
    	});
    }
    // usuwa połowę markerów
    map.removeBy(function(marker) {
    	return marker.id % 2;
    })
});

