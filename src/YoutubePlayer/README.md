## YoutubePlayer
```js
import YoutubePlayer, { fetchScript } from 'ml.anteater/YoutubePlayer';

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

new YoutubePlayer(
  domID:string, 
  videoId:string, 
  width:number = 640, 
  height:number = 390, 
  options:YoutubePlayerVars | null = {})


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