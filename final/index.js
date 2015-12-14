var latitd;
var longtd;
var titleName;
var myDate = new Date();
var displayDate = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate());
var yesterDate = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate() - 2);
var iconBase = 'img/';
var iconQuakes = ['durr1.svg', 'durr2.svg', 'durr3.svg', 'durr4.svg', 'durr5.svg', 'durr6.svg'];
var iconMeteorites = ['murrone.svg', 'murrtwo.svg', 'murrthree.svg', 'murrfour.svg', 'murrfive.svg'];
var iconHurricanes = ['hurr1.svg', 'hurr2.svg', 'hurr3.svg', 'hurr4.svg', 'hurr5.svg', 'hurr6.svg'];
var iconic;
var firstLat;
var firstLng;
var firstZ = 2;
var metMass;
var displayMass;
var placement;
var latlng;
var gmarkers = []; 
var infobox;
var contentString;
    var firstImage = 'url(img/1.png)';
    var secondImage = 'url(img/2.png)';
    var thirdImage = 'url(img/3.png)';


$(document).ready(function() {



    $('.topback').css("background-image", firstImage);

    $('#hurricanes').click(function() {
        $("#sideinfo ul").empty(function(){
createMarker();
 

      
        });   initMap();        
            getHurricanes();        
        $('.topback').fadeTo("fast", 0.0, function() {
            $('.topback').css("background-image", firstImage);
            $('.topback').fadeTo("slow", 1.0);

        });
    });


    $('#earthquakes').click(function() {
        $("#sideinfo ul").empty(function(){
          createMarker(); 

        }); 
     getQuakes();
        initMap();
       
        $('.topback').fadeTo("fast", 0.0, function() {
            $('.topback').css("background-image", secondImage);
            $('.topback').fadeTo("slow", 1.0);
        });
    });

    $('#meteors').click(function() {

        $("#sideinfo ul").empty(function(){
 createMarker();  

        });initMap();
           getMeteors(); 
    
        $('.topback').fadeTo("fast", 0.0, function() {
            $('.topback').css("background-image", thirdImage);
            $('.topback').fadeTo("slow", 1.0);
        });
    });

});



function getMeteors(latlng) {

    $.ajax({
        url: "https://data.nasa.gov/resource/gh4g-9sfh.json",
        success: function(data) {
            $.each(data, function(key, val) {
                latitd = val.reclat;
                longtd = val.reclong;

                titleName = val.name;
                metMass = parseInt(val.mass);
                yearofFall = val.year;
                displayMass = metMass;
                var dateMoment = moment.utc(yearofFall).format('YYYY'); 
          var styleColor;
                placement = latitd + ',' + longtd;

            if (metMass <= 2000) {

                    iconic = iconMeteorites[0];
                    styleColor = '#ACC02A';
                } else if ((metMass >= 2001) && (metMass <= 10000)) {
                    iconic = iconMeteorites[1];
                    styleColor = '#DBBE32';
                } else if ((metMass >= 10001) && (metMass <= 50000)) {
                    iconic = iconMeteorites[2];
                    styleColor = '#E39B23';
                } else if ((metMass >= 50001) && (metMass <= 5000000000)) {
                    iconic = iconMeteorites[3];
                    styleColor = '#B72026';
                } else if(isNaN(parseFloat(metMass))) { 
                    iconic = iconMeteorites[4];
                    styleColor = '#9A928D';
                    displayMass = 'nobody knows how many';
                }



                $("#sideinfo ul").append('<a href=\"https://www.google.com/maps/place/' +placement+ '/@' +placement+ ',7.5z\" target=blank><li  style=\"background:' +styleColor+ '!important;\" class=\"logistic\" data-lat=\"' + latitd + '\" data-long=\"' + longtd + '\">' + 'A meteorite named ' + titleName + ' with a mass of ' + displayMass + ' grams fell here in ' + dateMoment + '</li></a>');
                     contentString = '<a href=\"https://www.google.com/maps/place/' +placement+ '/@' +placement+ ',7.5z\" target=blank><span  style=\"background:' +styleColor+ '!important;\" class=\"popup\" data-lat=\"' + latitd + '\" data-long=\"' + longtd + '\">' + 'A meteorite named ' + titleName + ' with a mass of ' + displayMass + ' grams fell here in ' + dateMoment + '</span></a>';
                   displayMarkers(); 


            });
        }
    });
}


