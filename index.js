// 1-	Ask name, then prompt “Hello, name” with the initial letter capitalized and the other letters lower case:

var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
var restOfName = restOfName.toLowerCase();
var capName = upperCaseFChar + restOfName;
alert("Hello, " + capName);

// 2-	Dog age human formula:

var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.");

// 3- Function to calculate BMI

function bmiCalculator(weight, height){

    var bmi = weight/(height * height); //Math.pow(height, 2)
    return Math.round(bmi);
}

console.log(bmi = bmiCalculator(65, 1.8));

// 4- Love Calculator

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

alert("Your loveScore is: " + loveScore + "%");

//5- Love Calculator2 (if statement)

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

//6- Sample of Array 

var guestList = ["Jhenni", "Ana", "Joao", "Gabrielle", "Marcelo"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome!")
}else{
    alert("Sorry, maybe next time!")
}

// 7- Array 2 Conditionals and arrays
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

// 8- Array 3 FizzBuzz until 100



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

// 9- FizzBuzz until 100 using for statement

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

