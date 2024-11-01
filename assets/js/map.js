var map = L.map("map").setView([-22.721450, -47.348453], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

L.marker([-22.721450, -47.348453]).addTo(map).bindPopup("Agropet dias").openPopup();
