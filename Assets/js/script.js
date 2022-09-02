// Assignment Code
var generateBtn = document.querySelector("#generate");

//character arrays for password
var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//joined arrays for all possible user selections
var alphaCombined = alpha.concat(alphaUpper);
var numAlpha = alpha.concat(numbers);
var alphaSpec = alpha.concat(specialCharacters);
var alphaNumSpec = alpha.concat(numbers, specialCharacters);
var alphaUpperSpec = alpha.concat(alphaUpper, specialCharacters);
var alphaUpperNum = alpha.concat(alphaUpper, numbers);
var allCombined = alpha.concat(specialCharacters, alphaUpper, numbers);

//main function for gneerating the password
var generatePassword = function() 
{
  //return value for generatePassword() function
  var passwordGen = [];
  var random = 0;
  var i = 0;
  var length = 0;

  length = window.prompt("Choose a length for your password between 8 and 128")

  if ((length < 8) || (length > 128)) {
    window.alert("Please generate again and enter a length betweeen 8 and 128");

    return "Invalid";
  }

  //var incldueLowercase = window.confirm("Would you like to include lowercase letters?")

  var includeSpecial = window.confirm("Would you like your password to contain special characters?");

  var upperCase = window.confirm("Do you want to include uppercase characters?");

  var numbers = window.confirm("Would you like to include numbers?");

  if (includeSpecial && upperCase && numbers) {   //If user selected all available options
    for (i = 0; i < length; i++)  {
      random = Math.floor(Math.random() * allCombined.length);
      passwordGen[i] = allCombined[random];
    }
  } else if (includeSpecial && numbers && !upperCase) {   //if user wants special characters and numbers but no upper case letters
    for (i = 0; i < length; i++) {
      random = Math.floor(Math.random() * alphaNumSpec.length);
      passwordGen[i] = alphaNumSpec[random];
    }
  } else if (numbers && !includeSpecial && !upperCase) {    //If user wants numbers, letters and nothing else
    for (i = 0; i < length; i++) {
      random = Math.floor(Math.random() * numAlpha.length);
      passwordGen[i] = numAlpha[random];
    }
  } else if (!includeSpecial && !numbers && upperCase) {    //if user wants only lower and upper case letters and nothing else
    for (i = 0; i < length; i++) {
      random = Math.floor(Math.random() * alphaCombined.length)
      passwordGen[i] = alphaCombined[random];
    }
  } else if (includeSpecial && !numbers && !upperCase) {
    for (i = 0; i < length; i++) {
      random = Math.floor(Math.random() * alphaSpec.length)   //if user only wants letters and special characters 
      passwordGen[i] = alphaSpec[random];
    }
  } else if (includeSpecial && upperCase && !numbers) {   //if user wants letters, special characters, and upper case letters but no numbers
    for (i = 0; i < length; i++) {
      random = Math.floor(Math.random() * alphaUpperSpec.length)
      passwordGen[i] = alphaUpperSpec[random];
    }
  } else if (!includeSpecial && upperCase && numbers) {   //if user wants letters, special characters, and upper case letters but no numbers
    for (i = 0; i < length; i++) {
      random = Math.floor(Math.random() * alphaUpperNum.length)
      passwordGen[i] = alphaUpperNum[random];
    }
  } else {    //if user does not select at least one of the above options, it will return Invalid
      window.alert("Please generate again and select at least one of the options.");
      return "Invalid";
  }

  //join method with "" parameters allows all indexes of the array to combine with no spaces producing a seamless string of characters for the password
  passwordGen = passwordGen.join("");

  return passwordGen;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);