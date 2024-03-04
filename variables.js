"use strict";
console.log("1st type of variable-var");
// We can print multiple statements using the same variable names in "var" which means we can reinitialize and reassigned the values.
var favColor = '1st statement using var favColor=""';
console.log(favColor);
var favColor = '2nd statement using var favColor=""';
var favColor = '3rd statemt using the same variable name';
console.log(favColor);
console.log("2nd type of variable-let");
// We can't reinitialize in let but we can reassign or override the values
let myColor = 'First statement using let myColor=""';
console.log(myColor);
myColor = 'We can just value override  redeclaring it without using let as variablename="" and cant reinitialize unlike in var ';
console.log(myColor);
console.log("3rd type of variable-const");
// Neither we can reassign the values nor we can reinitialize and thats what makes const different from other variables!
const password = 'Const is a more strict variable which doesnt allow to use its name multiple times';
const username = '\n For eg:everyone has a unique pass and username';
console.log(password + username);
