<template>
  <div id="app">
    <header-bar :theme="theme" />
    <router-view />
    <footer-bar />
  </div>
</template>
<script>
import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";

export default {
  components: {
    HeaderBar,
    FooterBar,
  },
  computed: {
    theme() {
      return this.$route.meta.theme;
    },
  },
};
</script>

<style lang="scss">
</style>
