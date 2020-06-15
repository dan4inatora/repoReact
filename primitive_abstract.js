//primitive types - strings, numbers, boolean, null, undefined
//EXAMPLE

let a = 5;
let b = a;
console.log(a);
console.log(b);
console.log(a === b);

a = 10;
console.log(a);
console.log(b);
console.log(a === b);

//non-primitive types - objects, arrays, functions
let c = [10]
let d = c
console.log(c === d) // true
c.push(10)
console.log(c) // [10, 10]
console.log(c === d) // true

console.log([10] === [10]) //false


//PRIMITIVES ARE IMMUTABLE

var string = 'This is a string.';
string[1] = 'H'
console.log(string) // 'This is a string.'

//They are compared by value only 

var number1 = 5;
var number2 = 5;
number1 === number2; // true
var string1 = 'This is a string.';
var string2 = 'This is a string.';
string1 === string2; // true

//Non-primitive they are mutatable

var arr = [ 'one', 'two', 'three', 'four', 'five' ];
arr[1] = 'TWO';
console.log(arr) // [ 'one', 'TWO', 'three', 'four', 'five' ];

//Non-primitives are not strictly equal even tho they are the same
var obj1 = { 'cat': 'playful' };
var obj2 = { 'cat': 'playful' };
obj1 === obj2;  // false
var arr1 = [ 1, 2, 3, 4, 5 ];
var arr2 = [ 1, 2, 3, 4, 5 ];
arr1 === arr2;  // false

//They need to point to the same obj aswell

var obj3 = { 'car' : 'purple' }
var obj4 = obj3;
obj3 === obj4;  // true

