//console.log(JSON.stringify(obj))
console.log("Hello Foodie!");

class Food {
  constructor(type, price, location, color) {
    this.type = type;
    this.price = price;
    this.location = location;
    this.color = color;
  }
  displayType() {
    console.log("The type is " + this.type);
  }
}

class Local extends Food {
  constructor(type, price, location, color, growingMethod) {
    super(type, price, location, color);
    //    this.type = type;
    //    this.price = price;
    //    this.location = location;
    //    this.color = color;
    this.growingMethod = growingMethod;
  }
  displayLocal() {
    console.log("This food is local, from " + this.location);
  }
  displayGrowingType() {
    console.log("This food is " + this.growingMethod + "ally grown.");
  }
}

let orange = new Food("orange", ".33", "Florida", "orange");
orange.displayType();

let apple = new Local("apple", ".50", "Kansas", "Red", "organic");
apple.displayLocal();
apple.displayGrowingType();
