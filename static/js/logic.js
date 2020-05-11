// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'

var map = L.map('map').setView([43.71, -79.38], 11);
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 19,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(map);

  var markers = L.markerClusterGroup();

  for (var i=0; i<Object.keys(data.Address).length; i++) {
    markers.addLayer(L.marker(L.latLng(data.Latitude[i],data.Longitude[i]))
    .bindPopup("<h1>" + data.Address[i] + "</h1> <hr> <a href=" + data.URL[i] + " target=\"_blank\">" + " <h3>Link " + "</h3></a>"))
    
  }

  map.addLayer(markers);
