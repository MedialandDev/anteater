import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

setOptions({
  name: 'anteater addon',
  url: 'https://github.com/MedialandDev/anteater/',
  addonPanelInRight: true,
});


const req = require.context('../../src', true, /stories\.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));


configure(loadStories, module);
