// 1) Write a function that displays the result of 5+6+7+8+9+10.

// function add() {
//   return 5 + 6 + 7 + 8 + 9 + 10;
// }

// console.log(add());

// 2) Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8.
// 3) Write a new function that returns the perimeter of a rectangle with the width and height being specified as arguments to the function.

// function per(w, h) {
//   return w * h;
// }

// console.log(per(5, 8));

// 4) Write a function that converts fahrenheit, given as an argument, to celcius.

// function fToC(degf) {
//   return ((degf - 32) * 5) / 9;
// }

// console.log(fToC(100));

// 5) Write a function that converts celcius, given as an argumen, to fahrenheit.

// function cToF(degc) {
//   return (degc * 9) / 5 + 32; //formulat for Celsius to Fahrenheit is (degrees C * 9/5) + 32
// }

// console.log(cToF(40));

// 6) Write a function that calculates tip with 2 arguments, the bill and the tip percentage. Use the build-in JS toFixed() method to round the answer to two decimal places.

// function billTotal(bill, billtip) {
//   sum = bill * billtip + bill;
//   return sum.toFixed(2);
// }
// console.log(billTotal(75.5, 0.15));

// 7) Write a function that takes a number an an argument and returns the sum of each individual digit. So an input of 998 would return 26 (because 9 + 9 + 8) is 26.

// function sumOfDigits(x) {
//   let num = x;
//   let lastDigit = 0;
//   let sumOfAllDigits = 0;
//   while (num != 0) {
//     lastDigit = num % 10;
//     sumOfAllDigits = sumOfAllDigits + lastDigit;
//     num = parseInt(num / 10);
//   }
//   return sumOfAllDigits;
// }
// console.log(sumOfDigits(9987234));

// 8) Write the same function above, but that takes an input from the built-in browser function, prompt().

// function sumOfDigits() {
//   let x = prompt("Enter a number: ", Number(" "));
//   let num = x;
//   let lastDigit = 0;
//   let sumOfAllDigits = 0;
//   while (num != 0) {
//     lastDigit = num % 10;
//     sumOfAllDigits = sumOfAllDigits + lastDigit;
//     num = parseInt(num / 10);
//   }
//   return sumOfAllDigits;
// }
// console.log(sumOfDigits());

// 9) Write a function that takes an argument in seconds and specifies the equivalent number of years.

// function secToYears(sec) {
//   years = sec / 31556952;
//   return years.toFixed(2);
// }

// console.log(secToYears(9898723597));

// 10) Write a function that returns the current date and time.

// function currentDateAndTime() {
//   return Date();
// }

// console.log(currentDateAndTime());

// 11) Write a function that returns the date 33 days from now.

// function futureDate(days) {
//   let dateNow = new Date();
//   //   console.log(dateNow);
//   let daysFromNow = new Date(
//     dateNow.setDate(dateNow.getDate() + days)
//   ).toISOString();
//   return daysFromNow;
// }

// console.log(futureDate(33));

// 12) Write a function that returns the mean of an array of numbers.
// const arr = [4, 32, 9, 83, 98, 39, 392];
// function meanOfArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// }

// const arr2 = [34, 65, 98, 14123, 76, 16, 14, 37, 58, 63];

// console.log(meanOfArray(arr2));

// 13) Write a function that randomly generates a number between 1 and 12, and returns the name of the corresponding month. (Hint: Look up how to get a random number in JavaScript.)

// function monOfYear() {
//   let num = Math.floor(Math.random() * 12) + 1;
//   if (num === 1) {
//     return `${num}, January`;
//   } else if (num === 2) {
//     return `${num}, February`;
//   } else if (num === 3) {
//     return `${num}, March`;
//   } else if (num === 4) {
//     return `${num}, April`;
//   } else if (num === 5) {
//     return `${num}, May`;
//   } else if (num === 6) {
//     return `${num}, June`;
//   } else if (num === 7) {
//     return `${num}, July`;
//   } else if (num === 8) {
//     return `${num}, August`;
//   } else if (num === 9) {
//     return `${num}, September`;
//   } else if (num === 10) {
//     return `${num}, October`;
//   } else if (num === 11) {
//     return `${num}, November`;
//   } else {
//     return `${num}, December`;
//   }
// }

