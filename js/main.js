require.config({
    'paths': {
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'async': "lib/async"
    }
});

require(['jquery', 'async!http://maps.google.com/maps/api/js?sensor=false', 'modules/googlemaps'], function($,m,mapa) {
    $('h1').text('It\'s working!');
    var mapCanvas = $("#map-canvas").get(0);
    mapa.addMap(mapCanvas); 
});

