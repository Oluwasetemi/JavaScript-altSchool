// write a function that return true if a word is a palindrome
// What is a palindrome? A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, mallam tunde ednut etc.).

// function isPalindrome(word) {
//   return word === reverse(word);
// }

// // first step
// let isPalindrome = function (word) {
//   return word === reverse(word);
// }

// // second step
// let isPalindrome = (word) => {
//   return word === reverse(word);
// }

//
// let isPalindrome = (word) => word === reverse(word)

function isPalindrome(word) {
  // write from left -> right (normal)
  // write from right -> left (reverse)
  let reversed = reverse(word)
  // reversed
  // compare the two
  if (word === reversed) {
    // if they are the same, return true
    return true
  }
  // else return fals
  return false
}


function reverse(word) {
  let reversed = ''
  // write a loop that goes through each letter in the word
  // and returns the word in reverse
  // 10 => 0
  for (let index = word.length - 1; index >= 0; index--) {
    let eachLetter = word[index]
    eachLetter
    // reversed = reversed + eachLetter;
    // modify in place
    reversed  += eachLetter;
  }


  return reversed
}

console.log(reverse("hello")) // "olleh"

// function signature - functionName with parenthesis and arguments
isPalindrome("bob"); // true
isPalindrome("setemi"); // true

let alert = console.log
// alert, confirm, prompt
alert("hello world")

// prompt
function prompt(message) {
  // return the value that the user types in
  return "hello world"
}

function confirm(message) {
  // return the value that the user types in
  return "hello world"
}

prompt("what is your name?")

// confirm
confirm("are you sure you want to delete this?")

// function as a value
console.log(prompt)

// pass that function as an argument, callback

// write a function that will accept a function as an argument
// and call that function
function callMe(func) {
  // call the function that was passed in
  //
  func()
}

console.log(add(10, 90))

function add(num1, num2) {
  return num1 + num2
}


// callMe(function add(){ return 1 + 1 })
callMe(() => 'hello')
callMe(() => true)

// callback
function callbackExample(question, callback) {
  callback(question)
}

function callbackExample2(question, callback) {
  let result = callback(question);
  alert(result)
}

function callbackExample3(question, callback) {
  let result = callback(question);
  alert(result)
  let res = confirm(question)
  alert(res)
}

addInTwos(10)(90)

function addInTwos(num1) {
  // currying - closed variable scope
  // higher order function - a function that returns a function
  // returning a function from a function
  return function (num2) {
    // both num1 and num2 are available here
    return num1 + num2
  }
}
