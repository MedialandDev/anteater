## CityArea
```js
import CityAreaData, { getCities, getAreas } from 'anteater/CityArea';

const cities: string[] = getCities();
// output：['基隆市', '臺北市', ...]

const areas:Area[] = getAreas('新北市');
/* 
  output：[
    { name: '萬里區', zip: '207' },
    { name: '金山區', zip: '208' },
    ...
  ]
*/
```