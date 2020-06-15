// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// We declare a variable and the variable is assigned to the global window as its property.
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

console.log(whatsThis());          // 'Global' as this in the function isn't set, so it defaults to the global/window object
console.log(whatsThis.call(obj));  // 'Custom' as this in the function is set to obj
console.log(whatsThis.apply(obj)); // 'Custom' as this in the function is set to obj

/////


function f() {
    return this.a;
  }
  
  var g = f.bind({a: 'azerty'});
  console.log(g()); // azerty
  
  var h = g.bind({a: 'yoo'}); // bind only works once!
  console.log(h()); // azerty
  
  var o = {a: 37, f: f, g: g, h: h};
  console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty

  /////arrow function this

  // Create obj with a method bar that returns a function that
// returns its this. The returned function is created as 
// an arrow function, so its this is permanently bound to the
// this of its enclosing function. The value of bar can be set
// in the call, which in turn sets the value of the 
// returned function.
var obj = {
    bar: function() {
      var x = (() => this);
      return x;
    }
  };
  
  // Call bar as a method of obj, setting its this to obj
  // Assign a reference to the returned function to fn
  var fn = obj.bar();
  
  // Call fn without setting this, would normally default
  // to the global object or undefined in strict mode
  console.log(fn() === obj); // true
  
  // But caution if you reference the method of obj without calling it
  var fn2 = obj.bar;
  // Calling the arrow function's this from inside the bar method()
  // will now return window, because it follows the this from fn2.
  console.log(fn2()() == window); // true