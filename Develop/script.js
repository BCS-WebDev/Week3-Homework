
// ASCII Character Code Arrays
var special = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
              58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
var numeric = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
var uppercase = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var lowercase = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
                110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];


////// Password Length prompt //////
function passwordLengthPrompt() {
  // loop while password length is Not a Number, < 8, or > 128
  while (isNaN(userLength) || userLength < 8 || userLength > 128) {    
    var userLength = prompt("Choose a password length: (Minimum : 8) - (Maximum : 128)");       // prompt for password length
  }

  return userLength;   // return Length
}


////// Choose Character Types prompt //////
function characterTypesPrompt(characterPoolArray, characterTypesArray) {
  // loop while userCharacters != done & characterPoolArray has length of 4 (includes all types), or characterPoolArray is empty
  while (characterPoolArray.length == 0 || (!userCharacters.includes("done") && characterTypesArray.length != 4)) {   
    // prompt for character types
    var userCharacters = prompt("Choose character types: special, numeric, uppercase, lowercase. (Type 'done' to finish)");
    userCharacters = userCharacters.toLowerCase();    // change string to lower case
    
    // if characterPoolArray does not include first special element && characterType includes 'special'
    if (!characterPoolArray.includes(33) && userCharacters.includes("special")) {
      characterPoolArray.push.apply(characterPoolArray, special);  // concatenate special array to characterPoolArray
      characterTypesArray.push(special);   // push special array to characterTypesArray 
    }

    // if characterPoolArray does not include first numeric element && characterType includes 'numeric'
    if (!characterPoolArray.includes(48) && userCharacters.includes("numeric")) {
      characterPoolArray.push.apply(characterPoolArray, numeric);      // concatenate numeric array to characterPoolArray
      characterPoolArray.push.apply(characterPoolArray, numeric);      // concatenate twice for even distribution
      characterTypesArray.push(numeric);  // push numeric array to characterTypesArray 
    }

    // if characterPoolArray does not include first uppercase element && characterType includes 'uppercase'
    if (!characterPoolArray.includes(65) && userCharacters.includes("uppercase")) {
      characterPoolArray.push.apply(characterPoolArray, uppercase);   // concatenate uppercase array to characterPoolArray
      characterTypesArray.push(uppercase);   // push uppercase array to characterTypesArray 
    }

    // if characterPoolArray does not include first lowercase element && characterType includes 'lowercase'
    if (!characterPoolArray.includes(97) && userCharacters.includes("lowercase")) {
      characterPoolArray.push.apply(characterPoolArray, lowercase);   // concatenate lowercase array to characterPoolArray
      characterTypesArray.push(lowercase);   // push lowercase array to characterTypesArray 
    } 
  }
}


////// Temporary Password Generator //////
function tempPasswordGenerator(passwordLength, characterPoolArray, characterTypesArrayLength) {
  var passwordTemp = "";
  var passwordLengthTemp = passwordLength - characterTypesArrayLength;  // make space to guarantee inclusion of chosen character types
                                                                   
  for (var i = 0; i < passwordLengthTemp; i++) {
    var randomIndex = Math.floor(Math.random() * characterPoolArray.length); // random index from 0 to CharacterTypesArray - 1 (inclusive)
    var randomCharacter = String.fromCharCode(characterPoolArray[randomIndex]); // get character from char code at random index of character types array
    passwordTemp = passwordTemp + randomCharacter;  // concatenate random character to passwordTemp
  }

  return passwordTemp;    // return passwordTemp
}


////// Character Type Insertion //////
function characterTypeInsertion(tempUserPassword, characterTypesArray) {
  ////// Fill Temp Password - Insert chosen character types to guarantee inclusion //////
  for (var i = 0; i < characterTypesArray.length; i++) {
    // random index from 0 to CharacterTypesArray[i].length - 1 (inclusive)
    var randomIndex = Math.floor(Math.random() * characterTypesArray[i].length);

    // get character from char code at random index of character types random index
    var insertCharacter = String.fromCharCode(characterTypesArray[i][randomIndex]);

    // insert insertCharacter at random index in tempUserPassword
    var passwordRandomIndex = Math.floor(Math.random() * tempUserPassword.length);  
    tempUserPassword = tempUserPassword.substring(0, passwordRandomIndex) + insertCharacter + tempUserPassword.substring(passwordRandomIndex);
  }

  return tempUserPassword;  // return tempUserPassword
}


////// Password Generator //////
function generatePassword() {
  // Set Password Length
  var passwordLength = passwordLengthPrompt();        // call passwordLenghtPrompt - passwordLength is string type

  // Choose Character Types
  var characterPool = [];       // declare empty array for character pool
  var characterTypes = [];   // character types array - to be used to guarantee at least one of each included type via insertion
  characterTypesPrompt(characterPool, characterTypes);    // call characterTypesPrompt and pass arrays to fill

  // Generate Temp Password
  var userPassword = tempPasswordGenerator(passwordLength, characterPool, characterTypes.length);   // call tempPasswordGenerator

  // Fill Temp Password - Insert chosen character types to guarantee inclusion
  userPassword = characterTypeInsertion(userPassword, characterTypes);

  // return generated password
  return userPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
