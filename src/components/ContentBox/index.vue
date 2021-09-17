<template>
  <div class="content-wrap">
    <h2>{{ title }}</h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "content-box",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 50px;
  font-size: 36px;
  line-height: 50px;
  font-weight: 700;
  color: #333;
  text-align: center;
}
</style>