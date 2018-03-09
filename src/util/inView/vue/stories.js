import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import README from './README.md';

import InView from './';

Vue.component('in-view', InView);

storiesOf('util/inView/vue', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('vue', withReadme(README, () => ({
    template: `
    <div style="padding: 100vh 0">
      <in-view :options="options" @change="inViewChange">
        <img src="http://medialand.tw/images/logo.gif">
      </in-view>
    </div>
    `,
    data: () => ({
      options: null,
    }),
    methods: {
      inViewChange(boo) {
        action('inViewChange')(boo);
      },
    },
    mounted() {
      action('mounted')('InView');
    },
  })));
