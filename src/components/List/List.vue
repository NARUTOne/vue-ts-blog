<template>
  <div class="fly-list">
    <slot name="header">{{ header }}</slot>

    <slot name="footer">{{ footer }}</slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { IGrid } from "./types";

@Component({})
export default class List extends Vue {
  @Prop(Boolean)
  public bordered: boolean;
  @Prop(String)
  public header: string;
  @Prop(String)
  public footer: string;
  @Prop(Object)
  public grid: IGrid;
  @Prop(String)
  public itemLayout: string;
  @Prop(Boolean)
  public split: boolean;
  @Prop({
    type: Array,
    default: () => []
  })
  public dataSource: Array<any>;
  @Prop(String)
  public renderItem: string;
}
</script>

<style scoped lang="scss"></style>
