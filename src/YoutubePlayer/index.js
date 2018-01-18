// @flow
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { type YoutubePlayerVars } from './types';


let isAPIReady = false;
// https://developers.google.com/youtube/player_parameters?playerVersion=HTML5
const DEFAULT_PLAYER_VARS:YoutubePlayerVars = {
  autoplay: 0,
  controls: 1,
  autohide: 1,
  enablejsapi: 1,
  loop: 0,
  disablekb: 1,
  fs: 1,
  modestbranding: 0,
  showinfo: 0,
  rel: 0,
};

/*
onStateChange
-1 (unstarted)
0 (ended)
1 (playing)
2 (paused)
3 (buffering)
5 (video cued).
 */

class YoutubePlayer {
  static ON_READY:string = 'onReady';
  static ON_STATE_CHANGE:string = 'onStateChange';
  static STATE_UNSTARTED:number = -1;
  static STATE_ENDED:number = 0;
  static STATE_PLAYING:number = 1;
  static STATE_PAUSED:number = 2;
  static STATE_BUFFERING:number = 3;
  static STATE_CUED:number = 5;
  loop:boolean = false;
  onReady: Subject;
  onStateChange: Subject;
  onVideoProgress: Subject;
  player:any;
  intervalId:number;
  /**
   * @param {string} domID
   * @param {string} videoId
   * @param {number} width
   * @param {number} height
   * @param {DEFAULT_PLAYER_VARS} options
   */
  constructor(domID:string, videoId:string, width:number = 640, height:number = 390, options:YoutubePlayerVars | null = {}) {
    if (!videoId) {
      throw new Error('invalidate youtube id');
    }
    this.onReady = new Subject();
    this.onStateChange = new Subject();
    this.onVideoProgress = new Subject();

    const playerVars = {
      ...DEFAULT_PLAYER_VARS,
      ...options,
    };
    this.loop = playerVars.loop === 1;

    this.player = new YT.Player(domID, {
      width,
      height,
      videoId,
      playerVars,
      events: {
        onReady: event => this.onReady.next(event),
        onStateChange: ({ data }) => {
          this.onStateChange.next(data);
          if (data === YoutubePlayer.STATE_ENDED && this.loop === 1) {
            this.playVideo();
          }
        },
      },
    });

    this.intervalId = setInterval(() => {
      this.onVideoProgress.next(this.getVideoLoadedFraction());
    }, 350);
  }
  /**
   * @param {string} event
   * @param {function} listener
   * @return {Subscriber}
   */
  subscribe(event:string, listener:Function) {
    const subject = this[`${event}Subject`];
    if (subject) {
      return subject.subscribe(listener);
    }
    return null;
  }
  cueVideoById(videoId:string, startSeconds:number, suggestedQuality) {
    this.player.cueVideoById(videoId, startSeconds, suggestedQuality);
  }
  loadVideoById(videoId:string, startSeconds:number, suggestedQuality) {
    this.player.loadVideoById(videoId, startSeconds, suggestedQuality);
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }
  stopVideo() {
    this.player.stopVideo();
  }
  seekTo(seconds:number, allowSeekAhead:boolean) {
    this.player.seekTo(seconds, allowSeekAhead);
  }
  setSize(width:number, height:number) {
    this.player.setSize(width, height);
  }
  getVideoLoadedFraction() {
    if (this.player && this.player.getVideoLoadedFraction) {
      return this.player.getVideoLoadedFraction();
    }
    return 0;
  }
  getPlayer() {
    return this.player;
  }
  destroy() {
    this.onReady.unsubscribe();
    this.onReady = null;
    this.onStateChange.unsubscribe();
    this.onStateChange = null;
    this.onVideoProgress.unsubscribe();
    this.onVideoProgress = null;
    this.player.destroy();
    this.player = null;
    clearInterval(this.intervalId);
    this.intervalId = -1;
  }
}


let loadYoutubeScriptPromise = null;
const loadYoutubeScript = () => {
  if (isAPIReady) {
    return Promise.resolve();
  }
  if (loadYoutubeScriptPromise) {
    return loadYoutubeScriptPromise;
  }
  loadYoutubeScriptPromise = new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = () => {
      isAPIReady = true;
      loadYoutubeScriptPromise = null;
      window.onYouTubeIframeAPIReady = null;
      delete window.onYouTubeIframeAPIReady;
      resolve();
    };
  });
  return loadYoutubeScriptPromise;
};


/**
 * @return {Promise}
 */
export const fetchScript = () => Observable.fromPromise(loadYoutubeScript());

export default YoutubePlayer;
