const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [30, 40],
  },
});
const powerStone = new LeafIcon({
  iconUrl: "./assets/images/stones/1.png",
});
const spaceStone = new LeafIcon({
  iconUrl: "./assets/images/stones/2.png",
});

const realityStone = new LeafIcon({
  iconUrl: "./assets/images/stones/3.png",
});
const soulStone = new LeafIcon({
  iconUrl: "./assets/images/stones/4.png",
});
const timeStone = new LeafIcon({
  iconUrl: "./assets/images/stones/5.png",
});
const mindStone = new LeafIcon({
  iconUrl: "./assets/images/stones/6.png",
});

const thanosIcon = new LeafIcon({
  iconUrl: "./assets/images/characters/thanos.png",
});

const ironManIcon = new LeafIcon({
  iconUrl: "./assets/images/characters/iron-man.png",
});

const spiderManIcon = new LeafIcon({
  iconUrl: "./assets/images/characters/spider-man.png",
});

const thorIcon = new LeafIcon({
  iconUrl: "./assets/images/characters/thor.png",
});

const captainIcon = new LeafIcon({
  iconUrl: "./assets/images/characters/captain-america.png",
});
const doctorIcon = new LeafIcon({
  iconUrl: "./assets/images/characters/doctor-strange.png",
});

const stones = [
  {
    name: "Power Stone",
    icon: powerStone,
    loc: [51.5, -0.09],
  },
  {
    name: "Space Stone",
    icon: spaceStone,
    loc: [45.7, -93.9],
  },
  {
    name: "Reality Stone",
    icon: realityStone,
    loc: [28.7, 77.9],
  },
  {
    name: "Soul Stone",
    icon: soulStone,
    loc: [-22.7, -46],
  },
  {
    name: "Time Stone",
    icon: timeStone,
    loc: [55, 37],
  },
  {
    name: "Mind Stone",
    icon: mindStone,
    loc: [35.7, 137],
  },
];

const avengers = [
  {
    name: "Iron Man",
    icon: ironManIcon,
    loc: [37, -108],
  },
  {
    name: "Spider man",
    icon: spiderManIcon,
    loc: [34, -106],
  },
  {
    name: "Thor",
    icon: thorIcon,
    loc: [40, -112],
  },
  {
    name: "Captain America",
    icon: captainIcon,
    loc: [67, -50],
  },
  {
    name: "Doctor Strange",
    icon: doctorIcon,
    loc: [70, -50],
  },
];
