import { Observable, of, from, fromEvent } from 'rxjs';

const sub = fromEvent<MouseEvent>(document, 'click').subscribe({
  next: (evt) => console.log(evt.type, evt.x, evt.y),
  error: (err) => console.log(err),
  complete: () => console.log('from event completed'),
});

setTimeout(() => {
  sub.unsubscribe();
}, 2000);

const click$ = new Observable<MouseEvent>((subscriber) => {
  const clickHandler = (evt: MouseEvent) => {
    console.log('click event callback');
    subscriber.next(evt);
  };

  document.addEventListener('click', clickHandler);

  return () => {
    document.removeEventListener('click', clickHandler);
  };
});

click$.subscribe({
  next: (evt) => console.log(evt.type, evt.x, evt.y),
  error: (err) => console.log(err),
  complete: () => console.log('from event completed'),
});
