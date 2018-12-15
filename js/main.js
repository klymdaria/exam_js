;
(function ($) {
	"use strict";

	const bestSlider = $('.ba-header-slider');

	bestSlider.slick({
		adaptiveHeight: true,
		fade: false,
		infinite: false,
		slide: '.ba-header-slider-block',
		prevArrow: '.ba-best-slider-prev',
		nextArrow: '.ba-best-slider-next',
		dots: true
	});

	const newsSlider = $('.ba-news-slider');
	newsSlider.slick({
		slide: '.ba-news-card',
		prevArrow: '.ba-hot-slider-prev',
		nextArrow: '.ba-hot-slider-next',
		adaptiveHeight: true,
		fade: false,
		slidesToShow: 3,
		slidesToScrol: 1,
		dots: true
	});

})(jQuery);

function initMap() {
	// The location of Uluru
	const centerCoords = {
		lat: 41.36444153,
		lng: -73.9495823
	};

	const baMap = new google.maps.Map(
		document.querySelector('.ba-map'), {
			zoom: 10,
			center: centerCoords,
			disableDefaultUI: true,
			styles: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				},
				{
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#bdbdbd"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [{
						"color": "#eeeeee"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e5e5e5"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [{
						"color": "#ffffff"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dadada"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e5e5e5"
					}]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [{
						"color": "#eeeeee"
					}]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#c9c9c9"
					}]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				}
			]

			

		});

		const marker = new google.maps.Marker({
			position: centerCoords ,
			map: baMap,
			animation: google.maps.Animation.DROP,
			icon: "../img/marker.png"
		});
	}