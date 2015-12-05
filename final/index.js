


function displayMarkers() {

        var latlng = new google.maps.LatLng(location.lat, location.lng);
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

var location;
var titleName;

$(document).ready(function() {


$('#hurricanes').click(function (e){
iconic='hurr.png';
    createMarker();
    initMap();
    console.log(iconic);
    console.log(titleName);
            console.log(location);
});
$('#earthquakes').click(function (e){
iconic='durr.png';
    createMarker();
    initMap();
    console.log(iconic);
    console.log(titleName);
            console.log(location);

});

function getQuakes(e){
    $.ajax({
        url: "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2015-01-02",
        function(data){
        $.each(data.features, function(key, val) {
                var coord = val.geometry.coordinates;
                location = {
                    lat: coord[0],
                    lng: coord[1]
                };
                 titleName = val.properties.title;
            });
         
            console.log(titleName);
            console.log(location);
        }
    });

}   

});