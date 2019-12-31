<template>
  <div class="fly-about-link">
    <h3>相关链接</h3>
    <el-alert type="success" :closable="false">
      <a
        href="https://github.com/NARUTOne"
        target="_blank"
        slot="title"
        class="about-link"
      >
        <Logo :size="50" :url="githubSrc"></Logo>
        github个人主页：项目源码
      </a>
    </el-alert>
    <el-alert type="warning" :closable="false">
      <a
        slot="title"
        class="about-link"
        href="https://www.zhihu.com/people/wz-NARUTOne-27-70/activities"
        target="_blank"
      >
        <Logo :size="50" :url="zhihuSrc"></Logo>
        知乎个人主页：文章、blog
      </a>
    </el-alert>
    <el-alert type="info" :closable="false">
      <a
        href="https://juejin.im/user/599126fd518825484968b5fc"
        target="_blank"
        slot="title"
        class="about-link"
      >
        <Logo :size="50" :url="juejinSrc"></Logo>
        掘金个人主页：文章、blog
      </a>
    </el-alert>
    <el-alert type="error" :closable="false">
      <a
        href="https://www.jianshu.com/u/3bf902a64a29"
        target="_blank"
        slot="title"
        class="about-link"
      >
        <Logo :size="50" :url="jianshuSrc"></Logo>
        简书个人主页：文章、blog
      </a>
    </el-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo/index.vue";
import zhihuImg from "assets/zhihu.png";
import jianshuImg from "assets/jianshu.png";
import juejinImg from "assets/juejin.png";
import githubImg from "assets/github.png";

@Component({
  components: {
    Logo
  }
})
export default class AboutLink extends Vue {
  private zhihuSrc: string = "";
  private jianshuSrc: string = "";
  private juejinSrc: string = "";
  private githubSrc: string = "";

  mounted() {
    this.zhihuSrc = zhihuImg;
    this.jianshuSrc = jianshuImg;
    this.juejinSrc = juejinImg;
    this.githubSrc = githubImg;
  }
}
</script>

<style lang="scss" scoped>
.fly-about-link {
  .el-alert {
    margin: 8px 8px 16px;
    .about-link {
      > span {
        margin-right: 16px;
        vertical-align: middle;
      }
    }
  }
}
</style>
