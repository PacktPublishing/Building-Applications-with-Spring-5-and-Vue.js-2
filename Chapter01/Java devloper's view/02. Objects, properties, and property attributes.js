var obj = {};
obj['100'] = 'one hundred';
// Number 100 will be casted to '100'
console.log(obj[100]);  // 'one hundred'
// Both foo and bar will be casted to string '[object Object]'
var foo = {prop: 'f'}, bar = {prop: 'b'};
obj[foo] = 'Foo'
console.log(obj[bar])  // 'Foo'


// Define properties using Object.defineProperty()

function User (name, department) {
  var _department = department;
  var _name = name;
  Object.defineProperty(this, 'name', {
    value: _name,
    writable: true,
    enumerable: true,
    configurable: false
  }); 
  Object.defineProperty(this, 'department', {
    get: function () {
      console.log('Retrieving department');
      return _department;
    },
    set: function (newValue) {
      console.log('Updating department value to "' + newValue + '"');
      _department = newValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(this, 'greeting', {
    value: function () {
      console.log('Hi, I\'m ' + _name + '.');
    },
    enumerable: false,
    configurable: false
  }); 
} 