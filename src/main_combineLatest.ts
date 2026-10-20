import { combineLatest, fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// - combineLatest() waits until every Observable has emitted at least one value, then emits again whenever any Observable produces a new value.

// forkJoin() = Give me the final results when everything finishes.
// combineLatest() = Give me the latest combination whenever something changes.

const temperatureInput = document.getElementById('temperature-input') as HTMLInputElement;
const conversionDropdown = document.getElementById('conversion-dropdown') as HTMLSelectElement;
const resultText = document.getElementById('result-text') as HTMLElement;

const temp$ = fromEvent(temperatureInput, 'input');
const conversion$ = fromEvent(conversionDropdown, 'change');

combineLatest([temp$, conversion$]).subscribe({
  next: ([tempEvt, conversionEvt]) => {
    const temp = tempEvt.target.value;
    const conversion = conversionEvt.target.value;

    if (conversion === 'c-to-f') {
      resultText.textContent = `${((temp * 9) / 5 + 32).toFixed(1)} °F`;
    } else if (conversion === 'f-to-c') {
      resultText.textContent = `${(((temp - 32) * 5) / 9).toFixed(1)} °C`;
    }
  },
});
