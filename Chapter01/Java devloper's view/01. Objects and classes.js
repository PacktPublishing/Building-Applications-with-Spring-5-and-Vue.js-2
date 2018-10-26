// Call the Object constructor with new
var user = new Object();
user.name = 'Sunny';
user.interests = ['Traveling', 'Swimming'];
user.greeting = function () {
  console.log('Hi, I\'m ' + this.name + '.');
};
user.greeting(); // Hi, I'm Sunny.



// Create a user with object literal
var user = {
  name: 'Sunny',
  interests: ['Traveling', 'Swimming'],
  greeting: function () {
    console.log('Hi, I\'m ' + this.name + '.');
  }
}
user.greeting();  // Hi, I'm Sunny.



// Create a constructor function
function User (name, interests) {
  this.name = name;
  this.interests = interests;
  this.greeting = function () {
    console.log('Hi, I\'m ' + this.name + '.');
  }
}
// Call the constructor with new to create a user object
var user = new User('Sunny', ['Traveling', 'Swimming']);
user.greeting(); // Hi, I'm Sunny.



// Use Object.create() method with the prototype of
// User constructor function created above
var user = Object.create(User.prototype, {
  name: { value: 'Sunny' },
  interests: { value: ['Traveling', 'Swimming']}
}); 
user.greeting(); // Uncaught TypeError: user.greeting() is not a function


// Add greeting to prototype object
User.prototype.greeting = function () {
  console.log('Hi, I\'m ' + this.name + '.');
}
user.greeting(); // Hi, I'm Sunny.



// Use a creator function with an object as its return value
function createUser (name, interests) {
  var user = {};
  user.name = name;
  user.interests = interests;
  user.greeting = function () {
    console.log('Hi, I\'m ' + this.name + '.');
  };
  return user;
}
// Call the creator function with parameters
var user = createUser('Sunny', ['Traveling', 'Swimming']);
user.greeting(); // Hi, I'm Sunny.



// Create User class
class User {
  // Equivalent to User constructor function
  constructor (name, interests) {
    this.name = name;
    this.interests = interests;
  }
  // Equivalent to User.prototype.greeting
  greeting () {
    console.log('Hi, I\'m ' + this.name + '.')
  }
}
let user = new User('Sunny', ['Traveling', 'Swimming']);
user.greeting(); // Hi, I'm Sunny.



// Use class expression
let User = class {
  constructor (name, interests) {
    this.name = name;
    this.interests = interests;
  }
  greeting () {
    console.log('Hi, I\'m ' + this.name + '.')
  } 
}