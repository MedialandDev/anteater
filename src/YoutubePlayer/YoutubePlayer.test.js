import { mount } from 'avoriaz';
import YoutubePlayerComponent from './vue';


describe('YoutubePlayer.vue', () => {
  it('renders a div with class bar', () => {
    const wrapper = mount(YoutubePlayerComponent);

    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('anteater-youtubeplayer')).toBe(true);
  });
});
