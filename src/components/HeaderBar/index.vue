<template>
  <div class="header-bar" :class="[theme]">
    <router-link to="/home">
      <img
        v-if="theme == 'white'"
        src="https://ci.xiaohongshu.com/5c6dec9a-8e4b-41f0-960b-0ae9493ea700"
        alt=""
      />
      <img
        v-else
        src="https://ci.xiaohongshu.com/49fd555a-b46b-49fd-b5a5-053fb4a536dc"
        alt=""
      />
    </router-link>
    <nav>
      <router-link v-for="(item, index) in menu" :key="index" :to="item.path">
        {{ item.text }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "header-bar",
  props: {
    theme: {
      type: String,
      dafault: "",
    },
  },
  data() {
    return {
      menu: [
        { path: "/home", text: "首页" },
        { path: "#", text: "社区精选" },
        { path: "#", text: "业务合作" },
        { path: "#", text: "创作者服务" },
        { path: "/news", text: "新闻中心" },
        { path: "/about", text: "关于我们" },
        { path: "/liability", text: "社会责任" },
        { path: "#", text: "加入我们" },
        { path: "#", text: "中文" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;
  height: 105px;
  box-sizing: border-box;
  z-index: 100;
  nav {
    a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      margin-left: 40px;
    }
  }
  &.black {
    position: relative;
    nav {
      a {
        color: #333;
      }
    }
  }
}
</style>