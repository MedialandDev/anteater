import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';

import README from './README.md';

import { share } from '.';

storiesOf('util/line', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('share', withReadme(README, () => {
    const url = text('url', 'http://medialand.tw');
    return {
      methods: {
        lineShare() {
          share(url);
          action('line share')(url);
        },
      },
      template: `
        <div>
          <button class="btn btn-primary" @click="lineShare">Line Share</button>
          <p>${url}</p>
        </div>
      `,
    };
  }));
