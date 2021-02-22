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

