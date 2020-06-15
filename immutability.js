//No string methods mutate the string itself
//They return new strings
//All primitive data types are immutable

var statement = "I am an immutable value";
var otherStr = statement.slice(8, 17);

var arr = [];
var v2 = arr.push(2);
var v3 = arr.push(5);
console.log(arr); // the array is mutated
console.log(v2); // these return numbers for some reason
console.log(v3);
