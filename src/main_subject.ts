import { fromEvent, Subject } from 'rxjs';

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const subject$ = new Subject<string>();

// Every time you click Emit, the Subject broadcasts the input's current value to all its subscribers.
fromEvent(emitButton, 'click').subscribe(() => subject$.next(inputElement.value));

//Every time you click Subscribe, you create another independent subscription to the same Subject.
fromEvent(subscribeButton, 'click').subscribe(() => {
  console.log('new subscription');
  subject$.subscribe((value) => console.log(value));
});
