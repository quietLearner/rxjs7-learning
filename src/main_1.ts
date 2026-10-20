import { Observable } from 'rxjs';

const observable$ = new Observable<number>((subscriber) => {
  console.log('observable executed');
  subscriber.next(1);
  subscriber.next(2);
  const timeoutId = setTimeout(() => {
    subscriber.next(3);
    // subscriber.complete(); // no more emit, otherwise tear down wont be called
  }, 1000);

  const timeoutId2 = setTimeout(() => {
    subscriber.error(new Error('wrong'));
  }, 2000);

  //tear down is called, when complete, error, or unscribe?
  return () => {
    clearTimeout(timeoutId);
    clearTimeout(timeoutId2);

    console.log('teardown executed');
  };
});

console.log('before sub');
const subscription = observable$.subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('completed'),
  error: (err) => console.log(err),
});
// setTimeout(() => subscription.unsubscribe(), 2000);
console.log('after sub');
