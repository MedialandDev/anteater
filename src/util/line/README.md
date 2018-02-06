## line share
```js
import { share } from 'ml.anteater/util/line';

share('http://medialand.tw');
```

## Source
```js
export const share = (text:string) => window.open(`http://line.naver.jp/R/msg/text/?${encodeURIComponent(text)}`);
```