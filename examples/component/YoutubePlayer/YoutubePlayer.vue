<script>
// @flow
import AnteaterYoutubePlayer from 'anteater/YoutubePlayer/component';

const EXAMPLE_YOUTUBE_IDS = [
  'lG0Ys-2d4MA',
  'MhkGQAoc7bc',
  '-zW1zHqsdyc',
];

export default {
  data() {
    return {
      progress: 0,
      videoIndex: 0,
      state: -1,
      options: {
        autoplay: 1,
        loop: 1,
      },
    };
  },
  computed: {
    videoId() {
      return EXAMPLE_YOUTUBE_IDS[this.videoIndex];
    },
  },
  methods: {
    stateChangeHandler(state) {
      this.state = state;
    },
    videoProgressHandler(progress) {
      this.progress = progress;
    },
  },
  components: {
    'anteater-youtube-player': AnteaterYoutubePlayer,
  },
};
</script>


<template lang="pug">
  #app
    h1 anteater.YoutubePlayer
    anteater-youtube-player(
      :id="videoId"
      :options="options"
      @stateChange="stateChangeHandler"
      @videoProgress="videoProgressHandler")
    p state:{{state}}
    p progress:{{ Math.round(progress*100)}} %
    button(@click="videoIndex=0" :disable="videoIndex===0") video1
    button(@click="videoIndex=1" :disable="videoIndex===1") video2
    button(@click="videoIndex=2" :disable="videoIndex===2") video3
</template>

<style>

html, body, #app{
  width: 100%;
  height: 100%;
}
button {
  display: inline-block;
  width: 100px;
  margin: 0 10px;
}
</style>

