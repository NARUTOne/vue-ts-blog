<template>
  <span>
    <i :class="iconClassname"></i>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

export default class IconText extends Vue {
  @Prop(String)
  public iconClass: string;

  private iconClassname: string = "";

  @Watch("iconClass")
  private onClassChange(clas: string) {
    this.iconClassname = clas;
  }

  mounted() {
    this.onClassChange(this.iconClassname);
  }
}
</script>

<style scoped></style>
