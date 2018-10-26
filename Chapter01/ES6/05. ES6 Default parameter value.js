const shoppingCart = [];
function addToCart(item, size = 1) {
  shoppingCart.push({item: item, count: size});
}
addToCart('Apple');     // size is 1
addToCart('Orange', 2); // size is 2


// ES5 equivalent
function addToCart(item, size) {
  size = (typeof size !== 'undefined') ? size : 1;
  shoppingCart.push({item: item, count: size});
}