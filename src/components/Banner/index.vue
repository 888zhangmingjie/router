<template>
  <div class="banner" :style="{ backgroundImage: `url(${src})` }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center center;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>