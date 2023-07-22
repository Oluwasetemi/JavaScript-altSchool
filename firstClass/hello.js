import data from './data.js';
console.log(data)

// Object and array destructuring
// Rest and spread operators
let person = {
  name: 'Aje I swear I no go lie',
  age: 99,
  address: {
    street: { name: 'agege iyana ipaja', unit: 'block 99' },
    city: 'Lagos',
    country: 'Ghana',
  },
};

let { name: fullName, age, address: { country, city, street: { unit } } } = person;
// console.log(unit);

// array destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, ,,...rest] = numbers;
// console.log(first, second, rest);
// spread operator
numbers.push(rest);
// console.log(...numbers); // [1, 2, 3, 4, 5, [3, 4, 5]]

let arrayOfPerson = [
  {...person, ...person.address, ...person.address.street},
  { name: 'Destiny', age: 1 },
  { name: 'Machala', age: 101 }
];
let [first2, ...rest2] = arrayOfPerson;
// console.log(rest2);


// named export
export function add(a, b) {
  // console.log('add function');
  return a + b;
}

// default export
