## YoutubePlayer/vue
```html
<script>
import YoutubePlayer from 'ml.anteater/YoutubePlayer/vue';
</script>

<template lang="pug">
YoutubePlayer(id="lG0Ys-2d4MA"
  :autoplay="true | false"
  @stateChange="stateChange"
  @videoProgress="onVideoProgress")
</template>
```

### API
|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|id|Video id|string|--|--|
|autoplay|autoplay|boolean|--|--|