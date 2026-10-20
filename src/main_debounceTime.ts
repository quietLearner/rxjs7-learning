import { debounceTime, fromEvent, map } from 'rxjs';

const slider = document.querySelector('input#slider');

fromEvent(slider, 'input')
  .pipe(
    debounceTime(2000), //waits for a period of silence before emitting the latest value.
    map((event) => event.target.value),
  )
  .subscribe((val) => console.log(val));

const input = document.getElementById('search') as HTMLInputElement;

// fromEvent(input, 'input')
//   .pipe(
//     map(() => input.value),
//     debounceTime(1000),
//   )
//   .subscribe((value) => console.log(value));

fromEvent(input, 'input')
  .pipe(map(() => input.value)) //input.value contains all the characters currently in the input, not just the last character typed.
  .subscribe((value) => console.log(value));
