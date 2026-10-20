import { Observable, of } from 'rxjs';
import { name$, storeDataOnServer, storeDataOnServerError } from './external';

name$.subscribe((value) => console.log(value));

storeDataOnServer('some value').subscribe((value) => console.log(value));

// storeDataOnServerError('some value').subscribe(
//   (value) => console.log(value),
//   (err) => console.error(err),
// );

storeDataOnServerError('some value').subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
});

//Observables are lazy Push collections of multiple values.

const observable$ = new Observable<number>((subscriber) => {
  subscriber.next(1);
  setTimeout(() => subscriber.next(2), 1000);
  setTimeout(() => subscriber.next(3), 2000);
  console.log('boservable executed');
});

// const observable$ = of(11, 22, 33);
//An Observer is a consumer of values delivered by an Observable
const observer1 = {
  next: (val: number) => console.log(val + ' ob1'),
};

const observer2 = {
  next: (val: number) => console.log(val + ' ob2'),
};

//subscription
// A Subscription is an object that represents a disposable resource, usually the execution of an Observable.
const sub1 = observable$.subscribe(observer1);
const sub2 = observable$.subscribe(observer2);
const sub3 = observable$.subscribe((val) => console.log(val + ' ob3'));

//close sub
sub1.unsubscribe();
sub2.unsubscribe();

setTimeout(() => {
  sub3.unsubscribe();
}, 1500);
