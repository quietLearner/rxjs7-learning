import { Observable, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// forkJoin() waits for every Observable to complete, then emits once.

const user1$ = ajax({
  url: 'https://jsonplaceholder.typicode.com/users/1',
  // crossDomain: true,
});

const user2$ = ajax({
  url: 'https://jsonplaceholder.typicode.com/users/2',
  // crossDomain: true,
});

user1$.subscribe((val) => console.log(val));
user2$.subscribe((val) => console.log(val));

forkJoin([user1$, user2$]).subscribe({
  next: ([user1, user2]) => {
    console.log('User 1:', user1.response);
    console.log('User 2:', user2.response);
  },
  error: (err) => console.error(err),
  complete: () => console.log('All requests completed'),
});
