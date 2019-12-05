<template>
  <el-header class="fly-header clear-float">
    <div class="left fly-header-logo">
      <router-link to="/"><Logo :url="logoUrl"></Logo></router-link>
    </div>
    <div class="left">
      <slot></slot>
    </div>
    <div class="right fly-header-right">
      <div>
        <slot name="header-right"></slot>
      </div>
      <div><Logo :size="30"></Logo></div>
      <div><LoginBox></LoginBox></div>
    </div>
  </el-header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import Logo from "../Logo/index.vue";
import LoginBox from "../LoginBox/index.vue";
import logoImg from "../../assets/lufei.jpg";

@Component({
  components: {
    Logo,
    LoginBox
  }
})
export default class FHeader extends Vue {
  @Prop(Boolean)
  public mobile: boolean;

  private isMobile: boolean = false;
  private logoUrl: string = "";

  @Watch("mobile")
  private onMobile(bol: boolean) {
    this.isMobile = bol;
  }

  mounted() {
    this.onMobile(this.mobile);
    this.logoUrl = logoImg;
  }
}
</script>

<style lang="scss" scoped>
.fly-header {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #e6e6e6;
  }
  .fly-header-logo {
    > a {
      display: inline-block;
      height: 50px;
      padding: 5px 0;
      margin-right: 32px;
    }
  }
  .fly-header-right {
    line-height: 60px;
    > div {
      display: inline-block;
      margin-left: 8px;
      .el-avatar {
        vertical-align: middle;
      }
    }
  }
}
</style>
