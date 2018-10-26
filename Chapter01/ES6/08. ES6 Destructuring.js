// Object destructuring

let user = {name: 'Sunny', interests: ['Traveling', 'Swimming']};
let {name, interests, tasks = []} = user;
console.log(name);       // Sunny
console.log(interests);  // ["Traveling", "Swimming"]
console.log(tasks);      // undefined

let {name: firstName} = user;
console.log(firstName)  // Sunny


// Array destructuring

let [first, second] = ['Traveling', 'Swimming', 'Shopping'];
console.log(first);   // Traveling
console.log(second);  // Swimming


let [,,third, fourth = ''] = ['Traveling', 'Swimming', 'Shopping'];
console.log(third);   // Shopping
console.log(fourth);  // undefined


// Nested destructuring

let user = {name: 'Sunny', interests: ['Traveling', 'Swimming']};
let {interests: [,second]} = user;
console.log(second);    // Swimming
console.log(interests); // ReferenceError


const fruits = [{name:'Apple', price:100},{name:'Orange', price:80}];
let [,{name:secondFruitName}] = fruits;
console.log(secondFruitName); // Orange


// Rest elements

let [first, ...others] = ['Traveling', 'Swimming', 'Shopping'];
console.log(others);   // ["Swimming", "Shopping"]


const fruits = [{name:'Apple', price:100},{name:'Orange', price:80}];
let [...myFruits] = fruits;
console.log(myFruits[0].name);            // Apple
myFruits.push({name:'Banana', price:90});
console.log(myFruits.length);             // 3
console.log(fruits.length);               // 2
myFruits[0].price = 110;
console.log(fruits[0].price);            // 110


// Function parameters destructuring

function workout({gym, todos}) {
  let [first] = todos;
  console.log('Start ' + first + ' in ' + gym);
}
let today = {gym: 'Gym A', todos: ['Treadmill']};
workout(today); // Start Treadmill in Gym A
workout()       // TypeError


function workout({gym, todos} = {}) {
  let [first] = todos;
  console.log('Start ' + first + ' in ' + gym);
}
workout();


function workout({gym = 'Gym A', todos=['Treadmill']} = {}) {
  let [first] = todos;
  console.log('Start ' + first + ' in ' + gym);
}
workout();  // Start Treadmill in Gym A