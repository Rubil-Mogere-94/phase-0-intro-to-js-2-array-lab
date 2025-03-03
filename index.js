/// Define the cats array
var cats = ["Milo", "Otis", "Garfield"];

// 1. **Destructive Methods**: These modify the `cats` array directly and return nothing.
function destructivelyAppendCat(name) {
  cats.push(name);  // Appends a cat to the end of the cats array
}

function destructivelyPrependCat(name) {
  cats.unshift(name);  // Prepends a cat to the beginning of the cats array
}

function destructivelyRemoveLastCat() {
  cats.pop();  // Removes the last cat from the cats array
}

function destructivelyRemoveFirstCat() {
  cats.shift();  // Removes the first cat from the cats array
}

// 2. **Non-Destructive Methods**: These return a new array, leaving the original `cats` array unchanged.
function appendCat(name) {
  return [...cats, name];  // Returns a new array with the new cat added at the end
}

function prependCat(name) {
  return [name, ...cats];  // Returns a new array with the new cat added at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1);  // Returns a new array with the last cat removed
}

function removeFirstCat() {
  return cats.slice(1);  // Returns a new array with the first cat removed
}

// Export the functions for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
