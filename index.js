// 1 Write some code so the value are switched, so the variable a holds the value "8" 
// and the variable b holds the value "3"

// Rules: 
// a) Do not change any the existing code
// b) You are not allowed to type any numbers
// c) You should not redeclare the variables a and b 

var a = "3";
var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code here:
var c = a;
a = b;
b = c;

/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);


// 2-	Ask name, then prompt “Hello, name” with the initial letter capitalized and the other letters lower case:

// Create a var that stores that the user enters via prompt
var name = prompt("What is your name?");

// Capitalize the first letter of the name:

// Isolate the first char:
var firstChar = name.slice(0,1);

// Turn the first char to upper case:
var upperCaseFChar = firstChar.toUpperCase();

// Isolate the rest of the name:
var restOfName = name.slice(1,name.length);

// Turn the rest of the name to lower case:
var restOfName = restOfName.toLowerCase();

// Concactenate the first char with rest of the name:
var capName = upperCaseFChar + restOfName;

// Using the Capitalized version to greet them using an alert
alert("Hello, " + capName);

// 3-	Dog age human formula:

var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.");

// 4- Function to calculate BMI

function bmiCalculator(weight, height){

    var bmi = weight/(height * height); //Math.pow(height, 2)
    return Math.round(bmi);
}

console.log(bmi = bmiCalculator(65, 1.8));

// 5- Love Calculator

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

alert("Your loveScore is: " + loveScore + "%");



//6- Love Calculator2 (if statement)

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;// 1-100

if (loveScore > 70){
alert("Your loveScore is: " + loveScore + "%" + " You realy love each other!");
}
if (loveScore > 30 && loveScore <= 70){
  alert("Your loveScore is: " + loveScore + "%");  
}
if (loveScore <= 30){
  alert("Your loveScore is: " + loveScore + "%" + " You go together like oil and water!");  
}

//7- Sample of Array 

var guestList = ["Jhenni", "Ana", "Joao", "Gabrielle", "Marcelo"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome!")
}else{
    alert("Sorry, maybe next time!")
}

// 8- Array 2 Conditionals and arrays
//name.push(); add item in the array but in the end and name.pop(); removes the last item of the array


var output = [];
var count = 1;

function fizzBuzz() {

if (count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
}
else if (count % 3 === 0) {
    output.push("Fizz");
}
else if (count % 5 === 0) {
    output.push("Buzz");
}
else {
    output.push(count);
}

count++;
    console.log(output);
}

// 9- Array 3 FizzBuzz until 100



var output = [];
var count = 1;

function fizzBuzz() {

    while(count <= 100){

if (count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
}
else if (count % 3 === 0) {
    output.push("Fizz");
}
else if (count % 5 === 0) {
    output.push("Buzz");
}
else {
    output.push(count);
}

count++;
    }
    console.log(output);
}

// 10- FizzBuzz until 100 using for statement

var output = [];

function fizzBuzz() {

    for(var count = 1; count <= 100; count++){

if (count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
}
else if (count % 3 === 0) {
    output.push("Fizz");
}
else if (count % 5 === 0) {
    output.push("Buzz");
}
else {
    output.push(count);
}

    }
    console.log(output);
}

// 11- Printing the lyrics to the 99 bottles of beer song

var numberOfBottles = 99

function beer(){

    while (numberOfBottles > 0){

        var bottleWord = "bottle";

    if (numberOfBottles > 1) {
        
        var bottleWord = "bottles";
    } 

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer.");

numberOfBottles--;

    console.log("Take one down and pass it around, " + numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
}

