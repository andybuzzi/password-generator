// Assignment code here
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "|",
  "~",
];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Function to generate password

function generatePassword() {
  var passLength = parseInt(prompt("How long should your password be?"));

  // choose lowercase, uppercase, numeric, and/or special characters

  var hasUpperCase = confirm(
    "Would you like to use uppercase letters in your password?"
  );
  var hasLowerCase = confirm(
    "Would you like to use lowercase letters in your password?"
  );
  var hasNumbers = confirm("Would you like to use numbers in your password?");
  var hasSpecialCharacters = confirm(
    "Would you like to use special characters in your password?"
  );

  // at least one character type should be selectd

  if (
    hasUpperCase == false &&
    hasLowerCase == false &&
    hasNumbers == false &&
    hasSpecialCharacters == false
  ) {
    alert("You need to select at least one special character");
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
