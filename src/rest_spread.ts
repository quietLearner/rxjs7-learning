// Combining rest and spread

//rest
function display(...values: string[]) {
  console.log(values);
}

const letters = ['A', 'B', 'C'];

display(...letters); //spread

// Rest and spread with arrays
const original = [1, 2, 3];

const copied = [...original];

console.log(copied); // [1, 2, 3]

const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

console.log(result); // [1, 2, 3, 4]

const numbers = [2, 3, 4];

const newNumbers = [1, ...numbers, 5];

console.log(newNumbers);
// [1, 2, 3, 4, 5]

const tasks = ['Task A', 'Task B'];

const updatedTasks = [...tasks, 'Task C'];
console.log(updatedTasks);

// Array destructuring and rest
const fruits = ['Apple', 'Banana', 'Orange'];

const [first, second, third] = fruits; // destructuring

console.log(first); // Apple
console.log(second); // Banana
console.log(third); // Orange

const numbers1 = [10, 20, 30, 40, 50];

const [first1, second2, ...remaining] = numbers1; //destructing and rest together

console.log(first1); // 10
console.log(second2); // 20
console.log(remaining); // [30, 40, 50]

//Object spread and object rest
const user = {
  name: 'John',
  age: 25,
};

const updatedUser = {
  ...user,
  age: 26,
  city: 'Toronto',
};

console.log(updatedUser);

//order matters, The difference is the last value for a property wins.
const e = { ...user, age: 26 }; // age = 26

const f = { age: 26, ...user }; // age = 25

// Object destructuring
const user1 = {
  id: 1,
  name: 'John',
  age: 25,
  city: 'Toronto',
};

const { name, age } = user1;

console.log(name); // John
console.log(age); // 25

//object rest
const { id, ...otherInfo } = user1;

console.log(id); // 1

console.log(otherInfo);

// Spread makes a shallow copy
const user2 = {
  name: 'John',
  address: {
    city: 'Toronto',
  },
};

const copy = { ...user2 };

copy.name = 'Tom';
copy.address.city = 'Ottawa';

console.log(user2.name, user2.address.city); // Ottawa!

// The declaration ...args: string[] does not mean that the caller must pass an array. It means that the function collects its string arguments into an array.
function example(...args: string[]) {
  console.log(args);
}

function example2(args: string[]) {
  console.log(args);
}

example('a', 'b');
example(...['a', 'b']);
example2(['a', 'b']);
// example2('a');
