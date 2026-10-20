import { Observable } from 'rxjs';

const observable$ = new Observable<number>((subscriber) => {
  console.log('observable executed');

  let counter = 1;

  const intervalId = setInterval(() => {
    console.log('emitted', counter);
    subscriber.next(counter++);
  }, 1000);

  //tear down is called, when complete, error, or unscribe
  return () => {
    clearInterval(intervalId);
    console.log('teardown executed');
  };
});

console.log('before sub');
const sub = observable$.subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('completed'),
  error: (err) => console.log(err),
});

setTimeout(() => {
  sub.unsubscribe(); //unsubscribe, call teardonw to stop inverval
}, 5000);

console.log('after sub');
