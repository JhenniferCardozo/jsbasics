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
