## YoutubePlayerComponent
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

```html
<!-- html -->
YoutubePlayerComponent(id="lG0Ys-2d4MA" @stateChange="stateChange")
```