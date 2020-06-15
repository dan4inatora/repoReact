// // The following variables are defined in the global scope
// var num1 = 20,
//     num2 = 3,
//     name = 'Chamahk';

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// multiply(); // Returns 60

// // A nested function example
// function getScore() {
//   var num1 = 2,
//       num2 = 3;
  
//   function add() {
//     return name + ' scored ' + (num1 + num2);
//   }
  
//   return add();
// }

// getScore(); // Returns "Chamahk scored 5"

// function addSquares(a, b) {
//     function square(x) {
//       return x * x;
//     }
//     return square(a) + square(b);
//   }
//   a = addSquares(2, 3); // returns 13
//   b = addSquares(3, 4); // returns 25
//   c = addSquares(4, 5); // returns 41

// ///////////////////////////////////////

//   function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }
//   fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
//                           // it
//   result = fn_inside(5); // returns 8
  
//   result1 = outside(3)(5); // returns 8

//   //Closure

//   var pet = function(name) {   // The outer function defines a variable called "name"
//   var getName = function() {
//     return name;             // The inner function has access to the "name" variable of the outer 
//                              //function
//   }
//   return getName;            // Return the inner function, thereby exposing it to outer scopes
// }
// myPet = pet('Vivie');
   
// myPet();  

// //One more closure example
// var createPet = function(name) {
//     var sex;
    
//     return {
//       setName: function(newName) {
//         name = newName;
//       },
      
//       getName: function() {
//         return name;
//       },
      
//       getSex: function() {
//         return sex;
//       },
      
//       setSex: function(newSex) {
//         if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
//           newSex.toLowerCase() === 'female')) {
//           sex = newSex;
//         }
//       }
//     }
//   }
  
//   var pet = createPet('Vivie');
//   pet.getName();                  // Vivie
  
//   pet.setName('Oliver');
//   pet.setSex('male');
//   pet.getSex();                   // male
//   pet.getName();  

//   //Encapsulation

//   var getCode = (function() {
//     var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
    
//     return function() {
//       return apiCode;
//     };
//   })();
  
//   getCode();    // Returns the apiCode

//   //An arrow function does not have its own this; the this value of the enclosing execution context is used
//   //Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:

//   function Person() {
//     this.age = 0;
  
//     setInterval(() => {
//       this.age++; // |this| properly refers to the person object
//     }, 1000);
//   }
  
//   var p = new Person();

  //Closure example

for (var i = 0; i < 5; i++) {
	var cb = (function(a){
		return function(){
			console.log(a);
		}
	})(i);

	setTimeout(cb,1000);
}

for (var i = 0; i < 5; i++) {
	var cb = function(){
			console.log(i);
		}
	setTimeout(cb,1000);
}

//Emulating private methods
var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    };
  })();
  
  console.log(counter.value());  // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value());  // 2.
  
  counter.decrement();
  console.log(counter.value());  // 1.