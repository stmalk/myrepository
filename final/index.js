var latitd;
var longtd;
var titleName;
var myDate = new Date();
var displayDate = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate());
var yesterDate = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate() - 2);
var iconBase = 'img/';
var iconic = 'durr.png';


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
        console.log(latitd, longtd);
        console.log(titleName);
        console.log(placeName);
geocodeLatLng(geocoder, map);
     
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



});



function getMeteors(latlng){

    $.ajax({
        url: "https://data.nasa.gov/resource/gh4g-9sfh.json",
        success: function(data) {                   
            $.each(data, function(key, val) {
                 var coord = val.geolocation;  

                 locationD = {          
                lngd:coord.longitude,
                latd:coord.latitude 
 };
                latitd = locationD.latd;
                longtd = locationD.lngd;

                titleName = val.name;
                yearofFall = val.year;                 
                displayMarkers();
                var placement = latitd + ',' + longtd;
                         $("#sideinfo ul").append('<a href=\"http://maps.google.com/maps?q=loc:' + placement + '\">'+'<li>' + 'A meteorite named ' + titleName + ' fell near ' +placement+ ' in the year of '  +  yearofFall+ '</li>'+ '</a>');
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


function getQuakes(latlng) {
    console.log("get quakes");
    console.log(displayDate);
    console.log(yesterDate);
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
                var magnit= val.properties.mag;
                latitd = locationD.latd;
                longtd = locationD.lngd;
                var placement = latitd + ',' + longtd;
     $("#sideinfo ul").append('<a href=\"http://maps.google.com/maps?q=loc:' + placement + '\">'+'<li>' + 'Around the area of ' + titleName + ' there was an earthquake of '  +  magnit+  ' magnitude. ' + '</li>'+ '</a>');
displayMarkers();

            });
        }

    });

}




function displayMarkers() {  
    var latlng = new google.maps.LatLng(latitd, longtd);
    geocodeLatLng(geocoder, map, latlng);
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
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -0.397,
            lng: 10.644
        },
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true
    });


}


var placeName;

function geocodeLatLng(geocoder, map, latlng) {  

  geocoder.geocode({'location':latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {     
        displayMarkers();
        placeName = (results[1].formatted_address);
        console.log(placeName);
       
      } else {
        window.alert('No results found');
        
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    
    }
  });
}