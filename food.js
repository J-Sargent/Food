//console.log(JSON.stringify(obj))
console.log("Hello Foodie!");
var orange = ["fruit", "orange", ".33", "Florida", "orange"];
var apple = ["fruit", "apple", ".50", "Kansas", "Red", "organic"];
var newFruitArray = [];

function makeNewFruitArray() {
  console.log("makeNewFruitArray called");
  newFruitArray.push(document.getElementById("categoryInput").value);
  newFruitArray.push(document.getElementById("typeInput").value);
  newFruitArray.push(document.getElementById("priceInput").value);
  newFruitArray.push(document.getElementById("locationInput").value);
  newFruitArray.push(document.getElementById("colorInput").value);
  newFruitArray.push(document.getElementById("growingMethodInput").value);
  newFruitArray.push(document.getElementById("distanceInput").value);
  console.log(newFruitArray);
}

class Food {
  constructor(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
  }
  displayCategory() {
    console.log("This " + this.type + " is a " + this.category);
  }
}

class Fruit extends Food {
  constructor(category, type, price, color, location) {
    super(category, type, price);
    this.color = color;
    this.location = location;
  }
  displayFruit() {
    console.log("This is a fruit");
  }
}

class Local extends Fruit {
  constructor(category, type, price, color, location, growingMethod) {
    super(category, type, price, color, location);
    this.growingMethod = growingMethod;
  }
  displayLocal() {
    console.log("This food is local, from " + this.location);
  }
  displayGrowingType() {
    console.log("This food is " + this.growingMethod + "ally grown.");
  }
}

class NotLocal extends Fruit {
  constructor(category, type, price, color, location, growingMethod, distance) {
    super(category, type, price, color, location);
    this.distance = distance;
  }
  displayDistance() {
    console.log("This food traveled " + this.distance + " many miles.");
  }
}

function sortLocal() {
  console.log("sortLocal called");
  if (apple.includes("Kansas")) {
    console.log("Kansas");
    let apple = new Local("fruit", "apple", ".50", "Kansas", "Red", "organic");
    apple.displayCategory();
    apple.displayFruit();
    apple.displayGrowingType();
  }
}

sortLocal();
