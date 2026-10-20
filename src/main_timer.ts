import { Observable, of, from, fromEvent, timer } from 'rxjs';

console.log('app start');
const timer$ = timer(2000);

const sub1 = timer$.subscribe({
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log('timer$ completed'),
});

setTimeout(() => {
  sub1.unsubscribe();
}, 1000);

const myTimer$ = new Observable<number>((subscriber) => {
  const timeoutId = setTimeout(() => {
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => clearTimeout(timeoutId);
});

const sub2 = myTimer$.subscribe({
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log('myTimer$ completed'),
});

setTimeout(() => {
  sub2.unsubscribe();
}, 1000);
