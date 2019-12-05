<template>
  <div class="fly-label">
    <div class="t-center label-top">
      <el-avatar :size="100" :src="topSrc" fit="fill"></el-avatar>
    </div>
    <div class="label-list">
      <template v-for="(item, i) in labels">
        <el-tag :key="i">{{ item }}</el-tag>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vueImg from "assets/vue.png";
import { LABELS } from "@/mock/label";

@Component({})
export default class Layout extends Vue {
  private topSrc: string = "";
  private labels: Array<string> = [];

  mounted() {
    this.topSrc = vueImg;
    this.labels = LABELS;
  }
}
</script>

<style scoped lang="scss">
.fly-label {
  > div {
    margin-bottom: 16px;
  }
  .label-list {
    .el-tag {
      margin: 8px;
    }
  }
}
</style>
