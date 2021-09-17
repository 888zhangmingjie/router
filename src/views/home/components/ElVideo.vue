<template>
  <div class="box">
    <div class="iphone">
      <div class="pic"></div>
      <div class="mp4">
        <video
          poster="//ci.xiaohongshu.com/700a0de6-c9ee-4c1c-8e02-94e948d9f611"
          loop="loop"
          src="http://dc.xhscdn.com/a10d0710-80f1-11e9-9036-5948d2131083/new5.27.mp4"
          preload="auto"
          class="my-video"
          autoplay
        ></video>
      </div>
    </div>
    <div class="right">
      <div class="pic"></div>
      <h2>标记我的生活</h2>
      <div class="btn">
        <span>iOS 版</span>
        <span>Android 版</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "el-video",
};
</script>

<style lang='scss' scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -60%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  .iphone {
    width: 150px;
    height: 300px;
    .pic {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(https://ci.xiaohongshu.com/3ca6607e-d4a5-4cb9-b455-a746713d8283);
      background-repeat: no-repeat;
      background-size: contain;
      z-index: 111;
    }
    .mp4 {
      position: absolute;
      width: 150px;
      height: 300px;
      margin: 6px;
      border-radius: 10px;
      overflow: hidden;
      video {
        width: 139px;
        height: 286px;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 40px;
    .pic {
      width: 143px;
      height: 50px;
      background-image: url(//ci.xiaohongshu.com/83074709-0d05-4d1c-9d38-24a8e910d914);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
    }
    h2 {
      white-space: nowrap;
      color: #fff;
      font-size: 48px;
      font-weight: 500;
      margin: 13px 0 0;
    }
    .btn {
      margin-top: 36px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 40px;
        border-radius: 20px;
        background-color: #fff;
        margin-right: 15px;
        cursor: pointer;
        position: relative;
      }
    }
  }
}
</style>