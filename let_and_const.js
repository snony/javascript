

function getClothing(isCold){
  let freezing;
  if(isCold){
    freezing = 'Grab a jacket!';
    console.log("Very cold Sir!");
  }else{
    freezing = "it's a short kind of day";
    console.log(freezing);
  }

}


getClothing(false);
//TEMPLATES LITERATE
const student = {
  name:"Richard Kalehoff",
  guardian: "Mr. Kalehoff"
};


const teacher = {
  name: "Mrs. Wilson",
  room: 'N231'
};

let message = student.name + "plaease see" + teacher.name + " in " + teacher.room + 'to pick up your report card.';
var note = `teacher.name

Please excuse ${student.name}.
He is recovering from the flu.

Thank you,

${student.guardian}
`;

console.log("Nada");

const circle = {
  radius:10,
  color: 'orange',
  getArea:function(){
    return Math.PI*this.radius*this.radius;
  }

};

let {radius, getArea, color} = circle;
console.log(getArea);

console.log("For loop in another way");
const digits = [0,1,2,3,4,5,6,7,8,9];
for (const digit of digits){
  console.log(digit);
}

console.log("Spread operator");
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

///////////////////////////////////////Lesson 2//////////////////////////////////////////
// ARROW FUNCTION
const upperizeNames = ['franklin', 'Kagure', 'Asser'].map(name =>name.toUpperCase());

console.log(upperizeNames);


////This without ARROW FUNCTION
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(function() {
    this.scoops++;
    console.log('scoop added!');
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop();
console.log(dessert.scoops);
///// This with ARROW FUNCTION

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
    console.log('scoop added!'); 
    console.log(cone.scoops);
  }, 0.005);
};

const dess = new IceCream();
dess.addScoop();
console.log(dess.scoops);

/////////////// Deafult Function Parameters //////////////////////////////
function createGrid([width = 5, height = 5]=[]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid


//// Symbols available datatypes
/// Unique identifier
console.log("symbol");
const sym1 = Symbol('apple');
console.log(sym1);

////Iterable objects
console.log("ITERATOR OBJECT");
const dig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = dig[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

///// SETS
console.log("Sets");
const games = new Set();
console.log(games);

const months = new Set(["January", 
"February",
"Mars",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
]);
console.log(months);
const iterator = months.values();
iterator.next();
console.log(iterator);

for (const month of iterator){
  console.log(month);
}

////// WeakSet
console.log("WeakSet");
let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };
let student4 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
roster.add(student4);
console.log(roster);

/////// Map
console.log("Start Map");
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const member of members) {
    let [key, value] = member;
    console.log(key, value);
}

members.forEach((value, key) => console.log(key, value));
console.log("End Map");
////// WeakMap
console.log("Start WeakMap");
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
console.log("End of WeakMap");
///// Promises
console.log("Start Promises");
/*new Promise(function (resolve, reject) {
  window.setTimeout(function createSundae(flavor = 'chocolate') {
      const sundae = {};
      // request ice cream
      // get cone
      // warm up ice cream scoop
      // scoop generous portion into cone!
      resolve(sundae);
  }, Math.random() * 2000);
});
*/
/*
const myPromiseObj = new Promise(function (resolve, reject) {
  // sundae creation code
});

mySundae.then(function(sundae) {
  console.log(`Time to eat my delicious ${sundae}`);
}, function(msg) {
  console.log(msg);
  self.goCry(); // not a real method
});
*/
console.log("End Promises");
///// The proxies
console.log("Start Proxies");
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
      console.log("checking target");
      //It calls the objects anyways
      console.log(target); // the `richard` object, not `handler` and not `agent`
      console.log("checking propName");
      console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
console.log(agent.status); // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

var obj = {
  _age: 5,
  _height: 4,
  get age() {
      console.log(`getting the "age" property`);
      console.log(this._age);
  },
  get height() {
      console.log(`getting the "height" property`);
      console.log(this._height);
  }
};
obj.age;
const proxyObj = new Proxy({age: 5, height: 4}, {
  get(targetObj, property) {
      console.log(`getting the ${property} property`);
      console.log(targetObj[property]);
  }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4

proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120
console.log("End Proxies");
//////////////// Generator
console.log("Start Generator");

function* getEmployee() {
  console.log('the function has started');

  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

  for (const name of names) {
      console.log( name );
      yield;
  }

  console.log('the function has ended');
}
const generatorIterator = getEmployee();
generatorIterator.next();
generatorIterator.next();

function* displayResponse() {
  const response = yield;
  console.log(`Your response is "${response}"!`);
}

iterator1 = displayResponse();

iterator1.next(); // starts running the generator function
iterator1.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!

function* createSundae() {
  const toppings = [];

  toppings.push(yield);
  toppings.push(yield);
  toppings.push(yield);

  return toppings;
}

var it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
it.next();
console.log("End Generator");