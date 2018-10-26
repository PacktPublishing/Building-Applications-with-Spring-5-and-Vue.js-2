// Scope and Closure JavaScript Example
function bookHotel (city) {
  var availableHotel = 'None';
  for (var i=0; i<hotels.length; i++) {
    var hotel = hotels[i];
    if (hotel.city === city && hotel.hasRoom) {
      availableHotel = hotel.name;
      break;
    }
  }
  // i and hotel still accessible here
  console.log('Checked ' + (i+1) + ' record(s)'); // Checked 2 record(s)
  console.log('Last checked ' + hotel.name);      // Last checked Hotel B
  {
    function placeOrder() {
      var totalAmount = 200;
      console.log('Order placed to ' + availableHotel);
    }
  }  
  placeOrder();
  // Not accessible
  // console.log(totalAmount);
  return availableHotel;
}

var hotels = [{name: 'Hotel A', hasRoom: false, city: 'Sanya'},
              {name: 'Hotel B', hasRoom: true, city: 'Sanya'}];
console.log(bookHotel('Sanya')); // Hotel B
// Not accessible
// console.log(availableHotel);