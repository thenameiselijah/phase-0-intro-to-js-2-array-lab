let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop();
}
function destructivelyRemoveFirstCat(name) {
  cats.shift();
}
function appendCat(name) {
 let newCats = [...cats, name];
 return newCats;
}
function prependCat(name) {
  let newCats = [name, ...cats];
  return newCats
}
function removeLastCat(name) {
  return cats.slice (0,cats.length -1);
}
function removeFirstCat(name) {
  let [, ...remainingCats] = cats;
  return remainingCats;
}