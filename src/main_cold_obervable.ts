import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';

// Imagine Netflix: when you start watching a movie, it starts from the beginning for you. If someone else starts watching 10 minutes later, their movie also starts from the beginning.

// this is cold observable, Cold Observable: Each subscriber gets its own independent execution.
const ajax$ = ajax({
  url: 'https://jsonplaceholder.typicode.com/users',
  crossDomain: true,
});

ajax$.subscribe({
  next: (res) => console.log(res.response),
  error: (err) => console.error(err),
});

ajax$.subscribe({
  next: (res) => console.log(res.response),
  error: (err) => console.error(err),
});

ajax$.subscribe({
  next: (res) => console.log(res.response),
  error: (err) => console.error(err),
});

const numbers$ = interval(1000);

// Subscriber A starts immediately
numbers$.subscribe((val) => console.log('A:', val));

// Subscriber B starts 3 seconds later
setTimeout(() => {
  numbers$.subscribe((val) => console.log('B:', val));
}, 3000);
