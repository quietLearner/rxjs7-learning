import { catchError, EMPTY, Observable, of, map, concatMap, delay } from 'rxjs';

of(1, 2, 3)
  .pipe(map((value) => of(value * 10))) // of(), Observable that emits 10
  .subscribe(console.log);

//   transforms each value into an inner Observable, subscribes to them one at a time, and waits for each to complete before starting the next.

// The key idea is: process tasks sequentially, in order.
of(1, 2, 3)
  .pipe(concatMap((value) => of(value * 10))) // concatMap subscribes to the inner Observable and passes its emitted values downstream.
  .subscribe(console.log);

const inner$ = of(10);

// A: Print the Observable object
console.log(inner$);

// B: Subscribe to the Observable
inner$.subscribe(console.log);
