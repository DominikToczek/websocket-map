// Funkcja tworząca mapę oraz znacznik
function initMap() {
    let position = {lat: lat, lng: lng};
    let map = document.getElementById('map');

    let googleMap = new google.maps.Map(map, {zoom: 5, center: position});
    marker = new google.maps.Marker({position: position, map: googleMap});
}

let lat = 50.05;
let lng = 19.95;
// Funkcja zmieniająca pozycję znacznika mapy za pomocą "strzałek" na klawiaturze
document.addEventListener('keydown', (e) => {
    switch(e.keyCode)
    {
        case 38:
            lat += 0.05;
            break;
        case 40:
            lat -= 0.05;
            break;
        case 37:
            lng -= 0.05;
            break;
        case 39:
            lng += 0.05;
            break;
    }

    marker.setPosition({lat: lat, lng: lng});
})