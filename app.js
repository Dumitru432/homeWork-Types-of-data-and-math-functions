// 1. Request a three-digit number from a user and check whether it has identical digits in it.

/* let number = prompt("enter a three-digit number: ");
let identicalDigits = false;

if (number.length === 3) {
  if (
    number[0] === number[1] ||
    number[0] === number[2] ||
    number[1] === number[2]
  ) {
    identicalDigits = true;
  }
}

if (identicalDigits === true) {
  alert("The number has identical digits.");
} else {
  alert("The number does not have identical digits. ");
}
 */

// 2. Request a five-unit number from a user and check whether it is a palindrome.

/* let number = prompt("enter a five-unit number");
let result = false;
if (number.length === 5) {
  if (number[0] === number[4] && number[1] === number[3]) {
    result = true;
  }
}
if (result) {
  console.log("the number is a palindrome!");
} else {
  console.log("the number is not a palindrome.");
} */

// 3. Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result.

/* let currencyConvertor = prompt("put your amount in USD");
let euro = 0.93;
let convertEuro = currencyConvertor * 0.93;
let sek = 10.79;
let convertToSek = currencyConvertor * sek;
let aud = 1.48;
let convertToAud = currencyConvertor * aud;
console.log(
  `Your amount in usd is ${currencyConvertor} and in euro will be ${convertEuro}`
);
console.log(
  `Your amount in usd is ${currencyConvertor} and in Swedish Krona will be ${convertToSek}`
);
console.log(
  `Your amount in usd is ${currencyConvertor} and in Swedish Krona will be ${convertToAud}`
); */


// 4. Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.

/* let circumference = prompt('enter the length of the circumference: ')
let squarePerimeter = prompt('enter the perimeter of the square')

let radius = circumference / (2 * Math.PI); 
let sideLength = squarePerimeter / 4

if (sideLength >= (2 * radius)) {
  console.log("The circumference can fit within the square.");
} else {
  console.log("The circumference cannot fit within the square.");
} */

// 5. Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.

let inputDate = prompt('Enter a date (dd:mm:yy)')

// nu imi dau seama cum trebuie sa fac acest exercitiu


