import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

// hot observalbe, Imagine live television. If a program starts at 8 PM and you turn on your TV at 8:30 PM, you see what's happening at 8:30 PM, not the beginning.

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton?.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((event) => console.log('sub 1', event.type, event.x, event.y));

helloClick$.subscribe((event) => console.log('sub 2', event.type, event.x, event.y));

const numbers$ = new Subject<number>();

numbers$.subscribe((val) => console.log('A:', val));

numbers$.next(1);
numbers$.next(2);

// Subscriber B joins later
numbers$.subscribe((val) => console.log('B:', val));

numbers$.next(3);
numbers$.next(4);
