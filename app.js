// Initialize the map
mapboxgl.accessToken = 'pk.eyJ1IjoieXV2ZW4yMyIsImEiOiJjbHVsZHBrdmMwdW5hMmtuMjVlbzJ5cnlmIn0.q5e335QC1G1GZXXDx2Fm4w';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 13
});

// Listen for 'styleimagemissing' event to provide missing images dynamically
map.on('styleimagemissing', function(e) {
    // Provide missing image dynamically
    var missingImage = e.id;
    map.addImage(missingImage, missingImage);
});

// Create a marker for the live location
var marker = new mapboxgl.Marker()
    .setLngLat([0, 0]) // Set initial marker coordinates
    .addTo(map); // Add the marker to the map

// Function to update the marker position with live location
function updateLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    marker.setLngLat([longitude, latitude]); // Update marker coordinates
    map.setCenter([longitude, latitude]); // Center map to updated coordinates
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
