<template>
  <div>
    文章详情
    {{ $route.query.title }}
    <!-- {{ $route.params.id }} -->
  </div>
</template>

<script>
export default {
  name: "news-detail",
};
</script>

<style>
</style>