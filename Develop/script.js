// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables for user input data from generatePassword function
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

  // switch statement to evaluate conditions of user choice values
  s
}

  // console.logs to confirm receipt of user choices
  console.log(passwordChars);
  console.log(specialCharConfirm);
  console.log(numbersConfirm);
  console.log(alphabetUpperConfirm);
  console.log(alphabetLowerConfirm);