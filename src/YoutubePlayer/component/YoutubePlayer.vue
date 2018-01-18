<script>
// @flow
import YoutubePlayer, { fetchScript } from 'anteater/YoutubePlayer';

export default {
  name: 'anteater-youtubeplayer',
  player: null,
  props: {
    id: {
      type: String,
    },
    width: {
      type: Number,
      default: 640,
    },
    height: {
      type: Number,
      default: 390,
    },
    options: {
      type: Object,
    },
  },
  data() {
    return {
      domID: `player-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
    };
  },
  watch: {
    id(val) {
      if (this.player) {
        this.player.cueVideoById(val);
        this.player.playVideo();
      }
    },
  },
  methods: {
    createPlayer() {
      this.destroyPlayer();
      const player = new YoutubePlayer(this.domID, this.id, this.width, this.height, this.options);
      player.onStateChange.subscribe(stateCode => this.$emit('stateChange', stateCode));
      player.onVideoProgress.subscribe(progress => this.$emit('videoProgress', progress));
      return player;
    },
    destroyPlayer() {
      if (this.player) {
        this.player.destroy();
        this.player = null;
        delete this.player;
      }
    },
    getPlayer() {
      if (this.player) {
        return this.player.getPlayer();
      }
      return null;
    },
  },
  mounted() {
    fetchScript().subscribe(() => {
      this.player = this.createPlayer();
    });
  },
  beforeDestroy() {
    this.destroyPlayer();
  },
};
</script>

<template lang="pug">
.anteater-youtubeplayer
  div(:id="domID")
</template>
