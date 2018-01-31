import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import withTests from 'internal/storybook/withTests'; // eslint-disable-line
import README from './README.md';

import { isEmail, isTWIDCard } from './';

storiesOf('util/validate', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .addDecorator(withTests('validate'))
  .add('Basic', withReadme(README, () => {
    const email = text('email', 'medialand.android@gmail.com');
    const idCard = text('id card', 'a123456789');
    return {
      render() {
        return (
          <div>
            <div>
              <p>{email}</p>
              <p>是否為有效的email格式：{isEmail(email).toString()}</p>
            </div>
            <div>
              <p>{idCard}</p>
              <p>是否為有效的身份證格式：{isTWIDCard(idCard).toString()}</p>
            </div>
          </div>
        );
      },
    };
  }));
