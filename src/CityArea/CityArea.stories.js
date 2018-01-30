import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withDocs } from 'storybook-readme';
import withTests from 'internal/storybook/withTests'; // eslint-disable-line

import { getCities, getAreas } from './index';
import README from './README.md';


storiesOf('CityArea', module)
  .addDecorator(Centered)
  .addDecorator(withTests('CityArea'))
  .add('Basic', withDocs(README, () => ({
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
        action('CityArea')(`City:${val}`);
      },
    },
    template: pug`
section
  select(v-model="city")
    option(v-for="name in cities") {{name}}
  select(v-model="area")
    option(v-for="o in areas" :value="o") {{o.name}}
  p {{city}}
  p {{JSON.stringify(area)}}
    `,
  })));
