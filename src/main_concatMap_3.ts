import { catchError, EMPTY, Observable, of, map, concatMap, delay, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

// If your API call fails and you don't handle the error, the entire RxJS subscription terminates.
// This means clicking the Fetch button again will do nothing.
// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     concatMap((endpoint) => ajax.getJSON(`https://randomapi.dev/api/${endpoint}?count=3`)),
//   )
//   .subscribe({
//     next: (response) => console.log(response),
//     complete: () => console.log('completed'),
//     error: (err) => console.log(err),
//   });

// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     concatMap((endpoint) => ajax.getJSON(`https://randomapi.dev/api/${endpoint}?count=3`)),
//     catchError((err) => EMPTY), // The entire subscription ends.
//   )
//   .subscribe({
//     next: (response) => console.log(response),
//     complete: () => console.log('completed'),
//     error: (err) => console.log(err),
//   });

//concat map is sequealia, one by one

fromEvent(fetchButton, 'click')
  .pipe(
    map(() => endpointInput.value),
    concatMap((endpoint) =>
      ajax.getJSON(`https://randomapi.dev/api/${endpoint}?count=3`).pipe(
        catchError((err) => {
          console.error('lol', err);
          return EMPTY;
        }),
      ),
    ),
  )
  .subscribe({
    next: (response) => console.log(response),
    complete: () => console.log('completed'),
    error: (err) => console.log(err),
  });
