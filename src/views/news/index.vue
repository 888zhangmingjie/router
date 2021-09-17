<template>
  <div>
    <banner
      src="https://ci.xiaohongshu.com/44c37c44-266f-4cff-a9fb-ad35d41cd9d3"
    >
      新闻中心
    </banner>
    <content-box
      v-for="(item, index) in newsGroup"
      :key="index"
      :title="item.title"
      :style="{ marginTop: '80px' }"
    >
      <news-list :list="item.list"
    /></content-box>
  </div>
</template>

<script>
import NewsList from "./components/NewsList.vue";
export default {
  name: "news",
  components: {
    NewsList,
  },
  data() {
    return {
      newsGroup: [
        {
          title: "热门报道",
          list: [
            {
              title: "民宿预定首次亮相小红书直播间 交易量转化率领跑行业",
              subTitle: "中国经济网",
              date: "2020.10,20",
            },
            {
              title:
                "小红书创始人瞿芳：品牌与用户沟通正从“教学模式”转向“恋爱模式”",
              subTitle: "新华网",
              date: "2020.10,20",
            },
            {
              title: "小红书啄木鸟计划处置账号7383个 处理21.3万篇笔记",
              subTitle: "中国日报网",
              date: "2020.10,20",
            },
            {
              title: "小红书：发力在线新经济 让年轻一代找到归属",
              subTitle: "人民网",
              date: "2020.10,20",
            },
          ],
        },
        {
          title: "近期动态",
          list: [
            {
              title: "民宿预定首次亮相小红书直播间 交易量转化率领跑行业",
              subTitle: "中国经济网",
              date: "2020.10,20",
            },
            {
              title:
                "小红书创始人瞿芳：品牌与用户沟通正从“教学模式”转向“恋爱模式”",
              subTitle: "新华网",
              date: "2020.10,20",
            },
            {
              title: "小红书啄木鸟计划处置账号7383个 处理21.3万篇笔记",
              subTitle: "中国日报网",
              date: "2020.10,20",
            },
            {
              title: "小红书：发力在线新经济 让年轻一代找到归属",
              subTitle: "人民网",
              date: "2020.10,20",
            },
          ],
        },
        {
          title: "荣誉奖项",
          list: [
            {
              title: "新商业引领者",
              subTitle: "36氪",
              date: "2020.10,20",
            },
            {
              title: "创始人瞿芳获“中国商业创变者50人”称号",
              subTitle: "36氪",
              date: "2020.10,20",
            },
            {
              title: "小红书啄木鸟计划处置账号7383个 处理21.3万篇笔记",
              subTitle: "中国日报网",
              date: "2020.10,20",
            },
            {
              title: "小红书：发力在线新经济 让年轻一代找到归属",
              subTitle: "人民网",
              date: "2020.10,20",
            },
          ],
        },
      ],
    };
  },
  //组件内首位
  beforeRouteLeave(to, from, next) {
    if (confirm("新闻没看完，确定要走")) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style>
</style>