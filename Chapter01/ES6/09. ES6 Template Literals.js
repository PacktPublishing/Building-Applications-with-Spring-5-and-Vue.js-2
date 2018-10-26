let user = {
  name: 'Ted',
  greeting () {
    console.log(`Hello, I'm ${this.name}.`);
  }
};
user.greeting();  // Hello, I'm Ted.

let greeting = `Hello, I'm ${user.name}.
Welcome to the team!`;
console.log(greeting);

let greeting = `Hello, I'm ${user.name}.
                Welcome to the team!`;
console.log(greeting); // Hello, I'm Ted.
                       //                Welcome to the team! 