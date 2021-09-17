<template>
  <div class="footer">
    <nav>
      <a href="#">用户协议</a>
      <a href="#">隐私政策</a>
      <a href="#">侵权投诉指引</a>
    </nav>
    <div class="con">
      <p>
        沪ICP备 13030189号 Copyright © 2014-2021 行吟信息科技（上海）有限公司 |
        地址：上海市黄浦区马当路388号C座 | 电话：021-64224530 | 自营经营者信息 |
        2021 沪公网安备 31010102002533号
      </p>
      <p>
        网络文化经营许可证：沪网文［2021］1545-113号 |
        增值电信业务经营许可证：沪B2-20150021 | 网购(订餐)大家评
      </p>
      <p>
        医疗器械经营许可证：沪嘉食药监械经营许20187006号 |
        医疗器械网络交易服务第三方平台备案:（沪）网械平台备字[2019]第00006号 |
        互联网药品信息服务资格证书：(沪)-经营性-2018-0011
      </p>
      <p>
        违法不良信息举报电话：(027) 8700 3878 | 上海市互联网举报中心 |
        网上有害信息举报专区
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-bar",
};
</script>

<style lang="scss" scoped>
// .footer {
//   position: absolute;
//   bottom: 20px;
//   left: 0;
//   right: 0;
// }
nav {
  display: flex;
  justify-content: space-evenly;
  a {
    font-size: 16px;
    color: #333;
    margin: 30px 0;
    text-decoration: none;
  }
}
.con {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    color: #000;
    font-size: 12px;

    line-height: 15px;
  }
}
</style>