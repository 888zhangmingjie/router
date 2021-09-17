<template>
  <div class="home-page">
    <video-bg />
    <el-video />
  </div>
</template>

<script>
import VideoBg from "./components/VideoBg.vue";
import ElVideo from "./components/ElVideo.vue";
export default {
  name: "home",
  components: {
    VideoBg,
    ElVideo,
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  width: 100vw;
  height: 100vh;
}
</style>