define(['async!http://maps.google.com/maps/api/js?sensor=false', 'modules/List', 'lib/markerclusterer'], function(g, List, MarkerCluster) {
	// moduł Mapster
	var Mapster = (function() {
		// domyślne opcje
		var MAP_OPTIONS = {
			disableDefaultUi: false,
			scrollWheel: false,
			draggable: true,
			center: new google.maps.LatLng( 37.791350, -122.435883 ),
			zoom: 10,
			cluster: {
		      options: {
		        styles: [{
		          url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png',
		          height: 56,
		          width: 55,
		          textColor: '#F00',
		          textSize: 18
		        },{
		          url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m1.png',
		          height: 56,
		          width: 55
		        }]
		      }
		    },
			mapTypeId: google.maps.MapTypeId.HYBRID,
			maxZoom: 15,
			minZoom: 4
		};
		// konstruktor, ustawia mapę
		function Mapster(elem, opts) {
			opts = opts || MAP_OPTIONS;
			this.gMap = new google.maps.Map(elem, opts);
			this.markers = List.create();
			if(opts.cluster) {
				this.markerCluster = new MarkerCluster(this.gMap, [], opts.cluster.options);
			}
		};
		
		Mapster.prototype = {
			zoom: function(level) {
		        if (level) {
		          this.gMap.setZoom(level);
		        } else {
		          return this.gMap.getZoom();
		        }
		      },
			// dodaje event
			_on: function(opts) {
				var self = this;
				google.maps.event.addListener(opts.elem, opts.event, function(e) {
					opts.callback.call(self, e);
				});
			},
			_attachEvents: function(obj, events) {
				var self = this;
				events.forEach(function(event) {
					self._on({
						elem: obj,
						event: event.name,
						callback: event.callback
					});
				});
			},
			// dodaje marker
			addMarker: function(opts) {
				var marker,
					self = this;
				if(opts.lat && opts.lng) {
					opts.position = {
						lat: opts.lat,
						lng: opts.lng,
					}
				}
				marker = this._createMarker(opts);
				this._addMarker(marker);
				if (this.markerCluster) {
					this.markerCluster.addMarker(marker);
				}
				if (opts.events) {
					this._attachEvents(marker, opts.events);
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
				var self = this;
				self.markers.find(callback, function(markers) {
            		markers.forEach(function(marker){
            			if (self.markerCluster) {
        					self.markerCluster.removeMarker(marker);
        				} else {
        					marker.setMap(null);
        				}
            		});
                });
            },
			_addMarker: function(marker) {
				this.markers.add(marker);
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