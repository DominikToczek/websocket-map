function initMap() {
    let position = {lat: 50.05, lng: 19.95};
    let map = document.getElementById('map');

    let googleMap = new google.maps.Map(map, {zoom: 10, center: position});
    marker = new google.maps.Marker({position: position, map: googleMap});
}