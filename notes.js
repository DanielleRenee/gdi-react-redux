class Shape {
  constructor(name) {
    this.name = name;
  }
  
  color() {
    console.log(this.name + 'has a color.');
  }
}
  
class Square extends Shape {
  color() {
    console.log(this.name + ' is green.');
  }
}
  
var s = new Square('Squary');
s.color();

var foo = ['green', 'purple', 'rainbow']

var [green, purple, rainbow] = foo;
console.log(green);
console.log(purple);
console.log(rainbow);

let myArr = {a:'sunday', b:'funday'};
// key: variable

const {a, b} = myArr
console.log(a, b)

var pony = 'I have four legs'

// iterates over an array, and returns a new array

var numArray = [4, 6, 4, 7, 8];

numArray.map((num)) => {
  return num.square;
});


const myFunction = (x, y, z)

//className instead of class becuase JS is a reserved word
// look up a ternary (conditional or if statement?)
// any arguments that we pass in to a component, we pass in props - kind of convention

// have to anchor your componenets to the DOM in the first place

// True ? "Yay!"
// const canRide = 64

// var height1 = 50"
// var height2 = 70"

// minAllowed = 60

// canRide = height1 >= minAllowed?
//     "You may pass!":
//     "You shall not pass!"