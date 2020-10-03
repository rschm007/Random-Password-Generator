// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables for user input data gathered from generatePassword function
var passwordChars;
var specialCharConfirm;
var numbersConfirm;
var alphabetUpperConfirm;
var alphabetLowerConfirm;

// declaring the var choices outside of a function for concatenation
var choices;

// Arrays for password criteria (alphabet[will convert lowercase, uppercase later], numbers, special characters)
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!', '#', '$', '%', '&', '*', '+', '-', '/', ':', '<', '>', '=', '?', '@', '[', ']', '^', '_', '~'];


// convert lowercase letters to uppercase
var toUpperCase = function(str) {
  return str.toUpperCase();
};

// create a new array for uppercase using map() method
var alphabetUpper = alphabet.map(toUpperCase);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function to generate series of prompts when user clicks "Generate Password" button
function generatePassword() {
  // ask the user how many characters should be in their password
  passwordChars = parseInt(prompt("How many characters should be in your new password? Please choose between 8 and 128."));
  // sets invalid entry range: > 128, < 8, and null entry
  if ((passwordChars > 128) || (passwordChars < 8) || (!passwordChars)) {
    alert("Invalid entry. Your password must be between 8 and 128 characters");
    passwordChars = parseInt(prompt("How many characters should be in your new password? Please choose between 8 and 128."));
  // continues once user input is confirmed with a valid number range
  // begins with user confirmation prompts for password entries
  } else {
    var specialCharConfirm = confirm("Would you like special characters in your password?");
    var numbersConfirm = confirm("Would you like numbers in your password?");
    var alphabetUpperConfirm = confirm("Would you like uppercase letters in your password?");
    var alphabetLowerConfirm = confirm("Would you like lowercase letters in your password?");
  };

  // if user doesn't choose any criterias, return an alert
  if (!specialCharConfirm && !numbersConfirm && !alphabetUpperConfirm && !alphabetLowerConfirm) {
    choices = alert("You must choose at least one character category!");
  }

  // logic functions to complete user choices
  // beginning with case in which user chooses all 4
  else if (specialCharConfirm && numbersConfirm && alphabetUpperConfirm && alphabetLowerConfirm ) {
    choices = alphabet.concat(numbers, specialChars, alphabetUpper);
  }
  // continue on to cases in which user only chooses 3 options...
  else if (specialCharConfirm && numbersConfirm && alphabetUpperConfirm) {
    choices = specialChars.concat(numbers, alphabetUpperConfirm);
  }
  else if (numbersConfirm && alphabetUpperConfirm && alphabetLowerConfirm) {
    choices = numbers.concat(alphabetUpper, alphabet);
  }
  else if (alphabetUpperConfirm && alphabetLowerConfirm && specialCharConfirm) {
    choices = alphabetUpper.concat(alphabet, specialChars);
  }
  // continue on to cases in which user only chooses 2 options...
  else if (alphabetUpperConfirm && alphabetLowerConfirm) {
    choices = alphabetUpper.concat(alphabet);
  }
  else if (alphabetUpperConfirm && numbersConfirm) {
    choices = alphabetUpper.concat(numbers);
  }
  else if (alphabetUpperConfirm && specialCharConfirm) {
    choices = alphabetUpper.concat(specialChars);
  }
  else if (alphabetLowerConfirm && numbersConfirm) {
    choices = alphabet.concat(numbers);
  }
  else if (alphabetLowerConfirm && specialCharConfirm) {
    choices = alphabet.concat(specialChars);
  }
  else if (numbersConfirm && specialChars) {
    choices = numbers.concat(specialChars);
  }
  // continue on to cases in which users only choose 1 option...
  else if (alphabetUpperConfirm) {
    choices = alphabetUpper;
  }
  else if (alphabetLowerConfirm) {
    choices = alphabet;
  }
  else if (numbersConfirm) {
    choices = numbers;
  }
  else if (specialCharConfirm) {
    choices = specialChars;
  };

  // Generate random string result depending on user choices...
  var password = [];
  // use a for loop to loop through all choice array options...
  for (i = 0; i < passwordChars; i++) {
    var userChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(userChoices);
    return userChoices;
  }

}

// push password value into DOM textbox
 


  // console.logs to confirm receipt of user choices
  console.log("passwordChars - ", passwordChars);
  console.log("specialCharConfirm - ", specialCharConfirm);
  console.log("numbersConfirm - ", numbersConfirm);
  console.log("alphabetUpperConfirm - ", alphabetUpperConfirm);
  console.log("alphabetLowerConfirm - ", alphabetLowerConfirm);
  console.log("choices - ", choices);
  console.log("password - ", password);