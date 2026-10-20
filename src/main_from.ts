import { Observable, of, from, fromEvent } from 'rxjs';

from(['a', 'b', 'c']).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('completed'),
});

const promise = new Promise((resolve, reject) => {
  // resolve('promise resolved');
  reject('promise rejected');
});

const promiseFrom$ = from(promise);

promiseFrom$.subscribe({
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log('promise from completed'),
});

const promiseOf$ = of(promise);
promiseOf$.subscribe({
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log('promise of completed'),
});

fromEvent(document, 'click').subscribe({
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log('from event completed'),
});
