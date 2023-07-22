let number = '10';

+number  // convert string to number

// binary situation
// console.log( 10 + 10 )

// ternary - ? :
console.log(typeof (number === 'string') ? 'string' : 'not string')

// math operators + - * / %(remainder - modulo) **(exponentiation)


// write a  code to implement exponentiation using for loop? 2^3 = 2 ** 3 = 2 * 2 * 2;

// base - 2, exponent - 3
// 2 * 2 * 2

// string concatenation
// write a code to concatenate your first name and last name and print it in console? template literals, +, concat
let firstName = 'John';
let lastName = 'Doe';

console.log(firstName + ' ' + lastName)
console.log(`${firstName} ${lastName}`)
console.log(firstName.concat(' ', lastName))

// assignment operators
let result = 10 + 10;

// modifying assignment operators +=, -=, *=, /=, %=
let sample = 10;
// sample = sample + 1;
sample += 1;
sample -= 10;

sample *= 2;
sample = sample * 2;

sample /= 2;
sample = sample / 2;

sample %= 2;
sample = sample % 2;

// bitwise operators - &, |, ^ - XOR, ~ - NOT, << - left shift, >> - right shift, >>> - zero fill right shift

// comma operator - , - evaluates each of its operands (from left to right) and returns the value of the last operand.
let a = 1, b = 2, c = 3;

let comma = (1 + 3, 2 + 3, 3 + 3)
comma

for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j)
}

// comparison operators - == equals to, === strictly equals to, !=, !==, >, <, >=, <=
console.log(10 == '10') // compares only value
console.log(10 === '10') // compares value and type

console.log(10 != '10')
console.log(10 !== '10')



// logical operators - && - and, || - or, ! - not
// fallbacks
let user = null;
let name = user || undefined  || 'default user';

// null coalescing operator - ?? - returns the right-hand side operand when the left-hand side is null or undefined, and otherwise returns the left-hand side operand.
let name2 = user ?? 'default user';
name2

console.log(name)
console.log(10 > 5 && 5 > 10)
let x = 10;
console.log(x || 99)

let rice = 'ricefffffffff';
let beans = 'beans';

console.log(rice || beans)
console.log(rice && beans)

console.log(x && 99)

// && return the first falsy value and || return the first truthy value
let user99 = null;

let name3 = user99 && undefined && 'default user';

console.log(name3)

// string comparison
console.log('abc' > 'ABC')

// string constructor
console.dir(String)
console.log('a'.charAt(0))

const anyString = "Brave new world";
console.log(anyString[4])
console.log(anyString.charAt(4))

console.log(`The character at index 0   is '${anyString.charAt()}' - its charCode is ${anyString.charCodeAt()}`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'  - its charCode is ${anyString.charCodeAt()}`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'  - its charCode is ${anyString.charCodeAt()}`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'  - its charCode is ${anyString.charCodeAt()}`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'  - its charCode is ${anyString.charCodeAt()}`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'  - its charCode is ${anyString.charCodeAt()}`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'  - its charCode is ${anyString.charCodeAt()}`);

// all the alphabets in the world
console.log('abcdefghijklmnopqrstuvwxyz'.charCodeAt(0)
)

// uppercase of all the alphabets
console.log('abcdefghijklmnopqrstuvwxyz'.toUpperCase().charCodeAt(0))

console.log('ab' > 'AB')
console.log(97 > 65)

// quiz
// write a code that prints the ASCII value of the character 'a' - 'z' and 'A' - 'Z'?
let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (let i = 0; i < alphabets.length; i++) {
  console.log(alphabets[i], alphabets.charCodeAt(i))
}

// Number base conversion - binary, octal, decimal, hexadecimal
// from decimal to binary
console.log(10..toString(2))
// octal
console.log(10..toString(8))
// hexadecimal
console.log(10..toString(16))

// from binary to decimal
console.log(parseInt('1010', 2))

// from octal to decimal
console.log(parseInt('12', 8))

// from hexadecimal to decimal
console.log(parseInt('A', 16))


// functions - function declaration, function expression, arrow function, IIFE, callback function, higher order function, pure function, impure function, recursive function, anonymous function, named function, generator function, async function, async await, closure, currying, memoization, function composition, function chaining, function hoisting, function scope, function context, function prototype, function constructor, function prototype methods, function prototype properties, function prototype inheritance, function prototype chain, function prototype constructor, function prototype constructor property, function prototype constructor property, fu

// Next class - var studentName = 'Wale';
// take about this code

// multiplication table
// raised to power question

// string comparison, && - returns the first falsy || returns the first truthy ?? (null and undefined), functions
let isAdmin = 'setemi';
console.log(isAdmin ?? null ?? 'default name')

let isAdmin2 = '';
console.log(isAdmin2 && 'null' && 'default name')

let isAdmin3 = null;
console.log(isAdmin3 || undefined || 'default name')









// Array and Object - square and dot notation
