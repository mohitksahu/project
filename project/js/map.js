// Initialize the map
var map = new mappls.Map('map', {
    center: { lat: 20.249827472763503, lng: 85.80028702262393 },
    mapType: 'satellite',
    zoom: 16,
});

 // Add marker to the map
var marker = new mappls.Marker({
    map: map,
    position: { lat: 20.249827472763503, lng: 85.80028702262393 },
    icon: 'https://img.icons8.com/?size=256&id=13800&format=png', // Custom marker image
});
