<template>
  <el-footer class="footer">
    FLY's blog ©{{ year }} create by NARUTOne
  </el-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class FFooter extends Vue {
  private year: number = 2019;

  mounted(): void {
    this.year = new Date().getFullYear();
  }
}
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 20px;
  font-size: 14px;
}
</style>
