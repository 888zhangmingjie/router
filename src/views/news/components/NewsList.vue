<template>
  <ul class="news-list">
    <li v-for="(item, index) in list" :key="index">
      <!-- 当传参为id时，item.title就是类似123这样的数组id或者是一个字符串 -->
      <!-- <router-link :to="'/detail?title=' + item.title">
        <h3>
          {{ item.title }}
          <small>{{ item.subTitle }}</small>
        </h3>
        <time>{{ item.date }}</time>
      </router-link> -->
      <router-link
        :to="{ path: '/detail', query: { title: item.title, aa: 123 } }"
      >
        <h3>
          {{ item.title }}
          <small>{{ item.subTitle }}</small>
        </h3>
        <time>{{ item.date }}</time>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "news-list",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.news-list {
  width: 940px;
  margin: 0 auto;
  line-height: 50px;
  a {
    display: flex;
    text-decoration: none;
    color: #333;
    h3 {
      flex: 1;
      display: flex;
      justify-content: space-between;
    }
    time {
      width: 200px;
      text-align: right;
    }
  }
}
</style>