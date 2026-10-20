import { filter, Observable, forkJoin, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// forkJoin() waits for every Observable to complete, then emits once.
const name$ = ajax({
  url: 'https://jsonplaceholder.typicode.com/users/1',
  // crossDomain: true,
}).pipe(map((ajaxResponse) => ajaxResponse.response.name));

const address$ = ajax({
  url: 'https://jsonplaceholder.typicode.com/users/2',
  // crossDomain: true,
}).pipe(map((ajaxResponse) => ajaxResponse.response.email));

name$.subscribe((val) => console.log(val));
address$.subscribe((val) => console.log(val));

forkJoin([name$, address$]).subscribe({
  next: ([name, address]) => {
    console.log('User 1:', name);
    console.log('User 2:', address);
  },
  error: (err) => console.error(err),
  complete: () => console.log('All requests completed'),
});
