/**
 * 导航数据
 */

export interface INavs {
  icon: string;
  title: string;
  href: string;
  name: string;
  children?: Array<INavs>;
}

export const NAVS_LIST: INavs[] = [
  {
    icon: "el-icon-edit",
    title: "文章",
    href: "/blog/articles",
    name: "articles"
  },
  {
    icon: "el-icon-menu",
    title: "项目",
    href: "/blog/project",
    name: "project"
  },
  {
    icon: "el-icon-s-order",
    title: "归档",
    href: "/blog/log",
    name: "log"
  },
  {
    icon: "el-icon-s-operation",
    title: "历程",
    href: "/blog/timeLine",
    name: "timeLine"
  },
  {
    icon: "el-icon-ice-drink",
    title: "关于",
    href: "/blog/about",
    name: "about"
  }
];
