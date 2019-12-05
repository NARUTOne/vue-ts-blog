<template>
  <div class="fly-home">
    <ParticlesBg type="fountain" :num="3" :bg="true"></ParticlesBg>
    <div :class="mobile ? 'home-body home-body-mobile' : 'home-body'">
      <div class="home-logo">
        <Logo :size="100" :url="logoUrl"></Logo>
      </div>
      <div class="home-content">
        <h1>FLY-blog</h1>
        <div :class="mobile ? 'home-nav-mobile-box' : 'home-nav-box'">
          <Nav mode="horizontal" :dataSource="navs"></Nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ParticlesBg } from "particles-bg-vue";
import { State } from "vuex-class";
import Logo from "@/components/Logo/index.vue"; // @ is an alias to /src
import Nav from "@/components/Nav/index.vue";
import logoImg from "../../assets/lufei.jpg";
import { NAVS_LIST, INavs } from "@/mock/nav";

@Component({
  components: {
    Logo,
    Nav,
    ParticlesBg
  }
})
export default class Home extends Vue {
  @State("mobile") mobile: string;
  private logoUrl: string = "";
  private navs: INavs[] = [];

  mounted() {
    this.logoUrl = logoImg;
    this.navs = NAVS_LIST;
  }
}
</script>

<style lang="scss" scoped>
.fly-home {
  width: 100vw;
  height: 100vh;
  position: relative;
  .home-body {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9;
    height: 320px;
    width: 90%;
    padding: 20px 20px;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.35);
    .home-logo {
      margin-bottom: 32px;
      text-align: center;
    }
    .home-content {
      text-align: center;
      h1 {
        font-size: 36px;
      }
      .home-nav-box {
        width: 500px;
        margin: 0 auto;
      }
    }
  }
  .home-body-mobile {
    height: 400px;
  }
}
</style>
