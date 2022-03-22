  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Declared global variables for characters and password progression.
  function generatePassword() {
    var lowerCased = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCased = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numerical = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var creatingPassword = [];
    var finalPassword = '';


    // If user chooses proper length of password, it will continue to the next step. If not, it will end the program.
    var passwordLength = window.prompt("Choose length of password between 8 and 128 characters.");
    if ((passwordLength >= 8) && (passwordLength <= 128)) {
        console.log("It's between 8 and 128");
    } else if (passwordLength === null) {
        alert("No? Maybe some other time!");
        return; 
    } else {
        alert("Has to be a number between 8 and 128");
        return;
    }

    console.log(passwordLength);

    options();
}


// Write password to the #password input
    function writePassword() {
    var password = generatePassword() ;
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



  // Created a function to for the options the user will be able to choose from to design their generated password.
  function options() {
    // Created an object to hold all the keywords with the value's to the answer of the questions. This object will be used for creating the final password.
    var choices = { lower: lowerCasedOption, upper: upperCasedOption, numbers: numericalOption, special: specialCharactersOption };
    console.log(choices);

  var lowerCasedOption = window.confirm("Do you want lowercased letters in your generated password?")

  var upperCasedOption = window.confirm("Do you want uppercased letters in your generated password?")

  var numericalOption = window.confirm("Do you want numbers in your generated password?")

  var specialCharactersOption = window.confirm("Do you want special characters in your generated password?")

  // If user does not agree to any of the above choices, then it will call the function again until doing so.
  if ((!lowerCasedOption) && (!upperCasedOption) && (!numericalOption) && (!specialCharactersOption)) {
    alert("You must choose OK to one of the options to generate a random password");
    options();
  }
  return choices;
}



// Math Formula potentially ?

    //for (var i = 0; i < passwordLength.length; i++) {
          //var option = Math.floor(Math.random() * lowerCase.length)

        //}







/* function passwordLengthQuestion() { 

    var passwordLength = window.prompt("Choose length of password between 8 and 128 characters.");
    if ((passwordLength >= 8) && (passwordLength <= 128)) {
        console.log("It's between 8 and 128");
    } else if (passwordLength === null) {
      console.log("This works");
      return;
    } else {
      console.log("Has to be a number between 8 and 128");
      passwordLengthQuestion();
    }
} */



// Original default starter code

/*
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  */
