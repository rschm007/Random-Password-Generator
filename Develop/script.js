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
var specialChars = ['!', '#', '$', '%', '&', '*', '+', '-', '/', ':', '<', '>', '=', '?', '@', '^', '_', '~'];

// convert lowercase letters to uppercase
var toUpperCase = function(str) {
  return str.toUpperCase();
};

// create a new array for uppercase using map() method
var alphabetUpper = alphabet.map(toUpperCase);

// Add event listener to generate button. On click, will perform the generatePassword function
generateBtn.addEventListener("click", function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
})

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
    specialCharConfirm = confirm("Would you like special characters in your password?");
    numbersConfirm = confirm("Would you like numbers in your password?");
    alphabetUpperConfirm = confirm("Would you like uppercase letters in your password?");
    alphabetLowerConfirm = confirm("Would you like lowercase letters in your password?");
  }

  // if user doesn't choose any criterias, return an alert
  if (!specialCharConfirm && !numbersConfirm && !alphabetUpperConfirm && !alphabetLowerConfirm) {
    choices = alert("You must choose at least one character category!");
  }

  // logic functions to complete user choices
  // beginning with case in which user chooses all 4
  else if ((specialCharConfirm == true) && (numbersConfirm == true) && (alphabetUpperConfirm == true) && (alphabetLowerConfirm == true) ) {
    choices = alphabet.concat(numbers, specialChars, alphabetUpper);
    return choices;
  }
  // continue on to cases in which user only chooses 3 options...
  else if ((specialCharConfirm == true) && (numbersConfirm == true) && (alphabetUpperConfirm == true)) {
    choices = specialChars.concat(numbers, alphabetUpperConfirm);
    return choices;
  }
  else if ((numbersConfirm == true) && (alphabetUpperConfirm == true) && (alphabetLowerConfirm == true)) {
    choices = numbers.concat(alphabetUpper, alphabet);
    return choices;
  }
  else if ((alphabetUpperConfirm == true) && (alphabetLowerConfirm == true) && (specialCharConfirm == true)) {
    choices = alphabetUpper.concat(alphabet, specialChars);
    return choices;
  }
  // continue on to cases in which user only chooses 2 options...
  else if ((alphabetUpperConfirm == true) && (alphabetLowerConfirm == true)) {
    choices = alphabetUpper.concat(alphabet);
    return choices;
  }
  else if ((alphabetUpperConfirm == true) && (numbersConfirm == true)) {
    choices = alphabetUpper.concat(numbers);
    return choices;
  }
  else if ((alphabetUpperConfirm == true) && (specialCharConfirm == true)) {
    choices = alphabetUpper.concat(specialChars);
    return choices;
  }
  else if ((alphabetLowerConfirm == true) && (numbersConfirm == true)) {
    choices = alphabet.concat(numbers);
    return choices;
  }
  else if ((alphabetLowerConfirm == true) && (specialCharConfirm == true)) {
    choices = alphabet.concat(specialChars);
    return choices;
  }
  else if ((numbersConfirm == true) && (specialChars == true)) {
    choices = numbers.concat(specialChars);
    return choices;
  }
  // continue on to cases in which users only choose 1 option...
  else if (alphabetUpperConfirm == true) {
    choices = alphabetUpper;
    return choices;
  }
  else if (alphabetLowerConfirm == true) {
    choices = alphabet;
    return choices;
  }
  else if (numbersConfirm == true) {
    choices = numbers;
    return choices;
  }
  else if (specialCharConfirm == true) {
    choices = specialChars;
    return choices;
  };

  // Generate an empty string as a place to put user generated length
  passwordArr = [];

  // use a for loop to loop through all choice array options...
  for (i = 0; i < passwordChars; i++) {
    // push choice array options into empty passwordArr
    var userChoices = choices[Math.floor(Math.random() * choices.length)];
    passwordArr.push(userChoices);
  }

  // join the passwordArr array to convert it into a string. Returns password
  var password = passwordArr.join("");
  return password;
}




  // console.logs to confirm receipt of user choices
  console.log("password - ", password);