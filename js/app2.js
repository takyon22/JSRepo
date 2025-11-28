let isHungry = true;

if (isHungry) {
  makeLasagna();
} else if (!isHungry) {
  console.log("Du är ju inte hungrig grabben!");
}

function makeLasagna() {
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.");
}

console.log('Nu vart det dags för fruktsallad!');

let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(fruit => console.log(fruit));

let filter_list = fruits.filter(fruit => fruit == "Apple");

console.log(filter_list);
