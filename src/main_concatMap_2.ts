import { catchError, EMPTY, Observable, of, map, concatMap, delay } from 'rxjs';

const sourcr$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next('A');
  }, 1000);

  setTimeout(() => {
    subscriber.next('B');
  }, 2000);
});

console.log('App has started');

// sourcr$.subscribe(console.log);

sourcr$.pipe(concatMap((value) => of(1, 2))).subscribe(console.log);
