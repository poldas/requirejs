require.config({
    'paths': {
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'async': "lib/async"
    }
});

require(['jquery', 'modules/googlemaps'], function($, mapster) {
    $('h1').text('It\'s working!');
    var mapCanvas = $("#map-canvas").get(0);
    var mapa = mapster.create(mapCanvas);
});

