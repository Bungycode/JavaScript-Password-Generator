  // Assignment Code. Copy and Pasted below at the bottom
  var generateBtn = document.querySelector("#generate");
  
   // Created a function to for the options the user will be able to choose from to design their generated password.
   // Added console.logs to check the progression of the password creation
  function options() {
      var choices = {};
      var lowerCasedOption = window.confirm("Do you want lowercased letters in your generated password?")
      if (lowerCasedOption) {
          choices.lower = lowerCasedOption;
          console.log(choices);
      } else {
          console.log("Password will not contain any lowercased letters!")
      }
    var upperCasedOption = window.confirm("Do you want uppercased letters in your generated password?")
      if (upperCasedOption) {
          choices.upper = upperCasedOption;
          console.log(choices);
      } else {
          console.log("Password will not contain any uppercased letters!")
      }
    var numericalOption = window.confirm("Do you want numbers in your generated password?")
      if (numericalOption) {
          choices.numbers = numericalOption;
          console.log(choices);
      } else {
          console.log("Password will not contain any numbers!")
      }
    var specialCharactersOption = window.confirm("Do you want special characters in your generated password?")
      if (specialCharactersOption) {
          choices.special = specialCharactersOption;
          console.log(choices);
      } else {
          console.log("Password will not contain any special characters!")
      }

    // If user does not agree to any of the above choices, then it will call the function again until doing so.
    if ((!lowerCasedOption) && (!upperCasedOption) && (!numericalOption) && (!specialCharactersOption)) {
        console.log("Not picking a choice will cause the program to end")
        return;
    }
    return choices;

  }

  // Declared local variables for characters and password progression.
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
        alert("Has to be a number between 8 and 128... Try again!");
        return;
    }

    console.log(passwordLength);

    // Create a variable and assign it the value of options() function call
    var chosenOptions = options();

    // Program will end if the user did not select a type of character to be used in the password
    if (!chosenOptions) {
      console.log("Program ending because none of the options were selected");  
        alert("You must choose OK to one of the options to generate a random password... ending program.");
        return;
    }

    // Succession if statements to execute a for...of statement if the condition is met and loop through every value of the iterable object and then add them to the creatingPassword variable through the .push method with i as its value.
    if (chosenOptions.lower) {
        for (var i of lowerCased) {
            creatingPassword.push(i);
            console.log(creatingPassword);
        }
    }

    if (chosenOptions.upper) {
        for (var i of upperCased) {
            creatingPassword.push(i);
        }
    }

    if (chosenOptions.numbers) {
        for (var i of numerical) {
            creatingPassword.push(i);
        }
    }

    if (chosenOptions.special) {
        for (var i of specialCharacters) {
            creatingPassword.push(i);
        }
    }
    chosenOptions['length'] = passwordLength;
    console.log(creatingPassword);

    // Used variable passwordLength as the condition that needs to be met in order to get the correct number of characters in the password
    for (var i = 0; i < passwordLength; i++) {
        console.log(creatingPassword);
        finalPassword += creatingPassword[Math.floor(Math.random() * creatingPassword.length)];
        // return finalPassword;    I previously put return right here and it would return my value after one iteration. So make sure you dont do that!
    }
    console.log(finalPassword)
    return finalPassword;
}


// Added console.logs to make sure the process runs smoothly
// Write password to the #password input
    function writePassword() {
    var password = generatePassword();
    console.log(password);

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(passwordText);
}

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);



// below is different approaches I was going to use for creating this password generator but decided not to use them.
// The original code is also listed below in case I want to create a different set of code for this game.



  // var choices = { lower: lowerCasedOption, upper: upperCasedOption, numbers: numericalOption, special: specialCharactersOption };
  //  console.log(choices);



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
