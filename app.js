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



const sumArray = function [10, 12, 11];
{return 10 + 12 + 11};
console.log(sumArray);


Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.