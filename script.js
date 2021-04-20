const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//FILTER
const filterItems = items.filter((item) => {
  return item.price >= 100;
});

console.log(filterItems);

//MAP
const mapItems = items.map((item) =>{
    return item.price
})

console.log(mapItems)

//FIND
const findItems = items.find((item) =>{
    return item.name === "Album"
})

console.log(mapItems)

//FOR EACH
items.forEach((item) =>{
    console.log(item.price)
})

//SOME
const hasInexpensiveItems = items.some((item) =>{
    return item.name <= 100
})

console.log(hasInexpensiveItems)