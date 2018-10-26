const advice = 'Stay hungry. Stay foolish.';

let advisor = {
  __proto__: new TeamMember('Adam', ['Consulting']), // Setting prototype
  advice,                                            // Shorthand assignmetn
  greeting () {
    super.greeting();                                // Call super method
    console.log(this.advice); 
  },
  [advice.split('.')[0]]: 'Always learn more'        // Compute property name
};


console.log(TeamMember.prototype.isPrototypeOf(advisor));  // true
console.log(advisor instanceof TeamMember);                // true
advisor.greeting();   // I' m Adam. Welcome to the team!
                      // Stay hungry. Stay foolish.