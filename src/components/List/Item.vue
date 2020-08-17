<template>
  <div class="fly-list-item">
    <div class="fly-list-item-main">
      <slot></slot>
      <template v-if="actionsData.length">
        <ul class="fly-list-item-action">
          <li v-for="(item, i) in actionsData" :key="i">
            <RenderDom :render="actionRender(item)"></RenderDom>
          </li>
        </ul>
      </template>
    </div>
    <div class="fly-list-item-extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { VNode } from "vue";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import RenderDom from "@/components/render";

@Component({
  components: {
    RenderDom
  }
})
export default class ListItem extends Vue {
  @Prop({
    type: Array,
    default: () => []
  })
  public actions: any[];
  @Prop(Function)
  public actionRender: (t: any) => VNode;

  private actionsData: Array<any> = [];

  @Watch("actions", {
    deep: true
  })
  private onActionsChange(data: Array<any>) {
    this.actionsData = data;
  }

  mounted() {
    this.onActionsChange(this.actions);
  }
}
</script>

<style scoped></style>