// console.log(monOfYear());

// 14) Write a function that takes three numbers as arguments, and returns the same 3 numbers in increasing order (more specifically, non-decreasing order if multiple numbers are the same).

// let arrLength = 15;
// let arr = [];

// function sortNums(arr) {
//   for (let i = 0; i < arrLength; i++) {
//     arr.push(Math.floor(Math.random() * 100) + 1);
//   }
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortNums(arr));

// 15) Write a function that returns the appropriate boolean value if a given string argument is a palindrome, where the string is the same when reversed. Examples of palindromes are "racecar" and "3003".
// Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false.

// function palindrome(word) {
//   let word1 = word.split("").reverse().join("");
//   if (word === word1) {
//     return "This is a Palindrome";
//   } else {
//     return "This is not a Palindrome";
//   }
// }
// console.log(palindrome("Eva Can I Stab Bats In A Cave".toLowerCase())); //I need to figure out why I cannot run this on Sentences, try this using a loop.

// 16) Write a function that returns true when two inputs are equivalent when using coercion, but not equivalent without coercion.
// Ex: isCoerced(5,"5") returns true. isCoerced(5,5) returns false. isCoerced(4,"shoe") returns false.

// function isCoerced([x], [y]) {
//   if (x == y) {
//     return true;
//   }
//   return false;
// }

// console.log(isCoerced([5], [5])); //Need to work on this one more

// 17) Write a function called isEven() that returns true if a given argument is even.

// function isEven(x) {
//   if (x % 2 === 0) {
//     return `${x} is even`;
//   }
//   return `${x} is not even`;
// }

// console.log(isEven(45));

// 18) Write a function called isOdd() that returns true if a given argument is odd. Do this by only using the isEven() function you wrote previously.

// function isEven(x) {
//   return x % 2 === 0;
// }

// function isOdd(y) {
//   return !isEven(y);
// }

// console.log(isOdd(45));

// 19) Write a function that returns true if a given argument is a multiple of 3. Examples of multiples of 3 are 0,3,6,9 ...

// function multipleOfThree() {
//   let x = Math.floor(Math.random() * 1000) + 1;
//   console.log(x);
//   if (x % 3 === 0) {
//     return true;
//   }
//   return false;
// }

// console.log(multipleOfThree());

// 20) Write a function that takes two arguments. Check if the first argument is the multiple of the second argument. Return the appropriate boolean.
// Ex. checkMultiple(20,5) returns true. checkMultiple(21,5) returns false.

// function firstMultipleOfSecond(num1, num2) {
//   //   let num1 = Math.floor(Math.random() * 100) + 1;
//   //   let num2 = Math.floor(Math.random() * 100) + 1;
//   //   console.log(num1);
//   //   console.log(num2);
//   if (num1 % num2 === 0) {
//     return true;
//   }
//   return false;
// }
// console.log(firstMultipleOfSecond(999, 333));

// 21) Write a function that takes an array of numbers as an argument and returns the smallest number in the array.

// let arr = [4, 5, 23, 65, -21, 99, -298, 66, 77, 34, 26, 100];

// function smallestNumber(arr) {
//   let min = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     min = value < min ? value : min; // (?: are ternary operators for and if else statment. I understand this but I do not actually think this solves the problem the way we want it because I am assigning an arbitrary min value in the function)
//   }
//   return min;
// }

// console.log(smallestNumber(arr));

// 22) Write a function that returns the largest integer n where n*n is still less than 12,000. (Hint 1, use a while loop). (Hint 2, you don't need an argument).

// function bigInt() {
//   let n = 0;
//   let large = [];
//   while (n * n < 12000) {
//     large.push(n);
//     n++;
//   }
//   return large;
// }

// console.log(bigInt().pop());

// 23) Write a function that returns the largest integer n where n*n is still less than a given argument.
// Ex. smallestN(5) would return 2, because 2*2 is 4, which is smaller than 5, but 3*3 is 9, which is larger than 5.

// function smallInt(x) {
//   let n = 0;
//   let value = [];
//   while (n * n < x) {
//     value.push(n);
//     n++;
//   }
//   return value;
// }

