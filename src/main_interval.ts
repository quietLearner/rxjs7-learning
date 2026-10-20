import { Observable, of, from, fromEvent, timer, interval } from 'rxjs';

console.log('app start');

interval(1000).subscribe({
  next: (val) => console.log(val),
});
