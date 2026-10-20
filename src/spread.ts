const numbers: number[] = [10, 20, 30];

function print(a: number, b: number, c: number) {
  console.log(a, b, c);
}

//manually
print(numbers[0], numbers[1], numbers[2]);

// use spread
print(...numbers); // 10 20 30
