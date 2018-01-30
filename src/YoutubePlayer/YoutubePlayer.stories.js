import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme, withDocs } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import YoutubePlayer, { fetchScript } from './';
import YoutubePlayerComponent from './component';

import README from './README.md';
import ComponentREADME from './component/README.md';


Vue.component('YoutubePlayerComponent', YoutubePlayerComponent);

const log = (val) => {
  action('CityArea')(val);
};

storiesOf('YoutubePlayer', module)
  .addDecorator(Centered)
  .add('Basic', withDocs(README, () => ({
    data() {
      return {
        state: '',
      };
    },
    mounted() {
      fetchScript().subscribe(() => {
        this.player = new YoutubePlayer('player', 'lG0Ys-2d4MA');
        this.player.onStateChange.subscribe((d) => {
          this.state = d;
          log(`stateChange:${d}`);
        });
      });
    },
    beforeDestroy() {
      this.player.destroy();
    },
    template: pug`
div
  #player
  p state:{{state}}
    `,
  })))
  .add('Component', withDocs(ComponentREADME, () => ({
    data() {
      return {
        state: '',
        progress: 0,
      };
    },
    methods: {
      stateChange(s) {
        this.state = s;
      },
      onVideoProgress(p) {
        this.progress = p;
      },
    },
    mounted() {

    },

    template: pug`
div
  YoutubePlayerComponent(
    id="9tFTZhDqqj8" 
    @stateChange="stateChange"
    @videoProgress="onVideoProgress"
    )
  p state:{{state}}
  p progress:{{progress}}
    `,
  })));
