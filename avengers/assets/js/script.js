const map = L.map("map").setView([51.505, -0.09], 1.5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const markers = stones.map((stone) => {
  return L.marker(stone.loc, { icon: stone.icon })
    .addTo(map)
    .bindPopup(stone.name);
});

let thanosLocation = [10.7, 137];
let thanosTargetLocation = [10.7, 137];
let thanosTargetStone = 0;

const thanos = L.marker(thanosLocation, { icon: thanosIcon })
  .addTo(map)
  .bindPopup("Thanos");

function getRandomInRange(from, to) {
  return (Math.random() * (to - from) + from).toFixed(3) * 1;
}

checkRangeDistance = () => {
  let dangerStone = 0;
  let minDistance = Number.MAX_SAFE_INTEGER;
  stones.forEach((stone, index) => {
    const distance = haversineDistance(thanosLocation, stone.loc);
    if (minDistance > distance) {
      minDistance = distance;
      dangerStone = index;
    }
  });
  thanosTargetStone = dangerStone;
  const { loc, name } = stones[dangerStone];
  L.circle(loc, {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 1115500,
  }).addTo(map);
  thanosTargetLocation = loc;
  moveThanos();
  alert(`Alert!! ${name} is in danger move your troops now `);
};

const isInRange = () => {
  const lat = parseInt(thanosTargetLocation[0] - 2);
  const long = parseInt(thanosTargetLocation[1] - 2);
  if (
    parseInt(thanosLocation[0]) >= lat &&
    parseInt(thanosLocation[1]) >= long
  ) {
    map.removeLayer(markers[thanosTargetStone]);
    L.circle(stones[thanosTargetStone].loc, {
      color: "orange",
      fillColor: "FFA500",
      fillOpacity: 0.5,
      radius: 1115500,
    }).addTo(map);
    stones.splice(thanosTargetStone, 1);
    return true;
  } else {
    return false;
  }
};

const moveThanos = () => {
  const lat = getRandomInRange(thanosLocation[0], thanosTargetLocation[0]);
  const lon = getRandomInRange(thanosLocation[1], thanosTargetLocation[1]);
  thanosLocation = [lat, lon];
  const newThansoLocation = new L.LatLng(lat, lon);
  thanos.setLatLng(newThansoLocation);
};

// setInterval(() => {
//   if (isInRange()) {
//     checkRangeDistance();
//   } else {
//     moveThanos();
//   }
// }, 5000);

// checkRangeDistance();
