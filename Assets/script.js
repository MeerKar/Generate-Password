// Assignment Code

function generatePassword() {
  var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperCases = [
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
  var lowerCases = [
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
  var special = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  var pass = [];

  // input characters
  var digi = window.prompt(
    "How many characters do you want in your password ? "
  );
  if (digi < 8 || digi > 128) {
    alert(" Please  choose a valid number of characters between 8 and 128.");
    return generatePassword();
  } else if (isNaN(digi)) {
    digi = window.alert("Please enter a valid number.");
    return generatePassword();
  } else {
    window.alert("Your password will be " + digi + " characters long.");
  }

  var lowerCase = window.confirm("Do you want lowercase characters ? ");
  if (lowerCase) {
    window.alert("Your password will have lowercase characters");
  } else {
    window.alert("Your password will  NOT have uppercase characters");
  }
  var upperCase = window.confirm("Do you want uppercase characters ? ");
  if (upperCase) {
    window.alert("Your password will have uppercase characters");
  } else {
    window.alert("Your password will  NOT have uppercase characters");
  }
  var Digit = window.confirm("Do you want use numbers ? ");
  if (Digit) {
    window.alert("Your password will have numbers.");
  } else {
    window.alert("Your password will  NOT have numbers");
  }
  var Specials = window.confirm("Do you want use special characters ? ");
  if (Specials) {
    window.alert("Your password will have special characters.");
  } else {
    window.alert("Your password will  NOT have special characters");
  }
  if (!lowerCase && !upperCase && !Digit && !Specials) {
    return "Please select at least one character type.";
  }

  // Concatenating values
  if (lowerCase) {
    pass = pass.concat(lowerCases);
  }
  if (upperCase) {
    pass = pass.concat(upperCases);
  }
  if (Digit) {
    pass = pass.concat(digits);
  }
  if (Specials) {
    pass = pass.concat(special);
  }

  // For final password randomly select the character
  var finalPassword = "";
  for (var i = 0; i < digi; i++) {
    var pwd = [Math.floor(Math.random() * pass.length)];
    finalPassword = finalPassword + pass[pwd];
  }
  return finalPassword;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
