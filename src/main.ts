import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "@/utils/xhr.config";

import "@/style/index.scss";

import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Avatar,
  Row,
  Col,
  Timeline,
  TimelineItem,
  Card,
  Tag,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Dialog,
  Menu,
  MenuItem,
  Submenu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Loading,
  Backtop
} from "element-ui";

// 按需引用 element 组件
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Avatar);

Vue.use(Row);
Vue.use(Col);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Card);
Vue.use(Tag);

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);

Vue.use(Dialog);

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Backtop);

Vue.use(Loading.directive);

Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
