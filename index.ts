// Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "hello word";
console.log(greeting);

// Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.

let num1 = 4,
  num2 = 5;
console.log("Addition", num1 + num2);
console.log("Subtraction", num1 - num2);
console.log("Multipilication", num1 * num2);
console.log("Division", num1 / num2);
console.log("Power", num1 ** num2);
console.log("%", num1 % num2);

// Instructions: Swap the values of two variables without using a third variable.
let a = 5;
let b = 6;
[a, b] = [b, a];
console.log(a, b);

// Instructions: This applies to TypeScript. Create a string variable and try changing its type.

// Instructions: Use the modulus operator to find the remainder of two numbers.

let num3 = 10;
let num4 = 6;
console.log(num3 % num4);

// Instructions: Increment a variable's value by 1 using two different methods.
let x = 3;
x = x + 1;
console.log(x);
x += 1;
console.log(x);

// Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let d = 3,
  e = 5,
  f = 6;
console.log(e >= 5 && d < 10);
console.log(d >= 5 || e < 10);
console.log(!(f < 10));

// Instructions: Show examples of using compound assignment operators.
// Use +=, -=, *=, and /=

let g = 10;
let h = 3;

console.log((g += h));
console.log((g -= h));
console.log((g *= h));
console.log((g /= h));

// Instructions: Write a program to check if a number is even or odd.
let i = 5;
// console.log(i / 2);
if (i % 2 == 2) {
  console.log("even");
} else {
  console.log("odd");
}

// Instructions: Check if a person is eligible to vote.
let age = 40;
if (age >= 18) {
  console.log("eligible for vote");
} else {
  console.log("not elegible");
}

// Instructions: Assign a grade based on a numerical score.
let grade = 88;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80 || grade < 90) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 50) {
  console.log("f");
}

// Instructions: Find the maximum of three numbers.

let j = 1;
let k = 5;
let l = 8;
if (j > k && j > l) {
  console.log(j, "is greater");
} else if (k > j && k > l) {
  console.log(k, "is greater");
} else if (l > k && l > j) {
  console.log(l, "is greater");
}

// Instructions: Check if a number is positive, negative, or zero.
let m = -1;
if (m > 0) {
  console.log("m is positive");
} else if (m < 0) {
  console.log("m is nagitive");
} else if ((m = 0)) {
  console.log("m is zero");
}

// Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 8;
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log(celsius);

// Instructions: Write a program that prints the multiplication table of a given number up to 10.
const table = 5;
console.log("5 * 1 = ", 5 * 1);
console.log("5 * 2 = ", 5 * 2);
console.log("5 * 3 = ", 5 * 3);
console.log("5 * 4 = ", 5 * 4);
console.log("5 * 5 = ", 5 * 5);
console.log("5 * 6 = ", 5 * 6);
console.log("5 * 7 = ", 5 * 7);
console.log("5 * 8 = ", 5 * 8);
console.log("5 * 9 = ", 5 * 9);
console.log("5 * 10 = ", 5 * 10);
