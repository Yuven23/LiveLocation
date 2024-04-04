// Initialize the map
var map = L.map("map").setView([0, 0], 13);

// Add the tile layer (OpenStreetMap)
L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// Create a marker for the live location
var marker = L.marker([0, 0]).addTo(map);

// Function to update the marker position with live location
function updateLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  marker.setLatLng([latitude, longitude]);
  map.setView([latitude, longitude], 13);
}

// Function to handle errors in retrieving live location
function error() {
  alert("Unable to retrieve your location");
}

// Request permission to access live location
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(updateLocation, error);
} else {
  alert("Geolocation is not supported by your browser");
}