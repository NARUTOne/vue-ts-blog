<template>
  <div class="fly-list">
    <div class="fly-list-header"><slot name="header"></slot></div>
    <div class="fly-list-body">
      <template v-if="listData.length">
        <template v-if="grid">
          <Row :gutter="getGrid('gutter')">
            <Col
              :span="getGrid('column')"
              :xs="getGrid('xs')"
              :sm="getGrid('sm')"
              :md="getGrid('md')"
              :lg="getGrid('lg')"
              :xl="getGrid('xl')"
              v-for="(item, i) in listData"
              :key="i"
            >
              <RenderDom :render="renderItem(item)"></RenderDom>
            </Col>
          </Row>
        </template>
        <template>
          <div v-for="(item, i) in listData" :key="i">
            <RenderDom :render="renderItem(item)"></RenderDom>
          </div>
        </template>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
    <div class="fly-list-footer"><slot name="footer"></slot></div>
  </div>
</template>

<script lang="ts">
import { VNode } from "vue";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import RenderDom from "@/components/render";
import { IGridTypes, ColumnType } from "./types";
import ListGrid from "./ListGrid.vue";

@Component({
  components: {
    RenderDom,
    ListGrid
  }
})
export default class List extends Vue {
  @Prop(Boolean)
  public bordered: boolean;
  @Prop(Object)
  public grid: IGridTypes;
  @Prop(Boolean)
  public split: boolean;
  @Prop({
    type: Array,
    default: () => []
  })
  public dataSource: Array<any>;
  @Prop(Function)
  public renderItem: (t: any) => VNode;

  private listData: Array<any> = [];

  @Watch("dataSource", {
    deep: true
  })
  private onListChange(data: Array<any>) {
    this.listData = data;
  }

  mounted() {
    this.onListChange(this.dataSource);
  }

  private getGrid(t: ColumnType): number | undefined {
    return this.grid[t] && Math.floor(24 / this.grid[t]!);
  }
}
</script>

<style scoped lang="scss"></style>
