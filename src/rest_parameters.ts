function add1(a: number, b: number): number {
  return a + b;
}

add(10, 20); // 30
// ...numbers collects all arguments.
// number[] means an array of numbers.
function add(...numbers: number[]): number {
  let total = 0;

  // numbers is normal array, numbers = [10, 20, 30];
  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(add(10, 20)); // 30
console.log(add(10, 20, 30)); // 60
console.log(add(1, 2, 3, 4, 5)); // 15

function introduce(name: string, ...hobbies: string[]) {
  console.log(name);
  console.log(hobbies); // this is an array
}

introduce('John', 'Swimming', 'Running', 'Coding');