// console.log(smallInt(60).pop());

// 24) Write a function that takes a string as an argument and returns the reverse of that string.

// function revWord(word) {
//   //from what I understand I need to split the string up first to then be able to return the reverse
//   let splitWord = word.split("").reverse().join("");
//   //   //I then want to reverse what I split
//   //   let reverseWord = splitWord.reverse();
//   //   //I then want to join the word back together to just print the string, not split, of the reversed word
//   //   let joinedRevWord = reverseWord.join("");
//   return splitWord;
// }

// console.log(revWord("Even though it looks like its the future"));

// 25) Write a function that counts the occurences of a specific element in an array, specified as a function argument.
// For example, for the array [5,7,12,5,3,3,5], the function countOccurences(3) would return a value of 2.
// let array = [5, 7, 12, 5, 3, 3, 5];
// let counts = {};
// // function elementOccurence() {
// for (let i = 0; i < array.length; i++) {
//   let num = array[i];
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }
// // }

// console.log(counts[5]); //Come back to this problem

// 26) Write a function that returns a multidimensional array that contains number of occurences for every element of an array.
// For example, for the array [5,7,12,5,3,3,5], the function countAllOccurences(array) would return: [[5,3],[7,1],[12,1],[3,2]]
// const array2 = [5, 7, 12, 5, 3, 3, 5];

// let newArr = (arr) => {
//   let result = [...new Set(array2)].map((x) => [
//     x,
//     arr.filter((y) => y === x).length,
//   ]);
//   return result;
// };

// console.log(newArr(array2));

// 27) Write a function that takes an array of numbers as an input, and checks to see if the array is sorted in non-decreasing order. (i.e. each element in the array is less than or equal to the next element.)

// let array = [4, 86, 48, 86, 3, 9, 10, 19, 27, 32, 45, 21];

// function sortedArray(arr) {
//   return arr.sort(function (a, b) {
//     return a - b;
//   });
// }

// console.log(sortedArray(array)); //write it so that it returns a true or false

// 28) Write a function that takes an array of numbers as an argument and sorts them in increasing order.

// let array = [4, 86, 48, 86, 3, 9, 10, 19, 27, 32, 45, 21];

// function sortedArray(arr) {
//   return arr
//     .sort(function (a, b) {
//       return a - b;
//     })
//     .reverse();
// }

// console.log(sortedArray(array));

// 29) Write a function that takes two sorted arrays of numbers as arguments, and returns one new sorted array containing the numbers from both of the arrays given as arguments. Call this function merge().

// let arr1 = [3, 56, 4, 8, 2, 6, 87, 9, 0, 24].sort(function (a, b) {
//   return a - b;
// });
// let arr2 = [9, 8, 7, 6, 5, 4, 34, 25, 26, 57, 81].sort(function (a, b) {
//   return a - b;
// });

// function merge(array1, array2) {
//   return array1.concat(array2);
// }

// console.log(
//   merge(arr1, arr2).sort(function (a, b) {
//     return a - b;
//   })
// );
// console.log(arr1);
// console.log(arr2);

// 30) Leibniz's formula can compute pi. the formula is given below:
// pi = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + ...).
// The elipsis (the three dots) means this pattern continues forever.
// Notice that the operators ( + and - ) alternate each time.
// Write a function called calculatePi(), that takes an argument that specifies the number of terms to calculate from (don't include the 4 in the count) with this formula and returns the value. For example if you said:
// Ex. calculatePi(5) would return the result of the first 5 terms in the parentheses, meaning 1 through (1/9) in this case.

// function leibnizFormula(x) {
//     //loop through multiplier
//     //whatever x equals is the amount of loops through the multiplier
//     //signify how long the elipsis cont. for
//   let multiplier = [

//   ];

// console.log(leibnizFormula(98));

// function piFormula(n) {
//   let pi = 0;
//   let p = 1;
//   for (i = 0; i < 10000; i++) {
//     pi = pi + 4 / p - 4 / (p + 2);
//     p = p + 4;
//   }
//   return pi;
// }

// console.log(piFormula());
