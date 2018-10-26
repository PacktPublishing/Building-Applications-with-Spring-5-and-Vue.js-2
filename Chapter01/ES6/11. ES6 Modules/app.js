import User from './user.js';    
import * as Roles from './roles.js';
import completeTask from './tasks.js';
import {completedCount} from './tasks.js';

let user = new User('Ted', Roles.USER);        
completeTask(user);    
console.log(`Total completed ${completedCount}`);
// completedCount++;  
// Only to show that you can change imported object.
// NOT a good practice to do it though.
User.prototype.walk = function () {
  console.log(`${this.name} walks`);
};
user.walk();