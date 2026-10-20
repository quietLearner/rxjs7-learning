import { of, concatMap, switchMap, mergeMap, delay } from 'rxjs';

const source$ = of('A', 'B', 'C');

// concatMap = Queue (one after another)
// switchMap = Switch (latest wins)
// mergeMap = Parallel (multiple at once)

// Map: Transform each value into an Observable.
// Flatten: Subscribe to those inner Observables and emit their values into one output Observable

// Try changing concatMap to switchMap or mergeMap
source$
  .pipe(concatMap((value) => of(value).pipe(delay(1000))))
  .subscribe((value) => console.log('concat map', value));

source$
  .pipe(switchMap((value) => of(value).pipe(delay(1000))))
  .subscribe((value) => console.log('switch map', value));

source$
  .pipe(mergeMap((value) => of(value).pipe(delay(1000))))
  .subscribe((value) => console.log('merge map', value));
