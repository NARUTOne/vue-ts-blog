/**
 * ! vue render, fun-component
 * @params {render}
 * ? use render dom
 */
import { VNode } from "vue";

export default {
  name: "RenderDom",
  functional: true,
  props: {
    render: Function
  },
  render: <T>(h: T, ctx: T): VNode => {
    // 提供第二个参数作为上下文
    return ctx.props.render(h);
  }
};
