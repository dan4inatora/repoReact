//Three ways to create an objec

let newObj = {};
let newObj1 = Object.create(Object.prototype);
let newObj2 = new Object();

//generators/ iterators


//OOP
//normal function to create object
function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
      console.log('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}

const dan = createNewPerson("Dancho");
console.log(dan.name);
dan.greeting()

//Consructor function
//this keyword is used to say - whenever an istance is created
//the name property will equal the name value passed to the consturcto function
//same goes for the greetings funtion
function Person(name) {
    this.name = name;
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name + '.');
    };
}

const dan2 = new Person("Dan");
console.log(dan2.name);
dan2.greeting();


//creating an object with object literral
let dan3 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  });

//creating an object with the object create method

let dan4 = Object.create(dan3);
console.log(dan4.name);

//Example of using this
//The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  };

//JS syntax for oop and inheritance
let Book = function(name) { 
  this.name = name
}
let newBook = function(name) {
  Book.call(this, name)
} 
newBook.prototype = Object.create(Book.prototype);
const book1 = new newBook("The Alchemist");

//ECMAScript syntax for the same thing
class Bookc {
  constructor(name) {
     this.name = name
  }
}
class inheritedBook extends Bookc { 
  constructor(name) {
     super(name);
  }
}
const book3 = new inheritedBook("The Alchemist");

//Encapsulation
const Bookf = function(t, a) {
  let title = t; 
  let author = a; 
  
  return {
     summary : function() { 
       console.log(`${title} written by ${author}.`);
     } 
  }
}
const book2 =new Bookf('Hippie', 'Paulo Coelho');
book2.summary();
console.log(book2.title); //this is undefined


const Booke = function(getTitle, getAuthor) { 
  // Private variables / properties  
  let title = getTitle; 
  let author = getAuthor;
// Public method 
  this.giveTitle = function() {
     return title;
  }
  
  // Private method
  const summary = function() {
     return `${title} written by ${author}.`
  }
// Public method that has access to private method.
  this.giveSummary = function() {
     return summary()
  } 
}
const booke = new Booke('Hippie', 'Paulo Coelho');
console.log(booke.giveSummary());
console.log(booke.giveTitle());
//console.log(booke.summary()); cannot find a method summary of book, because it is private


//INHERITANCE
let Corebook = function(title) {
  this.title = title
}
Corebook.prototype.titlem = function() {
  console.log(`name of the book is ${this.title}`);
}
Corebook.prototype.summary = function() {
  console.log(`${this.title} is written by ${this.author}`);
}
let BookInh = function(title, author) {
  Corebook.call(this, title);
  this.author = author;
}
BookInh.prototype = Object.create(Corebook.prototype);
let bookinh = new BookInh('The Alchemist', 'Paulo Coelho');
bookinh.titlem();
bookinh.summary();

//POLYMORPHISM

let book11 = function () {}
book11.prototype.summary = function() {
   return "summary of book1"
}
let book21 = function() {}
book21.prototype = Object.create(book11.prototype);
book21.prototype.summary = function() {                 
   return "summary of book2"
}
let book31 = function() {}
book31.prototype = Object.create(book11.prototype);
book31.prototype.summary = function() {
   return "summary of book3"
}
   
var books = [new book11(), new book21(), new book31()];
books.forEach(function(book){
   console.log(book.summary());
});

//DEFINE OBJECT LIKE A REAL G
function DogObject(name, age) {
  this.name = name;
  this.age = age;
}
DogObject.prototype.speak = function() {
  return "I am a dog";
}
let john = new DogObject("John", 45);


//TRANSLATION OF JAVASCRIPT OOP TO ECMASCRIPT CLASSES

class Animals {
  constructor(name, specie) {
      this.name = name;
      this.specie = specie;
  }
  sing() {
      return `${this.name} can sing`;
  }
  dance() {
      return `${this.name} can dance`;
  }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);
//bingo object references the Animal prototype which in turn references the Object prototype

//JS VERSION
function Animalsf(name, specie) {
  this.name = name;
  this.specie = specie;
}
Animalsf.prototype.sing = function(){
  return `${this.name} can sing`;
}
Animalsf.prototype.dance = function() {
  return `${this.name} can dance`;
}
let Bingof = new Animalsf("Bingo", "Hairy");

//INHERITANCE WITH ECMASCRIPT

class Animals {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
  sing() {
      return `${this.name} can sing`;
  }
  dance() {
      return `${this.name} can dance`;
  }
} 
class Cats extends Animals {
  constructor(name, age, whiskerColor) {
      super(name, age);
      this.whiskerColor = whiskerColor;
  }
  whiskers() {
      return `I have ${this.whiskerColor} whiskers`;
  }
}
let clara = new Cats("Clara", 33, "indigo");

//TRANSLATION INTO JS
function Animals(name, age) {
  let newAnimal = Object.create(animalConstructor);
  newAnimal.name = name;
  newAnimal.age = age;
  return newAnimal;
}
let animalConstructor = {
  sing: function() {
      return `${this.name} can sing`;
  },
  dance: function() {
      return `${this.name} can dance`;
  }
}
function Cats(name, age, whiskerColor) {
  let newCat = Animals(name, age);
  Object.setPrototypeOf(newCat, catConstructor);
  newCat.whiskerColor = whiskerColor;
  return newCat;
}
let catConstructor = {
  whiskers() {
      return `I have ${this.whiskerColor} whiskers`;
  }
}
Object.setPrototypeOf(catConstructor, animalConstructor);
const clara = Cats("Clara", 33, "purple");
clara.sing();
clara.whiskers();

//INHERITANCE
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
//setting teachers prototype to reference Person prototype
Teacher.prototype = Object.create(Person.prototype);

//Class inheritance
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

//Every object has a prototype referencing the Object prototype, unless specified otherwise
//If specified otherwise __proto__ is an object and has it's own __proto__ getting you one step down the prototipe chain
//The end of the prototype chain is the Object prototype