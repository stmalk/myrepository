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

var placeName;
var coordIds = [];
var placement;

$(document).ready(function() {

var firstImage = 'url(img/1.jpg)';
var secondImage = 'url(img/2.jpg)';
var thirdImage = 'url(img/3.jpg)';


$('.topback').css("background-image", firstImage);

    $('#hurricanes').click(function() {
        $("#sideinfo ul").empty();
        iconic = 'hurr.png';
        getHurricanes();
        createMarker();
        initMap();       
        $('.topback').fadeTo( "fast" , 0.0, function(){
            $('.topback').css("background-image", firstImage);
$('.topback').fadeTo( "slow" , 1.0);
          
        });
    });


    $('#earthquakes').click(function() {
        $("#sideinfo ul").empty();
        iconic = 'durr.png';
        getQuakes();
        createMarker();
        initMap();
        console.log(placeName);
        $('.topback').fadeTo( "fast" , 0.0, function(){
            $('.topback').css("background-image", secondImage);
$('.topback').fadeTo( "slow" , 1.0);
        });
    });

    $('#meteors').click(function() {
        iconic = 'murr.png';
        $("#sideinfo ul").empty();
        getMeteors();
        createMarker();
        initMap();
        console.log(latitd, longtd);
        console.log(titleName);

        $('.topback').fadeTo( "fast" , 0.0, function(){
            $('.topback').css("background-image", thirdImage);
$('.topback').fadeTo( "slow" , 1.0);
        });
    });

    $('body').on('click', '.logistic', function(e) {
        
        firstLat = parseFloat(latitd);
        firstLng = parseFloat(longtd);
        firstZ = 12;
        initMap();
        console.log(e);
        coordIds[liIndex];
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

                

                coordIds.push(placement);

                latitd = locationD.latd;
                longtd = locationD.lngd;



                titleName = val.name;
                yearofFall = val.year;
                displayMarkers();
                placement = latitd + ',' + longtd;
                $("#sideinfo ul").append('<li class=\"logistic\" data-lat=\"' + latitd + '\" data-long=\"' + longtd + '\">' + 'A meteorite fell near ' + titleName + ' in the year of ' + yearofFall + '</li>');
                console.log(data);
                console.log(latlng);

                // geocodeLatLng(g,m,ll, function(place){
                //     console.log(place);
                //     placeName = place;
                // });
            });


        }



    });



}



function getHurricanes() {

    $.ajax({
        url: "http://api.sigimera.org/v1/crises?callback=parseResponse&auth_token=-8PdNJJLLfW2oULwSW-g&type=cyclone",
        type: "GET",
        crossDomain: true,    // used to prevent cross domain issues
        dataType: 'jsonp',    // used to prevent cross domain issues
        success: function(data) {
            console.log(data);
            $.each(data, function(key, val) {
                var coord = val.foaf_based_near;
                locationD = {
                    latd: coord[1],
                    lngd: coord[0]
                };
                 var countryOne = val.gn_parentCountry[0];
                var countryTwo = val.gn_parentCountry[1];


var timeCyclone = val.dc_date;
                latitd = locationD.latd;
                longtd = locationD.lngd;
                titleName = val.crisis_severity;
                displayMarkers();
                placement = latitd + ',' + longtd;
                $("#sideinfo ul").append('<li>' + 'A ' + titleName + ' was noticed near the country of ' + countryOne + ' at the time of  ' + timeCyclone +  '</li>');
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
                placement = latitd + ',' + longtd;
                $("#sideinfo ul").append('<li>' + 'Around the area of ' + titleName + ' there was an earthquake of ' + magnit + ' magnitude. ' + '</li>');
                displayMarkers();
              

            });
        }

    });

}




function displayMarkers() {
    console.log("display markers");
    var latlng = new google.maps.LatLng(latitd, longtd);

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



//1. How to retrieve placeName variable from geocodeLatLng
//2. How to make zoom on links work. (Pass lat/long every time a link is clicked)
//3. What's wrong with hurricane query.

