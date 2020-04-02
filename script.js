
var arrLower = ["a", "b", "c", "d", "e", "f", 'g', "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrUpper = ["A", "B", "C", "D", "F", 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', ':', ';', '/', '?', ' ', ',', '<', '`', '>'];
var arrNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const generateEl = document.querySelector('#generate');

generateEl.addEventListener("click", writePassword);
// // generateEl.addEventListener("click", getPasswordOptions() );

function getPasswordOptions() {
  var length = parseInt(prompt("How many characters long would you like your pw to be?"));
  if (isNaN(length) === true) {
    alert("Password length must be a number");
    return;
  }
  if (length < 8) {
    alert(' password must be atleast 8 characters.');
    return;
  }

  if (length >= 128) {
    alert("Max length is 128 characters!");
    return;
  }

  var isUpper = confirm("Would you like Up per Case characters in your password?");
  var isLower = confirm("Would you like Lower Case characters in your password?");
  var isNumber = confirm("Would you like numbers?");
  var isSpecial = confirm("Would you like Special Case characters in your password?");

  if (
    isUpper === false && isLower === false && isNumber === false && isSpecial === false
  ) {
    alert("You have to accept atleast 1 character type.");

    return;
  }
  var passwordOptions = {
    length: length,
    isUpper: isUpper,
    isLower: isLower,
    isSpecial: isSpecial,
    isNumber: isNumber,
  };

  return passwordOptions;

}






function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randDigit = arr[randIndex];
  return randDigit;
};
function generatePW() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];

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
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  return result.join("");
};

function writePassword() {
  var password = generatePW();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//could dislay these as checkboxes in future.

//connect the button

//add the output into a string called result then connect that with placeholder.
