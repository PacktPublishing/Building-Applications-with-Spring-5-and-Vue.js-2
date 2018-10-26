const fruits = [{name: 'Apple', price: 100}, {name: 'Orange', price: 80}, {name: 'Banana', price: 120}];

// Variation 1

// When no arguments, an empty set of parentheses is required
var countFruits = () => fruits.length;
// equivalent to ES5
var countFruits = function () {
  return fruits.length;
}; 

// Variation 2

// When there is one argument, parentheses can be omitted.
// The expression value is the return value of the function.
fruits.filter(fruit => fruit.price > 100);
// equivalent to ES5
fruits.filter(function(fruit) {
  return fruit.price > 100;
});

// Variation 3

// The function returns an object literal, it needs to be wrapped
// by parentheses.
var inventory = fruits.map(fruit => ({name: fruit.name, storage: 1}));
// equivalent to ES5
var inventory = fruits.map(function (fruit) {
  return {
    name: fruit.name,
    storage: 1
  };
});

// Variatoin 4

// When the function has statements body and it needs to return a 
// result, the return statement is required
var inventory = fruits.map(fruit => {
  console.log('Checking ' + fruit.name + ' storage');
  return {name: fruit.name, storage: 1};
});
// equivalent to ES5
var inventory = fruits.map(function (fruit) {
  console.log('Checking ' + fruit.name + ' storage');
  return {name: fruit.name, storage: 1};
});

// A note about variation 3

var sum = (a, b) => { return a + b };
sum(1, 2);    // 3

var sum = (a, b) => { a + b };
sum(1, 2);   // undefined
// Using expression will work
var sum = (a, b) => a + b;
sum(1, 2);    // 3


// ---- No lexical this ---- 

var shoppingCart = {
  items: ['Apple', 'Orange'],
  inventory: {Apple: 1, Orange: 0},
  checkout () {
    this.items.forEach(item => {
      if (!this.inventory[item]) {
        console.log('Item ' + item + ' has sold out.');
      }      
    })    
  }
}
shoppingCart.checkout();

// equivalent to ES5
var shoppingCart = {
  items: ['Apple', 'Orange'],
  inventory: {Apple: 1, Orange: 0},
  checkout () {
    // Reassign context and use closure to make it 
    // visible to forEach callback
    var that = this
    this.items.forEach(function(item) {
      if (!that.inventory[item]) {
        console.log('Item ' + item + ' has sold out.');
      }      
    })    
  }
}
shoppingCart.checkout();

// ----  Function.prototype.call, Function.prototype.apply, and Function.prototype.bind ---- 

var name = 'Unknown';
var greeting = () => {
  console.log('Hi, I\'m ' + this.name); 
};
greeting.call({name: 'Sunny'});    // I'm Unknown
greeting.apply({name: 'Tod'});     // I'm Unknown
var newGreeting = greeting.bind({name: 'James'});
newGreeting();                     // I'm Unknown


// ----  Arrow functions not suitable for defining object methods ---- 

var shoppingCart = {
  items: ['Apple', 'Orange'],
  inventory: {Apple: 1, Orange: 0},
  checkout: () => {
    // Uncaught TypeError: Cannot read property 'forEach' of undefined
    this.items.forEach(item => {
      if (!this.inventory[item]) {
        console.log('Item ' + item + ' has sold out.');
      }      
    })    
  }
}
shoppingCart.checkout();


class User {
  constructor(name) {
    this.name = name;
  }
}
User.prototype.swim = () => {
  console.log(this.name + ' is swimming');
};
var user = new User();
console.log(user.swim());   //  is swimming


// ---- No prototype object ---- 

const WorkoutPlan = () => {};
// Uncaught TypeError: WorkoutPlan is not a constructor
let workoutPlan = new WorkoutPlan(); 
console.log(WorkoutPlan.prototype);  // undefined