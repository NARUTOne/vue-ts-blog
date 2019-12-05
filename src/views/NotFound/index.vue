<template>
  <div class="fly-404">
    <div class="fly-404-body-con">
      <div class="fly-404-body-con-bg"></div>
      <div class="fly-404-body-con-message">
        <p class="fly-404-body-con-message-info">此链接无法连线宇航员！</p>
        <p class="fly-404-body-con-message-text">您可以换个地址继续尝试哦</p>
      </div>
      <div class="fly-404-btn-con">
        <a href="/">前往地球 --> <i class="el-icon-ice-tea"></i></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "../../style/utils/variable.scss";

.bi-404 {
  width: 100vw;
  padding-top: 150px;
  text-align: center;
  height: 100vh;
  background-color: $ant-layout-bg;
  &-body-con {
    width: 700px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &-bg {
      display: block;
      width: 619px;
      height: 323px;
      margin: 0 auto;
      text-align: center;
      background: url("../../assets/404.png") no-repeat center bottom;
      animation-duration: 0.8s;
      animation-name: bounceOut;
    }
    &-message {
      text-align: center;
      &-info {
        font-size: 20px;
        color: $warn-color;
      }
      &-text {
        font-size: 16px;
        color: #999;
      }
    }
  }
  &-btn-con {
    text-align: center;
    padding: 20px 0;
    margin-bottom: 40px;
    font-size: 20px;
  }
}

@keyframes bounceOut {
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
</style>
