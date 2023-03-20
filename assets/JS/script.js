// Password Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

var password = generatePassword();

var passwordText = document.querySelector("#password");

passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

var length = prompt("How many characters would you like to choose? (8-128 characters)")

if (length < 8 || length > 128 || isNaN(length)) {

alert("Please enter a valid length between 8 and 128.");

return"";

}

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var passwordChars = "";

var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Inlcude numeric characters?");
var includeSpecial = confirm("Include special characters?");

if (includeLowercase){

  passwordChars += lowercaseChars;
}
if (includeUppercase){

  passwordChars += uppercaseChars;
}
if (includeNumeric){

  passwordChars += numericChars;
}
if (includeSpecial){

  passwordChars += specialChars;
}

// adding the ! mark will stop the previous functions that have been done. negating the previous function statments being IF Before.
// if user doesnt chose all 4 of the charset then will give alert and reset.

if (!lowercaseChars && !uppercaseChars && !numericChars && !specialChars) {

alert("You must choose at least one character type!");

generatePassword();

}

//randomizes the character sets chosen to make up the password

var password = ""

for (var i = 0; i < length; i++) {

var randomIndex = Math.floor(Math.random() * passwordChars.length);

password += passwordChars.charAt(randomIndex);

}

//previous password in alert box and if you ok it, then password populates the text in hmtl

alert(password)

return password;

}
