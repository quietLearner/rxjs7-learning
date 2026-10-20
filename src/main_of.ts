import { Observable, of, from } from 'rxjs';

of('a', 'b', 'c').subscribe({
  next: (data) => console.log(data),
  complete: () => console.log('completed'),
});

const name$ = new Observable<string>((subscriber) => {
  subscriber.next('a');
  subscriber.next('b');
  subscriber.next('c');
  subscriber.complete();
});

name$.subscribe({
  next: (data) => console.log(data),
  complete: () => console.log('completed'),
});

function myOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (const s of args) {
      subscriber.next(s);
    }

    subscriber.complete();
  });
}

// of(['e', 'f', 'g']);
// You're passing 1 argument, which is an array of strings (string[]).

//of('e', 'f', 'g'); You're passing 3 arguments, each of type string.

myOf('e', 'f', 'g').subscribe({
  next: (data) => console.log(data),
  complete: () => console.log('completed'),
});

// Emits array once
of([1, 2, 3]).subscribe({
  next: (data) => console.log('of [1,2,3]', data),
  complete: () => console.log('completed'),
});

//Emits 1, 2, 3
from([1, 2, 3]).subscribe({
  next: (data) => console.log('from [1,2,3]', data),
  complete: () => console.log('completed'),
});

//emit "abc"
of('abc').subscribe({
  next: (data) => console.log('of "abc"', data),
  complete: () => console.log('completed'),
});

//Emits a, b, c
from('abc').subscribe({
  next: (data) => console.log('from "abc"', data),
  complete: () => console.log('completed'),
});
