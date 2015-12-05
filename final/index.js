


function displayMarkers() {

        var latlng = new google.maps.LatLng(latitd,longtd);
        var name = titleName;

        createMarker(latlng, name);


    }



var iconBase = 'img/';
var iconic = 'durr.png';
function createMarker(latlng, name) {
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        title: name,
        icon: iconBase + iconic
    });

}




function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -0.397,
            lng: 10.644
        },
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true
    });
    displayMarkers();

}

var latitd;
var longtd;
var titleName;

$(document).ready(function() {


$('#hurricanes').click(function (){
iconic='hurr.png';


function getHurricanes(){

   $.ajax({
        url: "http://api.wunderground.com/api/c49df59c18cc3862/currenthurricane/view.json",
        function(data){
        $.each(data.features, function(key, val) {
                var coord = val.Current;
                locationD = {
                    latd: coord.lat,
                    lngd: coord.lon
                };

                latitd = locationD.latd;
                longtd= locationD.lngd;
                 titleName = val.stormInfo.stormName;                          
            });
        }
 
    });


}

createMarker();
initMap();

console.log(latitd,longtd);
console.log(titleName); 
});




$('#earthquakes').click(function (){
iconic='durr.png';


function getQuakes(){
    $.ajax({
        url: "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02",
        function(data){
        $.each(data.features, function(key, val) {
                var coord = val.geometry.coordinates;
                locationD = {
                    latd: coord[0],
                    lngd: coord[1]
                };
                latitd = locationD.latd;
                longtd= locationD.lngd;
                 titleName = val.properties.title;
                         
            }); 
        }

    });

}   

createMarker();
initMap();

console.log(latitd,longtd);
console.log(titleName);

});





});