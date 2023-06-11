// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree(num1, num2, num3){
if(num1 > num2 && num1 > num3) {
    return num1;
} else if (num2 > num1 && num2 > num3) {
    return num2;
} else {
    return num3;

}console.log(maxOfThree);

} 


Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.


function isCharAVowel(char) {
let lowercaseChar = char.toLowerCase();

if (  lowercaseChar === 'a' ||
      lowercaseChar === 'e' ||
      lowercaseChar === 'i' ||
      lowercaseChar === 'o' ||
      lowercaseChar === 'u' ||
) {
    return true;
}
else return false;
}


Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.



const sumArray = function(arr) {
let sum = 0;
for (let i =0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

const numbers = [10, 11, 22];
console.log(sumArray(numbers));


Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.



function multiplyArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
console.log(multiplyArray([2, 4, 4]));



Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function() {

    return arguments.length;
};


Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".


function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString('ryan'));



Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(arr) {
let longestLength = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > longestLength) {
    longestLength = arr[i].length;
  }
}
return longestLength;
}

const strings = ['dog', 'cat', 'horse'];
console.log(longestStringInArray(strings));




Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arr, length) {
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(stringsLongerThan(['salad', 'veggies', 'fruits'], 2));



