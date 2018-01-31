import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered';
import { withReadme } from 'storybook-readme';

import README from './README.md';
import { isWebView, isFBWebView, isLineWebView } from './';

storiesOf('util/device', module)
  .addDecorator(Centered)
  .add('Basic', withReadme(README, () => ({

    render() {
      return (
        <div>
          <p>isWebView:{isWebView.toString()}</p>
          <p>isFBWebView:{isFBWebView.toString()}</p>
          <p>isLineWebView:{isLineWebView.toString()}</p>
        </div>
      );
    },
  })));
