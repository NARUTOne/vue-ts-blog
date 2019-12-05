<template>
  <div class="wrapper">
    <el-container direction="vertical">
      <FHeader :mobile="mobile">
        <Nav mode="horizontal" :dataSource="navs" :mobile="mobile"></Nav>
      </FHeader>
      <el-container class="fly-layout-body">
        <el-main><router-view /></el-main>
        <el-aside v-show="!mobile" class="fly-layout-aside" width="400px">
          <TopLabel></TopLabel>
          <AboutLink></AboutLink>
        </el-aside>
      </el-container>
      <FFooter></FFooter>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import FHeader from "@/components/FHeader/index.vue";
import FFooter from "@/components/FFooter/index.vue";
import Nav from "@/components/Nav/index.vue";
import TopLabel from "./components/TopLabel.vue";
import AboutLink from "./components/AboutLink.vue";
import { NAVS_LIST, INavs } from "@/mock/nav";

@Component({
  components: {
    FHeader,
    FFooter,
    Nav,
    TopLabel,
    AboutLink
  }
})
export default class Layout extends Vue {
  @State("mobile") mobile: string;

  private navs: INavs[] = [];

  mounted() {
    this.navs = NAVS_LIST;
  }
}
</script>

<style lang="scss" scoped>
$hfAddH: 120px;
.wrapper {
  animation: wrapper--fade 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  height: 100vh;
  .fly-layout-body {
    min-height: calc(100vh - #{$hfAddH});
  }
  .fly-layout-aside {
    padding: 16px;
    border-left: 1px solid #e6e6e6;
  }
}
</style>
