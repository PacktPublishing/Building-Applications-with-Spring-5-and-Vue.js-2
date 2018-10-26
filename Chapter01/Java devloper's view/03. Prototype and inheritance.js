function User (name, interests) {
  this.name = name;
  this.interests = interests;
}
User.prototype.greeting = function () {
   console.log('Hi, I\'m ' + this.name + '.');
}
function TeamMember (name, interests, tasks) {
   User.call(this, name, interests);
   this.tasks = tasks;
}
TeamMember.prototype = Object.create(User.prototype);
TeamMember.prototype.greeting = function () {
  console.log('I\'m ' + this.name + '. Welcome to the team!');
};
TeamMember.prototype.work = function () {
  console.log('I\'m working on ' + this.tasks.length + ' tasks');
};
var member = new TeamMember('Sunny', ['Traveling'],
                            ['Buy three tickets','Book a hotel']);
member.greeting();  // I'm Sunny. Welcome to the team!
member.work();      // I'm working on 2 tasks

console.log(member instanceof TeamMember); // true
console.log(member instanceof User);       // true
console.log(member instanceof Object);     // true

User.prototype.eat = function () {
  console.log('What will I have for lunch?');
};
member.eat();     // What will I have for lunch?         

// Add a method to the top
Object.prototype.move = function () {
  console.log('Every object can move now');
};
member.move();    // Every object can move now
var alien = {};
alien.move();     // Every object can move now
User.move();      // Even the constructor function