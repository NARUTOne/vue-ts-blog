<template>
  <el-avatar
    fit="fill"
    icon="el-icon-user-solid"
    :shape="imgShape"
    :size="imgSize"
    :src="imgUrl"
  ></el-avatar>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class Logo extends Vue {
  @Prop(String)
  public url: string;
  @Prop(String)
  public shape: string;
  @Prop({
    type: [String, Number],
    default: 50
  })
  public size: string | number;

  private imgUrl: string = "";
  private imgShape: string = "circle";
  private imgSize: string | number = 50;

  @Watch("url")
  private onUrl(url: string) {
    this.imgUrl = url;
  }
  @Watch("shape")
  private onShape(shape: string) {
    this.imgShape = shape;
  }
  @Watch("size")
  private onSizeChange(size: string | number) {
    this.imgSize = size;
  }

  mounted() {
    this.onUrl(this.url);
    this.onShape(this.shape);
    this.onSizeChange(this.size);
  }
}
</script>

<style scoped></style>
