import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';

import { getCities, getAreas } from '../index';


const log = (val) => {
  action('CityArea')(val);
};

storiesOf('CityArea', module)
  .addDecorator(Centered)
  .add('Basic', () => ({
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
        log(`City:${val}`);
      },
    },
    template: pug`
div
  select(v-model="city")
    option(v-for="name in cities") {{name}}
  select(v-model="area")
    option(v-for="o in areas" :value="o") {{o.name}}
  p {{city}} 
  p {{JSON.stringify(area)}}
    `,
  }));
