import { filter, of, Observable, forkJoin, map, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

of(1, 7, 3, 6, 2)
  .pipe(
    tap((val) => console.log('tap', val)),
    map((val) => val * 2),
    filter((val) => val > 5),
  )
  .subscribe((arg) => console.log(arg));
