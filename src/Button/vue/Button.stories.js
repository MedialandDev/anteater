import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';

import Button from './';

Vue.component('Button', Button);

storiesOf('Button', module)
  .addDecorator(Centered)
  .add('basic', () => ({
    methods: {
      log(val) {
        action('Button')(val);
      },
    },
    template: `
      <div>
        <Button />
      </div>
    `,
  }));

