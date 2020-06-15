var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y


//INITIALIZED VARIABLES ARE NOT HOISTED(Brought to the top of their scope)
//Hoisting is JavaScript's default behavior of moving declarations to the top.

var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y

//This is possible because of hoisting

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

//You can calla function before you declared it
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/

//As we mentioned before, all variable and function declarations are hoisted to the top of their scope. I should also add that variable declarations are processed before any code is executed.
//It is however important to remember that in the background, JavaScript is religiously declaring then initialising our variables.

function hoist() {
    a = 20;
    var b = 100;
  }
  
  hoist();
  
  console.log(a); 
  /* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */
  
  console.log(b); 
  /*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */

//OUTPUT is undefined, because message declaration goes to the top of the closing context, but the intialization stays below the console.log
 function hoist() {
    console.log(message);
    var message='Hoisting is all the rage!'
  }
  
  hoist();

//Let keyword is block scoped and prevents hoisting mistakes
//With const, just as with let, the variable is hoisted to the top of the block.
console.log(hoist); // Output: ReferenceError: hoist is not defined ...
let hoist = 'The variable has been hoisted.';

//HOISTING FUNCTIONS
hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};

//FUNCTION EXPRESSIONS ARE NOT HOISTED
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

//HOISTING chain
//Function declarations are hoisted over variable declarations but not over variable assignments.

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

//Var is bind to the function scope...not the block scope, while let and const have block scope

var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10