// person class definition
function Person(first,last,age,gender,interests){
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  // this.bio =
  // this.greeting =
}
Person.prototype.bio = function() {
  console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
};
Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};
// create class teacher inherit from person
function Teacher(first,last,age,gender,interests,subject){
	Person.call(this,first,last,age,gender,interests);
	this.subject = subject;
}

// add function farewall to persion
Person.prototype.farewell = function() {
  console.log(this.name.first + ' has left the building. Bye for now!');
}
// add function greeting to persion
Person.prototype.greeting = function() {
  console.log("hi i am "+this.name.first+".");
}
//new one persion call the firewell operation
var p1 = new Person("ping","yuan",12,"m","coding");
p1.farewell();



// add pareent prototype to teacher
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
//overwrite one method to sub class
Teacher.prototype.greeting = function(){
  console.log("i am teacher "+ this.name.first);
};
Teacher.prototype.say = function(){
	console.log("i am teacher "+this.name.first+" my subject is "+this.subject);;
}
//call a sub method
var t1 = new Teacher("nicolas","demange",3,"m","coding","it");
t1.greeting();

//
// function Animal() { }
//
// function Dog() { }
//
// Animal.prototype.sleep = function () {
//     alert("animal sleeping");
// };
//
// Animal.prototype.eat = function () {
//     alert("animal eating");
// };
//
// Dog.prototype = new Animal;
//
// Dog.prototype.eat = function () {
//     alert("Dog eating");
// };
//
// var dog = new Dog;
//
// dog.eat();
