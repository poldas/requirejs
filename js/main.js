require.config({
    'paths': {
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'jqueryui': 'lib/jqueryui.1.11.1',
        'jqueryui.mapster': 'lib/jqueryui.mapster',
        'async': "lib/async"
    },
    shim: {
    	'jqueryui': ['jquery']
    }
});

require(['jquery', 'modules/Mapster','jqueryui.mapster'], function($, mapster, mplugin) {
    $('h1').text('It\'s working!');
//    var mapCanvas = $("#map-canvas").get(0);
//    var map = mapster.create(mapCanvas);
//    map._on({
//		elem: map.gMap,
//		event: 'rightclick',
//		callback: function() {
//			alert('prawy klik');
//		}
//	});
//    var marker = map.addMarker({
//		lat: 37.791350,
//		lng: -122.435883,
//		draggable: true,
//		icon: "http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/soccer.png",
//		id: 1,
//		content: "<div class='color'>Im open</div>",
//		events: [{
//			name: 'click',
//			callback: function() {
//				alert('jestem klikniety');
//			}
//		},
//		{
//			name: 'dragend',
//			callback: function() {
//				alert('jestem dragend');
//			}
//		}]
//	});
//    var marker2 = map.addMarker({
//		lat: 37.771350 + Math.random(),
//		lng: -122.565883 + Math.random(),
//		draggable: true,
//		icon: "http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/soccer.png",
//		id: 2,
//		content: "<div class='color'>Im open</div>",
//		events: [{
//			name: 'click',
//			callback: function(e) {
//				alert('jestem klikniety');
//			}
//		},
//		{
//			name: 'dragend',
//			callback: function(e) {
//				alert('jestem dragend');
//			}
//		}]
//	});
//    for (i=0; i< 40; i++) {
//    	map.addMarker({
//    		lat: 37.771350 + Math.random(),
//    		lng: -122.565883 + Math.random(),
//    		draggable: true,
//    		icon: "http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-ff8a22/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/soccer.png",
//    		id: i,
//    		content: "<div class='color'>Im open</div>",
//    		events: [{
//    			name: 'click',
//    			callback: function() {
//    				alert('jestem klikniety nr: ' + i);
//    			}
//    		},
//    		{
//    			name: 'dragend',
//    			callback: function() {
//    				alert('jestem dragend');
//    			}
//    		}]
//    	});
//    }
    // usuwa połowę markerów
//    map.removeBy(function(marker) {
//    	return marker.id % 2;
//    })
    $("#map-canvas").mapster();
    $("#map-canvas2").mapster();
});
