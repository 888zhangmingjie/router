<template>
  <div class="video-bg">
    <video
      poster="//ci.xiaohongshu.com/9e244c50-108b-41df-b649-537f318124a9"
      muted="muted"
      loop="loop"
      src="https://dc.xhscdn.com/9379abe0-7ad8-11e9-8794-9320f6c9d557/%E8%83%8C%E6%99%AF%E8%A7%86%E9%A2%91.mp4"
      preload="auto"
      class="my-video"
      autoplay
    ></video>
  </div>
</template>

<script>
export default {
  name: "video-bg",
};
</script>

<style lang="scss" scoped>
.video-bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  video {
    width: 100vw;
    margin: auto;
  }
}
</style>