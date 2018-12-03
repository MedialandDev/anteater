import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme } from 'storybook-readme/';
import withTests from 'internal/storybook/withTests'; // eslint-disable-line

import README from './README.md';
import log from './log';

storiesOf('log', module)
  .addDecorator(Centered)
  .add('Basic', withReadme(README, () => ({
    data() {
      return {
      };
    },

    methods: {
      @log
      onClick() {
        action('log')('click');
      },
    },
    template: `
    <div>
      <div @click="onClick">click</div>
    </div>`
    ,
  })));
