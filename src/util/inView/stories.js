import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import README from './README.md';

import inView from './';

storiesOf('util/inView', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('basic', withReadme(README, () => ({
    template: `
    <div style="padding: 100vh 0">
      <img src="http://medialand.tw/images/logo.gif" ref="image">
    </div>
    `,
    mounted() {
      window.addEventListener('scroll', e => console.log(e));
      const { image } = this.$refs;
      action('mounted', image);
      inView(image).subscribe((bool) => {
        action('inView')(bool);
      });
    },
  })));
