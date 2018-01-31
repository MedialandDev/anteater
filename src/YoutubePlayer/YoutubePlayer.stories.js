import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import { withReadme } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import YoutubePlayer, { fetchScript } from './';
import YoutubePlayerComponent from './vue';

import README from './README.md';
import ComponentREADME from './component/README.md';


Vue.component('YoutubePlayerComponent', YoutubePlayerComponent);

const log = (val) => {
  action('CityArea')(val);
};

storiesOf('YoutubePlayer', module)
  .addDecorator(Centered)
  .add('Basic', withReadme(README, () => ({
    data() {
      return {
        state: '',
      };
    },
    methods: {
      nextVideoHandler() {
        this.player.cueVideoById('9tFTZhDqqj8');
      },
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
  button(@click="nextVideoHandler") next video
    `,
  })))
  .add('Component', withReadme(ComponentREADME, () => ({
    data() {
      return {
        state: '',
        progress: 0,
        videoId: '9tFTZhDqqj8',
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
    template: pug`
div
  YoutubePlayerComponent(
    :id="videoId" 
    @stateChange="stateChange"
    @videoProgress="onVideoProgress"
    )
  p state:{{state}}
  p progress:{{progress}}
  button(@click="videoId='9tFTZhDqqj8'") Video1
  button(@click="videoId='lG0Ys-2d4MA'") Video2
    `,
  })));
