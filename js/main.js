require.config({
    'paths': {
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'async': "lib/async"
    }
});

require(['jquery', 'modules/Mapster'], function($, mapster) {
    $('h1').text('It\'s working!');
    var mapCanvas = $("#map-canvas").get(0);
    var mapa = mapster.create(mapCanvas);
    mapa._on({
		elem: mapa.gMap,
		event: 'rightclick',
		callback: function() {
			alert('prawy klik');
		}
	});
    var marker = mapa.addMarker({
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
    var marker2 = mapa.addMarker({
		lat: 37.771350,
		lng: -122.565883,
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
    mapa._removeMarker(marker2);
});

