define(['async!http://maps.google.com/maps/api/js?sensor=false', 'modules/List'], function(g, List) {
	// moduł Mapster
	var Mapster = (function() {
		// domyślne opcje
		var MAP_OPTIONS = {
			disableDefaultUi: false,
			scrollWheel: false,
			draggable: true,
			center: new google.maps.LatLng( 37.791350, -122.435883 ),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.HYBRID,
			maxZoom: 15,
			minZoom: 4
		};
		// konstruktor, ustawia mapę
		function Mapster(elem, opts) {
			opts = opts || MAP_OPTIONS;
			this.gMap = new google.maps.Map(elem, opts);
			this.markers = List.create();
		};
		
		Mapster.prototype = {
			// dodaje event
			_on: function(opts) {
				var self = this;
				google.maps.event.addListener(opts.elem, opts.event, function(e) {
					opts.callback.call(self, e);
				});
			},
			// dodaje marker
			addMarker: function(opts) {
				var marker;
				if(opts.lat && opts.lng) {
					opts.position = {
						lat: opts.lat,
						lng: opts.lng,
					}
				}
				marker = this._createMarker(opts);
//				this._addMarker(marker);
				this.markers.add(marker);
				if (opts.event) {
					this._on({
						elem: marker,
						event: opts.event.name,
						callback: opts.event.callback
					});
				}
				if (opts.content) {
					this._on({
						elem: marker,
						event: 'click',
						callback: function() {
						    var infoWIn = new google.maps.InfoWindow({
						    	content: opts.content
						    });
						    infoWIn.open(this.gMap, marker);
						}
					});
				}
				return marker;
			},
			findBy: function(callback) {
				return this.markers.find(callback);
			},
			removeBy: function(callback) {
            	this.markers.find(callback, function(markers) {
            		markers.forEach(function(marker){
            			marker.setMap(null);
            		});
                });
            },
			_addMarker: function(marker) {
				this.markers.push(marker);
			},
			_removeMarker: function(marker) {
				var indexOf = this.markers.indexOf(marker);
				if(indexOf !== -1) {
					this.markers.splice(indexOf, 1);
					marker.setMap(null);
				}
			},
			// tworzy obiekt markera
			_createMarker: function(opts) {
				opts.map = this.gMap;
				return new google.maps.Marker(opts);
			}
		};
		return Mapster;
	}());
	
	// tworzy obiekt Mapstera
	Mapster.create = function(elem, opts) {
		return new Mapster(elem, opts);
	}
	return Mapster;
});