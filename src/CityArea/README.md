## CityArea
[Source](https://github.com/MedialandDev/anteater/blob/master/src/CityArea/index.js) 
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

## vue
```html
<script>
import { getCities, getAreas } from 'anteater/CityArea';
export default = {
  data() {
    return {
      city: '',
      area: '',
      cities: getCities(),
      areas: [],
    };
  },
  watch: {
    city(val) {
      this.area = '';
      this.areas = getAreas(val);
    },
  },
}
</script>
<template lang="pug">
section
  select(v-model="city")
    option(v-for="name in cities") {{name}}
  select(v-model="area")
    option(v-for="o in areas" :value="o") {{o.name}}
  p {{city}}
  p {{JSON.stringify(area)}}
</template>
```