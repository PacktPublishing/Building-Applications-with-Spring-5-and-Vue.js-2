function workout() {
  let gym = 'Gym A';

  const gymStatuses = {'Gym A': 'open', 'Gym B': 'open', 'Gym C': 'closed'};
  for (let gym in gymStatuses) {
    console.log(gym + ' is ' + gymStatuses[gym]);
  }

  {
    const gym = 'Gym B';
    console.log('Workout in ' + gym);
    // The following will throw TypeError
    // gym = 'Gym C'; 
  }

  console.log('Workout in ' + gym);

  {
    function gym () {
      console.log('Workout in a separate gym');
    }
    gym();
  }

  if (gymStatuses[gym] == 'open') {
    let exercises = ['Treadmill', 'Pushup', 'Spinning'];
  }
  // exercises are no longer accessible here
  // console.log(exercises);

  try {
    let gym = 'Gym C'; 
    console.log('Workout in ' + gym);   
    throw new Error('Gym is closed');
  } catch (err) {
    console.log(err);
    let gym = 'Gym D';
    console.log('Workout in ' + gym);   
  }
}
workout();