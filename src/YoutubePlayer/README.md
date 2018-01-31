## YoutubePlayer
```js
import YoutubePlayer, { fetchScript } from 'anteater/YoutubePlayer';

// Create instance
let player;
fetchScript().subscribe(()=>{
  player = new YoutubePlayer('player', 'lG0Ys-2d4MA');
  player.onStateChange.subscribe((d) => {
    console.log(`stateChange:${d}`);
  });
});

// Destory
player.destory();
```

## API
```js
// https://developers.google.com/youtube/player_parameters
export type YoutubePlayerVars = {
  autoplay:number,
  controls:number,
  autohide:number,
  enablejsapi:number,
  loop:number,
  disablekb:number,
  fs:number,
  modestbranding:number,
  showinfo:number,
  rel:number,
}

// Methods
cueVideoById(videoId:string, startSeconds:number, suggestedQuality)
```