<template>
  <div class="fly-list-item-meta">
    <div class="fly-list-item-meta-avatar" v-if="avatar">
      <!-- 采用作用域插槽使用 -->
      <slot name="meta-avatar" :avatar="avatar"></slot>
    </div>
    <div class="fly-list-item-meta-content">
      <h4 class="fly-list-item-meta-title" v-if="title">
        <!-- 采用作用域插槽使用 -->
        <slot name="meta-title" :title="title"></slot>
      </h4>
      <div class="fly-list-item-meta-desc" v-if="desc">
        <!-- 采用作用域插槽使用 -->
        <slot name="meta-desc" :desc="desc"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ListItemMeta extends Vue {
  @Prop(String)
  public avatar: string;
  @Prop(String)
  public title: string;
  @Prop(String)
  public desc: string;
}
</script>

<style scoped lang="scss">
.fly-list-item-meta {
  display: flex;
  flex: 1;
  align-items: flex-start;
  font-size: 0;
  &-avatar {
    margin-right: 16px;
  }
  &-content {
    flex: 1 0;
    &-title {
      margin-bottom: 12px;
      color: rgba(0, 0, 0, 0.85);
      font-size: 16px;
      line-height: 24px;
    }
    &-desc {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