function getHurricanes() {

    $.ajax({
        url: "http://api.sigimera.org/v1/crises?callback=parseResponse&auth_token=-8PdNJJLLfW2oULwSW-g&type=cyclone",
        type: "GET",
        crossDomain: true, // used to prevent cross domain issues
        dataType: 'jsonp', // used to prevent cross domain issues
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
                var windSpeed = parseInt(val.crisis_severity_hash.value);
                
 var styleColor;

                var timeCyclone = val.dc_date;
                var dateMoment = moment.utc(timeCyclone).format('MMMM Do YYYY');
                latitd = locationD.latd;
                longtd = locationD.lngd;
                titleName = val.crisis_severity;
                placement = latitd + ',' + longtd;

  

                


                if ((windSpeed >= 0) && (windSpeed <= 118)) {
                    iconic = iconHurricanes[0];
                    styleColor = '#85C559';
                } else if ((windSpeed >= 119) && (windSpeed <= 153)) {
                    iconic = iconHurricanes[1];
                     styleColor = '#BBC128';
                } else if ((windSpeed >= 154) && (windSpeed <= 177)) {
                    iconic = iconHurricanes[2];
                     styleColor = '#CDBE1A';
                } else if ((windSpeed >= 178) && (windSpeed <= 208)) {
                    iconic = iconHurricanes[3];
                     styleColor = '#F9A145';
                } else if ((windSpeed >= 209) && (windSpeed <= 251)) {
                    iconic = iconHurricanes[4];
                     styleColor = '#DE6134';
                } else if (windSpeed >= 252) {
                    iconic = iconHurricanes[5];
                     styleColor = '#A61B19';
                }

$("#sideinfo ul").append('<a href=\"https://www.google.com/maps/place/' +placement+ '/@' +placement+ ',7.5z\" target=blank><li style=\"background:' +styleColor+ '!important;\" class=\"logistic\"> ' + 'A ' + titleName + ' was noticed near ' + countryOne + ' on ' + dateMoment + '</li></a>');
contentString = '<a href=\"https://www.google.com/maps/place/' +placement+ '/@' +placement+ ',7.5z\" target=blank><span style=\"background:' +styleColor+ '!important;\" class=\"popup\"> ' + 'A ' + titleName + ' was noticed near ' + countryOne + ' on ' + dateMoment + '</span></a>';

                   displayMarkers(); 

                console.log(titleName);
                console.log(windSpeed);

            });
        }

    });


}


function getQuakes() {


    $.ajax({
        url:"http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=" + yesterDate + '&endtime=' + displayDate,
        success: function(data) {


            $.each(data.features, function(key, val) {
                titleName = val.properties.place;
                var coord = val.geometry.coordinates;
                locationD = {
                    latd: coord[1],
                    lngd: coord[0]
                };




var quakeTime = val.properties.time;
 var dateMoment = moment(quakeTime).format('MMMM Do YYYY'); 
                var magnit = val.properties.mag;
 var styleColor;
                if (magnit <= 3.9) {
                    iconic = iconQuakes[0];
                    styleColor = '#88C873';
                } else if (magnit <= 4.9 && magnit >= 4) {
                    iconic = iconQuakes[1];
                    styleColor = '#B6D554';
                } else if (magnit <= 5.9 && magnit >= 5) {
                    iconic = iconQuakes[2];
                    styleColor = '#B2A920';
                } else if (magnit <= 6.9 && magnit >= 6) {
                    iconic = iconQuakes[3];
                    styleColor = '#D19552';
                } else if (magnit <= 7.9 && magnit >= 7) {
                    iconic = iconQuakes[4];
                    styleColor = '#DE6134';
                } else if (magnit >= 8) {
                    iconic = iconQuakes[5];
                    styleColor = '#A61B19';
                }
                latitd = locationD.latd;
                longtd = locationD.lngd;
                placement = latitd + ',' + longtd;
                $("#sideinfo ul").append('<a href=\"https://www.google.com/maps/place/' +placement+ '/@' +placement+ ',7.5z\" target=blank><li style=\"background:' +styleColor+ '!important;\" class=\"logistic\"> ' + 'On ' + dateMoment + ' around the area of ' + titleName + ' there was an earthquake of magnitude'  + magnit +  '.</li></a>');
                         console.log(titleName);
console.log(locationD);

contentString = '<a href=\"https://www.google.com/maps/place/' +placement+ '/@' +placement+ ',7.5z\" target=blank><span style=\"background:' +styleColor+ '!important;\" class=\"popup\"> ' + 'On ' + dateMoment + ' around the area of ' + titleName + ' there was an earthquake of  magnitude '  + magnit +  '.</span></a>';

  displayMarkers(); 




            });
        }

    });

}





function displayMarkers() {
    latlng = new google.maps.LatLng(latitd, longtd);
    var name = titleName;
    createMarker(latlng, name);        

}

function createMarker(latlng, name) {
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        title: name,
        icon: iconBase + iconic
    });


  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });






}

function initMap() {
    firstLat = 10;
    firstLng = 10;
 
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