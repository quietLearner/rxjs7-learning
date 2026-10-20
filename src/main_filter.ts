import { filter, Observable } from 'rxjs';

interface NewsItem {
  category: 'Business' | 'Sports';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(() => subscriber.next({ category: 'Business', content: 'A' }), 1000);
  setTimeout(() => subscriber.next({ category: 'Sports', content: 'B' }), 2000);
  setTimeout(() => subscriber.next({ category: 'Business', content: 'C' }), 3000);
  setTimeout(() => subscriber.next({ category: 'Sports', content: 'D' }), 4000);
});

const sportsNewFeed$ = newsFeed$.pipe(filter((item) => item.category === 'Sports'));

sportsNewFeed$.subscribe((item) => console.log(item));

newsFeed$.subscribe((item) => console.log(item));
