function workout() { 
  goToGym();    // What will the output be?
  var goToGym = function () {
    console.log('Workout in Gym A');
  }
  return;    
  function goToGym() {
    console.log('Workout in Gym B');
  }
}
workout();


// Interpreter's view
function workout() {
  function goToGym() {
    console.log('Workout in Gym B');
  }
  var goToGym;
  goToGym();
  goToGym = function () {
    console.log('Workout in Gym A');
  }
  return;
}
workout();