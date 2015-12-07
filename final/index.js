var latitd;
var longtd;
var titleName;
var myDate = new Date();
var displayDate = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate());
var yesterDate = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate() - 2);
var iconBase = 'img/';
var iconic = 'durr.png';
var firstLat;
var firstLng;
var firstZ = 2;


$(document).ready(function() {
    $('#hurricanes').click(function() {
        $("#sideinfo ul").empty();
        iconic = 'hurr.png';
        getHurricanes();
        createMarker();
        initMap();
        console.log(latitd, longtd);
        console.log(titleName);
    });


    $('#earthquakes').click(function() {
        $("#sideinfo ul").empty();
        iconic = 'durr.png';
        getQuakes();
        createMarker();
        initMap();
        console.log(placeName);
    });

    $('#meteors').click(function() {
        iconic = 'murr.png';
        $("#sideinfo ul").empty();
        getMeteors();
        createMarker();
        initMap();
        console.log(latitd, longtd);
        console.log(titleName);


    });

    $('body').on('click', '.logistic', function() {
        firstLat = parseFloat(latitd);
        firstLng = parseFloat(longtd);
        firstZ = 12;
        initMap();
    });



});



function getMeteors(latlng) {

    $.ajax({
        url: "https://data.nasa.gov/resource/gh4g-9sfh.json",
        success: function(data) {
            $.each(data, function(key, val) {
                var coord = val.geolocation;

                locationD = {
                    lngd: coord.longitude,
                    latd: coord.latitude
                };
                latitd = locationD.latd;
                longtd = locationD.lngd;

                titleName = val.name;
                yearofFall = val.year;
                displayMarkers();
                var placement = latitd + ',' + longtd;
                $("#sideinfo ul").append('<li class=\"logistic\" data-lat=\"' + latitd + '\" data-long=\"' + longtd + '\">' + 'A meteorite named ' + titleName + ' fell near ' + placement + ' in the year of ' + yearofFall + '</li>');
                console.log(data);
                console.log(latlng);


            });


        }



    });



}



function getHurricanes() {

    $.ajax({
        url: "http://api.sigimera.org/v1/crises?callback=parseResponse&auth_token=-8PdNJJLLfW2oULwSW-g&type=cyclone",
        success: function(data) {
            console.log(data);
            data: '{"some":"json"}'
            crossDomain: true
            dataType: 'json'
            $.each(data.features, function(key, val) {
                var coord = val.foaf_based_near;
                locationD = {
                    latd: coord[0],
                    lngd: coord[1]
                };
                latitd = locationD.latd;
                longtd = locationD.lngd;
                titleName = val.crisis_relatedGDACSResources.crisis_severity;
                displayMarkers();
            });
        }

    });


}


function getQuakes() {
    console.log("get quakes");

    $.ajax({
        url: 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=' + yesterDate + '&endtime=' + displayDate,
        success: function(data) {
            console.log(data);

            $.each(data.features, function(key, val) {
                titleName = val.properties.title;
                var coord = val.geometry.coordinates;
                locationD = {
                    latd: coord[1],
                    lngd: coord[0]
                };
                var magnit = val.properties.mag;
                latitd = locationD.latd;
                longtd = locationD.lngd;
                var placement = latitd + ',' + longtd;
                $("#sideinfo ul").append('<a href=\"http://maps.google.com/maps?q=loc:' + placement + '\">' + '<li>' + 'Around the area of ' + placeName + ' there was an earthquake of ' + magnit + ' magnitude. ' + '</li>' + '</a>');
                displayMarkers();

            });
        }

    });

}




function displayMarkers() {
    var latlng = new google.maps.LatLng(latitd, longtd);
    geocodeLatLng(geocoder, map, latlng, placeName);
    var name = titleName;
    createMarker(latlng, name);
    console.log(latitd, longtd);
    console.log(titleName);
}

function createMarker(latlng, name) {
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        title: name,
        icon: iconBase + iconic
    });

}

function initMap() {
    firstLat = 10;
    firstLng = 10;
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), {

        center: {
            lat: parseInt(firstLat),
            lng: parseInt(firstLng)
        },
        zoom: firstZ,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true
    });


}



var placeName;

function geocodeLatLng(geocoder, map, latlng) {
    geocoder.geocode({
        'location': latlng
    }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                displayMarkers();
                console.log(results[1].formatted_address);
                placeName = (results[1].formatted_address);


            } else {
                window.alert('No results found');

            }
        } else {
            window.alert('Geocoder failed due to: ' + status);

        }
    });
}

//1. How to retrieve placeName variable from geocodeLatLng
//2. How to make zoom on links work. (Pass lat/long every time a link is clicked)
//3. What's wrong with hurricane query.