const arrLower = [
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
const arrUpper = [
  "A",
  "B",
  "C",
  "D",
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
const arrSpecial = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "-",
  ":",
  ";",
  "/",
  "?",
  " ",
  ",",
  "<",
  "`",
  ">",
];
const arrNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const generateEl = document.querySelector("#generate");

generateEl.addEventListener("click", writePassword);
// // generateEl.addEventListener("click", getPasswordOptions() );

function getPasswordOptions() {
  let length = parseInt(
    prompt("How many characters long would you like your password to be?")
  );
  if (isNaN(length) === true) {
    alert("Password length must be a number and no greater than 128.");
    return;
  }
  if (length < 8) {
    alert("Password must be atleast 8 characters.");
    return;
  }

  if (length >= 128) {
    alert("Max length is 128 characters!");
    return;
  }
  //Ask a series of questions to discern the bounderies of the randomly generated pw
  let isUpper = confirm(
    "Would you like upper case characters in your password?"
  );
  let isLower = confirm(
    "Would you like lower case characters in your password?"
  );
  let isNumber = confirm("Would you like numbers in your password?");
  let isSpecial = confirm(
    "Would you like special characters in your password?"
  );

  if (
    isUpper === false &&
    isLower === false &&
    isNumber === false &&
    isSpecial === false
  ) {
    alert("You have to accept atleast 1 character type.");

    return;
  }
  let passwordOptions = {
    length: length,
    isUpper: isUpper,
    isLower: isLower,
    isSpecial: isSpecial,
    isNumber: isNumber,
  };

  return passwordOptions;
}

function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randDigit = arr[randIndex];
  return randDigit;
}
function generatePW() {
  let options = getPasswordOptions();
  let result = [];
  let possibleCharacters = [];

  if (options.isLower) {
    possibleCharacters = possibleCharacters.concat(arrLower);
  }
  if (options.isUpper) {
    possibleCharacters = possibleCharacters.concat(arrUpper);
  }
  if (options.isNumber) {
    possibleCharacters = possibleCharacters.concat(arrNumber);
  }
  if (options.isSpecial) {
    possibleCharacters = possibleCharacters.concat(arrSpecial);
  }
  console.log(possibleCharacters);

  for (var i = 0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  return result.join("");
}

function writePassword() {
  let password = generatePW();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//could dislay these as checkboxes in future.

//connect the button

//add the output into a string called result then connect that with placeholder.
