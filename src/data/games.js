const games = [
  {
    id: 1,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
    name: "Counter-Strike 2",
    price: "Free",
    rating: "4/5",
    tag:"",
    genre:["multiplayer"]
  },
  {
    id: 2,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1745368562",
    name: "Left 4 Dead 2",
    price: "₹ 480",
    rating: "5/5",
    tag: "18+",
    genre:["singleplayer","multiplayer"]

  },
  {
    id: 3,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/220/header.jpg?t=1745368545",
    name: "Half-Life 2",
    price: "₹ 480",
    rating: "5/5",
    tag: "",
    genre:["singleplayer"]

  },
  {
    id: 4,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/286690/header.jpg?t=1741110084",
    name: "Metro 2033 Redux",
    price: "₹ 1,500",
    rating: "5/5",
    tag: "",
    genre:["singleplayer"]

  },
  {
    id: 28,
    img:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/427520/header.jpg?t=1730307306",
    name:"Factorio",
    price:"₹ 1,500",
    rating:"5/5",
    tag:"Demo Available",
    genre:["singleplayer","multiplayer"]

  },
  {
    id: 5,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1262560/header.jpg?t=1605151411",
    name: "Need For Speed Most Wanted",
    price: "₹ 999",
    rating: "5/5",
    tag:"",
    genre:["singleplayer","racing","sale"]

  },
  {
    id: 6,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2096610/header.jpg?t=1709652109",
    name: "Crysis 3 Remastered",
    price: "₹ 709",
    rating: "5/5",
    tag: "",
    genre:["singleplayer","sale"]

  },
  {
    id: 7,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/220240/header.jpg?t=1752169206",
    name: "Far Cry 3",
    price: "₹ 999",
    rating: "4/5",
    tag: "18+",
    genre:["singleplayer","sale"]

  },
  {
    id: 8,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/400/header.jpg?t=1745368554",
    name: "Portal",
    price: "₹ 480",
    rating: "4/5",
    tag: "",
    genre:["singleplayer"]

  },
  {
    id: 10,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg?t=1755109910",
    name: "Doom Eternal",
    price: "₹ 1,799",
    rating: "4/5",
    tag: "18+",
    genre:["singleplayer","sale"]
  },
  {
    id: 11,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg?t=1754000547",
    name: "Assassin's Creed Odyssey",
    price: "₹ 2,999",
    rating: "3/5",
    tag: "",
    genre:["singleplayer","sale"]
  },
  {
    id: 12,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/287390/header.jpg?t=1725444535",
    name: "Metro: Last Light Redux",
    price: "₹ 1,500",
    rating: "4.5/5",
    tag: "",
    genre:["singleplayer"]
  },
  {
    id: 13,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/70/header.jpg?t=1745368462",
    name: "Half-Life",
    price: "₹ 349",
    rating: "4.5/5",
    tag: "",
    genre:["singleplayer","sale"]
  },
  {
    id: 14,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/500/header.jpg?t=1745368560",
    name: "Left 4 Dead",
    price: "₹ 480",
    rating: "4.5/5",
    tag: "18+",
    genre:["singleplayer"]
  },
  {
    id: 15,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/10/header.jpg?t=1745368572",
    name: "Counter-Strike",
    price: "₹ 349",
    rating: "4/5",
    tag: "",
    genre:["multiplayer"]
  },
  {
    id: 16,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/header.jpg?t=1745363004",
    name: "Portal 2",
    price: "₹ 480",
    rating: "Excellent",
    tag: "",
    genre:["singleplayer"]
  },
  {
    id: 17,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/header.jpg?t=1754434028",
    name: "Dota 2",
    price: "Free",
    rating: "5/5",
    tag:"",
    genre:["multiplayer"]
  },
  {
    id: 18,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/440/header.jpg?t=1756334616",
    name: "Team Fortress 2",
    price: "Free",
    rating: "5/5",
    tag:"",
    genre:["multiplayer"]
  },
  {
    id: 19,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg?t=1673391297",
    name: "Half-Life: Alyx",
    price: "₹ 2,400",
    rating: "Excellent",
    tag: "VR",
    genre:["singleplayer"]
  },
  {
    id: 20,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/240/header.jpg?t=1745368575",
    name: "Counter-Strike: Source",
    price: "₹ 480",
    rating: "Excellent",
    tag: "",
    genre:["multiplayer"]
  },
  {
    id: 21,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/130/header.jpg?t=1745368541",
    name: "Half-Life: Blue Shift",
    price: "₹ 250",
    rating: "Good",
    tag: "",
    genre:["singleplayer"]
  },
  {
    id: 22,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/50/header.jpg?t=1745368539",
    name: "Half-Life:Opposing Force",
    price: "₹ 250",
    rating: "Good",
    tag: "",
    genre:["singleplayer"]
  },
  {
    id: 23,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1536610/header.jpg?t=1701554571",
    name: "OpenTTD",
    price: "Free",
    rating: "3/5",
    genre:["singleplayer"]
  },
  {
    id: 24,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/232770/header.jpg?t=1726332202",
    name: "Postal",
    price: "Free",
    rating: "3/5",
    tag: "18+",
    genre:["singleplayer"]
  },
  {
    id: 25,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/630/header.jpg?t=1745368585",
    name: "Alien Swarm",
    price: "Free",
    rating: "3/5",
    tag:"",
    genre:["multiplayer","singleplayer"]
  },
  {
    id: 27,
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2020860/header.jpg?t=1689001240",
    name: "Rush Rally 3",
    price: "₹ 690",
    rating: "5/5",
    tag:"",
    genre:["singleplayer","multiplayer","racing"]
  },
  {
    id: 28,
    img:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1769170/6c8fb7501bad0bba6ed7f005a033df1fa80c9116/header.jpg?t=1754253280",
    name:"Shattered Pixel Dungeon",
    price:"₹ 657",
    rating:"5/5",
    tag:"",
    genre:["singleplayer"]
  },

//   {
//     id: 0,
//     img:"",
//     name:"",
//     price:"₹ ",
//     rating:"",
//     tag:"",
//     genre:"",
//   },
];

// function getGameById(id) {
//   const numericId = typeof id === "string" ? parseInt(id, 10) : id;
//   return games.find((g) => g.id === numericId);
// }

// export { getGameById };
export default games;