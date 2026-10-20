import { catchError, EMPTY, Observable, of } from 'rxjs';

const faillingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('app started');

// faillingHttpRequest$
//   .pipe(catchError((err) => of('fallback value')))
//   .subscribe((value) => console.log(value));

// do not show any error
faillingHttpRequest$.pipe(catchError((err) => EMPTY)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('completed'),
});
