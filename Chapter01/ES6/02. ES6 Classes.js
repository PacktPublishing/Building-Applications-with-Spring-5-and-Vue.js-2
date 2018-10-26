class User {
  constructor(name, interests) {
    this.name = name;
    this.interests = interests;
  }
  greeting () {
    console.log('Hi, I\'m ' + this.name + '.');
  }
  get interestsCount () {
    return this.interests ? this.interests.length : 0;
  }
}

class TeamMember extends User {
  constructor(name, interests) {
    super(name, interests);
    this._tasks = [];
    this._welcomeText = 'Welcome to the team!';
  }
  greeting () {
    console.log('I\' m ' + this.name + '. ' + this._welcomeText);
  }
  work () {
    console.log('I\' m working on ' + this._tasks.length + ' tasks.')
  }
  set tasks (tasks) {
    let acceptedTasks = [];
    if (tasks.length > TeamMember.maxTasksCapacity()) {
      acceptedTasks = tasks.slice(0, TeamMember.maxTasksCapacity());
      console.log('It\'s over max capacity. Can only take two.');
    } else {
      acceptedTasks = tasks;
    }    
    this._tasks = this._tasks.concat(acceptedTasks);
  }
  static maxTasksCapacity () {
    return 2;
  }
}

let member = new TeamMember('Sunny', ['Traveling']);
member.greeting();   // I' m Sunny. Welcome to the team!
member.tasks = ['Buy three tickets', 'Book a hotel', 'Rent a car'];
                     // It's over max capacity. Can only take two.
member.work();       // I' m working on 2 tasks.
console.log(member.interestsCount); // 1
member.interestsCount = 2;          // This won’t save the change
console.log(member.interestsCount); // 1


User.prototype.eat = function () {
  console.log('What will I have for lunch?');
};
member.eat();  // What will I have for lunch?


User.sleep = function () {
  console.log('Go to sleep');
};
member.sleep();  // Uncaught TypeError: member.sleep is not a function
User.sleep();    // Go to sleep

console.log(User.prototype.hasOwnProperty('eat'));  // true
console.log(User.hasOwnProperty('eat'));            // true