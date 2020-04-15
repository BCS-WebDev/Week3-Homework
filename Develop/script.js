
// ASCII Character Code Arrays
var special = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
              58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
var numeric = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
var uppercase = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var lowercase = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
                110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];


// Password Generator
function generatePassword() {
  ////// Set Password Length //////
  var passwordLength = 0;        // initialize to 0 to set var type

  // loop while password length is Not a Number, < 8, or > 128
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {    
    // prompt for password length
    passwordLength = prompt("Choose a password length: (Minimum : 8) - (Maximum : 128)");       
  }


  ////// Choose Character Types //////
  var characterTypesArray = [];       // declare empty array
  var characterTypes = [];   // character type count for insertCharacterTypes - to guarantee at least one of each included type
  var characterType = "";      // declare empty string

  // loop while characterType == done, characterTypesArray is empty, or characterTypesArray has length of 4 (includes all types)
  while (characterTypesArray.length == 0 || (!characterType.includes("done") && characterTypes.length != 4)) {   
    // prompt for character types
    characterType = prompt("Choose character types: special, numeric, uppercase, lowercase. (Type 'done' to finish)");
    characterType = characterType.toLowerCase();
    
    // if characterTypesArray does not include first special element && characterType includes 'special'
    if (!characterTypesArray.includes(33) && characterType.includes("special")) {
      // concatenate special array to characterTypesArray
      characterTypesArray = characterTypesArray.concat(special);
      // push special array to characterTypes 
      characterTypes.push(special);
    }

    // if characterTypesArray does not include first numeric element && characterType includes 'numeric'
    if (!characterTypesArray.includes(48) && characterType.includes("numeric")) {
      // concatenate numeric array to characterTypesArray
      characterTypesArray = characterTypesArray.concat(numeric);
      characterTypesArray = characterTypesArray.concat(numeric);      // concatenate twice for even distribution
      // push numeric array to characterTypes 
      characterTypes.push(numeric);
    }

    // if characterTypesArray does not include first uppercase element && characterType includes 'uppercase'
    if (!characterTypesArray.includes(65) && characterType.includes("uppercase")) {
      // concatenate uppercase array to characterTypesArray
      characterTypesArray = characterTypesArray.concat(uppercase);
      // push uppercase array to characterTypes 
      characterTypes.push(uppercase);
    }

    // if characterTypesArray does not include first lowercase element && characterType includes 'lowercase'
    if (!characterTypesArray.includes(97) && characterType.includes("lowercase")) {
      // concatenate lowercase array to characterTypesArray
      characterTypesArray = characterTypesArray.concat(lowercase);
      // push lowercase array to characterTypes 
      characterTypes.push(lowercase);
    } 
  }


  ////// Generate Temp Password //////
  var passwordTemp = "";   // declare empty password string to return
  var passwordLengthTemp = passwordLength - characterTypes.length;  // make space to guarantee inclusion of chosen character types
  for (var i = 0; i < passwordLengthTemp; i++) {
    // random index from 0 to CharacterTypesArray - 1 (inclusive)
    var randomIndex = Math.floor(Math.random() * characterTypesArray.length);  

    // get character from char code at random index of character types array
    var randomCharacter = String.fromCharCode(characterTypesArray[randomIndex]);

    // concatenate random character to passwordTemp
    passwordTemp = passwordTemp + randomCharacter;
  }


  ////// Fill Temp Password - Insert chosen character types to guarantee inclusion //////
  for (var i = 0; i < characterTypes.length; i++) {
    // random index from 0 to CharacterTypes[i].length - 1 (inclusive)
    var randomIndex = Math.floor(Math.random() * characterTypes[i].length);

    // get character from char code at random index of character types random index
    var insertCharacter = String.fromCharCode(characterTypes[i][randomIndex]);

    // insert insertCharacter at random index in passwordTemp
    var passwordRandomIndex = Math.floor(Math.random() * passwordTemp.length);  
    passwordTemp = passwordTemp.substring(0, passwordRandomIndex) + insertCharacter + passwordTemp.substring(passwordRandomIndex);
  }

  // return generated password
  return passwordTemp;
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
